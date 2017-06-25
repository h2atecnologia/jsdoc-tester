/*
 @lends <namepath>

 The @lends tag allows you to document all the members of an object literal
 as if they were members of a symbol with the given name.
 You might want to do this if you are passing an object literal
 into a function that creates a named class from its members.

 http://usejsdoc.org/tags-lends.html
 */


// Documented as static methods

/** @class */
var Person3 = makeClass(
    /** @lends Person3 */
    {
        /**
         *
         * @param name
         */
        initialize: function(name) {
            this.name = name;
        },
        /**
         *
         * @param message
         * @returns {string}
         */
        say: function(message) {
            return this.name + " says: " + message;
        }
    }
);

// Documented as instance methods
// see tag-constructs.js