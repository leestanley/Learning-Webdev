import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic: 'vue'
        };

    };

    handleUsernamechange = (event) => {
        this.setState({username: event.target.value})
    }
    handleCommentschange = (event) => {
        this.setState({comments: event.target.value})
    }
    handleOptionchange = (event) => {
        this.setState({topic: event.target.value})
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.username} ${this.state.topic}`)
        event.preventDefault()
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Username
                    </label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernamechange}/>
                </div>
                <div>
                    <label>
                        Comments
                    </label>
                    <textarea type="text" value={this.state.comments} onChange={this.handleCommentschange}></textarea>
                </div>
                <div>
                    <label>
                        Topic
                    </label>
                    <select value={this.state.topic} onChange={this.handleOptionchange}>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        );
    }
}
 
export default Forms;