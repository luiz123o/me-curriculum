import * as S from './styles'

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.NavContainer>
        <S.NavLogo>
          <p>
            L<strong>.</strong>O<br />
            <span>{'</carioca>'}</span>
          </p>
        </S.NavLogo>
        <S.NavMenu>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Quem sou</a>
          </li>
          <li>
            <a href="">Habilidades</a>
          </li>
          <li>
            <a href="">Portifolio</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </S.NavMenu>
      </S.NavContainer>
    </S.NavBar>
  )
}
