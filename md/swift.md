# Swift Diary: Part 1

## What am I doing?

I had an idea for a side-project: a writing tool using data-structures
from Graph Theory.

I decided to write it in Swift (v3), which now works on Linux decoupled from
the Apple ecosystem.

## Why Swift?

I like the simplicity and ease of use that the Go/Golang tools provide
(repl, fast and simple compiler, simple package management, simple test
tool etc...).

I like the functional style, strong type-system and language features
like pattern-matching that OCaml provides.

Swift has these attributes in one language. While not quite a strong on
the types and OCaml or idiomatic as Go, it is strong enough for my needs.
Like a low maintenance OCaml that boring companies might actually use.

## Downsides

OCaml's bucklescript looks really good, there isn't a Swift equivalent,
yet.

I chose Swift as it can go cross-platform thanks to it's LLVM based compiler.
However it is hard to get a staticaly linked binary.

```sh
swift build -Xswiftc -static-stdlib
// should/could work but produces errors
```

A basic CLI app that takes args and prints strings gets the following error:
```
./hello: error while loading shared libraries: libicui18n.so.55: cannot open shared object file: No such file or directory
```


## Links

* install: [v3](https://swift.org/download/#releases)
* vim
  * [syntastic](https://github.com/scrooloose/syntastic/)
  * [swift.vim](https://github.com/keith/swift.vim)
* []()
* []()
* []()
* []()
* []()
* []()
