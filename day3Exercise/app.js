import React from "react";
import ReactDom from "react-dom/client";
import logo from "./favicon.png";
const headerStyle ={
    backgroundColor: "black",
    color:"white",
    height:"60px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding: "10px 30px 10px 30px"
    
}
const logoStyle ={
    height:"50px"
}
const searchBarStyle={
    height:"25px",
    width:"500px",
    padding: "8px",
    borderRadius: "50px",
    fontSize: "20px",
}
const userStyle={
    fontSize:"30px"
}
const Header=()=>{
    return (<div style={headerStyle} className="header">
      <div className="logo" ><img src={logo} style={logoStyle}/></div> 
      <div className="searchBar"><input className="searchBar" style={searchBarStyle} placeholder="Search"/></div>
      <div className="user"><i className="fa-solid fa-user" style={userStyle}></i></div>
    </div>);
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Header/>);