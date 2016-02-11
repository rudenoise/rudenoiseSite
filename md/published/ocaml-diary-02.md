# OCaml Diary, Week Two

Learning a programming language in amongst a full-time job (I'm a
contractor, on a contract, so this comes out of my own time/pocket)
and parenting my daughters (2 and 4) is a tricky process. Reading
the book <sub>[_[1](#ref1)_]</sub> on the bus to and from my client
gives me 3  hours a week <sub>[_[2](#ref2)_]</sub>.
Then I grab the odd 1/2 hour before and/or after work to test out
the ideas via _utop_ <sub>[_[3](#ref3)_]</sub> or even using vim 
with _merlin_ <sub>[_[4](#ref4)_]</sub>).

After about a week of this I was getting a feel for OCaml's style.
I usually prefer simple languages. JavaScript the Good Parts
<sub>[_[5](#ref5)_]</sub> and the Little Schemer
<sub>[_[6](#ref6)_]</sub> are the high water mark for
book/language combinations. Small concepts that grow in your mind,
less is more. OCaml isn't simple in this way. Real World OCaml is a
thick book 469 pages) more than half of which is describing the
language (enough to swallow both JSTGP and LS with room to spare).

It reminds me of Swift (which took a lot of inspiration from OCaml,
apparently), Erlang (it's functional, uses guards/pattern-matching
etc...) and Haskel (compiled, fast, functional, a focus on types
etc... and there's a fair bit of mental adjustment needed).

Progress was slow and the The Go Programming Language
<sub>[_[7](ref7)_]</sub> book started to look more appealing.
Go is a simple language, it prioritises clear simple building
blocks and an idiomatic style. It should appeal, and it does, but
reading TGPL wasn't drawing me in. While Go is practical and
powerful, the challenge of OCaml was greater. OCaml's extra
complexity has been designed for a purpose and it doesn't pander to
convention.

I have the impression that persevering will yield
something worthwhile. 

## Workings Out

<a id="ref2"></a> Hours of OCaml reading time:
```ocaml
(* define a recursive function
 * recurse a list and check each item is the same
 *)
let rec same a_list =
  match a_list with
    | [] | [_] -> true
    | hd1 :: hd2 :: tl ->
      if hd1 <> hd2 then
        false
      else
        same (hd2 :: tl);;

(* call same
 * with some equivalent values
 * 3 days
 * 2 trips
 * each trip 1/2 hour
 *)
same [
  (3. *. 2. *. 0.5);
  (( *. ) 3. (( *. ) 2. 0.5));
  3.
];;
(* returns true *)
```

## Links

* <a id="ref1"></a> [Real World OCaml](https://github.com/diml/uto://github.com/the-lambda-church/merli://realworldocaml.org/)
* <a id="ref3"></a> [utop](https://github.com/diml/utop)
* <a id="ref4"></a> [merlin](https://github.com/diml/uto://github.com/the-lambda-church/merlin)
* <a id="ref5"></a> [JavaScript the Good Parts](http://shop.oreilly.com/product/9780596517748.do)
* <a id="ref6"></a> [The Little Schemer](https://mitpress.mit.edu/books/little-schemer)
* <a id="ref7"></a> [The Go Programming Language](http://www.gopl.io/)

