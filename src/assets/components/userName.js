import React from 'react';

class UserName extends React.Component {

    render() {
        return (
            <p className="userName">{this.props.user.userName}</p>
            )
    }
}

export default UserName;