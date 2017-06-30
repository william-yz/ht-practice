import React from 'react'
import {connect} from 'react-redux'

let id = 0

class TodoList extends React.Component {
    state = {
        text:""
    }
    render = () => {
        console.log(this.props)
        const {add} = this.props
        return (
            <div>
                <Opertaion 
                    text={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})}
                    add={() => add(id ++ ,this.state.text)}
                />
                <List
                    title="Doing"
                    items={this.props.todoList.filter(todo => !todo.complated)}
                    handleClick={this.props.complate}
                    handleDelete={this.props.handleDelete} 
                    />
                <List
                    title="Done"
                    items={this.props.todoList.filter(todo => todo.complated)}
                    handleClick={this.props.complate}   
                    handleDelete={this.props.handleDelete}                 
                    />
            </div>
        )
    }
}

function Opertaion({text, onChange, add}) {
    return (
        <div>
            <input
                value={text}
                onChange={onChange}/>
            <button onClick={add}>Add</button>
        </div>
    )
}
function List({title, items, handleClick,handleDelete}) {
    return (
        <div className = "todo">
        <h3>{title} 
            <span>{items.length}</span>
        </h3>
        
        <ul id = 'todolist' >
          {
            items.map((item) => (
              <li key={item.id}>
                <input className="choose1" type="checkbox" checked={item.complated} 
            onChange={() => handleClick(item.id)} />
                <p>{item.text}</p>
                <button onClick={() => handleDelete(item.id)} >delete</button>
                </li>              
            ))
          }
        </ul>

      </div>
    )
}

function mapStateToProps(state){
    return {
        todoList: state.todoList
    }
}

function mapDispatchToProps(dispatch){
    return {
        add:(id,text) => dispatch({type:'ADD',id:id,text:text}),
        complate:(id) => dispatch({type:'COMPLATE',id:id}),
        handleDelete:(id) => dispatch({type:'DELETE',id:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)