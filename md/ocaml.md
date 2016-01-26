# Ocaml

## Getting Setup

### Tools and Package Manager

Guides
* https://realworldocaml.org/v1/en/html/a-guided-tour.html
* https://ocaml.org/learn/tutorials/basics.html
* https://github.com/realworldocaml/book/wiki/Installation-Instructions#setting-up-and-using-utop

The basics:
```
brew install ocaml
brew install opam
brew install rlwrap
```

Some tools:
```
# some core libs
opam install batteries core
# a repl
opam install utop
```

### Set up utop

Add to ~/.ocamlinit
```
#use "topfind";;
#thread;;
#camlp4o;;
#require "core.top";;
#require "core.syntax";;
```

### Set up vim:

* [Merlin and ocp-indent](https://opam.ocaml.org/blog/turn-your-editor-into-an-ocaml-ide/)
* [Merlin Vim](https://github.com/the-lambda-church/merlin/wiki/vim-from-scratch<Paste>)
* [OCP Indent](https://github.com/def-lkb/ocp-indent-vim)

```
opam install ocp-indent merlin
```

Then add this to .vimrc:
```
set rtp+=~/code/ocp-indent-vim

let g:opamshare = substitute(system('opam config var share'),'\n$','','''')
```

## Tutorials/Books

https://realworldocaml.org/v1/en/html/a-guided-tour.html
