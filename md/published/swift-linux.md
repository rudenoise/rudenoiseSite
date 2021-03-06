# Creating a Swift Package on Linux

I like Swift and Linux, you might too. Here's a _fast_ guide to
creating and releasing a Swift package/module, from Linux.

## Getting Started

There's not a vast amount of documentation but [Swift.org](https://swift.org/)
has enough to get you started. And the
[Swift Programming Language](https://swift.org/documentation/#the-swift-programming-language)
book is decent on language basics.

The first step is to get the Swift Toolchain running. I've been
using Swift 3. At the time of writing _3.0_ is the latest
version, while there have been changes between versions the
compiler and tools are helpful in suggesting corrections.

Ubuntu is the only supported Linux flavour, 14.04 and 15.10 are the
supported versions. I'm using 16.04 and have had no trouble.

Download and install
instructions can be found on the [swift downloads](https://swift.org/download/#previews)
page.

## Building a Swift Package

Create a directory for you project and initialise a package:
```sh
mkdir yourSwiftProject
cd yourSwiftProject
swift package init
```

After which you have the skeleton of a project ready to build and test.
```sh
tree
.
├── Package.swift
├── Sources
│   └── swiftPackage.swift
└── Tests
    ├── LinuxMain.swift
    └── swiftPackageTests
        └── swiftPackageTests.swift
```

Building and testing is very simple.
```sh
# build it
swift build
# test it
swift test
```

You're ready to start making a package. Start by giving it a name
in the _Package.swift_ file and go from there. After a while you
may be ready to publish that package for others to use.

Publishing your package is as simple as:
```sh
git add -A
git commit -am 'my project is ready for a release'
git tag -a 0.1.0 -m "my version 0.1.0"
git push origin 0.1.0
```

And to include it in another project, add the git URL to the
_Package.swift_. I started the basics of a _Graph Data_ library
and include it in other Swift projects like this:
```swift
import PackageDescription

let package = Package(
    name: "jokeWeb",
    dependencies: [
      .Package(url: "https://github.com/rudenoise/grift.git",
        majorVersion: 0)
    ]
)
```

## Thoughts

I like it. It reminds me of _Go_, simple dev tools and workflow.
There's also overlap with OCaml, the type-system is
strict enough that a successful compilation is a reasonable
grantee that the code works. I probably prefer OCaml as a
language and Go's tooling, but it has enough of each to be a
compelling choice.

Swift on Linux is a work-in-progress so the mailing lists have been
very useful, and welcoming.

There isn't much to compete with Go-routines' concurrency or async
libs (like OCaml's Lwt), it looks like these are in the pipeline
for v4 and v5.

I was hoping to compile static binaries, with a view to deploying
web-services to very minimal hosts (and possibly a Rump Kernel
based unikernel OS). This isn't currently possible if you're using
_Foundation_ (the extended std lib ported from OSX/IOS). I've been
looking at chipping in on the Open Source project but so far it's
been a bit beyond me (still learning). If you're looking at helping
out on a cool project, Swift could be the one for you.

## Useful links:

* install: [Swift v3](https://swift.org/download/#previews)
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
* [Foundation Docs](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/ObjC_classic/)

