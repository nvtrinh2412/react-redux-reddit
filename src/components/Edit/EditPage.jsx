import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../API/apiRequest";
import Input from "../InputFields/Input";
import "./edit.scss";
export const EditPage = (props) => {
  // Data for avatar URL
  const avatarUrl = [
    "https://i.redd.it/snoovatar/avatars/eb2de43d-b72d-4138-a9d6-858ced74159c.png",
    "https://i.redd.it/snoovatar/avatars/03cad487-421b-46df-801a-451b82485625.png",
    "https://i.redd.it/snoovatar/avatars/50a26bd0-50fe-4684-8935-52e19aa98cd5.png",
    "https://i.redd.it/rrz3hmsxcll71.png",
    "https://i.redd.it/snoovatar/avatars/91a45fdf-bc0b-421a-a057-4df1dde0de6c.png",
    "https://i.redd.it/snoovatar/avatars/c6922f93-0248-4b3c-923e-08a77ae43091.png",
    "https://i.redd.it/snoovatar/avatars/e336b327-c51d-4753-a8a4-8893b3ed7a19.png",
    "https://i.redd.it/snoovatar/avatars/5df626c7-0df3-4787-8e87-245e0e590fe5.png",
    "https://i.redd.it/snoovatar/avatars/607134ac-3be3-462b-b107-0989ef41f3ec.png",
  ];

  //Hook to get and update data
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //state
  const { setEdit } = props;
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(user.themeColor);
  const [url, setUrl] = useState(user.avatarUrl);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      name,
      age,
      about,
      avatarUrl: url,
      themeColor: theme,
    };
    updateUser(updatedUser, dispatch);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit__container">
          <button className="close">SAVE </button>
          <div className="edit__profile">Edit Profile</div>
          <div className="input__container">
            <Input label="Display name" data={name} setData={setName} />
            <Input label="Age" data={age} setData={setAge} />
            <Input
              inputType="textarea"
              classStyle="input__about"
              label="About"
              data={about}
              setData={setAbout}
            />
            <label>Profile Picture</label>
            <div className="input__image-container">
              {avatarUrl.map((url) => {
                return (
                  <>
                    <img
                      src={url}
                      className="input__image"
                      alt="reddit avatar"
                      onClick={(e) => setUrl(e.target.src)}
                    />
                  </>
                );
              })}
            </div>
            <div className="theme__container">
              <label>Theme</label>
              <input
                type="color"
                defaultValue={user.themeColor}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
