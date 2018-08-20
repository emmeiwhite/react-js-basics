import React, { Component } from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Main} from './Components/Main';
class App extends Component {
  render() {
    var menus= ["OVERVIEW","HOW IT WORKS","WHY FUNDS ADVANCE"];
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12 col-sm-8 sol-xs-12">
               <Header menus={menus} />
               <Main />
            </div>
            
           
        </div>
      </div>
    );
  }
}

export default App;
