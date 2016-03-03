# OCaml Diary, Part 4B

Previously, while learning languages,  I've made the same small, CLI
application. A program that walks through the
contents of a directory, stores the paths of any files contained
within, then does the same for any sub-directories, recursively.
These paths can then be printed to the console directly, or
filtered then printed. So far I've done this task using
NodeJS<sub>[_[1](#ref1)_]</sub>, Go<sub>[_[2](#ref2)_]</sub>
and Gambit Scheme<sub>[_[3](#ref3)_]</sub>. I usually call it _inPath_.

The aim is to test my ability to build something small, self
contained and useful, from scratch. Doing so ensures that I understand
the tools used to build and debug an app, and where to find
supporting information.

## The Development Experience

The OCaml development cycle went something like this:

* Edit inPath.ml in vim.
* Save and see if _Merlin_<sub>[_[4](#ref4)_]</sub> has picked up any problems.
* Run _MerlinErrorCheck_ correct as necessary.
* Run _corebuild inPath.byte_ for fast compilation to byte-code, then test.
* Every few successful builds compile a native executable with
  _corebuild inPath.native_.

Getting the environment set-up involves a few steps but afterwards
the cycle was smooth and efficient. It may only be a
tiny project but the supporting tools still impressed.
The compilers are not as simple as those provided by Go 
(there are a lot of ways to compile an OCaml program) but are still
manageable for a novice.

The program used various modules from _Core.Std_<sub>[_[5](#ref5)_]</sub>, an equivalent to
a standard-library (OCaml keeps itself small allowing the user to
extend/include functionality, as required). Building CLI apps is
well supported via the _Command_<sub>[_[6](#ref6)_]</sub> module.
Help text, input parsing and flags have useful APIs, getting the
basics working was equivalent the effort spent in other ecosystems.

Switching between "pure functional" (for internal data structures and
recursion) and imperative (communicating with the environment
outside) APIs was useful. Having distinct types and modules for each
helps to define the boundaries.

The general impression I've formed is that OCaml has a reasonably
high barrier to entry. There are many ways to use the tools and
language and this can feel daunting. Conversely, the many
combinations/configurations available make it possible to express
very clear programs that are tailored and specific to their
problem-space. The type system and language design also make
solutions less ambiguous. I'm less likely to mistake one
implementation for another and should I, the compiler should
know about it.

Iterating the design and implementation of OCaml programs differs
from the other ecosystems. Getting a basic/prototype
implementation was quick. Refactoring could then take a number of
paths depending on how I wished to extend the functionality. Moving
data processing to purely functional data-structures and APIs, for
example. Or bundling areas of the code into modules, using their
own types and interfaces, to aid separation of concerns,
documentation of intent, and reuse. Various constructs for building
flows and passing data between functions could be chosen. I didn't
get as far as using the native profiling tools or compiler
configurations. I expect they would add yet more food for thought.

This could be seen as unnecessary complexity, especially when
compared with Go's approach. But getting something basic working
was fast enough, after which point there were many options
available for improvement. While the implementation was not uniform
it is descriptive. It's a different approach and one I enjoyed.

## The Results

A few hours mucking about and I had the basics working. Some OCaml
knowledge had seeped in and remained long enough to build working
software. Then I had a look at the results and compared them to other
implementations.

| Language  | Binary size   |
|-----------|---------------|
| Go        | 3.0M          |
| Gambit    | 5.0M          |
| OCaml     | 14M           |

I ran the following test for each binary and took a rough average
(excluding any outliers caused by OS caching).

```sh
time inPathOCaml ~/Dropbox/ > /tmp/out.txt 
```
| Language  | _Real_ read time  |
|-----------|-------------------|
| Go        | 0m0.200s          |
| Gambit    | 0m0.165s          |
| OCaml     | 0m0.057s          |

These tests are not that useful for anything serious but that
didn't stop me from drawing the following, probably inaccurate,
conclusions:

1. The _core_ lib must be pretty big and including it leads to the
   large binary.
2. The execution time isn't adversely affected by the unused functionality.
3. I could rewrite this code to exclude _core_.
4. Managing the compilers could have lead to a more tailored result.

The code is up for criticism on GitHub <sub>[_[7](#ref7)_]</sub>.

## Links

* <a id="ref1"></a> [inPath NodeJS](https://github.com/rudenoise/inPath)
* <a id="ref2"></a> [inPath GoLang](https://github.com/rudenoise/counting/blob/master/examples/inPath.go)
* <a id="ref3"></a> [inPath Gambit  Scheme](https://github.com/rudenoise/inPathScheme)
* <a id="ref4"></a> [Merlin in vim from scratch](https://github.com/the-lambda-church/merlin/wiki/vim-from-scratch)
* <a id="ref5"></a> [Core documentation](https://ocaml.janestreet.com/ocaml-core/111.28.00/doc/core/)
* <a id="ref6"></a> [Module Command](https://ocaml.janestreet.com/ocaml-core/111.28.00/doc/core/#Command)
* <a id="ref7"></a> [inPath OCaml](https://github.com/rudenoise/inPathOCaml)
