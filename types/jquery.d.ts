/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

type BoundFunction = (this: HTMLElement) => void;
/**
 * Interface for the AJAX setting that will configure the AJAX request
 * @see {@link https://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings}
 */
type JQueryBaseSettings<Context = any> = {
  /**
   * The content type sent in the request header that tells the server what kind of response it will accept in return. If the accepts setting needs modification, it is recommended to do so once in the $.ajaxSetup() method.
   */
  accepts?: any;
  /**
   * By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false. Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation. Note that synchronous requests may temporarily lock the browser, disabling any actions while the request is active. As of jQuery 1.8, the use of async: false with jqXHR ($.Deferred) is deprecated; you must use the success/error/complete callback options instead of the corresponding methods of the jqXHR object such as jqXHR.done() or the deprecated jqXHR.success().
   */
  async?: boolean | undefined;
  /**
   * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless of the type of request.
   */
  beforeSend?: (
    jqXHR: JQueryXHR<Context>,
    settings: JQueryAjaxSettings<Context>,
  ) => any;
  /**
   * If set to false, it will force requested pages not to be cached by the browser. Note: Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}" to the GET parameters. The parameter is not needed for other types of requests, except in IE8 when a POST is made to a URL that has already been requested by a GET.
   */
  cache?: boolean | undefined;
  /**
   * A function to be called when the request finishes (after success and error callbacks are executed). The function gets passed two arguments: The jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object and a string categorizing the status of the request ("success", "notmodified", "error", "timeout", "abort", or "parsererror"). As of jQuery 1.5, the complete setting can accept an array of functions. Each function will be called in turn. This is an Ajax Event.
   */
  complete?: (jqXHR: JQueryXHR<Context>, textStatus: string) => any;
  /**
   * An object of string/regular-expression pairs that determine how jQuery will parse the response, given its content type. (version added: 1.5)
   */
  contents?: { [key: string]: any } | undefined;
  // According to jQuery.ajax source code, ajax's option actually allows contentType to set to "false"
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/742
  /**
   * When sending data to the server, use this content type. Default is "application/x-www-form-urlencoded; charset=UTF-8", which is fine for most cases. If you explicitly pass in a content-type to $.ajax(), then it is always sent to the server (even if no data is sent). The W3C XMLHttpRequest specification dictates that the charset is always UTF-8; specifying another charset will not force the browser to change the encoding.
   */
  contentType?: any;
  /**
   * An object containing dataType-to-dataType converters. Each converter's value is a function that returns the transformed value of the response. (version added: 1.5)
   */
  converters?: { [key: string]: any } | undefined;
  /**
   * If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of crossDomain to true. This allows, for example, server-side redirection to another domain. (version added: 1.5)
   */
  crossDomain?: boolean | undefined;
  /**
   * Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. Object must be key-value pairs. If value is an Array, jQuery serializes multiple values with same key based on the value of the traditional setting (described below).
   */
  data?: any;
  /**
   * A function to be used to handle the raw response data of XMLHttpRequest.This is a pre-filtering function to sanitize the response. You should return the sanitized data. The function accepts two arguments: The raw data returned from the server and the 'dataType' parameter.
   */
  dataFilter?: (data: any, ty: any) => any;
  /**
   * The type of data that you're expecting back from the server. If none is specified, jQuery will try to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be returned as a string).
   */
  dataType?: string | undefined;
  /**
   * A function to be called if the request fails. The function receives three arguments: The jqXHR (in jQuery 1.4.x, XMLHttpRequest) object, a string describing the type of error that occurred and an optional exception object, if one occurred. Possible values for the second argument (besides null) are "timeout", "error", "abort", and "parsererror". When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error." As of jQuery 1.5, the error setting can accept an array of functions. Each function will be called in turn. Note: This handler is not called for cross-domain script and cross-domain JSONP requests. This is an Ajax Event.
   */
  error?: (
    jqXHR: JQueryXHR<Context>,
    textStatus: string,
    errorThrown: string,
  ) => any;
  /**
   * Whether to trigger global Ajax event handlers for this request. The default is true. Set to false to prevent the global handlers like ajaxStart or ajaxStop from being triggered. This can be used to control various Ajax Events.
   */
  global?: boolean | undefined;
  /**
   * An object of additional header key/value pairs to send along with requests using the XMLHttpRequest transport. The header X-Requested-With: XMLHttpRequest is always added, but its default XMLHttpRequest value can be changed here. Values in the headers setting can also be overwritten from within the beforeSend function. (version added: 1.5)
   */
  headers?: { [key: string]: any } | undefined;
  /**
   * Allow the request to be successful only if the response has changed since the last request. This is done by checking the Last-Modified header. Default value is false, ignoring the header. In jQuery 1.4 this technique also checks the 'etag' specified by the server to catch unmodified data.
   */
  ifModified?: boolean | undefined;
  /**
   * Allow the current environment to be recognized as "local," (e.g. the filesystem), even if jQuery does not recognize it as such by default. The following protocols are currently recognized as local: file, *-extension, and widget. If the isLocal setting needs modification, it is recommended to do so once in the $.ajaxSetup() method. (version added: 1.5.1)
   */
  isLocal?: boolean | undefined;
  /**
   * Override the callback function name in a jsonp request. This value will be used instead of 'callback' in the 'callback=?' part of the query string in the url. So {jsonp:'onJSONPLoad'} would result in 'onJSONPLoad=?' passed to the server. As of jQuery 1.5, setting the jsonp option to false prevents jQuery from adding the "?callback" string to the URL or attempting to use "=?" for transformation. In this case, you should also explicitly set the jsonpCallback setting. For example, { jsonp: false, jsonpCallback: "callbackName" }
   */
  jsonp?: any;
  /**
   * Specify the callback function name for a JSONP request. This value will be used instead of the random name automatically generated by jQuery. It is preferable to let jQuery generate a unique name as it'll make it easier to manage the requests and provide callbacks and error handling. You may want to specify the callback when you want to enable better browser caching of GET requests. As of jQuery 1.5, you can also use a function for this setting, in which case the value of jsonpCallback is set to the return value of that function.
   */
  jsonpCallback?: any;
  /**
   * The HTTP method to use for the request (e.g. "POST", "GET", "PUT"). (version added: 1.9.0)
   */
  method?: string | undefined;
  /**
   * A MIME type to override the XHR MIME type. (version added: 1.5.1)
   */
  mimeType?: string | undefined;
  /**
   * A password to be used with XMLHttpRequest in response to an HTTP access authentication request.
   */
  password?: string | undefined;
  /**
   * By default, data passed in to the data option as an object (technically, anything other than a string) will be processed and transformed into a query string, fitting to the default content-type "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data, set this option to false.
   */
  processData?: boolean | undefined;
  /**
   * Only applies when the "script" transport is used (e.g., cross-domain requests with "jsonp" or "script" dataType and "GET" type). Sets the charset attribute on the script tag used in the request. Used when the character set on the local page is not the same as the one on the remote script.
   */
  scriptCharset?: string | undefined;
  /**
   * An object of numeric HTTP codes and functions to be called when the response has the corresponding code. f the request is successful, the status code functions take the same parameters as the success callback; if it results in an error (including 3xx redirect), they take the same parameters as the error callback. (version added: 1.5)
   */
  statusCode?: { [key: string]: any } | undefined;
  /**
   * A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server, formatted according to the dataType parameter; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object. As of jQuery 1.5, the success setting can accept an array of functions. Each function will be called in turn. This is an Ajax Event.
   */
  success?: (data: any, textStatus: string, jqXHR: JQueryXHR<Context>) => any;
  /**
   * Set a timeout (in milliseconds) for the request. This will override any global timeout set with $.ajaxSetup(). The timeout period starts at the point the $.ajax call is made; if several other requests are in progress and the browser has no connections available, it is possible for a request to time out before it can be sent. In jQuery 1.4.x and below, the XMLHttpRequest object will be in an invalid state if the request times out; accessing any object members may throw an exception. In Firefox 3.0+ only, script and JSONP requests cannot be cancelled by a timeout; the script will run even if it arrives after the timeout period.
   */
  timeout?: number | undefined;
  /**
   * Set this to true if you wish to use the traditional style of parameter serialization.
   */
  traditional?: boolean | undefined;
  /**
   * The type of request to make ("POST" or "GET"), default is "GET". Note: Other HTTP request methods, such as PUT and DELETE, can also be used here, but they are not supported by all browsers.
   */
  type?: string | undefined;
  /**
   * A string containing the URL to which the request is sent.
   */
  url?: string | undefined;
  /**
   * A username to be used with XMLHttpRequest in response to an HTTP access authentication request.
   */
  username?: string | undefined;
  /**
   * Callback for creating the XMLHttpRequest object. Defaults to the ActiveXObject when available (IE), the XMLHttpRequest otherwise. Override to provide your own implementation for XMLHttpRequest or enhancements to the factory.
   */
  xhr?: any;
  /**
   * An object of fieldName-fieldValue pairs to set on the native XHR object. For example, you can use it to set withCredentials to true for cross-domain requests if needed. In jQuery 1.5, the withCredentials property was not propagated to the native XHR and thus CORS requests requiring it would ignore this flag. For this reason, we recommend using jQuery 1.5.1+ should you require the use of it. (version added: 1.5.1)
   */
  xhrFields?: { [key: string]: any } | undefined;
};

type JQueryAjaxSettings<Context = JQueryBaseSettings> = {
  /**
   * This object will be made the context of all Ajax-related callbacks. By default, the context is an object that represents the ajax settings used in the call ($.ajaxSettings merged with the settings passed to $.ajax).
   */
  context?: Context;
} & JQueryBaseSettings<Context>;

/**
 * Interface for the jqXHR object
 * @see {@link https://api.jquery.com/jQuery.ajax/#jqXHR}
 */
type JQueryXHR<C = any> = {
  /**
   * The .overrideMimeType() method may be used in the beforeSend() callback function, for example, to modify the response content-type header. As of jQuery 1.5.1, the jqXHR object also contains the overrideMimeType() method (it was available in jQuery 1.4.x, as well, but was temporarily removed in jQuery 1.5).
   */
  overrideMimeType: (mimeType: string) => any;
  /**
   * Cancel the request.
   *
   * @param statusText A string passed as the textStatus parameter for the done callback. Default value: "canceled"
   */
  abort: (statusText?: string) => void;
  /**
   * Incorporates the functionality of the .done() and .fail() methods, allowing (as of jQuery 1.8) the underlying Promise to be manipulated. Refer to deferred.then() for implementation details.
   */
  then: <R>(
    doneCallback: (
      data: any,
      textStatus: string,
      jqXHR: JQueryXHR<C>,
    ) => R | JQueryPromise<R, C>,
    failCallback?: (
      jqXHR: JQueryXHR<C>,
      textStatus: string,
      errorThrown: any,
    ) => void,
  ) => JQueryPromise<R, C>;
  /**
   * Property containing the parsed response if the response content type is json
   */
  responseJSON?: any;
  /**
   * A function to be called if the request fails.
   */
  error: (xhr: JQueryXHR<C>, textStatus: string, errorThrown: string) => void;
} & XMLHttpRequest & JQueryPromise<any, C>;

/**
 * Interface for the JQuery callback
 * @see {@link https://api.jquery.com/category/callbacks-object/}
 */
type JQueryCallback = {
  /**
   * Add a callback or a collection of callbacks to a callback list.
   *
   * @param callbacks A function, or array of functions, that are to be added to the callback list.
   * @see {@link https://api.jquery.com/callbacks.add/}
   */
  add: ((callbacks: Function) => JQueryCallback) & ((callbacks: Function[]) => JQueryCallback);

  /**
   * Disable a callback list from doing anything more.
   * @see {@link https://api.jquery.com/callbacks.disable/}
   */
  disable: () => JQueryCallback;

  /**
   * Determine if the callbacks list has been disabled.
   * @see {@link https://api.jquery.com/callbacks.disabled/}
   */
  disabled: () => boolean;

  /**
   * Remove all of the callbacks from a list.
   * @see {@link https://api.jquery.com/callbacks.empty/}
   */
  empty: () => JQueryCallback;

  /**
   * Call all of the callbacks with the given arguments
   *
   * @param arguments The argument or list of arguments to pass back to the callback list.
   * @see {@link https://api.jquery.com/callbacks.fire/}
   */
  fire: (...arguments: any[]) => JQueryCallback;

  /**
   * Determine if the callbacks have already been called at least once.
   * @see {@link https://api.jquery.com/callbacks.fired/}
   */
  fired: () => boolean;

  /**
   * Call all callbacks in a list with the given context and arguments.
   *
   * @param context A reference to the context in which the callbacks in the list should be fired.
   * @param arguments An argument, or array of arguments, to pass to the callbacks in the list.
   * @see {@link https://api.jquery.com/callbacks.fireWith/}
   */
  fireWith: (context?: any, args?: any[]) => JQueryCallback;

  /**
   * Determine whether a supplied callback is in a list
   *
   * @param callback The callback to search for.
   * @see {@link https://api.jquery.com/callbacks.has/}
   */
  has: (callback: Function) => boolean;

  /**
   * Lock a callback list in its current state.
   * @see {@link https://api.jquery.com/callbacks.lock/}
   */
  lock: () => JQueryCallback;

  /**
   * Determine if the callbacks list has been locked.
   * @see {@link https://api.jquery.com/callbacks.locked/}
   */
  locked: () => boolean;

  /**
   * Remove a callback or a collection of callbacks from a callback list.
   *
   * @param callbacks A function, or array of functions, that are to be removed from the callback list.
   * @see {@link https://api.jquery.com/callbacks.remove/}
   */
  remove: ((callbacks: Function) => JQueryCallback) & ((callbacks: Function[]) => JQueryCallback);
};

/**
 * Allows jQuery Promises to interop with non-jQuery promises
 */
type JQueryGenericPromise<T, C = any> = {
  /**
   * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
   *
   * @param doneFilter A function that is called when the Deferred is resolved.
   * @param failFilter An optional function that is called when the Deferred is rejected.
   * @see {@link https://api.jquery.com/deferred.then/#deferred-then-doneFilter-failFilter-progressFilter}
   */
  then: (<U>(
    doneFilter: (value?: T, ...values: any[]) => U | JQueryPromise<U, C>,
    failFilter?: (...reasons: any[]) => any,
    progressFilter?: (...progression: any[]) => any,
  ) => JQueryPromise<U, C>) & ((
    doneFilter: (value?: T, ...values: any[]) => void,
    failFilter?: (...reasons: any[]) => any,
    progressFilter?: (...progression: any[]) => any,
  ) => JQueryPromise<void, C>);
};

/**
 * Interface for the JQuery promise/deferred callbacks
 */
type JQueryPromiseCallback<T, C = any> = (
  this: C,
  value?: T,
  ...args: any[]
) => void;

type JQueryPromiseOperator<T, U, C = any> = (
  callback1: JQueryPromiseCallback<T, C> | Array<JQueryPromiseCallback<T, C>>,
  ...callbacksN: Array<
		JQueryPromiseCallback<any, C> | Array<JQueryPromiseCallback<any, C>>
  >
) => JQueryPromise<U, C>;

/**
 * Interface for the JQuery promise, part of callbacks
 * @see {@link https://api.jquery.com/category/deferred-object/}
 */
type JQueryPromise<T, C = any> = {
  /**
   * Determine the current state of a Deferred object.
   * @see {@link https://api.jquery.com/deferred.state/}
   */
  state: () => string;
  /**
   * Add handlers to be called when the Deferred object is either resolved or rejected.
   *
   * @param alwaysCallback1 A function, or array of functions, that is called when the Deferred is resolved or rejected.
   * @param alwaysCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
   * @see {@link https://api.jquery.com/deferred.always/}
   */
  always: (
    alwaysCallback1?:
      | JQueryPromiseCallback<any, C>
      | Array<JQueryPromiseCallback<any, C>>,
    ...alwaysCallbackN: Array<
			JQueryPromiseCallback<any> | Array<JQueryPromiseCallback<any>>
    >
  ) => JQueryPromise<T, C>;
  /**
   * Add handlers to be called when the Deferred object is resolved.
   *
   * @param doneCallback1 A function, or array of functions, that are called when the Deferred is resolved.
   * @param doneCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
   * @see {@link https://api.jquery.com/deferred.done/}
   */
  done: (
    doneCallback1?:
      | JQueryPromiseCallback<T, C>
      | Array<JQueryPromiseCallback<T, C>>,
    ...doneCallbackN: Array<
			JQueryPromiseCallback<T, C> | Array<JQueryPromiseCallback<T, C>>
    >
  ) => JQueryPromise<T, C>;
  /**
   * Add handlers to be called when the Deferred object is rejected.
   *
   * @param failCallback1 A function, or array of functions, that are called when the Deferred is rejected.
   * @param failCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
   * @see {@link https://api.jquery.com/deferred.fail/}
   */
  fail: (
    failCallback1?:
      | JQueryPromiseCallback<any, C>
      | Array<JQueryPromiseCallback<any, C>>,
    ...failCallbackN: Array<
			JQueryPromiseCallback<any, C> | Array<JQueryPromiseCallback<any, C>>
    >
  ) => JQueryPromise<T, C>;
  /**
   * Add handlers to be called when the Deferred object generates progress notifications.
   *
   * @param progressCallback1 A function, or array of functions, to be called when the Deferred generates progress notifications.
   * @param progressCallbackN Optional additional functions, or arrays of functions, to be called when the Deferred generates progress notifications.
   * @see {@link https://api.jquery.com/deferred.progress/}
   */
  progress: (
    progressCallback1?:
      | JQueryPromiseCallback<any, C>
      | Array<JQueryPromiseCallback<any, C>>,
    ...progressCallbackN: Array<
			JQueryPromiseCallback<any, C> | Array<JQueryPromiseCallback<any, C>>
    >
  ) => JQueryPromise<T, C>;

  // Deprecated - given no typings
  pipe: (
    doneFilter?: (x: any) => any,
    failFilter?: (x: any) => any,
    progressFilter?: (x: any) => any,
  ) => JQueryPromise<any, C>;

  /**
   * Return a Deferred's Promise object.
   *
   * @param target Object onto which the promise methods have to be attached
   * @see {@link https://api.jquery.com/deferred.promise/}
   */
  promise: (target?: any) => JQueryPromise<T, C>;
} & JQueryGenericPromise<T, C>;

/**
 * Interface for the JQuery deferred, part of callbacks
 * @see {@link https://api.jquery.com/category/deferred-object/}
 */
type JQueryDeferred<T, C = any> = {
  /**
   * Determine the current state of a Deferred object.
   * @see {@link https://api.jquery.com/deferred.state/}
   */
  state: () => string;
  /**
   * Add handlers to be called when the Deferred object is either resolved or rejected.
   *
   * @param alwaysCallback1 A function, or array of functions, that is called when the Deferred is resolved or rejected.
   * @param alwaysCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
   * @see {@link https://api.jquery.com/deferred.always/}
   */
  always: (
    alwaysCallback1?:
      | JQueryPromiseCallback<any, C>
      | Array<JQueryPromiseCallback<any, C>>,
    ...alwaysCallbackN: Array<
			JQueryPromiseCallback<any, C> | Array<JQueryPromiseCallback<any, C>>
    >
  ) => JQueryDeferred<T, C>;
  /**
   * Add handlers to be called when the Deferred object is resolved.
   *
   * @param doneCallback1 A function, or array of functions, that are called when the Deferred is resolved.
   * @param doneCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
   * @see {@link https://api.jquery.com/deferred.done/}
   */
  done: (
    doneCallback1?:
      | JQueryPromiseCallback<T, C>
      | Array<JQueryPromiseCallback<T, C>>,
    ...doneCallbackN: Array<
			JQueryPromiseCallback<T, C> | Array<JQueryPromiseCallback<T, C>>
    >
  ) => JQueryDeferred<T, C>;
  /**
   * Add handlers to be called when the Deferred object is rejected.
   *
   * @param failCallback1 A function, or array of functions, that are called when the Deferred is rejected.
   * @param failCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
   * @see {@link https://api.jquery.com/deferred.fail/}
   */
  fail: (
    failCallback1?:
      | JQueryPromiseCallback<any, C>
      | Array<JQueryPromiseCallback<any, C>>,
    ...failCallbackN: Array<
			JQueryPromiseCallback<any, C> | Array<JQueryPromiseCallback<any, C>>
    >
  ) => JQueryDeferred<T, C>;
  /**
   * Add handlers to be called when the Deferred object generates progress notifications.
   *
   * @param progressCallback1 A function, or array of functions, to be called when the Deferred generates progress notifications.
   * @param progressCallbackN Optional additional functions, or arrays of functions, to be called when the Deferred generates progress notifications.
   * @see {@link https://api.jquery.com/deferred.progress/}
   */
  progress: (
    progressCallback1?:
      | JQueryPromiseCallback<any, C>
      | Array<JQueryPromiseCallback<any, C>>,
    ...progressCallbackN: Array<
			JQueryPromiseCallback<any, C> | Array<JQueryPromiseCallback<any, C>>
    >
  ) => JQueryDeferred<T, C>;

  /**
   * Call the progressCallbacks on a Deferred object with the given args.
   *
   * @param args Optional arguments that are passed to the progressCallbacks.
   * @see {@link https://api.jquery.com/deferred.notify/}
   */
  notify: (value?: any, ...args: any[]) => JQueryDeferred<T, C>;

  /**
   * Call the progressCallbacks on a Deferred object with the given context and args.
   *
   * @param context Context passed to the progressCallbacks as the this object.
   * @param args Optional arguments that are passed to the progressCallbacks.
   * @see {@link https://api.jquery.com/deferred.notifyWith/}
   */
  notifyWith: <Context = any>(
    context: Context,
    args?: any[],
  ) => JQueryDeferred<T, Context>;

  /**
   * Reject a Deferred object and call any failCallbacks with the given args.
   *
   * @param args Optional arguments that are passed to the failCallbacks.
   * @see {@link https://api.jquery.com/deferred.reject/}
   */
  reject: (value?: any, ...args: any[]) => JQueryDeferred<T, C>;
  /**
   * Reject a Deferred object and call any failCallbacks with the given context and args.
   *
   * @param context Context passed to the failCallbacks as the this object.
   * @param args An optional array of arguments that are passed to the failCallbacks.
   * @see {@link https://api.jquery.com/deferred.rejectWith/}
   */
  rejectWith: <Context = any>(
    context: Context,
    args?: any[],
  ) => JQueryDeferred<T, Context>;

  /**
   * Resolve a Deferred object and call any doneCallbacks with the given args.
   *
   * @param value First argument passed to doneCallbacks.
   * @param args Optional subsequent arguments that are passed to the doneCallbacks.
   * @see {@link https://api.jquery.com/deferred.resolve/}
   */
  resolve: (value?: T, ...args: any[]) => JQueryDeferred<T, C>;

  /**
   * Resolve a Deferred object and call any doneCallbacks with the given context and args.
   *
   * @param context Context passed to the doneCallbacks as the this object.
   * @param args An optional array of arguments that are passed to the doneCallbacks.
   * @see {@link https://api.jquery.com/deferred.resolveWith/}
   */
  resolveWith: <Context = any>(
    context: Context,
    args?: T[],
  ) => JQueryDeferred<T, Context>;

  /**
   * Return a Deferred's Promise object.
   *
   * @param target Object onto which the promise methods have to be attached
   * @see {@link https://api.jquery.com/deferred.promise/}
   */
  promise: (target?: any) => JQueryPromise<T, C>;

  // Deprecated - given no typings
  pipe: (
    doneFilter?: (x: any) => any,
    failFilter?: (x: any) => any,
    progressFilter?: (x: any) => any,
  ) => JQueryPromise<any, C>;
} & JQueryGenericPromise<T, C>;

/**
 * Interface of the JQuery extension of the W3C event object
 * @see {@link https://api.jquery.com/category/events/event-object/}
 */
type BaseJQueryEventObject = {
  /**
   * The current DOM element within the event bubbling phase.
   * @see {@link https://api.jquery.com/event.currentTarget/}
   */
  currentTarget: Element;
  /**
   * An optional object of data passed to an event method when the current executing handler is bound.
   * @see {@link https://api.jquery.com/event.data/}
   */
  data: any;
  /**
   * The element where the currently-called jQuery event handler was attached.
   * @see {@link https://api.jquery.com/event.delegateTarget/}
   */
  delegateTarget: Element;
  /**
   * Returns whether event.preventDefault() was ever called on this event object.
   * @see {@link https://api.jquery.com/event.isDefaultPrevented/}
   */
  isDefaultPrevented: () => boolean;
  /**
   * Returns whether event.stopImmediatePropagation() was ever called on this event object.
   * @see {@link https://api.jquery.com/event.isImmediatePropagationStopped/}
   */
  isImmediatePropagationStopped: () => boolean;
  /**
   * Returns whether event.stopPropagation() was ever called on this event object.
   * @see {@link https://api.jquery.com/event.isPropagationStopped/}
   */
  isPropagationStopped: () => boolean;
  /**
   * The namespace specified when the event was triggered.
   * @see {@link https://api.jquery.com/event.namespace/}
   */
  namespace: string;
  /**
   * The browser's original Event object.
   * @see {@link https://api.jquery.com/category/events/event-object/}
   */
  originalEvent: Event;
  /**
   * If this method is called, the default action of the event will not be triggered.
   * @see {@link https://api.jquery.com/event.preventDefault/}
   */
  preventDefault: () => any;
  /**
   * The other DOM element involved in the event, if any.
   * @see {@link https://api.jquery.com/event.relatedTarget/}
   */
  relatedTarget: Element;
  /**
   * The last value returned by an event handler that was triggered by this event, unless the value was undefined.
   * @see {@link https://api.jquery.com/event.result/}
   */
  result: any;
  /**
   * Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
   * @see {@link https://api.jquery.com/event.stopImmediatePropagation/}
   */
  stopImmediatePropagation: () => void;
  /**
   * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
   * @see {@link https://api.jquery.com/event.stopPropagation/}
   */
  stopPropagation: () => void;
  /**
   * The DOM element that initiated the event.
   * @see {@link https://api.jquery.com/event.target/}
   */
  target: Element;
  /**
   * The mouse position relative to the left edge of the document.
   * @see {@link https://api.jquery.com/event.pageX/}
   */
  pageX: number;
  /**
   * The mouse position relative to the top edge of the document.
   * @see {@link https://api.jquery.com/event.pageY/}
   */
  pageY: number;
  /**
   * For key or mouse events, this property indicates the specific key or button that was pressed.
   * @deprecated Use `key` for KeyEvents or `button` for MouseEvents instead.
   * @see {@link https://api.jquery.com/event.which/}
   */
  which: number;
  /**
   * Indicates whether the META key was pressed when the event fired.
   * @see {@link https://api.jquery.com/event.metaKey/}
   */
  metaKey: boolean;
} & Event;

type JQueryCustomEventObject = {
  /**
   * @see {@link https://api.jquery.com/category/events/event-object/}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent}
   */
  detail?: any;
} & BaseJQueryEventObject;

type JQueryInputEventObject = {
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
} & BaseJQueryEventObject;

type JQueryMouseEventObject = {
  button: number;
  clientX: number;
  clientY: number;
  offsetX: number;
  offsetY: number;
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
} & JQueryInputEventObject;

type JQueryKeyEventObject = {
  /** @deprecated */
  char: string;
  /** @deprecated */
  charCode: number;
  code: string;
  key: string;
  /** @deprecated */
  keyCode: number;
} & JQueryInputEventObject;

type JQueryEventObject = {} & BaseJQueryEventObject & JQueryCustomEventObject & JQueryInputEventObject & JQueryMouseEventObject & JQueryKeyEventObject;

/**
 * A collection of properties that represent the presence of different browser features or bugs.
 *
 * Intended for jQuery's internal use; specific properties may be removed when they are no longer needed internally
 * to improve page startup performance. For your own project's feature-detection needs, we strongly recommend the
 * use of an external library such as {@link http://modernizr.com/|Modernizr} instead of dependency on properties
 * in jQuery.support.
 *
 * @deprecated since version 1.9
 */
type JQuerySupport = {
  ajax?: boolean | undefined;
  boxModel?: boolean | undefined;
  changeBubbles?: boolean | undefined;
  checkClone?: boolean | undefined;
  checkOn?: boolean | undefined;
  cors?: boolean | undefined;
  cssFloat?: boolean | undefined;
  hrefNormalized?: boolean | undefined;
  htmlSerialize?: boolean | undefined;
  leadingWhitespace?: boolean | undefined;
  noCloneChecked?: boolean | undefined;
  noCloneEvent?: boolean | undefined;
  opacity?: boolean | undefined;
  optDisabled?: boolean | undefined;
  optSelected?: boolean | undefined;
  scriptEval?: () => boolean;
  style?: boolean | undefined;
  submitBubbles?: boolean | undefined;
  tbody?: boolean | undefined;
};

type JQueryParam = {
  /**
   * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
   *
   * @param obj An array or object to serialize.
   */
  (obj: any): string;

  /**
   * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
   *
   * @param obj An array or object to serialize.
   * @param traditional A Boolean indicating whether to perform a traditional "shallow" serialization.
   */
  (obj: any, traditional: boolean): string;
};

/**
 * The interface used to construct jQuery events (with $.Event). It is
 * defined separately instead of inline in JQueryStatic to allow
 * overriding the construction function with specific strings
 * returning specific event objects.
 */
type JQueryEventConstructor = {
  (name: string, eventProperties?: any): JQueryEventObject;
  new (name: string, eventProperties?: any): JQueryEventObject;
};

/**
 * The interface used to specify coordinates.
 */
type JQueryCoordinates = {
  left: number;
  top: number;
};

/**
 * The interface used to specify the properties parameter in css()
 */
type cssPropertySetter = (index: number, value?: string) => string | number;
type JQueryCssProperties = {
  [propertyName: string]: string | number | cssPropertySetter;
};

/**
 * Elements in the array returned by serializeArray()
 */
type JQuerySerializeArrayElement = {
  name: string;
  value: string;
};

/**
 * @see {@link https://api.jquery.com/animate/}
 */
type JQueryAnimationOptions = {
  /**
   * A string or number determining how long the animation will run.
   */
  duration?: any;
  /**
   * A string indicating which easing function to use for the transition.
   */
  easing?: string | undefined;
  /**
   * A function to call once the animation is complete.
   */
  complete?: Function | undefined;
  /**
   * A function to be called for each animated property of each animated element. This function provides an opportunity to modify the Tween object to change the value of the property before it is set.
   */
  step?: ((now: number, tween: any) => any) | undefined;
  /**
   * A function to be called after each step of the animation, only once per animated element regardless of the number of animated properties. (version added: 1.8)
   */
  progress?:
		| ((
		  animation: JQueryPromise<any>,
		  progress: number,
		  remainingMs: number,
		) => any)
		| undefined;
  /**
   * A function to call when the animation begins. (version added: 1.8)
   */
  start?: ((animation: JQueryPromise<any>) => any) | undefined;
  /**
   * A function to be called when the animation completes (its Promise object is resolved). (version added: 1.8)
   */
  done?:
		| ((animation: JQueryPromise<any>, jumpedToEnd: boolean) => any)
		| undefined;
  /**
   * A function to be called when the animation fails to complete (its Promise object is rejected). (version added: 1.8)
   */
  fail?:
		| ((animation: JQueryPromise<any>, jumpedToEnd: boolean) => any)
		| undefined;
  /**
   * A function to be called when the animation completes or stops without completing (its Promise object is either resolved or rejected). (version added: 1.8)
   */
  always?:
		| ((animation: JQueryPromise<any>, jumpedToEnd: boolean) => any)
		| undefined;
  /**
   * A Boolean indicating whether to place the animation in the effects queue. If false, the animation will begin immediately. As of jQuery 1.7, the queue option can also accept a string, in which case the animation is added to the queue represented by that string. When a custom queue name is used the animation does not automatically start; you must call .dequeue("queuename") to start it.
   */
  queue?: any;
  /**
   * A map of one or more of the CSS properties defined by the properties argument and their corresponding easing functions. (version added: 1.4)
   */
  specialEasing?: object | undefined;
};

type JQueryEasingFunction = (percent: number) => number;

type JQueryEasingFunctions = {
  [name: string]: JQueryEasingFunction;
  linear: JQueryEasingFunction;
  swing: JQueryEasingFunction;
};

/**
 * Static members of jQuery (those on $ and jQuery themselves)
 *
 * @see {@link https://api.jquery.com/Types/#jQuery}
 */
type JQueryStatic = {
  /**
   * Perform an asynchronous HTTP (Ajax) request.
   *
   * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup().
   * @see {@link https://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings}
   */
  ajax: (<C>(settings: JQueryAjaxSettings<C>) => JQueryXHR<C>) & (<C>(url: string, settings?: JQueryAjaxSettings<C>) => JQueryXHR<C>);

  /**
   * Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
   *
   * @param dataTypes An optional string containing one or more space-separated dataTypes
   * @param handler A handler to set default values for future Ajax requests.
   * @see {@link https://api.jquery.com/jQuery.ajaxPrefilter/}
   */
  ajaxPrefilter: ((
    dataTypes: string,
    handler: (
      opts: any,
      originalOpts: JQueryAjaxSettings,
      jqXHR: JQueryXHR,
    ) => any,
  ) => void) & ((
    handler: (
      opts: any,
      originalOpts: JQueryAjaxSettings,
      jqXHR: JQueryXHR,
    ) => any,
  ) => void);

  /**
   * Creates an object that handles the actual transmission of Ajax data.
   *
   * @param dataType A string identifying the data type to use.
   * @param handler A handler to return the new transport object to use with the data type provided in the first argument.
   * @see {@link https://api.jquery.com/jQuery.ajaxTransport/}
   */
  ajaxTransport: (
    dataType: string,
    handler: (
      opts: any,
      originalOpts: JQueryAjaxSettings,
      jqXHR: JQueryXHR,
    ) => any,
  ) => void;

  ajaxSettings: JQueryAjaxSettings;

  /**
   * Set default values for future Ajax requests. Its use is not recommended.
   *
   * @param options A set of key/value pairs that configure the default Ajax request. All options are optional.
   * @see {@link https://api.jquery.com/jQuery.ajaxSetup/}
   */
  ajaxSetup: (options: JQueryAjaxSettings) => void;

  /**
   * Load data from the server using a HTTP GET request.
   *
   * @param url A string containing the URL to which the request is sent.
   * @param success A callback function that is executed if the request succeeds.
   * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
   * @see {@link https://api.jquery.com/jQuery.get/#jQuery-get-url-data-success-dataType}
   */
  get: ((
    url: string,
    success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
    dataType?: string,
  ) => JQueryXHR) & ((
    url: string,
    data?: object | string,
    success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
    dataType?: string,
  ) => JQueryXHR) & (<C>(settings: JQueryAjaxSettings<C>) => JQueryXHR<C>);
  /**
   * Load JSON-encoded data from the server using a GET HTTP request.
   *
   * @param url A string containing the URL to which the request is sent.
   * @param success A callback function that is executed if the request succeeds.
   * @see {@link https://api.jquery.com/jQuery.getJSON/}
   */
  getJSON: ((
    url: string,
    success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
  ) => JQueryXHR) & ((
    url: string,
    data?: object | string,
    success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
  ) => JQueryXHR);
  /**
   * Load a JavaScript file from the server using a GET HTTP request, then execute it.
   *
   * @param url A string containing the URL to which the request is sent.
   * @param success A callback function that is executed if the request succeeds.
   * @see {@link https://api.jquery.com/jQuery.getScript/}
   */
  getScript: (
    url: string,
    success?: (script: string, textStatus: string, jqXHR: JQueryXHR) => any,
  ) => JQueryXHR;

  /**
   * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
   *
   * @see {@link https://api.jquery.com/jQuery.param/}
   */
  param: JQueryParam;

  /**
   * Load data from the server using a HTTP POST request.
   *
   * @param url A string containing the URL to which the request is sent.
   * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but can be null in that case.
   * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
   * @see {@link https://api.jquery.com/jQuery.post/#jQuery-post-url-data-success-dataType}
   */
  post: ((
    url: string,
    success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
    dataType?: string,
  ) => JQueryXHR) & ((
    url: string,
    data?: object | string,
    success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any,
    dataType?: string,
  ) => JQueryXHR) & (<C>(settings: JQueryAjaxSettings<C>) => JQueryXHR<C>);
  /**
   * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
   *
   * @param flags An optional list of space-separated flags that change how the callback list behaves.
   * @see {@link https://api.jquery.com/jQuery.Callbacks/}
   */
  Callbacks: (flags?: string) => JQueryCallback;

  /**
   * Holds or releases the execution of jQuery's ready event.
   *
   * @param hold Indicates whether the ready hold is being requested or released
   * @see {@link https://api.jquery.com/jQuery.holdReady/}
   */
  holdReady: (hold: boolean) => void;

  /**
   * Accepts a string containing a CSS selector which is then used to match a set of elements.
   *
   * @param selector A string containing a selector expression
   * @param context A DOM Element, Document, or jQuery to use as context
   * @see {@link https://api.jquery.com/jQuery/#jQuery-selector-context}
   */
  (selector: string, context?: Element | JQuery): JQuery;

  /**
   * Accepts a string containing a CSS selector which is then used to match a set of elements.
   *
   * @param element A DOM element to wrap in a jQuery object.
   * @see {@link https://api.jquery.com/jQuery/#jQuery-element}
   */
  (element: Element): JQuery;

  /**
   * Accepts a string containing a CSS selector which is then used to match a set of elements.
   *
   * @param elementArray An array containing a set of DOM elements to wrap in a jQuery object.
   * @see {@link https://api.jquery.com/jQuery/#jQuery-elementArray}
   */
  (elementArray: Element[]): JQuery;

  /**
   * Binds a function to be executed when the DOM has finished loading.
   *
   * @param callback A function to execute after the DOM is ready.
   * @see {@link https://api.jquery.com/jQuery/#jQuery-callback}
   */
  (callback: (jQueryAlias?: JQueryStatic) => any): JQuery;

  /**
   * Accepts a string containing a CSS selector which is then used to match a set of elements.
   *
   * @param object A plain object to wrap in a jQuery object.
   * @see {@link https://api.jquery.com/jQuery/#jQuery-object}
   */
  (object: {}): JQuery;

  /**
   * Accepts a string containing a CSS selector which is then used to match a set of elements.
   *
   * @param object An existing jQuery object to clone.
   * @see {@link https://api.jquery.com/jQuery/#jQuery-object}
   */
  (object: JQuery): JQuery;

  /**
   * Specify a function to execute when the DOM is fully loaded.
   * @see {@link https://api.jquery.com/jQuery/#jQuery}
   */
  (): JQuery;

  /**
   * Creates DOM elements on the fly from the provided string of raw HTML.
   *
   * @param html A string of HTML to create on the fly. Note that this parses HTML, not XML.
   * @param ownerDocument A document in which the new elements will be created.
   * @see {@link https://api.jquery.com/jQuery/#jQuery-html-ownerDocument}
   */
  (html: string, ownerDocument?: Document): JQuery;

  /**
   * Creates DOM elements on the fly from the provided string of raw HTML.
   *
   * @param html A string defining a single, standalone, HTML element (e.g. <div/> or <div></div>).
   * @param attributes An object of attributes, events, and methods to call on the newly-created element.
   * @see {@link https://api.jquery.com/jQuery/#jQuery-html-attributes}
   */
  (html: string, attributes: object): JQuery;

  /**
   * Relinquish jQuery's control of the $ variable.
   *
   * @param removeAll A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
   * @see {@link https://api.jquery.com/jQuery.noConflict/}
   */
  noConflict: (removeAll?: boolean) => JQueryStatic;

  /**
   * Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.
   *
   * @param deferreds One or more Deferred objects, or plain JavaScript objects.
   * @see {@link https://api.jquery.com/jQuery.when/}
   */
  when: <T>(
    ...deferreds: Array<T | JQueryPromise<T>>
  ) => JQueryPromise<T>;

  /**
   * Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties.
   * @see {@link https://api.jquery.com/jQuery.cssHooks/}
   */
  cssHooks: { [key: string]: any };

  /**
   * An object containing all CSS properties that may be used without a unit. The .css() method uses this object to see if it may append px to unitless values.
   * @see {@link https://api.jquery.com/jQuery.cssNumber/}
   */
  cssNumber: any;

  /**
   * Store arbitrary data associated with the specified element. Returns the value that was set.
   *
   * @param element The DOM element to associate with the data.
   * @param key A string naming the piece of data to set.
   * @param value The new data value.
   * @see {@link https://api.jquery.com/jQuery.data/#jQuery-data-element-key-value}
   */
  data: (<T>(element: Element, key: string, value: T) => T) & ((element: Element, key: string) => any) & ((element: Element) => any);

  /**
   * Execute the next function on the queue for the matched element.
   *
   * @param element A DOM element from which to remove and execute a queued function.
   * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
   * @see {@link https://api.jquery.com/jQuery.dequeue/}
   */
  dequeue: (element: Element, queueName?: string) => void;

  /**
   * Determine whether an element has any jQuery data associated with it.
   *
   * @param element A DOM element to be checked for data.
   * @see {@link https://api.jquery.com/jQuery.hasData/}
   */
  hasData: (element: Element) => boolean;

  /**
   * Show the queue of functions to be executed on the matched element.
   *
   * @param element A DOM element to inspect for an attached queue.
   * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
   * @see {@link https://api.jquery.com/jQuery.queue/#jQuery-queue-element-queueName}
   */
  queue: ((element: Element, queueName?: string) => any[]) & ((
    element: Element,
    queueName: string,
    newQueue: BoundFunction[],
  ) => JQuery) & ((element: Element, queueName: string, callback: BoundFunction) => JQuery);

  /**
   * Remove a previously-stored piece of data.
   *
   * @param element A DOM element from which to remove data.
   * @param name A string naming the piece of data to remove.
   * @see {@link https://api.jquery.com/jQuery.removeData/}
   */
  removeData: (element: Element, name?: string) => JQuery;

  /**
   * A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.
   *
   * @param beforeStart A function that is called just before the constructor returns.
   * @see {@link https://api.jquery.com/jQuery.Deferred/}
   */
  Deferred: <T>(
    beforeStart?: (deferred: JQueryDeferred<T>) => any,
  ) => JQueryDeferred<T>;

  /**
   * Effects
   */

  easing: JQueryEasingFunctions;

  fx: {
    tick: () => void;
    /**
     * The rate (in milliseconds) at which animations fire.
     * @see {@link https://api.jquery.com/jQuery.fx.interval/}
     */
    interval: number;
    stop: () => void;
    speeds: { slow: number; fast: number };
    /**
     * Globally disable all animations.
     * @see {@link https://api.jquery.com/jQuery.fx.off/}
     */
    off: boolean;
    step: any;
  };

  /**
   * Takes a function and returns a new one that will always have a particular context.
   *
   * @param func The function whose context will be changed.
   * @param context The object to which the context (this) of the function should be set.
   * @param additionalArguments Any number of arguments to be passed to the function referenced in the function argument.
   * @see {@link https://api.jquery.com/jQuery.proxy/#jQuery-proxy-function-context-additionalArguments}
   */
  proxy: ((
    func: (...args: any[]) => any,
    context: object,
    ...additionalArguments: any[]
  ) => any) & ((context: object, name: string, ...additionalArguments: any[]) => any);

  Event: JQueryEventConstructor;

  /**
   * Takes a string and throws an exception containing it.
   *
   * @param message The message to send out.
   * @see {@link https://api.jquery.com/jQuery.error/}
   */
  error: (message: any) => any;

  expr: any;
  readonly fn: JQuery;

  isReady: boolean;

  // Properties
  support: JQuerySupport;

  /**
   * Check to see if a DOM element is a descendant of another DOM element.
   *
   * @param container The DOM element that may contain the other element.
   * @param contained The DOM element that may be contained by (a descendant of) the other element.
   * @see {@link https://api.jquery.com/jQuery.contains/}
   */
  contains: (container: Element, contained: Element) => boolean;

  /**
   * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
   *
   * @param collection The object or array to iterate over.
   * @param callback The function that will be executed on every object. Will break the loop by returning false.
   * @returns the first argument, the object that is iterated.
   * @see {@link https://api.jquery.com/jQuery.each/#jQuery-each-array-callback}
   */
  each: (<T>(
    collection: T[],
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    callback: (
      this: T,
      indexInArray: number,
      valueOfElement: T,
    ) => boolean | void,
  ) => T[]) & (<T extends object>(
    collection: T,
  // TODO: `(keyInObject: keyof T, valueOfElement: T[keyof T])`, when TypeScript 2.1 allowed in repository
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    callback: (keyInObject: string, valueOfElement: any) => boolean | void,
  ) => T);

  /**
   * Merge the contents of two or more objects together into the first object.
   *
   * @param target An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
   * @param object1 An object containing additional properties to merge in.
   * @param objectN Additional objects containing properties to merge in.
   * @see {@link https://api.jquery.com/jQuery.extend/#jQuery-extend-target-object1-objectN}
   */
  extend: ((target: any, object1?: any, ...objectN: any[]) => any) & ((deep: boolean, target: any, object1?: any, ...objectN: any[]) => any);

  /**
   * Execute some JavaScript code globally.
   *
   * @param code The JavaScript code to execute.
   * @see {@link https://api.jquery.com/jQuery.globalEval/}
   */
  globalEval: (code: string) => any;

  /**
   * Finds the elements of an array which satisfy a filter function. The original array is not affected.
   *
   * @param array The array to search through.
   * @param func The function to process each item against. The first argument to the function is the item, and the second argument is the index. The function should return a Boolean value.  this will be the global window object.
   * @param invert If "invert" is false, or not provided, then the function returns an array consisting of all elements for which "callback" returns true. If "invert" is true, then the function returns an array consisting of all elements for which "callback" returns false.
   * @see {@link https://api.jquery.com/jQuery.grep/}
   */
  grep: <T>(
    array: T[],
    func: (elementOfArray?: T, indexInArray?: number) => boolean,
    invert?: boolean,
  ) => T[];

  /**
   * Search for a specified value within an array and return its index (or -1 if not found).
   *
   * @param value The value to search for.
   * @param array An array through which to search.
   * @param fromIndex The index of the array at which to begin the search. The default is 0, which will search the whole array.
   * @see {@link https://api.jquery.com/jQuery.inArray/}
   */
  inArray: <T>(value: T, array: T[], fromIndex?: number) => number;

  /**
   * Determine whether the argument is an array.
   *
   * @param obj Object to test whether or not it is an array.
   * @see {@link https://api.jquery.com/jQuery.isArray/}
   */
  isArray: (obj: any) => obj is any[];
  /**
   * Check to see if an object is empty (contains no enumerable properties).
   *
   * @param obj The object that will be checked to see if it's empty.
   * @see {@link https://api.jquery.com/jQuery.isEmptyObject/}
   */
  isEmptyObject: (obj: any) => boolean;
  /**
   * Determine if the argument passed is a JavaScript function object.
   *
   * @param obj Object to test whether or not it is a function.
   * @see {@link https://api.jquery.com/jQuery.isFunction/}
   */
  isFunction: (obj: any) => obj is Function;
  /**
   * Determines whether its argument is a number.
   *
   * @param value The value to be tested.
   * @see {@link https://api.jquery.com/jQuery.isNumeric/}
   */
  isNumeric: (value: any) => boolean;
  /**
   * Check to see if an object is a plain object (created using "{}" or "new Object").
   *
   * @param obj The object that will be checked to see if it's a plain object.
   * @see {@link https://api.jquery.com/jQuery.isPlainObject/}
   */
  isPlainObject: (obj: any) => boolean;
  /**
   * Determine whether the argument is a window.
   *
   * @param obj Object to test whether or not it is a window.
   * @see {@link https://api.jquery.com/jQuery.isWindow/}
   */
  isWindow: (obj: any) => obj is Window;
  /**
   * Check to see if a DOM node is within an XML document (or is an XML document).
   *
   * @param node The DOM node that will be checked to see if it's in an XML document.
   * @see {@link https://api.jquery.com/jQuery.isXMLDoc/}
   */
  isXMLDoc: (node: Node) => boolean;

  /**
   * Convert an array-like object into a true JavaScript array.
   *
   * @param obj Any object to turn into a native Array.
   * @see {@link https://api.jquery.com/jQuery.makeArray/}
   */
  makeArray: (obj: any) => any[];

  /**
   * Translate all items in an array or object to new array of items.
   *
   * @param array The Array to translate.
   * @param callback The function to process each item against. The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, this refers to the global (window) object.
   * @see {@link https://api.jquery.com/jQuery.map/#jQuery-map-array-callback}
   */
  map: (<T, U>(
    array: T[],
    callback: (elementOfArray?: T, indexInArray?: number) => U,
  ) => U[]) & ((
    arrayOrObject: any,
    callback: (value?: any, indexOrKey?: any) => any,
  ) => any);

  /**
   * Merge the contents of two arrays together into the first array.
   *
   * @param first The first array to merge, the elements of second added.
   * @param second The second array to merge into the first, unaltered.
   * @see {@link https://api.jquery.com/jQuery.merge/}
   */
  merge: <T>(first: T[], second: T[]) => T[];

  /**
   * An empty function.
   * @see {@link https://api.jquery.com/jQuery.noop/}
   */
  noop: () => any;

  /**
   * Return a number representing the current time.
   * @see {@link https://api.jquery.com/jQuery.now/}
   */
  now: () => number;

  /**
   * Takes a well-formed JSON string and returns the resulting JavaScript object.
   *
   * @param json The JSON string to parse.
   * @see {@link https://api.jquery.com/jQuery.parseJSON/}
   */
  parseJSON: (json: string) => any;

  /**
   * Parses a string into an XML document.
   *
   * @param data a well-formed XML string to be parsed
   * @see {@link https://api.jquery.com/jQuery.parseXML/}
   */
  parseXML: (data: string) => XMLDocument;

  /**
   * Remove the whitespace from the beginning and end of a string.
   *
   * @param str Remove the whitespace from the beginning and end of a string.
   * @see {@link https://api.jquery.com/jQuery.trim/}
   */
  trim: (str: string) => string;

  /**
   * Determine the internal JavaScript [[Class]] of an object.
   *
   * @param obj Object to get the internal JavaScript [[Class]] of.
   * @see {@link https://api.jquery.com/jQuery.type/}
   */
  type: (
    obj: any,
  ) => | "array"
    | "boolean"
    | "date"
    | "error"
    | "function"
    | "null"
    | "number"
    | "object"
    | "regexp"
    | "string"
    | "symbol"
    | "undefined";

  /**
   * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
   *
   * @param array The Array of DOM elements.
   * @see {@link https://api.jquery.com/jQuery.unique/}
   */
  unique: <T extends Element>(array: T[]) => T[];

  /**
   * Parses a string into an array of DOM nodes.
   *
   * @param data HTML string to be parsed
   * @param context DOM element to serve as the context in which the HTML fragment will be created
   * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
   * @see {@link https://api.jquery.com/jQuery.parseHTML/}
   */
  parseHTML: (data: string, context?: Document, keepScripts?: boolean) => any[];
};

/**
 * The jQuery instance members
 *
 * @see {@link https://api.jquery.com/Types/#jQuery}
 */
type JQuery = {
  /**
   * Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
   *
   * @param handler The function to be invoked.
   * @see {@link https://api.jquery.com/ajaxComplete/}
   */
  ajaxComplete: (
    handler: (
      this: HTMLElement,
      event: JQueryEventObject,
      XMLHttpRequest: XMLHttpRequest,
      ajaxOptions: any,
    ) => any,
  ) => JQuery;
  /**
   * Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
   *
   * @param handler The function to be invoked.
   * @see {@link https://api.jquery.com/ajaxError/}
   */
  ajaxError: (
    handler: (
      this: HTMLElement,
      event: JQueryEventObject,
      jqXHR: JQueryXHR,
      ajaxSettings: JQueryAjaxSettings,
      thrownError: any,
    ) => any,
  ) => JQuery;
  /**
   * Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
   *
   * @param handler The function to be invoked.
   * @see {@link https://api.jquery.com/ajaxSend/}
   */
  ajaxSend: (
    handler: (
      this: HTMLElement,
      event: JQueryEventObject,
      jqXHR: JQueryXHR,
      ajaxOptions: JQueryAjaxSettings,
    ) => any,
  ) => JQuery;
  /**
   * Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
   *
   * @param handler The function to be invoked.
   * @see {@link https://api.jquery.com/ajaxStart/}
   */
  ajaxStart: (handler: (this: HTMLElement) => any) => JQuery;
  /**
   * Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
   *
   * @param handler The function to be invoked.
   * @see {@link https://api.jquery.com/ajaxStop/}
   */
  ajaxStop: (handler: (this: HTMLElement) => any) => JQuery;
  /**
   * Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
   *
   * @param handler The function to be invoked.
   * @see {@link https://api.jquery.com/ajaxSuccess/}
   */
  ajaxSuccess: (
    handler: (
      this: HTMLElement,
      event: JQueryEventObject,
      XMLHttpRequest: XMLHttpRequest,
      ajaxOptions: JQueryAjaxSettings,
    ) => any,
  ) => JQuery;

  /**
   * Load data from the server and place the returned HTML into the matched element.
   *
   * @param url A string containing the URL to which the request is sent.
   * @param data A plain object or string that is sent to the server with the request.
   * @param complete A callback function that is executed when the request completes.
   * @see {@link https://api.jquery.com/load/}
   */
  serialize: () => string;
  /**
   * Encode a set of form elements as an array of names and values.
   * @see {@link https://api.jquery.com/serializeArray/}
   */
  serializeArray: () => JQuerySerializeArrayElement[];

  /**
   * Adds the specified class(es) to each of the set of matched elements.
   *
   * @param className One or more space-separated classes to be added to the class attribute of each matched element.
   * @see {@link https://api.jquery.com/addClass/#addClass-className}
   */
  addClass: ((className: string) => JQuery) & ((func: (index: number, className: string) => string) => JQuery);

  /**
   * Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
   * @see {@link https://api.jquery.com/addBack/}
   */
  addBack: (selector?: string) => JQuery;

  /**
   * Get the value of an attribute for the first element in the set of matched elements.
   *
   * @param attributeName The name of the attribute to get.
   * @see {@link https://api.jquery.com/attr/#attr-attributeName}
   */
  attr: ((attributeName: string) => string) & ((attributeName: string, value: string | number | null) => JQuery) & ((
    attributeName: string,
    func: (
      this: HTMLElement,
      index: number,
      attr: string,
    ) => string | number,
  ) => JQuery) & ((attributes: object) => JQuery);

  /**
   * Determine whether any of the matched elements are assigned the given class.
   *
   * @param className The class name to search for.
   * @see {@link https://api.jquery.com/hasClass/}
   */
  hasClass: (className: string) => boolean;

  /**
   * Get the HTML contents of the first element in the set of matched elements.
   * @see {@link https://api.jquery.com/html/#html}
   */
  html: (() => string) & ((htmlString: string) => JQuery) & ((func: (index: number, oldhtml: string) => string) => JQuery);

  /**
   * Get the value of a property for the first element in the set of matched elements.
   *
   * @param propertyName The name of the property to get.
   * @see {@link https://api.jquery.com/prop/#prop-propertyName}
   */
  prop: ((propertyName: string) => any) & ((propertyName: string, value: string | number | boolean) => JQuery) & ((properties: object) => JQuery) & ((
    propertyName: string,
    func: (index: number, oldPropertyValue: any) => any,
  ) => JQuery);

  /**
   * Remove an attribute from each element in the set of matched elements.
   *
   * @param attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
   * @see {@link https://api.jquery.com/removeAttr/}
   */
  removeAttr: (attributeName: string) => JQuery;

  /**
   * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
   *
   * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
   * @see {@link https://api.jquery.com/removeClass/#removeClass-className}
   */
  removeClass: ((className?: string) => JQuery) & ((func: (index: number, className: string) => string) => JQuery);

  /**
   * Remove a property for the set of matched elements.
   *
   * @param propertyName The name of the property to remove.
   * @see {@link https://api.jquery.com/removeProp/}
   */
  removeProp: (propertyName: string) => JQuery;

  /**
   * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
   *
   * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
   * @param swtch A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
   * @see {@link https://api.jquery.com/toggleClass/#toggleClass-className}
   */
  toggleClass: ((className: string, swtch?: boolean) => JQuery) & ((swtch?: boolean) => JQuery) & ((
    func: (index: number, className: string, swtch: boolean) => string,
    swtch?: boolean,
  ) => JQuery);

  /**
   * Get the current value of the first element in the set of matched elements.
   * @see {@link https://api.jquery.com/val/#val}
   */
  val: (() => any) & ((value: string | string[] | number) => JQuery) & ((
    func: (this: HTMLElement, index: number, value: string) => string,
  ) => JQuery);

  /**
   * Get the value of style properties for the first element in the set of matched elements.
   *
   * @param propertyName A CSS property.
   * @see {@link https://api.jquery.com/css/#css-propertyName}
   */
  css: ((propertyName: string) => string) & ((propertyNames: string[]) => any) & ((propertyName: string, value: string | number) => JQuery) & ((
    propertyName: string,
    value: (index: number, value: string) => string | number,
  ) => JQuery) & ((properties: JQueryCssProperties) => JQuery);

  /**
   * Get the current computed height for the first element in the set of matched elements.
   * @see {@link https://api.jquery.com/height/#height}
   */
  height: (() => number) & ((value: number | string) => JQuery) & ((func: (index: number, height: number) => number | string) => JQuery);

  /**
   * Get the current computed height for the first element in the set of matched elements, including padding but not border.
   * @see {@link https://api.jquery.com/innerHeight/#innerHeight}
   */
  innerHeight: (() => number) & ((value: number | string) => JQuery);

  /**
   * Get the current computed width for the first element in the set of matched elements, including padding but not border.
   * @see {@link https://api.jquery.com/innerWidth/#innerWidth}
   */
  innerWidth: (() => number) & ((value: number | string) => JQuery);

  /**
   * Get the current coordinates of the first element in the set of matched elements, relative to the document.
   * @see {@link https://api.jquery.com/offset/#offset}
   */
  offset: (() => JQueryCoordinates | undefined) & ((coordinates: JQueryCoordinates) => JQuery) & ((
    func: (index: number, coords: JQueryCoordinates) => JQueryCoordinates,
  ) => JQuery);

  /**
   * Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns an integer (without "px") representation of the value or null if called on an empty set of elements.
   *
   * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
   * @see {@link https://api.jquery.com/outerHeight/#outerHeight-includeMargin}
   */
  outerHeight: ((includeMargin?: boolean) => number) & ((value: number | string) => JQuery);

  /**
   * Get the current computed width for the first element in the set of matched elements, including padding and border.
   *
   * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
   * @see {@link https://api.jquery.com/outerWidth/#outerWidth-includeMargin}
   */
  outerWidth: ((includeMargin?: boolean) => number) & ((value: number | string) => JQuery);

  /**
   * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
   * @see {@link https://api.jquery.com/position/}
   */
  position: () => JQueryCoordinates;

  /**
   * Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.
   * @see {@link https://api.jquery.com/scrollLeft/#scrollLeft}
   */
  scrollLeft: (() => number) & ((value: number) => JQuery);

  /**
   * Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
   * @see {@link https://api.jquery.com/scrollTop/#scrollTop}
   */
  scrollTop: (() => number) & ((value: number) => JQuery);

  /**
   * Get the current computed width for the first element in the set of matched elements.
   * @see {@link https://api.jquery.com/width/#width}
   */
  width: (() => number) & ((value: number | string) => JQuery) & ((func: (index: number, width: number) => number | string) => JQuery);

  /**
   * Remove from the queue all items that have not yet been run.
   *
   * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
   * @see {@link https://api.jquery.com/clearQueue/}
   */
  clearQueue: (queueName?: string) => JQuery;

  /**
   * Store arbitrary data associated with the matched elements.
   *
   * @param key A string naming the piece of data to set.
   * @param value The new data value; it can be any JavaScript type including Array or Object.
   * @see {@link https://api.jquery.com/data/#data-key-value}
   */
  data: ((key: string, value: any) => JQuery) & ((key: string) => any) & ((obj: { [key: string]: any }) => JQuery) & (() => any);

  /**
   * Execute the next function on the queue for the matched elements.
   *
   * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
   * @see {@link https://api.jquery.com/dequeue/}
   */
  dequeue: (queueName?: string) => JQuery;

  /**
   * Remove a previously-stored piece of data.
   *
   * @param name A string naming the piece of data to delete or space-separated string naming the pieces of data to delete.
   * @see {@link https://api.jquery.com/removeData/#removeData-name}
   */
  removeData: ((name: string) => JQuery) & ((list: string[]) => JQuery) & (() => JQuery);

  /**
   * Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.
   *
   * @param type The type of queue that needs to be observed. (default: fx)
   * @param target Object onto which the promise methods have to be attached
   * @see {@link https://api.jquery.com/promise/}
   */
  promise: (type?: string, target?: object) => JQueryPromise<any>;

  /**
   * Perform a custom animation of a set of CSS properties.
   *
   * @param properties An object of CSS properties and values that the animation will move toward.
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/animate/#animate-properties-duration-easing-complete}
   */
  animate: ((
    properties: object,
    duration?: string | number,
    complete?: BoundFunction,
  ) => JQuery) & ((
    properties: object,
    duration?: string | number,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((properties: object, options: JQueryAnimationOptions) => JQuery);

  /**
   * Set a timer to delay execution of subsequent items in the queue.
   *
   * @param duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
   * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
   * @see {@link https://api.jquery.com/delay/}
   */
  delay: (duration: number, queueName?: string) => JQuery;

  /**
   * Display the matched elements by fading them to opaque.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/fadeIn/#fadeIn-duration-complete}
   */
  fadeIn: ((duration?: number | string, complete?: BoundFunction) => JQuery) & ((
    duration?: number | string,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((options: JQueryAnimationOptions) => JQuery);

  /**
   * Hide the matched elements by fading them to transparent.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/fadeOut/#fadeOut-duration-complete}
   */
  fadeOut: ((duration?: number | string, complete?: BoundFunction) => JQuery) & ((
    duration?: number | string,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((options: JQueryAnimationOptions) => JQuery);

  /**
   * Adjust the opacity of the matched elements.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param opacity A number between 0 and 1 denoting the target opacity.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/fadeTo/#fadeTo-duration-opacity-complete}
   */
  fadeTo: ((
    duration: string | number,
    opacity: number,
    complete?: BoundFunction,
  ) => JQuery) & ((
    duration: string | number,
    opacity: number,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery);

  /**
   * Display or hide the matched elements by animating their opacity.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/fadeToggle/#fadeToggle-duration-easing-complete}
   */
  fadeToggle: ((duration?: number | string, complete?: BoundFunction) => JQuery) & ((
    duration?: number | string,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((options: JQueryAnimationOptions) => JQuery);

  /**
   * Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.
   *
   * @param queue The name of the queue in which to stop animations.
   * @see {@link https://api.jquery.com/finish/}
   */
  finish: (queue?: string) => JQuery;

  /**
   * Hide the matched elements.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/hide/#hide}
   */
  hide: ((duration?: number | string, complete?: BoundFunction) => JQuery) & ((
    duration?: number | string,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((options: JQueryAnimationOptions) => JQuery);

  /**
   * Display the matched elements.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/show/#show}
   */
  show: ((duration?: number | string, complete?: BoundFunction) => JQuery) & ((
    duration?: number | string,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((options: JQueryAnimationOptions) => JQuery);

  /**
   * Display the matched elements with a sliding motion.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/slideDown/#slideDown-duration-complete}
   */
  slideDown: ((duration?: number | string, complete?: BoundFunction) => JQuery) & ((
    duration?: number | string,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((options: JQueryAnimationOptions) => JQuery);

  /**
   * Display or hide the matched elements with a sliding motion.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/slideToggle/#slideToggle-duration-complete}
   */
  slideToggle: ((duration?: number | string, complete?: BoundFunction) => JQuery) & ((
    duration?: number | string,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((options: JQueryAnimationOptions) => JQuery);

  /**
   * Hide the matched elements with a sliding motion.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/slideUp/#slideUp-duration-complete}
   */
  slideUp: ((duration?: number | string, complete?: BoundFunction) => JQuery) & ((
    duration?: number | string,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((options: JQueryAnimationOptions) => JQuery);

  /**
   * Stop the currently-running animation on the matched elements.
   *
   * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
   * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
   * @see {@link https://api.jquery.com/stop/#stop-clearQueue-jumpToEnd}
   */
  stop: ((clearQueue?: boolean, jumpToEnd?: boolean) => JQuery) & ((queue?: string, clearQueue?: boolean, jumpToEnd?: boolean) => JQuery);

  /**
   * Display or hide the matched elements.
   *
   * @param duration A string or number determining how long the animation will run.
   * @param complete A function to call once the animation is complete.
   * @see {@link https://api.jquery.com/toggle/#toggle-duration-complete}
   */
  toggle: ((duration?: number | string, complete?: BoundFunction) => JQuery) & ((
    duration?: number | string,
    easing?: string,
    complete?: BoundFunction,
  ) => JQuery) & ((options: JQueryAnimationOptions) => JQuery) & ((showOrHide: boolean) => JQuery);

  /**
   * Attach a handler to an event for the elements.
   *
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param eventData An object containing data that will be passed to the event handler.
   * @param handler A function to execute each time the event is triggered.
   * @see {@link https://api.jquery.com/bind/#bind-eventType-eventData-handler}
   */
  bind: ((
    eventType: string,
    eventData: any,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventType: string,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((eventType: string, eventData: any, preventBubble: boolean) => JQuery) & ((eventType: string, preventBubble: boolean) => JQuery) & ((events: any) => JQuery);

  /**
   * Trigger the "blur" event on an element
   * @see {@link https://api.jquery.com/blur/#blur}
   */
  blur: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "change" event on an element.
   * @see {@link https://api.jquery.com/change/#change}
   */
  change: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "click" event on an element.
   * @see {@link https://api.jquery.com/click/#click}
   */
  click: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "contextmenu" event on an element.
   * @see {@link https://api.jquery.com/contextmenu/#contextmenu}
   */
  contextmenu: (() => JQuery) & ((
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery);

  /**
   * Trigger the "dblclick" event on an element.
   * @see {@link https://api.jquery.com/dblclick/#dblclick}
   */
  dblclick: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
   * @see {@link https://api.jquery.com/delegate/#delegate-selector-eventType-handler}
   */
  delegate: ((
    selector: any,
    eventType: string,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    selector: any,
    eventType: string,
    eventData: any,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "focus" event on an element.
   * @see {@link https://api.jquery.com/focus/#focus}
   */
  focus: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "focusin" event on an element.
   * @see {@link https://api.jquery.com/focusin/#focusin}
   */
  focusin: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "focusout" event on an element.
   * @see {@link https://api.jquery.com/focusout/#focusout}
   */
  focusout: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
   *
   * @param handlerIn A function to execute when the mouse pointer enters the element.
   * @param handlerOut A function to execute when the mouse pointer leaves the element.
   * @see {@link https://api.jquery.com/hover/#hover-handlerIn-handlerOut}
   */
  hover: ((
    handlerIn: (this: HTMLElement, eventObject: JQueryEventObject) => any,
    handlerOut: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    handlerInOut: (
      this: HTMLElement,
      eventObject: JQueryEventObject,
    ) => any,
  ) => JQuery);

  /**
   * Trigger the "keydown" event on an element.
   * @see {@link https://api.jquery.com/keydown/#keydown}
   */
  keydown: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryKeyEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryKeyEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "keypress" event on an element.
   * @see {@link https://api.jquery.com/keypress/#keypress}
   */
  keypress: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryKeyEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryKeyEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "keyup" event on an element.
   * @see {@link https://api.jquery.com/keyup/#keyup}
   */
  keyup: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryKeyEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryKeyEventObject) => any,
  ) => JQuery);

  /**
   * Bind an event handler to the "load" JavaScript event.
   *
   * @param handler A function to execute when the event is triggered.
   * @see {@link https://api.jquery.com/load/}
   */
  load: ((
    url: string,
    data?: string | object,
    complete?: (
      responseText: string,
      textStatus: string,
      XMLHttpRequest: XMLHttpRequest,
    ) => any,
  ) => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "mousedown" event on an element.
   * @see {@link https://api.jquery.com/mousedown/#mousedown}
   */
  mousedown: (() => JQuery) & ((
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery);

  /**
   * Trigger the "mouseenter" event on an element.
   * @see {@link https://api.jquery.com/mouseenter/#mouseenter}
   */
  mouseenter: (() => JQuery) & ((
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery);

  /**
   * Trigger the "mouseleave" event on an element.
   * @see {@link https://api.jquery.com/mouseleave/#mouseleave}
   */
  mouseleave: (() => JQuery) & ((
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery);

  /**
   * Trigger the "mousemove" event on an element.
   * @see {@link https://api.jquery.com/mousemove/#mousemove}
   */
  mousemove: (() => JQuery) & ((
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery);

  /**
   * Trigger the "mouseout" event on an element.
   * @see {@link https://api.jquery.com/mouseout/#mouseout}
   */
  mouseout: (() => JQuery) & ((
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery);

  /**
   * Trigger the "mouseover" event on an element.
   * @see {@link https://api.jquery.com/mouseover/#mouseover}
   */
  mouseover: (() => JQuery) & ((
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery);

  /**
   * Trigger the "mouseup" event on an element.
   * @see {@link https://api.jquery.com/mouseup/#mouseup}
   */
  mouseup: (() => JQuery) & ((
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (
      this: HTMLElement,
      eventObject: JQueryMouseEventObject,
    ) => any,
  ) => JQuery);

  /**
   * Remove an event handler.
   * @see {@link https://api.jquery.com/off/#off}
   */
  off: (() => JQuery) & ((
    events: string,
    selector?: string,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    events: string,
    handler: (
      this: HTMLElement,
      eventObject: JQueryEventObject,
      ...args: any[]
    ) => any,
  ) => JQuery) & ((
    events: string,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((events: { [key: string]: any }, selector?: string) => JQuery);

  /**
   * Attach an event handler function for one or more events to the selected elements.
   *
   * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
   * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
   * @see {@link https://api.jquery.com/on/#on-events-selector-data-handler}
   */
  on: ((
    events: string,
    handler: (
      this: HTMLElement,
      eventObject: JQueryEventObject,
      ...args: any[]
    ) => any,
  ) => JQuery) & ((
    events: string,
    selector: string,
    handler: (
      this: HTMLElement,
      eventObject: JQueryEventObject,
      ...eventData: any[]
    ) => any,
  ) => JQuery) & ((
    events: string,
    data: any,
    handler: (
      this: HTMLElement,
      eventObject: JQueryEventObject,
      ...args: any[]
    ) => any,
  ) => JQuery) & ((
    events: string,
    selector: string,
    data: any,
    handler: (
      this: HTMLElement,
      eventObject: JQueryEventObject,
      ...eventData: any[]
    ) => any,
  ) => JQuery) & ((
    events: {
      [key: string]: (
        this: HTMLElement,
        eventObject: JQueryEventObject,
        ...args: any[]
      ) => any;
    },
    selector?: string,
    data?: any,
  ) => JQuery) & ((
    events: {
      [key: string]: (
        this: HTMLElement,
        eventObject: JQueryEventObject,
        ...args: any[]
      ) => any;
    },
    data?: any,
  ) => JQuery);

  /**
   * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
   *
   * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
   * @param handler A function to execute at the time the event is triggered.
   * @see {@link https://api.jquery.com/one/#one-events-data-handler}
   */
  one: ((
    events: string,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    events: string,
    data: object,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    events: string,
    selector: string,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    events: string,
    selector: string,
    data: any,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((events: { [key: string]: any }, selector?: string, data?: any) => JQuery) & ((events: { [key: string]: any }, data?: any) => JQuery);

  /**
   * Specify a function to execute when the DOM is fully loaded.
   *
   * @param handler A function to execute after the DOM is ready.
   * @see {@link https://api.jquery.com/ready/}
   */
  ready: (handler: (jQueryAlias?: JQueryStatic) => any) => JQuery;

  /**
   * Trigger the "resize" event on an element.
   * @see {@link https://api.jquery.com/resize/#resize}
   */
  resize: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "scroll" event on an element.
   * @see {@link https://api.jquery.com/scroll/#scroll}
   */
  scroll: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "select" event on an element.
   * @see {@link https://api.jquery.com/select/#select}
   */
  select: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData: object,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Trigger the "submit" event on an element.
   * @see {@link https://api.jquery.com/submit/#submit}
   */
  submit: (() => JQuery) & ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Execute all handlers and behaviors attached to the matched elements for the given event type.
   *
   * @param eventType A string containing a JavaScript event type, such as click or submit.
   * @param extraParameters Additional parameters to pass along to the event handler.
   * @see {@link https://api.jquery.com/trigger/#trigger-eventType-extraParameters}
   */
  trigger: ((eventType: string, extraParameters?: any[] | object) => JQuery) & ((event: JQueryEventObject, extraParameters?: any[] | object) => JQuery);

  /**
   * Execute all handlers attached to an element for an event.
   *
   * @param eventType A string containing a JavaScript event type, such as click or submit.
   * @param extraParameters An array of additional parameters to pass along to the event handler.
   * @see {@link https://api.jquery.com/triggerHandler/#triggerHandler-eventType-extraParameters}
   */
  triggerHandler: ((eventType: string, ...extraParameters: any[]) => object) & ((event: JQueryEventObject, ...extraParameters: any[]) => object);

  /**
   * Remove a previously-attached event handler from the elements.
   *
   * @param eventType A string containing a JavaScript event type, such as click or submit.
   * @param handler The function that is to be no longer executed.
   * @see {@link https://api.jquery.com/unbind/#unbind-eventType-handler}
   */
  unbind: ((
    eventType?: string,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((eventType: string, fls: boolean) => JQuery) & ((evt: any) => JQuery);

  /**
   * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
   * @see {@link https://api.jquery.com/undelegate/#undelegate}
   */
  undelegate: (() => JQuery) & ((
    selector: string,
    eventType: string,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((selector: string, events: object) => JQuery) & ((namespace: string) => JQuery);

  /**
   * Bind an event handler to the "unload" JavaScript event. (DEPRECATED from v1.8)
   *
   * @param handler A function to execute when the event is triggered.
   * @see {@link https://api.jquery.com/unload/#unload-handler}
   */
  unload: ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData?: any,
    handler?: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document. (DEPRECATED from v1.10)
   * @see {@link https://api.jquery.com/context/}
   */
  context: Element;

  jquery: string;

  /**
   * Bind an event handler to the "error" JavaScript event. (DEPRECATED from v1.8)
   *
   * @param handler A function to execute when the event is triggered.
   * @see {@link https://api.jquery.com/error/#error-handler}
   */
  error: ((
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery) & ((
    eventData: any,
    handler: (this: HTMLElement, eventObject: JQueryEventObject) => any,
  ) => JQuery);

  /**
   * Add a collection of DOM elements onto the jQuery stack.
   *
   * @param elements An array of elements to push onto the stack and make into a new jQuery object.
   * @see {@link https://api.jquery.com/pushStack/#pushStack-elements}
   */
  pushStack: ((elements: any[]) => JQuery) & ((elements: any[], name: string, arguments: any[]) => JQuery);

  /**
   * Insert content, specified by the parameter, after each element in the set of matched elements.
   *
   * @param content1 HTML string, DOM element, DocumentFragment, array of elements, or jQuery object to insert after each element in the set of matched elements.
   * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
   * @see {@link https://api.jquery.com/after/#after-content-content}
   */
  after: ((
    content1: JQuery | any[] | Element | DocumentFragment | Text | string,
    ...content2: any[]
  ) => JQuery) & ((
    func: (
      this: HTMLElement,
      index: number,
      html: string,
    ) => string | Element | JQuery,
  ) => JQuery);

  /**
   * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
   *
   * @param content1 DOM element, DocumentFragment, array of elements, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
   * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
   * @see {@link https://api.jquery.com/append/#append-content-content}
   */
  append: ((
    content1: JQuery | any[] | Element | DocumentFragment | Text | string,
    ...content2: any[]
  ) => JQuery) & ((
    func: (index: number, html: string) => string | Element | JQuery,
  ) => JQuery);

  /**
   * Insert every element in the set of matched elements to the end of the target.
   *
   * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
   * @see {@link https://api.jquery.com/appendTo/}
   */
  appendTo: (target: JQuery | any[] | Element | string) => JQuery;

  /**
   * Insert content, specified by the parameter, before each element in the set of matched elements.
   *
   * @param content1 HTML string, DOM element, DocumentFragment, array of elements, or jQuery object to insert before each element in the set of matched elements.
   * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
   * @see {@link https://api.jquery.com/before/#before-content-content}
   */
  before: ((
    content1: JQuery | any[] | Element | DocumentFragment | Text | string,
    ...content2: any[]
  ) => JQuery) & ((
    func: (index: number, html: string) => string | Element | JQuery,
  ) => JQuery);

  /**
   * Create a deep copy of the set of matched elements.
   *
   * @param withDataAndEvents A Boolean indicating whether event handlers and data should be copied along with the elements. The default value is false.
   * @param deepWithDataAndEvents A Boolean indicating whether event handlers and data for all children of the cloned element should be copied. By default its value matches the first argument's value (which defaults to false).
   * @see {@link https://api.jquery.com/clone/}
   */
  clone: (withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean) => JQuery;

  /**
   * Remove the set of matched elements from the DOM.
   *
   * @param selector A selector expression that filters the set of matched elements to be removed.
   * @see {@link https://api.jquery.com/detach/}
   */
  detach: (selector?: string) => JQuery;

  /**
   * Remove all child nodes of the set of matched elements from the DOM.
   * @see {@link https://api.jquery.com/empty/}
   */
  empty: () => JQuery;

  /**
   * Insert every element in the set of matched elements after the target.
   *
   * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
   * @see {@link https://api.jquery.com/insertAfter/}
   */
  insertAfter: (target: JQuery | any[] | Element | Text | string) => JQuery;

  /**
   * Insert every element in the set of matched elements before the target.
   *
   * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
   * @see {@link https://api.jquery.com/insertBefore/}
   */
  insertBefore: (target: JQuery | any[] | Element | Text | string) => JQuery;

  /**
   * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
   *
   * @param content1 DOM element, DocumentFragment, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
   * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
   * @see {@link https://api.jquery.com/prepend/#prepend-content-content}
   */
  prepend: ((
    content1: JQuery | any[] | Element | DocumentFragment | Text | string,
    ...content2: any[]
  ) => JQuery) & ((
    func: (index: number, html: string) => string | Element | JQuery,
  ) => JQuery);

  /**
   * Insert every element in the set of matched elements to the beginning of the target.
   *
   * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
   * @see {@link https://api.jquery.com/prependTo/}
   */
  prependTo: (target: JQuery | any[] | Element | string) => JQuery;

  /**
   * Remove the set of matched elements from the DOM.
   *
   * @param selector A selector expression that filters the set of matched elements to be removed.
   * @see {@link https://api.jquery.com/remove/}
   */
  remove: (selector?: string) => JQuery;

  /**
   * Replace each target element with the set of matched elements.
   *
   * @param target A selector string, jQuery object, DOM element, or array of elements indicating which element(s) to replace.
   * @see {@link https://api.jquery.com/replaceAll/}
   */
  replaceAll: (target: JQuery | any[] | Element | string) => JQuery;

  /**
   * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
   *
   * @param newContent The content to insert. May be an HTML string, DOM element, array of DOM elements, or jQuery object.
   * @see {@link https://api.jquery.com/replaceWith/#replaceWith-newContent}
   */
  replaceWith: ((newContent: JQuery | any[] | Element | Text | string) => JQuery) & ((func: (this: HTMLElement) => Element | JQuery) => JQuery);

  /**
   * Get the combined text contents of each element in the set of matched elements, including their descendants.
   * @see {@link https://api.jquery.com/text/#text}
   */
  text: (() => string) & ((text: string | number | boolean) => JQuery) & ((func: (index: number, text: string) => string) => JQuery);

  /**
   * Retrieve all the elements contained in the jQuery set, as an array.
   * @name toArray
   * @see {@link https://api.jquery.com/toArray/}
   */
  toArray: () => Element[];

  /**
   * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
   * @see {@link https://api.jquery.com/unwrap/}
   */
  unwrap: () => JQuery;

  /**
   * Wrap an HTML structure around each element in the set of matched elements.
   *
   * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
   * @see {@link https://api.jquery.com/wrap/#wrap-wrappingElement}
   */
  wrap: ((wrappingElement: JQuery | Element | string) => JQuery) & ((func: (this: HTMLElement, index: number) => string | JQuery) => JQuery);

  /**
   * Wrap an HTML structure around all elements in the set of matched elements.
   *
   * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
   * @see {@link https://api.jquery.com/wrapAll/#wrapAll-wrappingElement}
   */
  wrapAll: ((wrappingElement: JQuery | Element | string) => JQuery) & ((func: (this: HTMLElement, index: number) => string) => JQuery);

  /**
   * Wrap an HTML structure around the content of each element in the set of matched elements.
   *
   * @param wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
   * @see {@link https://api.jquery.com/wrapInner/#wrapInner-wrappingElement}
   */
  wrapInner: ((wrappingElement: JQuery | Element | string) => JQuery) & ((func: (this: HTMLElement, index: number) => string) => JQuery);

  /**
   * Iterate over a jQuery object, executing a function for each matched element.
   *
   * @param func A function to execute for each matched element. Can stop the loop by returning false.
   * @see {@link https://api.jquery.com/each/}
   */
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  each: (
    func: (
      this: HTMLElement,
      index: number,
      elem: Element,
    ) => boolean | void,
  ) => JQuery;

  /**
   * Retrieve one of the elements matched by the jQuery object.
   *
   * @param index A zero-based integer indicating which element to retrieve.
   * @see {@link https://api.jquery.com/get/#get-index}
   */
  get: ((index: number) => Element) & (() => Element[]);

  /**
   * Search for a given element from among the matched elements.
   * @see {@link https://api.jquery.com/index/#index}
   */
  index: (() => number) & ((selector: string | JQuery | Element) => number);

  /**
   * The number of elements in the jQuery object.
   * @see {@link https://api.jquery.com/length/}
   */
  length: number;
  /**
   * A selector representing selector passed to jQuery(), if any, when creating the original set.
   * version deprecated: 1.7, removed: 1.9
   * @see {@link https://api.jquery.com/selector/}
   */
  selector: string;
  [index: number]: Element;

  /**
   * Add elements to the set of matched elements.
   *
   * @param selector A string representing a selector expression to find additional elements to add to the set of matched elements.
   * @param context The point in the document at which the selector should begin matching; similar to the context argument of the $(selector, context) method.
   * @see {@link https://api.jquery.com/add/#add-selector}
   */
  add: ((selector: string, context?: Element) => JQuery) & ((...elements: Element[]) => JQuery) & ((html: string) => JQuery) & ((obj: JQuery) => JQuery);

  /**
   * Get the children of each element in the set of matched elements, optionally filtered by a selector.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/children/}
   */
  children: (selector?: string) => JQuery;

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/closest/#closest-selector}
   */
  closest: ((selector: string) => JQuery) & ((selector: string, context?: Element) => JQuery) & ((obj: JQuery) => JQuery) & ((element: Element) => JQuery) & ((selectors: any, context?: Element) => any[]);

  /**
   * Get the children of each element in the set of matched elements, including text and comment nodes.
   * @see {@link https://api.jquery.com/contents/}
   */
  contents: () => JQuery;

  /**
   * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
   * @see {@link https://api.jquery.com/end/}
   */
  end: () => JQuery;

  /**
   * Reduce the set of matched elements to the one at the specified index.
   *
   * @param index An integer indicating the 0-based position of the element. OR An integer indicating the position of the element, counting backwards from the last element in the set.
   * @see {@link https://api.jquery.com/eq/}
   */
  eq: (index: number) => JQuery;

  /**
   * Reduce the set of matched elements to those that match the selector or pass the function's test.
   *
   * @param selector A string containing a selector expression to match the current set of elements against.
   * @see {@link https://api.jquery.com/filter/#filter-selector}
   */
  filter: ((selector: string) => JQuery) & ((
    func: (this: HTMLElement, index: number, element: Element) => boolean,
  ) => JQuery) & ((element: Element) => JQuery) & ((obj: JQuery) => JQuery);

  /**
   * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
   *
   * @param selector_element A string containing a selector expression, an element or a jQuery object to match elements against.
   * @see {@link https://api.jquery.com/find/#find-selector}
   * @see {@link https://api.jquery.com/find/#find-element}
   */
  find: (selector_element: string | Element | JQuery) => JQuery;

  /**
   * Reduce the set of matched elements to the first in the set.
   * @see {@link https://api.jquery.com/first/}
   */
  first: () => JQuery;

  /**
   * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/has/#has-selector}
   */
  has: ((selector: string) => JQuery) & ((contained: Element) => JQuery);

  /**
   * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/is/#is-selector}
   */
  is: ((selector: string) => boolean) & ((
    func: (this: HTMLElement, index: number, element: Element) => boolean,
  ) => boolean) & ((obj: JQuery) => boolean) & ((elements: any) => boolean);

  /**
   * Reduce the set of matched elements to the final one in the set.
   * @see {@link https://api.jquery.com/last/}
   */
  last: () => JQuery;

  /**
   * Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
   *
   * @param callback A function object that will be invoked for each element in the current set.
   * @see {@link https://api.jquery.com/map/}
   */
  map: (
    callback: (
      this: HTMLElement,
      index: number,
      domElement: Element,
    ) => any,
  ) => JQuery;

  /**
   * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/next/}
   */
  next: (selector?: string) => JQuery;

  /**
   * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/nextAll/}
   */
  nextAll: (selector?: string) => JQuery;

  /**
   * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
   *
   * @param selector A string containing a selector expression to indicate where to stop matching following sibling elements.
   * @param filter A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/nextUntil/#nextUntil-selector-filter}
   */
  nextUntil: ((selector?: string, filter?: string) => JQuery) & ((element?: Element, filter?: string) => JQuery) & ((obj?: JQuery, filter?: string) => JQuery);

  /**
   * Remove elements from the set of matched elements.
   *
   * @param selector A string containing a selector expression, or an array of elements to match against the set.
   * @see {@link https://api.jquery.com/not/#not-selector}
   */
  not: ((selector: string | any[]) => JQuery) & ((func: (index: number, element: Element) => boolean) => JQuery) & ((elements: Element | Element[]) => JQuery) & ((obj: JQuery) => JQuery);

  /**
   * Get the closest ancestor element that is positioned.
   * @see {@link https://api.jquery.com/offsetParent/}
   */
  offsetParent: () => JQuery;

  /**
   * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/parent/}
   */
  parent: (selector?: string) => JQuery;

  /**
   * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/parents/}
   */
  parents: (selector?: string) => JQuery;

  /**
   * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
   *
   * @param selector A string containing a selector expression to indicate where to stop matching ancestor elements.
   * @param filter A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/parentsUntil/#parentsUntil-selector-filter}
   */
  parentsUntil: ((selector?: string, filter?: string) => JQuery) & ((element?: Element, filter?: string) => JQuery) & ((obj?: JQuery, filter?: string) => JQuery);

  /**
   * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/prev/}
   */
  prev: (selector?: string) => JQuery;

  /**
   * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/prevAll/}
   */
  prevAll: (selector?: string) => JQuery;

  /**
   * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
   *
   * @param selector A string containing a selector expression to indicate where to stop matching preceding sibling elements.
   * @param filter A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/prevUntil/#prevUntil-selector-filter}
   */
  prevUntil: ((selector?: string, filter?: string) => JQuery) & ((element?: Element, filter?: string) => JQuery) & ((obj?: JQuery, filter?: string) => JQuery);

  /**
   * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
   *
   * @param selector A string containing a selector expression to match elements against.
   * @see {@link https://api.jquery.com/siblings/}
   */
  siblings: (selector?: string) => JQuery;

  /**
   * Reduce the set of matched elements to a subset specified by a range of indices.
   *
   * @param start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
   * @param end An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
   * @see {@link https://api.jquery.com/slice/}
   */
  slice: (start: number, end?: number) => JQuery;

  /**
   * Show the queue of functions to be executed on the matched elements.
   *
   * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
   * @see {@link https://api.jquery.com/queue/#queue-queueName}
   */
  queue: ((queueName?: string) => any[]) & ((newQueue: BoundFunction[]) => JQuery) & ((callback: BoundFunction) => JQuery) & ((queueName: string, newQueue: BoundFunction[]) => JQuery) & ((queueName: string, callback: BoundFunction) => JQuery);

  /**
   * Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.
   *
   * @param object An object to merge onto the jQuery prototype.
   * @see {@link https://api.jquery.com/jQuery.fn.extend/#jQuery-fn-extend-object}
   */
  extend: (object: {
    [method: string]: (this: JQuery, ...args: any[]) => any;
  }) => JQuery;
};
// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "jquery" {
  export = $;
}
declare let jQuery: JQueryStatic;
declare let $: JQueryStatic;
