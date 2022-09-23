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

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfodHeader>
        <a href="#">
          <FontAwesomeIcon icon={faAngleLeft} size="sm" />
          <span>VOLTAR</span>
        </a>
        <a href="#">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </a>
      </PostInfodHeader>
      <Title>JavaScript data types and data structures</Title>
      <PostInfoFooter>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>jonathan-rws</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />

          <span>Há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 Comentários</span>
        </div>
      </PostInfoFooter>
    </PostInfoContainer>
  )
}
