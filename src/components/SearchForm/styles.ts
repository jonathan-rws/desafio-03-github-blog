import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  background: ${(p) => p.theme.input};

  input {
    width: 100%;
    background: transparent;
    border: none;
    padding: 0.75rem 1rem;
    color: ${(p) => p.theme.text};

    &::placeholder {
      color: ${(p) => p.theme.labe};
    }
  }
  button {
    width: 50px;
    height: 40px;
    border: none;
    background: transparent;
    margin-right: 1rem;
    color: ${(props) => props.theme.span};
    transition: color 0.2s;
    &:hover {
      color: ${(props) => props.theme.text};
    }
  }
`
