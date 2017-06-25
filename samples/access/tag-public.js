/*
 The @public tag indicates that a symbol should be documented as if it were public.

 By default, JSDoc treats all symbols as public,
 so using this tag does not normally affect the generated documentation.
  However, you may prefer to use the @public tag explicitly
 so it is clear to others that you intended to make the symbol public.

 In contrast to previous version of JSDoc, the @public tag does not affect a symbol's scope.
 Use the @instance, @static, and @global tags to change a symbol's scope.

 http://usejsdoc.org/tags-public.html
 */
/**
 * The Thingy class is available to all.
 * @class
 */
function Thingy2() {
    /**
     * The Thingy~foo member. Note that 'foo' is still an inner member
     * of 'Thingy', in spite of the @public tag.
     */
    var foo = 0;
}