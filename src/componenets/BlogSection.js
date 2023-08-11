import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './assets/css/Blogs.css';
import "bootstrap/dist/css/bootstrap.min.css";

const BlogSection = ({ posts }) => {
  const [comments, setComments] = useState(0);
  const [commentText, setCommentText] = useState('');

  const handleCommentClick = () => {
    setComments(comments + 1);
  };

  const handleCommentSave = () => {
    setComments(comments + 1);
    setCommentText('');
  };

  return (
    <div className="blog-post">
      {posts.map(post => (
        <div key={post.id} className="container-blogs">
          <div className="blogbox">
            <img src={post.imageUrl} alt={post.title} className="img" />
            <div className="blogtitle">
              <h3>
                <b>{post.title}</b>
              </h3>
            </div>
            <h5 style={{marginLeft:'20px'}}>
              TITLE Description, <span className="date">{post.date}</span>
            </h5>
            <div className="blogsdesc">
              <p>{post.description}</p>
            </div>
            <div className="spacing">
              <div className="row">
                <div className="col-md-6">
                  <Button className="readmore">
                    <b>Read More</b>
                  </Button>
                </div>
                <div className="col-md-6 text-right">
                  <div className="commentbox">
                    <p>
                      <span className="w3-padding-small">
                        <b>Comments &nbsp;</b>{' '}
                        <span className="count">{comments}</span>
                      </span>
                    </p>
                    <input
                      type="text"
                      value={commentText}
                      onChange={e => setCommentText(e.target.value)}
                      placeholder="Add a comment"
                    />
                    <button onClick={handleCommentSave}>Save Comment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
