/*
 {@link someSymbol}
 {@link http://some.url.com}
 [caption here]{@link someSymbol}
 [caption here]{@link http://some.url.com}
 {@link someSymbol|caption here}
 {@link http://some.url.com|caption here}
 {@link http://some.url.com Caption Here (after the first space)}
 {@link someSymbol Caption Here (after the first space)}

 The following work in the same way as @link but render in monospace or normal font respectively:

 {@linkcode ...}
 {@linkplain ...}

 The following work in the same way as @link but render in monospace or normal font respectively:

 {@linkcode ...}
 {@linkplain ...}

 You need to use a symbol's full name to have it linked
 (e.g. {@link MyNamespace.MyClass#property} rather than MyClass#property).
 Also, remember that @modules, @externals and @events are prefixed by the tag name (e.g. "module:myModule").

 If you want all @links to be rendered in monospace by default, you can set the templates.monospaceLinks option to true in your conf.json. If you want @links to be rendered in normal text if they are links to external URLs (http, ftp) and in monospace otherwise, set the templates.cleverLinks option to true in your conf.json. By default, all @links are rendered in normal font.

 http://usejsdoc.org/tags-link.html
 */

/**
 * See {@link MyClass} and [MyClass's foo property]{@link MyClass#foo}.
 * Also, check out {@link http://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 */
function myFunction() {}

/**
 * A class.
 * @class
 */
function MyClass() {
    /** foo property */
    this.foo = 1;
}

/**
 * This description links to the {@link Macaroni} class.
 */
function Cheese() {
}

/**
 * This description includes {@link Cheese|link text}.
 */
function Macaroni() {
}