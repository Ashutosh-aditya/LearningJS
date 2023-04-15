import {cap} from "./function.mjs"
console.log(cap("hello"));

// In this specific case, the warning message is triggered because the JavaScript code in the file "import.js" is attempting to import a function named "cap" from a module file named "function.js". The import statement uses the syntax that is specific to ES modules.

// The warning message is suggesting two possible solutions to fix this issue:

// Set the "type" property in the package.json file to "module". This tells Node.js to use the ES module system to load all modules in the project by default.

// Change the file extension of the module file from ".js" to ".mjs". This tells Node.js that the file is an ES module and should be loaded using the ES module system.

