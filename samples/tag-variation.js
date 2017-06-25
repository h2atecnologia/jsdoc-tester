/*
 @variation <variationNumber>

 Sometimes your code may include multiple symbols with the same longname.
 For example, you might have both a global class and a top-level namespace called Widget.
 In cases such as these, what does "{@link Widget}" or "@memberof Widget" mean?
 The global namespace, or the global class?

 Variations help JSDoc distinguish between different symbols with the same longname.
 For example, if "@variation 2" is added to the JSDoc comment for the Widget class,
 "{@link Widget(2)}" will refer to the class,
 and "{@link Widget}" will refer to the namespace.
 Alternatively, you can include the variation when you specify the symbol's with tags such as @alias or @name
 (for example, "@alias Widget(2)").

 http://usejsdoc.org/tags-variation.html
 */


/**
 * The Widget namespace.
 * @namespace Widget
 */

// you can also use '@class Widget(2)' and omit the @variation tag
/**
 * The Widget class. Defaults to the properties in {@link Widget.properties}.
 * @class
 * @variation 2
 * @param {Object} props - Name-value pairs to add to the widget.
 */
function Widget(props) {}

/**
 * Properties added by default to a new {@link Widget(2)} instance.
 */
Widget.properties = {
    /**
     * Indicates whether the widget is shiny.
     */
    shiny: true,
    /**
     * Indicates whether the widget is metallic.
     */
    metallic: true
};