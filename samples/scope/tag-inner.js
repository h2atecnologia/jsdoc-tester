/*
 Using the @inner tag will mark a symbol as an inner member of its parent symbol. This means it can be referred to by "Parent~Child".

 Using @inner will override a doclet's default scope (unless it is in the global scope, in which case it will remain global).

 http://usejsdoc.org/tags-inner.html
 */

/** @namespace */
var myNamespace = {
    /**
     * foo is now MyNamespace~foo rather than MyNamespace.foo.
     * @inner
     */
    foo: 1
};
