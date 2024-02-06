# Project Euler in Rust: 401 to 480
    
Complete the freeCodeCamp Project Euler problems in the Rust programming language using WebAssembly.

## 0

### --description--

The divisors of 6 are 1, 2, 3 and 6.

The sum of the squares of these numbers is $1 + 4 + 9 + 36 = 50$.

Let $\sigma_2(n)$ represent the sum of the squares of the divisors of $n$. Thus $\sigma_2(6) = 50$.

Let $\Sigma_2$ represent the summatory function of $\sigma_2$, that is $\Sigma_2(n) = \sum \sigma_2(i)$ for $i=1$ to $n$. The first 6 values of $\Sigma_2$ are: 1, 6, 16, 37, 63 and 113.

Find $\Sigma_2({10}^{15})$ modulo ${10}^9$.

### --tests--

`sumOfSquaresDivisors()` should return `281632621`.

```js
assert.strictEqual(sumOfSquaresDivisors(), 281632621);
```

## 1

### --description--

It can be shown that the polynomial $n^4 + 4n^3 + 2n^2 + 5n$ is a multiple of 6 for every integer $n$. It can also be shown that 6 is the largest integer satisfying this property.

Define $M(a, b, c)$ as the maximum $m$ such that $n^4 + an^3 + bn^2 + cn$ is a multiple of $m$ for all integers $n$. For example, $M(4, 2, 5) = 6$.

Also, define $S(N)$ as the sum of $M(a, b, c)$ for all $0 &lt; a, b, c ≤ N$.

We can verify that $S(10) = 1\\,972$ and $S(10\\,000) = 2\\,024\\,258\\,331\\,114$.

Let $F_k$ be the Fibonacci sequence:

- $F_0 = 0$, $F_1 = 1$ and
- $F_k = F_{k - 1} + F_{k - 2}$ for $k ≥ 2$.

Find the last 9 digits of $\sum S(F_k)$ for $2 ≤ k ≤ 1\\,234\\,567\\,890\\,123$.

### --tests--

`integerValuedPolynomials()` should return `356019862`.

```js
assert.strictEqual(integerValuedPolynomials(), 356019862);
```

## 2

### --description--

For integers $a$ and $b$, we define $D(a, b)$ as the domain enclosed by the parabola $y = x^2$ and the line $y = ax + b: D(a, b) = \\{ (x, y) | x^2 ≤ y ≤ ax + b \\}$.

$L(a, b)$ is defined as the number of lattice points contained in $D(a, b)$. For example, $L(1, 2) = 8$ and $L(2, -1) = 1$.

We also define $S(N)$ as the sum of $L(a, b)$ for all the pairs ($a$, $b$) such that the area of $D(a, b)$ is a rational number and $|a|,|b| ≤ N$.

We can verify that $S(5) = 344$ and $S(100) = 26\\,709\\,528$.

Find $S({10}^{12})$. Give your answer $\bmod {10}^8$.

### --tests--

`latticePoints()` should return `18224771`.

```js
assert.strictEqual(latticePoints(), 18224771);
```

## 3

### --description--

$E_a$ is an ellipse with an equation of the form $x^2 + 4y^2 = 4a^2$.

$E_a'$ is the rotated image of $E_a$ by $θ$ degrees counterclockwise around the origin $O(0, 0)$ for $0° &lt; θ &lt; 90°$.

<img class="img-responsive center-block" alt="ellipse E_a and ellipse rotated by θ degrees E_a'" src="https://cdn.freecodecamp.org/curriculum/project-euler/crisscross-ellipses.gif" style="background-color: white; padding: 10px;">

$b$ is the distance to the origin of the two intersection points closest to the origin and $c$ is the distance of the two other intersection points.

We call an ordered triplet ($a$, $b$, $c$) a canonical ellipsoidal triplet if $a$, $b$ and $c$ are positive integers.

For example, (209, 247, 286) is a canonical ellipsoidal triplet.

Let $C(N)$ be the number of distinct canonical ellipsoidal triplets ($a$, $b$, $c$) for $a ≤ N$.

It can be verified that $C({10}^3) = 7$, $C({10}^4) = 106$ and $C({10}^6) = 11\\,845$.

Find $C({10}^{17})$.

### --tests--

`crisscrossEllipses()` should return `1199215615081353`.

```js
assert.strictEqual(crisscrossEllipses(), 1199215615081353);
```

## 4

### --description--

We wish to tile a rectangle whose length is twice its width.

Let $T(0)$ be the tiling consisting of a single rectangle.

For $n > 0$, let $T(n)$ be obtained from $T( n- 1)$ by replacing all tiles in the following manner:

<img class="img-responsive center-block" alt="obtaining T(n) from T(n - 1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-1.png" style="background-color: white; padding: 10px;">

The following animation demonstrates the tilings $T(n)$ for $n$ from 0 to 5:

<img class="img-responsive center-block" alt="animation with tilings T(n) for n from 0 to 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-2.gif" style="background-color: white; padding: 10px;">

Let $f(n)$ be the number of points where four tiles meet in $T(n)$. For example, $f(1) = 0$, $f(4) = 82$ and $f({10}^9)\bmod {17}^7 = 126\\,897\\,180$.

Find $f({10}^k)$ for $k = {10}^{18}$, give your answer modulo ${17}^7$.

### --tests--

`rectangularTiling()` should return `237696125`.

```js
assert.strictEqual(rectangularTiling(), 237696125);
```

## 5

### --description--

We are trying to find a hidden number selected from the set of integers {1, 2, ..., $n$} by asking questions. Each number (question) we ask, we get one of three possible answers:

- "Your guess is lower than the hidden number" (and you incur a cost of a), or
- "Your guess is higher than the hidden number" (and you incur a cost of b), or
- "Yes, that's it!" (and the game ends).

Given the value of $n$, $a$, and $b$, an optimal strategy minimizes the total cost <u>for the worst possible case</u>.

For example, if $n = 5$, $a = 2$, and $b = 3$, then we may begin by asking "<strong>2</strong>" as our first question.

If we are told that 2 is higher than the hidden number (for a cost of $b = 3$), then we are sure that "<strong>1</strong>" is the hidden number (for a total cost of <strong><span style="color: blue;">3</span></strong>).

If we are told that 2 is lower than the hidden number (for a cost of $a = 2$), then our next question will be "<strong>4</strong>".

If we are told that 4 is higher than the hidden number (for a cost of $b = 3$), then we are sure that "<strong>3</strong>" is the hidden number (for a total cost of $2 + 3 = \color{blue}{\mathbf{5}}$).

If we are told that 4 is lower than the hidden number (for a cost of $a = 2$), then we are sure that "<strong>5</strong>" is the hidden number (for a total cost of $2 + 2 = \color{blue}{\mathbf{4}}$).

Thus, the worst-case cost achieved by this strategy is <strong><span style="color: red">5</span></strong>. It can also be shown that this is the lowest worst-case cost that can be achieved. So, in fact, we have just described an optimal strategy for the given values of $n$, $a$, and $b$.

Let $C(n, a, b)$ be the worst-case cost achieved by an optimal strategy for the given values of $n$, $a$, and $b$.

Here are a few examples:

$$\begin{align}
  & C(5, 2, 3) = 5 \\\\
  & C(500, \sqrt{2}, \sqrt{3}) = 13.220\\,731\\,97\ldots \\\\
  & C(20\\,000, 5, 7) = 82 \\\\
  & C(2\\,000\\,000, √5, √7) = 49.637\\,559\\,55\ldots \\\\
\end{align}$$

Let $F_k$ be the Fibonacci numbers: $F_k = F_{k - 1} + F_{k - 2}$ with base cases $F_1 = F_2 = 1$.

Find $\displaystyle\sum_{k = 1}^{30} C({10}^{12}, \sqrt{k}, \sqrt{F_k})$, and give your answer rounded to 8 decimal places behind the decimal point.

### --tests--

`guessingGame()` should return `36813.12757207`.

```js
assert.strictEqual(guessingGame(), 36813.12757207);
```

## 6

### --description--

If we calculate $a^2\bmod 6$ for $0 ≤ a ≤ 5$ we get: 0, 1, 4, 3, 4, 1.

The largest value of a such that $a^2 ≡ a\bmod 6$ is $4$.

Let's call $M(n)$ the largest value of $a &lt; n$ such that $a^2 ≡ a (\text{mod } n)$. So $M(6) = 4$.

Find $\sum M(n)$ for $1 ≤ n ≤ {10}^7$.

### --tests--

`idempotents()` should return `39782849136421`.

```js
assert.strictEqual(idempotents(), 39782849136421);
```

## 7

### --description--

Let's call a lattice point ($x$, $y$) inadmissible if $x$, $y$ and $x + y$ are all positive perfect squares.

For example, (9, 16) is inadmissible, while (0, 4), (3, 1) and (9, 4) are not.

Consider a path from point ($x_1$, $y_1$) to point ($x_2$, $y_2$) using only unit steps north or east. Let's call such a path admissible if none of its intermediate points are inadmissible.

Let $P(n)$ be the number of admissible paths from (0, 0) to ($n$, $n$). It can be verified that $P(5) = 252$, $P(16) = 596\\,994\\,440$ and $P(1\\,000)\bmod 1\\,000\\,000\\,007 = 341\\,920\\,854$.

Find $P(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

### --tests--

`admissiblePaths()` should return `299742733`.

```js
assert.strictEqual(admissiblePaths(), 299742733);
```

## 8

### --description--

Let $n$ be a positive integer. Consider nim positions where:

- There are $n$ non-empty piles.
- Each pile has size less than $2^n$.
- No two piles have the same size.

Let $W(n)$ be the number of winning nim positions satisfying the above conditions (a position is winning if the first player has a winning strategy).

For example, $W(1) = 1$, $W(2) = 6$, $W(3) = 168$, $W(5) = 19\\,764\\,360$ and $W(100)\bmod 1\\,000\\,000\\,007 = 384\\,777\\,056$.

Find $W(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

### --tests--

`nimExtreme()` should return `253223948`.

```js
assert.strictEqual(nimExtreme(), 253223948);
```

## 9

### --description--

Let $C$ be the circle with radius $r$, $x^2 + y^2 = r^2$. We choose two points $P(a, b)$ and $Q(-a, c)$ so that the line passing through $P$ and $Q$ is tangent to $C$.

For example, the quadruplet $(r, a, b, c) = (2, 6, 2, -7)$ satisfies this property.

Let $F(R, X)$ be the number of the integer quadruplets $(r, a, b, c)$ with this property, and with $0 &lt; r ≤ R$ and $0 &lt; a ≤ X$.

We can verify that $F(1, 5) = 10$, $F(2, 10) = 52$ and $F(10, 100) = 3384$.

Find $F({10}^8, {10}^9) + F({10}^9, {10}^8)$.

### --tests--

`circleAndTangentLine()` should return `799999783589946600`.

```js
assert.strictEqual(circleAndTangentLine(), 799999783589946600);
```

## 10

### --description--

Let $n$ be a positive integer. Suppose there are stations at the coordinates $(x, y) = (2^i\bmod n, 3^i\bmod n)$ for $0 ≤ i ≤ 2n$. We will consider stations with the same coordinates as the same station.

We wish to form a path from (0, 0) to ($n$, $n$) such that the $x$ and $y$ coordinates never decrease.

Let $S(n)$ be the maximum number of stations such a path can pass through.

For example, if $n = 22$, there are 11 distinct stations, and a valid path can pass through at most 5 stations. Therefore, $S(22) = 5$. The case is illustrated below, with an example of an optimal path:

<img class="img-responsive center-block" alt="valid path passing through 5 stations, for n = 22, with 11 distinct stations" src="https://cdn.freecodecamp.org/curriculum/project-euler/uphill-paths.png" style="background-color: white; padding: 10px;">

It can also be verified that $S(123) = 14$ and $S(10\\,000) = 48$.

Find $\sum S(k^5)$ for $1 ≤ k ≤ 30$.

### --tests--

`uphillPaths()` should return `9936352`.

```js
assert.strictEqual(uphillPaths(), 9936352);
```

## 11

### --description--

For integers $m$, $n$ ($0 ≤ n &lt; m$), let $L(m, n)$ be an $m×m$ grid with the top-right $n×n$ grid removed.

For example, $L(5, 3)$ looks like this:

<img class="img-responsive center-block" alt="5x5 grid, with removed 3x3 grid from the top-right" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-1.png" style="background-color: white; padding: 10px;">

We want to number each cell of $L(m, n)$ with consecutive integers 1, 2, 3, ... such that the number in every cell is smaller than the number below it and to the left of it.

For example, here are two valid numberings of $L(5, 3)$:

<img class="img-responsive center-block" alt="two valid numberings of L(5, 3)" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-2.png" style="background-color: white; padding: 10px;">

Let $LC(m, n)$ be the number of valid numberings of $L(m, n)$. It can be verified that $LC(3, 0) = 42$, $LC(5, 3) = 250\\,250$, $LC(6, 3) = 406\\,029\\,023\\,400$ and $LC(10, 5)\bmod 76\\,543\\,217 = 61\\,251\\,715$.

Find $LC(10\\,000, 5\\,000)\bmod 76\\,543\\,217$.

### --tests--

`gnomonNumbering()` should return `38788800`.

```js
assert.strictEqual(gnomonNumbering(), 38788800);
```

## 12

### --description--

We say that a $d$-digit positive number (no leading zeros) is a one-child number if exactly one of its sub-strings is divisible by $d$.

For example, 5671 is a 4-digit one-child number. Among all its sub-strings 5, 6, 7, 1, 56, 67, 71, 567, 671 and 5671, only 56 is divisible by 4.

Similarly, 104 is a 3-digit one-child number because only 0 is divisible by 3. 1132451 is a 7-digit one-child number because only 245 is divisible by 7.

Let $F(N)$ be the number of the one-child numbers less than $N$. We can verify that $F(10) = 9$, $F({10}^3) = 389$ and $F({10}^7) = 277\\,674$.

Find $F({10}^{19})$.

### --tests--

`oneChildNumbers()` should return `3079418648040719`.

```js
assert.strictEqual(oneChildNumbers(), 3079418648040719);
```

## 13

### --description--

6174 is a remarkable number; if we sort its digits in increasing order and subtract that number from the number you get when you sort the digits in decreasing order, we get $7641 - 1467 = 6174$.

Even more remarkable is that if we start from any 4 digit number and repeat this process of sorting and subtracting, we'll eventually end up with 6174 or immediately with 0 if all digits are equal.

This also works with numbers that have less than 4 digits if we pad the number with leading zeroes until we have 4 digits.

E.g. let's start with the number 0837:

$$\begin{align}
  & 8730 - 0378 = 8352 \\\\
  & 8532 - 2358 = 6174
\end{align}$$

6174 is called the Kaprekar constant. The process of sorting and subtracting and repeating this until either 0 or the Kaprekar constant is reached is called the Kaprekar routine.

We can consider the Kaprekar routine for other bases and number of digits. Unfortunately, it is not guaranteed a Kaprekar constant exists in all cases; either the routine can end up in a cycle for some input numbers or the constant the routine arrives at can be different for different input numbers. However, it can be shown that for 5 digits and a base $b = 6t + 3 ≠ 9$, a Kaprekar constant exists.

E.g.
base 15: ${(10, 4, 14, 9, 5)}\_{15}$
base 21: $(14, 6, 20, 13, 7)\_{21}$

Define $C_b$ to be the Kaprekar constant in base $b$ for 5 digits. Define the function $sb(i)$ to be:

- 0 if $i = C_b$ or if $i$ written in base $b$ consists of 5 identical digits
- the number of iterations it takes the Kaprekar routine in base $b$ to arrive at $C_b$, otherwise

Note that we can define $sb(i)$ for all integers $i &lt; b^5$. If $i$ written in base $b$ takes less than 5 digits, the number is padded with leading zero digits until we have 5 digits before applying the Kaprekar routine.

Define $S(b)$ as the sum of $sb(i)$ for $0 &lt; i &lt; b^5$. E.g. $S(15) = 5\\,274\\,369$ $S(111) = 400\\,668\\,930\\,299$

Find the sum of $S(6k + 3)$ for $2 ≤ k ≤ 300$. Give the last 18 digits as your answer.

### --tests--

`kaprekarConstant()` should return `552506775824935500`.

```js
assert.strictEqual(kaprekarConstant(), 552506775824935500);
```

## 14

### --description--

A set of lattice points $S$ is called a titanic set if there exists a line passing through exactly two points in $S$.

An example of a titanic set is $S = \\{(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)\\}$, where the line passing through (0, 1) and (2, 0) does not pass through any other point in $S$.

On the other hand, the set {(0, 0), (1, 1), (2, 2), (4, 4)} is not a titanic set since the line passing through any two points in the set also passes through the other two.

For any positive integer $N$, let $T(N)$ be the number of titanic sets $S$ whose every point ($x$, $y$) satisfies $0 ≤ x$, $y ≤ N$. It can be verified that $T(1) = 11$, $T(2) = 494$, $T(4) = 33\\,554\\,178$, $T(111)\bmod {10}^8 = 13\\,500\\,401$ and $T({10}^5)\bmod {10}^8 = 63\\,259\\,062$.

Find $T({10}^{11})\bmod {10}^8$.

### --tests--

`titanicSets()` should return `55859742`.

```js
assert.strictEqual(titanicSets(), 55859742);
```

## 15

### --description--

A row of $n$ squares contains a frog in the leftmost square. By successive jumps the frog goes to the rightmost square and then back to the leftmost square. On the outward trip he jumps one, two or three squares to the right, and on the homeward trip he jumps to the left in a similar manner. He cannot jump outside the squares. He repeats the round-trip travel $m$ times.

Let $F(m, n)$ be the number of the ways the frog can travel so that at most one square remains unvisited.

For example, $F(1, 3) = 4$, $F(1, 4) = 15$, $F(1, 5) = 46$, $F(2, 3) = 16$ and $F(2, 100)\bmod {10}^9 = 429\\,619\\,151$.

Find the last 9 digits of $F(10, {10}^{12})$.

### --tests--

`frogsTrip()` should return `898082747`.

```js
assert.strictEqual(frogsTrip(), 898082747);
```

## 16

### --description--

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

$$\begin{align}
  & \frac{1}{2}  = 0.5 \\\\
  & \frac{1}{3}  = 0.(3) \\\\
  & \frac{1}{4}  = 0.25 \\\\
  & \frac{1}{5}  = 0.2 \\\\
  & \frac{1}{6}  = 0.1(6) \\\\
  & \frac{1}{7}  = 0.(142857) \\\\
  & \frac{1}{8}  = 0.125 \\\\
  & \frac{1}{9}  = 0.(1) \\\\
  & \frac{1}{10} = 0.1 \\\\
\end{align}$$

Where $0.1(6)$ means $0.166666\ldots$, and has a 1-digit recurring cycle. It can be seen that $\frac{1}{7}$ has a 6-digit recurring cycle.

Unit fractions whose denominator has no other prime factors than 2 and/or 5 are not considered to have a recurring cycle. We define the length of the recurring cycle of those unit fractions as 0.

Let $L(n)$ denote the length of the recurring cycle of $\frac{1}{n}$. You are given that $\sum L(n)$ for $3 ≤ n ≤ 1\\,000\\,000$ equals $55\\,535\\,191\\,115$.

Find $\sum L(n)$ for $3 ≤ n ≤ 100\\,000\\,000$.

### --tests--

`reciprocalCyclesTwo()` should return `446572970925740`.

```js
assert.strictEqual(reciprocalCyclesTwo(), 446572970925740);
```

## 17

### --description--

Let $n$ be a positive integer. An integer triple ($a$, $b$, $c$) is called a factorisation triple of $n$ if:

- $1 ≤ a ≤ b ≤ c$
- $a \times b \times c = n$.

Define $f(n)$ to be $a + b + c$ for the factorisation triple ($a$, $b$, $c$) of $n$ which minimises $\frac{c}{a}$. One can show that this triple is unique.

For example, $f(165) = 19$, $f(100\\,100) = 142$ and $f(20!) = 4\\,034\\,872$.

Find $f(43!)$.

### --tests--

`factorisationTriples()` should return `1177163565297340400`.

```js
assert.strictEqual(factorisationTriples(), 1177163565297340400);
```

## 18

### --description--

The look and say sequence goes 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...

The sequence starts with 1 and all other members are obtained by describing the previous member in terms of consecutive digits.

It helps to do this out loud:

1 is 'one one' $→ 11$

11 is 'two ones' $→ 21$

21 is 'one two and one one' $→ 1211$

1211 is 'one one, one two and two ones' $→ 111221$

111221 is 'three ones, two twos and one one' $→ 312211$

...

Define $A(n)$, $B(n)$ and $C(n)$ as the number of ones, twos and threes in the $n$'th element of the sequence respectively. One can verify that $A(40) = 31\\,254$, $B(40) = 20\\,259$ and $C(40) = 11\\,625$.

Find $A(n)$, $B(n)$ and $C(n)$ for $n = {10}^{12}$. Give your answer modulo $2^{30}$ as a string and separate your values for $A$, $B$ and $C$ by a comma. E.g. for $n = 40$ the answer would be `31254,20259,11625`.

### --tests--

`lookAndSaySequence()` should return a string.

```js
assert(typeof lookAndSaySequence() === 'string');
```


`lookAndSaySequence()` should return the string `998567458,1046245404,43363922`.

```js
assert.strictEqual(lookAndSaySequence(), '998567458,1046245404,43363922');
```

## 19

### --description--

A positive integer matrix is a matrix whose elements are all positive integers.

Some positive integer matrices can be expressed as a square of a positive integer matrix in two different ways. Here is an example:

$$\begin{pmatrix}
  40 & 12 \\\\
  48 & 40
\end{pmatrix} =
{\begin{pmatrix}
  2 & 3 \\\\
 12 & 2
\end{pmatrix}}^2 =
{\begin{pmatrix}
  6 & 1 \\\\
  4 & 6
\end{pmatrix}}^2$$

We define $F(N)$ as the number of the 2x2 positive integer matrices which have a trace less than N and which can be expressed as a square of a positive integer matrix in two different ways.

We can verify that $F(50) = 7$ and $F(1000) = 1019$.

Find $F({10}^7)$.

### --tests--

`positiveIntegerMatrix()` should return `145159332`.

```js
assert.strictEqual(positiveIntegerMatrix(), 145159332);
```

## 20

### --description--

Numbers of the form $n^{15} + 1$ are composite for every integer $n > 1$.

For positive integers $n$ and $m$ let $s(n, m)$ be defined as the sum of the distinct prime factors of $n^{15} + 1$ not exceeding $m$.

E.g. $2^{15} + 1 = 3 × 3 × 11 × 331$.

So $s(2, 10) = 3$ and $s(2, 1000) = 3 + 11 + 331 = 345$.

Also ${10}^{15} + 1 = 7 × 11 × 13 × 211 × 241 × 2161 × 9091$.

So $s(10, 100) = 31$ and $s(10, 1000) = 483$.

Find $\sum s(n, {10}^8)$ for $1 ≤ n ≤ {10}^{11}$.

### --tests--

`primeFactorsOfN15Plus1()` should return `2304215802083466200`.

```js
assert.strictEqual(primeFactorsOfN15Plus1(), 2304215802083466200);
```

## 21

### --description--

Let $H$ be the hyperbola defined by the equation $12x^2 + 7xy - 12y^2 = 625$.

Next, define $X$ as the point (7, 1). It can be seen that $X$ is in $H$.

Now we define a sequence of points in $H, \\{P_i : i ≥ 1\\}$, as:

- $P_1 = (13, \frac{61}{4})$.
- $P_2 = (\frac{-43}{6}, -4)$.
- For $i > 2$, $P_i$ is the unique point in $H$ that is different from $P_{i - 1}$ and such that line $P_iP_{i - 1}$ is parallel to line $P_{i - 2}X$. It can be shown that $P_i$ is well-defined, and that its coordinates are always rational.

<img class="img-responsive center-block" alt="animation showing defining points P_1 to P_6" src="https://cdn.freecodecamp.org/curriculum/project-euler/sequence-of-points-on-a-hyperbola.gif" style="background-color: white; padding: 10px;">

You are given that $P_3 = (\frac{-19}{2}, \frac{-229}{24})$, $P_4 = (\frac{1267}{144}, \frac{-37}{12})$ and $P_7 = (\frac{17\\,194\\,218\\,091}{143\\,327\\,232}, \frac{274\\,748\\,766\\,781}{1\\,719\\,926\\,784})$.

Find $P_n$ for $n = {11}^{14}$ in the following format: If $P_n = (\frac{a}{b}, \frac{c}{d})$ where the fractions are in lowest terms and the denominators are positive, then the answer is $(a + b + c + d)\bmod 1\\,000\\,000\\,007$.

For $n = 7$, the answer would have been: $806\\,236\\,837$.

### --tests--

`sequenceOfPointsOnHyperbola()` should return `92060460`.

```js
assert.strictEqual(sequenceOfPointsOnHyperbola(), 92060460);
```

## 22

### --description--

Let $n$ be a positive integer.

A 6-sided die is thrown $n$ times. Let $c$ be the number of pairs of consecutive throws that give the same value.

For example, if $n = 7$ and the values of the die throws are (1, 1, 5, 6, 6, 6, 3), then the following pairs of consecutive throws give the same value:

$$\begin{align}
  & (\underline{1}, \underline{1}, 5, 6, 6, 6, 3) \\\\
  & (1, 1, 5, \underline{6}, \underline{6}, 6, 3) \\\\
  & (1, 1, 5, 6, \underline{6}, \underline{6}, 3)
\end{align}$$

Therefore, $c = 3$ for (1, 1, 5, 6, 6, 6, 3).

Define $C(n)$ as the number of outcomes of throwing a 6-sided die $n$ times such that $c$ does not exceed $π(n)$.<sup>1</sup>

For example, $C(3) = 216$, $C(4) = 1290$, $C(11) = 361\\,912\\,500$ and $C(24) = 4\\,727\\,547\\,363\\,281\\,250\\,000$.

Define $S(L)$ as $\sum C(n)$ for $1 ≤ n ≤ L$.

For example, $S(50)\bmod 1\\,000\\,000\\,007 = 832\\,833\\,871$.

Find $S(50\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

<sup>1</sup> $π$ denotes the prime-counting function, i.e. $π(n)$ is the number of primes $≤ n$.

### --tests--

`consecutiveDieThrows()` should return `653972374`.

```js
assert.strictEqual(consecutiveDieThrows(), 653972374);
```

## 23

### --description--

<img class="img-responsive center-block" alt="kakuro example" src="https://cdn.freecodecamp.org/curriculum/project-euler/kakuro.gif" style="background-color: white; padding: 10px;">

The above is an example of a cryptic kakuro (also known as cross sums, or even sums cross) puzzle, with its final solution on the right. (The common rules of kakuro puzzles can be found easily on numerous internet sites. Other related information can also be currently found at krazydad.com whose author has provided the puzzle data for this challenge.)

The `testPuzzles` array contains the description of 200 such puzzles, a mix of 5x5 and 6x6 types. The first puzzle in the file is the above example which is coded as string as follows:

`6,X,X,(vCC),(vI),X,X,X,(hH),B,O,(vCA),(vJE),X,(hFE,vD),O,O,O,O,(hA),O,I,(hJC,vB),O,O,(hJC),H,O,O,O,X,X,X,(hJE),O,O,X`

The first character is a numerical digit indicating the size of the information grid. It would be either a 6 (for a 5x5 kakuro puzzle) or a 7 (for a 6x6 puzzle) followed by a comma (,). The extra top line and left column are needed to insert information.

The content of each cell is then described and followed by a comma, going left to right and starting with the top line.

`X` = Gray cell, not required to be filled by a digit.

`O` (upper case letter)= White empty cell to be filled by a digit.

`A` = Or any one of the upper case letters from A to J to be replaced by its equivalent digit in the solved puzzle.

`( )` = Location of the encrypted sums. Horizontal sums are preceded by a lower case "h" and vertical sums are preceded by a lower case "v". Those are followed by one or two upper case letters depending if the sum is a single digit or double digit one. For double digit sums, the first letter would be for the "tens" and the second one for the "units". When the cell must contain information for both a horizontal and a vertical sum, the first one is always for the horizontal sum and the two are separated by a comma within the same set of brackets, ex.: (hFE,vD). Each set of brackets is also immediately followed by a comma.

The description of the last cell is followed by a Carriage Return/Line Feed (CRLF) instead of a comma.

The required answer to each puzzle is based on the value of each letter necessary to arrive at the solution and according to the alphabetical order. As indicated under the example puzzle, its answer would be 8426039571. At least 9 out of the 10 encrypting letters are always part of the problem description. When only 9 are given, the missing one must be assigned the remaining digit.

You are given that the sum of the answers for the first 10 puzzles in `testPuzzles` is 64414157580.

Find the sum of the answers for `puzzles` array.

### --tests--

`kakuro(testPuzzles)` should return `1059760019628`.

```js
assert.strictEqual(kakuro(_testPuzzles), 1059760019628);
```

## 24

### --description--

Two positive numbers $A$ and $B$ are said to be connected (denoted by "$A ↔ B$") if one of these conditions holds:

1. $A$ and $B$ have the same length and differ in exactly one digit; for example, $123 ↔ 173$.
2. Adding one digit to the left of $A$ (or $B$) makes $B$ (or $A$); for example, $23 ↔ 223$ and $123 ↔ 23$.

We call a prime $P$ a 2's relative if there exists a chain of connected primes between 2 and $P$ and no prime in the chain exceeds $P$.

For example, 127 is a 2's relative. One of the possible chains is shown below:

$$2 ↔ 3 ↔ 13 ↔ 113 ↔ 103 ↔ 107 ↔ 127$$

However, 11 and 103 are not 2's relatives.

Let $F(N)$ be the sum of the primes $≤ N$ which are not 2's relatives. We can verify that $F({10}^3) = 431$ and $F({10}^4) = 78\\,728$.

Find $F({10}^7)$.

### --tests--

`primeConnection()` should return `46479497324`.

```js
assert.strictEqual(primeConnection(), 46479497324);
```

## 25

### --description--

Consider an infinite row of boxes. Some of the boxes contain a ball. For example, an initial configuration of 2 consecutive occupied boxes followed by 2 empty boxes, 2 occupied boxes, 1 empty box, and 2 occupied boxes can be denoted by the sequence (2, 2, 2, 1, 2), in which the number of consecutive occupied and empty boxes appear alternately.

A turn consists of moving each ball exactly once according to the following rule: Transfer the leftmost ball which has not been moved to the nearest empty box to its right.

After one turn the sequence (2, 2, 2, 1, 2) becomes (2, 2, 1, 2, 3) as can be seen below; note that we begin the new sequence starting at the first occupied box.

<img class="img-responsive center-block" alt="animation showing one complete turn from (2, 2, 2, 1, 2) to (2, 2, 1, 2, 3)" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-1.gif" style="background-color: white; padding: 10px;">

A system like this is called a Box-Ball System or BBS for short.

It can be shown that after a sufficient number of turns, the system evolves to a state where the consecutive numbers of occupied boxes is invariant. In the example below, the consecutive numbers of occupied boxes evolves to [1, 2, 3]; we shall call this the final state.

<img class="img-responsive center-block" alt="four turns from occupied boxes [2, 2, 2] to final state [1, 2, 3]" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-2.gif" style="background-color: white; padding: 10px;">

We define the sequence $\\{t_i\\}$:

$$\begin{align}
  & s_0 = 290\\,797 \\\\
  & s_{k + 1} = {s_k}^2\bmod 50\\,515\\,093 \\\\
  & t_k = (s_k\bmod 64) + 1
\end{align}$$

Starting from the initial configuration $(t_0, t_1, \ldots, t_{10})$, the final state becomes [1, 3, 10, 24, 51, 75].

Starting from the initial configuration $(t_0, t_1, \ldots, t_{10\\,000\\,000})$, find the final state.

Give as your answer the sum of the squares of the elements of the final state. For example, if the final state is [1, 2, 3] then $14 (= 1^2 + 2^2 + 3^2)$ is your answer.

### --tests--

`boxBallSystem()` should return `31591886008`.

```js
assert.strictEqual(boxBallSystem(), 31591886008);
```

## 26

### --description--

A sequence of integers $S = \\{s_i\\}$ is called an $n$-sequence if it has $n$ elements and each element $s_i$ satisfies $1 ≤ s_i ≤ n$. Thus there are $n^n$ distinct $n$-sequences in total.

For example, the sequence $S = \\{1, 5, 5, 10, 7, 7, 7, 2, 3, 7\\}$ is a 10-sequence.

For any sequence $S$, let $L(S)$ be the length of the longest contiguous subsequence of $S$ with the same value. For example, for the given sequence $S$ above, $L(S) = 3$, because of the three consecutive 7's.

Let $f(n) = \sum L(S)$ for all $n$-sequences $S$.

For example, $f(3) = 45$, $f(7) = 1\\,403\\,689$ and $f(11) = 481\\,496\\,895\\,121$.

Find $f(7\\,500\\,000)\bmod 1\\,000\\,000\\,009$.

### --tests--

`nSequences()` should return `97138867`.

```js
assert.strictEqual(nSequences(), 97138867);
```

## 27

### --description--

Let $a$, $b$ and $c$ be positive numbers.

Let $W$, $X$, $Y$, $Z$ be four collinear points where $|WX| = a$, $|XY| = b$, $|YZ| = c$ and $|WZ| = a + b + c$.

Let $C_{\text{in}}$ be the circle having the diameter $XY$.

Let $C_{\text{out}}$ be the circle having the diameter $WZ$.

The triplet ($a$, $b$, $c$) is called a *necklace triplet* if you can place $k ≥ 3$ distinct circles $C_1, C_2, \ldots, C_k$ such that:

- $C_i$ has no common interior points with any $C_j$ for $1 ≤ i$, $j ≤ k$ and $i ≠ j$,
- $C_i$ is tangent to both $C_{\text{in}}$ and $C_{\text{out}}$ for $1 ≤ i ≤ k$,
- $C_i$ is tangent to $C_{i + 1}$ for $1 ≤ i &lt; k$, and
- $C_k$ is tangent to $C_1$.

For example, (5, 5, 5) and (4, 3, 21) are necklace triplets, while it can be shown that (2, 2, 5) is not.

<img class="img-responsive center-block" alt="a visual representation of a necklace triplet" src="https://cdn.freecodecamp.org/curriculum/project-euler/necklace-of-circles.png" style="background-color: white; padding: 10px;">

Let $T(n)$ be the number of necklace triplets $(a, b, c)$ such that $a$, $b$ and $c$ are positive integers, and $b ≤ n$. For example, $T(1) = 9$, $T(20) = 732$ and $T(3\\,000) = 438\\,106$.

Find $T(1\\,000\\,000\\,000)$.

### --tests--

`necklace(1000000000)` should return `747215561862`.

```js
assert.strictEqual(necklace(1000000000), 747215561862);
```

## 28

### --description--

A unitary divisor $d$ of a number $n$ is a divisor of $n$ that has the property $gcd(d, \frac{n}{d}) = 1$.

The unitary divisors of $4! = 24$ are 1, 3, 8 and 24.

The sum of their squares is $12 + 32 + 82 + 242 = 650$.

Let $S(n)$ represent the sum of the squares of the unitary divisors of $n$. Thus $S(4!) = 650$.

Find $S(100\\,000\\,000!)$ modulo $1\\,000\\,000\\,009$.

### --tests--

`sumSquaresOfUnitaryDivisors()` should return `98792821`.

```js
assert.strictEqual(sumSquaresOfUnitaryDivisors(), 98792821);
```

## 29

### --description--

$N$ disks are placed in a row, indexed 1 to $N$ from left to right.

Each disk has a black side and white side. Initially all disks show their white side.

At each turn, two, not necessarily distinct, integers $A$ and $B$ between 1 and $N$ (inclusive) are chosen uniformly at random. All disks with an index from $A$ to $B$ (inclusive) are flipped.

The following example shows the case $N = 8$. At the first turn $A = 5$ and $B = 2$, and at the second turn $A = 4$ and $B = 6$.

<img class="img-responsive center-block" alt="example for N = 8, with first turn A = 5 and B = 2, and second turn A = 4 and B = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/range-flips.gif" style="background-color: white; padding: 10px;">

Let $E(N, M)$ be the expected number of disks that show their white side after $M$ turns. We can verify that $E(3, 1) = \frac{10}{9}$, $E(3, 2) = \frac{5}{3}$, $E(10, 4) ≈ 5.157$ and $E(100, 10) ≈ 51.893$.

Find $E({10}^{10}, 4000)$. Give your answer rounded to 2 decimal places behind the decimal point.

### --tests--

`rangeFlips()` should return `5000624921.38`.

```js
assert.strictEqual(rangeFlips(), 5000624921.38);
```

## 30

### --description--

Fred the farmer arranges to have a new storage silo installed on his farm and having an obsession for all things square he is absolutely devastated when he discovers that it is circular. Quentin, the representative from the company that installed the silo, explains that they only manufacture cylindrical silos, but he points out that it is resting on a square base. Fred is not amused and insists that it is removed from his property.

Quick thinking Quentin explains that when granular materials are delivered from above a conical slope is formed and the natural angle made with the horizontal is called the angle of repose. For example if the angle of repose, $\alpha = 30°$, and grain is delivered at the centre of the silo then a perfect cone will form towards the top of the cylinder. In the case of this silo, which has a diameter of 6m, the amount of space wasted would be approximately 32.648388556 m<sup>3</sup>. However, if grain is delivered at a point on the top which has a horizontal distance of $x$ metres from the centre then a cone with a strangely curved and sloping base is formed. He shows Fred a picture.

<img class="img-responsive center-block" alt="image presenting forming of the perfect cone towards the top of the cylinder" src="https://cdn.freecodecamp.org/curriculum/project-euler/square-space-silo.png" style="background-color: white; padding: 10px;">

We shall let the amount of space wasted in cubic metres be given by $V(x)$. If $x = 1.114\\,785\\,284$, which happens to have three squared decimal places, then the amount of space wasted, $V(1.114\\,785\\,284) \approx 36$. Given the range of possible solutions to this problem there is exactly one other option: $V(2.511\\,167\\,869) \approx 49$. It would be like knowing that the square is king of the silo, sitting in splendid glory on top of your grain.

Fred's eyes light up with delight at this elegant resolution, but on closer inspection of Quentin's drawings and calculations his happiness turns to despondency once more. Fred points out to Quentin that it's the radius of the silo that is 6 metres, not the diameter, and the angle of repose for his grain is 40­°. However, if Quentin can find a set of solutions for this particular silo then he will be more than happy to keep it.

If Quick thinking Quentin is to satisfy frustratingly fussy Fred the farmer's appetite for all things square then determine the values of $x$ for all possible square space wastage options and calculate $\sum x$ correct to 9 decimal places.

### --tests--

`squareSpaceSilo()` should return `23.386029052`.

```js
assert.strictEqual(squareSpaceSilo(), 23.386029052);
```

## 31

### --description--

Let $S(n, m) = \sum φ(n × i)$ for $1 ≤ i ≤ m$. ($φ$ is Euler's totient function)

You are given that $S(510\\,510, {10}^6) = 45\\,480\\,596\\,821\\,125\\,120$.

Find $S(510\\,510, {10}^{11})$. Give the last 9 digits of your answer.

### --tests--

`totientSum()` should return `754862080`.

```js
assert.strictEqual(totientSum(), 754862080);
```

## 32

### --description--

Let $E(x_0, y_0)$ be the number of steps it takes to determine the greatest common divisor of $x_0$ and $y_0$ with Euclid's algorithm. More formally:

$$\begin{align}
  & x_1 = y_0, y_1 = x_0\bmod y_0 \\\\
  & x_n = y_{n - 1}, y_n = x_{n - 1}\bmod y_{n - 1}
\end{align}$$

$E(x_0, y_0)$ is the smallest $n$ such that $y_n = 0$.

We have $E(1, 1) = 1$, $E(10, 6) = 3$ and $E(6, 10) = 4$.

Define $S(N)$ as the sum of $E(x, y)$ for $1 ≤ x$, $y ≤ N$.

We have $S(1) = 1$, $S(10) = 221$ and $S(100) = 39\\,826$.

Find $S(5 \times {10}^6)$.

### --tests--

`stepsInEuclidsAlgorithm()` should return `326624372659664`.

```js
assert.strictEqual(stepsInEuclidsAlgorithm(), 326624372659664);
```

## 33

### --description--

Recall that a graph is a collection of vertices and edges connecting the vertices, and that two vertices connected by an edge are called adjacent.

Graphs can be embedded in Euclidean space by associating each vertex with a point in the Euclidean space.

A flexible graph is an embedding of a graph where it is possible to move one or more vertices continuously so that the distance between at least two nonadjacent vertices is altered while the distances between each pair of adjacent vertices is kept constant.

A rigid graph is an embedding of a graph which is not flexible.

Informally, a graph is rigid if by replacing the vertices with fully rotating hinges and the edges with rods that are unbending and inelastic, no parts of the graph can be moved independently from the rest of the graph.

The grid graphs embedded in the Euclidean plane are not rigid, as the following animation demonstrates:

<img class="img-responsive center-block" alt="animation showing grid graphs are not rigid in Euclidean plane" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-1.gif" style="background-color: white; padding: 10px;">

However, one can make them rigid by adding diagonal edges to the cells. For example, for the 2x3 grid graph, there are 19 ways to make the graph rigid:

<img class="img-responsive center-block" alt="19 ways to make 2x3 grid graph rigid" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-2.png" style="background-color: white; padding: 10px;">

Note that for the purposes of this problem, we do not consider changing the orientation of a diagonal edge or adding both diagonal edges to a cell as a different way of making a grid graph rigid.

Let $R(m, n)$ be the number of ways to make the $m × n$ grid graph rigid.

E.g. $R(2, 3) = 19$ and $R(5, 5) = 23\\,679\\,901$.

Define $S(N)$ as $\sum R(i, j)$ for $1 ≤ i$, $j ≤ N$.

E.g. $S(5) = 25\\,021\\,721$.

Find $S(100)$, give your answer modulo $1\\,000\\,000\\,033$.

### --tests--

`rigidGraphs()` should return `863253606`.

```js
assert.strictEqual(rigidGraphs(), 863253606);
```

## 34

### --description--

The Fibonacci numbers $\\{f_n, n ≥ 0\\}$ are defined recursively as $f_n = f_{n - 1} + f_{n - 2}$ with base cases $f_0 = 0$ and $f_1 = 1$.

Define the polynomials $\\{F_n, n ≥ 0\\}$ as $F_n(x) = \displaystyle\sum_{i = 0}^n f_ix^i$.

For example, $F_7(x) = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7$, and $F_7(11) = 268\\,357\\,683$.

Let $n = {10}^{15}$. Find the sum $\displaystyle\sum_{x = 0}^{100} F_n(x)$ and give your answer modulo $1\\,307\\,674\\,368\\,000 \\, (= 15!)$.

### --tests--

`polynomialsOfFibonacciNumbers()` should return `252541322550`.

```js
assert.strictEqual(polynomialsOfFibonacciNumbers(), 252541322550);
```

## 35

### --description--

Julie proposes the following wager to her sister Louise.

She suggests they play a game of chance to determine who will wash the dishes.

For this game, they shall use a generator of independent random numbers uniformly distributed between 0 and 1.

The game starts with $S = 0$.

The first player, Louise, adds to $S$ different random numbers from the generator until $S > 1$ and records her last random number '$x$'.

The second player, Julie, continues adding to $S$ different random numbers from the generator until $S > 2$ and records her last random number '$y$'.

The player with the highest number wins and the loser washes the dishes, i.e. if $y > x$ the second player wins.

For example, if the first player draws 0.62 and 0.44, the first player turn ends since $0.62 + 0.44 > 1$ and $x = 0.44$. If the second players draws 0.1, 0.27 and 0.91, the second player turn ends since $0.62 + 0.44 + 0.1 + 0.27 + 0.91 > 2$ and $y = 0.91$. Since $y > x$, the second player wins.

Louise thinks about it for a second, and objects: "That's not fair".

What is the probability that the second player wins? Give your answer rounded to 10 places behind the decimal point in the form 0.abcdefghij

### --tests--

`unfairWager()` should return `0.5276662759`.

```js
assert.strictEqual(unfairWager(), 0.5276662759);
```

## 36

### --description--

When we calculate $8^n$ modulo 11 for $n = 0$ to 9 we get: 1, 8, 9, 6, 4, 10, 3, 2, 5, 7.

As we see all possible values from 1 to 10 occur. So 8 is a primitive root of 11.

But there is more:

If we take a closer look we see:

$$\begin{align}
  & 1 + 8 = 9 \\\\
  & 8 + 9 = 17 ≡ 6\bmod 11 \\\\
  & 9 + 6 = 15 ≡ 4\bmod 11 \\\\
  & 6 + 4 = 10 \\\\
  & 4 + 10 = 14 ≡ 3\bmod 11 \\\\
  & 10 + 3 = 13 ≡ 2\bmod 11 \\\\
  & 3 + 2 = 5 \\\\
  & 2 + 5 = 7 \\\\
  & 5 + 7 = 12 ≡ 1\bmod 11.
\end{align}$$

So the powers of 8 mod 11 are cyclic with period 10, and $8^n + 8^{n + 1} ≡ 8^{n + 2} (\text{mod } 11)$. 8 is called a Fibonacci primitive root of 11.

Not every prime has a Fibonacci primitive root. There are 323 primes less than 10000 with one or more Fibonacci primitive roots and the sum of these primes is 1480491.

Find the sum of the primes less than $100\\,000\\,000$ with at least one Fibonacci primitive root.

### --tests--

`fibonacciPrimitiveRoots()` should return `74204709657207`.

```js
assert.strictEqual(fibonacciPrimitiveRoots(), 74204709657207);
```

## 37

### --description--

For an $n$-tuple of integers $t = (a_1, \ldots, a_n)$, let $(x_1, \ldots, x_n)$ be the solutions of the polynomial equation $x^n + a_1x^{n - 1} + a_2x^{n - 2} + \ldots + a_{n - 1}x + a_n = 0$.

Consider the following two conditions:

- $x_1, \ldots, x_n$ are all real.
- If $x_1, ..., x_n$ are sorted, $⌊x_i⌋ = i$ for $1 ≤ i ≤ n$. ($⌊·⌋:$ floor function.)

In the case of $n = 4$, there are 12 $n$-tuples of integers which satisfy both conditions.

We define $S(t)$ as the sum of the absolute values of the integers in $t$.

For $n = 4$ we can verify that $\sum S(t) = 2087$ for all $n$-tuples $t$ which satisfy both conditions.

Find $\sum S(t)$ for $n = 7$.

### --tests--

`polynomialIntegerPart()` should return `2046409616809`.

```js
assert.strictEqual(polynomialIntegerPart(), 2046409616809);
```

## 38

### --description--

Let $d(k)$ be the sum of all divisors of $k$.

We define the function $S(N) = \sum_{i = 1}^N \sum_{j = 1}^N d(i \times j)$.

For example, $S(3) = d(1) + d(2) + d(3) + d(2) + d(4) + d(6) + d(3) + d(6) + d(9) = 59$.

You are given that $S({10}^3) = 563\\,576\\,517\\,282$ and $S({10}^5)\bmod {10}^9 = 215\\,766\\,508$.

Find $S({10}^{11})\bmod {10}^9$.

### --tests--

`sumOfSumOfDivisors()` should return `968697378`.

```js
assert.strictEqual(sumOfSumOfDivisors(), 968697378);
```

## 39

### --description--

We want to tile a board of length $n$ and height 1 completely, with either 1 × 2 blocks or 1 × 1 blocks with a single decimal digit on top:

<img class="img-responsive center-block" alt="ten blocks 1x1 with single decimal digit on top, and 1x2 block" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-1.png" style="background-color: white; padding: 10px;">

For example, here are some of the ways to tile a board of length $n = 8$:

<img class="img-responsive center-block" alt="examples of ways to tile a board of length n = 8" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-2.png" style="background-color: white; padding: 10px;">

Let $T(n)$ be the number of ways to tile a board of length $n$ as described above.

For example, $T(1) = 10$ and $T(2) = 101$.

Let $S(L)$ be the triple sum $\sum_{a, b, c} gcd(T(c^a), T(c^b))$ for $1 ≤ a, b, c ≤ L$.

For example:

$$\begin{align}
  & S(2) = 10\\,444 \\\\
  & S(3) = 1\\,292\\,115\\,238\\,446\\,807\\,016\\,106\\,539\\,989 \\\\
  & S(4)\bmod 987\\,898\\,789 = 670\\,616\\,280.
\end{align}$$

Find $S(2000)\bmod 987\\,898\\,789$.

### --tests--

`gcdAndTiling()` should return `970746056`.

```js
assert.strictEqual(gcdAndTiling(), 970746056);
```

## 40

### --description--

For an integer $M$, we define $R(M)$ as the sum of $\frac{1}{p·q}$ for all the integer pairs $p$ and $q$ which satisfy all of these conditions:

- $1 ≤ p &lt; q ≤ M$
- $p + q ≥ M$
- $p$ and $q$ are coprime.

We also define $S(N)$ as the sum of $R(i)$ for $2 ≤ i ≤ N$.

We can verify that $S(2) = R(2) = \frac{1}{2}$, $S(10) ≈ 6.9147$ and $S(100) ≈ 58.2962$.

Find $S({10}^7)$. Give your answer rounded to four decimal places.

### --tests--

`inverseSummationCoprimeCouples()` should return `5000088.8395`.

```js
assert.strictEqual(inverseSummationCoprimeCouples(), 5000088.8395);
```

## 41

### --description--

An integer is called eleven-free if its decimal expansion does not contain any substring representing a power of 11 except 1.

For example, 2404 and 13431 are eleven-free, while 911 and 4121331 are not.

Let $E(n)$ be the $n$th positive eleven-free integer. For example, $E(3) = 3$, $E(200) = 213$ and $E(500\\,000) = 531\\,563$.

Find $E({10}^{18})$.

### --tests--

`elevenFreeIntegers()` should return `1295552661530920200`.

```js
assert.strictEqual(elevenFreeIntegers(), 1295552661530920200);
```

## 42

### --description--

Let $g(n)$ be a sequence defined as follows:

$$\begin{align}
  & g(4) = 13, \\\\
  & g(n) = g(n-1) + gcd(n, g(n - 1)) \text{ for } n > 4.
\end{align}$$

The first few values are:

$$\begin{array}{l}
  n    & 4  & 5  & 6  & 7  & 8  & 9  & 10 & 11 & 12 & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & \ldots \\\\
  g(n) & 13 & 14 & 16 & 17 & 18 & 27 & 28 & 29 & 30 & 31 & 32 & 33 & 34 & 51 & 54 & 55 & 60 & \ldots
\end{array}$$

You are given that $g(1\\,000) = 2\\,524$ and $g(1\\,000\\,000) = 2\\,624\\,152$.

Find $g({10}^{15})$.

### --tests--

`gcdSequence()` should return `2744233049300770`.

```js
assert.strictEqual(gcdSequence(), 2744233049300770);
```

## 43

### --description--

A group of $p$ people decide to sit down at a round table and play a lottery-ticket trading game. Each person starts off with a randomly-assigned, unscratched lottery ticket. Each ticket, when scratched, reveals a whole-pound prize ranging anywhere from £1 to £$p$, with no two tickets alike. The goal of the game is for each person to maximize his ticket winnings upon leaving the game.

An arbitrary person is chosen to be the first player. Going around the table, each player has only one of two options:

1.  The player can scratch his ticket and reveal its worth to everyone at the table.
2.  The player can trade his unscratched ticket for a previous player's scratched ticket, and then leave the game with that ticket. The previous player then scratches his newly-acquired ticket and reveals its worth to everyone at the table.

The game ends once all tickets have been scratched. All players still remaining at the table must leave with their currently-held tickets.

Assume that each player uses the optimal strategy for maximizing the expected value of his ticket winnings.

Let $E(p)$ represent the expected number of players left at the table when the game ends in a game consisting of $p$ players (e.g. $E(111) = 5.2912$ when rounded to 5 significant digits).

Let $S_1(N) = \displaystyle\sum_{p = 1}^N E(p)$.

Let $S_k(N) = \displaystyle\sum_{p = 1}^N S_{k - 1}(p)$ for $k > 1$.

Find $S_{20}({10}^{14})$ and write the answer as a string in scientific notation rounded to 10 significant digits. Use a lowercase `e` to separate mantissa and exponent. For example, the answer for $S_3(100)$ would be `5.983679014e5`.

### --tests--

`roundtableLottery()` should return a string.

```js
assert(typeof roundtableLottery() === 'string');
```

`roundtableLottery()` should return the string `1.200856722e263`.

```js
assert.strictEqual(roundtableLottery(), '1.200856722e263');
```

## 44

### --description--

For every integer $n > 1$, the family of functions $f_{n, a, b}$ is defined by:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ for $a, b, x$ integer and $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

We will call $f_{n, a, b}$ a retraction if $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ for every $0 \le x \lt n$.

Let $R(n)$ be the number of retractions for $n$.

You are given that

$$\sum_{k = 1}^{99\\,999} R(\displaystyle\binom{100\\,000}{k}) \equiv 628\\,701\\,600\bmod 1\\,000\\,000\\,007$$

Find $$\sum_{k = 1}^{9\\,999\\,999} R(\displaystyle\binom{10\\,000\\,000}{k})$$ Give your answer modulo $1\\,000\\,000\\,007$.

### --tests--

`retractionsA()` should return `659104042`.

```js
assert.strictEqual(retractionsA(), 659104042);
```

## 45

### --description--

For every integer $n > 1$, the family of functions $f_{n, a, b}$ is defined by:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ for $a, b, x$ integer and $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

We will call $f_{n, a, b}$ a retraction if $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ for every $0 \le x \lt n$.

Let $R(n)$ be the number of retractions for $n$.

$F(N) = \displaystyle\sum_{n = 1}^N R(n^4 + 4)$.

$F(1024) = 77\\,532\\,377\\,300\\,600$.

Find $F({10}^7)$. Give your answer modulo $1\\,000\\,000\\,007$.

### --tests--

`retractionsB()` should return `907803852`.

```js
assert.strictEqual(retractionsB(), 907803852);
```

## 46

### --description--

For every integer $n > 1$, the family of functions $f_{n, a, b}$ is defined by:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ for $a, b, x$ integer and $0 \lt a \lt n$, $0 \le b \lt n$, $0 \le x \lt n$.

We will call $f_{n, a, b}$ a retraction if $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x)\bmod n$ for every $0 \le x \lt n$.

Let $R(n)$ be the number of retractions for $n$.

$F(N) = \displaystyle\sum_{n = 2}^N R(n)$.

$F({10}^7) ≡ 638\\,042\\,271\bmod 1\\,000\\,000\\,007$.

Find $F({10}^{14})$. Give your answer modulo $1\\,000\\,000\\,007$.

### --tests--

`retractionsC()` should return `530553372`.

```js
assert.strictEqual(retractionsC(), 530553372);
```

## 47

### --description--

The function $lcm(a, b)$ denotes the least common multiple of $a$ and $b$.

Let $A(n)$ be the average of the values of $lcm(n, i)$ for $1 ≤ i ≤ n$.

E.g: $A(2) = \frac{2 + 2}{2} = 2$ and $A(10) = \frac{10 + 10 + 30 + 20 + 10 + 30 + 70 + 40 + 90 + 10}{10} = 32$.

Let $S(n) = \sum A(k)$ for $1 ≤ k ≤ n$.

$S(100) = 122\\,726$.

Find $S(99\\,999\\,999\\,019)\bmod 999\\,999\\,017$.

### --tests--

`averageLCM()` should return `106467648`.

```js
assert.strictEqual(averageLCM(), 106467648);
```

## 48

### --description--

Phil the confectioner is making a new batch of chocolate covered candy. Each candy centre is shaped like an ellipsoid of revolution defined by the equation: $b^2x^2 + b^2y^2 + a^2z^2 = a^2b^2$.

Phil wants to know how much chocolate is needed to cover one candy centre with a uniform coat of chocolate one millimeter thick.

If $a = 1$ mm and $b = 1$ mm, the amount of chocolate required is $\frac{28}{3} \pi$ mm<sup>3</sup>

If $a = 2$ mm and $b = 1$ mm, the amount of chocolate required is approximately 60.35475635 mm<sup>3</sup>.

Find the amount of chocolate in mm<sup>3</sup> required if $a = 3$ mm and $b = 1$ mm. Give your answer as the number rounded to 8 decimal places behind the decimal point.

### --tests--

`chocolateCoveredCandy()` should return `103.37870096`.

```js
assert.strictEqual(chocolateCoveredCandy(), 103.37870096);
```

## 49

### --description--

A hypocycloid is the curve drawn by a point on a small circle rolling inside a larger circle. The parametric equations of a hypocycloid centered at the origin, and starting at the right most point is given by:

$$x(t) = (R - r) \cos(t) + r \cos(\frac{R - r}{r}t)$$

$$y(t) = (R - r) \sin(t) - r \sin(\frac{R - r}{r} t)$$

Where $R$ is the radius of the large circle and $r$ the radius of the small circle.

Let $C(R, r)$ be the set of distinct points with integer coordinates on the hypocycloid with radius $R$ and $r$ and for which there is a corresponding value of $t$ such that $\sin(t)$ and $\cos(t)$ are rational numbers.

Let $S(R, r) = \sum\_{(x,y) \in C(R, r)} |x| + |y|$ be the sum of the absolute values of the $x$ and $y$ coordinates of the points in $C(R, r)$.

Let $T(N) = \sum_{R = 3}^N \sum_{r=1}^{\left\lfloor \frac{R - 1}{2} \right\rfloor} S(R, r)$ be the sum of $S(R, r)$ for $R$ and $r$ positive integers, $R\leq N$ and $2r &lt; R$.

You are given:

$$\begin{align}
  C(3, 1) = & \\{(3, 0), (-1, 2), (-1,0), (-1,-2)\\} \\\\
  C(2500, 1000) = & \\{(2500, 0), (772, 2376), (772, -2376), (516, 1792), (516, -1792), (500, 0), (68, 504), \\\\
                  &(68, -504),(-1356, 1088), (-1356, -1088), (-1500, 1000), (-1500, -1000)\\}
\end{align}$$

**Note:** (-625, 0) is not an element of $C(2500, 1000)$ because $\sin(t)$ is not a rational number for the corresponding values of $t$.

$S(3, 1) = (|3| + |0|) + (|-1| + |2|) + (|-1| + |0|) + (|-1| + |-2|) = 10$

$T(3) = 10$; $T(10) = 524$; $T(100) = 580\\,442$; $T({10}^3) = 583\\,108\\,600$.

Find $T({10}^6)$.

### --tests--

`hypocycloidAndLatticePoints()` should return `583333163984220900`.

```js
assert.strictEqual(hypocycloidAndLatticePoints(), 583333163984220900);
```

## 50

### --description--

Consider the number 15.

There are eight positive numbers less than 15 which are coprime to 15: 1, 2, 4, 7, 8, 11, 13, 14.

The modular inverses of these numbers modulo 15 are: 1, 8, 4, 13, 2, 11, 7, 14 because

$$\begin{align}
  & 1  \times 1\bmod 15 = 1 \\\\
  & 2  \times 8  = 16\bmod 15 = 1 \\\\
  & 4  \times 4  = 16\bmod 15 = 1 \\\\
  & 7  \times 13 = 91\bmod 15 = 1 \\\\
  & 11 \times 11 = 121\bmod 15 = 1 \\\\
  & 14 \times 14 = 196\bmod 15 = 1
\end{align}$$

Let $I(n)$ be the largest positive number $m$ smaller than $n - 1$ such that the modular inverse of $m$ modulo $n$ equals $m$ itself.

So $I(15) = 11$.

Also $I(100) = 51$ and $I(7) = 1$.

Find $\sum I(n)$ for $3 ≤ n ≤ 2 \times {10}^7$

### --tests--

`modularInverses()` should return `153651073760956`.

```js
assert.strictEqual(modularInverses(), 153651073760956);
```

## 51

### --description--

Define $F(m, n)$ as the number of $n$-tuples of positive integers for which the product of the elements doesn't exceed $m$.

$F(10, 10) = 571$.

$F({10}^6, {10}^6)\bmod 1\\,234\\,567\\,891 = 252\\,903\\,833$.

Find $F({10}^9, {10}^9)\bmod 1\\,234\\,567\\,891$.

### --tests--

`longProducts()` should return `345558983`.

```js
assert.strictEqual(longProducts(), 345558983);
```

## 52

### --description--

A simple quadrilateral is a polygon that has four distinct vertices, has no straight angles and does not self-intersect.

Let $Q(m, n)$ be the number of simple quadrilaterals whose vertices are lattice points with coordinates ($x$, $y$) satisfying $0 ≤ x ≤ m$ and $0 ≤ y ≤ n$.

For example, $Q(2, 2) = 94$ as can be seen below:

<img class="img-responsive center-block" alt="94 quadrilaterals whose vertices are lattice points with coordinates (x, y) satiffying 0 &le; x &le; m and 0 &le; y &le; n" src="https://cdn.freecodecamp.org/curriculum/project-euler/lattice-quadrilaterals.png" style="background-color: white; padding: 10px;">

It can also be verified that $Q(3, 7) = 39\\,590$, $Q(12, 3) = 309\\,000$ and $Q(123, 45) = 70\\,542\\,215\\,894\\,646$.

Find $Q(12\\,345, 6\\,789)\bmod 135\\,707\\,531$.

### --tests--

`latticeQuadrilaterals()` should return `104354107`.

```js
assert.strictEqual(latticeQuadrilaterals(), 104354107);
```

## 53

### --description--

In the following equation $x$, $y$, and $n$ are positive integers.

$$\frac{1}{x} + \frac{1}{y} = \frac{1}{n}$$

For a limit $L$ we define $F(L)$ as the number of solutions which satisfy $x &lt; y ≤ L$.

We can verify that $F(15) = 4$ and $F(1000) = 1069$.

Find $F({10}^{12})$.

### --tests--

`diophantineReciprocalsThree()` should return `5435004633092`.

```js
assert.strictEqual(diophantineReciprocalsThree(), 5435004633092);
```

## 54

### --description--

Let $f(n)$ be the largest positive integer $x$ less than ${10}^9$ such that the last 9 digits of $n^x$ form the number $x$ (including leading zeros), or zero if no such integer exists.

For example:

$$\begin{align}
  & f(4) = 411\\,728\\,896 (4^{411\\,728\\,896} = ...490\underline{411728896}) \\\\
  & f(10) = 0 \\\\
  & f(157) = 743\\,757 (157^{743\\,757} = ...567\underline{000743757}) \\\\
  & Σf(n), 2 ≤ n ≤ 103 = 442\\,530\\,011\\,399
\end{align}$$

Find $\sum f(n)$, $2 ≤ n ≤ {10}^6$.

### --tests--

`powersWithTrailingDigits()` should return `450186511399999`.

```js
assert.strictEqual(powersWithTrailingDigits(), 450186511399999);
```

## 55

### --description--

Define:

$$\begin{align}
  & x_n = ({1248}^n\bmod 32323) - 16161 \\\\
  & y_n = ({8421}^n\bmod 30103) - 15051 \\\\
  & P_n = \\{(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)\\}
\end{align}$$

For example,
$$P_8 = \\{(-14913, -6630), (-10161, 5625), (5226, 11896), (8340, -10778), (15852, -5203), (-15165, 11295), (-1427, -14495), (12407, 1060)\\}$$

Let $C(n)$ be the number of triangles whose vertices are in $P_n$ which contain the origin in the interior.

Examples:

$$\begin{align}
  & C(8) = 20 \\\\
  & C(600) = 8\\,950\\,634 \\\\
  & C(40\\,000) = 2\\,666\\,610\\,948\\,988
\end{align}$$

Find $C(2\\,000\\,000)$.

### --tests--

`trianglesContainingOriginTwo()` should return `333333208685971500`.

```js
assert.strictEqual(trianglesContainingOriginTwo(), 333333208685971500);
```

## 56

### --description--

Let $f(n) = n^2 - 3n - 1$.

Let $p$ be a prime.

Let $R(p)$ be the smallest positive integer $n$ such that $f(n)\bmod p^2 = 0$ if such an integer $n$ exists, otherwise $R(p) = 0$.

Let $SR(L)$ be $\sum R(p)$ for all primes not exceeding $L$.

Find $SR({10}^7)$.

### --tests--

`polynomialModuloSquareOfPrime()` should return `2647787126797397000`.

```js
assert.strictEqual(polynomialModuloSquareOfPrime(), 2647787126797397000);
```

## 57

### --description--

Consider the alphabet $A$ made out of the letters of the word `project`: $A = \\{c, e, j, o, p, r, t\\}$.

Let $T(n)$ be the number of strings of length $n$ consisting of letters from $A$ that do not have a substring that is one of the 5040 permutations of `project`.

$T(7) = 7^7 - 7! = 818\\,503$.

Find $T({10}^{12})$. Give the last 9 digits of your answer.

### --tests--

`permutationsOfProject()` should return `423341841`.

```js
assert.strictEqual(permutationsOfProject(), 423341841);
```

## 58

### --description--

The flipping game is a two player game played on a $N$ by $N$ square board.

Each square contains a disk with one side white and one side black.

The game starts with all disks showing their white side.

A turn consists of flipping all disks in a rectangle with the following properties:

- the upper right corner of the rectangle contains a white disk
- the rectangle width is a perfect square (1, 4, 9, 16, ...)
- the rectangle height is a triangular number (1, 3, 6, 10, ...)

<img class="img-responsive center-block" alt="flipping all disks in a 4x3 rectangle on a 5x5 board" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-1.png" style="background-color: white; padding: 10px;">

Players alternate turns. A player wins by turning the grid all black.

Let $W(N)$ be the number of winning moves for the first player on a $N$ by $N$ board with all disks white, assuming perfect play.

$W(1) = 1$, $W(2) = 0$, $W(5) = 8$ and $W({10}^2) = 31\\,395$.

For $N = 5$, the first player's eight winning first moves are:

<img class="img-responsive center-block" alt="eight winning first moves for N = 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-2.png" style="background-color: white; padding: 10px;">

Find $W({10}^6)$.

### --tests--

`flippingGame()` should return `3996390106631`.

```js
assert.strictEqual(flippingGame(), 3996390106631);
```

## 59

### --description--

On the Euclidean plane, an ant travels from point $A(0, 1)$ to point $B(d, 1)$ for an integer $d$.

In each step, the ant at point ($x_0$, $y_0$) chooses one of the lattice points ($x_1$, $y_1$) which satisfy $x_1 ≥ 0$ and $y_1 ≥ 1$ and goes straight to ($x_1$, $y_1$) at a constant velocity $v$. The value of $v$ depends on $y_0$ and $y_1$ as follows:

- If $y_0 = y_1$, the value of $v$ equals $y_0$.
- If $y_0 ≠ y_1$, the value of $v$ equals $\frac{y_1 - y_0}{\ln y_1 - \ln y_0}$.

The left image is one of the possible paths for $d = 4$. First the ant goes from $A(0, 1)$ to $P_1(1, 3)$ at velocity $\frac{3 - 1}{\ln 3 - \ln 1} ≈ 1.8205$. Then the required time is $\frac{\sqrt{5}}{1.820} ≈ 1.2283$.

From $P_1(1, 3)$ to $P_2(3, 3)$ the ant travels at velocity 3 so the required time is $\frac{2}{3} ≈ 0.6667$. From $P_2(3, 3)$ to $B(4, 1)$ the ant travels at velocity $\frac{1 - 3}{\ln 1 - \ln 3} ≈ 1.8205$ so the required time is $\frac{\sqrt{5}}{1.8205} ≈ 1.2283$.

Thus the total required time is $1.2283 + 0.6667 + 1.2283 = 3.1233$.

The right image is another path. The total required time is calculated as $0.98026 + 1 + 0.98026 = 2.96052$. It can be shown that this is the quickest path for $d = 4$.

<img class="img-responsive center-block" alt="two possible paths for d = 4" src="https://cdn.freecodecamp.org/curriculum/project-euler/an-ant-on-the-move.jpg" style="background-color: white; padding: 10px;">

Let $F(d)$ be the total required time if the ant chooses the quickest path. For example, $F(4) ≈ 2.960\\,516\\,287$. We can verify that $F(10) ≈ 4.668\\,187\\,834$ and $F(100) ≈ 9.217\\,221\\,972$.

Find $F(10\\,000)$. Give your answer rounded to nine decimal places.

### --tests--

`antOnTheMove()` should return `18.420738199`.

```js
assert.strictEqual(antOnTheMove(), 18.420738199);
```

## 60

### --description--

Let `f(k, n)` = $e^\frac{k}{n} - 1$, for all non-negative integers `k`.

Remarkably, `f(6, 200) + f(75, 200) + f(89, 200) + f(226, 200)` = 3.1415926… ≈ π.

In fact, it is the best approximation of π of the form `f(a, 200) + f(b, 200) + f(c, 200) + f(d, 200)`.

Let `almostPi(n)` = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + d<sup>2</sup> for a, b, c, d that minimize the error: $\lvert f(a,n) + f(b,n) + f(c,n) + f(d,n) - \Pi\rvert$

You are given `almostPi(200)` = 6<sup>2</sup> + 75<sup>2</sup> + 89<sup>2</sup> + 226<sup>2</sup> = 64658.

### --tests--

`almostPi` should be a function.

```js
assert(typeof almostPi === 'function')
```

`almostPi` should return a number.

```js
assert.strictEqual(typeof almostPi(10), 'number');
```

`almostPi(29)` should return `1208`.

```js
assert.strictEqual(almostPi(29), 1208);
```

`almostPi(50)` should return `4152`.

```js
assert.strictEqual(almostPi(50), 4152);
```

`almostPi(200)` should return `64658`.

```js
assert.strictEqual(almostPi(200), 64658);
```

## 61

### --description--

A 3-smooth number is an integer which has no prime factor larger than 3. For an integer $N$, we define $S(N)$ as the set of 3-smooth numbers less than or equal to $N$. For example, $S(20) = \\{1, 2, 3, 4, 6, 8, 9, 12, 16, 18\\}$.

We define $F(N)$ as the number of permutations of $S(N)$ in which each element comes after all of its proper divisors.

This is one of the possible permutations for $N = 20$.

-   1, 2, 4, 3, 9, 8, 16, 6, 18, 12.

This is not a valid permutation because 12 comes before its divisor 6.

-   1, 2, 4, 3, 9, 8, 12, 16, 6, 18.

We can verify that $F(6) = 5$, $F(8) = 9$, $F(20) = 450$ and $F(1000) ≈ 8.8521816557e\\,21$.

Find $F({10}^{18})$. Give as your answer as a string in its scientific notation rounded to ten digits after the decimal point. When giving your answer, use a lowercase `e` to separate mantissa and exponent. E.g. if the answer is $112\\,233\\,445\\,566\\,778\\,899$ then the answer format would be `1.1223344557e17`.

### --tests--

`permutationOf3SmoothNumbers()` should return a string.

```js
assert.strictEqual(typeof permutationOf3SmoothNumbers() === 'string');
```

`permutationOf3SmoothNumbers()` should return the string `5.5350769703e1512`.

```js
assert.strictEqual(permutationOf3SmoothNumbers(), '5.5350769703e1512');
```

## 62

### --description--

The function $f$ is defined for all positive integers as follows:

$$\begin{align}
  & f(1) = 1 \\\\
  & f(3) = 3 \\\\
  & f(2n) = f(n) \\\\
  & f(4n + 1) = 2f(2n + 1) - f(n) \\\\
  & f(4n + 3) = 3f(2n + 1) - 2f(n)
\end{align}$$

The function $S(n)$ is defined as $\sum_{i=1}^{n} f(i)$.

$S(8) = 22$ and $S(100) = 3604$.

Find $S(3^{37})$. Give the last 9 digits of your answer.

### --tests--

`weirdRecurrenceRelation()` should return `808981553`.

```js
assert.strictEqual(weirdRecurrenceRelation(), 808981553);
```

## 63

### --description--

The Möbius function, denoted $μ(n)$, is defined as:

- $μ(n) = (-1)^{ω(n)}$ if $n$ is squarefree (where $ω(n)$ is the number of distinct prime factors of $n$)
- $μ(n) = 0$ if $n$ is not squarefree.

Let $P(a, b)$ be the number of integers $n$ in the interval $[a, b]$ such that $μ(n) = 1$.

Let $N(a, b)$ be the number of integers $n$ in the interval $[a, b]$ such that $μ(n) = -1$.

For example, $P(2, 10) = 2$ and $N(2, 10) = 4$.

Let $C(n)$ be the number of integer pairs $(a, b)$ such that:

- $1 ≤ a ≤ b ≤ n$,
- $99 \times N(a, b) ≤ 100 \times P(a, b)$, and
- $99 \times P(a, b) ≤ 100 \times N(a, b)$.

For example, $C(10) = 13$, $C(500) = 16\\,676$ and $C(10\\,000) = 20\\,155\\,319$.

Find $C(20\\,000\\,000)$.

### --tests--

`mobiusFunctionAndIntervals()` should return `198775297232878`.

```js
assert.strictEqual(mobiusFunctionAndIntervals(), 198775297232878);
```

## 64

### --description--

The kernel of a polygon is defined by the set of points from which the entire polygon's boundary is visible. We define a polar polygon as a polygon for which the origin is strictly contained inside its kernel.

For this problem, a polygon can have collinear consecutive vertices. However, a polygon still cannot have self-intersection and cannot have zero area.

For example, only the first of the following is a polar polygon (the kernels of the second, third, and fourth do not strictly contain the origin, and the fifth does not have a kernel at all):

<img class="img-responsive center-block" alt="five example polygons" src="https://cdn.freecodecamp.org/curriculum/project-euler/polar-polygons.png" style="background-color: white; padding: 10px;">

Notice that the first polygon has three consecutive collinear vertices.

Let $P(n)$ be the number of polar polygons such that the vertices $(x, y)$ have integer coordinates whose absolute values are not greater than $n$.

Note that polygons should be counted as different if they have different set of edges, even if they enclose the same area. For example, the polygon with vertices [(0,0), (0,3), (1,1), (3,0)] is distinct from the polygon with vertices [(0,0), (0,3), (1,1), (3,0), (1,0)].

For example, $P(1) = 131$, $P(2) = 1\\,648\\,531$, $P(3) = 1\\,099\\,461\\,296\\,175$ and $P(343)\bmod 1\\,000\\,000\\,007 = 937\\,293\\,740$.

Find $P(7^{13})\bmod 1\\,000\\,000\\,007$.

### --tests--

`polarPolygons()` should return `585965659`.

```js
assert.strictEqual(polarPolygons(), 585965659);
```

## 65

### --description--

Let $P(m,n)$ be the number of distinct terms in an $m×n$ multiplication table.

For example, a 3×4 multiplication table looks like this:

$$\begin{array}{c}
  ×          & \mathbf{1} & \mathbf{2} & \mathbf{3} & \mathbf{4}  \\\\
  \mathbf{1} & 1          & 2          & 3          & 4  \\\\
  \mathbf{2} & 2          & 4          & 6          & 8  \\\\
  \mathbf{3} & 3          & 6          & 9          & 12
\end{array}$$

There are 8 distinct terms {1, 2, 3, 4, 6, 8, 9, 12}, therefore $P(3, 4) = 8$.

You are given that:

$$\begin{align}
  & P(64, 64) = 1\\,263, \\\\
  & P(12, 345) = 1\\,998, \text{ and} \\\\
  & P(32, {10}^{15}) = 13\\,826\\,382\\,602\\,124\\,302. \\\\
\end{align}$$

Find $P(64, {10}^{16})$.

### --tests--

`multiplicationTable()` should return `258381958195474750`.

```js
assert.strictEqual(multiplicationTable(), 258381958195474750);
```

## 66

### --description--

An integer $s$ is called a superinteger of another integer $n$ if the digits of $n$ form a subsequence of the digits of $s$.

For example, 2718281828 is a superinteger of 18828, while 314159 is not a superinteger of 151.

Let $p(n)$ be the $n$th prime number, and let $c(n)$ be the $n$th composite number. For example, $p(1) = 2$, $p(10) = 29$, $c(1) = 4$ and $c(10) = 18$.

$$\begin{align}
  & \\{p(i) : i ≥ 1\\} = \\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \ldots \\} \\\\
  & \\{c(i) : i ≥ 1\\} = \\{4, 6, 8, 9, 10, 12, 14, 15, 16, 18, \ldots \\}
\end{align}$$

Let $P^D$ the sequence of the digital roots of $\\{p(i)\\}$ ($C^D$ is defined similarly for $\\{c(i)\\}$):

$$\begin{align}
  & P^D = \\{2, 3, 5, 7, 2, 4, 8, 1, 5, 2, \ldots \\} \\\\
  & C^D = \\{4, 6, 8, 9, 1, 3, 5, 6, 7, 9, \ldots \\}
\end{align}$$

Let $P_n$ be the integer formed by concatenating the first $n$ elements of $P^D$ ($C_n$ is defined similarly for $C^D$).

$$\begin{align}
  & P_{10} = 2\\,357\\,248\\,152 \\\\
  & C_{10} = 4\\,689\\,135\\,679
\end{align}$$

Let $f(n)$ be the smallest positive integer that is a common superinteger of $P_n$ and $C_n$. For example, $f(10) = 2\\,357\\,246\\,891\\,352\\,679$, and $f(100)\bmod 1\\,000\\,000\\,007 = 771\\,661\\,825$.

Find $f(10\\,000)\bmod 1\\,000\\,000\\,007$.

### --tests--

`superinteger()` should return `775181359`.

```js
assert.strictEqual(superinteger(), 775181359);
```

## 67

### --description--

An integer is called B-smooth if none of its prime factors is greater than $B$.

Let $SB(n)$ be the largest B-smooth divisor of $n$.

Examples:

$$\begin{align}
  & S_1(10) = 1 \\\\
  & S_4(2\\,100) = 12 \\\\
  & S_{17}(2\\,496\\,144) = 5\\,712
\end{align}$$

Define $F(n) = \displaystyle\sum_{B = 1}^n \sum_{r = 0}^n S_B(\displaystyle\binom{n}{r})$. Here, $\displaystyle\binom{n}{r}$ denotes the binomial coefficient.

Examples:

$$\begin{align}
  & F(11) = 3132 \\\\
  & F(1\\,111)\bmod 1\\,000\\,000\\,993 = 706\\,036\\,312 \\\\
  & F(111\\,111)\bmod 1\\,000\\,000\\,993 = 22\\,156\\,169
\end{align}$$

Find $F(11\\,111\\,111)\bmod 1\\,000\\,000\\,993$.

### --tests--

`smoothDivisorsOfBinomialCoefficients()` should return `852950321`.

```js
assert.strictEqual(smoothDivisorsOfBinomialCoefficients(), 852950321);
```

## 68

### --description--

In a room $N$ chairs are placed around a round table.

Knights enter the room one by one and choose at random an available empty chair.

To have enough elbow room the knights always leave at least one empty chair between each other.

When there aren't any suitable chairs left, the fraction $C$ of empty chairs is determined. We also define $E(N)$ as the expected value of $C$.

We can verify that $E(4) = \frac{1}{2}$ and $E(6) = \frac{5}{9}$.

Find $E({10}^{18})$. Give your answer rounded to fourteen decimal places in the form 0.abcdefghijklmn.

### --tests--

`emptyChairs()` should return `0.56766764161831`.

```js
assert.strictEqual(emptyChairs(), 0.56766764161831);
```

## 69

### --description--

Consider a single game of Ramvok:

Let $t$ represent the maximum number of turns the game lasts. If $t = 0$, then the game ends immediately. Otherwise, on each turn $i$, the player rolls a die. After rolling, if $i &lt; t$ the player can either stop the game and receive a prize equal to the value of the current roll, or discard the roll and try again next turn. If $i = t$, then the roll cannot be discarded and the prize must be accepted. Before the game begins, $t$ is chosen by the player, who must then pay an up-front cost $ct$ for some constant $c$. For $c = 0$, $t$ can be chosen to be infinite (with an up-front cost of 0). Let $R(d, c)$ be the expected profit (i.e. net gain) that the player receives from a single game of optimally-played Ramvok, given a fair $d$-sided die and cost constant $c$. For example, $R(4, 0.2) = 2.65$. Assume that the player has sufficient funds for paying any/all up-front costs.

Now consider a game of Super Ramvok:

In Super Ramvok, the game of Ramvok is played repeatedly, but with a slight modification. After each game, the die is altered. The alteration process is as follows: The die is rolled once, and if the resulting face has its pips visible, then that face is altered to be blank instead. If the face is already blank, then it is changed back to its original value. After the alteration is made, another game of Ramvok can begin (and during such a game, at each turn, the die is rolled until a face with a value on it appears). The player knows which faces are blank and which are not at all times. The game of Super Ramvok ends once all faces of the die are blank.

Let $S(d, c)$ be the expected profit that the player receives from an optimally-played game of Super Ramvok, given a fair $d$-sided die to start (with all sides visible), and cost constant $c$. For example, $S(6, 1) = 208.3$.

Let $F(n) = \sum_{4 ≤ d ≤ n} \sum_{0 ≤ c ≤ n} S(d, c)$.

Calculate $F(20)$, rounded to the nearest integer.

### --tests--

`superRamvok()` should return `147668794`.

```js
assert.strictEqual(superRamvok(), 147668794);
```

## 70

### --description--

The triangle $ΔABC$ is inscribed in an ellipse with equation $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $0 &lt; 2b &lt; a$, $a$ and $b$ integers.

Let $r(a, b)$ be the radius of the incircle of $ΔABC$ when the incircle has center $(2b, 0)$ and $A$ has coordinates $\left(\frac{a}{2}, \frac{\sqrt{3}}{2}b\right)$.

For example, $r(3, 1) = \frac{1}{2}, r(6, 2) = 1, r(12, 3) = 2$.

<img class="img-responsive center-block" alt="triangle ΔABC inscribed in an ellipse, radius of the incircle of ΔABC r(6, 2) = 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-1.png" style="background-color: white; padding: 10px;">

<img class="img-responsive center-block" alt="triangle ΔABC inscribed in an ellipse, radius of the incircle of ΔABC r(12, 3) = 2" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-2.png" style="background-color: white; padding: 10px;">

Let $G(n) = \sum_{a = 3}^n \sum_{b = 1}^{\left\lfloor\frac{a - 1}{2} \right\rfloor} r(a, b)$

You are given $G(10) = 20.59722222$, $G(100) = 19223.60980$ (rounded to 10 significant digits).

Find $G({10}^{11})$. Give your answer as a string in scientific notation rounded to 10 significant digits. Use a lowercase `e` to separate mantissa and exponent.

For $G(10)$ the answer would have been `2.059722222e1`

### --tests--

`triangleInscribedInEllipse()` should return a string.

```js
assert(typeof triangleInscribedInEllipse() === 'string');
```

`triangleInscribedInEllipse()` should return the string `1.895093981e31`.

```js
assert.strictEqual(triangleInscribedInEllipse(), '1.895093981e31');
```

## 71

### --description--

There are $N$ seats in a row. $N$ people come one after another to fill the seats according to the following rules:

1. No person sits beside another.
1. The first person chooses any seat.
1. Each subsequent person chooses the seat furthest from anyone else already seated, as long as it does not violate rule 1. If there is more than one choice satisfying this condition, then the person chooses the leftmost choice.

Note that due to rule 1, some seats will surely be left unoccupied, and the maximum number of people that can be seated is less than $N$ (for $N > 1$).

Here are the possible seating arrangements for $N = 15$:

<img class="img-responsive center-block" alt="seating arrangements for N = 15" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance-ii.png" style="background-color: white; padding: 10px;">

We see that if the first person chooses correctly, the 15 seats can seat up to 7 people. We can also see that the first person has 9 choices to maximize the number of people that may be seated.

Let $f(N)$ be the number of choices the first person has to maximize the number of occupants for $N$ seats in a row. Thus, $f(1) = 1$, $f(15) = 9$, $f(20) = 6$, and $f(500) = 16$.

Also, $\sum f(N) = 83$ for $1 ≤ N ≤ 20$ and $\sum f(N) = 13\\,343$ for $1 ≤ N ≤ 500$.

Find $\sum f(N)$ for $1 ≤ N ≤ {10}^{12}$. Give the last 8 digits of your answer.

### --tests--

`comfortableDistanceTwo()` should return `73811586`.

```js
assert.strictEqual(comfortableDistanceTwo(), 73811586);
```

## 72

### --description--

Let $\varphi$ be the golden ratio: $\varphi = \frac{1+\sqrt{5}}{2}.$

Remarkably it is possible to write every positive integer as a sum of powers of $\varphi$ even if we require that every power of $\varphi$ is used at most once in this sum.

Even then this representation is not unique.

We can make it unique by requiring that no powers with consecutive exponents are used and that the representation is finite.

E.g:

$2 = \varphi + \varphi^{-2}$ and $3 = \varphi^{2} + \varphi^{-2}$

To represent this sum of powers of $\varphi$ we use a string of 0's and 1's with a point to indicate where the negative exponents start. We call this the representation in the phigital numberbase.

So $1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$ and $14 = 100100.001001_{\varphi}$. The strings representing 1, 2 and 14 in the phigital number base are palindromic, while the string representing 3 is not (the phigital point is not the middle character).

The sum of the positive integers not exceeding 1000 whose phigital representation is palindromic is 4345.

Find the sum of the positive integers not exceeding $10^{10}$ whose phigital representation is palindromic.

### --tests--

`phigitalNumberBase()` should return `35856681704365`.

```js
assert.strictEqual(phigitalNumberBase(), 35856681704365);
```

## 73

### --description--

For a positive integer $n$ and digits $d$, we define $F(n, d)$ as the number of the divisors of $n$ whose last digits equal $d$.

For example, $F(84, 4) = 3$. Among the divisors of 84 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84), three of them (4, 14, 84) have the last digit 4.

We can also verify that $F(12!, 12) = 11$ and $F(50!, 123) = 17\\,888$.

Find $F({10}^6!, 65\\,432) \text{ modulo } ({10}^{16} + 61)$.

### --tests--

`lastDigitsOfDivisors()` should return `9690646731515010`.

```js
assert.strictEqual(lastDigitsOfDivisors(), 9690646731515010);
```

## 74

### --description--

$12n$ musicians participate at a music festival. On the first day, they form $3n$ quartets and practice all day.

It is a disaster. At the end of the day, all musicians decide they will never again agree to play with any member of their quartet.

On the second day, they form $4n$ trios, each musician avoiding his previous quartet partners.

Let $f(12n)$ be the number of ways to organize the trios amongst the $12n$ musicians.

You are given $f(12) = 576$ and $f(24)\bmod 1\\,000\\,000\\,007 = 509\\,089\\,824$.

Find $f(600)\bmod 1\\,000\\,000\\,007$.

### --tests--

`musicFestival()` should return `75780067`.

```js
assert.strictEqual(musicFestival(), 75780067);
```

## 75

### --description--

Let $R(a, b, c)$ be the maximum area covered by three non-overlapping circles inside a triangle with edge lengths $a$, $b$ and $c$.

Let $S(n)$ be the average value of $R(a, b, c)$ over all integer triplets $(a, b, c)$ such that $1 ≤ a ≤ b ≤ c &lt; a + b ≤ n$.

You are given $S(2) = R(1, 1, 1) ≈ 0.31998$, $S(5) ≈ 1.25899$.

Find $S(1803)$ rounded to 5 decimal places behind the decimal point.

### --tests--

`circlePackingTwo()` should return `110242.87794`.

```js
assert.strictEqual(circlePackingTwo(), 110242.87794);
```

## 76

### --description--

The number sequence game starts with a sequence $S$ of $N$ numbers written on a line.

Two players alternate turns. At his turn, a player must select and remove either the first or the last number remaining in the sequence.

The player score is the sum of all the numbers he has taken. Each player attempts to maximize his own sum.

If $N = 4$ and $S = \\{1, 2, 10, 3\\}$, then each player maximizes his score as follows:

- Player 1: removes the first number (1)
- Player 2: removes the last number from the remaining sequence (3)
- Player 1: removes the last number from the remaining sequence (10)
- Player 2: removes the remaining number (2)

Player 1 score is $1 + 10 = 11$.

Let $F(N)$ be the score of player 1 if both players follow the optimal strategy for the sequence $S = \\{s_1, s_2, \ldots, s_N\\}$ defined as:

- $s_1 = 0$
- $s_{i + 1} = ({s_i}^2 + 45)$ modulo $1\\,000\\,000\\,007$

The sequence begins with $S = \\{0, 45, 2\\,070, 4\\,284\\,945, 753\\,524\\,550, 478\\,107\\,844, 894\\,218\\,625, \ldots\\}$.

You are given $F(2) = 45$, $F(4) = 4\\,284\\,990$, $F(100) = 26\\,365\\,463\\,243$, $F(104) = 2\\,495\\,838\\,522\\,951$.

Find $F({10}^8)$.

### --tests--

`numberSequenceGame()` should return `25044905874565164`.

```js
assert.strictEqual(numberSequenceGame(), 25044905874565164);
```

## 77

### --description--

Let us consider mixtures of three substances: $A$, $B$ and $C$. A mixture can be described by a ratio of the amounts of $A$, $B$, and $C$ in it, i.e., $(a : b : c)$. For example, a mixture described by the ratio (2 : 3 : 5) contains 20% $A$, 30% $B$ and 50% $C$.

For the purposes of this problem, we cannot separate the individual components from a mixture. However, we can combine different amounts of different mixtures to form mixtures with new ratios.

For example, say we have three mixtures with ratios (3 : 0 : 2), (3 : 6 : 11) and (3 : 3 : 4). By mixing 10 units of the first, 20 units of the second and 30 units of the third, we get a new mixture with ratio (6 : 5 : 9), since: ($10 \times \frac{3}{5} + 20 \times \frac{3}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{0}{5} + 20 \times \frac{6}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{2}{5} + 20 \times \frac{11}{20} + 30 \times \frac{4}{10}$) = (18 : 15 : 27) = (6 : 5 : 9)

However, with the same three mixtures, it is impossible to form the ratio (3 : 2 : 1), since the amount of $B$ is always less than the amount of $C$.

Let $n$ be a positive integer. Suppose that for every triple of integers $(a, b, c)$ with $0 ≤ a, b, c ≤ n$ and $gcd(a, b, c) = 1$, we have a mixture with ratio $(a : b : c)$. Let $M(n)$ be the set of all such mixtures.

For example, $M(2)$ contains the 19 mixtures with the following ratios:

{(0 : 0 : 1), (0 : 1 : 0), (0 : 1 : 1), (0 : 1 : 2), (0 : 2 : 1), (1 : 0 : 0), (1 : 0 : 1), (1 : 0 : 2), (1 : 1 : 0), (1 : 1 : 1), (1 : 1 : 2), (1 : 2 : 0), (1 : 2 : 1), (1 : 2 : 2), (2 : 0 : 1), (2 : 1 : 0), (2 : 1 : 1), (2 : 1 : 2), (2 : 2 : 1)}.

Let $E(n)$ be the number of subsets of $M(n)$ which can produce the mixture with ratio (1 : 1 : 1), i.e., the mixture with equal parts $A$, $B$ and $C$.

We can verify that $E(1) = 103$, $E(2) = 520\\,447$, $E(10)\bmod {11}^8 = 82\\,608\\,406$ and $E(500)\bmod {11}^8 = 13\\,801\\,403$.

Find $E(10\\,000\\,000)\bmod {11}^8$.

### --tests--

`mixtures()` should return `59510340`.

```js
assert.strictEqual(mixtures(), 59510340);
```

## 78

### --description--

Let $a_k$, $b_k$, and $c_k$ represent the three solutions (real or complex numbers) to the expression $\frac{1}{x} = {\left(\frac{k}{x} \right)}^2 (k + x^2) - kx$.

For instance, for $k = 5$, we see that $\\{a_5, b_5, c_5\\}$ is approximately $\\{5.727244, -0.363622 + 2.057397i, -0.363622 - 2.057397i\\}$.

Let $S(n) = \displaystyle\sum_{p = 1}^n \sum_{k = 1}^n {(a_k + b_k)}^p {(b_k + c_k)}^p {(c_k + a_k)}^p$ for all integers $p$, $k$ such that $1 ≤ p, k ≤ n$.

Interestingly, $S(n)$ is always an integer. For example, $S(4) = 51\\,160$.

Find $S({10}^6) \text{ modulo } 1\\,000\\,000\\,007$.

### --tests--

`rootsOnTheRise()` should return `191541795`.

```js
assert.strictEqual(rootsOnTheRise(), 191541795);
```

## 79

### --description--

Consider all the words which can be formed by selecting letters, in any order, from the phrase:

$$\mathbf{\text{thereisasyetinsufficientdataforameaningfulanswer}}$$

Suppose those with 15 letters or less are listed in alphabetical order and numbered sequentially starting at 1.

The list would include:

$$\begin{align}
  & 1: \text{a} \\\\
  & 2: \text{aa} \\\\
  & 3: \text{aaa} \\\\
  & 4: \text{aaaa} \\\\
  & 5: \text{aaaaa} \\\\
  & 6: \text{aaaaaa} \\\\
  & 7: \text{aaaaaac} \\\\
  & 8: \text{aaaaaacd} \\\\
  & 9: \text{aaaaaacde} \\\\
  & 10: \text{aaaaaacdee} \\\\
  & 11: \text{aaaaaacdeee} \\\\
  & 12: \text{aaaaaacdeeee} \\\\
  & 13: \text{aaaaaacdeeeee} \\\\
  & 14: \text{aaaaaacdeeeeee} \\\\
  & 15: \text{aaaaaacdeeeeeef} \\\\
  & 16: \text{aaaaaacdeeeeeeg} \\\\
  & 17: \text{aaaaaacdeeeeeeh} \\\\
  & \ldots \\\\
  & 28: \text{aaaaaacdeeeeeey} \\\\
  & 29: \text{aaaaaacdeeeeef} \\\\
  & 30: \text{aaaaaacdeeeeefe} \\\\
  & \ldots \\\\
  & 115246685191495242: \text{euleoywuttttsss} \\\\
  & 115246685191495243: \text{euler} \\\\
  & 115246685191495244: \text{eulera} \\\\
  & ... \\\\
  & 525069350231428029: \text{ywuuttttssssrrr} \\\\
\end{align}$$

Define $P(w)$ as the position of the word $w$.

Define $W(p)$ as the word in position $p$.

We can see that $P(w)$ and $W(p)$ are inverses: $P(W(p)) = p$ and $W(P(w)) = w$.

Examples:

$$\begin{align}
  & W(10) = \text{ aaaaaacdee} \\\\
  & P(\text{aaaaaacdee}) = 10 \\\\
  & W(115246685191495243) = \text{ euler} \\\\
  & P(\text{euler}) = 115246685191495243 \\\\
\end{align}$$

Find
$$W(P(\text{legionary}) + P(\text{calorimeters}) - P(\text{annihilate}) + P(\text{orchestrated}) - P(\text{fluttering})).$$

Give your answer using lowercase characters (no punctuation or space).

### --tests--

`euler480()` should return a string.

```js
assert(typeof euler480() === 'string');
```

`euler480()` should return the string `turnthestarson`.

```js
assert.strictEqual(euler480(), 'turnthestarson');
```

## --fcc-end--
    