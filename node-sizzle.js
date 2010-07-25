/**
 * node-sizzle.js
 *
 * Load sizzle.js in Server Side environment.
 */

var sizzle = loadSizzle;

exports = sizzle = loadSizzle;

function loadSizzle(document) {

  if (!document) {
    console.log("Warning: uable to load Sizzle. Sizzle requires a real DOM.");
    return false;
  };

  var window = {};
  var src = fs.readFileSync(__dirname+"sizzle/sizzle.js", "utf8");
  // Need to eval, not process.compile, since we want it to access local scope
  // and pass sizzle both window and document.
  eval(src);

  return window.sizzle;

}
