import React, { Component } from "react";

class usergreet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // this.state.isLoggedIn && <div>Welcome Piyush</div>

    return this.state.isLoggedIn ? (
        <div>Welcome Piyush</div>
    ) : (
        <div>Welcome Guest</div>
    )



    // let message;
    //   if(this.state.isLoggedIn){
    //     message =  <div>Welcome Piyush</div>
    // } else {
    //     message =  <div>Welcome Guest</div>
    // }
    // return(
    //     <div>
    //         {message}
    //     </div>
    // )


    // if(this.state.isLoggedIn){
    //     return <div>Welcome Piyush</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }
    // return (
    //     <div>
    //   <div>Welcome Piyush</div>
    //   <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default usergreet;
