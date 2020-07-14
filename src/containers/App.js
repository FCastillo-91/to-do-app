import React, {Component} from 'react';
import './App.css';
import Header from '../components/layout/Header'
import ToDos from '../components/todos/ToDos';
import AddToDo from "../components/io/AddToDo";
import axios from "axios";

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({todos: res.data}))
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
        axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`)
            .then(res => this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)]
            }));
    }

    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        })
            .then(res => this.setState({todos: [...this.state.todos, res.data]}))
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
