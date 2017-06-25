/*
 @mixes <OtherObjectPath>

 The @mixes tag indicates that the current object mixes in all the members from OtherObjectPath, which is a @mixin.

 http://usejsdoc.org/tags-mixes.html
 */

// Depends on mixin defined in tag-mixin.js



/**
 * @constructor FormButton
 * @mixes Eventful
 */
var FormButton = function() {
    // code...
};
FormButton.prototype.press = function() {
    this.fire('press', {});
};
mix(Eventful).into(FormButton.prototype);

