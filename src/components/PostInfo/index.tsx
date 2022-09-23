import { intlFormatDistance } from 'date-fns'
import { NavLink } from 'react-router-dom'
import {
  PostInfodHeader,
  PostInfoContainer,
  Title,
  PostInfoFooter,
} from './styles'

import {
  faArrowUpRightFromSquare,
  faAngleLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface PostInfoProps {
  issue: {
    title: string
    githubUrl: string
    creator: string
    createdAt: string
    comments: number
  }
}

export function PostInfo({ issue }: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfodHeader>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faAngleLeft} size="sm" />
          <span>VOLTAR</span>
        </NavLink>
        <a href={issue.githubUrl}>
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </a>
      </PostInfodHeader>
      <Title>{issue.title}</Title>
      <PostInfoFooter>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>{issue.creator}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />

          <span>
            {issue.createdAt &&
              intlFormatDistance(new Date(issue.createdAt), new Date())}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>
            {issue.comments} Comentário{issue.comments > 1 && 's'}
          </span>
        </div>
      </PostInfoFooter>
    </PostInfoContainer>
  )
}
