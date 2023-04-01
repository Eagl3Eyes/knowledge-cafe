import React from 'react';

const Extra = () => {
    return (
        <div className='md:w-[70%] md:mx-auto'>
            <div className=''>
                <h3 className='text-5xl text-sky-400 font-bold pb-8'>Message Us</h3>
            </div>
            {/* Question 1 */}
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary">
                    Can you describe about Props vs State?
                </div>
            </div>
            {/* Question 1 Ans */}
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-primary">
                    Props are used to pass data from a parent component to child component. Props are immutable.
                </div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-primary">
                    On the other hand, State is used to manage data within the component itself. State is mutable.
                </div>
            </div>

            {/* Question 2 */}
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-secondary">
                    How does useState work?
                </div>
            </div>
            {/* Question 2 Ans */}
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-secondary">
                    useState is a Hook in React. This Hook enables the programmer to make functional components have a state.It has two components, a function to update the state and a value to get the current value of the state.
                </div>
            </div>

            {/* Question 3 */}
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-accent">
                    What are the Purpose of useEffect other than fetching data?
                </div>
            </div>
            {/* Question 3 Ans */}
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-accent">
                    Other than fetching data, useEffect is also used for managing the lifecycle of component when it is mounted or unmounted. Moreover, it is used for scheduling updates to the component state and finally it is used for optimizing performance.
                </div>
            </div>

            {/* Question 4 */}
            <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-warning">
                    How Does React work?
                </div>
            </div>
            {/* Question 4 Ans */}
            <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-warning">
                    React is a popular JavaScript library used for building user interfaces (UIs) in web applications. React works by allowing developers to create reusable UI components that can be used to build complex user interfaces.
                    <br /><br />
                    At its core, React uses a "virtual DOM" (Document Object Model) that allows it to efficiently update and render changes to the UI without having to re-render the entire page. This is accomplished through a process called "reconciliation", where React compares the current virtual DOM with the previous version and determines what changes need to be made. <br />
                    <br />
                    When a user interacts with a React component, such as clicking a button or filling out a form, React updates the virtual DOM to reflect the new state of the application. React then re-renders only the components that have been changed, rather than the entire page, resulting in a more efficient and performant UI. <br />
                    <br />
                    React also supports a concept called "props" (short for properties), which are essentially parameters that can be passed into a component to configure its behavior or appearance. This makes it easy to create reusable components that can be used in multiple parts of an application, without having to write custom code for each instance.
                </div>
            </div>
        </div>
    );
};

export default Extra;