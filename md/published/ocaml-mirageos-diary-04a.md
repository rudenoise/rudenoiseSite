# OCaml/MirageOS Diary, Part 4A

Week 4 with OCaml was busy. In preparation for the MirageOS
Hackathon I spent some time setting up my development environment,
which is covered in this post. I also started a simple OCaml CLI
application, which is covered in Part 4B (coming shortly).

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

Then install the _mireage_ libraries <sub>[_[2](#ref2)_]</sub>.

Then it's a case of following the documentation on the MirageOS
website <sub>[_[3](#ref3)_]</sub>.

## Deploying to Xen, with Ubuntu, Inside VBox, Inside OSX

This process is more complicated. MirageOS unikernels will ultimately
be deployed inside the Xen hypervisor (as used by many cloud hosting
services) (like supervisor, not "really, really good visor").

> A hypervisor or virtual machine monitor (VMM) is a piece of
> computer software, firmware or hardware that creates and runs
> virtual machines. <sub>[_[4](#ref4)_]</sub>


When running inside OSX (or other \*nix OS), the Mirage OS
compilation process uses various opam modules that allow your
server application to run in communication with the Operating System's
network interfaces, file-system etc.... When compiling for Xen
deployment these modules are swapped for modules that interact
directly with Xen's emulated hardware (QEMU) environment. It
becomes a self contained Operating System. The resulting _.xen_
file contains the entire unikernel (application and OS in one). 

To have a self contained development environment, on your
workstation, you're going to need two hypervisors: VirtualBox and
Xen. VBox to run a virtual machine, inside which a Linux/Unix
distribution (as _dom0_) will run side-by-side with Xen. The Mirage
unikernels will run in/on Xen/_domU_.

Setting these up manually takes time and is a little fiddly. I did
find it useful to gain an understanding of how this set-up fits
together. I found Magnus Skjegstad's guide really helpful
<sub>[_[5](#ref5)_]</sub>.

A problem to look out for is a clash between any Host Only Networks
you may already have on Virtual Box. I had pre existing Docker
Machines set up that used the IPv4 _192.168.56.1_. Deleting the
machines and any _HON_s cleared the way. The other route would be
to set up a _HON_ with an differnt static IP and adjust the set-up
to take this into account.

Alternatively the same should be possible using a Packer/Vagrant image
from the Mirage Virtualbox VMs via Vagrant repo <sub>[_[6](#ref6)_]</sub>.
While I could build Mirage Unikernels, I couldn't deploy them as
I'm unclear how to configure the network settings and they don't
appear to work out of the box. I also tried another
<sub>[_[7](#ref6)_]</sub> but this ran into trouble building the
mirage libraries.

## Next Steps

I'm intersted in testing my knowledge by creatng a guide, simialr
to Magnus's, using Alpine Linux.

Then build a Packer/Vagrant project for getting a repeatable
automated environment working.

A long term goal could be to create a set of tools similar to those
used in the docker/lxc ecosystem. This would manage stetting
up VBox VMs and their networking in a similar way _docker-machine_
does. Then a _docker-compose_ like tool for building and launching
networked unikernels built inside the VM/_dom0_ but synced from the
host OS.

If that tool was built in OCaml, I'd be very happy (although this
is beyond me just now).

The tools described above would be very useful for onboarding
developers looking to get up and running with Mirage without having
to get into the finer points of how the environment fits together.
And, perhapse, all this is being worked on by Docker/Unikernel
Systems?

## Links

* <a id="ref1"></a> [OCaml/MirageOS Diary, Part 4B](/ocaml-diary-4b.html)
* <a id="ref2"></a> [Install Mirage](https://mirage.io/wiki/install)
* <a id="ref3"></a> [Mirage Hello World](https://mirage.io/wiki/hello-world)
* <a id="ref4"></a> [Hypervisor, Wikipedia](https://en.wikipedia.org/wiki/Hypervisor)
* <a id="ref5"></a> [Local Mirage Development with Xen and VirtualBox](http://www.skjegstad.com/blog/2015/01/19/mirageos-xen-virtualbox/)
* <a id="ref6"></a> [Mirage Vagrant VMs](https://github.com/mirage/mirage-vagrant-vms)
* <a id="ref7"></a> [Matt Grey's Mirage-Xen-Virtualbox](https://github.com/mattgray/mirage-xen-virtualbox)
