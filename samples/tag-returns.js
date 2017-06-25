/*
 Synonyms: @return

 The @returns tag documents the value that a function returns.

 http://usejsdoc.org/tags-returns.html
 */

/**
 * Returns the sum of a and b
 * @param {Number} a
 * @param {Number} b
 * @param {Boolean} retArr If set to true, the function will return an array
 * @returns {Number|Array} Sum of a and b or an array that contains a, b and the sum of a and b.
 */
function sumComplex(a, b, retArr) {
    if (retArr) {
        return [a, b, a + b];
    }
    return a + b;
}