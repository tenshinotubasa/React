import React, { Component, Fragment } from "react";
import './style.css'
import XiaoJieJieItem from './XiaoJieJieItem'
import Axios from "axios";
import Boss from './Boos'
import { CSSTransition, TransitionGroup } from "react-transition-group";
 
class XiaoJieJie extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputValue: "",
        list: ["基础按摩", "精油推背"]
        };
    }

    componentWillMount(){
        console.log('component will mount');        
    }

    componentDidMount(){
        console.log('component mounted')
        Axios.get('http://rap2api.taobao.org/app/mock/244302/01')
        .then((res)=>{let data = res.data; console.log('axios 获取数据成功', data.data)})
        .catch((error)=>{console.log('axios 获取数据失败')});
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    render() {
        console.log('挂载中')
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
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                        return (
                                /* {向子组件传值} */
                                <CSSTransition
                                    timeout={2000}
                                    classNames='boss-text'
                                    unmountOnExit
                                >
                                    <XiaoJieJieItem 
                                        // avName="ABC" 可在子组件中设置默认值
                                        key={index+item}
                                        contents={item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                </CSSTransition>);
                        })
                    }
                </TransitionGroup>
                             
            </ul>
            <Boss />
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
