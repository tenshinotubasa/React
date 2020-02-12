import React, { Component } from 'react';

class XiaoJieJieItem extends Component {
    constructor(props){
        super(props);
        /// this绑定，比使用时绑定更利于后期性能优化
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>{this.props.contents}</li>
         );
    }

    handleClick(){
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
 
export default XiaoJieJieItem;