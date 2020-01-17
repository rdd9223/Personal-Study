import React from 'react';
import UserProfile from './UserProfile';

class UserProfileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { id: 1, name: 'YeongWoo', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineer' },
                { id: 2, name: '민환', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Actor' },
                { id: 3, name: '수영', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'CEO, Amazon' },
                { id: 4, name: '연중', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'CEO, Apple' },
                { id: 5, name: '건욱', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Actor' },
                { id: 6, name: '성민', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Actress' }
            ]
        }
    }
    
    render() {
        const {users} = this.state;

        return (
            <div>
                {users.map((user) => {
                    return (
                        <UserProfile
                            user={user} />
                    )
                })}
            </div>
        )
    }
}

export default UserProfileList;