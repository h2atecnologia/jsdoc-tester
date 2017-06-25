/*
 @namespace [{<type>}] <SomeName>]

 The @namespace tag indicates that an object creates a namespace for its members.
 You can also write a virtual JSDoc comment that defines a namespace used by your code.

 For unusual characters, see the documentation

 http://usejsdoc.org/tags-namespace.html

 */


/**
 * My namespace.
 * @namespace myVirtualNamespace
 */

/**
 * @function myVirtualFunction
 * @memberOf myVirtualNamespace#
 */

/**
 * A variable in the global namespace called 'foo'.
 * @var {number} foo
 */

/**
 * myInnerFunction is now myVirtualNamespace~myInnerFunction.
 * @function myInnerFunction
 * @memberof myVirtualNamespace
 * @inner
 */