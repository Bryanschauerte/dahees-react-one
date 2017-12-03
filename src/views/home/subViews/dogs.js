import React, { Component } from 'react';
import './subViewsStyle.css';

class Dogs extends Component {
    constructor(){
        super();
        this.state = {
            imageIndex:0,
            dogImageLinks:[
                "https://i.ytimg.com/vi/n4wtMqv_32k/maxresdefault.jpg",
                "http://ichef.bbci.co.uk/news/976/cpsprodpb/106FB/production/_95132376_gettyimages-651137746.jpg",
            "https://hdwallsource.com/img/2014/8/cute-dogs-wallpaper-14462-14912-hd-wallpapers.jpg"]
        };
        this.changeImageIndexForward = this.changeImageIndexForward.bind(this);
        this.changeImageIndexBack = this.changeImageIndexBack.bind(this);
    }
    changeImageIndexForward(){
        let indexToChangeTo = this.state.imageIndex + 1;
        if(indexToChangeTo > this.state.dogImageLinks.length- 1){
            indexToChangeTo = 0;
        }
        this.setState({imageIndex: indexToChangeTo})
    }

    changeImageIndexBack(){
        let indexToChangeTo = this.state.imageIndex - 1;
        if(indexToChangeTo < 0){
            indexToChangeTo = this.state.dogImageLinks.length - 1;
        }
        this.setState({imageIndex: indexToChangeTo})
    }

    render(){
        return(<div className="container dogs-view">
            <div className="dogs-nav-images">

                <h1 onClick={this.changeImageIndexBack}>Last</h1>
                <h1 onClick={this.changeImageIndexForward}>Next</h1>
            </div>
            <img src={this.state.dogImageLinks[this.state.imageIndex]}/>
        </div>);
    }

}

export default Dogs;
