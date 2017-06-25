/*
 The @static tag indicates that a symbol is contained within a parent
 and can be accessed without instantiating the parent.

 Using the @static tag will override a symbol's default scope,
 with one exception: Symbols in global scope will remain global.

 http://usejsdoc.org/tags-static.html
 */

/** @module Rollerskate */

/**
 * The 'wheel' variable is documented as Rollerskate.wheel
 * rather than Rollerskate~wheel.
 * @static
 */
var wheel = 1;