/*
The @enum tag documents a collection of static properties whose values are all of the same type.

An enum is similar a collection of properties,
except that an enum is documented in its own doc comment,
whereas properties are documented within the doc comment of their container.

Often this tag is used with @readonly, as an enum typically represents a collection of constants.

 http://usejsdoc.org/tags-enum.html
 */

/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
var triState = {
    /** The true value */
    TRUE: 1,
    FALSE: -1,
    /** @type {boolean} */
    MAYBE: true
};