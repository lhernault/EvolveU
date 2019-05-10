import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import icon1 from './components/bell.svg';
import icon2 from './components/music.svg';
import icon3 from './components/smile.svg';
import icon4 from './components/star.svg';

//import IconeOne from './components/IconOne';
import MathComp from './components/MathComp';
import AccountComp from './components/AccountComp';
import AccountsComp from './components/AccountsComp';



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
        if (e.target.id === "bell-icon") {
            //console.log(e);
            this.setState({
                evento: "You clicked the bell icon",
                show: <MathComp/>,
                //show: <icon2 />
            })

        } else if (e.target.id === "music-icon") {
            //console.log(e);
            this.setState({
                evento: "You clicked the music icon",
                show: <AccountComp/>,
                // show: <icon2 />
            })

        } else if (e.target.id === "smile-icon") {
            //console.log(e);
            this.setState({
                evento: "You clicked the smile icon",
                show: <AccountsComp/>,
                // show: <icone3 />
            })

        } else if (e.target.id === "star-icon") {
            //console.log(e);
            this.setState({
                evento: "You clicked the star icon",
                show: null
                // show: <icone3 />
            })

        }
    }

  render() {
        //console.log("before render")
        return (
            <div className="App">
                <h1>{this.state.evento}</h1>

                <div>
                  <img src={logo} className="App-logo" alt="logo"/>
                </div>  
                
                  <button className="btn-icons" onClick={this.onIcon}>
                  <img  src ={icon1}  id="bell-icon" className="bell-logo" alt="icon1"/>
                  </button>

                  <button className="btn-icons" onClick={this.onIcon}><img  src ={icon2}  id="music-icon" className="music-logo" alt="icon2"/></button>
                  <button className="btn-icons" onClick={this.onIcon}><img  src ={icon3}  id="smile-icon" className="smile-logo" alt="icon3"/></button>
                  <button className="btn-icons" onClick={this.onIcon}><img  src ={icon4}  id="star-icon" className="star-logo" alt="icon4"/></button>
                
                <div className = "show">
                    {this.state.show}
                   
                </div>
               
            </div>

        );
    }
}

export default App;