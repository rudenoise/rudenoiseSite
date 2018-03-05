# Note Making and Docs

## Project 1: What I Did/Read/Thought This Week

I like reading, writing, making, talking.

Some kind of blog that ties together the random threads from each
week.

Text, video, code, audio.

Like brain pickings for computing and DIY media.

## Documentation In Software is Hard

- need to make it more automatic;
- literate programming doesn't quite work;
- could you keep a live stream of code comments mixed with commit
  messages?
- thoughworks talk about Lightweight Architecture Decision
  Records;
- wikis, readme, help text
  - spectrum of local and global relevance
  - out of date quickly
  - need the history (version control useful)

## Documentation ~in Organisations~ is Hard

- project management
- meetings and agendas
- discussions
- decision making
- work tracking

Could graph data well applied do for loosely coupled data what
spreadsheets did for tabular computation?

- https://www.thoughtworks.com/mingle/
- trello
- cadence/j3t
- wikis
- blogs

## Joe Armstrong Good on This

- https://twitter.com/joeerl/status/968835078053879809
  I think my head is about to explode -- If tiddlers can be put
  into a global address space and persisted when I'm off line then
  we've almost got Xanadu - at least the main features of Xanadu
- https://twitter.com/joeerl/status/968830209817489408
  Having great fun with the @TiddlyWiki -- This is changing how I
  think. Instead of thinking at a document level - it forces you to
  think at a paragraph level (the tiddlers) - and think how the
  tiddlers can be transcluded into larger units.
- https://twitter.com/joeerl/status/968748699907252224
  Imagine if all file systems on all machines kept a hash of the
  file. Imagine if you could go to any web server anywhere anytime
  anyplace, request a file by giving the hash and by magic get back
  the file.

## Note making and publishing

- text fragments (like tiddlers);
- sha1(?) hashes/checksum for identity;
- meta-data (timestamps, location, tags) as further fragments;
- graph structures to tie together (fragments as vertices,
  relationships as edges);

- Git back-end (p2p);
- torrents for binary artifacts;
- human readable files (json/yaml/txt?);
- fast index and query;
- stand alone and networked;
- annotate with [Dot Language](https://www.graphviz.org/doc/info/lang.html)? 

- vim plug-in for editing;
- write in linear mode;
- saves to paragraph fragments (time stamps and tagged in
  collection);
- pipe urls to pandoc for fragment "clipping";
  - urls as vertex for collections of "clippings"/"snippets";

- distributed
- p2p
- fault tollerant
- open
- flexible

### API

```
post snippet -> hash
get hash -> snippet

# define edge with description
post from=hash to=hash description=snippet -> hash

```

Storage: https://gephi.org/users/supported-graph-formats/

DotFiles?
