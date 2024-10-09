import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'

const ShowPost = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    setLoading(true);
    axios.get(`http://localhost:5555/posts/${id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [])
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Post</h1>
      {loading ? (<Spinner />) : 
      (<div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>ID</span>
          <span>{post._id}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Title</span>
          <span>{post.title}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Author</span>
          <span>{post.author}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Content</span>
          <span>{post.content}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Create Time</span>
          <span>{new Date(post.createdAt).toString()}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
          <span>{new Date(post.updatedAt).toString()}</span>
        </div>
      </div>)}
    </div>
  )
}

export default ShowPost
