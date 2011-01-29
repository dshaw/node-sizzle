/**
 * sizzle.test.js
 */

var assert = require("assert"),
    Sizzle = require("../node-sizzle").Sizzle,
    sizzle = new Sizzle();

assert.ok(!!sizzle, "Sizzle module.");
assert.ok(!!sizzle.run(), "Sizzle loader.");
