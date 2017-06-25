/*
 Provide an example of how to use a documented item.

 http://usejsdoc.org/tags-example.html
 */

/**
 * @namespace
 */
var globalNS = {};

/**
 * Solves equations of the form a * x = b
 * @example
 * // returns 2
 * globalNS.method1(5, 10);
 * @example Example usage of a caption
 * // returns 3
 * globalNS.method(5, 15);
 * @returns {Number} Returns the value of x for the equation.
 */
globalNS.method1 = function (a, b) {
    return b / a;
};