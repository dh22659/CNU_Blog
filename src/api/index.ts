// eslint-disable-next-line import/named
import axios, { AxiosResponse } from 'axios';
import { IPost, IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://34.22.88.146:8080/', // 내 VM인스턴스 외부 ip
});

// todo (6) api 작성

export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

export const createPost = (title: string, contents: string, tag: string) => {
  return instance.post('/posts', {
    // post는 url, data 순으로 작성.
    title,
    contents,
    tag,
  });
};

export const getPostById = (id: string): Promise<AxiosResponse<IPost>> => {
  return instance.get(`/posts/${id}`);
};

export const updatePostById = (id: string, title: string, contents: string, tag: string) => {
  return instance.put(`/posts${id}`, {
    title,
    contents,
    tag,
  });
};

export const deletePostById = (id: string) => {
  return instance.delete(`/posts/${id}`);
};
