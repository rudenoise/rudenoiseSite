# Creating a Swift Package on Linux

A few weeks back I decided to start building a tool using Swift on
Linux.

I'd used Swift v1 on an IOS project a while back and liked
the language (functional, strong type system etc...) but felt that
using it inside the IOS ecosystem didn't really allow me to get a
"pure" Swift experience.

Since then I've been happily back on Linux using OCaml as
my "go to" language. But I kept an eye on Swift. It was open
sourced and shortly after the Swift Toolchain became available for
Ubuntu. I'd been reading about Graph Theory and wanted to play with
the ideas so I thought I'd implement them in Swift.

I like it. You might too, so here's a _fast_ guide to creating and
releasing a Swift module.

## Getting Started

There's not a vast amount of documentation but [Swift.org](https://swift.org/)
has enough to get you started. And the
[Swift Programming Language](https://swift.org/documentation/#the-swift-programming-language)
book is pretty decent on the basics.

The first step is to get the Swift Toolchain running. I've been
using Swift 3. At the time of writing Preview 6 is the latest and
while there have been changes between previews the compiler and
tools are helpful in suggesting corrections.

Download and install
instructions can be found on the [swift downloads](https://swift.org/download/#previews)
page.

## Building a Swift Package

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

Publishing your package is as simple as:
```sh
git add -A
git commit -am 'my project is ready'
git tag 0.1.0
git tag -a 0.1.0 -m "my version 0.1.0"
git push origin 0.1.0
```

And to include it in another project, add the git URL to the
_Package.swift_. e.g:
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

## Wot I Done

After a few days work I have the beginnings of my Graph library
[Grift (Graphs + Swift)](https://github.com/rudenoise/grift).

The process has been very enjoyable, I recommend it. I can see
Swift being a good tool for many of the same reasons Golang has
gained so much traction. If you're functionally inclined, it might
even have the edge.

## Thoughts

I like it. It reminds me of _Go_, simple dev tools and workflow.
There's also some good overlap with OCaml, the type-system is
strict enough that a successful compilation is a reasonable
grantee that the code works. I probably prefer OCaml as a
language, and Go's tooling, but it has enough of each to be a
compelling choice.

The project is a work-in-progress so the mailing lists have been
very useful, and welcoming.

There isn't much to compete with Go-routines' concurrency or async
libs (like OCaml's Lwt), it looks like these are in the pipeline
for v4 and v5.

I was hoping to compile static binaries, with a view to deploying
web-services to very minimal hosts (and eventually a Rump Kernel
based unikernel OS). This isn't currently possible if you're using
_Foundation_ (the extended std lib ported from OSX/IOS). I've been
looking at chipping in on the Open Source project but so far it's
been a bit beyond me (still learning). If you're looking at helping
out on a cool project, Swift could be the one for you.
