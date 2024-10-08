import React, { useEffect, useState } from 'react'
import { ButtonPost, PostingArea, PostsContainer } from './StylesPosts'
import CardPost from '../../components/post/CardPost'
import { AddPost, ListPosts } from '../../constants/constants';
import { useNavigate } from 'react-router-dom'
import { goToCommentsPage, goToCreatePostFormPage } from '../../router/coordinator'
import { Loading } from '../comments/StylesComments'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage';
import Header from '../../components/header/Header';
import { Navbar } from '../../components/navbar/Navbar';



const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate()
  useProtectedPage(navigate)
  const onClickComments = (idPost) => {

    goToCommentsPage(navigate, idPost)
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
        <ButtonPost onClick={() => goToCreatePostFormPage(navigate)}>Novo post</ButtonPost>
        <div>
          {posts.map((post, index) => {
            console.log(post.title, post.comments)
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
