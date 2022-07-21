import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './pages/Home/components/Footer';
import Header from './pages/Home/components/Header';
import MakePost from './pages/Posts/MakePost';
import Posts from './pages/Posts/Posts';
import EditPage from './pages/Users/components/Edit';
function App() {
  const [isEdit, setEdit] = useState(false)
  const [isOpenPost, setOpen] = useState(false)
  const pending = useSelector(state => state.user.pending)
  // const error = useSelector(state => state.user.error)

  return (
    <div className="App">
      {isEdit ? <EditPage setEdit={setEdit} /> : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className="posts__container">
            <Posts />
          </div>
          <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePost setOpen={setOpen} />
        </>
      )
      }
      {pending && <div className="loader">Loading ... </div>}
    </div>
  );
}

export default App;
