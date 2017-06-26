import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './AppAction';
import ToDoListInput from './ToDoListInput';
import SaveBox from './SaveBox';
import {save , get} from "../request.js";

class ToDoList extends Component {
  componentWillMount = () => {
    this.props.init();
  }

  render() {
    const saveBox = this.props.state.boxShow?<SaveBox hideBox = {this.props.hideBox}/>:'';
    return (
      <div className="ToDoList">
        <div>
          <label>ToDoList<input type="text" onKeyPress={(e)=>{
            if(e.key === 'Enter' && e.target.value !== ''){
              this.props.actions.handleKeyDown(e);
            }
          }} /></label>
        </div>
        <div>
          <p>正在进行</p>
          <ul>
            {this.props.state.allData.map((individual, index) => {
              if(!individual.state){
                return <ToDoListInput allData={individual.text} state={individual.state} key={index} changeList={() => {this.props.actions.changeList(index)}}/>
              }
            })}
          </ul>
        </div>
        <div>
          <p>已经完成</p>
          <ul>
            {this.props.state.allData.map((individual, index) => {
              if(individual.state){
                return <ToDoListInput allData={individual.text} state={individual.state} key={index} changeList={() => {this.props.actions.changeList(index)}}/>
              }
            })}
          </ul>
        </div>
        <div>
          <button onClick= { () => {this.props.saveFun(this.props.state.allData)}}>保存</button>
        </div>
        {saveBox}
      </div>
    );
  }
}


const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    init: () => dispatch({type: 'INIT_TODO_LIST'}),
    saveFun: (allData) => dispatch({type : "SAVE_LIST", payload: allData}),
    hideBox: () => {dispatch ({type:'HIDE_SAVE_BOX'})}
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);