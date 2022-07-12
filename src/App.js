import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';


const App = () => {
  const pageSize=8
  const [progress,setProgress] = useState(0)
  
  //setProgress({progress:progress})
  
  const apikey=process.env.REACT_APP_API_KEY

  console.log(apikey)
  
  
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        
          <Navbar />


          <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="General" pageSize={pageSize} country='in' category='General'/>}></Route>
            <Route exact path="/General" element={<News setProgress={setProgress} apikey={apikey} key="General" pageSize={pageSize} country='in' category='General'/>}></Route>
            <Route exact path="/Entertainment" element={<News setProgress={setProgress} apikey={apikey} key="Entertainment" pageSize={pageSize} country='in' category='Entertainment'/>}></Route>
            <Route exact path="/Health" element={<News setProgress={setProgress} apikey={apikey} key="Health" pageSize={pageSize} country='in' category='Health' />}></Route>
            <Route exact path="/Business" element={<News setProgress={setProgress} apikey={apikey} key="Business" pageSize={pageSize} country='in' category='Business' />}></Route>
            <Route exact path="/Sports" element={<News setProgress={setProgress} apikey={apikey} key="Sports" pageSize={pageSize} country='in' category='Sports' />}></Route>
            <Route exact path="/Science" element={<News setProgress={setProgress} apikey={apikey} key="Science" pageSize={pageSize} country='in' category='Science' />}></Route>
            <Route exact path="/Technology" element={<News setProgress={setProgress} apikey={apikey} key="Technology" pageSize={pageSize} country='in' category='Technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
 
}

export default App
