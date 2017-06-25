/*
 The @global tag specifies that a symbol should appear in the documentation as a global symbol.
 This tag is especially useful for symbols that are defined locally, then assigned to a global symbol.

 http://usejsdoc.org/tags-global.html
 */

(function() {
    /** @global */
    var foo = 'hello foo';

    this.foo = foo;
}).apply(window);