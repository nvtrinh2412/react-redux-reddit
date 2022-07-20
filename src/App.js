import { useState } from 'react';
import './App.css';
import { EditPage } from './components/Edit/EditPage';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  const [isEdit, setEdit] = useState(false)
  const [isOpenPost,setOpen] = useState(false)
  return (
    <div className="App">
     {isEdit ? <EditPage setEdit ={setEdit}/> :  <Header setEdit= {setEdit} /> }
     {/* <Footer isOpenPost={isOpenPost} setOpen={setOpen}/> */}
    </div>
  );
}

export default App;
