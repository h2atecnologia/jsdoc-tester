/*
 Using the @instance tag will mark a symbol as an instance member of its parent symbol.
 This means it can be referred to by "Parent#Child".

 Using @instance will override a doclet's default scope
 (unless it is in the global scope, in which case it will remain global).

 http://usejsdoc.org/tags-instance.html
 */

/** @namespace */
var BaseObject = {
    /**
     * foo is now BaseObject#foo rather than BaseObject.foo.
     * @instance
     */
    foo: null
};

/** Generates BaseObject instances. */
function fooFactory(fooValue) {
    var props = { foo: fooValue };
    return Object.create(BaseObject, props);
}