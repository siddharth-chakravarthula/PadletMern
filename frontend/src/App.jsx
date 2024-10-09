import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import DeletePost from './pages/DeletePost';
import EditPost from './pages/EditPost';
import Home from './pages/Home';
import ShowPost from './pages/ShowPost';
import background from './assets/Background.png';


const App = () => {
  return (
    <div className="min-h-screen bg-cover bg-center font-afacad" style={{ backgroundImage: `url(${background})` }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/details/:id' element={<ShowPost />} />
        <Route path='/posts/edit/:id' element={<EditPost />} />
        <Route path='/posts/create' element={<CreatePost />} />
        <Route path='/posts/delete/:id' element={<DeletePost />} />
      </Routes>
    </div>
  );
};

export default App;
