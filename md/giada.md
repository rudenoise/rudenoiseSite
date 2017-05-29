# Giada on Ubuntu 16.04

`.deb` on site is aimed at 17.x.

The version in the ununtu package repo is old `0.11.2` and has no `vst` support compiled.

## Build from source:

```
git clone https://github.com/monocasual/giada.git
cd giada/
sudo apt-get install automake
autoreconf -fi
sudo apt-get install libfltk1.3-dev
sudo apt-get install libx11-dev
sudo apt-get install libsndfile-dev
sudo apt-get install libsamplerate-dev
# not right version:
sudo apt-get install librtaudio-dev librtmidi-dev
# build and install from source: http://www.music.mcgill.ca/%7Egary/rtmidi/
tar -xvzf rtmidi-2.1.1.tar.gz
cd rtmidi-2.1.1/
./configure
sudo make
sudo make install
sudo apt-get install libxpm-dev

# build
./configure --target=linux --enable-vst
make
# optionally
make install
```
