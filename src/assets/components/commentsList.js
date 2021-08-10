import React from 'react';
import CommentBlock from './commentBlock';

class CommentsList extends React.Component {

    constructor(props) {
        super(props);

    }
    
    
    

    render() {
        const items = this.props.users.map((user) => {
        //Правильно! Здесь должен быть указан ключ:
        return (
            <CommentBlock key={user.id} user={user}/>
            );
        });


        return (<div>{items}</div>)

        // return (
        //     <div>
        //         <div className="commentBlock">
        //             <div>
        //                 <UserAvatar user={this.props.user}></UserAvatar>
        //                 <UserName user={this.props.user}></UserName>
        //             </div>
                
        //             <div className="commentBlock-content">
        //                 <UserContent user={this.props.user}></UserContent>
        //             </div>
                
        //         </div>
        //         <LikeButton></LikeButton>
        //     </div>
        //     )

    }

}

export default CommentsList;