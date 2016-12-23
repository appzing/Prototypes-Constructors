// TODO

// prototypes (delegate)
// constructor functions
// new keyword
// class keyword es2015 sugar

//What is a prototypes
// Its the first version of something - A prototype is just an object
// JS allows you to do this

const object = {
    //
};

// In other languages like Jave you say

class KindOfObject {
    //
}

// What we are doing is creating a special kind of factory or constructor for the insatanciation of objects like below

const k  = new KindOfObject()// gives access for the above object.

// JS believes you do not need to create a class to create an object
// You do not need constructors to create an object

// So prototype is just an object

const prototype = {
    title: 'New Todo',

    getTitle () {
        return this.title; // 'this' here refers to the current object
    }
}

// So

prototype.getTitle() // returns New Todo

// There are 3 ways of using prototype

// 1.
// You can write the above also as
// const prototype = {
//     title: 'New Todo'
// }
//
// prototype.getTitle = function () {
//     return this.title;
// }
// const title = prototype.getTitle();

// console.log(title)  // Prints 'New Todo' in console

// 2.

// function getTitle () {
//     return this.title;
// }

// prototype.getTitle = getTitle;

// const title = prototype.getTitle();

// console.log(title)  // Prints 'New Todo' in console

// 3.
// function getTitle () {
//     return this.title;
// }

// const prototype = {
//     title: 'New Todo',
//     getTitle: getTitle
// }

// const title = prototype.getTitle();

// console.log(title)  // Prints 'New Todo' in console



// So this is one object - IT IS NOT AN INSTANCE OF AN OBJECT - You cannot create a new object from this

export const todoPrototype = {
    complete: false,

    getTitle () {
        return this.title;
    },

    setTitle ( newTitle ) {
        this.title = newTile;
    },
}

// To create a new object from this you can do this

// const todo1 = Object.assign({}, todoPrototype);

// This copies everything from todoPrototype and assigns it to the variable todo1
// So you can say

// todo1.setTitle('New Todo');

// What you can also do is

export const Todo = function (title) {
    const todo = Object.assign({}, todoPrototype, {title});
    // const todo = Object.assign(Object.create(todoPrototype), {title});

    todo.setTitle = title;

    return todo;
}



// Use new keyword in test

export const TodoNew  = function (title) {
    this.title = title;
}

TodoNew.prototype = todoPrototype;


// Using ES6 Class
export class TodoClass {
    constructor ( title ) {
        this.title = title;
        this.complete = false;
    }

    getTitle () {
        return this.title
    }

    setTitle ( newTitle) {
        this.title = newTitle;
    }
}
