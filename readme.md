# Cantabile Translations

Cantabile Translations is a set of resource files that Cantabile 3 uses for translated language strings in it's user interface.

## Langauge Translation Files

Language files have a filename in the format `strings-XXX.json` where XXX can be one of the following:

* The three letter ISO language code
* The two letter ISO language code
* The name of the Windows locale

For example: `strings-it.json` would be the Italian translation, while `strings-de.json` would be the German translation.

Cantabile looks for these files in the same folder as Cantabile.exe.

## Installing the Translation Files

Currently Cantabile doesn't include any official language translations so you'll need to manually install these files in order to use them:

1. Locate and download the correct file in the [translations repository](https://bitbucket.org/toptensoftware/cantabiletranslations/src).
2. Copy the file to the same location as Cantabile.exe, typically:
	* `C:\Program Files\Topten Software\Cantabile 3.0`, or 
	* `C:\Program Files (x86)\Topten Software\Cantabile 3.0`, or 

To quickly locate Cantabile.exe, right click on it's short cut in the Windows Start menu, choose Properties and click the Open File Location button.

You'll need to restart Cantabile if it's already running.

## Switching Languages

Cantabile doesn't provide a setting for which language to use.  Rather it uses the language selected in the operating system.  To switch languages you need to close Cantabile, change the language in the operating system and restart Cantabile.

## Notes for Translators

If you're interested in contributing to a translation, [see here](readme-translators.md)

