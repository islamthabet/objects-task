import Button from '../../components/Button/Button'
import { IoMdClose } from 'react-icons/io'
import { Input, Textarea } from './CreatePost.style'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { createPost } from '../../core/api/api'
import { useState } from 'react'
import toast from 'react-hot-toast'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  body: yup.string().required('Body is required'),
})

const CreatePost = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    setLoading(true)
    try {
      await toast.promise(createPost(data), {
        loading: 'Save The Post ...',
        success: 'Success',
        error: 'Error when Saving',
      })
      navigate('/')
      reset()
    } catch (error) {}
    setLoading(false)
  }
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70">
      <div className="relative min-w-[400px] rounded-lg bg-white p-4">
        <Link to="/">
          <IoMdClose className=" absolute -right-6 -top-6 cursor-pointer text-2xl text-red-400" />
        </Link>
        <div className="border-b text-center">Create Post</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-4"
        >
          <Input
            {...register('title')}
            id="title"
            type="text"
            placeholder="Title"
            autoFocus
          />
          {errors.title && (
            <small className=" text-red-700">{errors?.title?.message}</small>
          )}

          <Textarea
            rows={8}
            {...register('body')}
            id="body"
            placeholder="Body"
          />
          {errors.body && (
            <small className=" text-red-700">{errors.body.message}</small>
          )}
          <Button disabled={loading} type="submit" label="Submit" />
        </form>
      </div>
    </div>
  )
}

export default CreatePost
