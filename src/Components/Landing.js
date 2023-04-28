import { Component } from "react";

class Landing extends Component {
    constructor(props){
        super(props);
       return undefined;
    }
    render(){
        return(
            <div className="main_container">
            <div className="navbar">
             
              <h1 className="net" style={{marginLeft:"100px",marginTop:"50px"}}>NETFLIX</h1>
              <div style={{marginTop:"50px",marginRight:"100px"}}>
                <select style={{backgroundColor:"black",color:"white",width:"100px",height:"30px",border:"1px solid white",borderRadius:"5px",padding:"8px",boxShadow:"0 0 10px black"}}>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                <button style={{backgroundColor:"red",color:"white",width:"100px",height:"30px",border:"none",borderRadius:"5px"}}>Sign In</button>
              </div>
            </div>
            <div className="body_part">
             <h1 style={{fontSize:"50px"}}>Unlimited movies,TV</h1>
             <h1 style={{fontSize:"50px"}}>shows and more</h1>
             <p style={{fontSize:"20px"}}>Watch Anywhere. Cancel Anytime.</p>
             <p style={{fontSize:"20px"}}>Ready to watch? Enter your Email Id to create or Restart your membership. </p>
             <div >
                <input style={{backgroundColor:"black",color:"white",width:"200px",height:"30px",border:"1px solid white",borderRadius:"5px",padding:"8px"}} placeholder="Email Address"/>
                <button style={{marginLeft:"50px",backgroundColor:"red",color:"white",width:"200px",height:"40px",border:"none",borderRadius:"5px",padding:"8px",boxShadow:"0 0 10px black",fontSize:"large"}}>Get Started</button>
             </div>
            </div>
        </div>
        )
       
    }
}
export default Landing