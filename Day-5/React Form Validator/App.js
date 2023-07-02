import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserForm from './UserForm';



function App() {
  return (
    <><div className="App">
      <h3>React Form Validator</h3>
    </div><div className="container">
        <UserForm />
      </div></>
  );
}
export default App;