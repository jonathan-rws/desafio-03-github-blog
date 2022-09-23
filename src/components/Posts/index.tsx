import { useEffect, useState } from 'react'
import { api } from '../../services/axios'

import { Post } from '../Post'
import { SearchForm } from '../SearchForm'
import { PostsContainer, PostsContent } from './styles'

interface Issue {
  number: number
  title: string
  body: string
  createdAt: string
}

export function Posts() {
  const [issues, setIssues] = useState([] as Issue[])

  useEffect(() => {
    getIssues()
  }, [])

  async function getIssues(query: string = '') {
    const { data } = await api.get('search/issues', {
      params: {
        q: `${query}repo:jonathan-rws/desafio-03-github-blog`,
      },
    })
    const issues = data.items.map((item: any) => {
      const { number, title, body } = item
      return {
        number,
        title,
        body,
        createdAt: item.created_at,
      }
    })
    setIssues(issues)
  }

  return (
    <PostsContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>
      <SearchForm getIssues={getIssues} />
      <PostsContent>
        {issues.map((item) => {
          return (
            <Post
              key={item.number}
              title={item.title}
              number={item.number}
              body={item.body}
              createdAt={item.createdAt}
            />
          )
        })}
      </PostsContent>
    </PostsContainer>
  )
}
