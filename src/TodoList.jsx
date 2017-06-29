import React from 'react'

let id = 0

export default class TodoList extends React.Component {
    state = {
        todoList: [],
        text: ''
    }

    add = () => {
        this.setState({
            todoList: [...this.state.todoList, {
                complated: false,
                text: this.state.text,
                id: id++
            }],
            text: ''
        })
    }

    complate = (id) => {
        this.setState({
            todoList: this.state.todoList.map((todo) => {
                if (todo.id === id) {
                    return {...todo, complated: !todo.complated}
                }
                return todo
            }),
        })
    }

    handleDelete = (id,isComplate) => {
        console.log(id)
        var delelist = this.state.todoList;
        delelist.splice(id,1);
        this.setState({
            todoList: delelist
        })
        console.log(this.state.todoList)
    }
    render = () => {
        return (
            <div>
                <Opertaion 
                    text={this.state.text}
                    onChange={(e) => this.setState({text: e.target.value})}
                    add={this.add}
                />
                <List
                    title="Doing"
                    items={this.state.todoList.filter(todo => !todo.complated)}
                    handleClick={this.complate}
                    handleDelete={this.handleDelete} 
                    />
                <List
                    title="Done"
                    items={this.state.todoList.filter(todo => todo.complated)}
                    handleClick={this.complate}   
                    handleDelete={this.handleDelete}                 
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
            items.map((item,id) => (
              <li key={item.id}>
                <input className="choose1" type="checkbox" checked={item.complated} 
            onClick={() => handleClick(item.id)} />
                <p>{item.text}</p>
                <button onClick={() => handleDelete(id,item.complated)} >delete</button>
                </li>              
            ))
          }
        </ul>

      </div>
    )
}