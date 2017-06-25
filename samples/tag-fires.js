/*
 @fires <className>#[event:]<eventName>

 Synonyms: @emits

 The @fires tag indicates that a method can fire a specified type of event when it is called.
 Use the @event tag to document the event's content.

 http://usejsdoc.org/tags-fires.html
 */


/**
 * @class
 */
var Milkshake = function () {};

/**
* Drink the milkshake.
*
* @fires Hurl#snowball
*/
Milkshake.prototype.drink = function() {
// ...
};