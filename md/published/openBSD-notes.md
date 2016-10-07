# Open BSD Notes

I've installed OpenBSD on my ThinkPad X61s. A rugged and minimal
pairing of OS and laptop.

> Instead of trying to make it do more, they keep it focused on doing
> what it does with more security and reliability. _Derek Sivers_

The basic OS is small, the x86 install is less
than 300MB. This provides everything _OpenBSD_'s developers consider
essential for a general-purpose Operating System. The UNIX philosophy
is adhered to and is coupled with rigorous documentation. If
there is a job that needs doing it will have one program to do it and
the user can read a thorough manual describing its intended use and
functionality, with examples. While not for the novice (it's console
only, by default) the system is complete and self-contained. With time
a user could operate and learn about the system with no external
resources. [This is beyond me, so far, but I'm getting there.]

I'm enjoying the learning-curve, I recommend it.

## Adding Things

I aim at a simple set-up, for example this page published using
the flowing tools:

* write and edit in _vim_;
* use _git_ for version control;
* _markdown_ for text;
* _pandoc_ to convert _md_ to _HTML_;
* a _shell_ script to wrap the HTML in a minimally styled document;
* I deploy this to an _AWS S3_ bucket which serves over _http_.

_OpenBSD_ reveals just how much computation is involved in
assembling the tools, above.

For instance, _pandoc_ is a non-trivial piece of software. To install
on _Ubuntu_ I'd simply:

```sh
sudo apt-get install pandoc
```

This would bring down a pre-compiled binary and any dynamically
linked libraries/dependent-packages. Seems simple but this is deceptive. To
install on OpenBSD there is no preconfigured binary. To obtain
_pandoc_ I needed to:

1. install the _Glasgow Haskell Comiler_ (_GHC_);
2. install the Haskell package manager _Cabal_;
3. use _Cabal_ to obtain the _pandoc_ source and build and executable
   binary.

This process took over 30 mins to complete (the _X61s_ first appeared
in 2007 so its slow by current standards).

## Minimisation

I like to know and understand my tools. I'm not at a stage where
replacing _vim_ and _git_ are an option.

Much as I admire _pandoc_ I am not using most of its functionality.
For the sub-set of _markdown_ that I'm using I could write my own
_md-to-html_ program.

And though _AWS_ is cheap (this blog is never visited enough to make it
worth Amazon's effort to bill me) I could be serving content from my
own _OpenBSD_ server at home.

## Links
* [OpenBSD](https://www.openbsd.org/)
* [My collected OpenBSD links](https://pinboard.in/u:rudenoise/t:openBSD/)
* [Minimal Computing](http://go-dh.github.io/mincomp/)
* [Derek Sivers on OpenBSD 6](https://pinboard.in/u:rudenoise/t:openBSD/)
* [UNIX Philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)
* [Pandoc](http://pandoc.org/)
* [ThnikPad X61s](http://pandoc.org/)
