# Minimal Definitions, Minimal Computing - Notes

Jentery Sayers thoughts on defining the concept of _Minimal
Computing_ <sub>_[1](#ref1)_</sub>.

Focussed around academic applications and Alex Gil's
question <sub>[_[2](#ref2)_]</sub>:

> What do we need? - Alex Gil

> The emerging definitions of minimal computing and its frameworks
> fascinate me, in part because they engage various histories of
> technology at the intersection of aesthetics and politics. - Jentery Sayers

Aesthetics in computing <sub>[_[3](#ref3)_]</sub>.

## Minimal Design

UNIX Philosophy.

Law of Requisite Variety <sub>[_[4](#ref4)_]</sub>.

In its technical implementation, Jekyll only moves the complexity
around, the reduction is negligible.

Agree that reducing the design and UI functions is beneficial and in
keeping.

The notion of a "minimal" system is very subjective. In most cases,
assuming that the complexity is essential, what remains can be hidden
from the user (at the expense of understanding/learning and
flexibility) or revealed at the surface (at the expense of first-time
comprehension). See Bret Victor <sub>[_[5](#ref5)_]</sub>.

> working through these entanglements of writing with programming.

Kunth's Literate Programming <sub>[_[6](#ref6)_]</sub> while
appealing has never taken a strong hold in the code bases I read.
Vikram Chandra would seem to agree on some degree of separation in
the properties of each medium, in his book: Geek Sublime
<sub>[_[7](#ref7)_]</sub>.

An example that I prefer is the OpenBSD Operating System
<sub>[_[8](#ref8)_]</sub> with well tended and groomed source code
coupled with an extensive and well thought out manual. The
implementation separate from the operation of the program yet both
following the same core principles and UNIX Philosophy.

Thinking on the division between the creation of tools and the
creation of content (as I'm working on the tools side of the
balance): the protocols and delivery methods of web-content are far
from minimal. Managing the raw material in _git_, publishing over
_FTP_, serving HTML over _HTTP_ and then continuing the conversation
over mail (_SMTP_) and proprietary systems like _Twitter_ and _Face
Book_.

This could all be consolidated into the use of _Git_ alone (or
another peer-to-peer versioning/branching system). In large
development teams a form of "conversation" is carried out over
branches, pull-requests and merges <sub>[_[9](#ref9)_]</sub>.
Not only is the creation of the content collaborative but a permanent
record is kept of the development of the ideas within.

Another advantage is the _Git_ protocol is _peer-to-peer_. Wile many
use a centralised server, it is not essential. Always-on servers
consume massive amounts of energy, idling for the majority of the
time, coordinated pulling of git repositories could be a foundation
for a far more energy efficient transfer, retrieval and storage of
textual records (or any digitised media).


## Links

1. <a id="ref1"></a> [Minimal Definitions, Minimal Computing - Jentery Sayers](http://go-dh.github.io/mincomp/thoughts/2016/10/02/minimal-definitions/)
2. <a id="ref2"></a> [The User, the Learner and the Machines We Make](http://go-dh.github.io/mincomp/thoughts/2015/05/21/user-vs-learner/)
3. <a id="ref3"></a> [The Beauty of Code](http://www.theparisreview.org/blog/2014/09/05/the-beauty-of-code/)
4. <a id="ref4"></a> [The Law of Requisite Variety](https://en.wikipedia.org/wiki/Variety_(cybernetics)#The_Law_of_Requisite_Variety)
5. <a id="ref5"></a> [Up and Down the Ladder of Abstraction](http://worrydream.com/LadderOfAbstraction/)
6. <a id="ref6"></a> [Literate Programming](https://en.wikipedia.org/wiki/Literate_programming)
7. <a id="ref7"></a> [Geek Sublime](https://www.graywolfpress.org/books/geek-sublime)
8. <a id="ref8"></a> [OpenBSD](https://www.openbsd.org/)
9. <a id="ref9"></a> [Git pull requests](https://help.github.com/articles/about-pull-requests/)
10. <a id="ref10"></a> []()
