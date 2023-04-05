import axiosInstance from './axiosInstance'

export interface IPost {
  body: string
  id: number
  title: string
  userId: number
}

export const getPosts = async (): Promise<IPost[]> => {
  return (await axiosInstance.get<IPost[]>('posts')).data
}

export const getPost = async ({
  param,
}: {
  param: { id: string }
}): Promise<IPost> => {
  return (await axiosInstance.get<IPost>(`posts/${param.id}`)).data
}

export const createPost = async (data: { title: string; body: string }) => {
  return axiosInstance.post('posts', { ...data, userId: 1 })
}
