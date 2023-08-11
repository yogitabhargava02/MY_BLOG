import React from 'react';
import "./assets/css/post.css";
const PopularpostSection = ({ postsData }) => {
  return (
    <div>
      <div className='popularpost'>
        <div className='row'>
          <div className='col-md-12'>
            <h4>Popular Posts</h4>
          </div>
        </div>
        <div className='row'>
          {postsData.map((post) => (
            <div key={post.id} >
              <div className='post' style={{display:'flex'}}>
                <img className="postimage" src={post.imageUrl} alt="not found" width={80} height={60} />
                <h3>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularpostSection;
