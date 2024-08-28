import React from "react";
import ReactDOM from 'react-dom/client'
const heading1 =React.createElement('h1',{
    id:'heading1',
    key:'h1',
    style:{
        color: 'green'
    }
}, 'bhavesh');

const heading2 =React.createElement('h1',{
    id:'heading2',
    key:'h2',
}, 'jadhav');

const container = React.createElement('div', {
    id:'container',
    style:{color:"red",
        backgroundColor:"black",
        padding:20
    }
}, [heading1, heading2]) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container)