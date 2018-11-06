### My First Scanner 

This is a bare bones implementation of a scanner that maps a sentence in the [propositional calculus](https://en.wikipedia.org/wiki/Propositional_calculus) to a list of the sentence's tokens. 

For example
```
let source = "(p->q)";
let tokens = scan(source);
// tokens === ['(', 'p', '->', 'q', ')]
```

It's not very useful, but it is a good, simple illustration of what a scanner looks like. 

#### Why? 

I'm reading through [Crafting Interpreters](http://craftinginterpreters.com/) and this was my first attempt at a scanner. My goals were: 
* show the basic shape of a scanner 
* don't include anything complicated to avoid distractions
* don't abstract redundancies so that repetitive patterns stand out

#### Use 

Clone down the repo and then 
```
node main
```
