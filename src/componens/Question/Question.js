import React from 'react';
import './Question.css';


const Question = () => {
    return (
        <div className='question'>
            <h3>How react works</h3>
            <p>
                While constructing client-aspect apps, a group of Facebook builders found out that the DOM is slow (The Document Object Model (DOM) is an software programming interface (API) for HTML and XML files. It defines the logical shape of files and the manner a record is accessed and manipulated.). So, to make it faster, React implements a digital DOM that is essentially a DOM tree illustration in JavaScript. So whilst it wishes to study or write to the DOM, it'll use the digital illustration of it. Then the digital DOM will attempt to discover the maximum green manner to replace the browser’s DOM.
                Unlike browser DOM factors, React factors are undeniable gadgets and are reasonably-priced to create. React DOM looks after updating the DOM to suit the React factors. The cause for that is that JavaScript may be very rapid and it’s really well worth maintaining a DOM tree in it to hurry up its manipulation.
                Although React become conceived for use withinside the browser, due to its layout it could additionally be used withinside the server with Node.js.
            </p>
            <h3>How setstate works in react</h3>
            <p>
                As said previously, useState permits you to feature nation to characteristic components. Calling React.useState inner a characteristic element generates a unmarried piece of nation related to that element. Whereas the nation in a category is constantly an object, with Hooks, the nation may be any kind. Each piece of nation holds a unmarried value, which may be an object, an array, a boolean, or another kind you may imagine. So whilst have to you operate the useState Hook? It’s specifically beneficial for nearby element nation, however large initiatives may require extra nation control solutions.
            </p>
        </div>
    );
};

export default Question;