# Minimal Audio

Since writing a little about _Minimal
Computing_<sub>[_[1](#ref1)_]</sub> (and being included on the
community site<sub>[_[2](#ref2)_]</sub>), the week has been spent
putting some of these principles into practice.

My first real interest in computers stems from making _Drum and Bass_
as a teenager. While I've retained an interest I'd never tried
programming any audio related software. While exploring _OpenBSD_ I
discovered how simply the OS implements its audio functionality and
(unlike others) gives it kernel-space priority.

It seemed like a good place to start doing some audio programming and
learn things from the ground up. The simplest way to get a noise was
to pipe _/dev/random_ to _/dev/audio_.

```ksh
# play white noise
cat > /dev/audio < /dev/random &
# stop
kill %1
```

_/dev/random_ is a stream of random bytes, _/dev/audio_ is a "file"
that represents the sound-interface with the OS. That was cool but
generating a musical sound would be better. The simplest way to do
this would be to send a stream of bytes to _/dev/audio_. A "square
wave" would be the simplest, a period of bytes at one number/level,
followed by another stream at a different level.

I'd been learning _Linux X86 Assembly_<sub>[_[3](#ref3)_]</sub> so
the most _minimal_ program I could build a square-wave with could be
written in assembly. The only problem being that the program was
specific to Linux. To be enable working between Linux and OpenBSD
(and almost any other OS/architecture) I decided to satisfy another
long-standing curiosity. I'd build some wave generators in the _C_
programming-language<sub>[_[4](#ref4)_]</sub>.


I bought two books: _The C Programming
Language_<sub>[_[5](#ref5)_]</sub> which is a "classic" but also a
little dry and based on an old standard (ANSI/c89, as in 1989); and
_Learn C and Build Your Own Lisp_<sub>[_[6](#ref6)_]</sub>, witch is
based on C99 (the same as OpenBSD) and is really well written.

For my programs I wanted to build
"wave-forms"<sub>[_[7](#ref7)_]</sub>, and in synthesis the basic
forms are _square, saw, triangle and sine_. Generating these and many
other types of audio are well covered
problems<sub>[_[8](#ref8)_]</sub>, I've seen many great
tools<sub>[_[9](#ref9)_]</sub> that are open-source and great to
use<sub>[_[10](#ref10)_]</sub>. (Especially anything by Paul
Batchelor<sub>[_[11](#ref11)_]</sub>).


But as brilliant as the existing tool are I wanted to learn for
myself. I wanted to keep things very simple and easy to debug. I also
like that classic 80's game-sound
(chip-tunes<sub>[_[12](#ref12)_]</sub>) so making the waves in
8-bit-mono, using unsigned integers seemed like the way to go.

So I setup my tools (_VIm, GCC, make and musl lib-c_<sub>[_[13](#ref13)_]</sub>) and it started to flow:

Square:
![Square Wave](./img/square.gif)
Saw:
![Saw Wave](./img/saw.gif)
Triangle:
![Triangle Wave](./img/triangle.gif)

Then I got hung up on Sine<sub>[_[14](#ref14)_]</sub> and
trigonometry... Having paid little attention in school I was very
impressed by Khan Academy<sub>[_[15](#ref15)_]</sub>, an afternoon of
"school" and it started to come together.

It still didn't sound quite right but ears (or my ears) are not that
good at relating audio irregularities to code. I wanted to visualise
what I was hearing. I needed an oscilloscope, the next best thing is
_GNU Plot_<sub>[_[16](#ref16)_]</sub>.

Now it was obvious:
![Broken Sine Wave](./img/badSine.gif)

I had the quadrants of my wave being "rendered" in the wrong order
and was looping over the edges of each cycle.

Fixed!!!
![Sine Wave](./img/sine.gif)

1. <a id="ref1"></a> [Minimal Definitions, Minimal Computing - Notes](http://rudenoise.uk/md-mc-notes.html)
2. <a id="ref2"></a> [Minimal Computing: Thought Pieces](http://go-dh.github.io/mincomp/thoughts/)
3. <a id="ref3"></a> [x86 Assembly With Linux (Exercises)](https://github.com/rudenoise/x86AssemblyWithLinux)
4. <a id="ref4"></a> [Minimal Sound](https://github.com/rudenoise/minimalSound)
5. <a id="ref5"></a> [The C Programming Language](https://en.wikipedia.org/wiki/The_C_Programming_Language)
6. <a id="ref6"></a> [Learn C - Build Your Own Lisp](http://www.buildyourownlisp.com/)
7. <a id="ref7"></a> [Waveform](https://en.wikipedia.org/wiki/Waveform)
8. <a id="ref8"></a> [Rudenoise's Audio Links](https://pinboard.in/u:rudenoise/t:audio/)
9. <a id="ref9"></a> [SuperCollider](http://www.audiosynth.com/)
10. <a id="ref10"></a> [Paul Batchelor's Blog](http://paulbatchelor.github.io/blog/)
11. <a id="ref11"></a> [Sporth](https://paulbatchelor.github.io/proj/sporth)
12. <a id="ref12"></a> [Chiptune](https://en.wikipedia.org/wiki/Chiptune)
13. <a id="ref13"></a> [musl libc](https://www.musl-libc.org)
14. <a id="ref14"></a> [sine](https://en.wikipedia.org/wiki/Sine)
15. <a id="ref15"></a> [Kahn Academy Trigonometry](https://www.khanacademy.org/math/trigonometry/trigonometry-right-triangles/intro-to-the-trig-ratios/v/basic-trigonometry-ii)
16. <a id="ref16"></a> [gnuplot](http://gnuplot.sourceforge.net/)

