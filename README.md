Rust `npm test` to see the error in action.

The error is that when compiling multiple files with gulp-sweetjs, and
have sourcemaps enabled, the first file alphabetically is
erronously the location for the rest of the files.

In this repo, we show that by having two files, `a.sjs` and `b.sjs`.
They don't actually have any macros. `a.sjs` just exports `false`,
and is otherwise unimportant other than being a file that is
alphabetically higher than `b.sjs`.  `b.sjs` exports a `fail` function
that throws an error.

`test.js` calls that function, and then checks the stacktrace
to make sure that the error was thrown in `in/b.sjs`. With this
bug, it's not. It's called in `in/a.sjs`. It then tells you the
results of the test, and if it failed, shows the entire stacktrace.

The sourcemaps are located in the `/sourcemaps` directory.

You can build and test in one step with `npm test`. Otherwise...

```shell
npm run-script sweet
node test.js
```

I was going to include a bitter build step to show that
gulp-sourcemaps alone isn't the problem, but I couldn't
find a sourcemap compiler that didn't make any changes
to the output file outside of adding the sourcemap line.