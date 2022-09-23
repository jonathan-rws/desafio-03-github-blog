import styled from 'styled-components'

export const PostsContainer = styled.section`
  max-width: 54rem;
  margin: 4rem auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.subtitle};
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }
`

export const PostsContent = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
