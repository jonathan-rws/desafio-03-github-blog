import cover from '../../assets/cover.png'

import styled from 'styled-components'

export const HeaderComponent = styled.header`
  margin: 0 auto;

  max-width: 90rem;
  height: 296px;
  display: flex;
  justify-content: center;
  background-image: url(${cover});
  background-position: center;
  img {
    width: 148px;
    height: 98px;
    margin-top: 64px;
  }
`
