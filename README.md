# build-cmd

[![apm](https://flat.badgen.net/apm/license/build-cmd)](https://atom.io/packages/build-cmd)
[![apm](https://flat.badgen.net/apm/v/build-cmd)](https://atom.io/packages/build-cmd)
[![apm](https://flat.badgen.net/apm/dl/build-cmd)](https://atom.io/packages/build-cmd)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-build-cmd)](https://circleci.com/gh/idleberg/atom-build-cmd)
[![David](https://flat.badgen.net/david/dev/idleberg/atom-build-cmd)](https://david-dm.org/idleberg/atom-build-cmd?type=dev)

[Atom Build](https://atombuild.github.io/) provider for the Windows Command Prompt, runs Batch scripts.

## Installation

### apm

Install `build-cmd` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-cmd`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `build-cmd`:

```bash
$ git clone https://github.com/idleberg/atom-build-cmd build-cmd
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

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

This work is licensed under the [The MIT License](LICENSE).
