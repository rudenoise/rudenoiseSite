# Ocaml

## Getting Setup

### Tools and Package Manager

Guides
* http://hyegar.com/blog/2015/10/19/so-you're-learning-ocaml/
* https://realworldocaml.org/v1/en/html/a-guided-tour.html
* https://ocaml.org/learn/tutorials/basics.html
* https://github.com/realworldocaml/book/wiki/Installation-Instructions#setting-up-and-using-utop
* https://www.cs.kent.ac.uk/people/staff/sao/articles/osx_vim_ocaml.html

The basics:
```
# brew install ocaml
brew install opam
opam switch 4.02.3
brew install rlwrap
```

Some tools:
```
# some core libs
opam install batteries core
# a repl
opam install utop
# a build tool
opam install oasis
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

### Setup NeoVim

Install the python client: [Python client to Neovim](https://github.com/neovim/python-client)

## Tutorials/Books

https://realworldocaml.org/v1/en/html/a-guided-tour.html
