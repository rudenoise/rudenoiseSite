# Install Lupp From Source Ubuntu 16.04

```sh
sudo apt-get install libcairo2-dev libjpeg-dev libjack-dev liblo-dev libsndfile-dev libsamplerate-dev
git clone git://git.tuxfamily.org/gitroot/non/fltk.git ntk
cd ntk
./waf configure
./waf
sudo ./waf install

cd ../
git clone https://github.com/openAVproductions/openAV-Luppp.git
cd openAV-Luppp/build
sudo usermod -a -G audio {username}
./compile.sh
```

TerminalA:
```
jackd -R -d alsa -d hw:0,3
```

Terminal B:
```
cd openAV-Luppp/build
./run.sh
```
