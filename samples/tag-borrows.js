/*
 @borrows <that namepath> as <this namepath>

 The @borrows tag allows you to add documentation for another symbol to your documentation.
 This tag would be useful if you had more than one way to reference a function,
 but you didn't want to duplicate the same documentation in two places.

 http://usejsdoc.org/tags-borrows.html
*/

// Duplicate the documentation for trstr as util.trim


/**
 * @namespace
 * @borrows trstr as trim
 */
var util = {
    trim: trstr
};

/** 
 * Remove whitespace from around a string.
 * @param {string} str
 */
function trstr(str) {
}