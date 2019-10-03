import { JSONSchema4, JSONSchema4Type, JSONSchema6, JSONSchema6Type, JSONSchema7, JSONSchema7Type } from 'json-schema';

export = $RefParser

/**
 * This is the default export of JSON Schema $Ref Parser. You can creates instances of this class using new $RefParser(), or you can just call its static methods.
 *
 * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md
 */
declare class $RefParser {

  /**
   * The `schema` property is the parsed/bundled/dereferenced JSON Schema object. This is the same value that is passed to the callback function (or Promise) when calling the parse, bundle, or dereference methods.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#schema
   */
  schema: $RefParser.JSONSchema<JSONSchema4 | JSONSchema6 | JSONSchema7>

  /**
   * The $refs property is a `$Refs` object, which lets you access all of the externally-referenced files in the schema, as well as easily get and set specific values in the schema using JSON pointers.
   *
   * This is the same value that is passed to the callback function (or Promise) when calling the `resolve` method.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#refs
   */
  $refs: $RefParser.$Refs

  /**
   * Dereferences all `$ref` pointers in the JSON Schema, replacing each reference with its resolved value. This results in a schema object that does not contain any `$ref` pointers. Instead, it's a normal JavaScript object tree that can easily be crawled and used just like any other JavaScript object. This is great for programmatic usage, especially when using tools that don't understand JSON references.
   *
   * The dereference method maintains object reference equality, meaning that all `$ref` pointers that point to the same object will be replaced with references to the same object. Again, this is great for programmatic usage, but it does introduce the risk of circular references, so be careful if you intend to serialize the schema using `JSON.stringify()`. Consider using the bundle method instead, which does not create circular references.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#dereferenceschema-options-callback
   *
   * @param schema A JSON Schema object, or the file path or URL of a JSON Schema file. See the `parse` method for more info.
   * @param options (optional)
   * @param callback (optional) A callback that will receive the dereferenced schema object
   */
  dereference<T>(schema: string | $RefParser.JSONSchema<T>, callback: $RefParser.SchemaCallback<T>): void;
  dereference<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  dereference<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  dereference<T>(schema: string | $RefParser.JSONSchema<T>): Promise<$RefParser.JSONSchema<T>>;
  dereference<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;
  dereference<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;

  /**
   * Dereferences all `$ref` pointers in the JSON Schema, replacing each reference with its resolved value. This results in a schema object that does not contain any `$ref` pointers. Instead, it's a normal JavaScript object tree that can easily be crawled and used just like any other JavaScript object. This is great for programmatic usage, especially when using tools that don't understand JSON references.
   *
   * The dereference method maintains object reference equality, meaning that all `$ref` pointers that point to the same object will be replaced with references to the same object. Again, this is great for programmatic usage, but it does introduce the risk of circular references, so be careful if you intend to serialize the schema using `JSON.stringify()`. Consider using the bundle method instead, which does not create circular references.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#dereferenceschema-options-callback
   *
   * @param schema A JSON Schema object, or the file path or URL of a JSON Schema file. See the `parse` method for more info.
   * @param options (optional)
   * @param callback (optional) A callback that will receive the dereferenced schema object
   */
  static dereference<T>(schema: string | $RefParser.JSONSchema<T>, callback: $RefParser.SchemaCallback<T>): void;
  static dereference<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  static dereference<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  static dereference<T>(schema: string | $RefParser.JSONSchema<T>): Promise<$RefParser.JSONSchema<T>>;
  static dereference<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;
  static dereference<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;

  /**
   * Bundles all referenced files/URLs into a single schema that only has internal `$ref` pointers. This lets you split-up your schema however you want while you're building it, but easily combine all those files together when it's time to package or distribute the schema to other people. The resulting schema size will be small, since it will still contain internal JSON references rather than being fully-dereferenced.
   *
   * This also eliminates the risk of circular references, so the schema can be safely serialized using `JSON.stringify()`.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#bundleschema-options-callback
   *
   * @param schema A JSON Schema object, or the file path or URL of a JSON Schema file. See the `parse` method for more info.
   * @param options (optional)
   * @param callback (optional) A callback that will receive the bundled schema object
   */
  bundle<T>(schema: string | $RefParser.JSONSchema<T>, callback: $RefParser.SchemaCallback<T>): void;
  bundle<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  bundle<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  bundle<T>(schema: string | $RefParser.JSONSchema<T>): Promise<$RefParser.JSONSchema<T>>;
  bundle<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;
  bundle<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;

  /**
   * Bundles all referenced files/URLs into a single schema that only has internal `$ref` pointers. This lets you split-up your schema however you want while you're building it, but easily combine all those files together when it's time to package or distribute the schema to other people. The resulting schema size will be small, since it will still contain internal JSON references rather than being fully-dereferenced.
   *
   * This also eliminates the risk of circular references, so the schema can be safely serialized using `JSON.stringify()`.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#bundleschema-options-callback
   *
   * @param schema A JSON Schema object, or the file path or URL of a JSON Schema file. See the `parse` method for more info.
   * @param options (optional)
   * @param callback (optional) A callback that will receive the bundled schema object
   */
  static bundle<T>(schema: string | $RefParser.JSONSchema<T>, callback: $RefParser.SchemaCallback<T>): void;
  static bundle<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  static bundle<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  static bundle<T>(schema: string | $RefParser.JSONSchema<T>): Promise<$RefParser.JSONSchema<T>>;
  static bundle<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;
  static bundle<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;

  /**
   * *This method is used internally by other methods, such as `bundle` and `dereference`. You probably won't need to call this method yourself.*
   *
   * Parses the given JSON Schema file (in JSON or YAML format), and returns it as a JavaScript object. This method `does not` resolve `$ref` pointers or dereference anything. It simply parses one file and returns it.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#parseschema-options-callback
   *
   * @param schema A JSON Schema object, or the file path or URL of a JSON Schema file. The path can be absolute or relative. In Node, the path is relative to `process.cwd()`. In the browser, it's relative to the URL of the page.
   * @param options (optional)
   * @param callback (optional) A callback that will receive the parsed schema object, or an error
   */
  parse<T>(schema: string | $RefParser.JSONSchema<T>, callback: $RefParser.SchemaCallback<T>): void;
  parse<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  parse<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  parse<T>(schema: string | $RefParser.JSONSchema<T>): Promise<$RefParser.JSONSchema<T>>;
  parse<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;
  parse<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;

  /**
   * *This method is used internally by other methods, such as `bundle` and `dereference`. You probably won't need to call this method yourself.*
   *
   * Parses the given JSON Schema file (in JSON or YAML format), and returns it as a JavaScript object. This method `does not` resolve `$ref` pointers or dereference anything. It simply parses one file and returns it.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#parseschema-options-callback
   *
   * @param schema A JSON Schema object, or the file path or URL of a JSON Schema file. The path can be absolute or relative. In Node, the path is relative to `process.cwd()`. In the browser, it's relative to the URL of the page.
   * @param options (optional)
   * @param callback (optional) A callback that will receive the parsed schema object, or an error
   */
  static parse<T>(schema: string | $RefParser.JSONSchema<T>, callback: $RefParser.SchemaCallback<T>): void;
  static parse<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  static parse<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.SchemaCallback<T>): void;
  static parse<T>(schema: string | $RefParser.JSONSchema<T>): Promise<$RefParser.JSONSchema<T>>;
  static parse<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;
  static parse<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.JSONSchema<T>>;

  /**
   * *This method is used internally by other methods, such as `bundle` and `dereference`. You probably won't need to call this method yourself.*
   *
   * Resolves all JSON references (`$ref` pointers) in the given JSON Schema file. If it references any other files/URLs, then they will be downloaded and resolved as well. This method **does not** dereference anything. It simply gives you a `$Refs` object, which is a map of all the resolved references and their values.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#resolveschema-options-callback
   *
   * @param schema A JSON Schema object, or the file path or URL of a JSON Schema file. See the `parse` method for more info.
   * @param options (optional)
   * @param callback (optional) A callback that will receive a `$Refs` object
   */
  resolve<T>(schema: string | $RefParser.JSONSchema<T>, callback: $RefParser.$RefsCallback): void;
  resolve<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.$RefsCallback): void;
  resolve<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.$RefsCallback): void;
  resolve<T>(schema: string | $RefParser.JSONSchema<T>): Promise<$RefParser.$Refs>;
  resolve<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.$Refs>;
  resolve<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.$Refs>;

  /**
   * *This method is used internally by other methods, such as `bundle` and `dereference`. You probably won't need to call this method yourself.*
   *
   * Resolves all JSON references (`$ref` pointers) in the given JSON Schema file. If it references any other files/URLs, then they will be downloaded and resolved as well. This method **does not** dereference anything. It simply gives you a `$Refs` object, which is a map of all the resolved references and their values.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/ref-parser.md#resolveschema-options-callback
   *
   * @param schema A JSON Schema object, or the file path or URL of a JSON Schema file. See the `parse` method for more info.
   * @param options (optional)
   * @param callback (optional) A callback that will receive a `$Refs` object
   */
  static resolve<T>(schema: string | $RefParser.JSONSchema<T>, callback: $RefParser.$RefsCallback): void;
  static resolve<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.$RefsCallback): void;
  static resolve<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options, callback: $RefParser.$RefsCallback): void;
  static resolve<T>(schema: string | $RefParser.JSONSchema<T>): Promise<$RefParser.$Refs>;
  static resolve<T>(schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.$Refs>;
  static resolve<T>(baseUrl: string, schema: string | $RefParser.JSONSchema<T>, options: $RefParser.Options): Promise<$RefParser.$Refs>;
}

declare namespace $RefParser {

  export type JSONSchema<O extends JSONSchema4 | JSONSchema6 | JSONSchema7> =
    O extends JSONSchema4 ? JSONSchema4 :
    O extends JSONSchema6 ? JSONSchema6 :
    O extends JSONSchema7 ? JSONSchema7 : unknown;

  export type JSONSchemaType = JSONSchema4Type | JSONSchema6Type | JSONSchema7Type
  export type SchemaCallback<T> = (err: Error | null, schema?: JSONSchema<T>) => any;
  export type $RefsCallback = (err: Error | null, $refs?: $Refs) => any;

  /**
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/options.md
   */
  export type Options = {

    /**
     * The `parse` options determine how different types of files will be parsed.
     *
     * JSON Schema `$Ref` Parser comes with built-in JSON, YAML, plain-text, and binary parsers, any of which you can configure or disable. You can also add your own custom parsers if you want.
     */
    parse?: {
      json?: ParserOptions | boolean
      yaml?: ParserOptions | boolean
      text?: (ParserOptions & { encoding?: string }) | boolean
      [key: string]: ParserOptions | boolean | undefined
    }

    /**
     * The `resolve` options control how JSON Schema $Ref Parser will resolve file paths and URLs, and how those files will be read/downloaded.
     *
     * JSON Schema `$Ref` Parser comes with built-in support for HTTP and HTTPS, as well as support for local files (when running in Node.js). You can configure or disable either of these built-in resolvers. You can also add your own custom resolvers if you want.
     */
    resolve?: {

      /**
       * Determines whether external $ref pointers will be resolved. If this option is disabled, then external `$ref` pointers will simply be ignored.
       */
      external?: boolean
      file?: Partial<ResolverOptions> | boolean
      http?: HTTPResolverOptions | boolean
    }

    /**
     * The `dereference` options control how JSON Schema `$Ref` Parser will dereference `$ref` pointers within the JSON schema.
     */
    dereference?: {

      /**
       * Determines whether circular `$ref` pointers are handled.
       *
       * If set to `false`, then a `ReferenceError` will be thrown if the schema contains any circular references.
       *
       * If set to `"ignore"`, then circular references will simply be ignored. No error will be thrown, but the `$Refs.circular` property will still be set to `true`.
       */
      circular?: boolean | 'ignore'
    }
  }

  export interface HTTPResolverOptions extends Partial<ResolverOptions> {

    /**
     * You can specify any HTTP headers that should be sent when downloading files. For example, some servers may require you to set the `Accept` or `Referrer` header.
     */
    headers?: object

    /**
     * The amount of time (in milliseconds) to wait for a response from the server when downloading files. The default is 5 seconds.
     */
    timeout?: number

    /**
     * The maximum number of HTTP redirects to follow per file. The default is 5. To disable automatic following of redirects, set this to zero.
     */
    redirects?: number

    /**
     * Set this to `true` if you're downloading files from a CORS-enabled server that requires authentication
     */
    withCredentials?: boolean
  }

  /**
   * JSON Schema `$Ref` Parser comes with built-in resolvers for HTTP and HTTPS URLs, as well as local filesystem paths (when running in Node.js). You can add your own custom resolvers to support additional protocols, or even replace any of the built-in resolvers with your own custom implementation.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/plugins/resolvers.md
   */
  export interface ResolverOptions {

    /**
     * All resolvers have an order property, even the built-in resolvers. If you don't specify an order property, then your resolver will run last. Specifying `order: 1`, like we did in this example, will make your resolver run first. Or you can squeeze your resolver in-between some of the built-in resolvers. For example, `order: 101` would make it run after the file resolver, but before the HTTP resolver. You can see the order of all the built-in resolvers by looking at their source code.
     *
     * The order property and canRead property are related to each other. For each file that JSON Schema $Ref Parser needs to resolve, it first determines which resolvers can read that file by checking their canRead property. If only one resolver matches a file, then only that one resolver is called, regardless of its order. If multiple resolvers match a file, then those resolvers are tried in order until one of them successfully reads the file. Once a resolver successfully reads the file, the rest of the resolvers are skipped.
     */
    order?: number

    /**
     * The `canRead` property tells JSON Schema `$Ref` Parser what kind of files your resolver can read. In this example, we've simply specified a regular expression that matches "mogodb://" URLs, but we could have used a simple boolean, or even a function with custom logic to determine which files to resolve. Here are examples of each approach:
     */
    canRead: boolean | RegExp | string | string[] | ((file: FileInfo) => boolean)

    /**
     * This is where the real work of a resolver happens. The `read` method accepts the same file info object as the `canRead` function, but rather than returning a boolean value, the `read` method should return the contents of the file. The file contents should be returned in as raw a form as possible, such as a string or a byte array. Any further parsing or processing should be done by parsers.
     *
     * Unlike the `canRead` function, the `read` method can also be asynchronous. This might be important if your resolver needs to read data from a database or some other external source. You can return your asynchronous value using either an ES6 Promise or a Node.js-style error-first callback. Of course, if your resolver has the ability to return its data synchronously, then that's fine too. Here are examples of all three approaches:
     */
    read(
      file: FileInfo,
      callback?: (error: Error | null, data: string | null) => any
    ): string | Buffer | Promise<string | Buffer>
  }

  export interface ParserOptions {

    /**
     * Parsers run in a specific order, relative to other parsers. For example, a parser with `order: 5` will run before a parser with `order: 10`. If a parser is unable to successfully parse a file, then the next parser is tried, until one succeeds or they all fail.
     *
     * You can change the order in which parsers run, which is useful if you know that most of your referenced files will be a certain type, or if you add your own custom parser that you want to run first.
     */
    order?: number

    /**
     * All of the built-in parsers allow empty files by default. The JSON and YAML parsers will parse empty files as `undefined`. The text parser will parse empty files as an empty string. The binary parser will parse empty files as an empty byte array.
     *
     * You can set `allowEmpty: false` on any parser, which will cause an error to be thrown if a file empty.
     */
    allowEmpty?: boolean

    /**
     * Determines which parsers will be used for which files.
     *
     * A regular expression can be used to match files by their full path. A string (or array of strings) can be used to match files by their file extension. Or a function can be used to perform more complex matching logic. See the custom parser docs for details.
     */
    canParse?: boolean | RegExp | string | string[] | ((file: FileInfo) => boolean)
  }

  /**
   * JSON Schema `$Ref` Parser supports plug-ins, such as resolvers and parsers. These plug-ins can have methods such as `canRead()`, `read()`, `canParse()`, and `parse()`. All of these methods accept the same object as their parameter: an object containing information about the file being read or parsed.
   *
   * The file info object currently only consists of a few properties, but it may grow in the future if plug-ins end up needing more information.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/plugins/file-info-object.md
   */
  export interface FileInfo {

    /**
     * The full URL of the file. This could be any type of URL, including "http://", "https://", "file://", "ftp://", "mongodb://", or even a local filesystem path (when running in Node.js).
     */
    url: string

    /**
     * The lowercase file extension, such as ".json", ".yaml", ".txt", etc.
     */
    extension: string

    /**
     * The raw file contents, in whatever form they were returned by the resolver that read the file.
     */
    data: string | Buffer
  }

  /**
   * When you call the resolve method, the value that gets passed to the callback function (or Promise) is a $Refs object. This same object is accessible via the parser.$refs property of $RefParser objects.
   *
   * This object is a map of JSON References and their resolved values. It also has several convenient helper methods that make it easy for you to navigate and manipulate the JSON References.
   *
   * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/refs.md
   */
  export class $Refs {
    /**
     * This property is true if the schema contains any circular references. You may want to check this property before serializing the dereferenced schema as JSON, since JSON.stringify() does not support circular references by default.
     *
     * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/refs.md#circular
     */
    circular: boolean

    /**
     * A map of paths/urls to {@link $Ref} objects
     *
     * @type {object}
     * @protected
     */
    _$refs: {
      [path: string]: $Ref
    }

    /**
     * The {@link $Ref} object that is the root of the JSON schema.
     *
     * @type {$Ref}
     * @protected
     */
    _root$Ref: $Ref

    /**
     * Returns the paths/URLs of all the files in your schema (including the main schema file).
     *
     * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/refs.md#pathstypes
     *
     * @param types (optional) Optionally only return certain types of paths ("file", "http", etc.)
     */
    paths(...types: string[]): string[]

    /**
     * Returns a map of paths/URLs and their correspond values.
     *
     * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/refs.md#valuestypes
     *
     * @param types (optional) Optionally only return values from certain locations ("file", "http", etc.)
     */
    values(...types: string[]): { [url: string]: $RefParser.JSONSchema<JSONSchema4 | JSONSchema6 | JSONSchema7> }

    /**
     * Returns `true` if the given path exists in the schema; otherwise, returns `false`
     *
     * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/refs.md#existsref
     *
     * @param $ref The JSON Reference path, optionally with a JSON Pointer in the hash
     */
    exists($ref: string): boolean

    /**
     * Gets the value at the given path in the schema. Throws an error if the path does not exist.
     *
     * See https://github.com/APIDevTools/json-schema-ref-parser/blob/master/docs/refs.md#getref
     *
     * @param $ref The JSON Reference path, optionally with a JSON Pointer in the hash
     */
    get($ref: string): JSONSchemaType

    /**
     * Sets the value at the given path in the schema. If the property, or any of its parents, don't exist, they will be created.
     *
     * @param $ref The JSON Reference path, optionally with a JSON Pointer in the hash
     * @param value The value to assign. Can be anything (object, string, number, etc.)
     */
    set($ref: string, value: JSONSchemaType): void

    /**
     * Returns the specified {@link $Ref} object, or undefined.
     *
     * @param {string} path - The path being resolved, optionally with a JSON pointer in the hash
     * @returns {$Ref|undefined}
     * @protected
     */
    _get$Ref(path: string): $Ref | undefined
  }

  export class $Ref {
    /**
     * The file path or URL of the referenced file.
     * This path is relative to the path of the main JSON schema file.
     *
     * This path does NOT contain document fragments (JSON pointers). It always references an ENTIRE file.
     * Use methods such as {@link $Ref#get}, {@link $Ref#resolve}, and {@link $Ref#exists} to get
     * specific JSON pointers within the file.
     *
     * @type {string}
     */
    path: string

    /**
     * The resolved value of the JSON reference.
     * Can be any JSON type, not just objects. Unknown file types are represented as Buffers (byte arrays).
     * @type {?*}
     */
    value?: unknown

    /**
     * The {@link $Refs} object that contains this {@link $Ref} object.
     * @type {$Refs}
     */
    $refs: $Refs

    /**
     * Indicates the type of {@link $Ref#path} (e.g. "file", "http", etc.)
     * @type {?string}
     */
    pathType?: string

    /**
     * Determines whether the given JSON reference exists within this {@link $Ref#value}.
     *
     * @param {string} path - The full path being resolved, optionally with a JSON pointer in the hash
     * @param {$RefParserOptions} options
     * @returns {boolean}
     */
    exists(path: string, options: $RefParser.Options): boolean

    /**
     * Resolves the given JSON reference and returns the resolved value.
     *
     * @param {string} path - The path being resolved, with a JSON pointer in the hash
     * @param {$RefParserOptions} [options]
     * @returns {*} - Returns the resolved value
     */
    get(path: string, options: $RefParser.Options): unknown

    /**
     * Sets the value of a nested property within this {@link $Ref#value}.
     * If the property, or any of its parents don't exist, they will be created.
     *
     * @param {string} path - The path of the property to set, optionally with a JSON pointer in the hash
     * @param {*} value - The value to assign
     */
    set(path: string, value: unknown): void

    /**
     * Determines whether the given value is a JSON reference that "extends" its resolved value.
     * That is, it has extra properties (in addition to "$ref"), so rather than simply pointing to
     * an existing value, this $ref actually creates a NEW value that is a shallow copy of the resolved
     * value, plus the extra properties.
     *
     * @example:
     *  {
     *    person: {
     *      properties: {
     *        firstName: { type: string }
     *        lastName: { type: string }
     *      }
     *    }
     *    employee: {
     *      properties: {
     *        $ref: #/person/properties
     *        salary: { type: number }
     *      }
     *    }
     *  }
     *
     *  In this example, "employee" is an extended $ref, since it extends "person" with an additional
     *  property (salary).  The result is a NEW value that looks like this:
     *
     *  {
     *    properties: {
     *      firstName: { type: string }
     *      lastName: { type: string }
     *      salary: { type: number }
     *    }
     *  }
     *
     * @param {*} value - The value to inspect
     * @returns {boolean}
     */
    static isExtended$Ref(value: any): boolean

    /**
     * Returns the resolved value of a JSON Reference.
     * If necessary, the resolved value is merged with the JSON Reference to create a new object
     *
     * @example:
     *  {
     *    person: {
     *      properties: {
     *        firstName: { type: string }
     *        lastName: { type: string }
     *      }
     *    }
     *    employee: {
     *      properties: {
     *        $ref: #/person/properties
     *        salary: { type: number }
     *      }
     *    }
     *  }
     *
     *  When "person" and "employee" are merged, you end up with the following object:
     *
     *  {
     *    properties: {
     *      firstName: { type: string }
     *      lastName: { type: string }
     *      salary: { type: number }
     *    }
     *  }
     *
     * @param {object} $ref - The JSON reference object (the one with the "$ref" property)
     * @param {*} resolvedValue - The resolved value, which can be any type
     * @returns {*} - Returns the dereferenced value
     */
    static dereference($ref: $Ref, resolvedValue: any): any

    /**
     * Determines whether the given value is a JSON reference, and whether it is allowed by the options.
     * For example, if it references an external file, then options.resolve.external must be true.
     *
     * @param {*} value - The value to inspect
     * @param {$RefParserOptions} options
     * @returns {boolean}
     */
    static isAllowed$Ref(value: any, options: $RefParser.Options): boolean
  }
}
