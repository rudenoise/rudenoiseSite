# OCaml/MirageOS Diary, Part 4A

In preparation for the MirageOS Hackathon I spent some time setting
up a development environment.

## Installing and Developing Inside OSX

Install OCaml (if you haven't already), using Home Brew:

```sh
# get opam package manager
brew install opam
# get the ocaml
opam switch 4.01.0
# a repl
opam install utop
```

Then install the _mirage_ libraries <sub>[_[2](#ref2)_]</sub>.

Then it's a case of following the documentation on the MirageOS
website <sub>[_[3](#ref3)_]</sub>.

Very straight forward.

## Deploying to Xen, with Ubuntu, Inside VBox, Inside OSX

This process is more complicated. MirageOS unikernels will ultimately
be deployed inside the Xen hypervisor (as used by many cloud hosting
services) (hypervisor like supervisor, not "really, really good visor").

> A hypervisor or virtual machine monitor (VMM) is a piece of
> computer software, firmware or hardware that creates and runs
> virtual machines. <sub>[_[4](#ref4)_]</sub>


Running inside OSX (or other \*nix OS), the Mirage OS
compilation process uses various opam modules that allow your
server application to run as a regular executable.

When compiled for Xen
these modules are swapped for equivalents that interact
directly with Xen's emulated hardware (QEMU) environment. It
becomes a self contained Operating System. The resulting _.xen_
file contains the entire unikernel (application and OS in one). 

To have a self contained development environment, on your
workstation, two nested hypervisors are required: VirtualBox and
Xen. VBox to run  a Linux/Unix
distribution (as _dom0_) side-by-side with Xen. The Mirage
unikernels will run in/on Xen/_domU_.

Setting these up manually took a couple of hours and was a little
fiddly. I found Magnus Skjegstad's guide to be the most clear and
helpful <sub>[_[5](#ref5)_]</sub>.

I had pre existing Docker Machines, with host only networks, on
Virtual Box so had to adjust the instructions to use a different IP.
Another option was removing everything from VBox and starting fresh.

I looked Packer/Vagrant images <sub>[_[6](#ref6)_]</sub>
<sub>[_[7](#ref6)_]</sub> but these didn't work first try, I
stuck with what I had.

## Next Steps

I'm interested in testing my knowledge by creating a guide, similar
to Magnus's, using Alpine Linux.

Then build a Packer/Vagrant project for getting a repeatable
automated environment working.

A long term goal could be to create a set of tools similar to those
used in the docker/lxc ecosystem. Providing something like _docker-machine_
and _docker-compose_ to aid setup of VMs, build, deployment and
networking between instances.

If that tool was built in OCaml, I'd be very happy (although this
is beyond me just now).

The tools described above would be very useful for on boarding
developers looking to get up and running with Mirage without having
to get into the finer points of how the environment fits together.
And, perhaps, all this is being worked on by Docker/Unikernel
Systems?

## Links

* <a id="ref1"></a> [OCaml/MirageOS Diary, Part 4B](/ocaml-diary-4b.html)
* <a id="ref2"></a> [Install Mirage](https://mirage.io/wiki/install)
* <a id="ref3"></a> [Mirage Hello World](https://mirage.io/wiki/hello-world)
* <a id="ref4"></a> [Hypervisor, Wikipedia](https://en.wikipedia.org/wiki/Hypervisor)
* <a id="ref5"></a> [Local Mirage Development with Xen and VirtualBox](http://www.skjegstad.com/blog/2015/01/19/mirageos-xen-virtualbox/)
* <a id="ref6"></a> [Mirage Vagrant VMs](https://github.com/mirage/mirage-vagrant-vms)
* <a id="ref7"></a> [Matt Grey's Mirage-Xen-Virtualbox](https://github.com/mattgray/mirage-xen-virtualbox)
