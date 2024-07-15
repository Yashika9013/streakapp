import React from 'react';
import './PostList.css';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div key={index} className="post-item">
          {post.imageUrl && (
            <img src={post.imageUrl} alt="Post" className="post-image" />
          )}
          <p className="post-description">{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
