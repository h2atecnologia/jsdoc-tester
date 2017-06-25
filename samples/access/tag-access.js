/*
 @access <private|protected|public>

 The @access tag specifies the access level of a member.

 Private members will not show in the output documentation unless JSDoc is given the --private option.

 Note that a doclet's access level is different from its scope.
 For example, if "Parent" has an inner variable "child" that is documented as @public,
 "child" will still be treated as an inner variable with the namepath "Parent~child".
 To change a doclet's scope, see the @instance, @static, and @global tags.

 http://usejsdoc.org/tags-access.html
 */

/**
 * @constructor
 */
function OtherThingy() {

    /** @private */
    var foo = 0;

    /** @protected */
    this._bar = 1;

    /** @public */
    this.pez = 2;

}