import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";

class ToDos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ))
    };
}


export default ToDos;