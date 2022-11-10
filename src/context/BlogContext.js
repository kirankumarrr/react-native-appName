import React, { useReducer, useState } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [...state, { title: `Blog Post ${state.length + 1}` }];

    default:
      break;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'ADD_BLOGPOST' });
  };

  return (
    <BlogContext.Provider
      value={{
        data: blogPosts,
        addBlogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

// [
//     {
//       title: 'Blog Post 1',
//     },
//     {
//       title: 'Blog Post 2',
//     },
//   ]
