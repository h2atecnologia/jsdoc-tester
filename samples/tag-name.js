/*
 @name <namePath>

 he @name tag forces JSDoc to associate the remainder of the JSDoc comment with the given name,
 ignoring all surrounding code.
 This tag is best used in "virtual comments" for symbols
 that are not readily visible in the code,
 such as methods that are generated at runtime.

 http://usejsdoc.org/tags-name.html
 */


/**
 * @name highlightSearchTerm
 * @function
 * @global
 * @param {string} term - The search term to highlight.
 */
eval("window.highlightSearchTerm = function(term) {};")