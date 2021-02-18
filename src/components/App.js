import React from 'react';
import Header from './Header';
import MainArea from './MainArea';
import LeftSideBar from './LeftSideBar';
const App = () => {
    return ( 
        <div>
            <Header />
            <LeftSideBar />            
            <MainArea />
        </div>
    );
}

export default App;