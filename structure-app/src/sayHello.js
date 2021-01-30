import React from 'react';

function Hello() {
    const sayHello = () => {
        alert('Say Hello');
    };
    return (
        <div>
            <h2>This is hello component !!!</h2>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    );
}

export default Hello;