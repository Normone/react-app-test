import React from 'react';


class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {    
    if (this.state.liked) {
        return 'You liked this.'; 
    }

    // return e(
    //     'button',
    //     { onClick: () => this.setState({ liked: true }) },
    //     'Like'
    // );

        return (
            <button onClick={() => this.setState({liked: true})}>
            Нравится
            </button>
        );
        
    }
}



export default LikeButton;