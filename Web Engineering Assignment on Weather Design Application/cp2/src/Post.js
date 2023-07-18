import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://www.omdbapi.com/?s=${searchValue}&apikey=4a155d78`, this.state)
            .then(response => {
                console.log(response.data)
            })
    }



    render() {
        const { userId, title, body } = this.state
        return (
            <div style={{textAlign:'center'}}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User Id</label>
                        <input type='text' name='userId' value={userId} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type='text' name='title' value={title} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Body</label>
                        <input type='text' name='body' value={body} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Post