import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Contactus(props){
let {identifier} = useParams();
useEffect (()=>{
    console.log("useParams", identifier)
},[])
    return(

<h2>This is the ContactUs page</h2>
    );
}
export default Contactus;