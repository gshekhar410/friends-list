import Header from './Header/header.component';
import React from 'react';

import './App.css';
import AddSearchFriend from './AddFriend/AddFriend.component';
import FriendList from './FriendList/FriendList.component';
import Footer from './Footer/footer.component';
import FriendsProvider from './friendsProvider';

// import { useFriends } from './friendsProvider';

function App() {
  return (
    <div className="center">
      <Header></Header>
      <FriendsProvider>
        <AddSearchFriend />
        <FriendList />
        <Footer />
      </FriendsProvider>
    </div>
  );
}

export default App;
