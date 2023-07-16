import React, { useState } from 'react';
import Page1 from './components/Page1/Page1'
import Page3 from './components/Page3/Page3'

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const test = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div>
            <h1>Hello React with Virtual DOM</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <div>
                {
                    test.map( (value) => (
                        <Page1 />
                    ))
                }
            </div>

            <Page3 />


        </div>
    );
}

export default App;
