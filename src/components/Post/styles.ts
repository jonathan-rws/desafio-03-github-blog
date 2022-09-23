import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 26rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.post};
  border-radius: 10px;
  transition: outline 0.1s;
  &:hover {
    outline: 2px solid ${(p) => p.theme.labe};
  }
  a {
    text-decoration: none;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    strong {
      max-width: 16rem;
      font-size: 1rem;
      color: ${(props) => props.theme.title};
    }
    span {
      align-self: flex-start;
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }
  p {
    margin-top: 1.125rem;
    color: ${(props) => props.theme.text};
    line-height: 26px;
  }
`
