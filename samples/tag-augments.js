/*
 @augments <namepath>

 Synonyms: @extend

 The @augments or @extends tag marks a symbol as augmenting another symbol.

 While current versions of JavaScript don't allow classes or subclasses
 in the same way that class-based languages like Java do,
 many programmers choose to think of their code structure in these terms.
 For this purpose JSDoc provides the @class and @extends tags.

 If you wish to express a similar relationship between two symbols,
 but don't wish to promote the classical analogy, you can use the @contructor and @augments tags instead.

 http://usejsdoc.org/tags-augments.html
 */

/**
 * @constructor
 */
function Animal() {
    /** Is this animal alive? */
    this.alive = true;
}

/**
 * @constructor
 * @augments Animal
 */
function Duck() {
}
Duck.prototype = new Animal();

/** What do ducks say? */
Duck.prototype.speak = function() {
    if (this.alive) {
        alert('Quack!');
    }
}

var d = new Duck();
d.speak(); // Quack!
d.alive = false; // dead duck?
d.speak();