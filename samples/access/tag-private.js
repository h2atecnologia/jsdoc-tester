/*
 The @private tag marks a symbol as private,
 or not meant for general use.

 Private members are not shown in the generated output unless JSDoc is run with the -p or --private switch.

 The @private tag is not inherited by child members.
 For example, if the @private tag is added to a namespace,
 members of the namespace can still appear in the generated output;
 because the namespace is private, the members' namepath will not include the namespace.

 The @private tag is equivalent to "@access private". See @access for details about the @access tag.

 http://usejsdoc.org/tags-private.html
 */

/** @namespace */
var Documents = {
    /**
     * An ordinary newspaper.
     */
    Newspaper: 1,
    /**
     * My diary.
     * @private
     */
    Diary: 2
};