/*
 @member [<type>] [<name>]

 Synomyms: @var

 The @member tag identifies any member that does not have a more specialized kind,
 such as "class", "function", or "constant".
 A member can optionally have a type as well as a name.

 http://usejsdoc.org/tags-member.html
 */


/** @class */
function Data() {
    /** @member {Object} */
    this.point = {};

    /**
     * @type {Object}
     */
    this.anotherPoint = {};
}