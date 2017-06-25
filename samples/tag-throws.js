/*
 @throws free-form description
 @throws {<type>}
 @throws {<type>} free-form description

 Synonyms: @exception

 The @throws tag allows you to document an error that a function might throw.
 You can include the @throws tag more than once in a single JSDoc comment.

 http://usejsdoc.org/tags-throws.html
 */


// Using the @throws tag with a type
/**
 * @throws {InvalidArgumentException}
 */
function throw1(x) {}

// Using the @throws tag with a description
/**
 * @throws Will throw an error if the argument is null.
 */
function throw2(x) {}

// Using the @throws tag with a type and description
/**
 * @throws {DivideByZero} Argument x must be non-zero.
 */
function throw3(x) {}