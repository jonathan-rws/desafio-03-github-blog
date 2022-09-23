import styled from 'styled-components'

export const PostContainer = styled.article`
  padding: 2rem;
  background: ${(props) => props.theme.post};
  border-radius: 10px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme.title};
    }
    span {
      width: 120px;
      text-align: end;
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
