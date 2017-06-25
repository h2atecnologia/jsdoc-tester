/*
 The @event tag allows you to document an event that can be fired.
 A typical event is represented by an object with a defined set of properties.

 Once you have used the @event tag to define a specific type of event,
 you can use the @fires tag to indicate that a method can fire that event.

 JSDoc automatically prepends the namespace event: to each event's name.
 In general, you must include this namespace when you link to the event in another doclet.
 (The @fires tag is a notable exception; it allows you to omit the namespace.)

 Note: JSDoc 3 uses @event doclets to document the content of an event.

 http://usejsdoc.org/tags-event.html
 */

/**
 * @constructor
 */
var Hurl = function () {};

/**
 * Throw a snowball.
 *
 * @fires Hurl#snowball
 */
Hurl.prototype.snowballAction = function() {
    /**
     * Snowball event.
     *
     * @event Hurl#snowball
     * @type {object}
     * @property {boolean} isPacked - Indicates whether the snowball is tightly packed.
     */
    this.emit('snowball', {
        isPacked: this._snowball.isPacked
    });
};