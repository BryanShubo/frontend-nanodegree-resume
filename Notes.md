

###Data Types

#####Truthy / Falsy
```
Truthy: true / non-zero numbers / "string" / objects/ arrays/ functions

Falsy: false / 0 / "" / undefined / null / NaN

*undefined: that a variable doesn't exist and the interpreter doesn't know what you're referring to.
*if you try to use a var that hasn't been defined, you get a ReferenceError.

var a;
a; // will result in undefined

b; // will result in a ReferenceError because b hasn't been declared yet.

*NaN, or Not a Number, is a value that turns up when we ask Javascript to do certain impossible things in 
arithmetic like divide zero by zero.
```


#####Arrays

```
var skills=["HTML", "CSS", "JS"];

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

var bio={
    "name":"James",
    "age":32,
    "skills": skills
};
```

#####Objects
```
Though JavaScript has no classes, you can mimic many of the characteristics with its functions. You'll 
learn more about 
functions in Lesson 3 so consider this a bit of a preview.

function Car() {}
/*
var Car = function() {}
*/
var car1 = new Car();
The new keyword allows us to create a new instance of an Object. Remember that functions are objects. 
In the code above, 
you can think of the function Car as a JavaScript version of a Python class definition.
```

#####Dot and Bracket Notation
```
var workExperience={
    "CompanyA": 2000,
    "CompanyB": 2010,
    "CompanyC": 2015
};

workExperience.CompanyA is same as workExperience["CompanyA"]
```

##### What is JSON and why is JSON linting important.
     
What is JSON?
```
JavaScript Object Notation. JSON is a popular and simple format for storing and transferring nested 
or hierarchal data. 
It's so popular that most other programming languages have libraries capable of parsing and writing 
JSON (like Python's 
JSON library). Internet GET and POST requests frequently pass data in JSON format. JSON allows for 
objects (or data of 
other types) to be easily encapsulated within other objects. See the MDN or JSON.org for more details.
```
This is a fantastic deep dive from Jason Lengstorf about JSON and its ubiquitous use in the form of 
AJAX requests.

Why should I lint my JSON?
```
With a mix of nested curly braces, square brackets and commas, it's easy to make mistakes with JSON. 
And mistakes mean 
bugs. Seriously, I mess up JSONs all the time. You might even be able to spot a bug in one of my JSONs 
in a video in 
this course...

If you're generating JSON by hand, you should copy and paste your code into a JSON linter like 
jsonlint.com to quickly 
and easily find syntax errors. A linter is a piece of software that analyzes code for syntax errors. 
Some text editors, 
like Sublime Text, will automatically lint (or highlight) most syntax errors. But a JSON linter won't 
miss any syntax 
errors and you can rest assured that your JSONs will be properly formatted.
```

#####Difference: Dot and Bracket Notation
```
Instructor Notes

work contains an array of jobs. Each job object in jobs should contain an employer, title, location, 
dates worked 
and description.

projects contains an array of projects. Each project object in projects should contain a title, 
dates worked, 
description, and an images array with URL strings for project images.

bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object 
should contain 
(but doesn't have to) a mobile number, email address, github username, twitter handle and location.

education contains an array of schools. Each school object in schools contains a name, location, 
degree, majors array, 
dates attended and a url for the school's website. education also contains an onlineCourses array. 
Each onlineCourse 
object in onlineCourses should contain a title, school, dates attended and a url for the course.


Solution Summary:

Bracket notation always works. Dot notation requires properties that begin with a letter and do not include special characters.

Let's go through these one-by-one.

property

dot notation: true

bracket notation: true

This one is normal. Either syntax is fine.

"property1"

dot notation: true

bracket notation: true

A number attached to the end of a property is acceptable for dot and bracket notation.

"property-2"

dot notation: false

bracket notation: true

Some special characters like the - are not acceptable with dot notation but will still work with bracket notation.

"property 3"

dot notation: false

bracket notation: true

Spaces are generally bad form in programming. Don't use them except within strings. But you can still access a property name with a space using bracket notation.

"property$"

dot notation: true

bracket notation: true

Surprisingly, you actually can use $ within property names and still access them with dot notation.

" property"

dot notation: false

bracket notation: true

In dot notation, the space actually gets ignored, so you are accessing "property" instead. But bracket notation still works.

"property()"

dot notation: false

bracket notation: true

Without quotes, property() is a function call. This is just plain bad. While you can access a property like this one with bracket notation, there's no reason you should ever include () within an object property.

"property[]"

dot notation: false

bracket notation: true

Like the last one, this is bad form too. [] already have a specific purpose in JavaScript and should never be used within a property.

"8property"

dot notation: false

bracket notation: true

Dot notation fails to work if the property starts with a number. This is also bad form. Properties should never start with numbers.

```

#####What is the DOM?
```
This course isn't about HTML and CSS but they keep showing up. Why is that? HTML, CSS and JavaScript 
are the three components that make almost every website. As part of the process of building websites, 
browsers convert all of the HTML they receive into a JavaScript object called the Document Object Model (DOM).

In fact, from the console, you can examine the DOM for any website (including this one!). 
By examining the DOM,
you can learn pretty much everything about a website.

Your Challenge

For this challenge, I want you to find out the height of the classroom window (in pixels).

To do so, you'll first need to open the console. Got it open? Select the classroom window. Try 
typing document.getElementsByClassName("reading-area")[0] and press enter.

See the HTML that comes up? That's the HTML that makes up the classroom. It's actually a JavaScript 
object called an Element with properties you can access.
```


Solution:

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
There are a few ways to remove < and > from code. The simplest is simply replacing them with their character entity references (&lt; and &gt;).

To do so, we can use string.replace(old, new). Note, however, that if you pass in a string as old, string.replace(old, new) will only replace the first instance of the old string.

You must pass in a regular expression as old to replace every instance of old in the string.

In the example above, we passed /</g and />/g as old into string.replace(old, new), which are regular expressions that grab all instances of < and >.

Alternatively, you could pass an HTML string into a function like encodeURIComponent(string) to remove instances of < and >. But it isn't intended for situations like this, possibly leading to unexpected consequences.

Special thanks to Michael Händel for correcting my inaccurate solution!
