import { LoaderFunction } from 'react-router-dom'
import axiosInstance from './axiosInstance'
import { IPost } from '../interface/IPost.interface'
import { IComments } from '../interface/IComment'

export const getPosts = async (): Promise<IPost[]> => {
  return (await axiosInstance.get<IPost[]>('posts')).data
}

export const getPost: LoaderFunction = async ({
  params,
}): Promise<{ posts: IPost; comments: IComments[] }> => {
  const [post, comments] = await Promise.all([
    axiosInstance.get<IPost>(`posts/${params.id}`),
    axiosInstance.get<IComments[]>(`posts/${params.id}/comments`),
  ])
  console.log(post)
  return { posts: post.data, comments: comments.data }
}

export const createPost = async (data: { title: string; body: string }) => {
  return axiosInstance.post('posts', { ...data, userId: 1 })
}
