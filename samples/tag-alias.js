/*
 @alias <aliasNamepath>

 The @alias tag causes JSDoc to treat all references to a member
 as if the member had a different name.

 This tag is especially useful if you define a class within an inner function;
 in this case, you can use the @alias tag to tell JSDoc how the class is exposed in your app.

 http://usejsdoc.org/tags-alias.html
 */

/**
 * Bar function.
 * @name bar
 */
function foo() {}


/* Using @alias with an anonymous constructor function */

/**
 * @namespace trackr
 */

Klass('trackr.CookieManager',

    /**
     * @class
     * @alias trackr.CookieManager
     * @param {Object} kv
     */
    function(kv) {
        /** The value. */
        this.value = kv;
    }

);

/* Using @alias for static members of a namespace */

/** @namespace */
var Apple = {};

(function(ns) {
    /**
     * @namespace
     * @alias Apple.Core
     */
    var core = {};
    /** Can put anything here */
    core.seed = function() {};

    ns.Core = core;
})(Apple);


/*  Using @alias for an object literal */

// Documenting objectA with @alias

var objectA = (function() {

    /**
     * Documented as objectA
     * @alias objectA
     * @namespace
     */
    var x = {
        /**
         * Documented as objectA.myProperty
         */
        myProperty: 'foo'
    };

    return x;
})();

// Documenting objectB with @lends

/**
 * Documented as objectB
 * @namespace
 */
var objectB = (function() {

    /** @lends objectB */
    var x = {
        /**
         * Documented as objectB.myProperty
         */
        myProperty: 'bar'
    };

    return x;
})();
