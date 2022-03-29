import React, { useEffect } from "react";
import {Link, useLocation, useHistory } from "react-router-dom";


function Home(props){
    let id=100;
    let location= useLocation();
    let history = useHistory();
    useEffect(()=>{
        console.log(location.pathname)
    },[])
     const onClickBtn=()=>{
         if (location.pathname==='/HomePage'){
             history.push("/AboutPage")
         }
     }
    
    return(
        <div>
            <button onClick={()=>onClickBtn()}>Go to AboutPage</button>
        <nav style={{borderBottom:"1px solid blue", paddingBottom:"10px"}}>
            <Link to="/RootRouter">RootRouter</Link>
            <Link to={"/ContactUs/"+id}>ContactUs</Link>
            
    </nav> 
        

<h2>This is the Home page</h2>
</div>
    );
}
export default Home;