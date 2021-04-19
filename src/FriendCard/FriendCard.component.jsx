import React from 'react';
import './FriendCard.styles.css'
import { useFriends } from '../friendsProvider';

function FriendCard({ friend }) {
        const { friends, setFriends } = useFriends();

        const deleteFriend = (delFriend) => {
                setFriends(friends.filter(friend => {
                        return friend.name === delFriend ? false : true;
                }))
        }

        const setFavorite = (favFriend) => {
                console.log("setFavorite was called")
                const copy = friends;
                for (let friend of copy) {
                        if (friend['name'] === favFriend) {
                                friend['favorite'] = friend['favorite'] ? false : true;
                        }
                }
                setFriends([...copy])
        }

        return (
                <div className="frncrd">
                        <div className="name"><span>{friend.name}</span></div>
                        <div className="status">is your Friend</div>
                        <div className="fav" ><span className={friend.favorite ? "favSpan red" : "favSpan black"} onClick={() => setFavorite(friend.name)}>&hearts;</span></div>
                        <div className="del" ><span className="delSpan" onClick={() => deleteFriend(friend.name)}>&#10006;</span></div>
                </div>
        )
}

export default FriendCard;