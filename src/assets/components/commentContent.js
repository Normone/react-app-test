import React from 'react';

class UserContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <p className="userContent">
                {this.props.user.message}
            </p>
            )
    }

}

export default UserContent;