# Giada on Ubuntu 16.04

`.deb` on site is aimed at 17.x. Worked once I'd installed the dependencies [here](https://giadamusic.com/documentation/show/compiling-from-source)

The version in the ununtu package repo is old `0.11.2` and has no `vst` support compiled.

## Build from source:

Didn't get it working.

```bash
# get the source
git clone https://github.com/monocasual/giada.git
cd giada/
git submodule update --init --recursive

# install build dependencies
sudo apt-get install automake
sudo apt-get install libfltk1.3-dev
sudo apt-get install libx11-dev
sudo apt-get install libsndfile-dev
sudo apt-get install libsamplerate-dev
sudo apt-get install libxpm-dev

# build and install rtmidi from source: http://www.music.mcgill.ca/%7Egary/rtmidi/
tar -xvzf rtmidi-2.1.1.tar.gz
cd rtmidi-2.1.1/
./configure

# then install steinberg vst headers https://www.steinberg.net/en/company/developers.html
unzip vstsdk367_03_03_2017_build_352.zip
mkdir src/deps/vst
cp -r ~/Downloads/VST_SDK/VST3_SDK/pluginterfaces src/deps/vst/

# upgrade to gcc v6
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt update
sudo apt install gcc-6
# make gcc-6 the gcc priotiyy
update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-6 50
# didn't work so removed `misleading-indentation` flag from Makefile
# and `-Werror` warnings as errors flag!

# build
autoreconf -fi

./configure --target=linux --enable-vst

sudo make
sudo make install
sudo apt-get install libxpm-dev
```
