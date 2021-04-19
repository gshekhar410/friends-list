import React, { createContext, useState, useContext } from 'react';
import mockData from './mock-data'
import sortIt from './Utilities/sort';
import debounced from './Utilities/debounce';

const FriendsContext = createContext()
export const useFriends = () => useContext(FriendsContext)

export default function FriendsProvider({ children }) {

        //lazy state initialization for localStorage usage optimization after first render
        const [friends, setFriends] = useState(
                () => JSON.parse(window.localStorage.getItem('friends')) || sortIt(mockData)
        )
        const [filteredFriends, setFilteredFriends] = useState(friends);
        const [currPage, setCurrPage] = useState(0);
        const [pages, setPageCount] = useState(Math.ceil(friends.length / 4))
        const [searchField, setSearchField] = React.useState("");
        const [search, setSearch] = useState(false);
        const [sortFavorite, setSortFavorite] = useState(false);

        const getPaginatedData = () => {
                if (!search) {
                        const startIndex = currPage * 4;
                        const endIndex = startIndex + 4;
                        if (sortFavorite) {
                                const favs = friends.filter((friend) => {
                                        return friend.favorite;
                                });
                                const notFavs = friends.filter((friend) => {
                                        return !friend.favorite;
                                });
                                return favs.concat(notFavs).slice(startIndex, endIndex);
                        } else {
                                return friends.slice(startIndex, endIndex);
                        }
                }
                if (search) {
                        const startIndex = currPage * 4;
                        const endIndex = startIndex + 4;

                        if (sortFavorite) {
                                const favs = filteredFriends.filter((friend) => {
                                        return friend.favorite;
                                });
                                const notFavs = filteredFriends.filter((friend) => {
                                        return !friend.favorite;
                                });
                                return favs.concat(notFavs).slice(startIndex, endIndex);
                        } else {
                                return filteredFriends.slice(startIndex, endIndex);
                        }
                }
        }

        return (
                <FriendsContext.Provider value={{ friends, currPage, pages, sortFavorite, searchField, filteredFriends, search, setSortFavorite, setSearch, setFilteredFriends, setSearchField, setCurrPage, setFriends, getPaginatedData, setPageCount }}>
                        {children}
                </FriendsContext.Provider>
        )
}