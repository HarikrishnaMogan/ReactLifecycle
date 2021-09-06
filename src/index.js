import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Test extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      value:true,
    }
  }
  render()
  {
    return(
      <>
      <button onClick={()=>{this.setState({value:!this.state.value})}}>Hide/Show</button>
     {this.state.value ?<App />:<></> }
      </>
    )
  }
}

ReactDOM.render(<Test />,document.querySelector("#root"));