import styled, { css } from 'styled-components'

export const NavBar = styled.nav`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -999;
    height: 20rem;
    svg {
      position: relative;
      display: block;
      width: calc(179% + 1.3px);
      height: 16rem;
      fill: ${theme.colors.background.default};
      fill-opacity: 0.15;
      z-index: -999;
    }
  `}
`
export const NavContent = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`
export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: -22rem;
  align-items: center;
  justify-content: space-between;
`

export const NavLogo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.texts.default};
    p {
      padding-right: 1rem;

      span {
        font-size: ${theme.fonts.sizes.lg};
        font-weight: 700;
        margin-left: 2rem;
        color: #330033;
      }
    }
  `}
`

export const NavMenu = styled.ul`
  display: flex;
  color: #fff;
  li {
    & + li {
      margin-left: 1rem;
    }
  }
`
