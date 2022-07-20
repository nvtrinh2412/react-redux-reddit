import React, { useState } from "react";
import Input from "../InputFields/Input";
import "./edit.css";
export const EditPage = (props) => {
  const avatarUrl = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a155f0b1-4492-4c2c-9f70-101cec027cb9/dew8iac-ceac69b2-62fc-4127-91b1-c534bf3033c0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExNTVmMGIxLTQ0OTItNGMyYy05ZjcwLTEwMWNlYzAyN2NiOVwvZGV3OGlhYy1jZWFjNjliMi02MmZjLTQxMjctOTFiMS1jNTM0YmYzMDMzYzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.whCCN4thnDfVtXaY3fYTF5tleKvgRaJl49ahx-IylU4",
    "https://i.redd.it/rrz3hmsxcll71.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5n5xtNDSTbZPaIxt4RQcQgAwM65rxRwX3mA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdho024xmJyXLxbDNPbgkOXfDvO3OYC6ppCg&usqp=CAU",
    "https://preview.redd.it/oiynpcmqqow61.png?auto=webp&s=231a94f63382c22994f899d7ca1f5ce2068e08a0",
    "https://www.pinpng.com/pngs/m/279-2799281_snoo-avatar-reddit-custom-snoo-png-download-reddit.png",
    "https://mpng.subpng.com/20180416/ldq/kisspng-reddit-logo-united-states-computer-icons-graphic-d-rick-and-morty-5ad4e433e87811.7494947815239014919522.jpg",
    "https://image.pngaaa.com/815/6165815-middle.png",
    "https://preview.redd.it/zina8e9scsw51.png?auto=webp&s=de7cb32cbb0103cf8ec7f234fe8e46acacef37a0",
  ];
  const {setEdit} = props
  const [name,setName] = useState("Justin Nguyen")
  const [age,setAge]= useState(20);
  const [about, setAbout] = useState("I'm a software engineer")
  const [theme,setTheme]= useState("#ff9051")
  const [url, setUrl]= useState("https://i.redd.it/rrz3hmsxcll71.png")
  const handleSubmit = (e)=>{
    e.preventDefault();
    setEdit(false)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">SAVE </button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label = "Display name" data = {name} setData = {setName}/>
            <Input label = "Age" data = {age} setData = {setAge}/>
            <Input inputType = 'textarea' classStyle = 'input-about'label = "About" data = {about} setData = {setAbout}/>
            <label >Profile Picture</label>
            <div className="input-image-container">
              {avatarUrl.map((url) => {
                return (
                  <>
                    <img src={url} className="input-image" alt="image" onClick={(e)=>setUrl(e.target.src)}  />
                  </>
                );
              })}
            </div>
            <div className="theme-container">
              <label >Theme</label>
              <input type="color" onChange={(e)=>setTheme(e.target.value)}/>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
