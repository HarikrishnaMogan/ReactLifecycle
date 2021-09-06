import React from "react";

class App extends React.Component{
    constructor(props){
        console.log("constructor");
        super(props);
        this.state={
            count:0,
        }
    }

    
  componentDidUpdate(prevprops,prevstate)
  {
      console.log("component Updated");
      console.log(prevstate.count,this.state.count);
  }


  componentWillUnmount()
  {
      console.log("Component Unmounted");
  }


    componentDidMount()
    {
        console.log("component mounted");
    }


    count = (v)=>{
       if(v==="inc")
       {
           this.setState({count:this.state.count+1})
       }
       else if(v==="dec"){

           this.setState({count:this.state.count-1})
       }
       else{
           this.setState({count:0});
       }
    }



    render()
    {
        console.log("render");
        return(
            <React.Fragment>
             <p>{this.state.count}</p>
             <button onClick={()=>{this.count("inc")}}>Incr</button>
             <button onClick={()=>{this.count("dec")}}>Dec</button>
             <button onClick={this.count}>Res</button>
             <button onClick={()=>this.forceUpdate()}>Force</button>
            </React.Fragment>
            
        )
    }
}
export default App;