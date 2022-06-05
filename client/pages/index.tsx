import React from "react";

const Home: React.FunctionComponent = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <button
                onClick={() => {
                    alert("Hello World");
                }}
            >
                Click
            </button>
        </div>
    );
};

export default Home;
