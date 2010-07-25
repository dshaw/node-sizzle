/**
 * sizzle.test.js
 */

var assert = require("assert"),
    sizzle = require("../node-sizzle");

assert.ok(!!sizzle, "Sizzle module.");
assert.ok(!!sizzle.loadSizzle(), "Sizzle loader.");
