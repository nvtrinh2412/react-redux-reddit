import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../InputFields/Input";
import { createPost } from "../redux/postSlice";
import "./post.css";
export default function MakePost(props) {
  const {setOpen} = props
  const dispatch = useDispatch()

  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some description");
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const handlePost = ()=>{
    setOpen(false)
    const newPost = {
      title,
      description: desc,
      tag: selectedIdx
    }
    dispatch(createPost(newPost))
  }
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>Post</p>
      </div>

      <Input
        data={title}
        setData={setTitle}
        inputType="textarea"
        label="Title"
        classStyle="makepost-title"
      />
      <Input
        data={desc}
        setData={setDesc}
        inputType="textarea"
        label="Description"
        classStyle="makepost-desc"
      />
      <label htmlFor="">Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, idx) => {
          return (
            <button
              key={idx}
              className={`${
                selectedIdx === idx
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectedIdx(idx)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
}
