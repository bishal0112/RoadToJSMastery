# Topic Covered

---

## DAY 1

- VS code set-up
- Intro to JS
- HELLO WORLD
- JS Definition
- Linking JS File(Inline, External)
- Console.log
- Developer Console
- Role of JS
- JS releases
- Values and Variables
- Camel Cases
- Naming Convention
- Syntax Error
- Reserve Keywords

#### Naming Convention

- Name should have only letters, digits, underscores, and dollar signs.
- Should not start with number.
- Can have $ or \_ signs
- JavaScript is case sensitive
- Reserve words cannot be used as names.

---

---

# DAY 2

### Data Types

- Primitive Type
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol
  - BigInt
- Obects
- Dynamic Typing
- Comments
- Type OF
- Let, var and const
- Mutable and immutable
- Operators
- Operator Precedence

---

# Day 3

- String and Template Literals
- Type Conversion and Coercion
- Mulit line Strings
- IF | Else-if | Else
- Number(), String(), Boolean()
- We cannot conver to null, undefined
- NaN = Invalid Number(Typeof is a Number)
- Truthy and Falsy Values
- Equality Operator
  - Strict Equality ===
  - Loose Equality ==
- Difference Operator
  - Strict !==
  - Loose !=
- Prompt
- Boolean Logic
  - AND(&&)
    | Input | | Output |
    | --- | --- | --- |
    | X | Y | X && Y |
    | true | true | true |
    | true | false | false |
    | false | true | false |
    | false | false | false |
  - OR( | | )
    | Input | | Output |
    | --- | --- | --- |
    | X | Y | X \|\| Y |
    | true | true | true |
    | true | false | true |
    | false | true | true |
    | false | false | false |
  - NOT(!)
    | Input | Output |
    | ----- | ------ |
    | true | false |
    | false | true |

---

# Day 4

- Switch Statements
- Statement and Expression
- Conditional (Ternary) Operator
- JS Releases
- JavaScript and EcmaScript
- BackWard Compactability and Forward Compactability
- Development and Production
- Transpiling and Polyfile(Babel)
- ES6 compactability table
- EsNext
- Strict Mode

---

# Day 5

- Functions
- Parameters
- Arguments
- Return Keyword
- Function Declaration VS Expression
- Functions are just value
- Arrow Function (ES6)
- Function Calling other Function

---

# Day 6

- Arrays
- Arrays using New Keyword
- Retriving data from an array
- Array Index
- Length
- Array Operations(Methods)
- Push
- Unshift
- Pop
- Shift
- IndexOf (Returns index of the element if present else returns -1)
- Includes (ES6 Returns true or false)

---

# Day 7

- Objects (Literal Syntax)
- Retriving data using dot and Bracket Notation
- Object Methods(Generally Function)
- This keyword
- ctrl + d(select Multiple lines)
- Iteraters: for loop , while loop
- DRY (Do Not Repeat Yourself)
- Break and continue
- Looping through array
- Looping Backwards
- Nested Loops (Loops inside another loop)

---

# Day 8

- Developer Skills
- Prettier
- Configure Prettier
- Configure Snippet(vs code)
- use of Live-server, Node.js
- Learn how to code(Don't be John)
- Use Stack Overflow, google, MDN
- console (warn, error, table)
- Think Like a developer
- Debugging

---

# Day 9

- Basic HTML Structure and Elements
- Attributes, Classes and IDs
- Basic Styling with CSS
- CSS Box Models

---

# Day 10

- DOM (Document Object Model)
- document.querySelector('')
- .textContent, .value
- Dom Manipulation
- EventListner (addEventListner)
- State variable
- .style. propertyName = 'value';

---

# Day 11

- Code Refactoring
- querySelectorAll('value')
- classList
  - add
  - remove
  - contains
  - toggle
- key Events
  - keydown
  - keypressed
  - keyup

---

# Day 12

- diagram.net
- getElementById('name') (this is faster than queryselector)
- .src
- toggle
- made a game

---

# Day 13

- Overview of JavaScript
  - High Level
  - Garbage collection
  - Interpreted or JIT(Just In time compiled)
  - Multi Paradigm
    - Procedural Programming
    - Object Oriented Programming (oop)
    - Functional Programming (FP)
  - Prototype Based Object Oriented
  - First Class Functions
  - Dynamic
  - Single Threaded
  - Non Blocking event loop
  - concurrency model
- event loop
- Js Engine
- V8 Engine
- AST (Abstract Syntax Tree)
- Call back Queue
- Execution Context

---

# Day 14

- Scope and Scope Chain
- Lexical Scoping
- Global Scope
- Function Scope
- Block Scope
- Scope of a variable
- Hoisting
- TDZ (Temproal Dead Zone)
- This Keyword
- Method Borrowing

- ## Hoisting
  |                                        | Hoisted                       | Initial Value   | Scope    |
  | -------------------------------------- | ----------------------------- | --------------- | -------- |
  | function Declaration                   | yes                           | actual function | block    |
  | var variables                          | yes                           | undefined       | function |
  | let and const Variables                | NO                            | uninitilized    | block    |
  | function expression and arrow function | Depends on let, var and const | -               | -        |

---

# Day 15

- Regular functions vs Arrow functions
- Argument Keyword
- const self = this; (used inside normal function to access the properties of the parent function)
- primitive vs reference types
- object.assign({}, objname)

---

# Day 16

- Destructuring array
- Nested Destructuring
- Destructuring with default values
- Destructuring Objects
- Mutating variables (use () )

---

# Day 17

- Spread operator (...)
- Used for shallow copy and merge array
- Iterables: arrays, strings, maps, sets . NOT Objects
- Does not work in template literal
- Works on objects even through they are not iterable
- Rest pattern and parameters
- Only one rest variable and it must be last

---

# Day 18

- Short Circuting
  - Uses any Data type
  - Return any data type
- || (or)
- && (and)
- ?? (nullish coalesing)
- Logical assignment
  - ||=
  - ??=
  - &&=

---

# Day 19

- for of loop
- ( .entries() ) (to get index and value from an array)
- Enhanced Object literal
  - We can use function without function keyword inside an object
  - We can use key of an object as an expression
  - We can add external object inside other object by just giving its name
- Option chaining (?.)
- Object.key(object name) gets the key from an object
- Object.value(object name) gets the value from an object

---

# Day 20

- Some more data Types SETS and MAPS
- SETS (created using new sets())
  - new Set()
  - .has()
  - .add()
  - .delete()
  - .clear()
- MAPS (created using new map())
  - new Map()
  - .set()
  - .set().set().set() chaining
  - .get()
  - .has()
  - .delete()
  - .size
  - .clear()
- values can be added directly to the map without using set
- Converting obj to map
- Converting map to array
- some datas structure in JS are

  - Array - Store items by assigning index value
  - Sets - Store unique value which are not repeated
  - Maps - Hold key value pairs(Key can be unique)
  - Objects - Hold key value pairs

- Difference between maps and object

| Point     | Object                      | Map                            |
| --------- | --------------------------- | ------------------------------ |
| Iterable  | Not directly iterable       | Directly Iterable              |
| Size      | Does not have size property | Has the size property          |
| Key Type  | Must Be string or symbol    | Can be any DataType            |
| Key Order | They are not well ordered   | They are oredered by insertion |
| Defaults  | Have Default Keys           | Do not have default keys       |

---

# Day 21

- Strings
- [4] (access character from that position)
- .length
- .indexOf()
- .lastIndexOf()
- .slice()
- .toLowerCase()
- .toUpperCase()
- .trim()
- .replace()
- .replaceAll()
- regular expression
  - replace(/word/, 'newWord')
- .startsWith()
- .endsWith()
- .includes()
- .split()
- .join()
- .padStart()
- .padEnd()
- .repeat()

---

# Day 22

- Default Parameters
- ES5 usign ||
- ES6 (fname = "newname" )
- Key Points for default parameters
  - Order Matters while passing data
  - While passing arguments if you want to leave space then use undefined.
- JavaScript does not have pass by reference
- First class function and higher order function
- Function calling other functions like eventListeners

---

# Day 23

- Function accepting call back function
- function returning function
- call and apply method
- Bind Method
- Partial application
- ### Call, Apply and Bind Method
  | Call                                                                   | Apply                       | Bind                                    |
  | ---------------------------------------------------------------------- | --------------------------- | --------------------------------------- |
  | With call() we can make methods which can be used on different objects | Same as call                | It can borrow methods from other object |
  | - It takes differnt parameters as value                                | - It takes Array as a value | - It creates new object                 |

---

# Day 24

- IIFE
- Closures (Theory Lecture)
- console.dir()
- Simple Array methods
  - slice()
  - splice()
  - reverse()
  - concat()
  - join()
  - at()
  - forEach()
  - \_
  - insertAdjecentHTML

---

# Day 25

- map()
- filter()
- reduce()

---

# Day 26

- chaining methods
- find method
- default behaviour of form is to reload - this can prevented by using preventDefaults()
- .blue()
- findIndex method
- Some and Every
- flat and flatMap

---

# Day 27

- Sorting arrays
- .sort() methods it mutates the original array, it can accept a function
- fill() used for filling of an array
- Array.from()
- Which array to use

---

# Day 28

- Converting and checking numbers
  - Number()
  - +'30'
- Parsing
  - parseInt
  - parseFloat
  - isNaN
- Conversion
- Number.isFinite()
- isInteger()
- Infinite
- Math functions
- sqrt()
- PI
- max, min
- random
- trunc
- ceil
- floor
- toFixed()
- remainder operator( modulus )
- numeric seprator \_ 232_2323
- bigInt
- Number.Max_safe_integer
- n <- for bigInt
- Date
- Date.now - to get the current date
- other date functions

---

# Day 29

- moment.js
- Internationalization Dates
- Internationalization Time
- SetTimeOut
- SetInterval
- ClearInterval and ClearTimeOut

---

# Day 30

- How the DOM works behind the scene
- Dom is the interface between JavaScript and Browser(HTML)
- Selecting, Creating and Deleting Element
- Attributes, Data Attributes
- Styling CSS

---

# Day 31

- Events in javaScript
- addEventListner
- ele.onmouseEnter
- \<h1 onlick = "hello">
- Event Propogation : Bubbling and Capturing
- whenever a event is activated it travels through all the parent element before reaching the eventNode
- It does not pass thorough any sibling elements
- current target
- target
- e.stopPropagation();
