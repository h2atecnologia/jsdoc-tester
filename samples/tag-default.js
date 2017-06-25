/*
 @default [<some value>]
 The @default tag allows you to document the assigned value of a symbol.

 You can supply this tag with a value yourself
 or you can allow JSDoc to automatically document the value from the source code
 -- only possible when the documented symbol is being assigned
 a single, simple value that is either: a string, a number, a boolean or null.

 http://usejsdoc.org/tags-default.html
 */
/**
 * @constant
 * @type {string}
 * @default
 */
const RED = 'FF0000';