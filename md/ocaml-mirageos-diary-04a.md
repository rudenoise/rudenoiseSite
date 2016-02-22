# OCaml/MirageOS Diary, Part 4A

Week 4 in OCaml land was busy. In preparation for the MirageOS
Hackathon I spent some time setting up my development environment,
which is covered in this post. I also started a simple OCaml CLI
application, which is covered in Part 4B <sub>[_[1](#ref1)_]</sub>.

## Installing and Developing Inside OSX

Installing OCaml (if you havent already), using Home Brew:

```sh
# get opam package manager
brew install opam
# get the ocaml
opam switch 4.01.0
# a repl
opam install utop
```

## Deploying to Xen, inside VBox, with Ubuntu, inside OSX

This process is more complicated. MirageOS unikernels will ultimately
be deployed inside the Xen hypervisor (as used by many cloud hosting
services).

> A hypervisor or virtual machine monitor (VMM) is a piece of
> computer software, firmware or hardware that creates and runs
> virtual machines.
Wikipedia

When running inside OSX (or other \*nix OS), the Mirage OS
compilation process uses various opam modules that allow your
server application to run on top of the Operating System's stack 
network interfaces, file-system etc...). When compiling for Xen
deployment these modules are swapped for modules that interact
directly with Xen's emulated hardware (QEMU) environment. It
becomes a self contained Operating System. The resulting _.xen_
file contains the entire unikernel. 



## Links

* <a id="ref1"></a> [OCaml/MirageOS Diary, Part 4B](/ocaml-diary-4b.html)
* <a id="ref2"></a> [Install Mirage](https://mirage.io/wiki/install)
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
