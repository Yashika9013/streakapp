import React, { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import StreakCounter from './components/StreakCounter';

function App() {
  const [posts, setPosts] = useState([]);
  const [streak, setStreak] = useState(0);
  const [profile] = useState({
    username: 'Yashika',
    description: 'Welcome to my streaks app!',
    profileImage: '/images/profile.jpeg', // Replace with your profile image path
    followers: 100, // Example followers count
    badge: '/assets/badge.svg', // Path to your badge image
  });
  const [showAddPost, setShowAddPost] = useState(false);

  const handleAddPost = ({ text, image }) => {
    const newPost = {
      text,
      imageUrl: image ? URL.createObjectURL(image) : null,
      likes: 100,
    };

    setPosts([newPost, ...posts]);
    setStreak(streak + 1);
    setShowAddPost(false); // Hide add post section after adding
  };

  const toggleAddPost = () => {
    setShowAddPost(!showAddPost);
  };

  return (
    <div className="App">
      <div className="top-bar">
        <h1 className="title">STYLE STAR </h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          {/* Add search icon if needed */}
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
      <header className="header">
        <div className="profile-container">
          <div className="profile">
            <img
              src={profile.profileImage}
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <div className="profile-name-badge">
                <h1>{profile.username}</h1>
                {profile.badge && (
                  <img
                    src={profile.badge}
                    alt="Badge"
                    className="badge-image"
                  />
                )}
              </div>
              <div className="profile-stats">
                <p>Followers: {profile.followers}</p>
              </div>
            </div>
          </div>
          <div className="streak-and-badge">
            <StreakCounter streak={streak} />
          </div>
          {posts.length > 0 && (
            <p className="congratulations">
              Congratulations! You've posted {posts.length}{' '}
              {posts.length > 1 ? 'posts' : 'post'}!
            </p>
          )}
        </div>
      </header>
      <div className="create-post">
        {!showAddPost && (
          <button className="create-post-btn" onClick={toggleAddPost}>
            Create Post
          </button>
        )}
        {showAddPost && <PostForm onAddPost={handleAddPost} />}
      </div>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
