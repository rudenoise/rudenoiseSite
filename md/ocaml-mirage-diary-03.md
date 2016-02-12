# OCaml (and Mirage OS) Diary, Week 3

Whilst continuing to work through _Real World Ocaml_, I did some
research into projects that make use of it and found one
that really helled my interest. MirageOS <sub>[_[1](#ref1)_]</sub>.

## Complexity in DevOps

I've been working on DevOps projects, with clients, for a while and
have made use of Docker (as part of both development environments
and deployment mechanism). As a developer Docker, has
been useful in creating portable, reproducible environments. Making
this process so easy to manage has its downsides, the ease of
adding dependencies to the stack, for example.
In a NodeJS stack, there can be a lot of moving parts (Operating
System, system tools,  NodeJS, NPM packages - that also pull in
further packages - and sitting on top: the application, AKA the
value).

This is a lot of stuff to use when the application itself can be
pretty small, especially in the case of micro-services. There is a
lot of coupling and dependency in these stack and, once bundled,
the combined size is significant. To reconstruct the constituent
parts takes time. More parts: more time and complexity. This slows
down deploy times and the system becomes brittle.

Another factor to consider is security. A web-application's
vulnerabilities are highly exposed so developers need to be mindful
about the attack-surfaces they may introduce. That's a difficult
task when limited to application logic. For the jobbing
full-stack, DevOps engineer it is desirable be to know
about all the attack-surfaces, then monitor and manage them.
What does the Linux distribution and version contain? What
applications have been added via the package manager? If this is a
node app what do all the NPM package dependencies do? That is a lot
of questions to answer and this is a mutable stack, updates need to
be made and the system's variety shifting and growing.

## Reducing the Stack

One improvement over big stacks like those often used in NodeJS is
to reduce the size of the docker-container and deploy a self
contained binary on top. For example: A GoLang app inside
micro-container is a decent combination and well worth considering.

It turns out that the refining process can be taken further. One
approach is the use of unikernels, MirageOS, for example. There is
an useful history and description of these on the ACM Queue site
<sub>[_[1](#ref1)_]</sub>.

Having read

## Links

* <a id="ref1"></a> [Mirage OS](https://mirage.io/)
* <a id="ref2"></a> []()
* <a id="ref3"></a> []()
* <a id="ref4"></a> []()
* <a id="ref5"></a> []()
* <a id="ref6"></a> []()
* <a id="ref7"></a> []()
* <a id="ref8"></a> []()
* <a id="ref9"></a> []()
* <a id="ref10"></a> []()

[Unikernels: Rise of the Virtual Library Operating System](http://queue.acm.org/detail.cfm?id=2566628)
