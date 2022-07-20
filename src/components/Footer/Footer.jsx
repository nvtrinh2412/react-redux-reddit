import React from "react";
import "./footer.scss";
export default function Footer(props) {
  const { isOpenPost, setOpen } = props;
  return (
    <footer>
      <div className="footer__title" onClick={()=>setOpen(!isOpenPost)}>
        {isOpenPost ? 'x' : "+"}
      </div>
    </footer>
  );
}
