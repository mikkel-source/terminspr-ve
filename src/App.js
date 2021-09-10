import './App.scss';
import PopularClasses from './views/popularClasses';
import FrontPage from './views/frontPage';
import Secondpage from './views/secondPage';
import SearchPage from './views/searchPage';
import MySchedule from './views/mySchedule';
import FitnessDescription from './views/fitnessDesription';
import loginContext from './component/context/loginContext';
import { Router } from "@reach/router"
import LogIn from './views/logIn';
import { useState } from 'react';

function App() {

  var loginState = useState()

  return (
    <>
        <loginContext.Provider value="">
      <Router>

        <FrontPage default path="frontpage" />


        <Secondpage path="/secondpage" />



        <PopularClasses path="/home" />



        <SearchPage path="/search" />

        <MySchedule path="/schedule" />



        <FitnessDescription path="/description/:id" />

        <LogIn path="login" />

      </Router>
        </loginContext.Provider>



    </>


  );
}

export default App;







