# build-cmd

[![apm](https://img.shields.io/apm/l/build-cmd.svg?style=flat-square)](https://atom.io/packages/build-cmd)
[![apm](https://img.shields.io/apm/v/build-cmd.svg?style=flat-square)](https://atom.io/packages/build-cmd)
[![apm](https://img.shields.io/apm/dm/build-cmd.svg?style=flat-square)](https://atom.io/packages/build-cmd)
[![Travis](https://img.shields.io/travis/idleberg/atom-build-cmd.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-build-cmd)
[![David](https://img.shields.io/david/dev/idleberg/atom-build-cmd.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-cmd#info=devDependencies)

[Atom Build](https://atombuild.github.io/) provider for the Windows Command Prompt, runs Batch scripts.

## Installation

### apm

Install `build-cmd` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-cmd`

### GitHub

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

<<<<<<< HEAD
`$ git clone https://github.com/idleberg/atom-build-cmd build-cmd`
=======
# Mac OS X & Linux
$ cd ~/.atom/packages/
```

Clone repository as `build-powershell`:

```bash
$ git clone https://github.com/idleberg/atom-build-powershell build-powershell
```
>>>>>>> parent of 93e52cf... rename OS X to macOS

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `Batch` — runs Batch script

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Choose target**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Toggle build panel**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

**Build script**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-build-cmd) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`

[osascript]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osascript.1.html
[osacompile]: https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/osacompile.1.html