/*
 @this <namePath>

 The @this tag indicates what the this keyword refers to when used within another symbol.

 http://usejsdoc.org/tags-this.html
 */

/** @constructor */
function Greeter(name) {
    setName.apply(this, name);
}

/** @this Greeter */
function setName(name) {
    /** document me */
    this.name = name;
}