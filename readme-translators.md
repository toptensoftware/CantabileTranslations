# Notes for Translators

This page describes how to contribute to a language translation for Cantabile and contains important information that you must be aware of before changing the language translation file.

## Before Starting

Before starting on a translation, please [get in contact](http://www.cantabilesoftware.com/contact) with me.  This way I can make sure no one is already working on the same language and also provide you with machine generated translation to get you started.

Once you decide to start work on a translation you can either download the file directly from BitBucket to work on, or if you're familiar with git you can simply clone the repository.

## File Format

All translation files are in [JSON](http://json.org/).  If you're not familiar with JSON it's an extremely simple data exchange format, most of which you can easily understand simply by looking at an existing file.  There are some things to be aware of however:

1. Special characters in strings need to be escaped with a leading backslash.  eg: to embed a double quote use `\"`
2. Unicode characters can be embedded using the \uNNNN escape sequence where NNNN is the hex code of the character.
3. Syntax is important. ie: the placement braces, commas etc... must be syntactically correct or Cantabile will fail to load the file.

## Format Strings

Some of the strings that require translation include C# format specifiers, wrapped in curly braces.  eg:

	"Showing assignments for {0}"

These format specifiers must be included in the translated string or an exception will occur when the string is used.  See here for more information about [string formats](http://msdn.microsoft.com/en-us/library/system.string.format(v=vs.110).aspx#HowFormatted).

## Shortcut Keys

For many user-interface strings, the shortcut key is prefixed with an ampersand `&` character.  A literal ampersand must be escaped with a double ampersand. eg: `Instruments && Effects`.

It's important that after translation there are no duplicate short cut keys.  To support this the machine generated translation will try to re-use the same short cut key as the English version.  If the translated string doesn't contain the same letter is will suffix the letter in brackets.

eg: The machine tranlation for "&Delete" to Italian is "Cancellare (&D)".  If the translated string was "&Cancellare" this would conflict with "&Copy" in the Edit menu.

Translations are free to use different short-cut keys however they should be checked for duplicates in the final application.

## Translating Strings

A typical string entry looks like this:

	"Instruments && Effects": 
	{
		"contexts": 
		[
			".\\Cantabile\\Controls\\Composited\\ContentPanel.cs"
		],
		"translation": "Strumenti ed effetti",
		"machine": true
	},

and has the following parts:

* English String - Don't change this or Cantabile won't find your translated version
* "contexts" - Not used by Cantabile but provides contextual information to help understand where the string is used.
* "translation" - Here's where you provide the translated text.
* "machine" - Indicates if this string was translated by a machine or a human.

So the typical process for updating a translation would be:

1. Check and if necessary udpate the `"translation"`.
2. Delete the `"machine": true` setting to flag that this entry has been reviewed by a human.

Alternatively you could check and update all the translations and then do a search and replace to update all the `"machine"` entries.

## Conflicting Contexts

Some strings are used in multiple contexts and the tool that generates the source json files coalesces these into a single entry with multiple "contexts" entries.  Normally this is desirable behaviour as it saves translating the same string multiple times.

Sometimes however the same English string may need different translations for a different contexts.  Currently this isn't supported however if you encounter such scenarios please get in touch and I'll work out a solution.

## Committing Changes

Once you've made a set of changes you'd like to commit for inclusion, either email me the file directly and I'll commit it back into the repository, or, if you understand git you can send me a pull request on BitBucket.
