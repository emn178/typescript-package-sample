# How to write a TypScript package

## Folders
This git includes these samples:
* typescript-package: A TypeScript package sample. It can be required by TypeScript or Node.js projects.
* typescript-project: A TypeScript project sample.
* node-project: A Node.js project sample.

## typescript-package
You have to build TypeScript package for other projects. We need set up `tsconfig.json` and `package.json`.

### tsconfig.json
We put a `tsconfig.json` to tell how to your package compile. It looks like:
```JavaScript
{
  "compilerOptions": {
    "outDir": "dist",
    //...
    "declaration": true
  },
  "files": [
    "src/index.ts"
  ]
}
```
There are three points:
* files: List the files you want to compile. We can put a entry point `index.ts` and import all files in `index.ts`. If you use something like typings, you maybe put the other entry point like `typings/index.d.ts`
* outDir: Set a path for compiled results. It will be used in `package.json`.
* declaration: If you want this package support TypeScript for other projects, you have to set it true and output declaration files.

### package.json
We have to add some settings to `package.json`.
```JavaScript
{
  "main": "dist/index.js",
  "typings": "dist/index.d.ts",
  "scripts": {
    "prepublish": "tsc"
  }
}
```
There are also three points:
* main: This is entry point of this npm package. For npm package, it must be a JavaScript application, so we set it to the compiled file.
* typings: This is for other TypeScript projects. We set `declaration` is true so that it can generate this file.
* prepublish: If you don't want to commit compiled files the git, you can set up this and it will compile before you publish npm.

### .gitignore
Do not ignore `dist` folder, npm will not incldue this fold in publish package.

## Try
You can go to node-project and typescript-project. Run following command and they should work fine.

    npm install
    npm start
