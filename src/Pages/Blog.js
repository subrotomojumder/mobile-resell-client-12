import React from 'react';

const Blog = () => {
    return (
        <div className='mx-8 lg:mx-20 mb-10'>
            <h2 className='text-center mt-6 text-2xl text-cyan-600'>Question and Answer</h2>
            <div>
                <h5 className='text-lg font-semibold mt-4'>Q.1. What are the different ways to manage a state in a React application?</h5>
                <blog className='ml-3'><span className='font-bold text-blue-400'>Ans: </span> There are four main types of state need to properly manage in React apps:
                    <br />
                    <p className='ml-7 mt-2'><span className='font-semibold'>1. Local state: </span>Local state is data we manage in one or another component. Local state
                        is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values
                        for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. </p>
                    <p className='ml-7 mt-2'><span className='font-semibold'>2. Global state: </span> S Global state is data we manage across multiple components. Global state i
                        necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user
                        state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
                    <p className='ml-7 mt-2'><span className='font-semibold'>3. Server state: </span>
                        Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage
                        alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from
                        an external server, including loading and error state. SWR and React Query that make managing server state much easier.
                    </p>
                    <p className='ml-7 mt-2'><span className='font-semibold'>4. URL state: </span>
                        Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an
                        important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without
                        being able to fetch a post  based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could
                        identify, but these are the major categories worth focusing on for most applications you build.
                    </p>
                </blog>
            </div>
            <div>
                <h5 className='text-lg font-semibold mt-4'>Q.2. How does prototypical inheritance work?</h5>
                <blog className='ml-3'><span className='font-bold text-blue-400'>Ans: </span>
                    <p className='ml-7'>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature
                        in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                        Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language,
                        it is being set using.</p>
                </blog>
            </div>
            <div>
                <h5 className='text-lg font-semibold mt-4'>Q.3. What is a unit test? Why should we write unit tests?</h5>
                <blog className='ml-3'><span className='font-bold text-blue-400'>Ans: </span>
                    <p className='ml-7'>Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input.
                        For React components, this could mean checking that the component renders correctly for the specified props. In other words, writing unit tests means that we write code that
                        verifies that our code works as expected. We'll go over the other goals of unit testing later on.   Testing software is as important as developing it, since, testing helps find out whether the software meets the actual
                        requirements or not. A thoroughly tested software product ensures dependability, security, and high performance, which leads to time-saving, customer satisfaction,
                        and cost-effectiveness.
                    </p>
                    <ul className='ml-7'>
                        <p className='font-semibold mt-4'>writing an actual unit test,  general structure of a test block:</p>
                        <li>1. A test is usually written in a test block.</li>
                        <li>2. Inside the test block, the first thing we do is to render the component that we want to test.</li>
                        <li>3. Select the elements that we want to interact with</li>
                        <li>4. Assert that the results are as expected.</li>
                        <li>5. Interact with those elements</li>
                    </ul>
                </blog>
            </div>
            <div>
                <h5 className='text-lg font-semibold mt-4'>Q.4. React vs. Angular vs. Vue?</h5>
                <blog className='ml-3'><span className='font-bold text-blue-400'>Ans: </span>
                    <p className='ml-7 mt-2'><span className='font-bold'> Angular : </span>
                        Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of
                        TypeScript libraries that you import into your applications. The architecture of an Angular application relies on certain fundamental concepts. The basic building blocks of the Angular framework are
                        Angular components that are organized into NgModules. NgModules collect related code into functional sets; an Angular application is defined by a set of NgModules. An application always has at least
                        a root module that enables bootstrapping, and typically has many more feature modules. Components define views, which are sets of screen elements that Angular can choose among and modify according
                        to your program logic and data Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your
                        code modular, reusable, and efficient. Modules, components and services are classes that use decorators. These decorators mark their type and provide metadata that tells Angular how to use them. The metadata
                        for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.
                        The metadata for a service class provides the information Angular needs to make it available to components through dependency injection.
                    </p>
                    <p className='ml-7 mt-2'><span className='font-bold'> React : </span>
                        React makes it painless to create interactive UIs. Declarative views make your code more predictable and easier to debug. Build encapsulated components that manage their own state, then compose them to make complex UIs.
                        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. React can also render on the server using Node and power mobile apps using React Native.
                        React is a tool for building UI components. React’s primary role in an application is to handle the view layer of that application just like the V in a model-view-controller (MVC) pattern by providing the best and most efficient rendering
                        execution. Rather than dealing with the whole user interface as a single unit, React.js encourages developers to separate these complex UIs into individual reusable components that form the building blocks of the whole UI. In doing so,
                        the ReactJS framework combines the speed and efficiency of JavaScript with a more efficient method of manipulating the DOM to render web pages faster and create highly dynamic and responsive web applications.
                    </p>
                    <p className='ml-7 mt-2'><span className='font-bold'> Vue : </span>
                        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that
                        helps you efficiently develop user interfaces, be they simple or complex. Vue components can be authored in two different API styles: Options API and Composition API. Vue.js lets you extend HTML with HTML attributes called directives.
                        Vue.js directives offers functionality to HTML applications. Vue.js provides built-in directives and user defined directives
                    </p>
                </blog>
            </div>
        </div>
    );
};

export default Blog;