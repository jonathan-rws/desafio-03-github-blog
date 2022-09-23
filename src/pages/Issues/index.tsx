import { Header } from '../../components/Header'
import { PostInfo } from '../../components/PostInfo'
import { IssuesContainer } from './styles'

export function Issues() {
  return (
    <IssuesContainer>
      <Header />
      <PostInfo />
    </IssuesContainer>
  )
}
