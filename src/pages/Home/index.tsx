import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Profile />
      <Posts />
    </HomeContainer>
  )
}
