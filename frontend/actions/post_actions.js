import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS' ;
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts,
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post,
});

export const removePost = id => ({
  type: REMOVE_POST,
  id
});

export const fetchAllPosts = () => dispatch => (
  PostApiUtil.fetchAllPosts().then( posts => dispatch(receiveAllPosts(posts)) )
);

export const fetchPost = id => dispatch => (
  PostApiUtil.fetchPost(id).then( post => dispatch(receivePost(post)) )
);

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then( post => dispatch(receivePost(post)) )
);

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post).then( post => dispatch(receivePost(post)) )
);

export const deletePost = id => dispatch => (
  PostApiUtil.deletePost(id).then( post => dispatch(removePost(id)))
);