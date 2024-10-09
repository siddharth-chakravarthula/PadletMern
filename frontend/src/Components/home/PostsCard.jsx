import React from 'react';
import PostSingleCard from './PostSingleCard';

const PostCard = ({ posts = [] }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {posts.length > 0 ? (
        posts.map((item) => (
          <PostSingleCard key={item._id} post={item} />
        ))
      ) : (
        <p>No posts available... :(</p>
      )}
    </div>
  );
};

export default PostCard;

