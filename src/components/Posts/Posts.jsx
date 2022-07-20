import {useSelector} from 'react-redux'
import "./post.scss"
const Posts = () => {
  const posts = useSelector(state => state.post.posts)
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  return (
    <>
    <section className="posts__container">
      {posts.slice(1).map((post,idx)=>{
        return(
          <div className="posts">
            <p className="posts__title">{post.title}</p>
            <p className={`posts__tags--${tags[post.tag]} posts__tags`}>{tags[post.tag]}</p>
            <p className="posts__description">{post.description}</p>
          </div>
        )
      })}
    </section>
    </>
   );
}

export default Posts;