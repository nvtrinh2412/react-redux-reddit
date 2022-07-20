import React from 'react'
import './header.css'
export const Header = (props) => {
  const {setEdit}= props
  const handleEdit = () =>{
    setEdit(true);
  }
  return (
    <>
    <header style={{backgroundColor: '#ff9051', backgroundImage : 'linear-gradient(180deg,#ff9051 2% , #ff9051 65% , #181818 100%)'}} >
      <div className="info-container">
        <div className="info-edit" onClick={handleEdit}>Edit</div>
        <img className='info-ava' src="https://i.redd.it/rrz3hmsxcll71.png" alt="" />
        <div className="info-username">Justin Nguyen</div>
        <div className="info-age">21</div>
        <div className="info-about">I'm a software engineer</div>
      </div>
    </header>
    </>
  )
}
