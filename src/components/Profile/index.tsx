import { useEffect, useState } from 'react'
import { api } from '../../services/axios'
import {
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface User {
  name: string
  bio: string
  imgUrl: string
  login: string
  publicRepos: number
  company: string
  htmlUrl: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState({} as User)
  console.log(user)
  useEffect(() => {
    async function getUser() {
      const { data } = await api.get('users/jonathan-rws')
      const {
        name,
        bio,
        avatar_url: imgUrl,
        login,
        public_repos: publicRepos,
        company,
        html_url: htmlUrl,
        followers,
      } = data
      setUser({
        name,
        bio,
        imgUrl,
        login,
        publicRepos,
        company,
        htmlUrl,
        followers,
      })
    }
    getUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={user.imgUrl} alt="" />
      <ProfileContent>
        <ProfileHeader>
          <strong>{user.name}</strong>
          <a href={user.htmlUrl}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>
        <p>{user.bio}</p>
        <ProfileFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>jonathan-rws</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} size="1x" />
            <span>Havan</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} size="1x" />
            <span>
              {user.followers} seguidor{user.followers > 1 && 'es'}
            </span>
          </div>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  )
}
