import React from 'react';

class UserAvatar extends React.Component {

    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <img src={this.props.user.avatar}
                className="userAvatar"
                alt=""
            >
            </img>
            )
    }

}

export default UserAvatar;