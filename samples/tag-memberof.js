/*
 @memberof <parentNamepath>
 @memberof! <parentNamepath>

 The @memberof tag identifies a member symbol that belongs to a parent symbol.

 By default, the @memberof tag documents member symbols as static members.
 For inner and instance members, you can use scoping punctuation after the namepath,
 or you can add the @inner or @instance tag.

 The "forced" @memberof tag, @memberof!, forces the object to be documented
 as belonging to a specific parent even if it appears to have a different parent.

 http://usejsdoc.org/tags-memberof.html
 */

// need @memberOf (static) or @memberOf..# (inner instance) to force attaching a property to a namespace

/** @namespace */
var Tools = {};

/** @memberof Tools */
var hammer = function() {
};

Tools.hammer = hammer;


/** @namespace */
var myProject;

/** @namespace */
myProject.myModule = function () {

    /**
     * @memberOf myProject.myModule#
     * @private
     */
    var myPrivateVar = "";

    /**
     * @memberOf myProject.myModule#
     * @private
     */
    var myPrivateMethod = function () {};


    return  {
        /**
         * @memberof! myProject.myModule
         */
        myPublicProperty: "",

        /**
         * @memberof myProject.myModule#
         */
        myPublicMethod: function () {}
    };
}();
