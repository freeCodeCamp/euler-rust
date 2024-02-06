# Project Euler in Rust: 201 to 300
    
Complete the freeCodeCamp Project Euler problems in the Rust programming language using WebAssembly.

## 0

### --description--

For any set $A$ of numbers, let $sum(A)$ be the sum of the elements of $A$.

Consider the set $B = \\{1,3,6,8,10,11\\}$. There are 20 subsets of $B$ containing three elements, and their sums are:

$$\begin{align}
  & sum(\\{1,3,6\\}) = 10 \\\\
  & sum(\\{1,3,8\\}) = 12 \\\\
  & sum(\\{1,3,10\\}) = 14 \\\\
  & sum(\\{1,3,11\\}) = 15 \\\\
  & sum(\\{1,6,8\\}) = 15 \\\\
  & sum(\\{1,6,10\\}) = 17 \\\\
  & sum(\\{1,6,11\\}) = 18 \\\\
  & sum(\\{1,8,10\\}) = 19 \\\\
  & sum(\\{1,8,11\\}) = 20 \\\\
  & sum(\\{1,10,11\\}) = 22 \\\\
  & sum(\\{3,6,8\\}) = 17 \\\\
  & sum(\\{3,6,10\\}) = 19 \\\\
  & sum(\\{3,6,11\\}) = 20 \\\\
  & sum(\\{3,8,10\\}) = 21 \\\\
  & sum(\\{3,8,11\\}) = 22 \\\\
  & sum(\\{3,10,11\\}) = 24 \\\\
  & sum(\\{6,8,10\\}) = 24 \\\\
  & sum(\\{6,8,11\\}) = 25 \\\\
  & sum(\\{6,10,11\\}) = 27 \\\\
  & sum(\\{8,10,11\\}) = 29
\\end{align}$$

Some of these sums occur more than once, others are unique. For a set $A$, let $U(A,k)$ be the set of unique sums of $k$-element subsets of $A$, in our example we find $U(B,3) = \\{10,12,14,18,21,25,27,29\\}$ and $sum(U(B,3)) = 156$.

Now consider the $100$-element set $S = \\{1^2, 2^2, \ldots , {100}^2\\}$. $S$ has $100\\,891\\,344\\,545\\,564\\,193\\,334\\,812\\,497\\,256\\;$ $50$-element subsets.

Determine the sum of all integers which are the sum of exactly one of the $50$-element subsets of $S$, i.e. find $sum(U(S,50))$.

### --tests--

`uniqueSubsetsSum()` should return `115039000`.

```js
assert.strictEqual(uniqueSubsetsSum(), 115039000);
```

## 1

### --description--

Three mirrors are arranged in the shape of an equilateral triangle, with their reflective surfaces pointing inwards. There is an infinitesimal gap at each vertex of the triangle through which a laser beam may pass.

Label the vertices $A$, $B$ and $C$. There are 2 ways in which a laser beam may enter vertex $C$, bounce off 11 surfaces, then exit through the same vertex: one way is shown below; the other is the reverse of that.

<img class="img-responsive center-block" alt="one way in which laser beam may enter vertex C, bounce off 11 surfaces and exit through the same vertex" src="https://cdn.freecodecamp.org/curriculum/project-euler/laserbeam.gif" style="background-color: white; padding: 10px;">

There are 80840 ways in which a laser beam may enter vertex $C$, bounce off 1000001 surfaces, then exit through the same vertex.

In how many ways can a laser beam enter at vertex $C$, bounce off 12017639147 surfaces, then exit through the same vertex?

### --tests--

`laserbeam()` should return `1209002624`.

```js
assert.strictEqual(laserbeam(), 1209002624);
```

## 2

### --description--

The binomial coefficients $\displaystyle\binom{n}{k}$ can be arranged in triangular form, Pascal's triangle, like this:

$$\begin{array}{ccccccccccccccc}
   &   &   &   &    &    &    &  1 &    &    &    &   &   &   &   \\\\
   &   &   &   &    &    &  1 &    & 1  &    &    &   &   &   &   \\\\
   &   &   &   &    &  1 &    &  2 &    &  1 &    &   &   &   &   \\\\
   &   &   &   &  1 &    &  3 &    &  3 &    &  1 &   &   &   &   \\\\
   &   &   & 1 &    &  4 &    &  6 &    &  4 &    & 1 &   &   &   \\\\
   &   & 1 &   &  5 &    & 10 &    & 10 &    &  5 &   & 1 &   &   \\\\
   & 1 &   & 6 &    & 15 &    & 20 &    & 15 &    & 6 &   & 1 &   \\\\
 1 &   & 7 &   & 21 &    & 35 &    & 35 &    & 21 &   & 7 &   & 1 \\\\
   &   &   &   &    &    &    & \ldots
\end{array}$$

It can be seen that the first eight rows of Pascal's triangle contain twelve distinct numbers: 1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 21 and 35.

A positive integer n is called squarefree if no square of a prime divides n. Of the twelve distinct numbers in the first eight rows of Pascal's triangle, all except 4 and 20 are squarefree. The sum of the distinct squarefree numbers in the first eight rows is 105.

Find the sum of the distinct squarefree numbers in the first 51 rows of Pascal's triangle.

### --tests--

`squarefreeBinomialCoefficients()` should return `34029210557338`.

```js
assert.strictEqual(squarefreeBinomialCoefficients(), 34029210557338);
```

## 3

### --description--

A Hamming number is a positive number which has no prime factor larger than 5.

So the first few Hamming numbers are 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15.

There are 1105 Hamming numbers not exceeding ${10}^8$.

We will call a positive number a generalised Hamming number of type $n$, if it has no prime factor larger than $n$. Hence the Hamming numbers are the generalised Hamming numbers of type 5.

How many generalised Hamming numbers of type 100 are there which don't exceed ${10}^9$?

### --tests--

`generalisedHammingNumbers()` should return `2944730`.

```js
assert.strictEqual(generalisedHammingNumbers(), 2944730);
```

## 4

### --description--

Peter has nine four-sided (pyramidal) dice, each with faces numbered 1, 2, 3, 4.

Colin has six six-sided (cubic) dice, each with faces numbered 1, 2, 3, 4, 5, 6.

Peter and Colin roll their dice and compare totals: the highest total wins. The result is a draw if the totals are equal.

What is the probability that Pyramidal Pete beats Cubic Colin? Give your answer rounded to seven decimal places in the form 0.abcdefg

### --tests--

`diceGame()` should return `0.5731441`.

```js
assert.strictEqual(diceGame(), 0.5731441);
```

## 5

### --description--

Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0, where each "_" is a single digit.

### --tests--

`concealedSquare()` should return `1389019170`.

```js
assert.strictEqual(concealedSquare(), 1389019170);
```

## 6

### --description--

For some positive integers $k$, there exists an integer partition of the form $4^t = 2^t + k$,

where $4^t$, $2^t$, and $k$ are all positive integers and $t$ is a real number.

The first two such partitions are $4^1 = 2^1 + 2$ and $4^{1.584\\,962\\,5\ldots} = 2^{1.584\\,962\\,5\ldots} + 6$.

Partitions where $t$ is also an integer are called perfect. For any $m ≥ 1$ let $P(m)$ be the proportion of such partitions that are perfect with $k ≤ m$.

Thus $P(6) = \frac{1}{2}$.

In the following table are listed some values of $P(m)$

$$\begin{align}
  & P(5) = \frac{1}{1}    \\\\
  & P(10) = \frac{1}{2}   \\\\
  & P(15) = \frac{2}{3}   \\\\
  & P(20) = \frac{1}{2}   \\\\
  & P(25) = \frac{1}{2}   \\\\
  & P(30) = \frac{2}{5}   \\\\
  & \ldots                \\\\
  & P(180) = \frac{1}{4}  \\\\
  & P(185) = \frac{3}{13}
\end{align}$$

Find the smallest $m$ for which $P(m) &lt; \frac{1}{12\\,345}$

### --tests--

`integerPartitionEquations()` should return `44043947822`.

```js
assert.strictEqual(integerPartitionEquations(), 44043947822);
```

## 7

### --description--

A robot moves in a series of one-fifth circular arcs (72°), with a free choice of a clockwise or an anticlockwise arc for each step, but no turning on the spot.

One of 70932 possible closed paths of 25 arcs starting northward is

<img class="img-responsive center-block" alt="closed path of 25 arcs, starting northward" src="https://cdn.freecodecamp.org/curriculum/project-euler/robot-walks.gif" style="background-color: white; padding: 10px;">

Given that the robot starts facing North, how many journeys of 70 arcs in length can it take that return it, after the final arc, to its starting position?

**Note:** Any arc may be traversed multiple times.

### --tests--

`robotWalks()` should return `331951449665644800`.

```js
assert.strictEqual(robotWalks(), 331951449665644800);
```

## 8

### --description--

A $k$-input binary truth table is a map from $k$ input bits (binary digits, 0 [false] or 1 [true]) to 1 output bit. For example, the $2$-input binary truth tables for the logical $AND$ and $XOR$ functions are:

| x | y | x AND y |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

| x | y | x XOR y |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

How many $6$-input binary truth tables, $τ$, satisfy the formula

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

for all $6$-bit inputs ($a$, $b$, $c$, $d$, $e$, $f$)?

### --tests--

`circularLogic()` should return `15964587728784`.

```js
assert.strictEqual(circularLogic(), 15964587728784);
```

## 9

### --description--

Consider the set $S(r)$ of points ($x$,$y$) with integer coordinates satisfying $|x| + |y| ≤ r$.

Let $O$ be the point (0,0) and $C$ the point ($\frac{r}{4}$,$\frac{r}{4}$).

Let $N(r)$ be the number of points $B$ in $S(r)$, so that the triangle $OBC$ has an obtuse angle, i.e. the largest angle $α$ satisfies $90°&lt;α&lt;180°$.

So, for example, $N(4)=24$ and $N(8)=100$.

What is $N(1\\,000\\,000\\,000)$?

### --tests--

`obtuseAngledTriangles()` should return `1598174770174689500`.

```js
assert.strictEqual(obtuseAngledTriangles(), 1598174770174689500);
```

## 10

### --description--

For a positive integer $n$, let $σ_2(n)$ be the sum of the squares of its divisors. For example,

$$σ_2(10) = 1 + 4 + 25 + 100 = 130$$

Find the sum of all $n$, $0 &lt; n &lt; 64\\,000\\,000$ such that $σ_2(n)$ is a perfect square.

### --tests--

`divisorSquareSum()` should return `1922364685`.

```js
assert.strictEqual(divisorSquareSum(), 1922364685);
```

## 11

### --description--

An axis-aligned cuboid, specified by parameters $\{ (x_0,y_0,z_0), (dx,dy,dz) \}$, consists of all points ($X$,$Y$,$Z$) such that $x_0 ≤ X ≤ x_0 + dx$, $y_0 ≤ Y ≤ y_0 + dy$ and $z_0 ≤ Z ≤ z_0 + dz$. The volume of the cuboid is the product, $dx × dy × dz$. The combined volume of a collection of cuboids is the volume of their union and will be less than the sum of the individual volumes if any cuboids overlap.

Let $C_1, \ldots, C_{50000}$ be a collection of 50000 axis-aligned cuboids such that $C_n$ has parameters

$$\begin{align}
  & x_0 = S_{6n - 5} \\; \text{modulo} \\; 10000    \\\\
  & y_0 = S_{6n - 4} \\; \text{modulo} \\; 10000    \\\\
  & z_0 = S_{6n - 3} \\; \text{modulo} \\; 10000    \\\\
  & dx = 1 + (S_{6n - 2} \\; \text{modulo} \\; 399) \\\\
  & dy = 1 + (S_{6n - 1} \\; \text{modulo} \\; 399) \\\\
  & dz = 1 + (S_{6n} \\; \text{modulo} \\; 399)     \\\\
\end{align}$$

where $S_1, \ldots, S_{300000}$ come from the "Lagged Fibonacci Generator":

For $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007k^3] \\; (modulo \\; 1000000)$

For $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}] \\; (modulo \\; 1000000)$

Thus, $C_1$ has parameters $\{(7,53,183), (94,369,56)\}$, $C_2$ has parameters $\{(2383,3563,5079), (42,212,344)\}$, and so on.

The combined volume of the first 100 cuboids, $C_1, \ldots, C_{100}$, is 723581599.

What is the combined volume of all 50000 cuboids, $C_1, \ldots, C_{50000}$?

### --tests--

`combinedValueOfCuboids()` should return `328968937309`.

```js
assert.strictEqual(combinedValueOfCuboids(), 328968937309);
```

## 12

### --description--

A 30×30 grid of squares contains 900 fleas, initially one flea per square.

When a bell is rung, each flea jumps to an adjacent square at random (usually 4 possibilities, except for fleas on the edge of the grid or at the corners).

What is the expected number of unoccupied squares after 50 rings of the bell? Give your answer rounded to six decimal places.

### --tests--

`fleaCircus()` should return `330.721154`.

```js
assert.strictEqual(fleaCircus(), 330.721154);
```

## 13

### --description--

Let $φ$ be Euler's totient function, i.e. for a natural number $n$, $φ(n)$ is the number of $k$, $1 ≤ k ≤ n$, for which $gcd(k,n) = 1$.

By iterating $φ$, each positive integer generates a decreasing chain of numbers ending in 1. E.g. if we start with 5 the sequence 5,4,2,1 is generated. Here is a listing of all chains with length 4:

$$\begin{align}
   5,4,2,1 & \\\\
   7,6,2,1 & \\\\
   8,4,2,1 & \\\\
   9,6,2,1 & \\\\
  10,4,2,1 & \\\\
  12,4,2,1 & \\\\
  14,6,2,1 & \\\\
  18,6,2,1 &
\end{align}$$

Only two of these chains start with a prime, their sum is 12.

What is the sum of all primes less than $40\\,000\\,000$ which generate a chain of length 25?

### --tests--

`totientChains()` should return `1677366278943`.

```js
assert.strictEqual(totientChains(), 1677366278943);
```

## 14

### --description--

Consider the problem of building a wall out of 2×1 and 3×1 bricks (horizontal×vertical dimensions) such that, for extra strength, the gaps between horizontally-adjacent bricks never line up in consecutive layers, i.e. never form a "running crack".

For example, the following 9×3 wall is not acceptable due to the running crack shown in red:

<img class="img-responsive center-block" alt="9x3 wall with one lined up gap between horizontally-adjacent bricks" src="https://cdn.freecodecamp.org/curriculum/project-euler/crack-free-walls.gif" style="background-color: white; padding: 10px;">

There are eight ways of forming a crack-free 9×3 wall, written $W(9,3) = 8$.

Calculate $W(32,10)$.

### --tests--

`crackFreeWalls()` should return `806844323190414`.

```js
assert.strictEqual(crackFreeWalls(), 806844323190414);
```

## 15

### --description--

Consider numbers $t(n)$ of the form $t(n) = 2n^2 - 1$ with $n > 1$.

The first such numbers are 7, 17, 31, 49, 71, 97, 127 and 161.

It turns out that only $49 = 7 \times 7$ and $161 = 7 \times 23$ are not prime.

For $n ≤ 10000$ there are 2202 numbers $t(n)$ that are prime.

How many numbers $t(n)$ are prime for $n ≤ 50\\,000\\,000$?

### --tests--

`primalityOfNumbers()` should return `5437849`.

```js
assert.strictEqual(primalityOfNumbers(), 5437849);
```

## 16

### --description--

A positive integer with $k$ (decimal) digits is called balanced if its first $⌈\frac{k}{2}⌉$ digits sum to the same value as its last $⌈\frac{k}{2}⌉$ digits, where $⌈x⌉$, pronounced ceiling of $x$, is the smallest integer $≥ x$, thus $⌈π⌉ = 4$ and $⌈5⌉ = 5$.

So, for example, all palindromes are balanced, as is 13722.

Let $T(n)$ be the sum of all balanced numbers less than $10^n$.

Thus: $T(1) = 45$, $T(2) = 540$ and $T(5) = 334\\,795\\,890$.

Find $T(47)\\,mod\\,3^{15}$

### --tests--

`balancedNumbers()` should return `6273134`.

```js
assert.strictEqual(balancedNumbers(), 6273134);
```

## 17

### --description--

Consider the right-angled triangle with sides $a=7$, $b=24$ and $c=25$.

The area of this triangle is 84, which is divisible by the perfect numbers 6 and 28.

Moreover it is a primitive right-angled triangle as $gcd(a,b) = 1$ and $gcd(b,c) = 1$.

Also $c$ is a perfect square.

We will call a right-angled triangle perfect if:

- it is a primitive right-angled triangle
- its hypotenuse is a perfect square

We will call a right-angled triangle super-perfect if:

- it is a perfect right-angled triangle
- its area is a multiple of the perfect numbers 6 and 28.

How many perfect right-angled triangles with $c ≤ {10}^{16}$ exist that are not super-perfect?

### --tests--

`perfectRightAngledTriangles()` should return `0`.

```js
assert.strictEqual(perfectRightAngledTriangles(), 0);
```

## 18

### --description--

Let $A$ and $B$ be bit strings (sequences of 0's and 1's).

If $A$ is equal to the <u>left</u>most length($A$) bits of $B$, then $A$ is said to be a prefix of $B$.

For example, 00110 is a prefix of <u>00110</u>1001, but not of 00111 or 100110.

A prefix-free code of size $n$ is a collection of $n$ distinct bit strings such that no string is a prefix of any other. For example, this is a prefix-free code of size 6:

$$0000, 0001, 001, 01, 10, 11$$

Now suppose that it costs one penny to transmit a '0' bit, but four pence to transmit a '1'. Then the total cost of the prefix-free code shown above is 35 pence, which happens to be the cheapest possible for the skewed pricing scheme in question. In short, we write $Cost(6) = 35$.

What is $Cost(10^9)$?

### --tests--

`skewCostCoding()` should return `64564225042`.

```js
assert.strictEqual(skewCostCoding(), 64564225042);
```

## 19

### --description--

Let $D_0$ be the two-letter string "Fa". For $n ≥ 1$, derive $D_n$ from $D_{n - 1}$ by the string-rewriting rules:

- "a" → "aRbFR"
- "b" → "LFaLb"

Thus, $D_0$ = "Fa", $D_1$ = "FaRbFR", $D_2$ = "FaRbFRRLFaLbFR", and so on.

These strings can be interpreted as instructions to a computer graphics program, with "F" meaning "draw forward one unit", "L" meaning "turn left 90 degrees", "R" meaning "turn right 90 degrees", and "a" and "b" being ignored. The initial position of the computer cursor is (0,0), pointing up towards (0,1).

Then $D_n$ is an exotic drawing known as the Heighway Dragon of order $n$. For example, $D_{10}$ is shown below; counting each "F" as one step, the highlighted spot at (18,16) is the position reached after 500 steps.

<img class="img-responsive center-block" alt="drawing of the Heighway Dragon after 500 steps" src="https://cdn.freecodecamp.org/curriculum/project-euler/heighway-dragon.gif" style="background-color: white; padding: 10px;">

What is the position of the cursor after ${10}^{12}$ steps in $D_{50}$? Give your answer as a string in the form `x,y` with no spaces.

### --tests--

`heighwayDragon()` should return a string.

```js
assert(typeof heighwayDragon() === 'string');
```

`heighwayDragon()` should return the string `139776,963904`.

```js
assert.strictEqual(heighwayDragon(), '139776,963904');
```

## 20

### --description--

We shall call a positive integer $A$ an "Alexandrian integer", if there exist integers $p$, $q$, $r$ such that:

$$A = p \times q \times r$$

and

$$\frac{1}{A} = \frac{1}{p} + \frac{1}{q} + \frac{1}{r}$$


For example, 630 is an Alexandrian integer ($p = 5$, $q = −7$, $r = −18$). In fact, 630 is the 6th Alexandrian integer, the first 6 Alexandrian integers being: 6, 42, 120, 156, 420 and 630.

Find the 150000th Alexandrian integer.

### --tests--

`alexandrianIntegers()` should return `1884161251122450`.

```js
assert.strictEqual(alexandrianIntegers(), 1884161251122450);
```

## 21

### --description--

What is the length of the shortest pipe, of internal radius 50mm, that can fully contain 21 balls of radii 30mm, 31mm, ..., 50mm?

Give your answer in micrometres (${10}^{-6}$ m) rounded to the nearest integer.

### --tests--

`spherePacking()` should return `1590933`.

```js
assert.strictEqual(spherePacking(), 1590933);
```

## 22

### --description--

Let us call an integer sided triangle with sides $a ≤ b ≤ c$ barely acute if the sides satisfy $a^2 + b^2 = c^2 + 1$.

How many barely acute triangles are there with perimeter $≤ 25\\,000\\,000$?

### --tests--

`almostRightAngledTrianglesOne()` should return `61614848`.

```js
assert.strictEqual(almostRightAngledTrianglesOne(), 61614848);
```

## 23

### --description--

Let us call an integer sided triangle with sides $a ≤ b ≤ c$ barely obtuse if the sides satisfy $a^2 + b^2 = c^2 - 1$.

How many barely obtuse triangles are there with perimeter $≤ 75\\,000\\,000$?

### --tests--

`almostRightAngledTrianglesTwo()` should return `4137330`.

```js
assert.strictEqual(almostRightAngledTrianglesTwo(), 4137330);
```

## 24

### --description--

The sequence 1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201 ...

is defined by $T_1 = T_2 = T_3 = 1$ and $T_n = T_{n - 1} + T_{n - 2} + T_{n - 3}$.

It can be shown that 27 does not divide any terms of this sequence. In fact, 27 is the first odd number with this property.

Find the ${124}^{\text{th}}$ odd number that does not divide any terms of the above sequence.

### --tests--

`tribonacciNonDivisors()` should return `2009`.

```js
assert.strictEqual(tribonacciNonDivisors(), 2009);
```

## 25

### --description--

The blancmange curve is the set of points ($x$,$y$) such that $0 ≤ x ≤ 1$ and $\displaystyle y = \sum_{n = 0}^{\infty} \frac{s(2^nx)}{2^n}$, where $s(x)$ is the distance from $x$ to the nearest integer.

The area under the blancmange curve is equal to $\frac{1}{2}$, shown in pink in the diagram below.

<img class="img-responsive center-block" alt="diagram of blancmange curve, with circle C shown on diagram" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-scoop-of-blancmange.gif" style="background-color: white; padding: 10px;">

Let $C$ be the circle with centre ($\frac{1}{4}$,$\frac{1}{2}$) and radius $\frac{1}{4}$, shown in black in the diagram.

What area under the blancmange curve is enclosed by $C$? Give your answer rounded to eight decimal places in the form 0.abcdefgh

### --tests--

`scoopOfBlancmange()` should return `0.11316017`.

```js
assert.strictEqual(scoopOfBlancmange(), 0.11316017);
```

## 26

### --description--

"The Chase" is a game played with two dice and an even number of players.

The players sit around a table; the game begins with two opposite players having one die each. On each turn, the two players with a die roll it.

If the player rolls a 1, he passes the die to his neighbour on the left.

If the player rolls a 6, he passes the die to his neighbour on the right.

Otherwise, he keeps the die for the next turn.

The game ends when one player has both dice after they have been rolled and passed; that player has then lost.

In a game with 100 players, what is the expected number of turns the game lasts? Give your answer rounded to ten significant digits.

### --tests--

`theChase()` should return `3780.618622`.

```js
assert.strictEqual(theChase(), 3780.618622);
```

## 27

### --description--

Let $S_n$ be the regular $n$-sided polygon – or shape – whose vertices $v_k (k = 1, 2, \ldots, n)$ have coordinates:

$$\begin{align}
  & x_k = cos(\frac{2k - 1}{n} × 180°) \\\\
  & y_k = sin(\frac{2k - 1}{n} × 180°)
\end{align}$$

Each $S_n$ is to be interpreted as a filled shape consisting of all points on the perimeter and in the interior.

The Minkowski sum, $S + T$, of two shapes $S$ and $T$ is the result of adding every point in $S$ to every point in $T$, where point addition is performed coordinate-wise: $(u, v) + (x, y) = (u + x, v + y)$.

For example, the sum of $S_3$ and $S_4$ is the six-sided shape shown in pink below:

<img class="img-responsive center-block" alt="image showing S_3, S_4 and S_3 + S_4" src="https://cdn.freecodecamp.org/curriculum/project-euler/minkowski-sums.png" style="background-color: white; padding: 10px;">

How many sides does $S_{1864} + S_{1865} + \ldots + S_{1909}$ have?

### --tests--

`minkowskiSums()` should return `86226`.

```js
assert.strictEqual(minkowskiSums(), 86226);
```

## 28

### --description--

Consider the number 3600. It is very special, because

$$\begin{align}
  & 3600 = {48}^2 + {36}^2   \\\\
  & 3600 = {20}^2 + {2×40}^2 \\\\
  & 3600 = {30}^2 + {3×30}^2 \\\\
  & 3600 = {45}^2 + {7×15}^2 \\\\
\end{align}$$

Similarly, we find that $88201 = {99}^2 + {280}^2 = {287}^2 + 2 × {54}^2 = {283}^2 + 3 × {52}^2 = {197}^2 + 7 × {84}^2$.

In 1747, Euler proved which numbers are representable as a sum of two squares. We are interested in the numbers $n$ which admit representations of all of the following four types:

$$\begin{align}
  & n = {a_1}^2 + {b_1}^2  \\\\
  & n = {a_2}^2 + 2{b_2}^2 \\\\
  & n = {a_3}^2 + 3{b_3}^2 \\\\
  & n = {a_7}^2 + 7{b_7}^2 \\\\
\end{align}$$

where the $a_k$ and $b_k$ are positive integers.

There are 75373 such numbers that do not exceed ${10}^7$.

How many such numbers are there that do not exceed $2 × {10}^9$?

### --tests--

`representationsUsingSquares()` should return `11325263`.

```js
assert.strictEqual(representationsUsingSquares(), 11325263);
```

## 29

### --description--

For any two strings of digits, $A$ and $B$, we define $F_{A,B}$ to be the sequence ($A, B, AB, BAB, ABBAB, \ldots$) in which each term is the concatenation of the previous two.

Further, we define $D_{A,B}(n)$ to be the $n^{\text{th}}$ digit in the first term of $F_{A,B}$ that contains at least $n$ digits.

Example:

Let $A = 1\\,415\\,926\\,535$, $B = 8\\,979\\,323\\,846$. We wish to find $D_{A,B}(35)$, say.

The first few terms of $F_{A,B}$ are:

$$\begin{align}
  & 1\\,415\\,926\\,535 \\\\
  & 8\\,979\\,323\\,846 \\\\
  & 14\\,159\\,265\\,358\\,979\\,323\\,846 \\\\
  & 897\\,932\\,384\\,614\\,159\\,265\\,358\\,979\\,323\\,846 \\\\
  & 14\\,159\\,265\\,358\\,979\\,323\\,846\\,897\\,932\\,384\\,614\\,15\color{red}{9}\\,265\\,358\\,979\\,323\\,846
\end{align}$$

Then $D_{A,B}(35)$ is the ${35}^{\text{th}}$ digit in the fifth term, which is 9.

Now we use for $A$ the first 100 digits of $π$ behind the decimal point:

$$\begin{align}
  & 14\\,159\\,265\\,358\\,979\\,323\\,846\\,264\\,338\\,327\\,950\\,288\\,419\\,716\\,939\\,937\\,510 \\\\
  & 58\\,209\\,749\\,445\\,923\\,078\\,164\\,062\\,862\\,089\\,986\\,280\\,348\\,253\\,421\\,170\\,679
\end{align}$$

and for $B$ the next hundred digits:

$$\begin{align}
  & 82\\,148\\,086\\,513\\,282\\,306\\,647\\,093\\,844\\,609\\,550\\,582\\,231\\,725\\,359\\,408\\,128 \\\\
  & 48\\,111\\,745\\,028\\,410\\,270\\,193\\,852\\,110\\,555\\,964\\,462\\,294\\,895\\,493\\,038\\,196
\end{align}$$

Find $\sum_{n = 0, 1, \ldots, 17} {10}^n × D_{A,B}((127 + 19n) × 7^n)$.

### --tests--

`fibonacciWords()` should return `850481152593119200`.

```js
assert.strictEqual(fibonacciWords(), 850481152593119200);
```

## 30

### --description--

The binomial coefficient $\displaystyle\binom{10}{3} = 120$.

$120 = 2^3 × 3 × 5 = 2 × 2 × 2 × 3 × 5$, and $2 + 2 + 2 + 3 + 5 = 14$.

So the sum of the terms in the prime factorisation of $\displaystyle\binom{10}{3}$ is $14$.

Find the sum of the terms in the prime factorisation of $\binom{20\\,000\\,000}{15\\,000\\,000}$.

### --tests--

`primeFactorisation()` should return `7526965179680`.

```js
assert.strictEqual(primeFactorisation(), 7526965179680);
```

## 31

### --description--

Two players share an unbiased coin and take it in turns to play "The Race".

On Player 1's turn, he tosses the coin once: if it comes up Heads, he scores one point; if it comes up Tails, he scores nothing.

On Player 2's turn, she chooses a positive integer $T$ and tosses the coin $T$ times: if it comes up all Heads, she scores $2^{T - 1}$ points; otherwise, she scores nothing.

Player 1 goes first. The winner is the first to 100 or more points.

On each turn Player 2 selects the number, $T$, of coin tosses that maximises the probability of her winning.

What is the probability that Player 2 wins?

Give your answer rounded to eight decimal places in the form 0.abcdefgh .

### --tests--

`theRace()` should return `0.83648556`.

```js
assert.strictEqual(theRace(), 0.83648556);
```

## 32

### --description--

Let $f(N)$ be the number of points with integer coordinates that are on a circle passing through $(0,0)$, $(N,0)$,$(0,N)$, and $(N,N)$.

It can be shown that $f(10000) = 36$.

What is the sum of all positive integers $N ≤ {10}^{11}$ such that $f(N) = 420$?

### --tests--

`latticePointsOnACircle()` should return `271204031455541300`.

```js
assert.strictEqual(latticePointsOnACircle(), 271204031455541300);
```

## 33

### --description--

For an integer $n ≥ 4$, we define the lower prime square root of $n$, denoted by $lps(n)$, as the $\text{largest prime} ≤ \sqrt{n}$ and the upper prime square root of $n$, $ups(n)$, as the $\text{smallest prime} ≥ \sqrt{n}$.

So, for example, $lps(4) = 2 = ups(4)$, $lps(1000) = 31$, $ups(1000) = 37$.

Let us call an integer $n ≥ 4$ semidivisible, if one of $lps(n)$ and $ups(n)$ divides $n$, but not both.

The sum of the semidivisible numbers not exceeding 15 is 30, the numbers are 8, 10 and 12. 15 is not semidivisible because it is a multiple of both $lps(15) = 3$ and $ups(15) = 5$. As a further example, the sum of the 92 semidivisible numbers up to 1000 is 34825.

What is the sum of all semidivisible numbers not exceeding 999966663333?

### --tests--

`semidivisibleNumbers()` should return `1259187438574927000`.

```js
assert.strictEqual(semidivisibleNumbers(), 1259187438574927000);
```

## 34

### --description--

Given is the arithmetic-geometric sequence $u(k) = (900 - 3k)r^{k - 1}$.

Let $s(n) = \sum_{k=1 \ldots n} u(k)$.

Find the value of $r$ for which $s(5000) = -600\\,000\\,000\\,000$.

Give your answer rounded to 12 places behind the decimal point.

### --tests--

`arithmeticGeometricSequence()` should return `1.002322108633`.

```js
assert.strictEqual(arithmeticGeometricSequence(), 1.002322108633);
```

## 35

### --description--

Suppliers 'A' and 'B' provided the following numbers of products for the luxury hamper market:

|       Product      | 'A'  | 'B'  |
|--------------------|------|------|
|    Beluga Caviar   | 5248 | 640  |
|    Christmas Cake  | 1312 | 1888 |
|    Gammon Joint    | 2624 | 3776 |
|    Vintage Port    | 5760 | 3776 |
| Champagne Truffles | 3936 | 5664 |

Although the suppliers try very hard to ship their goods in perfect condition, there is inevitably some spoilage - i.e. products gone bad.

The suppliers compare their performance using two types of statistic:

- The five per-product spoilage rates for each supplier are equal to the number of products gone bad divided by the number of products supplied, for each of the five products in turn.
- The overall spoilage rate for each supplier is equal to the total number of products gone bad divided by the total number of products provided by that supplier.

To their surprise, the suppliers found that each of the five per-product spoilage rates was worse (higher) for 'B' than for 'A' by the same factor (ratio of spoilage rates), $m > 1$; and yet, paradoxically, the overall spoilage rate was worse for 'A' than for 'B', also by a factor of $m$.

There are thirty-five $m > 1$ for which this surprising result could have occurred, the smallest of which is $\frac{1476}{1475}$.

What's the largest possible value of $m$? Give your answer as a string with fraction reduced to its lowest terms, in the form `u/v`.

### --tests--

`luxuryHampers()` should return a string.

```js
assert(typeof luxuryHampers() === 'string');
```

`luxuryHampers()` should return the string `123/59`.

```js
assert.strictEqual(luxuryHampers(), '123/59');
```

## 36

### --description--

Let $T(n)$ be the number of tours over a 4 × $n$ playing board such that:

- The tour starts in the top left corner.
- The tour consists of moves that are up, down, left, or right one square.
- The tour visits each square exactly once.
- The tour ends in the bottom left corner.

The diagram shows one tour over a 4 × 10 board:

<img class="img-responsive center-block" alt="one tour over 4 x 10 board" src="https://cdn.freecodecamp.org/curriculum/project-euler/tours-on-a-4-x-n-playing-board.gif" style="background-color: white; padding: 10px;">

$T(10)$ is 2329. What is $T({10}^{12})$ modulo ${10}^8$?

### --tests--

`toursOnPlayingBoard()` should return `15836928`.

```js
assert.strictEqual(toursOnPlayingBoard(), 15836928);
```

## 37

### --description--

Create a sequence of numbers using the "Blum Blum Shub" pseudo-random number generator:

$$
s_0 = 14025256 \\\\
s_{n + 1} = {s_n}^2 \\; mod \\; 20\\,300\\,713
$$

Concatenate these numbers $s_0s_1s_2\ldots$ to create a string $w$ of infinite length. Then, $w = 14025256741014958470038053646\ldots$

For a positive integer $k$, if no substring of $w$ exists with a sum of digits equal to $k$, $p(k)$ is defined to be zero. If at least one substring of $w$ exists with a sum of digits equal to $k$, we define $p(k) = z$, where $z$ is the starting position of the earliest such substring.

For instance:

The substrings 1, 14, 1402, … with respective sums of digits equal to 1, 5, 7, … start at position 1, hence $p(1) = p(5) = p(7) = \ldots = 1$.

The substrings 4, 402, 4025, … with respective sums of digits equal to 4, 6, 11, … start at position 2, hence $p(4) = p(6) = p(11) = \ldots = 2$.

The substrings 02, 0252, … with respective sums of digits equal to 2, 9, … start at position 3, hence $p(2) = p(9) = \ldots = 3$.

Note that substring 025 starting at position 3, has a sum of digits equal to 7, but there was an earlier substring (starting at position 1) with a sum of digits equal to 7, so $p(7) = 1$, not 3.

We can verify that, for $0 &lt; k ≤ {10}^3$, $\sum p(k) = 4742$.

Find $\sum p(k)$, for $0 &lt; k ≤ 2 \times {10}^{15}$.

### --tests--

`infiniteStringTour()` should return `9922545104535660`.

```js
assert.strictEqual(infiniteStringTour(), 9922545104535660);
```

## 38

### --description--

A set of disks numbered 1 through 100 are placed in a line in random order.

What is the probability that we have a partial derangement such that exactly 22 prime number discs are found away from their natural positions? (Any number of non-prime disks may also be found in or out of their natural positions.)

Give your answer rounded to 12 places behind the decimal point in the form 0.abcdefghijkl.

### --tests--

`twentyTwoFoolishPrimes()` should return `0.001887854841`.

```js
assert.strictEqual(twentyTwoFoolishPrimes(), 0.001887854841);
```

## 39

### --description--

There are 1111 ways in which five 6-sided dice (sides numbered 1 to 6) can be rolled so that the top three sum to 15. Some examples are:

$$\begin{align}
  & D_1,D_2,D_3,D_4,D_5 = 4,3,6,3,5 \\\\
  & D_1,D_2,D_3,D_4,D_5 = 4,3,3,5,6 \\\\
  & D_1,D_2,D_3,D_4,D_5 = 3,3,3,6,6 \\\\
  & D_1,D_2,D_3,D_4,D_5 = 6,6,3,3,3
\end{align}$$

In how many ways can twenty 12-sided dice (sides numbered 1 to 12) be rolled so that the top ten sum to 70?

### --tests--

`topDice()` should return `7448717393364182000`.

```js
assert.strictEqual(topDice(), 7448717393364182000);
```

## 40

### --description--

For a positive integer $n$, let $σ(n)$ be the sum of all divisors of $n$, so e.g. $σ(6) = 1 + 2 + 3 + 6 = 12$.

A perfect number, as you probably know, is a number with $σ(n) = 2n$.

Let us define the perfection quotient of a positive integer as $p(n) = \frac{σ(n)}{n}$.

Find the sum of all positive integers $n ≤ {10}^{18}$ for which $p(n)$ has the form $k + \frac{1}{2}$, where $k$ is an integer.

### --tests--

`perfectionQuotients()` should return `482316491800641150`.

```js
assert.strictEqual(perfectionQuotients(), 482316491800641150);
```

## 41

### --description--

Given the set {1,2,..., $n$}, we define $f(n, k)$ as the number of its $k$-element subsets with an odd sum of elements. For example, $f(5,3) = 4$, since the set {1,2,3,4,5} has four 3-element subsets having an odd sum of elements, i.e.: {1,2,4}, {1,3,5}, {2,3,4} and {2,4,5}.

When all three values $n$, $k$ and $f(n, k)$ are odd, we say that they make an odd-triplet $[n, k, f(n, k)]$.

There are exactly five odd-triplets with $n ≤ 10$, namely: $[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $[5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$ and $[9, 9, f(9, 9) = 1]$.

How many odd-triplets are there with $n ≤ {10}^{12}$?

### --tests--

`oddTriplets()` should return `997104142249036700`.

```js
assert.strictEqual(oddTriplets(), 997104142249036700);
```

## 42

### --description--

A positive fraction whose numerator is less than its denominator is called a proper fraction.

For any denominator, $d$, there will be $d−1$ proper fractions; for example, with $d = 12$:

$$\frac{1}{12}, \frac{2}{12}, \frac{3}{12}, \frac{4}{12}, \frac{5}{12}, \frac{6}{12}, \frac{7}{12}, \frac{8}{12}, \frac{9}{12}, \frac{10}{12}, \frac{11}{12}$$

We shall call a fraction that cannot be cancelled down a resilient fraction.

Furthermore we shall define the resilience of a denominator, $R(d)$, to be the ratio of its proper fractions that are resilient; for example, $R(12) = \frac{4}{11}$.

In fact, $d = 12$ is the smallest denominator having a resilience $R(d) &lt; \frac{4}{10}$.

Find the smallest denominator $d$, having a resilience $R(d) &lt; \frac{15\\,499}{94\\,744}$.

### --tests--

`resilience()` should return `892371480`.

```js
assert.strictEqual(resilience(), 892371480);
```

## 43

### --description--

You probably know the game Fifteen Puzzle. Here, instead of numbered tiles, we have seven red tiles and eight blue tiles.

A move is denoted by the uppercase initial of the direction (Left, Right, Up, Down) in which the tile is slid, e.g. starting from configuration ($S$), by the sequence $LULUR$ we reach the configuration ($E$):

($S$) <img class="img-responsive" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-1.gif" style="display: inline-block; background-color: white; padding: 10px;">, ($E$) <img class="img-responsive" alt="configuration E" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-2.gif" style="display: inline-block; background-color: white; padding: 10px;">

For each path, its checksum is calculated by (pseudocode):

$$\begin{align}
  & \text{checksum} = 0 \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_1) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_2) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \ldots \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_n) \\; \text{mod} \\; 100\\,000\\,007
\end{align}$$

where $m_k$ is the ASCII value of the $k^{\text{th}}$ letter in the move sequence and the ASCII values for the moves are:

$$\begin{array}{|c|c|}
  \hline
  L & 76 \\\\ \hline
  R & 82 \\\\ \hline
  U & 85 \\\\ \hline
  D & 68 \\\\ \hline
\end{array}$$

For the sequence $LULUR$ given above, the checksum would be 19761398. Now, starting from configuration ($S$), find all shortest ways to reach configuration ($T$).

($S$) <img class="img-responsive center-block" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-3.gif" style="display: inline-block; background-color: white; padding: 10px;">, ($T$) <img class="img-responsive center-block" alt="configuration T" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-4.gif" style="display: inline-block; background-color: white; padding: 10px;">

What is the sum of all checksums for the paths having the minimal length?

### --tests--

`sliders()` should return `96356848`.

```js
assert.strictEqual(sliders(), 96356848);
```

## 44

### --description--

We shall call a fraction that cannot be cancelled down a resilient fraction.

Furthermore we shall define the resilience of a denominator, $R(d)$, to be the ratio of its proper fractions that are resilient; for example, $R(12) = \frac{4}{11}$.

The resilience of a number $d > 1$ is then $\frac{φ(d)}{d − 1}$ , where $φ$ is Euler's totient function.

We further define the coresilience of a number $n > 1$ as $C(n) = \frac{n − φ(n)}{n − 1}$.

The coresilience of a prime $p$ is $C(p) = \frac{1}{p − 1}$.

Find the sum of all composite integers $1 &lt; n ≤ 2 × {10}^{11}$, for which $C(n)$ is a unit fraction.

### --tests--

`coresilience()` should return `288084712410001`.

```js
assert.strictEqual(coresilience(), 288084712410001);
```

## 45

### --description--

A definition for an ellipse is:

Given a circle $c$ with centre $M$ and radius $r$ and a point $G$ such that $d(G, M) < r$, the locus of the points that are equidistant from $c$ and $G$ form an ellipse.

The construction of the points of the ellipse is shown below.

<img class="img-responsive center-block" alt="animation of ellipse construction" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-1.gif" style="background-color: white; padding: 10px;">

Given are the points $M(-2000, 1500)$ and $G(8000, 1500)$.

Given is also the circle $c$ with centre $M$ and radius $15\\,000$.

The locus of the points that are equidistant from $G$ and $c$ form an ellipse $e$.

From a point $P$ outside $e$ the two tangents $t_1$ and $t_2$ to the ellipse are drawn.

Let the points where $t_1$ and $t_2$ touch the ellipse be $R$ and $S$.

<img class="img-responsive center-block" alt="circle c with the centre M, radius 15000, and point P outsie of ellipse e; from point P two tangents t_1 and t_2 are drawn to the ellipse, with points touching ellipse are R and S" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-2.gif" style="background-color: white; padding: 10px;">

For how many lattice points $P$ is angle $RPS$ greater than 45°?

### --tests--

`tangentsToAnEllipse()` should return `810834388`.

```js
assert.strictEqual(tangentsToAnEllipse(), 810834388);
```

## 46

### --description--

Consider the region constrained by $1 ≤ x$ and $0 ≤ y ≤ \frac{1}{x}$.

Let $S_1$ be the largest square that can fit under the curve.

Let $S_2$ be the largest square that fits in the remaining area, and so on.

Let the index of $S_n$ be the pair (left, below) indicating the number of squares to the left of $S_n$ and the number of squares below $S_n$.

<img class="img-responsive center-block" alt="diagram with squares under the hyperbola" src="https://cdn.freecodecamp.org/curriculum/project-euler/squares-under-a-hyperbola.gif" style="background-color: white; padding: 10px;">

The diagram shows some such squares labeled by number.

$S_2$ has one square to its left and none below, so the index of $S_2$ is (1, 0).

It can be seen that the index of $S_{32}$ is (1,1) as is the index of $S_{50}$.

50 is the largest $n$ for which the index of $S_n$ is (1, 1).

What is the largest $n$ for which the index of $S_n$ is (3, 3)?

### --tests--

`squaresUnderAHyperbola()` should return `782252`.

```js
assert.strictEqual(squaresUnderAHyperbola(), 782252);
```

## 47

### --description--

The first number $n$ for which $φ(n) = 13!$ is $6\\,227\\,180\\,929$.

Find the ${150\\,000}^{\text{th}}$ such number.

### --tests--

`eulersTotientFunctionEquals()` should return `23507044290`.

```js
assert.strictEqual(eulersTotientFunctionEquals(), 23507044290);
```

## 48

### --description--

Let $S = \\{2, 3, 5, \ldots, 4999\\}$ be the set of prime numbers less than 5000.

Find the number of subsets of $S$, the sum of whose elements is a prime number.

Enter the rightmost 16 digits as your answer.

### --tests--

`primeSubsetSums()` should return `9275262564250418`.

```js
assert.strictEqual(primeSubsetSums(), 9275262564250418);
```

## 49

### --description--

Find the number of non-empty subsets of $\\{{1}^{1}, {2}^{2}, {3}^{3}, \ldots, {250250}^{250250}\\}$, the sum of whose elements is divisible by 250. Enter the rightmost 16 digits as your answer.

### --tests--

`twoHundredFifty()` should return `1425480602091519`.

```js
assert.strictEqual(twoHundredFifty(), 1425480602091519);
```

## 50

### --description--

A triplet of positive integers ($a$,$b$,$c$) is called a Cardano Triplet if it satisfies the condition:

$$\sqrt[3]{a + b \sqrt{c}} + \sqrt[3]{a - b \sqrt{c}} = 1$$

For example, (2,1,5) is a Cardano Triplet.

There exist 149 Cardano Triplets for which $a + b + c ≤ 1000$.

Find how many Cardano Triplets exist such that $a + b + c ≤ 110\\,000\\,000$.

### --tests--

`cardanoTriplets()` should return `18946051`.

```js
assert.strictEqual(cardanoTriplets(), 18946051);
```

## 51

### --description--

Given a set of points on a plane, we define a convex hole to be a convex polygon having as vertices any of the given points and not containing any of the given points in its interior (in addition to the vertices, other given points may lie on the perimeter of the polygon).

As an example, the image below shows a set of twenty points and a few such convex holes. The convex hole shown as a red heptagon has an area equal to 1049694.5 square units, which is the highest possible area for a convex hole on the given set of points.

<img class="img-responsive center-block" alt="set of twenty points and convex holes on plane" src="https://cdn.freecodecamp.org/curriculum/project-euler/convex-holes.gif" style="background-color: white; padding: 10px;">

For our example, we used the first 20 points ($T_{2k − 1}$, $T_{2k}$), for $k = 1, 2, \ldots, 20$, produced with the pseudo-random number generator:

$$\begin{align}
  S_0 & = 290\\,797 \\\\
  S_{n+1} & = {S_n}^2 \\; \text{mod} \\; 50\\,515\\,093 \\\\
  T_n & = (S_n \\; \text{mod} \\; 2000) − 1000
\end{align}$$

i.e. (527, 144), (−488, 732), (−454, −947), …

What is the maximum area for a convex hole on the set containing the first 500 points in the pseudo-random sequence? Specify your answer including one digit after the decimal point.

### --tests--

`convexHoles()` should return `104924`.

```js
assert.strictEqual(convexHoles(), 104924);
```

## 52

### --description--

A small child has a "number caterpillar" consisting of forty jigsaw pieces, each with one number on it, which, when connected together in a line, reveal the numbers 1 to 40 in order.

Every night, the child's father has to pick up the pieces of the caterpillar that have been scattered across the play room. He picks up the pieces at random and places them in the correct order.

As the caterpillar is built up in this way, it forms distinct segments that gradually merge together. The number of segments starts at zero (no pieces placed), generally increases up to about eleven or twelve, then tends to drop again before finishing at a single segment (all pieces placed).

For example:

| Piece Placed | Segments So Far |
| -------------|-----------------|
|       12     |        1        |
|        4     |        2        |
|       29     |        3        |
|        6     |        4        |
|       34     |        5        |
|        5     |        4        |
|       35     |        4        |
|       …      |        …        |

Let $M$ be the maximum number of segments encountered during a random tidy-up of the caterpillar. For a caterpillar of ten pieces, the number of possibilities for each $M$ is

| M | Possibilities |
|---|---------------|
| 1 |      512      |
| 2 |     250912    |
| 3 |    1815264    |
| 4 |    1418112    |
| 5 |     144000    |

so the most likely value of $M$ is 3 and the average value is $\frac{385\\,643}{113\\,400} = 3.400732$, rounded to six decimal places.

The most likely value of $M$ for a forty-piece caterpillar is 11; but what is the average value of $M$? Give your answer rounded to six decimal places.

### --tests--

`tidyingUp()` should return `11.492847`.

```js
assert.strictEqual(tidyingUp(), 11.492847);
```

## 53

### --description--

Define $f(n)$ as the sum of the factorials of the digits of $n$. For example, $f(342) = 3! + 4! + 2! = 32$.

Define $sf(n)$ as the sum of the digits of $f(n)$. So $sf(342) = 3 + 2 = 5$.

Define $g(i)$ to be the smallest positive integer $n$ such that $sf(n) = i$. Though $sf(342)$ is 5, $sf(25)$ is also 5, and it can be verified that $g(5)$ is 25.

Define $sg(i)$ as the sum of the digits of $g(i)$. So $sg(5) = 2 + 5 = 7$.

Further, it can be verified that $g(20)$ is 267 and $\sum sg(i)$ for $1 ≤ i ≤ 20$ is 156.

What is $\sum sg(i)$ for $1 ≤ i ≤ 150$?

### --tests--

`sumsOfDigitFactorials()` should return `8184523820510`.

```js
assert.strictEqual(sumsOfDigitFactorials(), 8184523820510);
```

## 54

### --description--

We define the rounded-square-root of a positive integer $n$ as the square root of $n$ rounded to the nearest integer.

The following procedure (essentially Heron's method adapted to integer arithmetic) finds the rounded-square-root of $n$:

Let $d$ be the number of digits of the number $n$.

If $d$ is odd, set $x_0 = 2 × {10}^{\frac{d - 1}{2}}$.

If $d$ is even, set $x_0 = 7 × {10}^{\frac{d - 2}{2}}$.

Repeat:

$$x_{k + 1} = \left\lfloor\frac{x_k + \left\lceil\frac{n}{x_k}\right\rceil}{2}\right\rfloor$$

until $x_{k + 1} = x_k$.

As an example, let us find the rounded-square-root of $n = 4321$.

$n$ has 4 digits, so $x_0 = 7 × {10}^{\frac{4-2}{2}} = 70$.

$$x_1 = \left\lfloor\frac{70 + \left\lceil\frac{4321}{70}\right\rceil}{2}\right\rfloor = 66 \\\\
x_2 = \left\lfloor\frac{66 + \left\lceil\frac{4321}{66}\right\rceil}{2}\right\rfloor = 66$$

Since $x_2 = x_1$, we stop here. So, after just two iterations, we have found that the rounded-square-root of 4321 is 66 (the actual square root is 65.7343137…).

The number of iterations required when using this method is surprisingly low. For example, we can find the rounded-square-root of a 5-digit integer ($10\\,000 ≤ n ≤ 99\\,999$) with an average of 3.2102888889 iterations (the average value was rounded to 10 decimal places).

Using the procedure described above, what is the average number of iterations required to find the rounded-square-root of a 14-digit number (${10}^{13} ≤ n &lt; {10}^{14}$)? Give your answer rounded to 10 decimal places.

**Note:** The symbols $⌊x⌋$ and $⌈x⌉$ represent the floor function and ceiling function respectively.

### --tests--

`roundedSquareRoots()` should return `4.447401118`.

```js
assert.strictEqual(roundedSquareRoots(), 4.447401118);
```

## 55

### --description--

Tatami are rectangular mats, used to completely cover the floor of a room, without overlap.

Assuming that the only type of available tatami has dimensions 1×2, there are obviously some limitations for the shape and size of the rooms that can be covered.

For this problem, we consider only rectangular rooms with integer dimensions $a$, $b$ and even size $s = a \times b$. We use the term 'size' to denote the floor surface area of the room, and — without loss of generality — we add the condition $a ≤ b$.

There is one rule to follow when laying out tatami: there must be no points where corners of four different mats meet. For example, consider the two arrangements below for a 4×4 room:

<img class="img-responsive center-block" alt="two arrangements of mats in 4x4 room" src="https://cdn.freecodecamp.org/curriculum/project-euler/tatami-free-rooms.gif" style="background-color: white; padding: 10px;">

The arrangement on the left is acceptable, whereas the one on the right is not: a red "<strong><span style="color: red;">X</span></strong>" in the middle, marks the point where four tatami meet.

Because of this rule, certain even-sized rooms cannot be covered with tatami: we call them tatami-free rooms. Further, we define $T(s)$ as the number of tatami-free rooms of size $s$.

The smallest tatami-free room has size $s = 70$ and dimensions 7×10. All the other rooms of size $s = 70$ can be covered with tatami; they are: 1×70, 2×35 and 5×14. Hence, $T(70) = 1$.

Similarly, we can verify that $T(1320) = 5$ because there are exactly 5 tatami-free rooms of size $s = 1320$: 20×66, 22×60, 24×55, 30×44 and 33×40. In fact, $s = 1320$ is the smallest room-size $s$ for which $T(s) = 5$.

Find the smallest room-size $s$ for which $T(s) = 200$.

### --tests--

`tatamiFreeRooms()` should return `85765680`.

```js
assert.strictEqual(tatamiFreeRooms(), 85765680);
```

## 56

### --description--

Given is an integer sided triangle $ABC$ with sides $a ≤ b ≤ c$ ($AB = c$, $BC = a$ and $AC = b$).

The angular bisectors of the triangle intersect the sides at points $E$, $F$ and $G$ (see picture below).

<img class="img-responsive center-block" alt="triangle ABC, with angular bisectors intersecting sides at the points E, F and G" src="https://cdn.freecodecamp.org/curriculum/project-euler/angular-bisectors.gif" style="background-color: white; padding: 10px;">

The segments $EF$, $EG$ and $FG$ partition the triangle $ABC$ into four smaller triangles: $AEG$, $BFE$, $CGF$ and $EFG$. It can be proven that for each of these four triangles the ratio $\frac{\text{area}(ABC)}{\text{area}(\text{subtriangle})}$ is rational. However, there exist triangles for which some or all of these ratios are integral.

How many triangles $ABC$ with perimeter $≤ 100\\,000\\,000$ exist so that the ratio $\frac{\text{area}(ABC)}{\text{area}(AEG)}$ is integral?

### --tests--

`angularBisectors()` should return `139012411`.

```js
assert.strictEqual(angularBisectors(), 139012411);
```

## 57

### --description--

A sequence is defined as:

- $g_k = 1$, for $0 ≤ k ≤ 1999$
- $g_k = g_{k - 2000} + g_{k - 1999}$, for $k ≥ 2000$.

Find $g_k$ mod 20092010 for $k = {10}^{18}$.

### --tests--

`laggedFibonacciSequence()` should return `12747994`.

```js
assert.strictEqual(laggedFibonacciSequence(), 12747994);
```

## 58

### --description--

A positive integer will be called reachable if it can result from an arithmetic expression obeying the following rules:

- Uses the digits 1 through 9, in that order and exactly once each.
- Any successive digits can be concatenated (for example, using the digits 2, 3 and 4 we obtain the number 234).
- Only the four usual binary arithmetic operations (addition, subtraction, multiplication and division) are allowed.
- Each operation can be used any number of times, or not at all.
- Unary minus is not allowed.
- Any number of (possibly nested) parentheses may be used to define the order of operations.

For example, 42 is reachable, since $\frac{1}{23} \times ((4 \times 5) - 6) \times (78 - 9) = 42$.

What is the sum of all positive reachable integers?

### --tests--

`reachableNumbers()` should return `20101196798`.

```js
assert.strictEqual(reachableNumbers(), 20101196798);
```

## 59

### --description--

A game is played with three piles of stones and two players.

On each player's turn, the player removes one or more stones from the piles. However, if the player takes stones from more than one pile, the same number of stones must be removed from each of the selected piles.

In other words, the player chooses some $N > 0$ and removes:

- $N$ stones from any single pile; or
- $N$ stones from each of any two piles ($2N$ total); or
- $N$ stones from each of the three piles ($3N$ total).

The player taking the last stone(s) wins the game.

A winning configuration is one where the first player can force a win.

For example, (0,0,13), (0,11,11) and (5,5,5) are winning configurations because the first player can immediately remove all stones.

A losing configuration is one where the second player can force a win, no matter what the first player does.

For example, (0,1,2) and (1,3,3) are losing configurations: any legal move leaves a winning configuration for the second player.

Consider all losing configurations ($x_i$,$y_i$,$z_i$) where $x_i ≤ y_i ≤ z_i ≤ 100$. We can verify that $\sum (x_i + y_i + z_i) = 173\\,895$ for these.

Find $\sum (x_i + y_i + z_i)$ where ($x_i$,$y_i$,$z_i$) ranges over the losing configurations with $x_i ≤ y_i ≤ z_i ≤ 1000$.

### --tests--

`stoneGame()` should return `167542057`.

```js
assert.strictEqual(stoneGame(), 167542057);
```

## 60

### --description--

Let us call a positive integer $k$ a square-pivot, if there is a pair of integers $m > 0$ and $n ≥ k$, such that the sum of the ($m + 1$) consecutive squares up to $k$ equals the sum of the $m$ consecutive squares from ($n + 1$) on:

$${(k - m)}^2 + \ldots + k^2 = {(n + 1)}^2 + \ldots + {(n + m)}^2$$

Some small square-pivots are

$$\begin{align}
  & \mathbf{4}: 3^2 + \mathbf{4}^2 = 5^2 \\\\
  & \mathbf{21}: {20}^2 + \mathbf{21}^2 = {29}^2 \\\\
  & \mathbf{24}: {21}^2 + {22}^2 + {23}^2 + \mathbf{24}^2 = {25}^2 + {26}^2 + {27}^2 \\\\
  & \mathbf{110}: {108}^2 + {109}^2 + \mathbf{110}^2 = {133}^2 + {134}^2 \\\\
\end{align}$$

Find the sum of all distinct square-pivots $≤ {10}^{10}$.

### --tests--

`pivotalSquareSums()` should return `238890850232021`.

```js
assert.strictEqual(pivotalSquareSums(), 238890850232021);
```

## 61

### --description--

The following equation represents the continuous topography of a mountainous region, giving the elevation $h$ at any point ($x$,$y$):

$$h = \left(5000 - \frac{x^2 + y^2 + xy}{200} + \frac{25(x + y)}{2}\right) \times e^{-\left|\frac{x^2 + y^2}{1\\,000\\,000} - \frac{3(x + y)}{2000} + \frac{7}{10}\right|}$$

A mosquito intends to fly from A(200,200) to B(1400,1400), without leaving the area given by $0 ≤ x$, $y ≤ 1600$.

Because of the intervening mountains, it first rises straight up to a point A', having elevation $f$. Then, while remaining at the same elevation $f$, it flies around any obstacles until it arrives at a point B' directly above B.

First, determine $f_{min}$ which is the minimum constant elevation allowing such a trip from A to B, while remaining in the specified area. Then, find the length of the shortest path between A' and B', while flying at that constant elevation $f_{min}$.

Give that length as your answer, rounded to three decimal places.

**Note:** For convenience, the elevation function shown above is repeated below, in a form suitable for most programming languages: `h=( 5000-0.005*(x*x+y*y+x*y)+12.5*(x+y) )* exp( -abs(0.000001*(x*x+y*y)-0.0015*(x+y)+0.7) )`.

### --tests--

`mountainRange()` should return `2531.205`.

```js
assert.strictEqual(mountainRange(), 2531.205);
```

## 62

### --description--

Consider the number 6. The divisors of 6 are: 1,2,3 and 6.

Every number from 1 up to and including 6 can be written as a sum of distinct divisors of 6:

$1 = 1$, $2 = 2$, $3 = 1 + 2$, $4 = 1 + 3$, $5 = 2 + 3$, $6 = 6$.

A number $n$ is called a practical number if every number from 1 up to and including $n$ can be expressed as a sum of distinct divisors of $n$.

A pair of consecutive prime numbers with a difference of six is called a sexy pair (since "sex" is the Latin word for "six"). The first sexy pair is (23, 29).

We may occasionally find a triple-pair, which means three consecutive sexy prime pairs, such that the second member of each pair is the first member of the next pair.

We shall call a number $n$ such that:

- ($n - 9$, $n - 3$), ($n - 3$, $n + 3$), ($n + 3$, $n + 9$) form a triple-pair, and
- the numbers $n - 8$, $n - 4$, $n$, $n + 4$ and $n + 8$ are all practical,

an engineers’ paradise.

Find the sum of the first four engineers’ paradises.

### --tests--

`engineersDreamComeTrue()` should return `2039506520`.

```js
assert.strictEqual(engineersDreamComeTrue(), 2039506520);
```

## 63

### --description--

Consider all the triangles having:

- All their vertices on lattice points.
- Circumcentre at the origin O.
- Orthocentre at the point H(5, 0).

There are nine such triangles having a $\text{perimeter} ≤ 50$.

Listed and shown in ascending order of their perimeter, they are:

<table>
  <tbody>
    <tr>
      <td>
A(-4, 3), B(5, 0), C(4, -3)<br>
A(4, 3), B(5, 0), C(-4, -3)<br>
A(-3, 4), B(5, 0), C(3, -4)<br>
<br><br>
A(3, 4), B(5, 0), C(-3, -4)<br>
A(0, 5), B(5, 0), C(0, -5)<br>
A(1, 8), B(8, -1), C(-4, -7)<br>
<br><br>
A(8, 1), B(1, -8), C(-4, 7)<br>
A(2, 9), B(9, -2), C(-6, -7)<br>
A(9, 2), B(2, -9), C(-6, 7)<br>
      </td>
      <td><img class="img-responsive center-block" alt="nine triangles ABC with perimeter ≤ 50" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-centres.gif" style="background-color: white; padding: 10px;"></td>
    </tr>
  </tbody>
</table>

The sum of their perimeters, rounded to four decimal places, is 291.0089.

Find all such triangles with a $\text{perimeter} ≤ {10}^5$. Enter as your answer the sum of their perimeters rounded to four decimal places.

### --tests--

`triangleCentres()` should return `2816417.1055`.

```js
assert.strictEqual(triangleCentres(), 2816417.1055);
```

## 64

### --description--

$2^N$ binary digits can be placed in a circle so that all the $N$-digit clockwise subsequences are distinct.

For $N = 3$, two such circular arrangements are possible, ignoring rotations:

<img class="img-responsive center-block" alt="two circular arrangements for N = 3" src="https://cdn.freecodecamp.org/curriculum/project-euler/binary-circles.gif" style="background-color: white; padding: 10px;">

For the first arrangement, the 3-digit subsequences, in clockwise order, are: 000, 001, 010, 101, 011, 111, 110 and 100.

Each circular arrangement can be encoded as a number by concatenating the binary digits starting with the subsequence of all zeros as the most significant bits and proceeding clockwise. The two arrangements for $N = 3$ are thus represented as 23 and 29:

$${00010111}_2 = 23\\\\
{00011101}_2 = 29$$

Calling $S(N)$ the sum of the unique numeric representations, we can see that $S(3) = 23 + 29 = 52$.

Find $S(5)$.

### --tests--

`binaryCircles()` should return `209110240768`.

```js
assert.strictEqual(binaryCircles(), 209110240768);
```

## 65

### --description--

The divisors of 12 are: 1,2,3,4,6 and 12.

The largest divisor of 12 that does not exceed the square root of 12 is 3.

We shall call the largest divisor of an integer $n$ that does not exceed the square root of $n$ the pseudo square root ($PSR$) of $n$.

It can be seen that $PSR(3102) = 47$.

Let $p$ be the product of the primes below 190. Find $PSR(p)\bmod {10}^{16}$.

### --tests--

`pseudoSquareRoot()` should return `1096883702440585`.

```js
assert.strictEqual(pseudoSquareRoot(), 1096883702440585);
```

## 66

### --description--

You are given a unique investment opportunity.

Starting with £1 of capital, you can choose a fixed proportion, $f$, of your capital to bet on a fair coin toss repeatedly for 1000 tosses.

Your return is double your bet for heads and you lose your bet for tails.

For example, if $f = \frac{1}{4}$, for the first toss you bet £0.25, and if heads comes up you win £0.5 and so then have £1.5. You then bet £0.375 and if the second toss is tails, you have £1.125.

Choosing $f$ to maximize your chances of having at least £1,000,000,000 after 1,000 flips, what is the chance that you become a billionaire?

All computations are assumed to be exact (no rounding), but give your answer rounded to 12 digits behind the decimal point in the form 0.abcdefghijkl.

### --tests--

`billionaire()` should return `0.999992836187`.

```js
assert.strictEqual(billionaire(), 0.999992836187);
```

## 67

### --description--

It can be verified that there are 23 positive integers less than 1000 that are divisible by at least four distinct primes less than 100.

Find how many positive integers less than ${10}^{16}$ are divisible by at least four distinct primes less than 100.

### --tests--

`fourDistinctPrimeFactors()` should return `785478606870985`.

```js
assert.strictEqual(fourDistinctPrimeFactors(), 785478606870985);
```

## 68

### --description--

A root or zero of a polynomial $P(x)$ is a solution to the equation $P(x) = 0$.

Define $P_n$ as the polynomial whose coefficients are the digits of $n$.

For example, $P_{5703}(x) = 5x^3 + 7x^2 + 3$.

We can see that:

- $P_n(0)$ is the last digit of $n$,
- $P_n(1)$ is the sum of the digits of $n$,
- $Pn(10)$ is $n$ itself.

Define $Z(k)$ as the number of positive integers, $n$, not exceeding $k$ for which the polynomial $P_n$ has at least one integer root.

It can be verified that $Z(100\\,000)$ is 14696.

What is $Z({10}^{16})$?

### --tests--

`polynomialsWithOneIntegerRoot()` should return `1311109198529286`.

```js
assert.strictEqual(polynomialsWithOneIntegerRoot(), 1311109198529286);
```

## 69

### --description--

A square piece of paper with integer dimensions $N×N$ is placed with a corner at the origin and two of its sides along the $x$- and $y$-axes. Then, we cut it up respecting the following rules:

- We only make straight cuts between two points lying on different sides of the square, and having integer coordinates.
- Two cuts cannot cross, but several cuts can meet at the same border point.
- Proceed until no more legal cuts can be made.

Counting any reflections or rotations as distinct, we call $C(N)$ the number of ways to cut an $N×N$ square. For example, $C(1) = 2$ and $C(2) = 30$ (shown below).

<img class="img-responsive center-block" alt="ways to cut 2x2 square, counting reflections and rotations as distinct" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-squares.gif" style="background-color: white; padding: 10px;">

What is $C(30)\bmod {10}^8$ ?

### --tests--

`cuttingSquares()` should return `82282080`.

```js
assert.strictEqual(cuttingSquares(), 82282080);
```

## 70

### --description--

For a positive number $n$, define $S(n)$ as the sum of the integers $x$, for which $1 < x < n$ and $x^3 \equiv 1\bmod n$.

When $n = 91$, there are 8 possible values for $x$, namely: 9, 16, 22, 29, 53, 74, 79, 81. Thus, $S(91) = 9 + 16 + 22 + 29 + 53 + 74 + 79 + 81 = 363$.

Find $S(13\\,082\\,761\\,331\\,670\\,030)$.

### --tests--

`modularCubesOne()` should return `4617456485273130000`.

```js
assert.strictEqual(modularCubesOne(), 4617456485273130000);
```

## 71

### --description--

For a positive number $n$, define $C(n)$ as the number of the integers $x$, for which $1 < x < n$ and $x^3 \equiv 1\bmod n$.

When $n = 91$, there are 8 possible values for $x$, namely: 9, 16, 22, 29, 53, 74, 79, 81. Thus, $C(91) = 8$.

Find the sum of the positive numbers $n ≤ {10}^{11}$ for which $C(n)=242$.

### --tests--

`modularCubesTwo()` should return `8495585919506151000`.

```js
assert.strictEqual(modularCubesTwo(), 8495585919506151000);
```

## 72

### --description--

Consider equations of the form: $a^2 + b^2 = N$, $0 ≤ a ≤ b$, $a$, $b$ and $N$ integer.

For $N = 65$ there are two solutions:

$a = 1, b = 8$ and $a = 4, b = 7$.

We call $S(N)$ the sum of the values of $a$ of all solutions of $a^2 + b^2 = N$, $0 ≤ a ≤ b$, $a$, $b$ and $N$ integer.

Thus $S(65) = 1 + 4 = 5$.

Find $\sum S(N)$, for all squarefree $N$ only divisible by primes of the form $4k + 1$ with $4k + 1 &lt; 150$.

### --tests--

`sumOfSquares()` should return `2032447591196869000`.

```js
assert.strictEqual(sumOfSquares(), 2032447591196869000);
```

## 73

### --description--

For each integer $p > 1$ coprime to 10 there is a positive divisibility multiplier $m &lt; p$ which preserves divisibility by $p$ for the following function on any positive integer, $n$:

$f(n) = (\text{all but the last digit of} \\; n) + (\text{the last digit of} \\; n) \times m$

That is, if $m$ is the divisibility multiplier for $p$, then $f(n)$ is divisible by $p$ if and only if $n$ is divisible by $p$.

(When $n$ is much larger than $p$, $f(n)$ will be less than $n$ and repeated application of $f$ provides a multiplicative divisibility test for $p$.)

For example, the divisibility multiplier for 113 is 34.

$f(76275) = 7627 + 5 \times 34 = 7797$: 76275 and 7797 are both divisible by 113

$f(12345) = 1234 + 5 \times 34 = 1404$: 12345 and 1404 are both not divisible by 113

The sum of the divisibility multipliers for the primes that are coprime to 10 and less than 1000 is 39517. What is the sum of the divisibility multipliers for the primes that are coprime to 10 and less than ${10}^7$?

### --tests--

`divisibilityMultipliers()` should return `1601912348822`.

```js
assert.strictEqual(divisibilityMultipliers(), 1601912348822);
```

## 74

### --description--

Let us define a balanced sculpture of order $n$ as follows:

- A polyomino made up of $n + 1$ tiles known as the blocks ($n$ tiles) and the plinth (remaining tile);
- the plinth has its centre at position ($x = 0$, $y = 0$);
- the blocks have $y$-coordinates greater than zero (so the plinth is the unique lowest tile);
- the centre of mass of all the blocks, combined, has $x$-coordinate equal to zero.

When counting the sculptures, any arrangements which are simply reflections about the $y$-axis, are <u>not</u> counted as distinct. For example, the 18 balanced sculptures of order 6 are shown below; note that each pair of mirror images (about the $y$-axis) is counted as one sculpture:

<img class="img-responsive center-block" alt="18 balanced sculptures of order 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/balanced-sculptures.gif" style="background-color: white; padding: 10px;">

There are 964 balanced sculptures of order 10 and 360505 of order 15.

How many balanced sculptures are there of order 18?

### --tests--

`balancedSculptures()` should return `15030564`.

```js
assert.strictEqual(balancedSculptures(), 15030564);
```

## 75

### --description--

Consider the triangles with integer sides $a$, $b$ and $c$ with $a ≤ b ≤ c$.

An integer sided triangle $(a,b,c)$ is called primitive if $gcd(a,b,c) = 1$.

How many primitive integer sided triangles exist with a perimeter not exceeding $10\\,000\\,000$?

### --tests--

`primitiveTriangles()` should return `5777137137739633000`.

```js
assert.strictEqual(primitiveTriangles(), 5777137137739633000);
```

## 76

### --description--

A modified Collatz sequence of integers is obtained from a starting value $a_1$ in the following way:

$a_{n + 1} = \frac{a_n}{3}$ if $a_n$ is divisible by 3. We shall denote this as a large downward step, "D".

$a_{n + 1} = \frac{4a_n + 2}{3}$ if $a_n$ divided by 3 gives a remainder of 1. We shall denote this as an upward step, "U".

$a_{n + 1} = \frac{2a_n - 1}{3}$ if $a_n$ divided by 3 gives a remainder of 2. We shall denote this as a small downward step, "d".

The sequence terminates when some $a_n = 1$.

Given any integer, we can list out the sequence of steps. For instance if $a_1 = 231$, then the sequence $\\{a_n\\} = \\{231, 77, 51, 17, 11, 7, 10, 14, 9, 3, 1\\}$ corresponds to the steps "DdDddUUdDD".

Of course, there are other sequences that begin with that same sequence "DdDddUUdDD....".

For instance, if $a_1 = 1004064$, then the sequence is DdDddUUdDDDdUDUUUdDdUUDDDUdDD.

In fact, 1004064 is the smallest possible $a_1 > {10}^6$ that begins with the sequence DdDddUUdDD.

What is the smallest $a_1 > {10}^{15}$ that begins with the sequence "UDDDUdddDDUDDddDdDddDDUDDdUUDd"?

### --tests--

`modifiedCollatzSequence()` should return `1125977393124310`.

```js
assert.strictEqual(modifiedCollatzSequence(), 1125977393124310);
```

## 77

### --description--

Given the values of integers $1 &lt; a_1 &lt; a_2 &lt; \ldots &lt; a_n$, consider the linear combination $q_1a_1 + q_2a_2 + \ldots + q_na_n = b$, using only integer values $q_k ≥ 0$.

Note that for a given set of $a_k$, it may be that not all values of $b$ are possible. For instance, if $a_1 = 5$ and $a_2 = 7$, there are no $q_1 ≥ 0$ and $q_2 ≥ 0$ such that $b$ could be 1, 2, 3, 4, 6, 8, 9, 11, 13, 16, 18 or 23.

In fact, 23 is the largest impossible value of $b$ for $a_1 = 5$ and $a_2 = 7$. We therefore call $f(5, 7) = 23$. Similarly, it can be shown that $f(6, 10, 15)=29$ and $f(14, 22, 77) = 195$.

Find $\sum f(pq,pr,qr)$, where $p$, $q$ and $r$ are prime numbers and $p &lt; q &lt; r &lt; 5000$.

### --tests--

`linearCombinationOfSemiprimes()` should return `1228215747273908500`.

```js
assert.strictEqual(linearCombinationOfSemiprimes(), 1228215747273908500);
```

## 78

### --description--

How many triangles are there with integral sides, at least one integral angle (measured in degrees), and a perimeter that does not exceed ${10}^8$?

### --tests--

`trianglesWithIntegralSidesAndAngle()` should return `416577688`.

```js
assert.strictEqual(trianglesWithIntegralSidesAndAngle(), 416577688);
```

## 79

### --description--

A laborious ant walks randomly on a 5x5 grid. The walk starts from the central square. At each step, the ant moves to an adjacent square at random, without leaving the grid; thus there are 2, 3 or 4 possible moves at each step depending on the ant's position.

At the start of the walk, a seed is placed on each square of the lower row. When the ant isn't carrying a seed and reaches a square of the lower row containing a seed, it will start to carry the seed. The ant will drop the seed on the first empty square of the upper row it eventually reaches.

What's the expected number of steps until all seeds have been dropped in the top row? Give your answer rounded to 6 decimal places.

### --tests--

`antAndSeeds()` should return `430.088247`.

```js
assert.strictEqual(antAndSeeds(), 430.088247);
```

## 80

### --description--

You are given a pizza (perfect circle) that has been cut into $m·n$ equal pieces and you want to have exactly one topping on each slice.

Let $f(m,n)$ denote the number of ways you can have toppings on the pizza with $m$ different toppings ($m ≥ 2$), using each topping on exactly $n$ slices ($n ≥ 1$). Reflections are considered distinct, rotations are not.

Thus, for instance, $f(2,1) = 1$, $f(2,2) = f(3,1) = 2$ and $f(3,2) = 16$. $f(3,2)$ is shown below:

<img class="img-responsive center-block" alt="animation with 16 ways to have 3 different toppings on 2 slices each" src="https://cdn.freecodecamp.org/curriculum/project-euler/pizza-toppings.gif" style="background-color: white; padding: 10px;">

Find the sum of all $f(m,n)$ such that $f(m,n) ≤ {10}^{15}$.

### --tests--

`pizzaToppings()` should return `1485776387445623`.

```js
assert.strictEqual(pizzaToppings(), 1485776387445623);
```

## 81

### --description--

For non-negative integers $m$, $n$, the Ackermann function $A(m, n)$ is defined as follows:

$$A(m, n) =
\begin{cases}
n + 1                 & \text{if $m = 0$}             \\\\
A(m - 1, 1)           & \text{if $m > 0$ and $n = 0$} \\\\
A(m - 1, A(m, n - 1)) & \text{if $m > 0$ and $n > 0$}
\end{cases}$$

For example $A(1, 0) = 2$, $A(2, 2) = 7$ and $A(3, 4) = 125$.

Find $\displaystyle\sum_{n = 0}^6 A(n, n)$ and give your answer mod ${14}^8$.

### --tests--

`ackermanFunction()` should return `1098988351`.

```js
assert.strictEqual(ackermanFunction(), 1098988351);
```

## 82

### --description--

Consider the triangle with sides 6, 8 and 10. It can be seen that the perimeter and the area are both equal to 24.

So the $\frac{\text{area}}{\text{perimeter}}$ ratio is equal to 1.

Consider also the triangle with sides 13, 14 and 15. The perimeter equals 42 while the area is equal to 84.

So for this triangle the $\frac{\text{area}}{\text{perimeter}}$ ratio is equal to 2.

Find the sum of the perimeters of all integer sided triangles for which the area/perimeter ratios are equal to positive integers not exceeding 1000.

### --tests--

`integralAreaPerimeterRatio()` should return `28038042525570324`.

```js
assert.strictEqual(integralAreaPerimeterRatio(), 28038042525570324);
```

## 83

### --description--

The 3-digit number 376 in the decimal numbering system is an example of numbers with the special property that its square ends with the same digits: ${376}^2 = 141376$. Let's call a number with this property a steady square.

Steady squares can also be observed in other numbering systems. In the base 14 numbering system, the 3-digit number $c37$ is also a steady square: $c37^2 = aa0c37$, and the sum of its digits is $c+3+7=18$ in the same numbering system. The letters $a$, $b$, $c$ and $d$ are used for the 10, 11, 12 and 13 digits respectively, in a manner similar to the hexadecimal numbering system.

For $1 ≤ n ≤ 9$, the sum of the digits of all the $n$-digit steady squares in the base 14 numbering system is $2d8$ (582 decimal). Steady squares with leading 0's are not allowed.

Find the sum of the digits of all the $n$-digit steady squares in the base 14 numbering system for $1 ≤ n ≤ 10000$ (decimal) and give your answer as a string in the base 14 system using lower case letters where necessary.

### --tests--

`steadySquares()` should return a string.

```js
assert(typeof steadySquares() === 'string');
```

`steadySquares()` should return the string `5a411d7b`.

```js
assert.strictEqual(steadySquares(), '5a411d7b');
```

## 84

### --description--

Albert chooses a positive integer $k$, then two real numbers $a$, $b$ are randomly chosen in the interval [0,1] with uniform distribution.

The square root of the sum ${(ka + 1)}^2 + {(kb + 1)}^2$ is then computed and rounded to the nearest integer. If the result is equal to $k$, he scores $k$ points; otherwise he scores nothing.

For example, if $k = 6$, $a = 0.2$ and $b = 0.85$, then ${(ka + 1)}^2 + {(kb + 1)}^2 = 42.05$. The square root of 42.05 is 6.484... and when rounded to the nearest integer, it becomes 6. This is equal to $k$, so he scores 6 points.

It can be shown that if he plays 10 turns with $k = 1, k = 2, \ldots, k = 10$, the expected value of his total score, rounded to five decimal places, is 10.20914.

If he plays ${10}^5$ turns with $k = 1, k = 2, k = 3, \ldots, k = {10}^5$, what is the expected value of his total score, rounded to five decimal places?

### --tests--

`pythagoreanOdds()` should return `157055.80999`.

```js
assert.strictEqual(pythagoreanOdds(), 157055.80999);
```

## 85

### --description--

Barbara is a mathematician and a basketball player. She has found that the probability of scoring a point when shooting from a distance $x$ is exactly ($1 - \frac{x}{q}$), where $q$ is a real constant greater than 50.

During each practice run, she takes shots from distances $x = 1, x = 2, \ldots, x = 50$ and, according to her records, she has precisely a 2 % chance to score a total of exactly 20 points.

Find $q$ and give your answer rounded to 10 decimal places.

### --tests--

`scoringProbabilities()` should return `52.6494571953`.

```js
assert.strictEqual(scoringProbabilities(), 52.6494571953);
```

## 86

### --description--

The quadtree encoding allows us to describe a $2^N×2^N$ black and white image as a sequence of bits (0 and 1). Those sequences are to be read from left to right like this:

- the first bit deals with the complete $2^N×2^N$ region;
- "0" denotes a split:
  - the current $2^n×2^n$ region is divided into 4 sub-regions of dimension $2^{n - 1}×2^{n - 1}$,
  - the next bits contains the description of the top left, top right, bottom left and bottom right sub-regions - in that order;
- "10" indicates that the current region contains only black pixels;
- "11" indicates that the current region contains only white pixels.

Consider the following 4×4 image (colored marks denote places where a split can occur):

<img class="img-responsive center-block" alt="4x4 image with colored marks denoting place where split can occur" src="https://cdn.freecodecamp.org/curriculum/project-euler/quadtree-encoding-a-simple-compression-algorithm.gif" style="background-color: white; padding: 10px;">

This image can be described by several sequences, for example : "<strong><span style="color: red">0</span></strong><strong><span style="color: blue">0</span></strong>10101010<strong><span style="color: green">0</span></strong>1011111011<strong><span style="color: orange">0</span></strong>10101010", of length 30, or "<strong><span style="color: red">0</span></strong>10<strong><span style="color: green">0</span></strong>101111101110", of length 16, which is the minimal sequence for this image.

For a positive integer $N$, define $D_N$ as the $2^N×2^N$ image with the following coloring scheme:

- the pixel with coordinates $x = 0$, $y = 0$ corresponds to the bottom left pixel,
- if ${(x - 2^{N - 1})}^2 + {(y - 2^{N - 1})}^2 ≤ 2^{2N - 2}$ then the pixel is black,
- otherwise the pixel is white.

What is the length of the minimal sequence describing $D_{24}$?

### --tests--

`quadtreeEncoding()` should return `313135496`.

```js
assert.strictEqual(quadtreeEncoding(), 313135496);
```

## 87

### --description--

For any prime $p$ the number $N(p,q)$ is defined by $N(p,q) = \sum_{n=0}^q T_n \times p^n$ with $T_n$ generated by the following random number generator:

$$\begin{align}
  & S_0 = 290797 \\\\
  & S_{n + 1} = {S_n}^2\bmod 50\\,515\\,093 \\\\
  & T_n = S_n\bmod p
\end{align}$$

Let $Nfac(p,q)$ be the factorial of $N(p,q)$.

Let $NF(p,q)$ be the number of factors $p$ in $Nfac(p,q)$.

You are given that $NF(3,10000) \bmod 3^{20} = 624\\,955\\,285$.

Find $NF(61,{10}^7)\bmod {61}^{10}$.

### --tests--

`enormousFactorial()` should return `605857431263982000`.

```js
assert.strictEqual(enormousFactorial(), 605857431263982000);
```

## 88

### --description--

Let $C(x,y)$ be a circle passing through the points ($x$, $y$), ($x$, $y + 1$), ($x + 1$, $y$) and ($x + 1$, $y + 1$).

For positive integers $m$ and $n$, let $E(m,n)$ be a configuration which consists of the $m·n$ circles: { $C(x,y)$: $0 ≤ x &lt; m$, $0 ≤ y &lt; n$, $x$ and $y$ are integers }

An Eulerian cycle on $E(m,n)$ is a closed path that passes through each arc exactly once. Many such paths are possible on $E(m,n)$, but we are only interested in those which are not self-crossing: A non-crossing path just touches itself at lattice points, but it never crosses itself.

The image below shows $E(3,3)$ and an example of an Eulerian non-crossing path.

<img class="img-responsive center-block" alt="Eulerian cycle E(3, 3) and Eulerian non-crossing path" src="https://cdn.freecodecamp.org/curriculum/project-euler/eulerian-cycles.gif" style="background-color: white; padding: 10px;">

Let $L(m,n)$ be the number of Eulerian non-crossing paths on $E(m,n)$. For example, $L(1,2) = 2$, $L(2,2) = 37$ and $L(3,3) = 104290$.

Find $L(6,10)\bmod {10}^{10}$.

### --tests--

`eulerianCycles()` should return `6567944538`.

```js
assert.strictEqual(eulerianCycles(), 6567944538);
```

## 89

### --description--

How many integers $0 ≤ n &lt; {10}^{18}$ have the property that the sum of the digits of $n$ equals the sum of digits of $137n$?

### --tests--

`digitalSignature()` should return `20444710234716470`.

```js
assert.strictEqual(digitalSignature(), 20444710234716470);
```

## 90

### --description--

A prime number $p$ is called a Panaitopol prime if $p = \frac{x^4 - y^4}{x^3 + y^3}$ for some positive integers $x$ and $y$.

Find how many Panaitopol primes are less than $5 × {10}^{15}$.

### --tests--

`panaitopolPrimes()` should return `4037526`.

```js
assert.strictEqual(panaitopolPrimes(), 4037526);
```

## 91

### --description--

We shall define a pythagorean polygon to be a convex polygon with the following properties:

- there are at least three vertices,
- no three vertices are aligned,
- each vertex has integer coordinates,
- each edge has integer length.

For a given integer $n$, define $P(n)$ as the number of distinct pythagorean polygons for which the perimeter is $≤ n$.

Pythagorean polygons should be considered distinct as long as none is a translation of another.

You are given that $P(4) = 1$, $P(30) = 3655$ and $P(60) = 891045$.

Find $P(120)$.

### --tests--

`pythagoreanPolygons()` should return `3600060866`.

```js
assert.strictEqual(pythagoreanPolygons(), 3600060866);
```

## 92

### --description--

An even positive integer $N$ will be called admissible, if it is a power of 2 or its distinct prime factors are consecutive primes.

The first twelve admissible numbers are 2, 4, 6, 8, 12, 16, 18, 24, 30, 32, 36, 48.

If $N$ is admissible, the smallest integer $M > 1$ such that $N + M$ is prime, will be called the pseudo-Fortunate number for $N$.

For example, $N = 630$ is admissible since it is even and its distinct prime factors are the consecutive primes 2, 3, 5 and 7. The next prime number after 631 is 641; hence, the pseudo-Fortunate number for 630 is $M = 11$. It can also be seen that the pseudo-Fortunate number for 16 is 3.

Find the sum of all distinct pseudo-Fortunate numbers for admissible numbers $N$ less than ${10}^9$.

### --tests--

`pseudoFortunateNumbers()` should return `2209`.

```js
assert.strictEqual(pseudoFortunateNumbers(), 2209);
```

## 93

### --description--

For a positive integer $k$, define $d(k)$ as the sum of the digits of $k$ in its usual decimal representation. Thus $d(42) = 4 + 2 = 6$.

For a positive integer $n$, define $S(n)$ as the number of positive integers $k &lt; {10}^n$ with the following properties:

- $k$ is divisible by 23 and,
- $d(k) = 23$.

You are given that $S(9) = 263\\,626$ and $S(42) = 6\\,377\\,168\\,878\\,570\\,056$.

Find $S({11}^{12})$ and give your answer $\bmod {10}^9$.

### --tests--

`experience23()` should return `789184709`.

```js
assert.strictEqual(experience23(), 789184709);
```

## 94

### --description--

We call the convex area enclosed by two circles a lenticular hole if:

- The centres of both circles are on lattice points.
- The two circles intersect at two distinct lattice points.
- The interior of the convex area enclosed by both circles does not contain any lattice points.

Consider the circles:

$$\begin{align}
  & C_0: x^2 + y^2 = 25 \\\\
  & C_1: {(x + 4)}^2 + {(y - 4)}^2 = 1 \\\\
  & C_2: {(x - 12)}^2 + {(y - 4)}^2 = 65
\end{align}$$

The circles $C_0$, $C_1$ and $C_2$ are drawn in the picture below.

<img class="img-responsive center-block" alt="C_0, C_1 and C_2 circles" src="https://cdn.freecodecamp.org/curriculum/project-euler/lenticular-holes.gif" style="background-color: white; padding: 10px;">

$C_0$ and $C_1$ form a lenticular hole, as well as $C_0$ and $C_2$.

We call an ordered pair of positive real numbers ($r_1$, $r_2$) a lenticular pair if there exist two circles with radii $r_1$ and $r_2$ that form a lenticular hole. We can verify that ($1$, $5$) and ($5$, $\sqrt{65}$) are the lenticular pairs of the example above.

Let $L(N)$ be the number of distinct lenticular pairs ($r_1$, $r_2$) for which $0 &lt; r_1 ≤ r_2 ≤ N$. We can verify that $L(10) = 30$ and $L(100) = 3442$.

Find $L(100\\,000)$.

### --tests--

`lenticularHoles()` should return `4884650818`.

```js
assert.strictEqual(lenticularHoles(), 4884650818);
```

## 95

### --description--

Given is an integer sided triangle $ABC$ with $BC ≤ AC ≤ AB$. $k$ is the angular bisector of angle $ACB$. $m$ is the tangent at $C$ to the circumscribed circle of $ABC$. $n$ is a line parallel to $m$ through $B$.

The intersection of $n$ and $k$ is called $E$.

<img class="img-responsive center-block" alt="triangle ABC, with k - the angular bisector of angle ACB, m - tangent at point C, n - line parallel to m through B, and point E - intersection of k and n" src="https://cdn.freecodecamp.org/curriculum/project-euler/angular-bisector-and-tangent.gif" style="background-color: white; padding: 10px;">

How many triangles $ABC$ with a perimeter not exceeding $100\\,000$ exist such that $BE$ has integral length?

### --tests--

`angularBisectorAndTangent()` should return `1137208419`.

```js
assert.strictEqual(angularBisectorAndTangent(), 1137208419);
```

## 96

### --description--

Each new term in the Fibonacci sequence is generated by adding the previous two terms.

Starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.

Every positive integer can be uniquely written as a sum of nonconsecutive terms of the Fibonacci sequence. For example, 100 = 3 + 8 + 89.

Such a sum is called the Zeckendorf representation of the number.

For any integer $n>0$, let $z(n)$ be the number of terms in the Zeckendorf representation of $n$.

Thus, $z(5) = 1$, $z(14) = 2$, $z(100) = 3$ etc.

Also, for $0 &lt; n &lt; {10}^6$, $\sum z(n) = 7\\,894\\,453$.

Find $\sum z(n)$ for $0 &lt; n &lt; {10}^{17}$.

### --tests--

`zeckendorfRepresentation()` should return `2252639041804718000`.

```js
assert.strictEqual(zeckendorfRepresentation(), 2252639041804718000);
```

## 97

### --description--

Larry and Robin play a memory game involving of a sequence of random numbers between 1 and 10, inclusive, that are called out one at a time. Each player can remember up to 5 previous numbers. When the called number is in a player's memory, that player is awarded a point. If it's not, the player adds the called number to his memory, removing another number if his memory is full.

Both players start with empty memories. Both players always add new missed numbers to their memory but use a different strategy in deciding which number to remove: Larry's strategy is to remove the number that hasn't been called in the longest time. Robin's strategy is to remove the number that's been in the memory the longest time.

Example game:

| Turn | Called number | Larry's memory | Larry's score | Robin's memory | Robin's score |
|------|---------------|---------------:|---------------|----------------|---------------|
|   1  |       1       |              1 |       0       |              1 |       0       |
|   2  |       2       |            1,2 |       0       |            1,2 |       0       |
|   3  |       4       |          1,2,4 |       0       |          1,2,4 |       0       |
|   4  |       6       |        1,2,4,6 |       0       |        1,2,4,6 |       0       |
|   5  |       1       |        1,2,4,6 |       1       |        1,2,4,6 |       1       |
|   6  |       8       |      1,2,4,6,8 |       1       |      1,2,4,6,8 |       1       |
|   7  |      10       |     1,4,6,8,10 |       1       |     2,4,6,8,10 |       1       |
|   8  |       2       |     1,2,6,8,10 |       1       |     2,4,6,8,10 |       2       |
|   9  |       4       |     1,2,4,8,10 |       1       |     2,4,6,8,10 |       3       |
|  10  |       1       |     1,2,4,8,10 |       2       |     1,4,6,8,10 |       3       |

Denoting Larry's score by $L$ and Robin's score by $R$, what is the expected value of $|L - R|$ after 50 turns? Give your answer rounded to eight decimal places using the format x.xxxxxxxx .

### --tests--

`selectiveAmnesia()` should return `1.76882294`.

```js
assert.strictEqual(selectiveAmnesia(), 1.76882294);
```

## 98

### --description--

Four points with integer coordinates are selected:

$A(a, 0)$, $B(b, 0)$, $C(0, c)$ and $D(0, d)$, with $0 &lt; a &lt; b$ and $0 &lt; c &lt; d$.

Point $P$, also with integer coordinates, is chosen on the line $AC$ so that the three triangles $ABP$, $CDP$ and $BDP$ are all similar.

<img class="img-responsive center-block" alt="points A, B, C, D and P creating three triangles: ABP, CDP, and BDP" src="https://cdn.freecodecamp.org/curriculum/project-euler/three-similar-triangles.gif" style="background-color: white; padding: 10px;">

It is easy to prove that the three triangles can be similar, only if $a = c$.

So, given that $a = c$, we are looking for triplets ($a$, $b$, $d$) such that at least one point $P$ (with integer coordinates) exists on $AC$, making the three triangles $ABP$, $CDP$ and $BDP$ all similar.

For example, if $(a, b, d) = (2, 3, 4)$, it can be easily verified that point $P(1, 1)$ satisfies the above condition. Note that the triplets (2,3,4) and (2,4,3) are considered as distinct, although point $P(1, 1)$ is common for both.

If $b + d &lt; 100$, there are 92 distinct triplets ($a$, $b$, $d$) such that point $P$ exists.

If $b + d &lt; 100\\,000$, there are 320471 distinct triplets ($a$, $b$, $d$) such that point $P$ exists.

If $b + d &lt; 100\\,000\\,000$, how many distinct triplets ($a$, $b$, $d$) are there such that point $P$ exists?

### --tests--

`threeSimilarTriangles()` should return `549936643`.

```js
assert.strictEqual(threeSimilarTriangles(), 549936643);
```

## 99

### --description--

In a very simplified form, we can consider proteins as strings consisting of hydrophobic (H) and polar (P) elements, e.g. HHPPHHHPHHPH.

For this problem, the orientation of a protein is important; e.g. HPP is considered distinct from PPH. Thus, there are $2^n$ distinct proteins consisting of $n$ elements.

When one encounters these strings in nature, they are always folded in such a way that the number of H-H contact points is as large as possible, since this is energetically advantageous.

As a result, the H-elements tend to accumulate in the inner part, with the P-elements on the outside.

Natural proteins are folded in three dimensions of course, but we will only consider protein folding in <u>two dimensions</u>.

The figure below shows two possible ways that our example protein could be folded (H-H contact points are shown with red dots).

<img class="img-responsive center-block" alt="two possible ways to fold example protein" src="https://cdn.freecodecamp.org/curriculum/project-euler/protein-folding.gif" style="background-color: white; padding: 10px;">

The folding on the left has only six H-H contact points, thus it would never occur naturally. On the other hand, the folding on the right has nine H-H contact points, which is optimal for this string.

Assuming that H and P elements are equally likely to occur in any position along the string, the average number of H-H contact points in an optimal folding of a random protein string of length 8 turns out to be $\frac{850}{2^8} = 3.3203125$.

What is the average number of H-H contact points in an optimal folding of a random protein string of length 15? Give your answer using as many decimal places as necessary for an exact result.

### --tests--

`proteinFolding()` should return `8.0540771484375`.

```js
assert.strictEqual(proteinFolding(), 8.0540771484375);
```

## --fcc-end--
    