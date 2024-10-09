import React from 'react'
import { useState, useEffect } from 'react'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar()
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/posts/${id}`).then((res) => {
      setAuthor(res.data.author)
      setContent(res.data.content)
      setTitle(res.data.title)
      setLoading(false)
    }).catch((error) => {
      alert('An error happened. Please check the console.')
      console.log(error)
    });
  }, [])
  const handleEditPost = () => {
    const data = {
      title,
      author,
      content
    };
    setLoading(true);
    axios.put(`http://localhost:5555/posts/${id}`, data).then(() => {
      setLoading(false)
      enqueueSnackbar('Post edited successfully!', { variant: 'success' })
      navigate('/')
    }).catch((error) => {
      setLoading(false)
      // alert('An error happened. Please check the console.')
      enqueueSnackbar('Error!', { variant: 'error' })
      console.log(error)
    })
  }

  return (
    <div className='p-4'> 
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Post</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Content</label>
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditPost}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditPost
