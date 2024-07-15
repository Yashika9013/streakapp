import React, { useState } from "react";
import "./PostForm.css";

const PostForm = ({ onAddPost }) => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && image) {
      onAddPost({ text: description, image });
      setDescription("");
      setImage(null);
    }
  };

  return (
    <div className="post-form">
      <h3>Add a New Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
