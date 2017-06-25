/*
 Synonyms @arg @argument


 The @param tag (or @arg or @argument) documents a function parameter.

 The @param tag requires you to specify the name of the parameter you are documenting.
 You can also include the parameter's type, enclosed in curly brackets, and a description of the parameter.

 The parameter type can be a built-in JavaScript type, such as string or Object,
 or a JSDoc namepath to another symbol in your code.
 If you have written documentation for the symbol at that namepath,
 JSDoc will automatically link to the documentation for that symbol.

 http://usejsdoc.org/tags-param.html
 */


//Allows one type OR another type (type union)

/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */
function sayHello(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    } else if (Array.isArray(somebody)) {
        somebody = somebody.join(', ');
    }
    alert('Hello ' + somebody);
}


// Allows a parameter to be repeated

/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num - A positive or negative number.
 */
function sum(num) {
    var i = 0, n = arguments.length, t = 0;
    for (; i < n; i++) {
        t += arguments[i];
    }
    return t;
}


