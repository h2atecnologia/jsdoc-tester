/** @constructor */
Person = function() {
    /**
     * Documented as Person#instanceFunction
     * @returns {string}
     */
    this.instanceFunction = function() {
        return "I'm an instance.";
    };

    /**
     * Documented as Person~innerFunction
     * @returns {string}
     */
    function innerFunction() {
        return "I'm inner.";
    }
};

/**
 * Documented as Person.staticFunction
 * @returns {string}
 */
Person.staticFunction = function() {
    return "I'm static.";
};