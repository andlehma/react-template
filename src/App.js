import React, { useState } from "react";

function App(props) {
    const [greeting, setGreeting] = useState("Hello");

    return (
        <>
            <h1>{greeting} {props.name}!</h1>
        </>
    );
}

export default App;