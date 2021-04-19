/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.styles.css';
import { useFriends } from '../friendsProvider';

function Footer() {
        const { setSortFavorite, sortFavorite, search, friends, filteredFriends, setPageCount, currPage, pages, setCurrPage } = useFriends()

        function goToNextPage() {
                setCurrPage(page => page + 1);
        }

        function goToPrevPage() {
                setCurrPage(page => page - 1)
        }

        React.useEffect(() => {
                if (!search) {
                        setPageCount(Math.ceil(friends.length / 4));
                } else {
                        setPageCount(Math.ceil(filteredFriends.length / 4));
                }
                if (currPage === pages && currPage > 0) {
                        setCurrPage(currPage - 1)
                }
        }, [friends, currPage, pages, setPageCount, setCurrPage, search, filteredFriends.length])

        return (
                <div className="footer">
                        <button className="previous round" onClick={goToPrevPage} disabled={currPage < 1 ? true : false}>&#8249; Prev</button>
                        <button className={sortFavorite ? "red" : "black"} onClick={() => setSortFavorite(!sortFavorite)}>Sort &hearts;</button>
                        <button className="next round" onClick={goToNextPage} disabled={currPage === pages - 1 || currPage === pages ? true : false}>Next &#8250;</button>
                </div>
        )
}

export default Footer;