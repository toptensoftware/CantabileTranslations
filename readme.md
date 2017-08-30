# Cantabile Translations

Cantabile Translations is a set of resource files that Cantabile 3 uses for translated language strings in its user interface.

## Langauge Translation Files

Language files have a filename in the format `strings-XXX.json` where XXX can be one of the following:

* The three letter ISO language code
* The two letter ISO language code
* The name of the Windows locale

For example: `strings-it.json` would be the Italian translation, while `strings-de.json` would be the German translation.

Cantabile looks for these files in the same folder as Cantabile.exe.

## Installing the Translation Files

Currently Cantabile doesn't include any official language translations so you'll need to manually install these files in order to use them:

1. Locate the file for the language you're interested in from the [translations repository](https://bitbucket.org/toptensoftware/cantabiletranslations/src).
2. Click the file to view it and then download it by right clicking the "Raw" button at the top right and choosing Save As.
3. Copy the file to the same location as Cantabile.exe, typically:
	* `C:\Program Files\Topten Software\Cantabile 3.0`, or 
	* `C:\Program Files (x86)\Topten Software\Cantabile 3.0`, or 

To quickly locate Cantabile.exe, right click on it's short cut in the Windows Start menu, choose Properties and click the Open File Location button.

You'll need to restart Cantabile if it's already running.

## Switching Languages

Cantabile doesn't provide a setting for which language to use.  Rather it uses the language selected in the operating system.  To switch languages you need to close Cantabile, change the language in the operating system and restart Cantabile.

# Notes for Translators

The following describes how to contribute to a language translation for Cantabile and contains important information that you must be aware of.

## Before Starting

Before starting on a translation, please [get in contact](http://www.cantabilesoftware.com/contact) with me.  This way I can make sure no one is already working on the same language and also provide you with a machine generated translation to get you started.

Once you decide to start work on a translation you can either download the file directly from BitBucket, or if you're familiar with git you can simply clone the repository.

## File Format

All translation files are in [JSON](http://json.org/) format.  If you're not familiar with JSON it's an extremely simple data exchange format, most of which you can easily understand simply by looking at an existing file.  There are some things to be aware of however:

1. Special characters in strings need to be escaped with a leading backslash.  eg: to embed a double quote use `\"`
2. New line characters are encoded as `\n`, tabs as `\t`.
3. Unicode characters can be embedded using the \uNNNN escape sequence where NNNN is the hex code of the character.
4. Syntax is important. ie: the placement of braces, commas etc... must be syntactically correct or Cantabile will fail to load the file.

If you find Cantabile isn't loading your strings file, try running it though an online JSON validator tool (such as [JSONLint](https://jsonlint.com/))to find the problem.  You can also check Cantabile's log file - a message will be logged if there was a problem loading the file.

## Format Strings

Some of the strings that require translation include C# format specifiers enclosed in curly braces.  eg:

	"Showing assignments for {0}"

These format specifiers must be included in the translated string or an exception will occur when the string is used.  See here for more information about [string formats](http://msdn.microsoft.com/en-us/library/system.string.format(v=vs.110).aspx#HowFormatted).

To embed actual curly braces in a translated string use double braces {{like this}}.

## Shortcut Keys

For many user-interface strings, the shortcut key is prefixed with an ampersand `&` character.  A literal ampersand must be escaped with a double ampersand. eg: `Instruments && Effects`.

It's important that after translation there are no duplicate short cut keys.  To support this the machine generated translation will try to re-use the same short cut key as the English version.  If the translated string doesn't contain the same letter it will suffix the letter in brackets.

eg: The machine tranlation for `"&Delete"` to Italian is `"Cancellare (&D)"`.  If the translated string was `"&Cancellare"` this would conflict with `"&Copy"` in the Edit menu.

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

1. Check and if necessary update the `"translation"`.
2. Change the `"machine": true` setting to `"machine": true` to indicate that this entry has been reviewed by a human.

Alternatively you could check and update all the translations and then do a search and replace to update all the `"machine"` entries.

## Length of Strings

Most of Cantabile's user-interface is responsive enough to rescale itself to make strings fit correctly. However a translated string that is considerably longer or shorter than the English string may cause some layout issues.  

If you encounter this, try changing the string to more closely match length of the English string, or contact me with a screen shot of the issue and I'll try to provide a solution.

## Constructed Strings

Some messages that Cantabile displays are constructed by concatenating multiple strings together.  If a string starts or ends with a space be sure to leave the spaces intact as these are probably the spaces between words in a constructed phrase.

There may be cases where a translated constructed phrase doesn't read correctly due to different semantics of the target language.  If you encounter this please let me know.


## Conflicting Contexts

Some strings are used in multiple contexts and the tool that generates the source json files coalesces these into a single entry with multiple context entries.  Normally this is desirable behaviour as it saves translating the same string multiple times.

Sometimes however the same English string may need different translations for a different contexts.  Currently this isn't supported however if you encounter such scenarios please get in touch and I'll work out a solution.

## Committing Changes

Once you've made a set of changes you'd like to commit for inclusion, either email me the file directly and I'll commit it back into the repository, or, if you understand git you can send me a pull request on BitBucket.

## New Builds of Cantabile

As Cantabile is always under active development the set of strings that require translation will be constantly changing.  To support this the build process extracts new strings from the code base and will update existing translations with any new strings and also provide an initial machine translation for them.

When a new build of Cantabile is released, this repository will also be updated and each language file will contain the new strings - each marked with `"machine": true` indicating strings that need to be reviewed.

This means that for the time being at least, Cantabile's builds will always be a little ahead of the translations.  When Cantabile gets closer to release I'll work more actively with translators to ensure the translations are done ahead of time and included in the released product.
