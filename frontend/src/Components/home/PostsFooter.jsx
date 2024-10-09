import React from 'react';

const PostsFooter = ({ setShowType }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-200 py-2 text-center flex justify-center items-center gap-4">
      <button
        className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
        onClick={() => setShowType('card')}
      >
        Card View
      </button>
      <button
        className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
        onClick={() => setShowType('table')}
      >
        Table View
      </button>
    </footer>
  );
};

export default PostsFooter;

