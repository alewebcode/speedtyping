import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import { Landing } from './pages/Landing/Landing';
import { TestTyping } from './pages/TestTyping';


export function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/" exact component={Landing}/>
        <Route path="/test-typing" component={TestTyping} />
       
      </Switch>
    </BrowserRouter>
  );
}