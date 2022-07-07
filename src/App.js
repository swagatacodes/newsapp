import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />


          <Routes>
            <Route exact path="/" element={<News key="General" pageSize={8} country='in' category='General'/>}></Route>
            <Route exact path="/General" element={<News key="General" pageSize={8} country='in' category='General'/>}></Route>
            <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={8} country='in' category='Entertainment'/>}></Route>
            <Route exact path="/Health" element={<News key="Health" pageSize={8} country='in' category='Health' />}></Route>
            <Route exact path="/Business" element={<News key="Business" pageSize={8} country='in' category='Business' />}></Route>
            <Route exact path="/Sports" element={<News key="Sports" pageSize={8} country='in' category='Sports' />}></Route>
            <Route exact path="/Science" element={<News key="Science" pageSize={8} country='in' category='Science' />}></Route>
            <Route exact path="/Technology" element={<News key="Technology" pageSize={8} country='in' category='Technology' />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


