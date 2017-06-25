/*
 @exports <moduleName>

 Use the @exports tag when documenting JavaScript modules that export anything other than the "exports" object or the "module.exports" property.

 http://usejsdoc.org/tags-exports.html
 */

// IDENTICAL TO THE AMD EXAMPLE: amd-exports-object.js

define(function () {

    /**
     * A module that says hello!
     * @exports hello/world
     */
    var ns = {};

    /** Say hello. */
    ns.sayHello = function() {
        return 'Hello world';
    };

    return ns;
});