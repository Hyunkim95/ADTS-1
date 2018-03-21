# ADT Part 1

Following: https://www.youtube.com/watch?v=fIb1IOVh6cY

Some key notes from the video:
```
List.of(assign)
```
* A function wrapped around a list functor

**Applicative**

```
ap :: f(a -> b -> c) -> f a -> f b -> f c
```

```
List.of(assign)
	.ap(List(values))
```
* A partially applied function wrapped around a list functor 

```
List.of(assign)
	.ap(List(values))
	.ap(List(suits))
```
* Returns a List of the product of the values and suits

```
List(values)
	.map(assign)
	.ap(List(suits))
```
* Basically the same thing, it first wraps the values in a functor and then the map partially applies assign to each element.  Each element in suits is then applied to each partial function

```
const apExample = 
	ap(suits, map(assign, value))
```

* map(fn, data) => partial function
* apply that partial function over the suits

**LiftA2**

Basically the simpler version of ap

```
liftA2 :: (a -> b -> c) -> f a -> f b -> f c 
```

**Pair**

```
Pair([], deck)
```
* map only applies to the right hand side
* as it is a bifunctor, we can use bimap to both sides

```
Pair([], deck)
	.bimap(leftmap, rightmap)
```

```
Pair :: P a a
Pair([], deck)
f a 

pickCard :: a -> P a a 
b -> f b 
```

```
Chain :: f a -> (a -> f b) -> f b

Pair([], deck) <------------ f a 
	.chain(pickCard<)---------- (a -> f b)

// output will be mb
```

Side effects limit the ability to test comprehensively thats why we want to reduce side effects as much as possible
