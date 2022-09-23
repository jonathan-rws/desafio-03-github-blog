import { PostContainer } from './styles'
import { intlFormatDistance } from 'date-fns'
import { NavLink } from 'react-router-dom'

interface PostProps {
  number: number
  title: string
  body: string
  createdAt: string
}

export function Post({ number, title, body, createdAt }: PostProps) {
  const url = `post/${number}`
  return (
    <PostContainer>
      <NavLink to={url}>
        <header>
          <strong>
            {title.substring(0, 50)}
            {title.length > 50 && '...'}
          </strong>
          <span>{intlFormatDistance(new Date(createdAt), new Date())}</span>
        </header>
        <p>
          {body.substring(0, 200)}
          {body.length > 200 && '...'}
        </p>
      </NavLink>
    </PostContainer>
  )
}
