import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ToDoListInput = ({clickFun, state, allData}) => {
  return (
    <li><input type="checkbox" onChange={clickFun} checked={state}/>{allData}</li>
  );
}

class ToDoList extends Component {
  state = {
    allData: []
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      this.setState({
        allData: [
          ...this.state.allData, {
          text: e.target.value,
          state: false
        }]
      })
    };
  }

  clickFun = (index) => (e) => {
    this.setState({
      allData: this.state.allData.map((data, dataIndex) => {
        if (dataIndex === index) {
          return {...data, state: !data.state};
        }
        return data;
      })
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
                return <ToDoListInput allData={individual.text} state={individual.state} key={key} clickFun={this.clickFun(key)}/>
              }
            })}
          </ul>
        </div>
        <div>
          <p>已经完成</p>
          <ul>
            {this.state.allData.map((individual, key) => {
              if(individual.state){
                return <ToDoListInput allData={individual.text} state={individual.state} key={key} clickFun={this.clickFun(key)}/>
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
};




export default ToDoList;
