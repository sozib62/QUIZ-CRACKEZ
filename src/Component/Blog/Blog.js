import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h1> 1. What is the purpose of react router ?</h1>
                <h3> Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</h3>
            </div>
            <br />
            <br />
            <div>
                <h1> 2. How dose context api works ?</h1>
                <h3> Ans :The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h3>
            </div>
            <br />
            <br />
            <div>
                <h1> 3. what is useref() in react ?</h1>
                <h3> Ans: Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.</h3>

            </div>
        </div >
    );
};

export default Blog;