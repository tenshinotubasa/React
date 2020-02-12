import React, { Component, Fragment } from "react";
import './style.css'
import XiaoJieJieItem from './XiaoJieJieItem'
 
class XiaoJieJie extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputValue: "",
        list: ["基础按摩", "精油推背"]
        };
    }

    render() {
        return (
            // 注释
        <Fragment>
            {/* 注释需要用大括号*/}
            <div>
                <label htmlFor='123'>增加服务:</label>
                <input
                    id="123"
                    className="input"
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}

                    // input绑定
                    ref = {(input)=>{this.input = input}}
                >
                </input>
                <button onClick={this.onAddServ.bind(this)}>增加服务</button>
            </div>

            <ul ref={(ul)=>{this.ul=ul}}>
                {this.state.list.map((item, index) => {
                return (
                        /* {向子组件传值} */
                        <XiaoJieJieItem 
                            // avName="ABC" 可在子组件中设置默认值
                            key={index+item}
                            contents={item}
                            index={index}
                            deleteItem={this.deleteItem.bind(this)}
                        />
                );
            })}             
            </ul>
        </Fragment>
        );
    }

    inputChange(e) {
        // console.log(e.target.value);
        // this.state.inputValue = e.target.value;
        this.setState({
            // inputValue: e.target.value
            inputValue:this.input.value
        });
    }

    onAddServ() {

        /// setState是异步执行的
        this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ""
        }, ()=>{console.log(this.ul.querySelectorAll('li').length)});

        /// <这里的执行结果为setstate更新前的值，可在setState的回调中调用
        // console.log(this.ul.querySelectorAll('li').length)
    }

    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
        list: list
        });

        /// 错误操作
        // this.state.list.splice(index, 1);
        // this.setState({list:this.state.list})
    }
}

export default XiaoJieJie;
