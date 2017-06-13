import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TInput extends Component {
  render() {
    return (
      <li><input type="checkbox" onChange={this.props.clickFun} checked={this.props.state}/>{this.props.allData}</li>
    );
  }
}

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state={
      allData:[]
    }
  }
  handleKeyDown = (e) => {
    if(e.key==='Enter'&&e.target.value!==''){
      this.state.allData.push({text:e.target.value,state:false});
      this.setState({
        allData:this.state.allData
      })
    };
  }
  clickFun = (index) => (e) => {
    this.state.allData[index].state=!this.state.allData[index].state;
    this.setState({
      allData:this.state.allData
    })
  }
  render() {
    return (
      <div className="ToDoList">
        <div>
          <label>ToDoList<input type="text" className="TDInput" onKeyPress={this.handleKeyDown} /></label>
        </div>
        <div>
          <p>正在进行</p>
          <ul>
            {this.state.allData.map((individual, key) => {
              if(!individual.state){
                return <TInput allData={individual.text} state={individual.state} key={key} num={key} clickFun={this.clickFun(key)}/>
              }
            })}
          </ul>
        </div>
        <div>
          <p>已经完成</p>
          <ul>
            {this.state.allData.map((individual, key) => {
              if(individual.state){
                return <TInput allData={individual.text} state={individual.state} key={key} num={key} clickFun={this.clickFun}/>
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
};




export default ToDoList;
