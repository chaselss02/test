import React, { Component } from 'react';

import {observable, computed} from 'mobx';
import {observer,inject} from 'mobx-react';

const state = observable({
    count: 0
})
state.add = function() {
    this.count++;
    console.log(this.count);
}
state.less = function() {
    this.count--;
    console.log(this.count);
    
}

@observer 
class Text extends Component {
    add =()=>{
        state.add();
    }
    less = ()=>{
        state.less();
    }
    render() {
        console.log("4");
        return (
            <div>
                {state.count}
                <button onClick={this.add}>+</button>
                <div onClick={()=>{console.log("haha")}}>-</div>
            </div>
        )
    }
}

window.state = state;
export default Text;