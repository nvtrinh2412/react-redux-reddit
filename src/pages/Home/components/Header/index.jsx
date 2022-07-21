import React from 'react'
import './header.scss'
import { useSelector } from 'react-redux'

 const Header = (props) => {
  const {setEdit}= props
  const handleEdit = () =>{
    setEdit(true);
  }
  const user = useSelector(state => state.user)
  return (
    <>
    <header style={{backgroundColor:`${user.themeColor}`, backgroundImage : `linear-gradient(180deg,${user.themeColor} 2% , ${user.themeColor} 65% , #181818 100%)`}} >
      <div className="info__container">
        <div className="info__edit" onClick={handleEdit}>Edit</div>
        <img className='info__ava' src={user.avatarUrl} alt="" />
        <div className="info__username">{user.name}</div>
        <div className="info__age">{user.age}</div>
        <div className="info__about">{user.about}</div>
      </div>
    </header>
    </>
  )
}

export default Header;
