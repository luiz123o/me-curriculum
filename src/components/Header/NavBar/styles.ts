import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const NavBar = styled.nav`
  ${({ theme }) => css`
    width: 100%;

    height: 10rem;
    position: fixed;
    background: ${darken(0.02, theme.colors.background)},
      linear-gradient(to top, transparent 1%, black 100%),
      linear-gradient(to top, transparent 1%, black 100%);
    -webkit-mask-image: ;
    mask-image: ;
    color: ${theme.colors.texts.primary};
  `}
`
export const NavContainer = styled.div`
  display: flex;
  max-width: 100rem;
  height: 10rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

export const NavLogo = styled.div`
  ${({ theme }) => css`
    p {
      font-size: 2.4rem;
      font-weight: 500;
      color: ${theme.colors.texts.secondary};

      strong {
        margin-left: 0.3rem;
        margin-right: 0.2rem;
      }
      span {
        background-color: #00dbde;
        background-image: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
        margin-left: 0.2rem;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
    }
  `}
`

export const NavMenu = styled.ul`
  display: flex;
  font-size: 1rem;

  li {
    margin-left: 3rem;
    list-style: none;
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`
