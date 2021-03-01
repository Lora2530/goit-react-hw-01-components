import React from 'react'; 
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList'; 

import TransactionHistory from './components/TransactionHistory/TransactionHistory'; // 4. TransactionHistory

import userData from './db/user.json'; 

import statisticalData from './db/statistical-data.json';

import friendsData from './db/friends.json';

import transactions from './db/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friendsData={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
