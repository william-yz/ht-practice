import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDele = this.handleDele.bind(this);    
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      items:[],
      doneList:[],
      text:"",
      num1:0,
      num2:0
    };
  }

  handleChange(e){
    this.setState({
      text:e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    var newItem = {
      text:this.state.text,
    }
    this.setState((prevState) => ({
      items:prevState.items.concat(newItem),
      text:"",
    }));
    this.state.num1 ++
  }

  handleDelete(e){
    var id = e.target.getAttribute("data-id");
    var delelist = this.state.items;
    delelist.splice(id,1);
    this.setState({
      items:delelist,
    })
    this.state.num1 --
  }

  handleDele(e){
    var id = e.target.getAttribute("data-id");
    var delelist = this.state.doneList;
    delelist.splice(id,1);
    this.setState({
      doneList:delelist,
    })
    this.state.num2 --
  }

  handleClick(e){
    var id = e.target.getAttribute("data-id");
    var toitems = this.state.items;
    var item = toitems[id];
    var donelist = [];
    donelist.unshift(item);
    toitems.splice(id,1);    
    this.setState({
      items:toitems,
      doneList:donelist,
    })
    this.state.num1 --;
    this.state.num2 ++;
  }

  render() {
    return (
      <div className="App">
        <form action="" id="form" onSubmit = {this.handleSubmit} >
          <lable for="title">ToDoList:  </lable>  
          <input type="text" name="title" placeholder="write text" required="required"
            onChange={this.handleChange}
            value={this.state.text}
           />
          <button>add item</button>
        </form>
        <ToDoList {...this.state} handleDelete={this.handleDelete} 
        handleClick={this.handleClick}/>
        <DoneList {...this.state} handleDele={this.handleDele} />
      </div>
    );
  }
}

class ToDoList extends Component{
  render(){
    console.log(this.props.items)
    return (
      <div className = "todo">
        <h3>正在进行
          <span>{this.props.num1}</span>
        </h3>

        <ul id = 'todolist' >
          {
            this.props.items.map((item,id) => (
              <li key={id}>
                <input className="choose1" type="checkbox" data-id={id} 
                onClick={this.props.handleClick} />
                <p>{item.text}</p>
                <button data-id={id} onClick={this.props.handleDelete} >delete</button>
              </li>              
            ))
          }
        </ul>

      </div>
    )
  }
}

class DoneList extends Component{

  render(){
    console.log(this.props.doneList)
    return (
      <div className = "done">
        <h3>已经完成
          <span>{this.props.num2}</span>
        </h3>
        <ul id = 'donelist' >
          {
            this.props.doneList.map((item,id) => (
              <li key={id}>
                <input type="checkbox" />
                <p>{item.text}</p>
                <button data-id={id} onClick={this.props.handleDele} >delete</button>
              </li>   
            ))        
          }
        </ul>

      </div>
    )
  }  
}

export default App;
