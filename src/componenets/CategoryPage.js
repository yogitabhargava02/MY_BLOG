import React from 'react';
import BlogSection from './BlogSection';

const CategoryPage = ({ posts, selectedCategory }) => {
  const filteredPosts = posts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <h2>{selectedCategory}</h2>
      <BlogSection posts={filteredPosts} /> {/* Render the filtered posts */}
    </div>
  );
};

export default CategoryPage;
