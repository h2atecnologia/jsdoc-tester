/*
 Synomyms @prop
 The @property tag is a way to easily document a list of static properties of a class, namespace or other object.

 Normally JSDoc templates would create an entire new page to display information
 about each level of a nested namespace hierarchy.
 Sometimes what you really want is to just list all the properties,
 including nested properties, all together on the same page.

 Note that property tags must be used in doc comments for the thing that they are properties of,
 a namespace or a class for example.
 This tag is intended for simple collections of static properties,
 it does not allow you to provide @examples or similar complex information for each property,
 just the type, name and description.

 http://usejsdoc.org/tags-property.html
 */

/**
 * @namespace
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
var config = {
    defaults: {
        players: 1,
        level:   'beginner',
        treasure: {
            gold: 0
        }
    }
};