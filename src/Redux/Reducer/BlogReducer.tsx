import { SET_BLOG_CREATED, DELETE_BLOG_ENTRY, SET_UPDATE_BLOG } from "../Actions/Actions";

const initialState = {
  blogs: [{ id: 0, blogContent: "Learn React" }],
};

export default function blogReducer(state = { ...initialState }, action: any) {
  switch (action.type) {
    case SET_BLOG_CREATED: {
      return { ...state, blogs: [...state.blogs, action.blogContent] };
    }

    case SET_UPDATE_BLOG: {
      const newState = state.blogs.map((blog) => {
        if (blog.id === action.blogContent.id) {
          return {
            ...blog,
            blogContent: action.blogContent.blogContent,
          };
        }
        return blog;
      });
      return {
        ...state,
        blogs: newState,
      };
    }
    case DELETE_BLOG_ENTRY: {
      return {
        ...state,
        blogs: state.blogs.filter((i) => i.id !== action.blogContent),
      };
    }
    default:
      return state;
  }
}
