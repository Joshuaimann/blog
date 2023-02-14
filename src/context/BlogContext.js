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
      var filteredState = state.filter((blog) => blog.key !== key);
      filteredState.push({ blog: action.payload.blog });
      return filteredState.sort((a, b) => {
        return a.key - b.key;
      });
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return (title, content) => {
    dispatch({
      type: "Add_Blog",
      payload: {blog: {title, content}}
    });
  };
};

const editBlog = (dispatch) => {
  return (key, blog) => {
    dispatch({ type: "Edit_Blog", payload: { blog, key } });
  };
};

const deleteBlog = (dispatch) => {
  return (key) => {
    dispatch({ type: "Delete_Blog", payload: { key } });
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
