# OCaml inPath, Take 2

## Platform

* Linux 4.2.0-34-generic
* x86_64
* OCaml 4.02.3 / 4.03.0

## Reducing Binary Size

| Version       | Binary size   |
|---------------|---------------|
| With Core     | 14M           |
| 4.02 Cmdliner |    854K       |
| 4.02 Strip    |    613K       |
| 4.03 Cmdliner |    919K       |
| 4.03 Strip    |    611K       |

## Notes

### Strip
https://lifthrasiir.github.io/rustlog/why-is-a-rust-executable-large.html
https://news.ycombinator.com/item?id=11823949
```
strip _build/inPath.native
```

## Whole program dead code elimination

https://github.com/ocaml/ocaml/pull/608
