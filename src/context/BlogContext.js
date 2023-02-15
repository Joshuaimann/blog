import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Blog":
      return [
        ...state,
        {
          title: action.payload.blog.title,
          content: action.payload.blog.content,
          key: Math.floor(Math.random() * 99999),
        },
      ];
    case "Delete_Blog":
      return state.filter((blog) => blog.key !== action.payload.key);
    case "Edit_Blog":
      // var filteredState = state.filter(
      //   (blog) => blog.key !== action.payload.blog.key
      // );
      // filteredState.push({
      //   title: action.payload.blog.title,
      //   content: action.payload.blog.content,
      //   key: action.payload.blog.key,
      // });
      // return filteredState.sort((a, b) => {
      //   return a.key - b.key;
      // });
      return state.map(post => {
        return post.key === action.payload.blog.key ? action.payload.blog : post
      })
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "Add_Blog",
      payload: { blog: { title, content } },
    });
    callback();
  };
};

const editBlog = (dispatch) => {
  return (blog, callback) => {
    dispatch({
      type: "Edit_Blog",
      payload: {
        blog: { title: blog.title, content: blog.content, key: blog.key },
      },
    });
    callback();
  };
};

const deleteBlog = (dispatch) => {
  return (key) => {
    dispatch({ type: "Delete_Blog", payload: { key: key } });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    addBlog,
    editBlog,
    deleteBlog,
  },
  [
    {
      title: "Blog",
      content: "Blog",
      key: 1,
    },
    {
      title: "Blog1",
      content: "Blog",
      key: 2,
    },
    {
      title: "Blog2",
      content: "Blog",
      key: 3,
    },
  ]
);
