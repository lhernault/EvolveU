import React, { Component } from 'react';
// import ReactDOM from "react-dom";

import logo from './logo.svg';
import './App.css';
import icon1 from './components/calculator.png';
import icon2 from './components/account.svg';
import icon3 from './components/community.png';
import icon4 from './components/node.png';
import icon5 from './components/list.png';
import icon6 from './components/home.png';

//import IconeOne from './components/IconOne';
import MathComp from './components/MathComp';
import AccountComp from './components/AccountComp';
import FifoLifoComp from './components/FifoLifoComp';
import AccountsComp from './components/AccountsComp';
import CommunityComp from './components/CommunityComp';
import LinkedListComp from './components/LinkedListComp';
// import NodeComp from './components/NodeComp';



class App extends Component {
    constructor() {
        super()
        this.state = {
            evento: "React-App",
            show: null,
        }

        this.onIcon = this.onIcon.bind(this);

    }


    // class ShowAlert extends Component {
    //   showAlert() {
    //     alert("Im an alert");
    //   }

    onIcon = (e) => {
        //console.log("here")
         if (e.target.id === "home-icon") {
            //console.log(e);
            this.setState({
                evento: "Home",
                show: null,
                //show: <icon2 />
            }) 

       } else if (e.target.id === "calculator-icon") {
            //console.log(e);
            this.setState({
                evento: "Calculator",
                show: <MathComp/>,
                //show: <icon2 />
            })

        } else if (e.target.id === "account-icon") {
            //console.log(e);
            this.setState({
                evento: "Account",
                show:<AccountsComp/>
                // show: <icon2 />
            })

        } else if (e.target.id === "community-icon") {
            //console.log(e);
            this.setState({
                evento: "Community",
                show: <CommunityComp/>,
                // show: <icone3 />
            })

        } else if (e.target.id === "node-icon") {
            //console.log(e);
            this.setState({
                evento: "List",
                show: <LinkedListComp/>,
                // show: <icone3 />
            })

        } else if (e.target.id === "list-icon") {
            console.log(e);
            this.setState({
                evento: "Fifo / Lifo",
                show: <FifoLifoComp/>,
            })

        }
    }


  render() {
        //console.log("before render")
        return (
            <div className="App">
                <h1>{this.state.evento}</h1>
 
                  <button className="btn-icons" onClick={this.onIcon}><img  src ={icon6}  id="home-icon" className="home-logo" alt="icon6"/></button>
                  <button className="btn-icons" onClick={this.onIcon}><img  src ={icon1}  id="calculator-icon" className="calculator-logo" alt="icon1"/></button>
                  <button className="btn-icons" onClick={this.onIcon}><img  src ={icon2}  id="account-icon" className="account-logo" alt="icon2"/></button>
                  <button className="btn-icons" onClick={this.onIcon}><img  src ={icon3}  id="community-icon" className="community-logo" alt="icon3"/></button>
                  <button className="btn-icons" onClick={this.onIcon}><img  src ={icon4}  id="node-icon" className="node-logo" alt="icon4"/></button>
                  <button className="btn-icons" onClick={this.onIcon}><img  src ={icon5}  id="list-icon" className="list-logo" alt="icon5"/></button>
                 

                
            <div>
                <img src={logo} className="App-logo" alt="logo"/>
            </div> 

            <div className = "show">
                {this.state.show}                   
            </div>
               
               
            </div>

        );
    }
}

export default App;