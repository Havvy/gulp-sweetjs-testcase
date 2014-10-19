var a = require("./out/a");
var b = require("./out/b");
require('source-map-support').install();

try {
    b.fail();
} catch (e) {
    // var stacktrace = "Error: Should be `in/b.sjs` line 3\n    at Object.module.exports.fail (/source/home/havvy/sweetjs/gulp-build-fail/in/b.sjs:3:9)\n    at Object.<anonymous> (/home/havvy/sweetjs/gulp-build-fail/test.js:6:4)\n    at Module._compile (module.js:456:26)\n    at Object.Module._extensions..js (module.js:474:10)\n    at Module.load (module.js:356:32)\n    at Function.Module._load (module.js:312:12)\n    at Function.Module.runMain (module.js:497:10)\n    at startup (node.js:119:16)\n    at node.js:906:3";

    //    if (e.stack === stacktrace) {
    //        console.log("Bug is not present!");
    //    } else {
    //        console.log("Bug is present! Stacktrace: ");
    //        console.log(e.stack);
    //    }

    var stacktrace = e.stack.split("\n");
    var file_line = stacktrace[1];
    var ending = file_line.slice(file_line.indexOf('gulp-build-fail'));
    console.log("Ending: " + ending);

    if (ending === "gulp-build-fail/in/b.js:3:9)") {
        console.log("Bug is NOT PRESENT!");
    } else {
        console.log("Bug is PRESENT! Full stacktrace: ");
        console.log(e.stack);
    }
}