import React from 'react';
import './AddFriend.styles.css'
import { useFriends } from '../friendsProvider';
import sortIt from '../Utilities/sort';

function AddSearchFriend({ add }) {
        const { searchField, setFilteredFriends, setSearchField, setFriends, friends, setSearch } = useFriends();

        const [name, setName] = React.useState("")

        const addFriend = friend => {
                setFriends(sortIt([...friends, { name: friend, favorite: false }]))
        }

        const handleSubmit = e => {
                if (name.trimEnd().length !== 0) {
                        addFriend(name.trimEnd())
                }
        }

        const handleChange = (e) => {
                let val = e.target.value;
                //Allow only characters in input
                if (val.length !== 0) {
                        setName(val.replace(/[^A-Za-z ]/ig, '').trimStart())
                }
        }

        const searchFriendChange = (e) => {
                let val = e.target.value;
                if (val.replace(/[^A-Za-z ]/ig, '').trimStart().length !== 0) {
                        setSearch(true)
                        setSearchField(val.replace(/[^A-Za-z ]/ig, '').trimStart())
                } else {
                        setSearch(false)
                        setSearchField(val.replace(/[^A-Za-z ]/ig, '').trimStart())
                }
        }

        React.useEffect(() => {
                const filteredFriends = friends.filter(friend => {
                        return friend.name.toLowerCase().includes(searchField.toLowerCase())
                })
                setFilteredFriends(sortIt(filteredFriends))
        }, [friends, searchField, setFilteredFriends])


        const handleEnterPress = (e) => {
                if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSubmit();
                        setName("")
                }
        }

        return (
                <div className="addfriend">
                        <form >
                                <div>
                                        <input autoComplete="off" placeholder="Add a friend" id="nameInput" maxLength="25" type="text" onChange={handleChange} onKeyPress={handleEnterPress} value={name} />
                                        <br></br>
                                </div>
                        </form>
                        <form>
                                <div>
                                        <input autoComplete="off" placeholder="Search Friend" id="nameInput" type="text" onChange={searchFriendChange} value={searchField} />
                                        <br></br>
                                </div>
                        </form>
                </div>
        )
}



export default AddSearchFriend;
