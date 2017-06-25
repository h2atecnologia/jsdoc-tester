/*
 @type {typeName}

 The @type tag allows you to provide a type expression identifying the type of value that a symbol may contain,
 or the type of value returned by a function.
 You can also include type expressions with many other JSDoc tags, such as the @param tag.


 A type expression can include
 - the JSDoc namepath to a symbol (for example, myNamespace.MyClass);
 - a built-in JavaScript type (for example, string);
 - or a combination of these.

 - any Google Closure Compiler type expression (https://developers.google.com/closure/compiler/docs/js-for-compiler#types)
 - as well as several other formats that are specific to JSDoc.


 Each type is specified by providing a type expression, using one of the formats described here:
 http://usejsdoc.org/tags-type.html

 */


/**
 @type {Person[]}
 */
var people = {};

/**
 * @type {Object.<string, number>}
 */
var typeEx1;


/**
 @type {{a: number, b: string, c}}
 */
var typeEx2;



