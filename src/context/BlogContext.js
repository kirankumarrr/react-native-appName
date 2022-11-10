import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog Post ${state.length + 1}`,
        },
      ];

    case 'DELETE_BLOGPOST':
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      break;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'ADD_BLOGPOST' });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'DELETE_BLOGPOST', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
  },
  []
);
// [
//     {
//       title: 'Blog Post 1',
//     },
//     {
//       title: 'Blog Post 2',
//     },
//   ]
