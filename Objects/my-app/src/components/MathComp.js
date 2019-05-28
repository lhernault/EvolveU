import React, { Component } from 'react';
import math from './math';



class MathComp extends Component {
    constructor() {
        super()
        this.state = {
            input1: " ",
            input2: " ",
            outcome: " ",
        }

        // this.handleInputChange = this.handleInputChange;

    }

    // handleInputChange(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }



    sum = () => {
        let input1 = Number(document.getElementById('input1').value);
        let input2 = document.getElementById('input2').value;
        this.setState({ outcome: math.sum(input1, input2) });
        console.log("i am sum");
        // this.stateChange(outcome)
    }

    sub = () => {
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        this.setState({ outcome: math.sub(input1, input2) });
        console.log("i am sub");
        // let outcome = math.sub(input1, input2)
        // this.stateChange(outcome)

    }

    mul = () => {
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        this.setState({ outcome: math.mul(input1, input2) });
        console.log("i am mul");
        // let outcome = math.mul(input1, input2)
        // this.stateChange(outcome)
    }

    div = () => {
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        this.setState({ outcome: math.div(input1, input2) });
        console.log("i am div");
        // let outcome = math.div(input1, input2)
        // this.stateChange(outcome)
    }


    render() {

        return (

            <div >
			<div className= "calculator1"> </div>
			   <div className= "calculator">
		
			<div>
				<input className="inpCal" id="input1" ></input>
		        <input className="inpCal" id="input2" ></input>
      		</div>

	      	<div>
		      	<input type="Button" id= "sum" className="op" value=" + " onClick={this.sum}></input>
		        <input type="Button" id= "resta" className="op" value=" - " onClick={this.sub}></input>
		        <input type="Button" id= "multiply" className="op" value=" X " onClick={this.mul}></input>
		        <input type="Button" id= "division" className="op" value=" / " onClick={this.div}></input>
		        <p>{this.state.outcome}</p>
	      	</div>

      	
        </div>

	</div>


        );
    }


}




export default MathComp;