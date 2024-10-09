import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Components/Spinner';
import PostsTable from '../Components/home/PostsTable';
import PostsCard from '../Components/home/PostsCard';
import Navbar from '../Components/Navbar';
import PostsFooter from '../Components/home/PostsFooter';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('card');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/posts')
      .then((res) => {
        setPosts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="p-4 flex-grow">
        {loading ? <Spinner /> : showType === 'table' ? <PostsTable posts={posts} /> : <PostsCard posts={posts || []} />}
      </div>
      <PostsFooter setShowType={setShowType} />
    </div>
  );
};

export default Home;
