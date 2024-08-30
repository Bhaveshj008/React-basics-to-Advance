import React from "react";
import ReactDom from "react-dom/client";

const Random =()=> (
    <>
        <h2>Hellow Dear</h2>
        <h3>who are you</h3>
    </>
    
)

const Heading =()=>{
    return (
        <div>
            <h1>Functional component Rendered</h1>
            <p>this is a random text done by me </p>
            {/* {random()} */}
            <Random>bhaveshsdbsdf nvjn jfhb</Random>
        </div>
    );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Heading/>);
