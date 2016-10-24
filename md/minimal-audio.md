# Minimal Audio

Continuing the _Minimal Computing_ <sub>[_[1](#ref1)_]</sub>
<sub>[_[2](#ref2)_]</sub> theme this post is about minimal audio
programming in _C_ on _Linux_ and _OpenBSD_.

My first real interest in computers stems from making _Drum and Bass_
as a teenager. I've retained an interest but never tried
programming any audio. While exploring _OpenBSD_ I
discovered how simply the OS implements audio functionality and
(unlike others) gives it kernel-space priority which could give it an
edge over other OSs.

It seemed like a good place to start
learning things from the ground up. Many programmers may have done this
kind of thing at university, I hadn't and wish that I had.

The simplest way to make a noise in _OpenBSD_:
```ksh
# play white noise
cat > /dev/audio < /dev/random &
# stop
kill %1
```
_/dev/random_ is a file/stream of random bytes, _/dev/audio_ is a file
that represents the sound-interface. Cool but
generating a musical sound would be better. The simplest way to do
this would be to send a stream of bytes to _/dev/audio_. A "square
wave" is basic, a period of bytes at one number/level,
followed by another stream at a different level.

I know a little _Linux X86 Assembly_ <sub>[_[3](#ref3)_]</sub> so
the most _minimal_ audio program I could think up was: build a square-wave
in assembly. The only problem being that the program was
specific to Linux. To work between _Linux_ and _OpenBSD_
(and almost any other OS/architecture) I decided to satisfy another
long-standing curiosity. I'd build some wave generators in the _C_
programming-language <sub>[_[4](#ref4)_]</sub>.


I bought two books: _The C Programming
Language_ <sub>[_[5](#ref5)_]</sub> which is a "classic" but also a
little dry and based on an old standard (ANSI/c89, as in 1989); and
_Learn C and Build Your Own Lisp_ <sub>[_[6](#ref6)_]</sub>, witch is
based on C99 (the same as OpenBSD) and is really well written.

For my programs I wanted to build
"wave-forms" <sub>[_[7](#ref7)_]</sub>, the basic
forms are _square, saw, triangle and sine_. Generating these and many
other types of audio are well covered
problems<sub>[_[8](#ref8)_]</sub>, I've seen many great
tools <sub>[_[9](#ref9)_]</sub> that are open-source and worth playing
with <sub>[_[10](#ref10)_]</sub>. (Especially anything by Paul
Batchelor<sub>[_[11](#ref11)_]</sub>).


But as brilliant as those tool are, I wanted to learn for
myself and to keep things very simple and easy to debug. I also
like that classic 80's game-sound (chip-tunes
<sub>[_[12](#ref12)_]</sub>) so making the waves in
8-bit-mono, using unsigned integers seemed like the way to go.

I setup my tools (_Vim, GCC, make and musl
lib-c_ <sub>[_[13](#ref13)_]</sub>) and it started to flow:

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

Now it was obvious (and obscene?):
![Broken Sine Wave](./img/badSine.gif)

I had the quadrants of my wave being "rendered" in the wrong order
and was looping over the edges of each cycle.

Fixed!!!
![Sine Wave](./img/sine.gif)

GNUPlot is the shit!
```
  300 +-+----+------+------+------+------+-----+------+------+------+----+-+
      +      +      +      +      +      +     +      +      +      +      +
      |                                              '-' using 1:2    A    |
  250 +-+     AAAAAA                                   AAAAAA            +-+
      |     AAA    AA                                AAA    AA             |
      |    AA       AAA                             AA       AA            |
  200 +-+ AA          AA                           AA          A         +-+
      |  AA            AA                         AA            A          |
      | AA              A                        AA              A         |
  150 +AA                A                      AA               AA      +-+
      |A                 AA                    AA                 AA       |
      A                   AA                   A                   AA      |
      |                    AA                 A                     AA     |
  100 +-+                   AA               AA                      A   +-+
      |                      AA             AA                        A    |
      |                       AA           AA                          A   |
   50 +-+                      AA         AA                            A+-+
      |                         AA       AA                              AA|
      +      +      +      +     AAA   AAA     +      +      +      +     AA
    0 +-+----+------+------+------+AAAAA-+-----+------+------+------+----+-+
      0      50    100    150    200    250   300    350    400    450    500
```

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

