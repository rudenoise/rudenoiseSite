# OCaml/Mirage OS Diary, Week 3

Whilst continuing to work through _Real World Ocaml_, I did some
research into related projects and found one
that really helled my interest: MirageOS <sub>[_[1](#ref1)_]</sub> (a
unikernel/library OS for building small, fast and secure web-servers).

## My history with servers 2003-2016

* **2003** Started my dev "career". The website I
  worked on was a LAMP stack hosted on a single "beefy" server,
  kept in a rack, in (what I remember to be, but can't find
  supporting evidence for) a nuclear fallout shelter beneath
  Manchester's China Town. We administered it via _ssh_ and _ftp_.
  If it ran into trouble someone had to run down there and
  physically swap it for a spare. Apparently, it set alight once
  when (non-pornographic) images were hot-linked by an Italian porn
  site. It got too hot. _Data backup_ was done as DB dumps and
  _redundancy_ was RAID enabled drives! I enjoyed those years.
* **2006-2011** Things settled into a less drama prone phase as
  projects I worked on were living in RackSpace boxes with SLAs and
  management packages. There were DB, Server and Network admins at
  the larger companies. Blogs, like _High Scalability_, told enticing
  tales of server-farms in shipping containers and other exotic and
  exciting set-ups.
* **2011-2014** Things started getting a bit tasty again as cloud
  services were consumerised. DevOps tooling had trickled down (and
  my employer dealt with global scale and location problems). The creation,
  movement and management of servers was becoming another every-day
  tool (thanks to Vagrant, Chef, Puppet, AWS CLI and their like).
* **2015** Docker was now firmly in place as a way to build
  and manage consistent environments (from dev machines to live servers).
  Servers were now another programming tool.
* **2016** Unikernels?!

## Why Unikernels?

In a NodeJS stack, for example, there are a lot of moving parts 
Operating System, system tools,  NodeJS, NPM packages - that also
pull in further packages - and sitting on top: the application).

Stacks like this have a lot components to think about, manage and
deploy. In a world of micro-services the ratio of _stuff_ to
application code grows further.

On top of this, each item in the stack has the potential to
introduce security vulnerability.

The challenge now is to reduce the complexity/stack-size. Go apps
with micro-containers is a good example of this movement
<sub>[_[2](#ref2)_]</sub>.

A potential step on from this are Unikernels and Library Operating
Systems. Application code and operating system compiled and
deployed as one purpose built unit. This leads to tiny (measured in kB
rather than MB), fast starting and quickly deployed servers with
fewer attack surfaces.

For a good history and overview of all this I recommend
_Unikernels: Rise of the Virtual Library Operating System_
<sub>[_[3](#ref3)_]</sub>.

## So what am I doing about it?

I've enjoyed learning OCaml but needed a real-world project to use
it on. I've also been looking to contribute to an Open Source
project, ideally one that could play a part in the future of the
internet's infrastructure. Discovering Unikernels lead me to sign
up for the Mirage OS Hackathon (and it's in Marrakech)
<sub>[_[4](#ref4)_]</sub>.

I'm all in.

## Links

* <a id="ref1"></a> [Mirage OS](https://mirage.io/)
* <a id="ref2"></a> [Microcontainers – Tiny, Portable Docker Containers](http://www.iron.io/microcontainers-tiny-portable-containers/)
* <a id="ref3"></a> [Unikernels: Rise of the Virtual Library Operating System](http://queue.acm.org/detail.cfm?id=2566628)
* <a id="ref4"></a> [MirageOS hackathon](http://marrakech2016.mirage.io/)
