export const SET_BLOG_CREATED = "SET_BLOG_CREATED";
export const DELETE_BLOG_ENTRY = "DELETE_BLOG_ENTRY";
export const SET_UPDATE_BLOG = "SET_UPDATE_BLOG";

export const setBlogCreated = (blogContent: object) => {
  return {
    type: SET_BLOG_CREATED,
    blogContent: blogContent,
  };
};

export const setUpdateBlog = (blogContent: object) => {
  return {
    type: SET_UPDATE_BLOG,
    blogContent: blogContent,
  };
};

export const deleteBlogEntry = (id: string) => {
  return {
    type: DELETE_BLOG_ENTRY,
    blogContent: id,
  };
};
