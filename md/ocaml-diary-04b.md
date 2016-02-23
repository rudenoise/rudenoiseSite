# OCaml Diary, Part 4B

Having set up a MirageOS development environment
<sub>[_[1](#ref1)_]</sub> I continued improving my OCaml.

When experimenting with new languages in the past, I've made the
same small CLI application. A program that walks through the
contents of a directory, stores the paths of any files contained
within, then does the same for any sub-directroies, recursively.
These paths can then be printed to the console directly, or
filtered then printed. So far I've done this task using NodeJS, Go
and Gambit Scheme. I usually call it _inPath_.

The aim is to test my ability to build something small, self
contained and useful, from scratch. Doing so ensures that I know
the tools used to build and debug the app, and where to find
supporting information.

## The Development Experience

The development cycle went something like this:

* Edit inPath.ml in vim.
* Save and see if _Merlin_ has picked up any problems.
* Run _MerlinErrorCheck_ correct as necessary.
* Run _corebuild inPath.byte_ for fast compilation to byte-code.
* Every few successful builds compile a native executable with
  _corebuild inPath.native_.

Getting the environment set up involves a few steps but afterwards
the cycle was smooth and efficient. It may only be a
tiny project but I was impressed by the support the tools provide.
They may not be as simple as those provided by Go (there are a lot
of ways to compile an OCaml program) but the compiler is highly
configurable while still usable for a novice.

The program used various modules from _Core.Std_, an equivalent to
a standard-library (OCaml keeps itself small allowing the user to
customise as required). Building CLI apps is well
supported via the _Command_ module. Help text, input parsing and
flags have useful APIs, getting the basics working was equivalent
the effort needed on other ecosystems.

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
implementation for another and should I, the compiler is likely to
know about it.

Iterating the design and implementation of OCaml programs differs
from other ecosystems, that I've used. Getting a basic/prototype
implementation was quick. Refactoring could then take a number of
paths depending on how I wished to extend the functionality. Moving
data processing to purely functional data-structures and APIs, for
example. Or bundling areas of the code into modules, using their
own types and interfaces, to aid separation of concerns,
documentation of intent and reuse. Various constructs for building
flows and passing data between functions could be chosen. I didn't
get as far as using the native profiling tools or compiler
configurations.

This could be seen as unnecessary complexity, especially when
compared with Go's approach. But getting something basic working
can be quick, after which point there are a lot of options
available for improvement. The results may not be generic but they
will be descriptive. It's a different approach and one I
enjoyed.

## The Results

A few hours mucking about and I had the basics working. It seems
the language is seeping into my brain at a good rate. I can build
basic software.



## Links

* <a id="ref1"></a> [OCaml/MirageOS Diary, Part 4A](/ocaml-mirageos-diary-4a.html)
* <a id="ref2"></a> []()
* <a id="ref3"></a> []()
* <a id="ref4"></a> []()
* <a id="ref5"></a> []()
* <a id="ref6"></a> []()
* <a id="ref7"></a> []()
* <a id="ref8"></a> []()
* <a id="ref9"></a> []()
* <a id="ref10"></a> []()
* <a id="ref11"></a> []()
* <a id="ref12"></a> []()
* <a id="ref13"></a> []()
