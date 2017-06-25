/*
 @requires <someModuleName>

 The @requires tag allows you to document that a module is needed to use this code.
 A JSDoc comment can have multiple @require tags.
 The module name can be specified as "moduleName" or "module:moduleName"; both forms will be interpreted as modules.

 http://usejsdoc.org/tags-requires.html
 */

/**
 * This class requires the modules {@link module:xyzcorp/helper} and
 * {@link module:xyzcorp/helper.ShinyWidget#polish}.
 * @class
 * @requires module:xyzcorp/helper
 * @requires xyzcorp/helper.ShinyWidget#polish
 */
function Widgetizer() {}