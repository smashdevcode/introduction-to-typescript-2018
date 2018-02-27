
# TypeScript Support in Visual Studio Code

## Installing the Compiler

Visual Studio Code includes TypeScript language support but does not include the TypeScript compiler, `tsc`

Install the compiler globally...

```
npm install -g typescript
```

Or install the compiler locally in a project...

```
npm install --save-dev typescript
```

## Files and Projects

TypeScript files opened in VS Code are treated as independent units

Unless a reference directive is used...

```
/// <reference path="file2.ts" />
```

Or uses external modules...

```
import { MyClass } from './file2';
```

You can also add a `tsconfig.json` file to the root of your project

```
tsc -init
```

## Building

Once you have a `tsconfig.json` file, you can then use VS Code to run a build task...

```
Run Build Task
```

Or you can configure the default build task that's bound to CMD+SHIFT+B

```
Configure Default Build Task
```

## Editor

### IntelliSense

### Renaming

### References

### Auto Imports

### CodeLens

Needs to be enabled by setting `"typescript.referencesCodeLens.enabled": true`

### Goto Symbol & Show All Symbols

⇧⌘O: lists all defined symbols of the current open TypeScript and lets you navigate in it.

⌘T: lets you search all symbols defined in the current project or file scope. You need to have a TypeScript file open in the active editor.

### Format Code

⇧⌥F: formats the whole document. ⌘K ⌘F: formats the currently selected source code.
