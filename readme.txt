1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById selects an html element via its id
getElementsByClassName selects an html element via its classname
querySelector only returns the first matching id/class
querySelector returns all the elements with the class name


2. How do you create and insert a new element into the DOM?

const newElement = document.createElement('div');
container.append(newElement)


3. What is Event Bubbling? And how does it work?

When an event happens on an element, it doesn't just stop there. It "bubbles" up the DOM tree


4. What is Event Delegation in JavaScript? Why is it useful?

It is adding a single event listener to a parent element instead of adding many individual listeners


5. What is the difference between preventDefault() and stopPropagation() methods?

stopPropagation(): Stops the event from bubbling up
preventDefault(): Stops the browser's default behavior like refreshing