/** 
// destructuring/unpacking arrays
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)

const fullStack = [
    ['HTML', 'CSS', 'JavaScript', 'React'],
    ['Node', 'MongoDB', 'Express'],
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd)
console.log(backEnd)

// we can use default value in case the value of array for that index is undefined
const names = [undefined, 'Sam', 'David']
let [fPerson = 'Paul', sPerson, thPerson, fourPerson = 'Abba'] = names
console.log(fPerson, sPerson, thPerson, fourPerson)

// we may not assign var to all the array element. we can destructure few and get the remaining as array using spread op 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num2, num1)
console.log(rest)

// destructuring during iteration
const countries = [
    ['Nigeria', 'Kano'],
    ['Norway', 'Oslo'],
    ['UAE', 'Dubai'],
]
for (const [country, city] of countries){
    console.log(country, city)
}

// destructuring object
// name of the var we use ti destructure should be exactly the same as the key/property of the object
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
}
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)

// renaming during destructuring 
// if the key isnt found in the obj, the var will be assigned to undefined
let {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, h, a, p)


// sometimes the key might not be in the obj, we can give a default value during declaration
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
}
let {width, height, area, perimeter = 60} = rectangle
console.log(perimeter)

// object parameter without destructuring 
const rectangle = {
    width: 20,
    height: 10,
}
const calculatePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height)
}
console.log(calculatePerimeter(rectangle))


const person = {
    fName: 'Abba',
    lName: 'Hassan',
    age: 25,
    country: 'Nigeria',
    job: 'instructor and Developer',
    skills: [
        'HTML', 'CSS', 'JS', 'React',
        'Redux', 'Node', 'MongoDB', 'Python', 'D3.js'
    ], 
    languages: ['Arabic', 'English', 'French'],
}

// creating a function which gives info about object without destructuring 
const getPersonInfo = (obj) => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')  // get all skills except the last
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${obj.fName} ${obj.lName} lives in ${obj.country}.\nHe is ${obj.age} years old.
He teaches ${formattedSkills} and ${skills[skills.length - 1]}. 
He speaks ${formattedLanguages} and a little bit of ${languages[2]}`

    return personInfo
}
console.log(getPersonInfo(person))


// creating a function which gives info about object with destructuring 
const getPersonInfo = ({
    fName, lName, age, country, job, skills, languages
}) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${fName} ${lName} lives in ${country}.\nHe is ${age} years old. \
He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]}. \
He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo
}
console.log(getPersonInfo(person))


// destructuring object during iteration
const toDoList = [
    {
        task: 'prepare a js test',
        time: '4/1/2024 8:30',
        completed: true,
    },
    {
        task: 'gives js test',
        time: '4/1/2024 10:30',
        completed: true,
    },
    {
        task: 'access test result',
        time: '4/1/2024 1:30',
        completed: false,
    },
]
for (const {task, time, completed} of toDoList){
    console.log(task, time, completed)
}


// spread/rest operator (...)
// to get the rest elements as an array after destructuring
// also use to spread array element to another array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num3)
console.log(rest)

// spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10, 12]
const evenNums = [...evens]

const odds = [1, 3, 5, 7, 9, 11, 13]
const oddNums = [...odds]

const wholeNum = [...evens, ...odds]

console.log(evenNums)
console.log(oddNums)
console.log(wholeNum)

// spread operator to copy object
const user = {
    name: 'Abba',
    title: 'Vibe coder',
    country: 'Nigeria',
    city: 'Kano'
}
//const copiedUser = {...user}
//console.log(copiedUser)


// modifying or changing the object while copying
const copiedUser = {...user, title: 'programmer'}
console.log(copiedUser)

// we use spread operator to write an arror func with unlimited num of parameter
// the argument passed when we invoked a func will change to an array
const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
        sum += num
    }
    return sum
}
console.log(sumAllNums(40, 90, 120, 28, 19, 1))



// higher order function - takes function as a parameter or return a function as a value
// the function passed as a parameter is called a callback
const callback = (n) => {
    return n ** 2
}
function cube(callback, n){
    return callback(n) * n
}
console.log(cube(callback, 3))

// higher order function returning an other function
const higherOrderFunc = (n) => {
    const doSomething = (m) => {
        const doWhatEver = (t) => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrderFunc(2)(3)(10))

// the forEach method uses callback func
const nums = [1, 2, 3, 4, 5]
const sumArray = (arr) => {
    let sum = 0
    const callback = function(element){
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(nums))

// another way to do the above
const nums = [1, 2, 3, 4, 5]
const sumArray = (arr) => {
    let sum = 0
    arr.forEach(function(element){
        sum += element
    })
    return sum
}
console.log(sumArray(nums))


// setting time - in js we can execute some activities in a certain interval of time
// or we can wait for some time to execute some actitivies

// we use setInterval higher order function to do some activity continuously within some interval of time
// 1000ms = 1s
function sayHello(){
    console.log('Hello!')
}
setInterval(sayHello, 1000)

// we use setTimeout higher order func to execute some action at some time in the future 
function sayHello(){
    console.log('Hello!')
}
setTimeout(sayHello, 5000)


// functional programming - instead of writing regular loop, we can use lots of built-in methods to solve complicated problem
// forEach - iterate an array element, use only with array. it takes a callback func with elements, index and array itself
// index and array are optional
let sum = 0
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => {
    sum += num
})
console.log(sum)


const countries = ['Nigeria', 'Egypt', 'England', 'Turkey']
countries.forEach((element) => {
    console.log(element.toUpperCase())
})

// map - iterate an array element and modify the array element
// it takes a callback func with element, index and array parameter and returns a new array
const nums = [1, 2, 3, 4, 5]
const numbersSquare = nums.map((num) => {
    return num * num
})
console.log(numbersSquare)

// using implicit return (no curly braces)
const names = ['Abba', 'Samuel', 'Asim', 'Paul']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

// filter - filter out items which fullfill filtering conditions and return a new array
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethopia', 'Finland', 'Germany', 'Hungary', 'Iceland', 'Japan', 'Kenya']
const countriesWithLand = countries.filter((country) => country.includes('land'))
console.log(countriesWithLand)

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

const scores = [
    {name: 'Ali', score: 99},
    {name: 'Anna', score: 91},
    {name: 'Paul', score: 100},
    {name: 'Idi', score: 90},
    {name: 'Joe', score: 89},
]
const scoresGreaterThanNinety = scores.filter((score) => score.score > 90)
console.log(scoresGreaterThanNinety)

// reduce - takes a callback func. the callback func takes accumulator, current and optional initial value as a parameter
// it returns a single value
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

// every - checks if all the elements are similar in one aspect, returns a boolean
const names = ['Abba', 'Paul', 'Sam', 'Idi']
const areAllString = names.every((name) => typeof name === 'string')
console.log(areAllString)

// find - returns the first element which satisfies the condition
const ages = [24, 19, 25, 22, 32, 17, 27, 28, 25, 18, 21]
const age = ages.find((age) => age < 20)
console.log(age)

const names = ['Abba', 'Mathias', 'Elias', 'Mubarak']
const result = names.find((name) => name.length > 6)
console.log(result)

// findIndex - returns the position of the first element which satisfies the condition
const ages = [24, 19, 25, 22, 32, 17, 27, 28, 25, 18, 21]
const names = ['Abba', 'Mathias', 'Elias', 'Mubarak']
const result = names.findIndex((name) => name.length > 6)
const result1 = ages.findIndex((age) => age > 20)
console.log(result)
console.log(result1)

// some - check if some of the elements are similar in one aspect, it returns a boolean
const names = ['Abba', 'Mathias', 'Elias', 'Mubarak']
const bools = [false, false, false, false]
const areSomeTrue = bools.some((b) => b === true)
console.log(areSomeTrue)

const areAllString = names.some((name) => typeof name === 'string')
console.log(areAllString)

// sort - arranges the array elements in either ascending or descending order
// by default, sort() method sorts values as string. it is recommended to copy the original data b4 using sort
const products = ['milk', 'sugar', 'cofee', 'apple', 'honey', 'carrot']
console.log(products.sort())

// sorting numerical value
const numbers = [9.81, 3.14, 100, 37]
console.log(numbers.sort())

// using a sort method to sort number items provide a wrong result, to avoid this -
// we use a compare callback func which returns a -ve, 0 or +ve
numbers.sort(function (a, b) {
    return a - b // for ascending
})
console.log(numbers)

numbers.sort(function (a, b){
    return b - a // for descending
})
console.log(numbers)

// sorting object arrays - whenever we sort objects in an array, we use the object key to compare
objArr.sort(function (a, b){
    if (a.key > b.key) return 1
    if (a.key < b.key) return -1
    return 0
})

or 

objArr.sort(function (a, b){
    if (a['key'] > b['key']) return 1
    if (a['key'] < b['key']) return -1
    return 0
})

const users = [
    {name: 'Anna', age: 19},
    {name: 'Eyob', age: 27},
    {name: 'Elias', age: 21},
    {name: 'Sam', age: 24}
]
users.sort((a, b) => {
    if (a.age > b.age) return 1
    if (a.age < b.age) return -1
    return 0
})
console.log(users)

// sets and map
// set is a collection of element. set can only contains unique element 
// creating an empty set 
const companies = new Set()
console.log(companies)

// creating set from array
const languages = ['Arabic', 'Spanish', 'French', 'English', 'Arabic', 'Spanish', 'Hausa', 'Finnish', 'Hausa']
const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

// set is an iterable object and we can iterate through each element
for (const language of setOfLanguages){
    console.log(language)
}

// adding an element to a set 
const companies = new Set()
console.log(companies.size) // we use size to check the length of a set
companies.add('Google') // add() method to add an element to the set
companies.add('Facebook')
companies.add('X')
companies.add('Microsoft')
console.log(companies.size)
console.log(companies)

// we can also use loop to add element to a set
const companies = ['Facebook', 'Google', 'Amazon', 'Oracle', 'OpenAI', 'Amazon', 'Oracle', 'OpenAI']
setOfCompanies = new Set()
for (const company of companies){
    setOfCompanies.add(company)
}
console.log(setOfCompanies)

// we can delete element from a set using a delete method
setOfCompanies.delete('Oracle')
console.log(setOfCompanies)

// checking an element in the set using 'has' method - return boolean
console.log(setOfCompanies.has('Apple'))
console.log(setOfCompanies.has('Facebook'))

// clear() method removes all the elements from the set
setOfCompanies.clear()
console.log(setOfCompanies)
*/

/** 
// still on sets
const languages = ['Arabic', 'Spanish', 'French', 'English', 'Arabic', 'Spanish', 'Hausa', 'Finnish', 'Hausa']
const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)

const counts = []
for (const lang of langSet){
    const filteredLang = languages.filter((lng) => lng === lang)
    console.log(filteredLang)
    counts.push({language: lang, count: filteredLang.length})
}
console.log(counts)

// union of two sets can be found using spread operator
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

// intersection of two sets can be achieved using filter
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)
let c = a.filter((num) => B.has(num))

let C = new Set(c)
console.log(C)

// difference of two sets can also be found using filter() method
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)
let c = a.filter((num) => !B.has(num))

let C = new Set(c)
console.log(C)


// map - method used on arrays to transform each element into something new and return a new array of the same length
// takes a callback function 
// creating an empty map
const map = new Map()
console.log(map)

// creating a map from an array
countries = [
    ['Nigeria', 'Kano'],
    ['England', 'London'],
    ['Ireland', 'Galway'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

// adding values to the map
const countriesMap = new Map()
countriesMap.set('Nigeria', 'Abuja')
countriesMap.set('England', 'London')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)

// getting a value from a map
console.log(countriesMap.get('Nigeria'))

// checking if a key exists in a map using 'has' method, it returns boolean
console.log(countriesMap.has('Canada'))

// getting all values from map using loop
for (const country of countriesMap){
    console.log(country)
}

for (const [country, city] of countriesMap){
    console.log(country, city)
}


// regEx in jS - we can create pattern in two ways
// to declare a string we use qoutes. to declare a regular expression, we use two forward slashes and optional flag
// regEx parameters - it takes two param, one required search pattern and an optional flag

// creating a pattern with regEx constructor
// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

// with flags
let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)

// declaring a regEx pattern using regEx object - writting the pattern and flag inside the regEx constructor
let regEx = new RegExp('love', 'gi')

// creating a pattern without regEx constructor
let regEx = /love/gi


// regEx object methods
// test() - test for a match in a string. it returns a boolean
const str = 'i love javascript'
const pattern = /love/
const result = pattern.test(str)
console.log(result)

// match() - returns an array containing all the matches, and null if no match is found
const str = 'i love javascript'
const pt = 'love'
const result = str.match(pt)
console.log(result)

// if we do not use the global flag, match() return an array containing the pattern, index, input and group
const pt1 = /love/gi
const result1 = str.match(pt1)
console.log(result1)

// search() - search for a match in a string, returns the index of the match or -1 if the search fails
const str = 'i love javascript'
const pt = 'love'
const result = str.search(pt)
console.log(result)


// replace() - executes a search for a match in a string and replace the matched substring with a replacement substring
const txt = 'Python is cool language. I recommed python as a first language'
matchedReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchedReplaced)

// square bracket - lets use [] to include lower and uppercase pattern 
const pattern = /[Aa]pple/gi
const pattern1 = /[Bb]anana/g
const txt = ' Apple and Banana are fruits. And old cliche says an apple a day keeps the doctor away'
const matches = txt.match(pattern)
const matches1 = txt.match(pattern1)
console.log(matches)
console.log(matches1)


// escape character (\) in regEx
const pattern = /\d/g 
const pattern1 = /\d+/g
const text = 'this example was made in January, 12 2025'
const matches = text.match(pattern)
const matches1 = text.match(pattern1)
console.log(matches)
console.log(matches1)

const pt = /[a]./g
const pt1 = /[a].+/g
const txt = 'Apple and banana are fruits'
const matches = txt.match(pt)
const matches1 = txt.match(pt1)
console.log(matches)
console.log(matches1)

const txt = 'I am not sure if there is a convention how to write the word e-mail. Some poeple write it email others as Email or E-mail.'
const pt = /[Ee]-?mail/g
const matches = txt.match(pt)
console.log(matches)


// quantifiers in regEx - we can specify the length of the substring we look for in text, using a curly bracket {}
// lets say we are interested in a substring that their length are 4 characters
const txt = 'this regular exxpression example was made on September, 24th 2025'
const pt = /\b\w{4}\b/g
const matches = txt.match(pt)
console.log(matches)

// exactly four words without numbers
const pt1 = /\b[a-zA-Z]{4}\b/g
const matches1 = txt.match(pt1)
console.log(matches1)

// a number and exactly four digits
const pt2 = /\d{4}/g
const matches2 = txt.match(pt2)
console.log(matches2)

// 1 to 4
const pt3 = /\d{1,4}/g
const matches3 = txt.match(pt3)
console.log(matches3)

// scope of variable - a var can be declared at different scope, global and local
// anything declared without let, var or const is scoped at global level
// window global object - declaring a var without var, let or const make it available in window object and found anywhere
a = 'JavaScript'
b = 10
function letsLearnScope(){
    console.log(a, b)
    if(true){
        console.log(a, b)
    }
}
console.log(a, b) // accessible

// a globally declared var can be accessed everywhere in the same file. but the term global is relative
// it can be global to the file or it can be global relative to some block of codes
let a = 'JavaScript'
let b = 10
function letsLearnScope(){
    console.log(a, b)
    if(true){
        let a = 'Python'
        let b = 100
        console.log(a, b)
    }
    console.log(a, b)
}
letsLearnScope()
console.log(a, b)

// local scope - a var declared as local can be accessed only in certain block; block scope or function scope
let a = 'JavaScript'
let b = 10
function letsLearnScope(){
    console.log(a, b)
    let value = false
    
    if(true){
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value = !value
        console.log(a, b, c, value)
    }
    //console.log(a, b, c, value)
}
letsLearnScope()
console.log(a, b)

// as a rule of thumb, you can use 'let' for any value which change, 'const' for any constant value and for 
// array, object, arrow functiona and function expression 

// object - everything can be an object, an object has properties and properties have value
// so an object is a key value pair. to create an object literal, we use two curly brackets
const person = {}

// creating an object with values 
const rectangle = {
    length: 20,
    width: 20,
}
console.log(rectangle)

const person = {
    firstName: 'Paul',
    lastName: 'Johnny',
    age: 26,
    country: 'Nigeria',
    city: 'Benin',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python', 'C', 'MongoDB', 'Java'],
    isMarried: false
}
console.log(person)

// getting value from an object - we can access values of object using two methods
const person = {
    firstName: 'Paul',
    lastName: 'Johnny',
    age: 26,
    country: 'Nigeria',
    city: 'Benin',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python', 'C', 'MongoDB', 'Java'],
    isMarried: false,
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    phoneNumber: '+xxxxxxxxxx'
}
// using . followed by key name, if the key name is one word
console.log(person.firstName)
console.log(person.lastName)
console.log(person.location)  // undefined

// using square bracket and a key name
console.log(person['firstName'])
console.log(person['age'])
console.log(person['phoneNumber'])

// creating an object method - the person object has getFullName properties, a function and we call it an object method
// 'this' refers to the object itself, we can use the word 'this' to access the values of different properties of the object
// we cannot use an arrow function as object method
console.log(person.getFullName())

// setting new key for an object - an object is a mutable data structure and we can modify its content 
person.nationality = 'Ethopian'
person.title = 'teacher'
person.skills.push('Saas')
person.skills.push('C++')
person.isMarried = true

person.getPersonInfo = function(){
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    let skills = `${skillsWithoutLastSkill} and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}`
    return statement
}
console.log(person.getPersonInfo())

// objects methods - there are different methods to manipulate an object. 
// Object.assign(target, source) - to copy an object without modifying the original object, 
const person = {
    firstName: 'Paul',
    lastName: 'Johnny',
    age: 26,
    country: 'Nigeria',
    city: 'Benin',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python', 'C', 'MongoDB', 'Java'],
    title: 'teacher',

    address: {
        street: 'xxxxxxx 16',
        PObox: 2002,
        city: 'xxxxx',
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and i live in ${this.country}. I am ${this.age}`
    }
}
const copyPerson = Object.assign({},person) // target: empty object {} to copy into | source: object to copy from
console.log(copyPerson)

// Object.keys() - to get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys)

const address = Object.keys(copyPerson.address)
console.log(address)

// Object.values() - to get the values of an object as an array
const values = Object.values(copyPerson)
console.log(values)

// Object.entries() - to get the keys and values as an array
const entries = Object.entries(copyPerson)
console.log(entries)

// hasOwnProperty() - to check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('firstName'))

// console Object methods
// we use console.object methods to show output on the browser console and document.write on the browser document (view port)
// both methods are used for testing and debugging purposes. 
// we use document.getElementById() when interacting with DOM
    // console.log() - to show output on the browser console
console.log('%d %s of JavaScript', 30, 'days')
console.log('%cJavaScript is fun!', 'color: red')

    // console.warn() - to give warning on browser
console.warn('this is a warning!')

    // console.error() - to show an error messages
console.error('this is an error message')

    // console.table() - displays data as a table (index, value columns) on the console, takes an object or array as required arg 
    // and optional column param. 
const names = ['joe', 'paul', 'angel', 'pit']
console.table(names)

const user = {
    name: 'paul',
    title: 'researcher',
    country: 'Nigeria',
    city: 'Kano',
    age: 25,
}
console.table(user)

    // console.time() - starts a timer to track how long an operation takes
    // we can have upto 10K timer (with unique names) running on a given page 
    // console.timeEnd() displays the time in ms that elapsed since the timer was started 
const countries = [
    ['Nigeria', 'Kano'],
    ['England', 'London'],
    ['Sweden', 'Oslo'],
]
console.time('regular for loop')
for (let i = 0; i < countries.length; i++){
    console.log(countries[i][0])
}
console.timeEnd('regular for loop')

console.time('for of loop')
for(const [name, city] of countries){
    console.log(name, city)
}
console.timeEnd('for of loop')


console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')

    // console.info() - displays info message on browser console
console.info('coding is fun!')

    // console.assert() - writes an err message to the console if the assertion is false, if true nothing happens
    // the first paramter is an assertion expression
console.assert(4 > 3, '4 is bigger than 3')
console.assert(4 > 5, '4 is bigger than 5')

for(let i = 0; i <= 10; i += 1){
    let errorMessage = `${i} is not even`
    console.log('the # is' +i)
    console.assert(i % 2 === 0, {number: i, errorMessage: errorMessage})
}


    // console.group() - helps to group different log group
const names = ['Abba', 'Isa', 'Adam', 'Ali']

const countries = [
    ['Nigeria', 'Kano'],
    ['England', 'London'],
    ['Sweden', 'Oslo'],
]

const user = {
    name: 'Abba',
    title: 'Educator',
    country: 'Qatar',
    city: 'Doha',
    age: '24',
}

const users = [
    {
        name: 'Abba',
        title: 'Educator',
        country: 'Qatar',
        city: 'Doha',
        age: '24',
    },
    {
        name: 'Abba',
        title: 'Educator',
        country: 'Qatar',
        city: 'Doha',
        age: '24',
    },
    {
        name: 'Abba',
        title: 'Educator',
        country: 'Qatar',
        city: 'Doha',
        age: '24',
    },
    {
        name: 'Abba',
        title: 'Educator',
        country: 'Qatar',
        city: 'Doha',
        age: '24',
    },
]
console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()


    // console.count() - prints the number of times the console.count() is called, takes a string label parameter
    // very helpful to count the number of times a function is called
const func = () => {
    console.count('function has been called')
}
func()
func()
func()

// console.clear() - cleans the browser console


// error handling - ss ia a loosely typed language. some time you will get a runtime error when you try to access
//  an undefined function etc
// js similar to python provides an error handling mechanism to catch runtime error using try - catch - finally block
try {
    // code that may throw an error
} catch(err){
    // code if an error occurs
} finally{
    // code to be executed regardless
}

// try - wrap suspicious code that may throw an error in try block. allows us to defined a block of code to be tested for errors while it is being executed
// catch -  code to do something when an error occurs. the catch block can have parameters that will give you error info
// finally - will always be executed regardless of the occurrence of an error. can be used to complete the remaining task or rest variables that might have changed before error occurred in try block
try{
    let lastName = 'Yakubu'
   // let firstName = 'Mubarak'
    let fullName = firstName + ' ' + lastName
    console.log(fullName)
} catch(err){
    console.log(err)
}

try {
    let lastName = 'Yakubu'
    let fullName = firstName + ' ' + lastName
} catch(err){
    console.error(err)
} finally{
    console.log('i always run!')
}

// the catch block takes a parameter. it is common to pass e, err or error as a parameter to the catch block.
// this parameter is an object and it has name and message keys
try {
    let lastName = 'Abba'
    let fullName = firstName + ' ' + lastName
} catch(err){
    console.log('Name of error:', err.name)
    console.log('Error message:', err.message)
} finally{
    console.log('in any case i will be executed!')
}


/** throw - the throw statement allows us to create a custome error
 *  we can throw a string, number, boolean or an object
 *  when you throw exception, expression specifies the value of the exception
 *  each of the following throws an exception:
    - throw 'Error2'
    - throw 42
    - throw true
    - throw new Error('Required')  an error obj with message: Required */
/** 
const throwErrorExample = () => {
    let x = prompt('Enter a number: ')
    try {
        if(x == '') throw 'empty'
        if(isNaN(x)) throw 'not a number'
        x = Number(x)
        if(x < 5) throw 'too low'
        if(x > 10) throw 'too high'
    } catch(err){
        console.log(err)
    } 
}
throwErrorExample()


/** classes - is like an object constructor or a blueprint for creating objects
 *  we create a class to create an object, the class defines attribute and the behavior of the object
 *  while the object on the other hand, represent the class. once we create a class we can create an object from it
 *  creating an object from a class is called class instantiation
 *  class allows us to create many objects, this helps to reduce the amount and repetition of code 

//  to define a class in Js, we need the keyword class, the name of the class in CamelCase and block code
class ClassName{
    // code goes here
}
class Person{
    // code
}

// class instantiation - creating an object from a class
// we use the keyword 'new' followed by the name of the class
const person = new Person()
console.log(person)

/** class constructor - is a built-in function which allows us to create a blueprint for the object
 *  it starts with a keyword 'constructor' followed by a parenthesis, we pass the properties of the obj as parameter 
 *  we use 'this' keyword to attach the constructor parameters with the class 
class Person{
    constructor(fName, lName){
        console.log(this) // checking output from here
        this.fName = fName
        this.lName = lName
    }
}
const person = new Person()
console.log(person)

// once we created a class, we can created many object using the class
const person1 = new Person('Abba', 'Ali')
console.log(person1)

const person2 = new Person('Samuel', 'Pit')
console.log(person2)

// let us add more properties to the class
class Person{
    constructor(fName, lName, age, country, city){
        this.fName = fName
        this.lName = lName
        this. age = age
        this.country = country
        this.city = city
    }
}
const person = new Person('John', 'Drill', 21, 'Nigeria', 'Kano')
console.log(person)

// the constructor func properties may have a deafult value like other regular functions
class Person{
    constructor(
        fName = 'Adewale',
        lName = 'Lookman',
        age = 24,
        country = 'Nigeria',
        city = 'Kano'
    ){
        this.fName = fName
        this.lName = lName
        this. age = age
        this.country = country
        this.city = city
    }
}
const person = new Person()
console.log(person)
*/

/** class methods - the constructor inside a class is a built-in function which allows us to create a blueprint for the object
 *  in a class we can create class methods, methods are js functions inside the class 
class Person{
    constructor(fName, lName, age, country, city){
        this.fName = fName
        this.lName = lName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName(){
        const fullName = this.fName + ' ' + this.lName
        return fullName
    }
}
const person = new Person('Muhammad', 'Bashir', 27, 'Nigeria', 'Kano')
console.log(person.getFullName())
const person2 = new Person('Bilal', 'Asad', 24, 'Nigeria', 'Abuja')
console.log(person2.getFullName())


// properties with initial value - when we create a class for some properties we may have an initial value
class Person{
    constructor(fName, lName, age, country, city){
        this.fName = fName
        this.lName = lName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName(){
        const fullName = this.fName + ' ' + this.lName
        return fullName
    }

    // a method could be regular, getter or a setter
    // getter - the gettter method allows us to access value from the object. we use the keyword 'get' followed by a function
    // instead of accessing properties directly from the obeject, we use getter to get the value
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    
    // setter - the setter method allows us to modify the value of a certain properties
    // we use the keyword 'set' followed by a function
    set setScore(score){
        this.score += score
    }
    set setSkills(skill){
        this.skills.push(skill)
    }

    // adding a regular method called getPersonInfo
    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + `and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}`: ''
        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const person = new Person('Bilal', 'Asad', 28, 'Nigeria', 'Abuja')
const person2 = new Person('Binta', 'Ilyas', 24, 'Nigeria', 'Kano')
console.log(person.score)
console.log(person.skills)

// we don't need a parenthesis to call a getter/setter methods
// console.log(person.getScore)
// console.log(person.getSkills)

person.setScore = 1
person.setSkills = 'HTML'
person.setSkills = 'Python'
person.setSkills = 'JavaScript'

person2.setScore = 2
person2.setSkills = 'Planning'
person2.setSkills = 'Managing'
person2.setSkills = 'Organizing'
console.log(person.getScore)
console.log(person2.getScore)
console.log(person.getSkills)
console.log(person2.getSkills)
console.log(person.getPersonInfo())
*/

class Person{
    constructor(fName, lName, age, country, city){
        this.fName = fName
        this.lName = lName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName(){
        const fullName = this.fName + ' ' + this.lName
        return fullName
    }

    // a method could be regular, getter or a setter
    // getter - the gettter method allows us to access value from the object. we use the keyword 'get' followed by a function
    // instead of accessing properties directly from the obeject, we use getter to get the value
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    
    // setter - the setter method allows us to modify the value of a certain properties
    // we use the keyword 'set' followed by a function
    set setScore(score){
        this.score += score
    }
    set setSkills(skill){
        this.skills.push(skill)
    }

    // adding a regular method called getPersonInfo
    getPersonInfo(){
        let fullName = this.getFullName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + `and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}`: ''
        let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }

    /**static method - defines a static method for a class.
     * static methods are not called on instance of the class, instead they are called on the class itself
     * these are often utility func, such as func to create or clone object
     * an example of static method is Date.now(), the now() method is called directly from the class */

    static showDateTime(){
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()

        if(hours < 10){
            hours = '0' + hours
        }
        if(minutes < 10){
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }

    static favoriteSkills(){
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
}
console.log(Person.favoriteSkills())
console.log(Person.showDateTime())