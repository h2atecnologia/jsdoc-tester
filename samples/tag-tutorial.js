/*
 As a block tag:
 @tutorial <tutorialID>

 As an inline tag:
 {@tutorial <tutorialID>}


 The @tutorial tag can be used both as a block and inline tag.
 It inserts a link to a tutorial file that is provided as part of the documentation.
 You can use the @tutorial tag more than once in a single JSDoc comment.

 See the tutorials overview for instructions on creating tutorials.
 http://usejsdoc.org/about-tutorials.html

 http://usejsdoc.org/tags-tutorial.html
 */


// Using the @tutorial block tag

/**
 * Description
 * @class
 * @tutorial tutorial-1
 * @tutorial tutorial-2
 */
function MyClassTut1() {}

// Using the @tutorial inline tag

/**
 * Description.
 * Check out {@tutorial tutorial-1} and {@tutorial tutorial-2}.
 * @class
 */
function MyClassTut2() {}