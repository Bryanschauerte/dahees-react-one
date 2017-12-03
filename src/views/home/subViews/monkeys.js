import React, { Component } from 'react';
import './subViewsStyle.css';

class Monkeys extends Component {
    constructor(){
        super();
        this.state ={
            inputStuff:''
        };
        this.updateInputValue =this.updateInputValue.bind(this);
    }

    updateInputValue(evt){

        this.setState({
            inputStuff: evt.target.value
        });
    }


    render(){
        return(<div className="container">
            <div>
                <h1>{this.state.inputStuff}</h1>
                <input value={this.state.inputValue} onChange={(event)=>this.updateInputValue(event)}/>
            </div>
            monkeys
        </div>);
    }
}

// for Dahee to to do...

// 1- add a list (array) of images of monkeys to state call it 'monkeyLinkList'.
// 2 - add an monkeyIndex key to state, add property of 0 to it.

// 3 - create a funtion to change the index forward 1. MAKE SURE ITS NOT A
//     number bigger than the array.length

// 4 - create a funtion to change the index back 1. MAKE SURE ITS NOT A
//     number smaller than 0


// 5 - Show images of monkeys.

// 6 -
// add a button or element to change the image forward using your function
// add a button or element to change the image back using your function

// 7 - add a label to the input called 'new link'
// 8 - add a button next to the the input that adds that link to the state's monkeyLinkList
//  It will also need to change state.inputStuff to ''

// 9 - Make it pretty!

export default Monkeys;
