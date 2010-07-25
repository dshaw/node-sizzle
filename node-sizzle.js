/**
 * node-sizzle.js
 *
 * Load sizzle.js in Server Side environment.
 */

var fs = require("fs");


var loadSizzle = exports.loadSizzle = function(document) {

  var document = document || {},
      window = {};

  if ( !document.documentElement ) {
    console.log("Warning: Sizzle requires a real DOM. You can build a decent server-side DOM with JSDOM." +
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
  };

  var src = fs.readFileSync(__dirname+"/deps/sizzle/sizzle.js", "utf8");
  // We need to eval Sizzle. process.compile is not sufficient, since we need
  // access to local scope to provide Sizzle with the window and document objects.
  eval(src);

  return window.Sizzle;
}
