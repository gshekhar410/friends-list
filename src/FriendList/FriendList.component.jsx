import React from 'react';
import FriendCard from '../FriendCard/FriendCard.component';
import './FriendList.styles.css';
import { useFriends } from '../friendsProvider';

function FriendList() {
        const { friends, search, getPaginatedData } = useFriends()

        const paginatedFriends = getPaginatedData(search)

        React.useEffect(() => {
                window.localStorage.setItem('friends', JSON.stringify(friends))
        }, [friends])

        console.log(paginatedFriends)
        return (
                <div className="frnlist">
                        {paginatedFriends.map((friend, key) => {
                                return (
                                        <FriendCard key={key} friend={friend} />
                                )
                        })}
                </div>
        )
}

export default FriendList;