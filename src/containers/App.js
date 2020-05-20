import React, {Component} from 'react';
import './App.css';
import Header from '../components/layout/Header'
import ToDos from '../components/todos/ToDos';
import AddToDo from "../components/io/AddToDo";
import {v4 as uuid } from 'uuid';

class App extends Component {
    state = {
        todos: [
            {
                id: uuid,
                title: "Take out the trash",
                completed: false
            },
            {
                id: uuid,
                title: "Do dinner",
                completed: true
            },
            {
                id: uuid,
                title: "Finish CSS course",
                completed: false
            }
        ]
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
            return todo;
            })
        })
    }

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)] });
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuid,
            title,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    render() {

        return (
            <div className="App">
                <div className='container'>
                    <Header/>
                    <AddToDo addTodo={this.addTodo}/>
                    <ToDos todos={this.state.todos} markComplete={this.toggleComplete} delTodo={this.delTodo}/>
                </div>
            </div>
        );
    }
}

export default App;
