import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaoJieJieItem extends Component {
    constructor(props){
        super(props);
        /// this绑定，比使用时绑定更利于后期性能优化
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>{this.props.avName}为您服务-{this.props.contents}</li>
         );
    }

    handleClick(){
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

XiaoJieJieItem.propTypes={
    // 必须传值
    avName:PropTypes.string.isRequired,
    contents:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

XiaoJieJieItem.defaultProps={
    // 在此设置默认值
    avName:'BCD'
}
 
export default XiaoJieJieItem;