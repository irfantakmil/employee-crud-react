import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader';
import Home from './home';
import MainLayout from './hoc/mainLayout';

import Header from './home/header';
import AddEmployee from './components/Add/addEmployee';
import EditEmployee from './components/Edit/editEmployee';


const Routes = () => {
  return (
    <BrowserRouter>
        <Header/>
        <MainLayout>
          <Switch>
            <Route path="/edit-employee/:id" component={EditEmployee}/>
            <Route path="/create-employees" component={AddEmployee}/>
            <Route path="/" component={Home}/>
          </Switch>
        </MainLayout>
        <GoogleFontLoader
        fonts={[
          {font:'Roboto',weights:[300,400,900]},
          {font:'Fredoka One'}
        ]}
      />
    </BrowserRouter>
  );
}

export default Routes;
