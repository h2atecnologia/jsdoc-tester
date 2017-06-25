/*
 @typedef [<type>] <namepath>

 The @typedef tag is useful for documenting custom types,
 particularly if you wish to refer to them repeatedly.
 These types can then be used within other tags expecting a type, such as @type or @param.

 Use the @callback tag to document the type of callback functions.
 http://usejsdoc.org/tags-typedef.html
 */


//Using the @typedef tag
/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Set the magic number.
 * @param {NumberLike} x - The magic number.
 */
function setMagicNumber(x) {
}



// Using @typedef to document a complex type for a class
/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} WishGranter~Triforce
 * @property {boolean} hasCourage - Indicates whether the Courage component is present.
 * @property {boolean} hasPower - Indicates whether the Power component is present.
 * @property {boolean} hasWisdom - Indicates whether the Wisdom component is present.
 */

/**
 * A class for granting wishes, powered by the Triforce.
 * @class
 * @param {...WishGranter~Triforce} triforce - One to three {@link WishGranter~Triforce} objects
 * containing all three components of the Triforce.
 */
function WishGranter() {}