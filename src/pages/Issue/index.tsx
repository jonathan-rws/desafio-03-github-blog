import { PostInfo } from '../../components/PostInfo'
import { IssuesContainer } from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/axios'
import { PostContent } from '../../components/PostContent'

interface IssueData {
  title: string
  githubUrl: string
  creator: string
  createdAt: string
  comments: number
  body: string
}

export function Issue() {
  const { number } = useParams()

  const [issue, setIssue] = useState({} as IssueData)
  console.log(issue)
  useEffect(() => {
    async function getIssue() {
      const { data } = await api.get(
        `repos/jonathan-rws/desafio-03-github-blog/issues/${number}`,
      )
      console.log(data.body)
      const newIssue: IssueData = {
        title: data.title,
        githubUrl: data.html_url,
        creator: data.user.login,
        comments: data.comments,
        createdAt: data.created_at,
        body: data.body,
      }
      setIssue(newIssue)
    }

    getIssue()
  }, [])

  return (
    <IssuesContainer>
      <PostInfo issue={issue} />
      <PostContent content={issue.body} />
    </IssuesContainer>
  )
}
