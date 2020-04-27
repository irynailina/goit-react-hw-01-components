import React from "react";
import {Profile} from "./components/Profile/Profile";
import {Statistics} from './components/Statistics/Statistics';
import user from './user.json'

// console.log(user);

export const App = () => (
  <>
    <Profile />
    <Statistics />
  </>
);
