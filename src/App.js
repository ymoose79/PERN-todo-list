import React, {Fragment} from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

//componenets


function App() {
  return (
     <Fragment>
       <div className="container">
       <InputTodo/>
       </div>
       <ListTodos></ListTodos>
     </Fragment>
  );
}

export default App;
