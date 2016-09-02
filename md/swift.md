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
However it is hard to get a statically linked binary. I'm looking into
contributing to the swift-package-manager to get this working.


A basic CLI app that takes args and prints strings gets the following error:
```
./hello: error while loading shared libraries: libicui18n.so.55: cannot open shared object file: No such file or directory
```

### Making _Foundation_ Available to the _Swift Build_

```sh
swift build -Xswiftc -static-stdlib
# should/could work but produces errors
# /usr/bin/ld.gold: error: cannot find -lFoundation
```

The Swift Package Manager has statically compiled _.a_ files for some
essential libraries. _XCTest_ and _Foundation_ are currently not
provided.
```sh
ls {path_to_swift_snapshot_usr_dir}/lib/swift_static/linux/
# libswiftCore.a  libswiftGlibc.a  libswiftSwiftOnoneSupport.a
```

After talking to Daniel Dunbar one the _swift-users_ mailing list, I've
decided to try and add these libraries to the Swift Package Manager.

A first step is to compile _swift-corelibs-foundation_ from source.

### Build Swift 3 from Source

```sh
# add ubuntu 16.04 specific dependencies
sudo apt-get install dh-autoreconf libcurl4-gnutls-dev
# set-up dir
mkdir swift-source
cd swift-source

# get all sources
git clone https://github.com/apple/swift.git
./swift/utils/update-checkout --clone
```

This can then build swift from souce _and_ core libs:

```sh
cd {path_to}/swift-source
swift/utils/build-script --xctest --foundation -t
```

## Links

* install: [v3](https://swift.org/download/#releases)
* vim
    * [syntastic](https://github.com/scrooloose/syntastic/)
    * [swift.vim](https://github.com/keith/swift.vim)
* Contributing to Swift
    * [Swift Contributing Guidelines](https://swift.org/contributing/)
    * [Swift Repo](https://github.com/apple/swift)
    * [Swift Package Manager](https://swift.org/package-manager/)
    * [Swift Package Manager Repo](https://swift.org/package-manager/)
    * [Swift Foundation Lib](https://swift.org/core-libraries/#foundation)
    * [Foundation repo](https://github.com/apple/swift-corelibs-foundation)
* []()
* []()
* []()
