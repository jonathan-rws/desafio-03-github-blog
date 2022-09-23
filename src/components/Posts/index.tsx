import { Post } from '../Post'
import { SearchForm } from '../SearchForm'
import { PostsContainer, PostsContent } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>
      <SearchForm />
      <PostsContent>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContent>
    </PostsContainer>
  )
}
