import Header from "./Header";
import "./Homepage.css";
import { useSelector } from "react-redux";
import imgsrcBlog from '../../images/homepage.jpg'
import { Link } from "react-router-dom";


export default function Homepage() {
  const blogObject = useSelector((state: any) => state.blogs);


  return (
    <div>
      <Header />
      <div className="homepage-heading">
        <h2> A few words about this blog platform, Ghost, and how this site was made</h2>
      </div>
      <div className="homepage-img-container"/>
      <div className="blog-view-list">
      <span className="heading-blog-section"> BLOGS </span>
        <ul className="list-view-blog">
          {blogObject.map((item:any , index:number)=>{
            return(
              <>
              {item.blogContent!== "" &&
              <div className="listItem">
                <Link to={`poemview?${item.id}`}>
              <img src={imgsrcBlog} alt={item.id}/>
              <div className="title-blog" key ={index}>
                {item.id} </div>
                </Link>
              </div>}
              </>
            )
          })}

        </ul>
      </div>
    </div>
  );
}
