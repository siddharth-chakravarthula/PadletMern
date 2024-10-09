import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow, BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import PostModal from './PostsModal';

const PostSingleCard = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='bg-white rounded-xl shadow-md px-6 py-4 m-4 relative hover:shadow-lg transition-shadow duration-300'>
      <div className='flex justify-start items-center gap-x-2 mb-2'>
        <BiUserCircle className='text-gray-500 text-3xl' />
        <h2 className='font-semibold text-lg'>{post.author || 'No Author'}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2 mb-2'>
        <PiBookOpenTextLight className='text-gray-500 text-2xl' />
        <h3 className='text-xl font-medium'>{post.title || 'No Title'}</h3>
      </div>
      <p className='my-4 text-gray-600 text-sm leading-relaxed'>
        {post.content || 'No Content Available'}
      </p>
      
      <div className='absolute top-2 right-2'>
        <BiDotsVerticalRounded 
          className='text-2xl cursor-pointer text-gray-500' 
          onClick={() => setShowMenu(!showMenu)} 
        />
        {showMenu && (
          <div className='absolute bg-white border rounded-lg shadow-lg p-2 mt-2 right-0'>
            <div className='flex flex-col gap-y-2'>
              <button onClick={() => setShowModal(true)} className='flex items-center gap-x-2'>
                <BiShow className='text-blue-600' /> View
              </button>
              <Link to={`/posts/details/${post._id}`} className='flex items-center gap-x-2'>
                <BsInfoCircle className='text-green-600' /> Details
              </Link>
              <Link to={`/posts/edit/${post._id}`} className='flex items-center gap-x-2'>
                <AiOutlineEdit className='text-yellow-500' /> Edit
              </Link>
              <Link to={`/posts/delete/${post._id}`} className='flex items-center gap-x-2'>
                <MdOutlineDelete className='text-red-500' /> Delete
              </Link>
              <p className='text-xs text-gray-400'>ID: {post._id}</p>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <PostModal post={post} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default PostSingleCard;
