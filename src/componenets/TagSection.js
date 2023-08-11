import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './assets/css/tags.css';

const TagSection = ({ tags, selectedTag, onTagClick }) => {
  return (
    <div className="tag-section">
      <div className="heading">
        <h4>Tags</h4>
      </div>
      <div className="btns">
        {tags.map(tag => (
          <div key={tag} className={selectedTag === tag ? 'active' : ''}>
            <Button className='btn' onClick={() => onTagClick(tag)}>{tag}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagSection;