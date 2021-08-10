
import React from 'react';
import LikeButton from './likeButton';
import UserAvatar from './userAvatar';
import UserContent from './commentContent';
import UserName from './userName';

class CommentBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    
    
    

    render() {
        return (
            <div>
                <div className="commentBlock">
                    <div>
                        <UserAvatar user={this.props.user}></UserAvatar>
                        <UserName user={this.props.user}></UserName>
                    </div>
                
                    <div className="commentBlock-content">
                        <UserContent user={this.props.user}></UserContent>
                    </div>
                
                </div>
                <LikeButton></LikeButton>
            </div>
            
            
            )
    }

}

export default CommentBlock;