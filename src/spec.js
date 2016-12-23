import test from 'tape';
import { Todo, TodoNew, todoPrototype, TodoClass } from './index';

test( 'Todo', function ( test ) {
    let actual, expected, todo;

    todo = Todo ('New Todo');

    actual = todo.getTitle();

    // What the above line does is
    // 1. First checks if there is a property called getTitle in the todo object
    // 2. It does not find it so then it checks what is the prtotype of todo
    // 3. It finds that todo's prototype is todoPrototype and checks if property exists on todoPrototype
    // 4. Yes it exists so then it calls the function passing the context as todo. So 'this' refers to todo
    // null -> Object.prototype -> todoPrototype --> todo object
    expected = 'New Todo';
    test.equal( actual, expected, 'getTitle should return the title');

    test.end();
});

// Same test as above but with new keyword
test( 'TodoNew', function ( test ) {
    let actual, expected, todo;

    // What does new keyword do?
    // - creates a new object
    // - binds function to new object
    // - return the new object
    // - Notice that the TodoNew function is the same as the Todo function except
    //   that we are not using Object.create ( todoPrototype ) or the return todo
    //  and we explicitly set the prototype of TodoNew to todoPrototype

    todo = new TodoNew( 'New Todo');

    actual = todo.getTitle();

    expected = 'New Todo';
    test.equal( actual, expected, 'getTitle should return the title');

    test.end();
});

// To do the same thing without using the new keyboard

test( 'TodoNewLess', function ( test ) {
    let actual, expected, todo;

    todo = Object.create( todoPrototype );
    TodoNew.call( todo, 'Newless Todo');

    actual = todo.getTitle();

    expected = 'Newless Todo';
    test.equal( actual, expected, 'getTitle should return the title');

    test.end();
});


// To do the same thing using ES6

test( 'TodoClass', function ( test ) {
    let actual, expected, todo;

    todo =  new TodoClass( 'First Todo');

    actual = todo.getTitle();
    expected = 'First Todo';
    test.equal( actual, expected, 'getTitle should return the title');

    test.end();
});
