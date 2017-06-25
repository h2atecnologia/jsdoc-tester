## All tags

- @abstract (synonyms: @virtual): This member must be implemented (or overridden) by the inheritor.

- @access: Specify the access level of this member (private, public, or protected).

- @alias: Treat a member as if it had a different name.

- @augments (synonyms: @extends): This object adds onto a parent object.

- @author: Identify the author of an item.

- @borrows: This object uses something from another object.

- @callback: Document a callback function.

- @class (synonyms: @constructor): This function is intended to be called with the "new" keyword.

- @classdesc: Use the following text to describe the entire class.

- @constant (synonyms: @const): Document an object as a constant.

- @constructs: This function member will be the constructor for the previous class.

- @copyright: Document some copyright information.

- @default (synonyms: @defaultvalue): Document the default value.

- @deprecated: Document that this is no longer the preferred way.

- @description (synonyms: @desc): Describe a symbol.

- @enum: Document a collection of related properties.

- @event: Document an event.

- @example: Provide an example of how to use a documented item.

- @exports: Identify the member that is exported by a JavaScript module.

- @external (synonyms: @host): Document an external class/namespace/module.

- @file (synonyms: @fileoverview, @overview): Describe a file.

- @fires (synonyms: @emits): Describe the events this method may fire.

- @function (synonyms: @func, @method): Describe a function or method.

- @global: Document a global object.

- @inner: Document an inner object.

- @instance: Document an instance member.

- @kind: What kind of symbol is this?

- @lends: Document properties on an object literal as if they belonged to a symbol with a given name.

- @link: Inline tag - create a link.

- @member (synonyms: @var): Document a member.

- @memberof: This symbol belongs to a parent symbol.

- @mixes: This object mixes in all the members from another object.

- @mixin: Document a mixin object.

- @module: Document a JavaScript module.

- @name: Document the name of an object.

- @namespace: Document a namespace object.

- @param (synonyms: @arg, @argument): Document the parameter to a function.

- @private: This symbol is meant to be private.

- @property (synonyms: @prop): Document a property of an object.

- @protected: This member is meant to be protected.

- @public: This symbol is meant to be public.

- @readonly: This symbol is meant to be read-only.

- @requires: This file requires a JavaScript module.

- @returns (synonyms: @return): Document the return value of a function.

- @see: Refer to some other documentation for more information.

- @since: When was this feature added?

- @static: Document a static member.

- @summary: A shorter version of the full description.

- @this: What does the 'this' keyword refer to here?

- @throws (synonyms: @exception): Describe what errors could be thrown.

- @tutorial: Insert a link to an included tutorial file.

- @type: Document the type of an object.

- @typedef: Document a custom type.

- @variation: Distinguish different objects with the same name.

- @version: Documents the version number of an item.


## @access

- @private
- @protected
- @public


## @kind <kindName> Specialized kind

The kind of symbol differs from a symbol's type (for example, string or boolean).

@kind <kindName> where

- class
- constant
- event
- external
- file
- function
- @member or @var
- mixin
- module
- namespace
- typedef


The @global tag specifies that a symbol should appear in the documentation as a global symbol.


##  Namepath and scope

A namepath provides a way to do so and disambiguate between instance members, static members and inner variables.

- @inner
- @instance
- @static

Using the @inner tag will mark a symbol as an inner member of its parent symbol. This means it can be referred to by "Parent~Child".
@inner
 (by default, it would be a static member).


Using the @instance tag will mark a symbol as an instance member of its parent symbol. This means it can be referred to by "Parent#Child".
@instance
For example, you can indicate that a static member is used as an instance member
Useful when used with Object.create


@static
By default, a member is declared as static. Except in modules, where by default they are inner members. Useful in that case.


## @lends - @borrows - @constructs - @mixes - @mixin

## @event @fires

## @module - @exports

## @params - @returns - @callback - @type - @typedef


