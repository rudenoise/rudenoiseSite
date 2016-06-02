# OCaml Update June 2016

This blog hasn't seen much action lately because I've been coding,
instead. Rather than wait for writing time to open up here's a
brief round up of the last few months:

## _MirageOS_ Hackathon, Marrakech

Back in March I spent a few days hacking on _MirageOS_ related
_OCaml_. It was probably the best code-related activity/event that
I've ever attended. Conferences, workshops and courses generally
leave me cold. The difference here was the lack of "salesmanship",
hackers showed up, opened laptops, hacked, chatted, ate, drank...
If I wanted to know something about _OCaml_ or _MirageOS_ I could
ask an expert, they were right there.

Despite being a novice, I felt welcome, made some friends and
gained a fresh perspective on how tech-projects can be formed
(outside the bubble of commerce and business/career interests).
Valuing intellectual curiosity, creativity and the potential to
improve the applications of computing - rather than how these
technologies can be bought and sold. 

I mucked about running a _MirageOS_ Unikernel on a Raspberry
Pi<sub>[_[1](#ref1)_]</sub>. Improved my _OCaml_<sub>[_[2](#ref2)_]</sub>.
And was given a good idea for a project
by Hannes<sub>[_[3](#ref3)_]</sub>, the result being a _MirageOS
Dashboard_ (giving an overview of the packages and tools developers
will find useful when working on _MirageOS_)<sub>[_[4](#ref4)_]</sub>.

There's a load more to say about this, luckily others have taken the
time to write it up in more detail <sub>[_[5](#ref5)_]</sub>
<sub>[_[6](#ref6)_]</sub>.

## Other Stuff

My _OCaml_ skills are improving and I feel reasonably productive. I'm
now comfortable with the basic concepts (modules, functors etc...)
but still have quite a few things I'd like to master. Following on
from my a previous post I shrank my _inPath_ binary from 14MB to
1MB, simply by removing _Core_. I doubt that it makes a significant
difference to anything, other than size in memory/disk, but
eradicating _Core_ is necessary when working with _MirageOS_.

The hackathon reminded me that there are subjects within computing
that grab my interest and yet I've never taken the time to really
investigate. They would also allow me to contribute to the
formation of tools like _MirageOS_ that I currently cannot. These are
the topics and books I'd like to get into:

* Networks and protocols (_Computer Networking: A Top-Down
  Approach_<sub>[_[9](#ref9)_]</sub> and _Computer
  Networks_<sub>[_[10](#ref10)_]</sub>);
* Compilers and languages (_Structure and Interpretation
  of Computer Programs_<sub>[_[11](#ref11)_]</sub>);
* Processors and assembly language (_Feynman: Lectures on
  Computation_<sub>[_[12](#ref12)_]</sub> and _Programming from the
  Ground Up_<sub>[_[13](#ref13)_]</sub>).

Tackling any of these would be at the expense of time spent on _OCaml_,
_MirageOS_ and the _MirageOS Dashboard_. So that's the current dilemma,
*_advice welcome_*.

## Links


* <a id="ref1"></a> [qemu-solo5-mirage-rpi3](https://github.com/rudenoise/qemu-solo5-mirage-rpi3)
* <a id="ref2"></a> [inPathOCaml](https://github.com/rudenoise/inPathOCaml)
* <a id="ref3"></a> [Hannes Mehnert](http://hannes.nqsb.io/)
* <a id="ref4"></a> [MirageOS Dashboard](https://github.com/rudenoise/mirage-dashboard)
* <a id="ref5"></a> [MirageOS Marrakech Canopy](http://canopy.mirage.io/)
* <a id="ref6"></a> [Hackathon Trip Reports](https://mirage.io/blog/2016-spring-hackathon)
* <a id="ref9"></a> [Computer Networking: A Top Down Approach](https://github.com/mw12/Academics/blob/master/sem%203-2/Computer%20Networks/Computer%20Networking%20A%20Top%20Down%20Approach%206th%20Edition.pdf)
* <a id="ref10"></a> [Conmputer Networks](http://cse.hcmut.edu.vn/~minhnguyen/NET/Computer%20Networks%20-%20A%20Tanenbaum%20-%205th%20edition.pdf)
* <a id="ref11"></a> [SICP](https://mitpress.mit.edu/sicp/full-text/book/book.html)
* <a id="ref12"></a> [Lectures on Computation](https://cds.cern.ch/record/411350/files/p101.pdf)
* <a id="ref13"></a> [Programming from the Ground Up](http://download-mirror.savannah.gnu.org/releases/pgubook/ProgrammingGroundUp-1-0-booksize.pdf)
