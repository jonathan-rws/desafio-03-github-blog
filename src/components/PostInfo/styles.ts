import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 54rem;
  background: ${(props) => props.theme.profile};
  margin: -5.5rem auto 0;
  border-radius: 10px;
  gap: 2rem;
`
export const PostInfodHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    display: flex;
    gap: 1rem;

    align-items: center;
    color: ${(p) => p.theme.blue};
    span {
      font-size: 0.75rem;
    }
  }
`

export const Title = styled.strong`
  display: block;
  margin-top: 1.5rem;
  font-size: 1.5rem;
  color: ${(p) => p.theme.title};
`
export const PostInfoFooter = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(p) => p.theme.span};
  }
`
