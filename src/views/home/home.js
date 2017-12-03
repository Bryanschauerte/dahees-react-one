import React, { Component } from 'react';
import Dogs from './subViews/dogs';
import Monkeys from './subViews/monkeys';
import './home.css';

// in JS 'class' is a function that creates an OBJECT

class Home extends Component {

// constructor is a method on ALL classes (even if not written down) that starts
// the constructor starts the object with defaults


    constructor(){
        // 'super' is needed in react only... It just lets this class 'touch' other classes

        super();
        // making an array to hold what view we have

        // 'this' says that 'views' belongs to this component (home.js - Home)

// All react component using 'Component' will have state
        this.state = {
            views:['dogs', 'monkeys']
        };

        //dont worry too much about this.. adv topic explaination later
        // Lots of poeple dont understand it, but just keep in mind that you need
        // to do this if you want to use it in the render function
        this.changeView = this.changeView.bind(this);

    }

    // we will use this function to change what component is showing
    changeView(){
        let viewsArray = this.state.views;
        // shift takes off the first element and we assign it to the itemHolder
        let itemHolder = viewsArray.shift();
        // We dont want to loose it, so we put it back on the END of the array.
        viewsArray.push(itemHolder)

        // we then change the 'views' to viewsArray.
        // setState is reacts way of changing the state ... and that component will update
        this.setState({views: viewsArray})
    };

    showView(aViewString){

        if(aViewString === 'monkeys'){
            return (<Monkeys changeViewMethod={this.changeView}></Monkeys>);
        } else {
            return (<Dogs changeViewMethod={this.changeView}></Dogs>);
        }
    }



    //render is the function from react that makes the compenet viewable (REQUIRED)
    //  ALL renders must return ONE element ..
    // example = return (<someElement> ..lots of crap or a little of crap</someElement>)

    // in ours we will return the views[0] view with an 'if' statement
    render(){
        return (
            <div>
                <div className="btn-container">
                    <h3 className="btns-title">
                        Button to change the View:
                    </h3>
                    <button onClick={this.changeView}>Change</button>
                </div>
                {/* in react we need '{}'. this tell react that it needs to do work to figure out the value */}
                {/* we are returning what showView returns...  */}
                {this.showView(this.state.views[0])}
            </div>
        );
    }
}

export default Home;
