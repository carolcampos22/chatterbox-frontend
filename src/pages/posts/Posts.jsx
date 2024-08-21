import React, { useEffect, useState } from 'react'
import { ButtonPost, PostingArea, PostsContainer } from './StylesPosts'
import CardPost from '../../components/post/CardPost'
import { AddPost, ListPosts } from '../../constants/constants';
import { useNavigate } from 'react-router-dom'
import { goToCommentsPage } from '../../router/coordinator'
import { Loading } from '../comments/StylesComments'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage';
import Header from '../../components/header/Header';
import { Navbar } from '../../components/navbar/Navbar';



const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const [form, onChangeInputs, clearInputs] = useForm({
    content: "",

  })
  const navigate = useNavigate()
  useProtectedPage(navigate)
  const onClickComments = (idPost) => {

    goToCommentsPage(navigate, idPost)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    clearInputs()


    try {
      const { token } = await AddPost({
        content: form.content,

      })
      localStorage.getItem("login-labeddit.token", token)
      alert("Post enviado!")

    } catch (error) {
      alert(error.response.data);
      console.log(error)
    }
  }

  useEffect(() => {
    ListPosts()
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(
        (error) => {
          console.log(error)
          setLoading(false)
        }
      )
  }, [])


  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <>

      <PostsContainer>
        <Header />
        <Navbar />
        <PostingArea>
          <textarea
            name='content'
            value={form.content}
            onChange={onChangeInputs}
            placeholder='Escreva seu post...'
          ></textarea>
          <ButtonPost type='submit' onClick={onSubmit}>Postar</ButtonPost>
        </PostingArea>
        <div>
          {posts.map((post, index) => {
            return (
              <CardPost
                key={index}
                creatorPost={post.creator.nickname}
                title={post.title}
                content={post.content}
                likes={post.likes}
                dislikes={post.dislikes}
                comments={post.comments}
                id={post.id}
                onClickComments={onClickComments}
              />
            )
          })}

        </div>
      </PostsContainer>
    </>
  )
}

export default Posts
