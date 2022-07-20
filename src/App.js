import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { EditPage } from './components/Edit/EditPage';
import { Header } from './components/Header/Header';

function App() {
  const [isEdit, setEdit] = useState(false)
  return (
    <div className="App">
     {isEdit ? <EditPage setEdit ={setEdit}/> :  <Header setEdit= {setEdit} /> }
    </div>
  );
}

export default App;
