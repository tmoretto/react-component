import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning</h4>
                Are you sure??
            </ApprovalCard>
    
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentText="Nice Work!" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    commentText="Good! Liked your post..." />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Jane" 
                    timeAgo="Yesterday at 4:45PM" 
                    commentText="Keep it up bro!" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);