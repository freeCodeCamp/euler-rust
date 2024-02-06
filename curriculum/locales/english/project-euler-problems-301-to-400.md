# Project Euler in Rust: 301 to 400
    
Complete the freeCodeCamp Project Euler problems in the Rust programming language using WebAssembly.

## 0

### --description--

Nim is a game played with heaps of stones, where two players take it in turn to remove any number of stones from any heap until no stones remain.

We'll consider the three-heap normal-play version of Nim, which works as follows:

- At the start of the game there are three heaps of stones.
- On his turn the player removes any positive number of stones from any single heap.
- The first player unable to move (because no stones remain) loses.

If ($n_1$, $n_2$, $n_3$) indicates a Nim position consisting of heaps of size $n_1$, $n_2$ and $n_3$ then there is a simple function $X(n_1,n_2,n_3)$ — that you may look up or attempt to deduce for yourself — that returns:

- zero if, with perfect strategy, the player about to move will eventually lose; or
- non-zero if, with perfect strategy, the player about to move will eventually win.

For example $X(1, 2, 3) = 0$ because, no matter what the current player does, his opponent can respond with a move that leaves two heaps of equal size, at which point every move by the current player can be mirrored by his opponent until no stones remain; so the current player loses. To illustrate:

- current player moves to (1,2,1)
- opponent moves to (1,0,1)
- current player moves to (0,0,1)
- opponent moves to (0,0,0), and so wins.

For how many positive integers $n ≤ 2^{30}$ does $X(n, 2n, 3n) = 0$?

### --tests--

`nim()` should return `2178309`.

```js
assert.strictEqual(nim(), 2178309);
```

## 1

### --description--

A positive integer $n$ is powerful if $p^2$ is a divisor of $n$ for every prime factor $p$ in $n$.

A positive integer $n$ is a perfect power if $n$ can be expressed as a power of another positive integer.

A positive integer $n$ is an Achilles number if $n$ is powerful but not a perfect power. For example, 864 and 1800 are Achilles numbers: $864 = 2^5 \times 3^3$ and $1800 = 2^3 \times 3^2 \times 5^2$.

We shall call a positive integer $S$ a Strong Achilles number if both $S$ and $φ(S)$ are Achilles numbers. $φ$ denotes Euler's totient function.

For example, 864 is a Strong Achilles number: $φ(864) = 288 = 2^5 \times 3^2$. However, 1800 isn't a Strong Achilles number because: $φ(1800) = 480 = 2^5 \times 3^1 \times 5^1$.

There are 7 Strong Achilles numbers below ${10}^4$ and 656 below ${10}^8$.

How many Strong Achilles numbers are there below ${10}^{18}$?

### --tests--

`strongAchillesNumbers()` should return `1170060`.

```js
assert.strictEqual(strongAchillesNumbers(), 1170060);
```

## 2

### --description--

For a positive integer $n$, define $f(n)$ as the least positive multiple of $n$ that, written in base 10, uses only digits $≤ 2$.

Thus $f(2) = 2$, $f(3) = 12$, $f(7) = 21$, $f(42) = 210$, $f(89) = 1\\,121\\,222$.

Also, $\displaystyle\sum_{n = 1}^{100} \frac{f(n)}{n} = 11\\,363\\,107$.

Find $\displaystyle\sum_{n = 1}^{10\\,000} \frac{f(n)}{n}$.

### --tests--

`multiplesWithSmallDigits()` should return `1111981904675169`.

```js
assert.strictEqual(multiplesWithSmallDigits(), 1111981904675169);
```

## 3

### --description--

For any positive integer $n$ the function $\text{next_prime}(n)$ returns the smallest prime $p$ such that $p > n$.

The sequence $a(n)$ is defined by: $a(1) = \text{next_prime}({10}^{14})$ and $a(n) = \text{next_prime}(a(n - 1))$ for $n > 1$.

The fibonacci sequence $f(n)$ is defined by: $f(0) = 0$, $f(1) = 1$ and $f(n) = f(n - 1) + f(n - 2)$ for $n > 1$.

The sequence $b(n)$ is defined as $f(a(n))$.

Find $\sum b(n)$ for $1≤n≤100\\,000$. Give your answer $\bmod 1\\,234\\,567\\,891\\,011$.

### --tests--

`primonacci()` should return `283988410192`.

```js
assert.strictEqual(primonacci(), 283988410192);
```

## 4

### --description--

Let's call $S$ the (infinite) string that is made by concatenating the consecutive positive integers (starting from 1) written down in base 10.

Thus, $S = 1234567891011121314151617181920212223242\ldots$

It's easy to see that any number will show up an infinite number of times in $S$.

Let's call $f(n)$ the starting position of the $n^{\text{th}}$ occurrence of $n$ in $S$. For example, $f(1) = 1$, $f(5) = 81$, $f(12) = 271$ and $f(7780) = 111\\,111\\,365$.

Find $\sum f(3^k) for 1 ≤ k ≤ 13$.

### --tests--

`reflexivePosition()` should return `18174995535140`.

```js
assert.strictEqual(reflexivePosition(), 18174995535140);
```

## 5

### --description--

The following game is a classic example of Combinatorial Game Theory:

Two players start with a strip of $n$ white squares and they take alternate turns. On each turn, a player picks two contiguous white squares and paints them black. The first player who cannot make a move loses.

- $n = 1$: No valid moves, so the first player loses automatically.
- $n = 2$: Only one valid move, after which the second player loses.
- $n = 3$: Two valid moves, but both leave a situation where the second player loses.
- $n = 4$: There are three valid moves for the first player; who is able to win the game by painting the two middle squares.
- $n = 5$: Four valid moves for the first player (shown below in red); but no matter what the player does, the second player (blue) wins.

<img class="img-responsive center-block" alt="valid starting moves for strip with 5 squares" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-strip-game.gif" style="background-color: white; padding: 10px;">

So, for $1 ≤ n ≤ 5$, there are 3 values of $n$ for which the first player can force a win.

Similarly, for $1 ≤ n ≤ 50$, there are 40 values of $n$ for which the first player can force a win.

For $1 ≤ n ≤ 1\\,000\\,000$, how many values of $n$ are there for which the first player can force a win?

### --tests--

`paperStripGame()` should return `852938`.

```js
assert.strictEqual(paperStripGame(), 852938);
```

## 6

### --description--

$k$ defects are randomly distributed amongst $n$ integrated-circuit chips produced by a factory (any number of defects may be found on a chip and each defect is independent of the other defects).

Let $p(k,n)$ represent the probability that there is a chip with at least 3 defects. For instance $p(3,7) ≈ 0.0204081633$.

Find $p(20\\,000, 1\\,000\\,000)$ and give your answer rounded to 10 decimal places in the form 0.abcdefghij

### --tests--

`chipDefects()` should return `0.7311720251`.

```js
assert.strictEqual(chipDefects(), 0.7311720251);
```

## 7

### --description--

A program written in the programming language Fractran consists of a list of fractions.

The internal state of the Fractran Virtual Machine is a positive integer, which is initially set to a seed value. Each iteration of a Fractran program multiplies the state integer by the first fraction in the list which will leave it an integer.

For example, one of the Fractran programs that John Horton Conway wrote for prime-generation consists of the following 14 fractions:

$$\frac{17}{91}, \frac{78}{85}, \frac{19}{51}, \frac{23}{38}, \frac{29}{33}, \frac{77}{29}, \frac{95}{23}, \frac{77}{19}, \frac{1}{17}, \frac{11}{13}, \frac{13}{11}, \frac{15}{2}, \frac{1}{7}, \frac{55}{1}$$

Starting with the seed integer 2, successive iterations of the program produce the sequence:

$$15, 825, 725, 1925, 2275, 425, \ldots, 68, \mathbf{4}, 30, \ldots, 136, \mathbf{8}, 60, \ldots, 544, \mathbf{32}, 240, \ldots$$

The powers of 2 that appear in this sequence are $2^2, 2^3, 2^5, \ldots$.

It can be shown that all the powers of 2 in this sequence have prime exponents and that all the primes appear as exponents of powers of 2, in proper order!

If someone uses the above Fractran program to solve Project Euler Problem 7 (find the ${10001}^{\text{st}}$ prime), how many iterations would be needed until the program produces $2^{10001^{\text{st}}\text{ prime}}$?

### --tests--

`primeGeneratingAutomation()` should return `1539669807660924`.

```js
assert.strictEqual(primeGeneratingAutomation(), 1539669807660924);
```

## 8

### --description--

In the classic "Crossing Ladders" problem, we are given the lengths $x$ and $y$ of two ladders resting on the opposite walls of a narrow, level street. We are also given the height $h$ above the street where the two ladders cross and we are asked to find the width of the street ($w$).

<img class="img-responsive center-block" alt="ladders x and y, crossing at the height h, and resting on opposite walls of the street of width w" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;">

Here, we are only concerned with instances where all four variables are positive integers. For example, if $x = 70$, $y = 119$ and $h = 30$, we can calculate that $w = 56$.

In fact, for integer values $x$, $y$, $h$ and $0 &lt; x &lt; y &lt; 200$, there are only five triplets ($x$, $y$, $h$) producing integer solutions for $w$: (70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) and (119, 175, 40).

For integer values $x$, $y$, $h$ and $0 &lt; x &lt; y &lt; 1\\,000\\,000$, how many triplets ($x$, $y$, $h$) produce integer solutions for $w$?

### --tests--

`integerLadders()` should return `210139`.

```js
assert.strictEqual(integerLadders(), 210139);
```

## 9

### --description--

Alice and Bob play the game Nim Square.

Nim Square is just like ordinary three-heap normal play Nim, but the players may only remove a square number of stones from a heap.

The number of stones in the three heaps is represented by the ordered triple ($a$, $b$, $c$).

If $0 ≤ a ≤ b ≤ c ≤ 29$ then the number of losing positions for the next player is 1160.

Find the number of losing positions for the next player if $0 ≤ a ≤ b ≤ c ≤ 100\\,000$.

### --tests--

`nimSquare()` should return `2586528661783`.

```js
assert.strictEqual(nimSquare(), 2586528661783);
```

## 10

### --description--

$ABCD$ is a convex, integer sided quadrilateral with $1 ≤ AB &lt; BC &lt; CD &lt; AD$.

$BD$ has integer length. $O$ is the midpoint of $BD$. $AO$ has integer length.

We'll call $ABCD$ a biclinic integral quadrilateral if $AO = CO ≤ BO = DO$.

For example, the following quadrilateral is a biclinic integral quadrilateral: $AB = 19$, $BC = 29$, $CD = 37$, $AD = 43$, $BD = 48$ and $AO = CO = 23$.

<img class="img-responsive center-block" alt="quadrilateral ABCD, with point O, an midpoint of BD" src="https://cdn.freecodecamp.org/curriculum/project-euler/biclinic-integral-quadrilaterals.gif" style="background-color: white; padding: 10px;">

Let $B(N)$ be the number of distinct biclinic integral quadrilaterals $ABCD$ that satisfy ${AB}^2 + {BC}^2 + {CD}^2 + {AD}^2 ≤ N$. We can verify that $B(10\\,000) = 49$ and $B(1\\,000\\,000) = 38239$.

Find $B(10\\,000\\,000\\,000)$.

### --tests--

`biclinicIntegralQuadrilaterals()` should return `2466018557`.

```js
assert.strictEqual(biclinicIntegralQuadrilaterals(), 2466018557);
```

## 11

### --description--

- A Sierpiński graph of order-1 ($S_1$) is an equilateral triangle.
- $S_{n + 1}$ is obtained from $S_n$ by positioning three copies of $S_n$ so that every pair of copies has one common corner.

<img class="img-responsive center-block" alt="Sierpinski graphs of order-1 to order-5" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-1.gif" style="background-color: white; padding: 10px;">

Let $C(n)$ be the number of cycles that pass exactly once through all the vertices of $S_n$. For example, $C(3) = 8$ because eight such cycles can be drawn on $S_3$, as shown below:

<img class="img-responsive center-block" alt="eight cycles that pass exactly once through all vertices of S_3" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-2.gif" style="background-color: white; padding: 10px;">

It can also be verified that:

$$\begin{align}
  & C(1) = C(2) = 1 \\\\
  & C(5) = 71\\,328\\,803\\,586\\,048 \\\\
  & C(10 000)\bmod {10}^8 = 37\\,652\\,224 \\\\
  & C(10 000)\bmod {13}^8 = 617\\,720\\,485 \\\\
\end{align}$$

Find $C(C(C(10\\,000)))\bmod {13}^8$.

### --tests--

`pathsOnSierpinskiGraphs()` should return `324681947`.

```js
assert.strictEqual(pathsOnSierpinskiGraphs(), 324681947);
```

## 12

### --description--

In a sliding game a counter may slide horizontally or vertically into an empty space. The objective of the game is to move the red counter from the top left corner of a grid to the bottom right corner; the space always starts in the bottom right corner. For example, the following sequence of pictures show how the game can be completed in five moves on a 2 by 2 grid.

<img class="img-responsive center-block" alt="completing game in five moves on grid 2x2" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px;">

Let $S(m, n)$ represent the minimum number of moves to complete the game on an $m$ by $n$ grid. For example, it can be verified that $S(5, 4) = 25$.

<img class="img-responsive center-block" alt="initial grid state and final grid state for game on grid 5x4" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px;">

There are exactly 5482 grids for which $S(m, n) = p^2$, where $p &lt; 100$ is prime.

How many grids does $S(m, n) = p^2$, where $p &lt; {10}^6$ is prime?

### --tests--

`slidingGame()` should return `2057774861813004`.

```js
assert.strictEqual(slidingGame(), 2057774861813004);
```

## 13

### --description--

The moon has been opened up, and land can be obtained for free, but there is a catch. You have to build a wall around the land that you stake out, and building a wall on the moon is expensive. Every country has been allotted a 500 m by 500 m square area, but they will possess only that area which they wall in. 251001 posts have been placed in a rectangular grid with 1 meter spacing. The wall must be a closed series of straight lines, each line running from post to post.

The bigger countries of course have built a 2000 m wall enclosing the entire 250 000 $\text{m}^2$ area. The Duchy of Grand Fenwick, has a tighter budget, and has asked you (their Royal Programmer) to compute what shape would get best maximum $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio.

You have done some preliminary calculations on a sheet of paper. For a 2000 meter wall enclosing the 250 000 $\text{m}^2$ area the $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio is 125.

Although not allowed, but to get an idea if this is anything better: if you place a circle inside the square area touching the four sides the area will be equal to $π \times {250}^2 \text{m}^2$ and the perimeter will be $π \times 500 \text{m}$, so the $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio will also be 125.

However, if you cut off from the square four triangles with sides 75 m, 75 m and $75\sqrt{2}$ m the total area becomes 238750 $\text{m}^2$ and the perimeter becomes $1400 + 300\sqrt{2}$ m. So this gives an $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio of 130.87, which is significantly better.

<img class="img-responsive center-block" alt="picture showing difference in enclosed-area between circle and square with cut off four triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/the-mouse-on-the-moon.gif" style="background-color: white; padding: 10px;">

Find the maximum $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio. Give your answer rounded to 8 places behind the decimal point in the form abc.defghijk.

### --tests--

`theMouseOnTheMoon()` should return `132.52756426`.

```js
assert.strictEqual(theMouseOnTheMoon(), 132.52756426);
```

## 14

### --description--

<img class="img-responsive center-block" alt="animation of Sam's and Max's clocks calculating digital roots starting from 137" src="https://cdn.freecodecamp.org/curriculum/project-euler/digital-root-clocks.gif" style="background-color: white; padding: 10px;">

Sam and Max are asked to transform two digital clocks into two "digital root" clocks.

A digital root clock is a digital clock that calculates digital roots step by step.

When a clock is fed a number, it will show it and then it will start the calculation, showing all the intermediate values until it gets to the result. For example, if the clock is fed the number 137, it will show: `137` → `11` → `2` and then it will go black, waiting for the next number.

Every digital number consists of some light segments: three horizontal (top, middle, bottom) and four vertical (top-left, top-right, bottom-left, bottom-right). Number `1` is made of vertical top-right and bottom-right, number `4` is made by middle horizontal and vertical top-left, top-right and bottom-right. Number `8` lights them all.

The clocks consume energy only when segments are turned on/off. To turn on a `2` will cost 5 transitions, while a `7` will cost only 4 transitions.

Sam and Max built two different clocks.

Sam's clock is fed e.g. number 137: the clock shows `137`, then the panel is turned off, then the next number (`11`) is turned on, then the panel is turned off again and finally the last number (`2`) is turned on and, after some time, off.

For the example, with number 137, Sam's clock requires:

- `137`: $(2 + 5 + 4) × 2 = 22$ transitions (`137` on/off).
- `11`: $(2 + 2) × 2 = 8$ transitions (`11` on/off).
- `2`: $(5) × 2 = 10$ transitions (`2` on/off).

For a grand total of 40 transitions.

Max's clock works differently. Instead of turning off the whole panel, it is smart enough to turn off only those segments that won't be needed for the next number.

For number 137, Max's clock requires:

- `137` : $2 + 5 + 4 = 11$ transitions (`137` on), $7$ transitions (to turn off the segments that are not needed for number `11`).
- `11` : $0$ transitions (number `11` is already turned on correctly), $3$ transitions (to turn off the first `1` and the bottom part of the second `1`; the top part is common with number `2`).
- `2` : $4$ transitions (to turn on the remaining segments in order to get a `2`), $5$ transitions (to turn off number `2`).

For a grand total of 30 transitions.

Of course, Max's clock consumes less power than Sam's one. The two clocks are fed all the prime numbers between $A = {10}^7$ and $B = 2 × {10}^7$. Find the difference between the total number of transitions needed by Sam's clock and that needed by Max's one.

### --tests--

`digitalRootClocks()` should return `13625242`.

```js
assert.strictEqual(digitalRootClocks(), 13625242);
```

## 15

### --description--

Let $p = p_1 p_2 p_3 \ldots$ be an infinite sequence of random digits, selected from {0,1,2,3,4,5,6,7,8,9} with equal probability.

It can be seen that $p$ corresponds to the real number $0.p_1 p_2 p_3 \ldots$.

It can also be seen that choosing a random real number from the interval [0,1) is equivalent to choosing an infinite sequence of random digits selected from {0,1,2,3,4,5,6,7,8,9} with equal probability.

For any positive integer $n$ with $d$ decimal digits, let $k$ be the smallest index such that $p_k, p_{k + 1}, \ldots p_{k + d - 1}$ are the decimal digits of $n$, in the same order.

Also, let $g(n)$ be the expected value of $k$; it can be proven that $g(n)$ is always finite and, interestingly, always an integer number.

For example, if $n = 535$, then

for $p = 31415926\mathbf{535}897\ldots$, we get $k = 9$

for $p = 35528714365004956000049084876408468\mathbf{535}4\ldots$, we get $k = 36$

etc and we find that $g(535) = 1008$.

Given that $\displaystyle\sum_{n = 2}^{999} g\left(\left\lfloor\frac{{10}^6}{n}\right\rfloor\right) = 27280188$, find $\displaystyle\sum_{n = 2}^{999\\,999} g\left(\left\lfloor\frac{{10}^{16}}{n}\right\rfloor\right)$.

**Note:** $\lfloor x\rfloor$ represents the floor function.

### --tests--

`numbersInDecimalExpansion()` should return `542934735751917760`.

```js
assert.strictEqual(numbersInDecimalExpansion(), 542934735751917760);
```

## 16

### --description--

A firecracker explodes at a height of 100 m above level ground. It breaks into a large number of very small fragments, which move in every direction; all of them have the same initial velocity of 20 $\frac{\text{m}}{\text{s}}$.

We assume that the fragments move without air resistance, in a uniform gravitational field with $g=9.81 \frac{\text{m}}{\text{s}^2}$.

Find the volume (in $\text{m}^3$) of the region through which the fragments move before reaching the ground. Give your answer rounded to four decimal places.

### --tests--

`firecracker()` should return `1856532.8455`.

```js
assert.strictEqual(firecracker(), 1856532.8455);
```

## 17

### --description--

Consider the real number $\sqrt{2} + \sqrt{3}$.

When we calculate the even powers of $\sqrt{2} + \sqrt{3}$ we get:

$$\begin{align}
  & {(\sqrt{2} + \sqrt{3})}^2 = 9.898979485566356\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^4 = 97.98979485566356\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^6 = 969.998969071069263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^8 = 9601.99989585502907\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{10} = 95049.999989479221\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{12} = 940897.9999989371855\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{14} = 9313929.99999989263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{16} = 92198401.99999998915\ldots \\\\
\end{align}$$

It looks like that the number of consecutive nines at the beginning of the fractional part of these powers is non-decreasing. In fact it can be proven that the fractional part of ${(\sqrt{2} + \sqrt{3})}^{2n}$ approaches 1 for large $n$.

Consider all real numbers of the form $\sqrt{p} + \sqrt{q}$ with $p$ and $q$ positive integers and $p &lt; q$, such that the fractional part of ${(\sqrt{p} + \sqrt{q})}^{2n}$ approaches 1 for large $n$.

Let $C(p,q,n)$ be the number of consecutive nines at the beginning of the fractional part of ${(\sqrt{p} + \sqrt{q})}^{2n}$.

Let $N(p,q)$ be the minimal value of $n$ such that $C(p,q,n) ≥ 2011$.

Find $\sum N(p,q)$ for $p + q ≤ 2011$.

### --tests--

`twoThousandElevenNines()` should return `709313889`.

```js
assert.strictEqual(twoThousandElevenNines(), 709313889);
```

## 18

### --description--

Let $x_1, x_2, \ldots, x_n$ be a sequence of length $n$ such that:

- $x_1 = 2$
- for all $1 &lt; i ≤ n : x_{i - 1} &lt; x_i$
- for all $i$ and $j$ with $1 ≤ i, j ≤ n : {(x_i)}^j &lt; {(x_j + 1)}^i$

There are only five such sequences of length 2, namely: {2,4}, {2,5}, {2,6}, {2,7} and {2,8}. There are 293 such sequences of length 5; three examples are given below: {2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181}.

Let $t(n)$ denote the number of such sequences of length $n$. You are given that $t(10) = 86195$ and $t(20) = 5227991891$.

Find $t({10}^{10})$ and give your answer modulo $10^9$.

### --tests--

`boundedSequences()` should return `268457129`.

```js
assert.strictEqual(boundedSequences(), 268457129);
```

## 19

### --description--

Let $N(i)$ be the smallest integer $n$ such that $n!$ is divisible by $(i!)^{1234567890}$

Let $S(u) = \sum N(i)$ for $10 ≤ i ≤ u$.

$S(1000)=614\\,538\\,266\\,565\\,663$.

Find $S(1\\,000\\,000)\bmod {10}^{18}$.

### --tests--

`divisibleByHugeInteger()` should return `278157919195482660`.

```js
assert.strictEqual(divisibleByHugeInteger(), 278157919195482660);
```

## 20

### --description--

A horizontal row comprising of $2n + 1$ squares has $n$ red counters placed at one end and $n$ blue counters at the other end, being separated by a single empty square in the center. For example, when $n = 3$.

<img class="img-responsive center-block" alt="three squares with red and blue counters placed on opposite ends of the row, separated by one empty square" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-1.gif" style="background-color: white; padding: 10px;">

A counter can move from one square to the next (slide) or can jump over another counter (hop) as long as the square next to that counter is unoccupied.

<img class="img-responsive center-block" alt="allowed moves of the counter" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-2.gif" style="background-color: white; padding: 10px;">

Let $M(n)$ represent the minimum number of moves/actions to completely reverse the positions of the colored counters; that is, move all the red counters to the right and all the blue counters to the left.

It can be verified $M(3) = 15$, which also happens to be a triangle number.

If we create a sequence based on the values of n for which $M(n)$ is a triangle number then the first five terms would be: 1, 3, 10, 22, and 63, and their sum would be 99.

Find the sum of the first forty terms of this sequence.

### --tests--

`swappingCounters()` should return `2470433131948040`.

```js
assert.strictEqual(swappingCounters(), 2470433131948040);
```

## 21

### --description--

Let $T(m, n)$ be the number of the binomial coefficients ${}^iC_n$ that are divisible by 10 for $n ≤ i &lt; m$ ($i$, $m$ and $n$ are positive integers).

You are given that $T({10}^9, {10}^7 - 10) = 989\\,697\\,000$.

Find $T({10}^{18}, {10}^{12} - 10)$.

### --tests--

`binomialCoefficientsDivisibleBy10()` should return `999998760323314000`.

```js
assert.strictEqual(binomialCoefficientsDivisibleBy10(), 999998760323314000);
```

## 22

### --description--

Let $y_0, y_1, y_2, \ldots$ be a sequence of random unsigned 32 bit integers (i.e. $0 ≤ y_i &lt; 2^{32}$, every value equally likely).

For the sequence $x_i$ the following recursion is given:

- $x_0 = 0$ and
- $x_i = x_{i - 1} \mathbf{|} y_{i - 1}$, for $i > 0$. ($\mathbf{|}$ is the bitwise-OR operator)

It can be seen that eventually there will be an index $N$ such that $x_i = 2^{32} - 1$ (a bit-pattern of all ones) for all $i ≥ N$.

Find the expected value of $N$. Give your answer rounded to 10 digits after the decimal point.

### --tests--

`bitwiseOrOnRandomIntegers()` should return `6.3551758451`.

```js
assert.strictEqual(bitwiseOrOnRandomIntegers(), 6.3551758451);
```

## 23

### --description--

Let $f(n)$ represent the number of ways one can fill a $3×3×n$ tower with blocks of $2×1×1$. You're allowed to rotate the blocks in any way you like; however, rotations, reflections etc of the tower itself are counted as distinct.

For example (with $q = 100\\,000\\,007$):

$$\begin{align}
  & f(2) = 229, \\\\
  & f(4) = 117\\,805, \\\\
  & f(10)\bmod q = 96\\,149\\,360, \\\\
  & f({10}^3)\bmod q = 24\\,806\\,056, \\\\
  & f({10}^6)\bmod q = 30\\,808\\,124.
\end{align}$$

Find $f({10}^{10000})\bmod 100\\,000\\,007$.

### --tests--

`buildingTower()` should return `96972774`.

```js
assert.strictEqual(buildingTower(), 96972774);
```

## 24

### --description--

A game is played with two piles of stones and two players. On each player's turn, the player may remove a number of stones from the larger pile. The number of stones removes must be a positive multiple of the number of stones in the smaller pile.

E.g., let the ordered pair (6,14) describe a configuration with 6 stones in the smaller pile and 14 stones in the larger pile, then the first player can remove 6 or 12 stones from the larger pile.

The player taking all the stones from a pile wins the game.

A winning configuration is one where the first player can force a win. For example, (1,5), (2,6) and (3,12) are winning configurations because the first player can immediately remove all stones in the second pile.

A losing configuration is one where the second player can force a win, no matter what the first player does. For example, (2,3) and (3,4) are losing configurations: any legal move leaves a winning configuration for the second player.

Define $S(N)$ as the sum of ($x_i + y_i$) for all losing configurations ($x_i$, $y_i$), $0 &lt; x_i &lt; y_i ≤ N$. We can verify that $S(10) = 211$ and $S({10}^4) = 230\\,312\\,207\\,313$.

Find $S({10}^{16})\bmod 7^{10}$.

### --tests--

`stoneGameTwo()` should return `54672965`.

```js
assert.strictEqual(stoneGameTwo(), 54672965);
```

## 25

### --description--

Let $a_n$ be a sequence recursively defined by: $a_1 = 1$, $\displaystyle a_n = \left(\sum_{k = 1}^{n - 1} k \times a_k\right)\bmod n$.

So the first 10 elements of $a_n$ are: 1, 1, 0, 3, 0, 3, 5, 4, 1, 9.

Let $f(N, M)$ represent the number of pairs $(p, q)$ such that:

$$ 1 \le p \le q \le N \\; \text{and} \\; \left(\sum_{i = p}^q a_i\right)\bmod M = 0$$

It can be seen that $f(10, 10) = 4$ with the pairs (3,3), (5,5), (7,9) and (9,10).

You are also given that $f({10}^4, {10}^3) = 97\\,158$.

Find $f({10}^{12}, {10}^6)$.

### --tests--

`moduloSummations()` should return `1966666166408794400`.

```js
assert.strictEqual(moduloSummations(), 1966666166408794400);
```

## 26

### --description--

A series of three rooms are connected to each other by automatic doors.

<img class="img-responsive center-block" alt="series of three rooms, connected to each other by automatic doors" src="https://cdn.freecodecamp.org/curriculum/project-euler/rooms-of-doom.gif" style="background-color: white; padding: 10px;">

Each door is operated by a security card. Once you enter a room, the door automatically closes, and that security card cannot be used again. A machine will dispense an unlimited number of cards at the start, but each room (including the starting room) contains scanners. If they detect that you are holding more than three security cards or if they detect an unattended security card on the floor, then all the doors will become permanently locked. However, each room contains a box where you may safely store any number of security cards for use at a later stage.

If you simply tried to travel through the rooms one at a time then as you entered room 3 you would have used all three cards and would be trapped in that room forever!

However, if you make use of the storage boxes, then escape is possible. For example, you could enter room 1 using your first card, place one card in the storage box, and use your third card to exit the room back to the start. Then after collecting three more cards from the dispensing machine you could use one to enter room 1 and collect the card you placed in the box a moment ago. You now have three cards again and will be able to travel through the remaining three doors. This method allows you to travel through all three rooms using six security cards in total.

It is possible to travel through six rooms using a total of 123 security cards while carrying a maximum of 3 cards.

Let $C$ be the maximum number of cards which can be carried at any time.

Let $R$ be the number of rooms to travel through.

Let $M(C, R)$ be the minimum number of cards required from the dispensing machine to travel through $R$ rooms carrying up to a maximum of $C$ cards at any time.

For example, $M(3, 6) = 123$ and $M(4, 6) = 23$.

And, $\sum M(C, 6) = 146$ for $3 ≤ C ≤ 4$.

You are given that $\sum M(C, 10) = 10382$ for $3 ≤ C ≤ 10$.

Find $\sum M(C, 30)$ for $3 ≤ C ≤ 40$.

### --tests--

`roomsOfDoom()` should return `34315549139516`.

```js
assert.strictEqual(roomsOfDoom(), 34315549139516);
```

## 27

### --description--

We are trying to find a hidden number selected from the set of integers {1, 2, ..., $n$} by asking questions. Each number (question) we ask, has a <u>cost equal to the number asked</u> and we get one of three possible answers:

- "Your guess is lower than the hidden number", or
- "Yes, that's it!", or
- "Your guess is higher than the hidden number".

Given the value of $n$, an optimal strategy minimizes the total cost (i.e. the sum of all the questions asked) <u>for the worst possible case</u>. E.g.

If $n = 3$, the best we can do is obviously to ask the number "<strong>2</strong>". The answer will immediately lead us to find the hidden number (at a total cost = 2).

If $n = 8$, we might decide to use a "binary search" type of strategy: Our first question would be "<strong>4</strong>" and if the hidden number is higher than 4 we will need one or two additional questions. Let our second question be "<strong>6</strong>". If the hidden number is still higher than 6, we will need a third question in order to discriminate between 7 and 8. Thus, our third question will be "<strong>7</strong>" and the total cost for this worst-case scenario will be $4 + 6 + 7 = \mathbf{\color{red}{17}}$.

We can improve considerably the worst-case cost for $n = 8$, by asking "<strong>5</strong>" as our first question. If we are told that the hidden number is higher than 5, our second question will be "<strong>7</strong>", then we'll know for certain what the hidden number is (for a total cost of $5 + 7 = \mathbf{\color{blue}{12}}$). If we are told that the hidden number is lower than 5, our second question will be "<strong>3</strong>" and if the hidden number is lower than 3 our third question will be "<strong>1</strong>", giving a total cost of $5 + 3 + 1 = \mathbf{\color{blue}{9}}$. Since $\mathbf{\color{blue}{12 > 9}}$, the worst-case cost for this strategy is <strong><span style="color: red;">12</span></strong>. That's better than what we achieved previously with the "binary search" strategy; it is also better than or equal to any other strategy. So, in fact, we have just described an optimal strategy for $n = 8$.

Let $C(n)$ be the worst-case cost achieved by an optimal strategy for $n$, as described above. Thus $C(1) = 0$, $C(2) = 1$, $C(3) = 2$ and $C(8) = 12$.

Similarly, $C(100) = 400$ and $\displaystyle\sum_{n = 1}^{100} C(n) = 17575$.

Find $\displaystyle\sum_{n = 1}^{200\\,000} C(n)$.

### --tests--

`lowestCostSearch()` should return `260511850222`.

```js
assert.strictEqual(lowestCostSearch(), 260511850222);
```

## 28

### --description--

Susan has a prime frog.

Her frog is jumping around over 500 squares numbered 1 to 500.

He can only jump one square to the left or to the right, with equal probability, and he cannot jump outside the range [1;500]. (if it lands at either end, it automatically jumps to the only available square on the next move.)

When he is on a square with a prime number on it, he croaks 'P' (PRIME) with probability $\frac{2}{3}$ or 'N' (NOT PRIME) with probability $\frac{1}{3}$ just before jumping to the next square. When he is on a square with a number on it that is not a prime he croaks 'P' with probability $\frac{1}{3}$ or 'N' with probability $\frac{2}{3}$ just before jumping to the next square.

Given that the frog's starting position is random with the same probability for every square, and given that she listens to his first 15 croaks, what is the probability that she hears the sequence PPPPNNPPPNPPNPN?

Give your answer as a string as a fraction `p/q` in reduced form.

### --tests--

`primeFrog()` should return a string.

```js
assert(typeof primeFrog() === 'string');
```

`primeFrog()` should return the string `199740353/29386561536000`.

```js
assert.strictEqual(primeFrog(), '199740353/29386561536000');
```

## 29

### --description--

An infinite sequence of real numbers $a(n)$ is defined for all integers $n$ as follows:

$$ a(n) =
\begin{cases}
1                                                       & n < 0 \\\\
\displaystyle \sum_{i = 1}^{\infty} \frac{a(n - 1)}{i!} & n \ge 0
\end{cases}
$$

For example,

$$\begin{align}
  & a(0) = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = e − 1 \\\\
  & a(1) = \frac{e − 1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = 2e − 3 \\\\
  & a(2) = \frac{2e − 3}{1!} + \frac{e − 1}{2!} + \frac{1}{3!} + \ldots = \frac{7}{2} e − 6
\end{align}$$

with $e = 2.7182818\ldots$ being Euler's constant.

It can be shown that $a(n)$ is of the form $\displaystyle\frac{A(n)e + B(n)}{n!}$ for integers $A(n)$ and $B(n)$.

For example $\displaystyle a(10) = \frac{328161643e − 652694486}{10!}$.

Find $A({10}^9)$ + $B({10}^9)$ and give your answer $\bmod 77\\,777\\,777$.

### --tests--

`eulersNumber()` should return `15955822`.

```js
assert.strictEqual(eulersNumber(), 15955822);
```

## 30

### --description--

N×N disks are placed on a square game board. Each disk has a black side and white side.

At each turn, you may choose a disk and flip all the disks in the same row and the same column as this disk: thus $2 × N - 1$ disks are flipped. The game ends when all disks show their white side. The following example shows a game on a 5×5 board.

<img class="img-responsive center-block" alt="animation showing game on 5x5 board" src="https://cdn.freecodecamp.org/curriculum/project-euler/cross-flips.gif" style="background-color: white; padding: 10px;">

It can be proven that 3 is the minimal number of turns to finish this game.

The bottom left disk on the $N×N$ board has coordinates (0, 0); the bottom right disk has coordinates ($N - 1$,$0$) and the top left disk has coordinates ($0$,$N - 1$).

Let $C_N$ be the following configuration of a board with $N × N$ disks: A disk at ($x$, $y$) satisfying $N - 1 \le \sqrt{x^2 + y^2} \lt N$, shows its black side; otherwise, it shows its white side. $C_5$ is shown above.

Let $T(N)$ be the minimal number of turns to finish a game starting from configuration $C_N$ or 0 if configuration $C_N$ is unsolvable. We have shown that $T(5) = 3$. You are also given that $T(10) = 29$ and $T(1\\,000) = 395\\,253$.

Find $\displaystyle \sum_{i = 3}^{31} T(2^i - i)$.

### --tests--

`crossFlips()` should return `467178235146843500`.

```js
assert.strictEqual(crossFlips(), 467178235146843500);
```

## 31

### --description--

A spherical triangle is a figure formed on the surface of a sphere by three great circular arcs intersecting pairwise in three vertices.

<img class="img-responsive center-block" alt="spherical triangle formed on the surface of a sphere" src="https://cdn.freecodecamp.org/curriculum/project-euler/spherical-triangles.jpg" style="background-color: white; padding: 10px;">

Let $C(r)$ be the sphere with the centre (0,0,0) and radius $r$.

Let $Z(r)$ be the set of points on the surface of $C(r)$ with integer coordinates.

Let $T(r)$ be the set of spherical triangles with vertices in $Z(r)$. Degenerate spherical triangles, formed by three points on the same great arc, are <u>not</u> included in $T(r)$.

Let $A(r)$ be the area of the smallest spherical triangle in $T(r)$.

For example $A(14)$ is 3.294040 rounded to six decimal places.

Find $\displaystyle \sum_{r = 1}^{50} A(r)$. Give your answer rounded to six decimal places.

### --tests--

`sphericalTriangles()` should return `2717.751525`.

```js
assert.strictEqual(sphericalTriangles(), 2717.751525);
```

## 32

### --description--

All positive integers can be partitioned in such a way that each and every term of the partition can be expressed as $2^i \times 3^j$, where $i, j ≥ 0$.

Let's consider only those such partitions where none of the terms can divide any of the other terms. For example, the partition of $17 = 2 + 6 + 9 = (2^1 \times 3^0 + 2^1 \times 3^1 + 2^0 \times 3^2)$ would not be valid since 2 can divide 6. Neither would the partition $17 = 16 + 1 = (2^4 \times 3^0 + 2^0 \times 3^0)$ since 1 can divide 16. The only valid partition of 17 would be $8 + 9 = (2^3 \times 3^0 + 2^0 \times 3^2)$.

Many integers have more than one valid partition, the first being 11 having the following two partitions.

$$\begin{align}
  & 11 = 2 + 9 = (2^1 \times 3^0 + 2^0 \times 3^2) \\\\
  & 11 = 8 + 3 = (2^3 \times 3^0 + 2^0 \times 3^1)
\end{align}$$

Let's define $P(n)$ as the number of valid partitions of $n$. For example, $P(11) = 2$.

Let's consider only the prime integers $q$ which would have a single valid partition such as $P(17)$.

The sum of the primes $q &lt;100$ such that $P(q) = 1$ equals 233.

Find the sum of the primes $q &lt; 1\\,000\\,000$ such that $P(q) = 1$.

### --tests--

`specialPartitions()` should return `3053105`.

```js
assert.strictEqual(specialPartitions(), 3053105);
```

## 33

### --description--

In Plato's heaven, there exist an infinite number of bowls in a straight line. Each bowl either contains some or none of a finite number of beans. A child plays a game, which allows only one kind of move: removing two beans from any bowl, and putting one in each of the two adjacent bowls. The game ends when each bowl contains either one or no beans.

For example, consider two adjacent bowls containing 2 and 3 beans respectively, all other bowls being empty. The following eight moves will finish the game:

<img class="img-responsive center-block" alt="animation of game when two adjacent bowls contain 2 and 3 beans respectively" src="https://cdn.freecodecamp.org/curriculum/project-euler/spilling-the-beans.gif" style="background-color: white; padding: 10px;">

You are given the following sequences:

$$\begin{align}
  & t_0 = 123456, \\\\
  & t_i = \begin{cases}
         \frac{t_{i - 1}}{2},               & \text{if $t_{i - 1}$ is even} \\\\
         \left\lfloor\frac{t_{i - 1}}{2}\right\rfloor \oplus 926252, & \text{if $t_{i - 1}$ is odd}
         \end{cases} \\\\
         & \qquad \text{where $⌊x⌋$ is the floor function and $\oplus$ is the bitwise XOR operator.} \\\\
  & b_i = (t_i\bmod 2^{11}) + 1.
\end{align}$$

The first two terms of the last sequence are $b_1 = 289$ and $b_2 = 145$. If we start with $b_1$ and $b_2$ beans in two adjacent bowls, 3419100 moves would be required to finish the game.

Consider now 1500 adjacent bowls containing $b_1, b_2, \ldots, b_{1500}$ beans respectively, all other bowls being empty. Find how many moves it takes before the game ends.

### --tests--

`spillingTheBeans()` should return `150320021261690850`.

```js
assert.strictEqual(spillingTheBeans(), 150320021261690850);
```

## 34

### --description--

Whenever Peter feels bored, he places some bowls, containing one bean each, in a circle. After this, he takes all the beans out of a certain bowl and drops them one by one in the bowls going clockwise. He repeats this, starting from the bowl he dropped the last bean in, until the initial situation appears again. For example with 5 bowls he acts as follows:

<img class="img-responsive center-block" alt="animation of moving beans in 5 bowls" src="https://cdn.freecodecamp.org/curriculum/project-euler/gathering-the-beans.gif" style="background-color: white; padding: 10px;">

So with 5 bowls it takes Peter 15 moves to return to the initial situation.

Let $M(x)$ represent the number of moves required to return to the initial situation, starting with $x$ bowls. Thus, $M(5) = 15$. It can also be verified that $M(100) = 10920$.

Find $\displaystyle\sum_{k = 0}^{{10}^{18}} M(2^k + 1)$. Give your answer modulo $7^9$.

### --tests--

`gatheringTheBeans()` should return `5032316`.

```js
assert.strictEqual(gatheringTheBeans(), 5032316);
```

## 35

### --description--

A train is used to transport four carriages in the order: $ABCD$. However, sometimes when the train arrives to collect the carriages they are not in the correct order.

To rearrange the carriages, they are all shunted onto a large rotating turntable. After the carriages are uncoupled at a specific point, the train moves off the turntable pulling the carriages still attached with it. The remaining carriages are rotated 180°. All of the carriages are then rejoined and this process is repeated as often as necessary in order to obtain the least number of uses of the turntable.

Some arrangements, such as $ADCB$, can be solved easily: the carriages are separated between $A$ and $D$, and after $DCB$ are rotated the correct order has been achieved.

However, Simple Simon, the train driver, is not known for his efficiency, so he always solves the problem by initially getting carriage $A$ in the correct place, then carriage $B$, and so on.

Using four carriages, the worst possible arrangements for Simon, which we shall call maximix arrangements, are $DACB$ and $DBAC$; each requiring him five rotations (although, using the most efficient approach, they could be solved using just three rotations). The process he uses for $DACB$ is shown below.

<img class="img-responsive center-block" alt="five rotations for maximix arrangement DACB" src="https://cdn.freecodecamp.org/curriculum/project-euler/maximix-arrangements.gif" style="background-color: white; padding: 10px;">

It can be verified that there are 24 maximix arrangements for six carriages, of which the tenth lexicographic maximix arrangement is $DFAECB$.

Find the ${2011}^{\text{th}}$ lexicographic maximix arrangement for eleven carriages.

### --tests--

`maximixArrangements()` should return a string.

```js
assert(typeof maximixArrangements() === 'string');
```

`maximixArrangements()` should return the string `CAGBIHEFJDK`.

```js
assert.strictEqual(maximixArrangements(), 'CAGBIHEFJDK');
```

## 36

### --description--

Let $\\{a_1, a_2, \ldots, a_n\\}$ be an integer sequence of length $n$ such that:

- $a_1 = 6$
- for all $1 ≤ i &lt; n$ : $φ(a_i) &lt; φ(a_{i + 1}) &lt; a_i &lt; a_{i + 1}$

$φ$ denotes Euler's totient function.

Let $S(N)$ be the number of such sequences with $a_n ≤ N$.

For example, $S(10) = 4$: {6}, {6, 8}, {6, 8, 9} and {6, 10}.

We can verify that $S(100) = 482\\,073\\,668$ and $S(10\\,000)\bmod {10}^8 = 73\\,808\\,307$.

Find $S(20\\,000\\,000)\bmod {10}^8$.


### --tests--

`totientStairstepSequences()` should return `85068035`.

```js
assert.strictEqual(totientStairstepSequences(), 85068035);
```

## 37

### --description--

A rectangular sheet of grid paper with integer dimensions $w$ × $h$ is given. Its grid spacing is 1.

When we cut the sheet along the grid lines into two pieces and rearrange those pieces without overlap, we can make new rectangles with different dimensions.

For example, from a sheet with dimensions 9 × 4, we can make rectangles with dimensions 18 × 2, 12 × 3 and 6 × 6 by cutting and rearranging as below:

<img class="img-responsive center-block" alt="sheet with 9 x 4 dimensions cut in three different ways to make rectangles with 18 x 2, 12 x 3 and 6 x 6 dimensions" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-rectangular-grid-paper.gif" style="background-color: white; padding: 10px;">

Similarly, from a sheet with dimensions 9 × 8, we can make rectangles with dimensions 18 × 4 and 12 × 6.

For a pair $w$ and $h$, let $F(w, h)$ be the number of distinct rectangles that can be made from a sheet with dimensions $w$ × $h$. For example, $F(2, 1) = 0$, $F(2, 2) = 1$, $F(9, 4) = 3$ and $F(9, 8) = 2$. Note that rectangles congruent to the initial one are not counted in $F(w, h)$. Note also that rectangles with dimensions $w$ × $h$ and dimensions $h$ × $w$ are not considered distinct.

For an integer $N$, let $G(N)$ be the sum of $F(w, h)$ for all pairs $w$ and $h$ which satisfy $0 &lt; h ≤ w ≤ N$. We can verify that $G(10) = 55$, $G({10}^3) = 971\\,745$ and $G({10}^5) = 9\\,992\\,617\\,687$.

Find $G({10}^{12})$. Give your answer modulo ${10}^8$.

### --tests--

`cuttingRectangularGridPaper()` should return `15614292`.

```js
assert.strictEqual(cuttingRectangularGridPaper(), 15614292);
```

## 38

### --description--

"And he came towards a valley, through which ran a river; and the borders of the valley were wooded, and on each side of the river were level meadows. And on one side of the river he saw a flock of white sheep, and on the other a flock of black sheep. And whenever one of the white sheep bleated, one of the black sheep would cross over and become white; and when one of the black sheep bleated, one of the white sheep would cross over and become black." - Peredur the Son of Evrawc

Initially, each flock consists of $n$ sheep. Each sheep (regardless of color) is equally likely to be the next sheep to bleat. After a sheep has bleated and a sheep from the other flock has crossed over, Peredur may remove a number of white sheep in order to maximize the expected final number of black sheep. Let $E(n)$ be the expected final number of black sheep if Peredur uses an optimal strategy.

You are given that $E(5) = 6.871346$ rounded to 6 places behind the decimal point.

Find $E(10\\,000)$ and give your answer rounded to 6 places behind the decimal point.

### --tests--

`peredurFabEfrawg()` should return `19823.542204`.

```js
assert.strictEqual(peredurFabEfrawg(), 19823.542204);
```

## 39

### --description--

For fixed integers $a$, $b$, $c$, define the crazy function $F(n)$ as follows:

$$\begin{align}
  & F(n) = n - c \\;\text{ for all } n > b \\\\
  & F(n) = F(a + F(a + F(a + F(a + n)))) \\;\text{ for all } n ≤ b.
\end{align}$$

Also, define $S(a, b, c) = \displaystyle\sum_{n = 0}^b F(n)$.

For example, if $a = 50$, $b = 2000$ and $c = 40$, then $F(0) = 3240$ and $F(2000) = 2040$. Also, $S(50, 2000, 40) = 5\\,204\\,240$.

Find the last 9 digits of $S({21}^7, 7^{21}, {12}^7)$.

### --tests--

`crazyFunction()` should return `291504964`.

```js
assert.strictEqual(crazyFunction(), 291504964);
```

## 40

### --description--

The Golomb's self-describing sequence ($G(n)$) is the only nondecreasing sequence of natural numbers such that $n$ appears exactly $G(n)$ times in the sequence. The values of $G(n)$ for the first few $n$ are

$$\begin{array}{c}
  n    & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \ldots \\\\
  G(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5  &  5 &  6 &  6 &  6 &  6 & \ldots
\end{array}$$

You are given that $G({10}^3) = 86$, $G({10}^6) = 6137$.

You are also given that $\sum G(n^3) = 153\\,506\\,976$ for $1 ≤ n &lt; {10}^3$.

Find $\sum G(n^3)$ for $1 ≤ n &lt; {10}^6$.

### --tests--

`golombsSequence()` should return `56098610614277016`.

```js
assert.strictEqual(golombsSequence(), 56098610614277016);
```

## 41

### --description--

Consider the number 50.

${50}^2 = 2500 = 2^2 × 5^4$, so $φ(2500) = 2 × 4 × 5^3 = 8 × 5^3 = 2^3 × 5^3$. $φ$ denotes Euler's totient function.

So 2500 is a square and $φ(2500)$ is a cube.

Find the sum of all numbers $n$, $1 &lt; n &lt; {10}^{10}$ such that $φ(n^2)$ is a cube.


### --tests--

`totientOfSquare()` should return `5943040885644`.

```js
assert.strictEqual(totientOfSquare(), 5943040885644);
```

## 42

### --description--

For any positive integer $k$, a finite sequence $a_i$ of fractions $\frac{x_i}{y_i}$ is defined by:

- $a_1 = \displaystyle\frac{1}{k}$ and
- $a_i = \displaystyle\frac{(x_{i - 1} + 1)}{(y_{i - 1} - 1)}$ reduced to lowest terms for $i > 1$.

When $a_i$ reaches some integer $n$, the sequence stops. (That is, when $y_i = 1$.)

Define $f(k) = n$.

For example, for $k = 20$:

$$\frac{1}{20} → \frac{2}{19} → \frac{3}{18} = \frac{1}{6} → \frac{2}{5} → \frac{3}{4} → \frac{4}{3} → \frac{5}{2} → \frac{6}{1} = 6$$

So $f(20) = 6$.

Also $f(1) = 1$, $f(2) = 2$, $f(3) = 1$ and $\sum f(k^3) = 118\\,937$ for $1 ≤ k ≤ 100$.

Find $\sum f(k^3)$ for $1 ≤ k ≤ 2 × {10}^6$.

### --tests--

`fractionalSequences()` should return `269533451410884200`.

```js
assert.strictEqual(fractionalSequences(), 269533451410884200);
```

## 43

### --description--

One variant of N.G. de Bruijn's silver dollar game can be described as follows:

On a strip of squares a number of coins are placed, at most one coin per square. Only one coin, called the silver dollar, has any value. Two players take turns making moves. At each turn a player must make either a regular or a special move.

A regular move consists of selecting one coin and moving it one or more squares to the left. The coin cannot move out of the strip or jump on or over another coin.

Alternatively, the player can choose to make the special move of pocketing the leftmost coin rather than making a regular move. If no regular moves are possible, the player is forced to pocket the leftmost coin.

The winner is the player who pockets the silver dollar.

<img class="img-responsive center-block" alt="silver dollar game" src="https://cdn.freecodecamp.org/curriculum/project-euler/silver-dollar-game.gif" style="background-color: white; padding: 10px;">

A winning configuration is an arrangement of coins on the strip where the first player can force a win no matter what the second player does.

Let $W(n, c)$ be the number of winning configurations for a strip of $n$ squares, $c$ worthless coins and one silver dollar.

You are given that $W(10, 2) = 324$ and $W(100, 10) = 1\\,514\\,704\\,946\\,113\\,500$.

Find $W(1\\,000\\,000, 100)$ modulo the semiprime $1000\\,036\\,000\\,099 (= 1\\,000\\,003 \times 1\\,000\\,033)$.

### --tests--

`silverDollarGame()` should return `65579304332`.

```js
assert.strictEqual(silverDollarGame(), 65579304332);
```

## 44

### --description--

We define the Matrix Sum of a matrix as the maximum sum of matrix elements with each element being the only one in his row and column.

For example, the Matrix Sum of the matrix below equals $3315 ( = 863 + 383 + 343 + 959 + 767)$:

$$\begin{array}{rrrrr}
    7                &  53                & 183                & 439                & \color{lime}{863} \\\\
  497                & \color{lime}{383} & 563                &  79                & 973 \\\\
  287                &  63                & \color{lime}{343} & 169                & 583 \\\\
  627                & 343                & 773                & \color{lime}{959} & 943 \\\\
  \color{lime}{767} & 473                & 103                & 699                & 303
\end{array}$$

Find the Matrix Sum of:

$$\\begin{array}{r}
    7 &  53 & 183 & 439 & 863 & 497 & 383 & 563 &  79 & 973 & 287 &  63 & 343 & 169 & 583 \\\\
  627 & 343 & 773 & 959 & 943 & 767 & 473 & 103 & 699 & 303 & 957 & 703 & 583 & 639 & 913 \\\\
  447 & 283 & 463 &  29 &  23 & 487 & 463 & 993 & 119 & 883 & 327 & 493 & 423 & 159 & 743 \\\\
  217 & 623 &   3 & 399 & 853 & 407 & 103 & 983 &  89 & 463 & 290 & 516 & 212 & 462 & 350 \\\\
  960 & 376 & 682 & 962 & 300 & 780 & 486 & 502 & 912 & 800 & 250 & 346 & 172 & 812 & 350 \\\\
  870 & 456 & 192 & 162 & 593 & 473 & 915 &  45 & 989 & 873 & 823 & 965 & 425 & 329 & 803 \\\\
  973 & 965 & 905 & 919 & 133 & 673 & 665 & 235 & 509 & 613 & 673 & 815 & 165 & 992 & 326 \\\\
  322 & 148 & 972 & 962 & 286 & 255 & 941 & 541 & 265 & 323 & 925 & 281 & 601 &  95 & 973 \\\\
  445 & 721 &  11 & 525 & 473 &  65 & 511 & 164 & 138 & 672 &  18 & 428 & 154 & 448 & 848 \\\\
  414 & 456 & 310 & 312 & 798 & 104 & 566 & 520 & 302 & 248 & 694 & 976 & 430 & 392 & 198 \\\\
  184 & 829 & 373 & 181 & 631 & 101 & 969 & 613 & 840 & 740 & 778 & 458 & 284 & 760 & 390 \\\\
  821 & 461 & 843 & 513 &  17 & 901 & 711 & 993 & 293 & 157 & 274 &  94 & 192 & 156 & 574 \\\\
   34 & 124 &   4 & 878 & 450 & 476 & 712 & 914 & 838 & 669 & 875 & 299 & 823 & 329 & 699 \\\\
  815 & 559 & 813 & 459 & 522 & 788 & 168 & 586 & 966 & 232 & 308 & 833 & 251 & 631 & 107 \\\\
  813 & 883 & 451 & 509 & 615 &  77 & 281 & 613 & 459 & 205 & 380 & 274 & 302 &  35 & 805
\end{array}$$

### --tests--

`matrixSum()` should return `13938`.

```js
assert.strictEqual(matrixSum(), 13938);
```

## 45

### --description--

The number 7 is special, because 7 is 111 written in base 2, and 11 written in base 6 (i.e. $7_{10} = {11}_6 = {111}_2$). In other words, 7 is a repunit in at least two bases $b > 1$.

We shall call a positive integer with this property a strong repunit. It can be verified that there are 8 strong repunits below 50: {1, 7, 13, 15, 21, 31, 40, 43}. Furthermore, the sum of all strong repunits below 1000 equals 15864.

Find the sum of all strong repunits below ${10}^{12}$.

### --tests--

`strongRepunits()` should return `336108797689259260`.

```js
assert.strictEqual(strongRepunits(), 336108797689259260);
```

## 46

### --description--

The largest integer $≤ 100$ that is only divisible by both the primes 2 and 3 is 96, as $96 = 32 \times 3 = 2^5 \times 3$.

For two distinct primes $p$ and $q$ let $M(p, q, N)$ be the largest positive integer $≤ N$ only divisible by both $p$ and $q$ and $M(p, q, N)=0$ if such a positive integer does not exist.

E.g. $M(2, 3, 100) = 96$.

$M(3, 5, 100) = 75$ and not 90 because 90 is divisible by 2, 3 and 5. Also $M(2, 73, 100) = 0$ because there does not exist a positive integer $≤ 100$ that is divisible by both 2 and 73.

Let $S(N)$ be the sum of all distinct $M(p, q, N)$. $S(100)=2262$.

Find $S(10\\,000\\,000)$.

### --tests--

`integerDivisibleByTwoPrimes()` should return `11109800204052`.

```js
assert.strictEqual(integerDivisibleByTwoPrimes(), 11109800204052);
```

## 47

### --description--

Many numbers can be expressed as the sum of a square and a cube. Some of them in more than one way.

Consider the palindromic numbers that can be expressed as the sum of a square and a cube, both greater than 1, in exactly 4 different ways.

For example, 5229225 is a palindromic number and it can be expressed in exactly 4 different ways:

$$\begin{align}
  & {2285}^2 + {20}^3 \\\\
  & {2223}^2 + {66}^3 \\\\
  & {1810}^2 + {125}^3 \\\\
  & {1197}^2 + {156}^3
\end{align}$$

Find the sum of the five smallest such palindromic numbers.

### --tests--

`sumOfSquareAndCube()` should return `1004195061`.

```js
assert.strictEqual(sumOfSquareAndCube(), 1004195061);
```

## 48

### --description--

An ant moves on a regular grid of squares that are coloured either black or white.

The ant is always oriented in one of the cardinal directions (left, right, up or down) and moves from square to adjacent square according to the following rules:

- if it is on a black square, it flips the color of the square to white, rotates 90° counterclockwise and moves forward one square.
- if it is on a white square, it flips the color of the square to black, rotates 90° clockwise and moves forward one square.

Starting with a grid that is entirely white, how many squares are black after ${10}^{18}$ moves of the ant?

### --tests--

`langtonsAnt()` should return `115384615384614940`.

```js
assert.strictEqual(langtonsAnt(), 115384615384614940);
```

## 49

### --description--

A list of size $n$ is a sequence of $n$ natural numbers. Examples are (2, 4, 6), (2, 6, 4), (10, 6, 15, 6), and (11).

The greatest common divisor, or $gcd$, of a list is the largest natural number that divides all entries of the list. Examples: $gcd(2, 6, 4) = 2$, $gcd(10, 6, 15, 6) = 1$ and $gcd(11) = 11$.

The least common multiple, or $lcm$, of a list is the smallest natural number divisible by each entry of the list. Examples: $lcm(2, 6, 4) = 12$, $lcm(10, 6, 15, 6) = 30$ and $lcm(11) = 11$.

Let $f(G, L, N)$ be the number of lists of size $N$ with $gcd ≥ G$ and $lcm ≤ L$. For example:

$$\begin{align}
  & f(10, 100, 1) = 91 \\\\
  & f(10, 100, 2) = 327 \\\\
  & f(10, 100, 3) = 1135 \\\\
  & f(10, 100, 1000)\bmod {101}^4 = 3\\,286\\,053
\end{align}$$

Find $f({10}^6, {10}^{12}, {10}^{18})\bmod {101}^4$.

### --tests--

`leastGreatestAndGreatestLeast()` should return `84664213`.

```js
assert.strictEqual(leastGreatestAndGreatestLeast(), 84664213);
```

## 50

### --description--

A hexagonal orchard of order $n$ is a triangular lattice made up of points within a regular hexagon with side $n$. The following is an example of a hexagonal orchard of order 5:

<img class="img-responsive center-block" alt="hexagonal orchard of order 5, with highlighted in green points, which are hidden from the center by a point closer to it" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-orchards.png" style="background-color: white; padding: 10px;">

Highlighted in green are the points which are hidden from the center by a point closer to it. It can be seen that for a hexagonal orchard of order 5, 30 points are hidden from the center.

Let $H(n)$ be the number of points hidden from the center in a hexagonal orchard of order $n$.

$H(5) = 30$. $H(10) = 138$. $H(1\\,000)$ = $1\\,177\\,848$.

Find $H(100\\,000\\,000)$.

### --tests--

`hexagonalOrchards()` should return `11762187201804552`.

```js
assert.strictEqual(hexagonalOrchards(), 11762187201804552);
```

## 51

### --description--

Each one of the 25 sheep in a flock must be tested for a rare virus, known to affect 2% of the sheep population.

An accurate and extremely sensitive PCR test exists for blood samples, producing a clear positive / negative result, but it is very time-consuming and expensive.

Because of the high cost, the vet-in-charge suggests that instead of performing 25 separate tests, the following procedure can be used instead:

The sheep are split into 5 groups of 5 sheep in each group. For each group, the 5 samples are mixed together and a single test is performed. Then,

- If the result is negative, all the sheep in that group are deemed to be virus-free.
- If the result is positive, 5 additional tests will be performed (a separate test for each animal) to determine the affected individual(s).

Since the probability of infection for any specific animal is only 0.02, the first test (on the pooled samples) for each group will be:

- Negative (and no more tests needed) with probability ${0.98}^5 = 0.9039207968$.
- Positive (5 additional tests needed) with probability $1 - 0.9039207968 = 0.0960792032$.

Thus, the expected number of tests for each group is $1 + 0.0960792032 × 5 = 1.480396016$.

Consequently, all 5 groups can be screened using an average of only $1.480396016 × 5 = \mathbf{7.40198008}$ tests, which represents a huge saving of more than 70%!

Although the scheme we have just described seems to be very efficient, it can still be improved considerably (always assuming that the test is sufficiently sensitive and no adverse effects are caused by mixing different samples). E.g.:

- We may start by running a test on a mixture of all the 25 samples. It can be verified that in about 60.35% of the cases this test will be negative, thus no more tests will be needed. Further testing will only be required for the remaining 39.65% of the cases.
- If we know that at least one animal in a group of 5 is infected and the first 4 individual tests come out negative, there is no need to run a test on the fifth animal (we know that it must be infected).
- We can try a different number of groups / different number of animals in each group, adjusting those numbers at each level so that the total expected number of tests will be minimised.

To simplify the very wide range of possibilities, there is one restriction we place when devising the most cost-efficient testing scheme: whenever we start with a mixed sample, all the sheep contributing to that sample must be fully screened (i.e. a verdict of infected / virus-free must be reached for all of them) before we start examining any other animals.

For the current example, it turns out that the most cost-efficient testing scheme (we'll call it the optimal strategy) requires an average of just <strong>4.155452</strong> tests!

Using the optimal strategy, let $T(s, p)$ represent the average number of tests needed to screen a flock of $s$ sheep for a virus having probability $p$ to be present in any individual. Thus, rounded to six decimal places, $T(25, 0.02) = 4.155452$ and $T(25, 0.10) = 12.702124$.

Find $\sum T(10\\,000, p)$ for $p = 0.01, 0.02, 0.03, \ldots 0.50$. Give your answer rounded to six decimal places.

### --tests--

`bloodTests()` should return `378563.260589`.

```js
assert.strictEqual(bloodTests(), 378563.260589);
```

## 52

### --description--

A moon could be described by the sphere $C(r)$ with centre (0, 0, 0) and radius $r$.

There are stations on the moon at the points on the surface of $C(r)$ with integer coordinates. The station at (0, 0, $r$) is called North Pole station, the station at (0, 0, $-r$) is called South Pole station.

All stations are connected with each other via the shortest road on the great arc through the stations. A journey between two stations is risky. If $d$ is the length of the road between two stations, $\{\left(\frac{d}{πr}\right)}^2$ is a measure for the risk of the journey (let us call it the risk of the road). If the journey includes more than two stations, the risk of the journey is the sum of risks of the used roads.

A direct journey from the North Pole station to the South Pole station has the length $πr$ and risk 1. The journey from the North Pole station to the South Pole station via (0, $r$, 0) has the same length, but a smaller risk:

$${\left(\frac{\frac{1}{2}πr}{πr}\right)}^2+{\left(\frac{\frac{1}{2}πr}{πr}\right)}^2 = 0.5$$

The minimal risk of a journey from the North Pole station to the South Pole station on $C(r)$ is $M(r)$.

You are given that $M(7) = 0.178\\,494\\,399\\,8$ rounded to 10 digits behind the decimal point.

Find $\displaystyle\sum_{n = 1}^{15} M(2^n - 1)$.

Give your answer rounded to 10 digits behind the decimal point in the form a.bcdefghijk.

### --tests--

`riskyMoon()` should return `1.2759860331`.

```js
assert.strictEqual(riskyMoon(), 1.2759860331);
```

## 53

### --description--

Consider a honey bee's honeycomb where each cell is a perfect regular hexagon with side length 1.

<img class="img-responsive center-block" alt="honeycomb with hexagon sides of length 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/distances-in-a-bees-honeycomb.png" style="background-color: white; padding: 10px;">

One particular cell is occupied by the queen bee. For a positive real number $L$, let $B(L)$ count the cells with distance $L$ from the queen bee cell (all distances are measured from centre to centre); you may assume that the honeycomb is large enough to accommodate for any distance we wish to consider.

For example, $B(\sqrt{3}) = 6$, $B(\sqrt{21}) = 12$ and $B(111\\,111\\,111) = 54$.

Find the number of $L ≤ 5 \times {10}^{11}$ such that $B(L) = 450$.

### --tests--

`distancesInHoneycomb()` should return `58065134`.

```js
assert.strictEqual(distancesInHoneycomb(), 58065134);
```

## 54

### --description--

Define $Co(n)$ to be the maximal possible sum of a set of mutually co-prime elements from $\\{1, 2, \ldots, n\\}$. For example $Co(10)$ is 30 and hits that maximum on the subset $\\{1, 5, 7, 8, 9\\}$.

You are given that $Co(30) = 193$ and $Co(100) = 1356$.

Find $Co(200\\,000)$.

### --tests--

`maximalCoprimeSubset()` should return `1726545007`.

```js
assert.strictEqual(maximalCoprimeSubset(), 1726545007);
```

## 55

### --description--

Let $a_n$ be the largest real root of a polynomial $g(x) = x^3 - 2^n \times x^2 + n$.

For example, $a_2 = 3.86619826\ldots$

Find the last eight digits of $\displaystyle\sum_{i = 1}^{30} \lfloor {a_i}^{987654321}\rfloor$.

**Note:** $\lfloor a\rfloor$ represents the floor function.

### --tests--

`rootsOfCubicPolynomials()` should return `28010159`.

```js
assert.strictEqual(rootsOfCubicPolynomials(), 28010159);
```

## 56

### --description--

Consider the divisors of 30: 1, 2, 3, 5, 6, 10, 15, 30.

It can be seen that for every divisor $d$ of 30, $d + \frac{30}{d}$ is prime.

Find the sum of all positive integers $n$ not exceeding $100\\,000\\,000$ such that for every divisor $d$ of $n$, $d + \frac{n}{d}$ is prime.

### --tests--

`primeGeneratingIntegers()` should return `1739023853137`.

```js
assert.strictEqual(primeGeneratingIntegers(), 1739023853137);
```

## 57

### --description--

A cyclic number with $n$ digits has a very interesting property:

When it is multiplied by 1, 2, 3, 4, ... $n$, all the products have exactly the same digits, in the same order, but rotated in a circular fashion!

The smallest cyclic number is the 6-digit number 142857:

$$\begin{align}
  & 142857 × 1 = 142857 \\\\
  & 142857 × 2 = 285714 \\\\
  & 142857 × 3 = 428571 \\\\
  & 142857 × 4 = 571428 \\\\
  & 142857 × 5 = 714285 \\\\
  & 142857 × 6 = 857142
\end{align}$$

The next cyclic number is 0588235294117647 with 16 digits:

$$\begin{align}
  & 0588235294117647 × 1 = 0588235294117647 \\\\
  & 0588235294117647 × 2 = 1176470588235294 \\\\
  & 0588235294117647 × 3 = 1764705882352941 \\\\
  & \ldots \\\\
  & 0588235294117647 × 16 = 9411764705882352
\end{align}$$

Note that for cyclic numbers, leading zeros are important.

There is only one cyclic number for which, the eleven leftmost digits are 00000000137 and the five rightmost digits are 56789 (i.e., it has the form $00000000137\ldots56789$ with an unknown number of digits in the middle). Find the sum of all its digits.

### --tests--

`cyclicNumbers()` should return `3284144505`.

```js
assert.strictEqual(cyclicNumbers(), 3284144505);
```

## 58

### --description--

An infinite number of people (numbered 1, 2, 3, etc.) are lined up to get a room at Hilbert's newest infinite hotel. The hotel contains an infinite number of floors (numbered 1, 2, 3, etc.), and each floor contains an infinite number of rooms (numbered 1, 2, 3, etc.).

Initially the hotel is empty. Hilbert declares a rule on how the $n^{\text{th}}$ person is assigned a room: person $n$ gets the first vacant room in the lowest numbered floor satisfying either of the following:

- the floor is empty
- the floor is not empty, and if the latest person taking a room in that floor is person $m$, then $m + n$ is a perfect square

Person 1 gets room 1 in floor 1 since floor 1 is empty.

Person 2 does not get room 2 in floor 1 since 1 + 2 = 3 is not a perfect square.

Person 2 instead gets room 1 in floor 2 since floor 2 is empty.

Person 3 gets room 2 in floor 1 since 1 + 3 = 4 is a perfect square.

Eventually, every person in the line gets a room in the hotel.

Define $P(f, r)$ to be $n$ if person $n$ occupies room $r$ in floor $f$, and 0 if no person occupies the room. Here are a few examples:

$$\begin{align}
  & P(1, 1) = 1 \\\\
  & P(1, 2) = 3 \\\\
  & P(2, 1) = 2 \\\\
  & P(10, 20) = 440 \\\\
  & P(25, 75) = 4863 \\\\
  & P(99, 100) = 19454
\end{align}$$

Find the sum of all $P(f, r)$ for all positive $f$ and $r$ such that $f × r = 71\\,328\\,803\\,586\\,048$ and give the last 8 digits as your answer.

### --tests--

`hilbertsNewHotel()` should return `40632119`.

```js
assert.strictEqual(hilbertsNewHotel(), 40632119);
```

## 59

### --description--

Given two points ($x_1$, $y_1$, $z_1$) and ($x_2$, $y_2$, $z_2$) in three dimensional space, the Manhattan distance between those points is defined as $|x_1 - x_2| + |y_1 - y_2| + |z_1 - z_2|$.

Let $C(r)$ be a sphere with radius $r$ and center in the origin $O(0, 0, 0)$.

Let $I(r)$ be the set of all points with integer coordinates on the surface of $C(r)$.

Let $S(r)$ be the sum of the Manhattan distances of all elements of $I(r)$ to the origin $O$.

E.g. $S(45)=34518$.

Find $S({10}^{10})$.

### --tests--

`scarySphere()` should return `878825614395267100`.

```js
assert.strictEqual(scarySphere(), 878825614395267100);
```

## 60

### --description--

The Thue-Morse sequence $\\{T_n\\}$ is a binary sequence satisfying:

- $T_0 = 0$
- $T_{2n} = T_n$
- $T_{2n + 1} = 1 - T_n$

The first several terms of $\\{T_n\\}$ are given as follows: $01101001\color{red}{10010}1101001011001101001\ldots$.

We define $\\{A_n\\}$ as the sorted sequence of integers such that the binary expression of each element appears as a subsequence in $\\{T_n\\}$. For example, the decimal number 18 is expressed as 10010 in binary. 10010 appears in $\\{T_n\\}$ ($T_8$ to $T_{12}$), so 18 is an element of $\\{A_n\\}$. The decimal number 14 is expressed as 1110 in binary. 1110 never appears in $\\{T_n\\}$, so 14 is not an element of $\\{A_n\\}$.

The first several terms of $A_n$ are given as follows:

$$\begin{array}{cr}
  n   & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 &  8 &  9 & 10 & 11 & 12 & \ldots \\\\
  A_n & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 9 & 10 & 11 & 12 & 13 & 18 & \ldots
\end{array}$$

We can also verify that $A_{100} = 3251$ and $A_{1000} = 80\\,852\\,364\\,498$.

Find the last 9 digits of $\displaystyle\sum_{k = 1}^{18} A_{{10}^k}$.

### --tests--

`subsequenceOfThueMorseSequence()` should return `178476944`.

```js
assert.strictEqual(subsequenceOfThueMorseSequence(), 178476944);
```

## 61

### --description--

Consider the number 54.

54 can be factored in 7 distinct ways into one or more factors larger than 1:

$$54, 2 × 27, 3 × 18, 6 × 9, 3 × 3 × 6, 2 × 3 × 9 \text{ and } 2 × 3 × 3 × 3$$

If we require that the factors are all squarefree only two ways remain: $3 × 3 × 6$ and $2 × 3 × 3 × 3$.

Let's call $Fsf(n)$ the number of ways $n$ can be factored into one or more squarefree factors larger than 1, so $Fsf(54) = 2$.

Let $S(n)$ be $\sum Fsf(k)$ for $k = 2$ to $n$.

$S(100) = 193$.

Find $S(10\\,000\\,000\\,000)$.

### --tests--

`squarefreeFactors()` should return `457895958010`.

```js
assert.strictEqual(squarefreeFactors(), 457895958010);
```

## 62

### --description--

A cubic Bézier curve is defined by four points: $P_0$, $P_1$, $P_2$ and $P_3$.

The curve is constructed as follows:

<img class="img-responsive center-block" alt="construction of Bézier curve" src="https://cdn.freecodecamp.org/curriculum/project-euler/bzier-curves.png" style="background-color: white; padding: 10px;">

On the segments $P_0P_1$, $P_1P_2$ and $P_2P_3$ the points $Q_0$,$Q_1$ and $Q_2$ are drawn such that $\frac{P_0Q_0}{P_0P_1} = \frac{P_1Q_1}{P_1P_2} = \frac{P_2Q_2}{P_2P_3} = t$, with $t$ in [0,1].

On the segments $Q_0Q_1$ and $Q_1Q_2$ the points $R_0$ and $R_1$ are drawn such that $\frac{Q_0R_0}{Q_0Q_1} = \frac{Q_1R_1}{Q_1Q_2} = t$ for the same value of $t$.

On the segment $R_0R_1$ the point $B$ is drawn such that $\frac{R_0B}{R_0R_1} = t$ for the same value of $t$.

The Bézier curve defined by the points $P_0$, $P_1$, $P_2$, $P_3$ is the locus of $B$ as $Q_0$ takes all possible positions on the segment $P_0P_1$. (Please note that for all points the value of $t$ is the same.)

From the construction it is clear that the Bézier curve will be tangent to the segments $P_0P_1$ in $P_0$ and $P_2P_3$ in $P_3$.

A cubic Bézier curve with $P_0 = (1, 0)$, $P_1 = (1, v)$, $P_2 = (v, 1)$ and $P_3 = (0, 1)$ is used to approximate a quarter circle. The value $v > 0$ is chosen such that the area enclosed by the lines $OP_0$, $OP_3$ and the curve is equal to $\frac{π}{4}$ (the area of the quarter circle).

By how many percent does the length of the curve differ from the length of the quarter circle? That is, if $L$ is the length of the curve, calculate $100 × \displaystyle\frac{L − \frac{π}{2}}{\frac{π}{2}}$. Give your answer rounded to 10 digits behind the decimal point.

### --tests--

`bezierCurves()` should return `0.0000372091`.

```js
assert.strictEqual(bezierCurves(), 0.0000372091);
```

## 63

### --description--

There are $N$ seats in a row. $N$ people come after each other to fill the seats according to the following rules:

1. If there is any seat whose adjacent seat(s) are not occupied take such a seat.
2. If there is no such seat and there is any seat for which only one adjacent seat is occupied take such a seat.
3. Otherwise take one of the remaining available seats.

Let $T(N)$ be the number of possibilities that $N$ seats are occupied by $N$ people with the given rules. The following figure shows $T(4) = 8$.

<img class="img-responsive center-block" alt="eight ways for N seats to be occupied by N people" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance.gif" style="background-color: white; padding: 10px;">

We can verify that $T(10) = 61\\,632$ and $T(1\\,000)\bmod 100\\,000\\,007 = 47\\,255\\,094$.

Find $T(1\\,000\\,000)\bmod 100\\,000\\,007$.

### --tests--

`comfortableDistance()` should return `44855254`.

```js
assert.strictEqual(comfortableDistance(), 44855254);
```

## 64

### --description--

The binomial coefficient $\displaystyle\binom{{10}^{18}}{{10}^9}$ is a number with more than 9 billion ($9 × {10}^9$) digits.

Let $M(n, k, m)$ denote the binomial coefficient $\displaystyle\binom{n}{k}$ modulo $m$.

Calculate $\sum M({10}^{18}, {10}^9, p \times q \times r)$ for $1000 &lt; p &lt; q &lt; r &lt; 5000$ and $p$, $q$, $r$ prime.

### --tests--

`hugeBinomialCoefficient()` should return `162619462356610300`.

```js
assert.strictEqual(hugeBinomialCoefficient(), 162619462356610300);
```

## 65

### --description--

Two players, Anton and Bernhard, are playing the following game.

There is one pile of $n$ stones.

The first player may remove any positive number of stones, but not the whole pile.

Thereafter, each player may remove at most twice the number of stones his opponent took on the previous move.

The player who removes the last stone wins.

E.g. $n = 5$

If the first player takes anything more than one stone the next player will be able to take all remaining stones.

If the first player takes one stone, leaving four, his opponent will take also one stone, leaving three stones.

The first player cannot take all three because he may take at most $2 \times 1 = 2$ stones. So let's say he also takes one stone, leaving 2.

The second player can take the two remaining stones and wins.

So 5 is a losing position for the first player.

For some winning positions there is more than one possible move for the first player.

E.g. when $n = 17$ the first player can remove one or four stones.

Let $M(n)$ be the maximum number of stones the first player can take from a winning position at his first turn and $M(n) = 0$ for any other position.

$\sum M(n)$ for $n ≤ 100$ is 728.

Find $\sum M(n)$ for $n ≤ {10}^{18}$. Give your answer modulo ${10}^8$.

### --tests--

`stoneGameThree()` should return `88351299`.

```js
assert.strictEqual(stoneGameThree(), 88351299);
```

## 66

### --description--

Bozo sort, not to be confused with the slightly less efficient bogo sort, consists out of checking if the input sequence is sorted and if not swapping randomly two elements. This is repeated until eventually the sequence is sorted.

If we consider all permutations of the first 4 natural numbers as input the expectation value of the number of swaps, averaged over all $4!$ input sequences is $24.75$.

The already sorted sequence takes 0 steps.

In this problem we consider the following variant on bozo sort.

If the sequence is not in order we pick three elements at random and shuffle these three elements randomly.

All $3! = 6$ permutations of those three elements are equally likely.

The already sorted sequence will take 0 steps.

If we consider all permutations of the first 4 natural numbers as input the expectation value of the number of shuffles, averaged over all $4!$ input sequences is $27.5$.

Consider as input sequences the permutations of the first 11 natural numbers.

Averaged over all $11!$ input sequences, what is the expected number of shuffles this sorting algorithm will perform? Give your answer rounded to the nearest integer.

### --tests--

`bozoSort()` should return `48271207`.

```js
assert.strictEqual(bozoSort(), 48271207);
```

## 67

### --description--

The harmonic series $1 + \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \ldots$ is well known to be divergent.

If we however omit from this series every term where the denominator has a 9 in it, the series remarkably enough converges to approximately 22.9206766193. This modified harmonic series is called the Kempner series.

Let us now consider another modified harmonic series by omitting from the harmonic series every term where the denominator has 3 or more equal consecutive digits. One can verify that out of the first 1200 terms of the harmonic series, only 20 terms will be omitted.

These 20 omitted terms are:

$$\dfrac{1}{111}, \dfrac{1}{222}, \dfrac{1}{333}, \dfrac{1}{444}, \dfrac{1}{555}, \dfrac{1}{666}, \dfrac{1}{777}, \dfrac{1}{888}, \dfrac{1}{999}, \dfrac{1}{1000}, \dfrac{1}{1110}, \\\\
\dfrac{1}{1111}, \dfrac{1}{1112}, \dfrac{1}{1113}, \dfrac{1}{1114}, \dfrac{1}{1115}, \dfrac{1}{1116}, \dfrac{1}{1117}, \dfrac{1}{1118}, \dfrac{1}{1119}$$

This series converges as well.

Find the value the series converges to. Give your answer rounded to 10 digits behind the decimal point.

### --tests--

`kempnerLikeSeries()` should return `253.6135092068`.

```js
assert.strictEqual(kempnerLikeSeries(), 253.6135092068);
```

## 68

### --description--

In a standard 52 card deck of playing cards, a set of 4 cards is a Badugi if it contains 4 cards with no pairs and no two cards of the same suit.

Let $f(n)$ be the number of ways to choose $n$ cards with a 4 card subset that is a Badugi. For example, there are $2\\,598\\,960$ ways to choose five cards from a standard 52 card deck, of which $514\\,800$ contain a 4 card subset that is a Badugi, so $f(5) = 514800$.

Find $\sum f(n)$ for $4 ≤ n ≤ 13$.

### --tests--

`badugi()` should return `862400558448`.

```js
assert.strictEqual(badugi(), 862400558448);
```

## 69

### --description--

Let us define a geometric triangle as an integer sided triangle with sides $a ≤ b ≤ c$ so that its sides form a geometric progression, i.e. $b^2 = a \times c$.

An example of such a geometric triangle is the triangle with sides $a = 144$, $b = 156$ and $c = 169$.

There are $861\\,805$ geometric triangles with $\text{perimeter} ≤ {10}^6$.

How many geometric triangles exist with $\text{perimeter} ≤ 2.5 \times {10}^{13}$?

### --tests--

`geometricTriangles()` should return `41791929448408`.

```js
assert.strictEqual(geometricTriangles(), 41791929448408);
```

## 70

### --description--

Oregon licence plates consist of three letters followed by a three digit number (each digit can be from [0...9]).

While driving to work Seth plays the following game:

Whenever the numbers of two licence plates seen on his trip add to 1000 that's a win.

E.g. `MIC-012` and `HAN-988` is a win and `RYU-500` and `SET-500` too (as long as he sees them in the same trip).

Find the expected number of plates he needs to see for a win. Give your answer rounded to 8 decimal places behind the decimal point.

**Note:** We assume that each licence plate seen is equally likely to have any three digit number on it.

### --tests--

`licensePlates()` should return `40.66368097`.

```js
assert.strictEqual(licensePlates(), 40.66368097);
```

## 71

### --description--

Let $R(M, N)$ be the number of lattice points ($x$, $y$) which satisfy $M \lt x \le N$, $M \lt y \le N$ and $\left\lfloor\frac{y^2}{x^2}\right\rfloor$ is odd.

We can verify that $R(0, 100) = 3\\,019$ and $R(100, 10\\,000) = 29\\,750\\,422$.

Find $R(2 \times {10}^6, {10}^9)$.

**Note:** $\lfloor x\rfloor$ represents the floor function.

### --tests--

`pencilsOfRays()` should return `301450082318807040`.

```js
assert.strictEqual(pencilsOfRays(), 301450082318807040);
```

## 72

### --description--

Every triangle has a circumscribed circle that goes through the three vertices. Consider all integer sided triangles for which the radius of the circumscribed circle is integral as well.

Let $S(n)$ be the sum of the radii of the circumscribed circles of all such triangles for which the radius does not exceed $n$.

$S(100) = 4\\,950$ and $S(1\\,200) = 1\\,653\\,605$.

Find $S({10}^7)$.

### --tests--

`circumscribedCircles()` should return `727227472448913`.

```js
assert.strictEqual(circumscribedCircles(), 727227472448913);
```

## 73

### --description--

An integer partition of a number $n$ is a way of writing $n$ as a sum of positive integers.

Partitions that differ only in the order of their summands are considered the same. A partition of $n$ into distinct parts is a partition of $n$ in which every part occurs at most once.

The partitions of 5 into distinct parts are:

5, 4 + 1 and 3 + 2.

Let $f(n)$ be the maximum product of the parts of any such partition of $n$ into distinct parts and let $m(n)$ be the number of elements of any such partition of $n$ with that product.

So $f(5) = 6$ and $m(5) = 2$.

For $n = 10$ the partition with the largest product is $10 = 2 + 3 + 5$, which gives $f(10) = 30$ and $m(10) = 3$. And their product, $f(10) \times m(10) = 30 \times 3 = 90$

It can be verified that $\sum f(n) \times m(n)$ for $1 ≤ n ≤ 100 = 1\\,683\\,550\\,844\\,462$.

Find $\sum f(n) \times m(n)$ for $1 ≤ n ≤ {10}^{14}$. Give your answer modulo $982\\,451\\,653$, the 50 millionth prime.

### --tests--

`maximumIntegerPartitionProduct()` should return `334420941`.

```js
assert.strictEqual(maximumIntegerPartitionProduct(), 334420941);
```

## 74

### --description--

Let $S_n$ be an integer sequence produced with the following pseudo-random number generator:

$$\begin{align}
        S_0 & = 290\\,797 \\\\
  S_{n + 1} & = {S_n}^2\bmod 50\\,515\\,093
\end{align}$$

Let $A(i, j)$ be the minimum of the numbers $S_i, S_{i + 1}, \ldots, S_j$ for $i ≤ j$. Let $M(N) = \sum A(i, j)$ for $1 ≤ i ≤ j ≤ N$.

We can verify that $M(10) = 432\\,256\\,955$ and $M(10\\,000) = 3\\,264\\,567\\,774\\,119$.

Find $M(2\\,000\\,000\\,000)$.

### --tests--

`minimumOfSubsequences()` should return `7435327983715286000`.

```js
assert.strictEqual(minimumOfSubsequences(), 7435327983715286000);
```

## 75

### --description--

Consider the following set of dice with nonstandard pips:

$$\begin{array}{}
  \text{Die A: } & 1 & 4 & 4 & 4 & 4 & 4 \\\\
  \text{Die B: } & 2 & 2 & 2 & 5 & 5 & 5 \\\\
  \text{Die C: } & 3 & 3 & 3 & 3 & 3 & 6 \\\\
\end{array}$$

A game is played by two players picking a die in turn and rolling it. The player who rolls the highest value wins.

If the first player picks die $A$ and the second player picks die $B$ we get

$P(\text{second player wins}) = \frac{7}{12} > \frac{1}{2}$

If the first player picks die $B$ and the second player picks die $C$ we get

$P(\text{second player wins}) = \frac{7}{12} > \frac{1}{2}$

If the first player picks die $C$ and the second player picks die $A$ we get

$P(\text{second player wins}) = \frac{25}{36} > \frac{1}{2}$

So whatever die the first player picks, the second player can pick another die and have a larger than 50% chance of winning. A set of dice having this property is called a nontransitive set of dice.

We wish to investigate how many sets of nontransitive dice exist. We will assume the following conditions:

- There are three six-sided dice with each side having between 1 and $N$ pips, inclusive.
- Dice with the same set of pips are equal, regardless of which side on the die the pips are located.
- The same pip value may appear on multiple dice; if both players roll the same value neither player wins.
- The sets of dice $\\{A, B, C\\}$, $\\{B, C, A\\}$ and $\\{C, A, B\\}$ are the same set.

For $N = 7$ we find there are 9780 such sets.

How many are there for $N = 30$?

### --tests--

`nontransitiveSetsOfDice()` should return `973059630185670`.

```js
assert.strictEqual(nontransitiveSetsOfDice(), 973059630185670);
```

## 76

### --description--

There are 16 positive integers that do not have a zero in their digits and that have a digital sum equal to 5, namely:

5, 14, 23, 32, 41, 113, 122, 131, 212, 221, 311, 1112, 1121, 1211, 2111 and 11111.

Their sum is 17891.

Let $f(n)$ be the sum of all positive integers that do not have a zero in their digits and have a digital sum equal to $n$.

Find $\displaystyle\sum_{i=1}^{17} f(13^i)$. Give the last 9 digits as your answer.

### --tests--

`experience13()` should return `732385277`.

```js
assert.strictEqual(experience13(), 732385277);
```

## 77

### --description--

Let $T(n)$ be the $n^{\text{th}}$ triangle number, so $T(n) = \frac{n(n + 1)}{2}$.

Let $dT(n)$ be the number of divisors of $T(n)$. E.g.: $T(7) = 28$ and $dT(7) = 6$.

Let $Tr(n)$ be the number of triples ($i$, $j$, $k$) such that $1 ≤ i &lt; j &lt; k ≤ n$ and $dT(i) > dT(j) > dT(k)$. $Tr(20) = 14$, $Tr(100) = 5\\,772$ and $Tr(1000) = 11\\,174\\,776$.

Find $Tr(60\\,000\\,000)$. Give the last 18 digits of your answer.

### --tests--

`triangleTriples()` should return `147534623725724700`.

```js
assert.strictEqual(triangleTriples(), 147534623725724700);
```

## 78

### --description--

Let $f(n)$ be the number of couples ($x$, $y$) with $x$ and $y$ positive integers, $x ≤ y$ and the least common multiple of $x$ and $y$ equal to $n$.

Let $g$ be the summatory function of $f$, i.e.: $g(n) = \sum f(i)$ for $1 ≤ i ≤ n$.

You are given that $g({10}^6) = 37\\,429\\,395$.

Find $g({10}^{12})$.

### --tests--

`leastCommonMultipleCount()` should return `132314136838185`.

```js
assert.strictEqual(leastCommonMultipleCount(), 132314136838185);
```

## 79

### --description--

An $m×n$ maze is an $m×n$ rectangular grid with walls placed between grid cells such that there is exactly one path from the top-left square to any other square. The following are examples of a 9×12 maze and a 15×20 maze:

<img class="img-responsive center-block" alt="9x12 maze and 15x20 maze" src="https://cdn.freecodecamp.org/curriculum/project-euler/amazing-mazes.gif" style="background-color: white; padding: 10px;">

Let $C(m, n)$ be the number of distinct $m×n$ mazes. Mazes which can be formed by rotation and reflection from another maze are considered distinct.

It can be verified that $C(1, 1) = 1$, $C(2, 2) = 4$, $C(3, 4) = 2415$, and $C(9, 12) = 2.5720\mathrm{e}\\,46$ (in scientific notation rounded to 5 significant digits).

Find $C(100, 500)$ and write your answer as a string in scientific notation rounded to 5 significant digits.

When giving your answer, use a lowercase e to separate mantissa and exponent. E.g. if the answer is 1234567891011 then the answer format would be the string `1.2346e12`.

### --tests--

`amazingMazes()` should return a string.

```js
assert(typeof amazingMazes() === 'string');
```

`amazingMazes()` should return the string `6.3202e25093`.

```js
assert.strictEqual(amazingMazes(), '6.3202e25093');
```

## 80

### --description--

For a prime $p$ let $S(p) = (\sum (p - k)!)\bmod (p)$ for $1 ≤ k ≤ 5$.

For example, if $p = 7$,

$$(7 - 1)! + (7 - 2)! + (7 - 3)! + (7 - 4)! + (7 - 5)! = 6! + 5! + 4! + 3! + 2! = 720 + 120 + 24 + 6 + 2 = 872$$

As $872\bmod (7) = 4$, $S(7) = 4$.

It can be verified that $\sum S(p) = 480$ for $5 ≤ p &lt; 100$.

Find $\sum S(p)$ for $5 ≤ p &lt; {10}^8$.

### --tests--

`primeKFactorial()` should return `139602943319822`.

```js
assert.strictEqual(primeKFactorial(), 139602943319822);
```

## 81

### --description--

A polygon is a flat shape consisting of straight line segments that are joined to form a closed chain or circuit. A polygon consists of at least three sides and does not self-intersect.

A set $S$ of positive numbers is said to generate a polygon $P$ if:

- no two sides of $P$ are the same length,
- the length of every side of $P$ is in $S$, and
- $S$ contains no other value.

For example:

The set {3, 4, 5} generates a polygon with sides 3, 4, and 5 (a triangle).

The set {6, 9, 11, 24} generates a polygon with sides 6, 9, 11, and 24 (a quadrilateral).

The sets {1, 2, 3} and {2, 3, 4, 9} do not generate any polygon at all.

Consider the sequence $s$, defined as follows:

- $s_1 = 1$, $s_2 = 2$, $s_3 = 3$
- $s_n = s_{n - 1} + s_{n - 3}$ for $n > 3$.

Let $U_n$ be the set $\\{s_1, s_2, \ldots, s_n\\}$. For example, $U_{10} = \\{1, 2, 3, 4, 6, 9, 13, 19, 28, 41\\}$.

Let $f(n)$ be the number of subsets of $U_n$ which generate at least one polygon.

For example, $f(5) = 7$, $f(10) = 501$ and $f(25) = 18\\,635\\,853$.

Find the last 9 digits of $f({10}^{18})$.

### --tests--

`generatingPolygons()` should return `697003956`.

```js
assert.strictEqual(generatingPolygons(), 697003956);
```

## 82

### --description--

Let $f_5(n)$ be the largest integer $x$ for which $5^x$ divides $n$.

For example, $f_5(625\\,000) = 7$.

Let $T_5(n)$ be the number of integers $i$ which satisfy $f_5((2 \times i - 1)!) &lt; 2 \times f_5(i!)$ and $1 ≤ i ≤ n$.

It can be verified that $T_5({10}^3) = 68$ and $T_5({10}^9) = 2\\,408\\,210$.

Find $T_5({10}^{18})$.

### --tests--

`factorialDivisibilityComparison()` should return `22173624649806`.

```js
assert.strictEqual(factorialDivisibilityComparison(), 22173624649806);
```

## 83

### --description--

Define the sequence $a(n)$ as the number of adjacent pairs of ones in the binary expansion of $n$ (possibly overlapping).

E.g.: $a(5) = a({101}_2) = 0$, $a(6) = a({110}_2) = 1$, $a(7) = a({111}_2) = 2$

Define the sequence $b(n) = {(-1)}^{a(n)}$. This sequence is called the Rudin-Shapiro sequence.

Also consider the summatory sequence of $b(n)$: $s(n) = \displaystyle\sum_{i = 0}^{n} b(i)$.

The first couple of values of these sequences are:

$$\begin{array}{lr}
  n    & 0 & 1 & 2 &  3 & 4 & 5 &  6 & 7 \\\\
  a(n) & 0 & 0 & 0 &  1 & 0 & 0 &  1 & 2 \\\\
  b(n) & 1 & 1 & 1 & -1 & 1 & 1 & -1 & 1 \\\\
  s(n) & 1 & 2 & 3 &  2 & 3 & 4 &  3 & 4
\end{array}$$

The sequence $s(n)$ has the remarkable property that all elements are positive and every positive integer $k$ occurs exactly $k$ times.

Define $g(t, c)$, with $1 ≤ c ≤ t$, as the index in $s(n)$ for which $t$ occurs for the $c$'th time in $s(n)$.

E.g.: $g(3, 3) = 6$, $g(4, 2) = 7$ and $g(54321, 12345) = 1\\,220\\,847\\,710$.

Let $F(n)$ be the fibonacci sequence defined by:

$$\begin{align}
  & F(0) = F(1) = 1 \text{ and} \\\\
  & F(n) = F(n - 1) + F(n - 2) \text{ for } n > 1.
\end{align}$$

Define $GF(t) = g(F(t), F(t - 1))$.

Find $\sum GF(t)$ for$ 2 ≤ t ≤ 45$.

### --tests--

`rudinShapiroSequence()` should return `3354706415856333000`.

```js
assert.strictEqual(rudinShapiroSequence(), 3354706415856333000);
```

## 84

### --description--

For any triangle $T$ in the plane, it can be shown that there is a unique ellipse with largest area that is completely inside $T$.

<img class="img-responsive center-block" alt="ellipse completely inside a triangle" src="https://cdn.freecodecamp.org/curriculum/project-euler/ellipses-inside-triangles.png" style="background-color: white; padding: 10px;">

For a given $n$, consider triangles $T$ such that:

-   the vertices of $T$ have integer coordinates with absolute value $≤ n$, and
-   the foci<sup>1</sup> of the largest-area ellipse inside $T$ are $(\sqrt{13}, 0)$ and $(-\sqrt{13}, 0)$.

Let $A(n)$ be the sum of the areas of all such triangles.

For example, if $n = 8$, there are two such triangles. Their vertices are (-4,-3), (-4,3), (8,0) and (4,3), (4,-3), (-8,0), and the area of each triangle is 36. Thus $A(8) = 36 + 36 = 72$.

It can be verified that $A(10) = 252$, $A(100) = 34\\,632$ and $A(1000) = 3\\,529\\,008$.

Find $A(1\\,000\\,000\\,000)$.

<sup>1</sup>The foci (plural of focus) of an ellipse are two points $A$ and $B$ such that for every point $P$ on the boundary of the ellipse, $AP + PB$ is constant.

### --tests--

`ellipsesInsideTriangles()` should return `3776957309612154000`.

```js
assert.strictEqual(ellipsesInsideTriangles(), 3776957309612154000);
```

## 85

### --description--

Let $n$ be an integer and $S(n)$ be the set of factors of $n$.

A subset $A$ of $S(n)$ is called an antichain of $S(n)$ if $A$ contains only one element or if none of the elements of $A$ divides any of the other elements of $A$.

For example: $S(30) = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$

$\\{2, 5, 6\\}$ is not an antichain of $S(30)$.

$\\{2, 3, 5\\}$ is an antichain of $S(30)$.

Let $N(n)$ be the maximum length of an antichain of $S(n)$.

Find $\sum N(n)$ for $1 ≤ n ≤ {10}^8$

### --tests--

`maximumLengthOfAntichain()` should return `528755790`.

```js
assert.strictEqual(maximumLengthOfAntichain(), 528755790);
```

## 86

### --description--

A Harshad or Niven number is a number that is divisible by the sum of its digits.

201 is a Harshad number because it is divisible by 3 (the sum of its digits.)

When we truncate the last digit from 201, we get 20, which is a Harshad number.

When we truncate the last digit from 20, we get 2, which is also a Harshad number.

Let's call a Harshad number that, while recursively truncating the last digit, always results in a Harshad number a right truncatable Harshad number.

Also:

$\frac{201}{3} = 67$ which is prime.

Let's call a Harshad number that, when divided by the sum of its digits, results in a prime a strong Harshad number.

Now take the number 2011 which is prime. When we truncate the last digit from it we get 201, a strong Harshad number that is also right truncatable. Let's call such primes strong, right truncatable Harshad primes.

You are given that the sum of the strong, right truncatable Harshad primes less than 10000 is 90619.

Find the sum of the strong, right truncatable Harshad primes less than ${10}^{14}$.

### --tests--

`harshadNumbers()` should return `696067597313468`.

```js
assert.strictEqual(harshadNumbers(), 696067597313468);
```

## 87

### --description--

Consider all lattice points ($a$, $b$, $c$) with $0 ≤ a, b, c ≤ N$.

From the origin $O(0, 0, 0)$ all lines are drawn to the other lattice points. Let $D(N)$ be the number of distinct such lines.

You are given that $D(1\\,000\\,000) = 831\\,909\\,254\\,469\\,114\\,121$.

Find $D({10}^{10})$. Give as your answer the first nine digits followed by the last nine digits.

### --tests--

`distinctLines()` should return `831907372805130000`.

```js
assert.strictEqual(distinctLines(), 831907372805130000);
```

## 88

### --description--

An unbiased single 4-sided die is thrown and its value, $T$, is noted.

$T$ unbiased 6-sided dice are thrown and their scores are added together. The sum, $C$, is noted.

$C$ unbiased 8-sided dice are thrown and their scores are added together. The sum, $O$, is noted.

$O$ unbiased 12-sided dice are thrown and their scores are added together. The sum, $D$, is noted.

$D$ unbiased 20-sided dice are thrown and their scores are added together. The sum, $I$, is noted.

Find the variance of $I$, and give your answer rounded to 4 decimal places.

### --tests--

`platonicDice()` should return `2406376.3623`.

```js
assert.strictEqual(platonicDice(), 2406376.3623);
```

## 89

### --description--

Consider the triangle with sides $\sqrt{5}$, $\sqrt{65}$ and $\sqrt{68}$. It can be shown that this triangle has area 9.

$S(n)$ is the sum of the areas of all triangles with sides $\sqrt{1 + b^2}$, $\sqrt{1 + c^2}$ and $\sqrt{b^2 + c^2}$ (for positive integers $b$ and $c$) that have an integral area not exceeding $n$.

The example triangle has $b = 2$ and $c = 8$.

$S({10}^6) = 18\\,018\\,206$.

Find $S({10}^{10})$.

### --tests--

`nonRationalSidesAndIntegralArea()` should return `2919133642971`.

```js
assert.strictEqual(nonRationalSidesAndIntegralArea(), 2919133642971);
```

## 90

### --description--

Let $s_k$ be the number of 1’s when writing the numbers from 0 to $k$ in binary.

For example, writing 0 to 5 in binary, we have 0, 1, 10, 11, 100, 101. There are seven 1’s, so $s_5 = 7$.

The sequence $S = \\{s_k : k ≥ 0\\}$ starts $\\{0, 1, 2, 4, 5, 7, 9, 12, \ldots\\}$.

A game is played by two players. Before the game starts, a number $n$ is chosen. A counter $c$ starts at 0. At each turn, the player chooses a number from 1 to $n$ (inclusive) and increases $c$ by that number. The resulting value of $c$ must be a member of $S$. If there are no more valid moves, the player loses.

For example, with $n = 5$ and starting with $c = 0$:

- Player 1 chooses 4, so $c$ becomes $0 + 4 = 4$.
- Player 2 chooses 5, so $c$ becomes $4 + 5 = 9$.
- Player 1 chooses 3, so $c$ becomes $9 + 3 = 12$.
- etc.

Note that $c$ must always belong to $S$, and each player can increase $c$ by at most $n$.

Let $M(n)$ be the highest number the first player can choose at her first turn to force a win, and $M(n) = 0$ if there is no such move. For example, $M(2) = 2$, $M(7) = 1$ and $M(20) = 4$.

It can be verified $\sum M{(n)}^3 = 8150$ for $1 ≤ n ≤ 20$.

Find $\sum M{(n)}^3$ for $1 ≤ n ≤ 1000$.

### --tests--

`hoppingGame()` should return `61029882288`.

```js
assert.strictEqual(hoppingGame(), 61029882288);
```

## 91

### --description--

A rectilinear grid is an orthogonal grid where the spacing between the gridlines does not have to be equidistant.

An example of such grid is logarithmic graph paper.

Consider rectilinear grids in the Cartesian coordinate system with the following properties:

- The gridlines are parallel to the axes of the Cartesian coordinate system.
- There are $N + 2$ vertical and $N + 2$ horizontal gridlines. Hence there are $(N + 1) \times (N + 1)$ rectangular cells.
- The equations of the two outer vertical gridlines are $x = -1$ and $x = 1$.
- The equations of the two outer horizontal gridlines are $y = -1$ and $y = 1$.
- The grid cells are colored red if they overlap with the unit circle, black otherwise.

For this problem we would like you to find the positions of the remaining $N$ inner horizontal and $N$ inner vertical gridlines so that the area occupied by the red cells is minimized.

E.g. here is a picture of the solution for $N = 10$:

<img class="img-responsive center-block" alt="solution for N = 10" src="https://cdn.freecodecamp.org/curriculum/project-euler/enmeshed-unit-circle.png" style="background-color: white; padding: 10px;">

The area occupied by the red cells for $N = 10$ rounded to 10 digits behind the decimal point is 3.3469640797.

Find the positions for $N = 400$. Give as your answer the area occupied by the red cells rounded to 10 digits behind the decimal point.

### --tests--

`enmeshedUnitCircle()` should return `3.1486734435`.

```js
assert.strictEqual(enmeshedUnitCircle(), 3.1486734435);
```

## 92

### --description--

An $n × n$ grid of squares contains $n^2$ ants, one ant per square.

All ants decide to move simultaneously to an adjacent square (usually 4 possibilities, except for ants on the edge of the grid or at the corners).

We define $f(n)$ to be the number of ways this can happen without any ants ending on the same square and without any two ants crossing the same edge between two squares.

You are given that $f(4) = 88$.

Find $f(10)$.

### --tests--

`migratingAnts()` should return `112398351350823100`.

```js
assert.strictEqual(migratingAnts(), 112398351350823100);
```

## 93

### --description--

Jeff eats a pie in an unusual way.

The pie is circular. He starts with slicing an initial cut in the pie along a radius.

While there is at least a given fraction $F$ of pie left, he performs the following procedure:

- He makes two slices from the pie centre to any point of what is remaining of the pie border, any point on the remaining pie border equally likely. This will divide the remaining pie into three pieces.
- Going counterclockwise from the initial cut, he takes the first two pie pieces and eats them.

When less than a fraction $F$ of pie remains, he does not repeat this procedure. Instead, he eats all of the remaining pie.

<img class="img-responsive center-block" alt="animation of pie slicing procedure" src="https://cdn.freecodecamp.org/curriculum/project-euler/eating-pie.gif" style="background-color: white; padding: 10px;">

For $x ≥ 1$, let $E(x)$ be the expected number of times Jeff repeats the procedure above with $F = \frac{1}{x}$. It can be verified that $E(1) = 1$, $E(2) ≈ 1.2676536759$, and $E(7.5) ≈ 2.1215732071$.

Find $E(40)$ rounded to 10 decimal places behind the decimal point.

### --tests--

`eatingPie()` should return `3.2370342194`.

```js
assert.strictEqual(eatingPie(), 3.2370342194);
```

## 94

### --description--

The Pythagorean tree is a fractal generated by the following procedure:

Start with a unit square. Then, calling one of the sides its base (in the animation, the bottom side is the base):

1. Attach a right triangle to the side opposite the base, with the hypotenuse coinciding with that side and with the sides in a 3-4-5 ratio. Note that the smaller side of the triangle must be on the 'right' side with respect to the base (see animation).
2. Attach a square to each leg of the right triangle, with one of its sides coinciding with that leg.
3. Repeat this procedure for both squares, considering as their bases the sides touching the triangle.

The resulting figure, after an infinite number of iterations, is the Pythagorean tree.

<img class="img-responsive center-block" alt="animation showing 8 iterations of the procedure" src="https://cdn.freecodecamp.org/curriculum/project-euler/pythagorean-tree.gif" style="background-color: white; padding: 10px;">

It can be shown that there exists at least one rectangle, whose sides are parallel to the largest square of the Pythagorean tree, which encloses the Pythagorean tree completely.

Find the smallest area possible for such a bounding rectangle, and give your answer rounded to 10 decimal places.

### --tests--

`pythagoreanTree()` should return `28.2453753155`.

```js
assert.strictEqual(pythagoreanTree(), 28.2453753155);
```

## 95

### --description--

For any positive integer $n$, the $n$th weak Goodstein sequence $\\{g1, g2, g3, \ldots\\}$ is defined as:

- $g_1 = n$
- for $k > 1$, $g_k$ is obtained by writing $g_{k - 1}$ in base $k$, interpreting it as a base $k + 1$ number, and subtracting 1.

The sequence terminates when $g_k$ becomes 0.

For example, the $6$th weak Goodstein sequence is $\\{6, 11, 17, 25, \ldots\\}$:

- $g_1 = 6$.
- $g_2 = 11$ since $6 = 110_2$, $110_3 = 12$, and $12 - 1 = 11$.
- $g_3 = 17$ since $11 = 102_3$, $102_4 = 18$, and $18 - 1 = 17$.
- $g_4 = 25$ since $17 = 101_4$, $101_5 = 26$, and $26 - 1 = 25$.

and so on.

It can be shown that every weak Goodstein sequence terminates.

Let $G(n)$ be the number of nonzero elements in the $n$th weak Goodstein sequence.

It can be verified that $G(2) = 3$, $G(4) = 21$ and $G(6) = 381$.

It can also be verified that $\sum G(n) = 2517$ for $1 ≤ n &lt; 8$.

Find the last 9 digits of $\sum G(n)$ for $1 ≤ n &lt; 16$.

### --tests--

`weakGoodsteinSequence()` should return `173214653`.

```js
assert.strictEqual(weakGoodsteinSequence(), 173214653);
```

## 96

### --description--

On the parabola $y = \frac{x^2}{k}$, three points $A(a, \frac{a^2}{k})$, $B(b, \frac{b^2}{k})$ and $C(c, \frac{c^2}{k})$ are chosen.

Let $F(K, X)$ be the number of the integer quadruplets $(k, a, b, c)$ such that at least one angle of the triangle $ABC$ is 45°, with $1 ≤ k ≤ K$ and $-X ≤ a &lt; b &lt; c ≤ X$.

For example, $F(1, 10) = 41$ and $F(10, 100) = 12\\,492$.

Find $F({10}^6, {10}^9)$.

### --tests--

`triangleOnParabola()` should return `141630459461893730`.

```js
assert.strictEqual(triangleOnParabola(), 141630459461893730);
```

## 97

### --description--

Inside a rope of length $n$, $n - 1$ points are placed with distance 1 from each other and from the endpoints. Among these points, we choose $m - 1$ points at random and cut the rope at these points to create $m$ segments.

Let $E(n, m)$ be the expected length of the second-shortest segment. For example, $E(3, 2) = 2$ and $E(8, 3) = \frac{16}{7}$. Note that if multiple segments have the same shortest length the length of the second-shortest segment is defined as the same as the shortest length.

Find $E({10}^7, 100)$. Give your answer rounded to 5 decimal places behind the decimal point.

### --tests--

`cuttingRope()` should return `2010.59096`.

```js
assert.strictEqual(cuttingRope(), 2010.59096);
```

## 98

### --description--

The first 15 fibonacci numbers are:

$$1,1,2,3,5,8,13,21,34,55,89,144,233,377,610.$$

It can be seen that 8 and 144 are not squarefree: 8 is divisible by 4 and 144 is divisible by 4 and by 9.

So the first 13 squarefree fibonacci numbers are:

$$1,1,2,3,5,13,21,34,55,89,233,377 \text{ and } 610.$$

The $200$th squarefree fibonacci number is: 971183874599339129547649988289594072811608739584170445. The last sixteen digits of this number are: 1608739584170445 and in scientific notation this number can be written as `9.7e53`.

Find the $100\\,000\\,000$th squarefree fibonacci number. Give as your answer as a string with its last sixteen digits followed by a comma followed by the number in scientific notation (rounded to one digit after the decimal point). For the $200$th squarefree number the answer would have been: `1608739584170445,9.7e53`

**Note:** For this problem, assume that for every prime $p$, the first fibonacci number divisible by $p$ is not divisible by $p^2$ (this is part of Wall's conjecture). This has been verified for primes $≤ 3 \times {10}^{15}$, but has not been proven in general.

If it happens that the conjecture is false, then the accepted answer to this problem isn't guaranteed to be the $100\\,000\\,000$th squarefree fibonacci number, rather it represents only a lower bound for that number.

### --tests--

`squarefreeFibonacciNumbers()` should return a string.

```js
assert(typeof squarefreeFibonacciNumbers() === 'string');
```

`squarefreeFibonacciNumbers()` should return the string `1508395636674243,6.5e27330467`.

```js
assert.strictEqual(squarefreeFibonacciNumbers(), '1508395636674243,6.5e27330467');
```

## 99

### --description--

A Fibonacci tree is a binary tree recursively defined as:

- $T(0)$ is the empty tree.
- $T(1)$ is the binary tree with only one node.
- $T(k)$ consists of a root node that has $T(k - 1)$ and $T(k - 2)$ as children.

On such a tree two players play a take-away game. On each turn a player selects a node and removes that node along with the subtree rooted at that node. The player who is forced to take the root node of the entire tree loses.

Here are the winning moves of the first player on the first turn for $T(k)$ from $k = 1$ to $k = 6$.

<img class="img-responsive center-block" alt="winning moves of first player, on the first turn for k = 1 to k = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/fibonacci-tree-game.png" style="background-color: white; padding: 10px;">

Let $f(k)$ be the number of winning moves of the first player (i.e. the moves for which the second player has no winning strategy) on the first turn of the game when this game is played on $T(k)$.

For example, $f(5) = 1$ and $f(10) = 17$.

Find $f(10000)$. Give the last 18 digits of your answer.

### --tests--

`fibonacciTreeGame()` should return `438505383468410600`.

```js
assert.strictEqual(fibonacciTreeGame(), 438505383468410600);
```

## --fcc-end--
    