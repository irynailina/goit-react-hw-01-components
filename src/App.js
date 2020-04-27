import React from "react";
import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import stats from "./components/Statistics/statistical-data.json";
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

// console.log(user);
// console.log(stats);
// console.log(friends);
console.log(transactions);

export const App = () => {
    return (
  <>
    <Profile />
    <Statistics title="UPLOAD STATS" stats={stats} />
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions} />
  </>
);
} 
