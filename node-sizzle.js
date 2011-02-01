/**
 * node-sizzle.js
 *
 * Load sizzle.js in Server Side environment.
 */

var fs = require("fs"),
    vm = require("vm");

var Sizzle = exports.Sizzle = function(){
  this.script = vm.createScript(fs.readFileSync(__dirname+"/deps/sizzle/sizzle.js", "utf8"), 'sizzle.js');
};

Sizzle.prototype.run = function(document){

  document = document || {};

  if ( !document.documentElement ) {
    console.warn("Warning: Sizzle requires a real DOM. You can build a decent server-side DOM with JSDOM. " +
        "Attempting to build Sizzle with a stubbed out DOM.");

    var nullFunction = function(){};

    // Stub out everything Sizzle needs from the DOM.
    document = {
      documentElement : {
        compareDocumentPosition : nullFunction,
        insertBefore : nullFunction,
        removeChild : nullFunction
      },
      createComment : nullFunction,
      createElement : function(){
        return {
          appendChild : nullFunction,
          getElementsByTagName : function(){ return { length : null }; }
        }
      },
      getElementById : nullFunction
    }
  }

  var sandbox = { window: {}, document: document };
  this.script.runInNewContext(sandbox);

  return sandbox.window.Sizzle;
};
