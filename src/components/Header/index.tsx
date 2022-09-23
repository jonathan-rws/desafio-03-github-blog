import logoImg from '../../assets/logo.svg'

import { HeaderComponent } from './styles'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logoImg} alt="" />
    </HeaderComponent>
  )
}
