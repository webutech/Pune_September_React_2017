import React, { Component } from 'react';
import { connect } from 'react-redux';
class UserDetail extends Component {
    render() {
        if(!this.props.user){
            return <h2>Select User.....</h2>
        }
        return (
            <div>
                <p>
                    First Name : {this.props.user.first} <br />
                    Last Name : {this.props.user.last} <br />
                    Age : {this.props.user.age} <br />
                    Description : {this.props.user.description}
                </p>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.ActiveUser
    }
}

export default connect(mapStateToProps)(UserDetail);