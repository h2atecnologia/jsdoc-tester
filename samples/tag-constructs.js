/*
 @constructs [<name>]

 When using an object literal to define a class (for example with the @lends tag)
 the @constructs tag allows you to document that
 a particular function will be used to construct instances of that class.

 http://usejsdoc.org/tags-constructs.html
 */

var Person2 = makeClass(
    /** @lends Person2.prototype */
    {
        /**
         * @constructs
         * @param {string} name
         */
        initialize: function(name) {
            this.name = name;
        },
        /** Describe me. */
        say: function(message) {
            return this.name + " says: " + message;
        }
    }
);


// Without @lends you must provide the name of the class
makeClass('Menu',
    /**
     * @constructs Menu
     * @param items
     */
    function (items) { },
    {
        /** @memberof Menu# */
        show: function(){}
    }
);