// Primitive Types: number, string, boolean, null, undefined
let age: number;
age = 12;

let username: string;
username = 'Veronica';

let isAdmin: boolean;
isAdmin = false;

// Reference Types: array, object
let hobbies: string[];
hobbies = ['Sports', 'Gaming'];

let person: { name: string, age: number };
person = {
  name: 'Veronica',
  age: 32
};

let guests: { name: string, age: number }[];
guests = [
  {
    name: 'Veronica',
    age: 32
  },
  {
    name: 'Shannon',
    age: 30
  }
];

// Type Inference
let course = 'React - The Complete Guide';

// Assigning `course` to a number will trigger an error
// as TypeScript infered `course` as a string because it
// has been initialized with a string
// course = 12.99;

// Union Type
let post: string | number;
post = 'trans-12356';
post = 12356;

// Type Alias
type Transaction = {
  id: string,
  amount: number,
  owner: string
};

let transaction: Transaction;
transaction = {
  id: 'transac-45689',
  amount: 150000,
  owner: 'Shannon'
};

let transactions: Transaction[];
transactions = [
  {
    id: 'transac-45689',
    amount: 150000,
    owner: 'Shannon'
  },
  {
    id: 'transac-78562',
    amount: 750000,
    owner: 'Veronica'
  }
];

// Functions & Types
function multiply(a: number, b: number) {
  return a * b;
}

function printLog(value: any) {
  console.log(value);
}

// Generics
// By setting a generic type `<T>` to the `insertAtBeginning()` function,
// Typescript understands that it should look at the types of the arguments
// the function is receiving to that it can infer the return type.
// Generics helps us writing logics that are type-safe and yet flexible
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [ value, ...array ];

  return newArray;
}

const demoArray1 = [1, 2, 3];
// Typescript infers that the return type is the same as the type of the argument
const updatedDemoArray1 = insertAtBeginning(demoArray1, -10);

const demoArray2 = ['a', 'b', 'c'];
const updatedDemoArray2 = insertAtBeginning(demoArray2, 'z');