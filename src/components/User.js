import React, { Component } from 'react'
import './User.css'
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import UserData from './UserData'
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            display_data: false
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user.name !== this.props.user.name) {
            this.setState({
                display_data: false
            })
        }
    }
    getUserData = (event, data) => {
        setTimeout(() => {
            this.setState({
                data: data,
                display_data: true
            })
        }, 1500);
    }

    render() {
        let user_data = ''
        if (this.state.data && this.state.display_data) {
            user_data = <UserData data={this.state.data} />
        }
        return (
            <div className='user-profile'>
                <img className='user-img' src={'' + this.props.user.avatar_url} alt="" />
                <h3 className='user-name'>{this.props.user.name}</h3>
                <p className='user-bio'>{this.props.user.bio}</p>
                <div className="user-data">
                    <div className='user-following'
                        onClick={(event) => this.getUserData(event, `${this.props.user.url}/following`)} >
                        <b>{this.props.user.following}</b>
                        <p>Following</p>
                    </div>
                </div>
                {user_data}
            </div>
        )
    }
}

export default User