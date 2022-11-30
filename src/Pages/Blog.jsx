import React from 'react';

const Blog = () => {
    return (
        <>
        <section className="">
        <div className="text-center text-5xl font-bold py-10">Blog</div>
  
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What are the different ways to manage a state in a React application?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Local (UI) state – Local state is data we manage in one or another component. Global (UI) state – Global state is data we manage across multiple components. Server state – Data that comes from an external server that must be integrated with our UI state. URL state – Data that exists on our URLs, including the pathname and query parameters.
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                How does prototypical inheritance work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                he Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is a unit test? Why should we write unit tests?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                React vs. Angular vs. Vue?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                </p>
              </details>
            </div>
          </div>
        </section>
      </>
    );
};

export default Blog;