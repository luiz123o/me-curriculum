import styled, { css } from 'styled-components'

export const Container = styled.section`
  max-width: 1120px;
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;

    flex-direction: column;
    height: 100%;
    z-index: 9999;
    h1 {
      color: ${theme.colors.texts.title};
      opacity: 0.3;
      font-size: 6rem;
    }
    h2 {
      font-size: 2rem;
      color: ${theme.colors.texts.default};
      text-align: right;
      margin-left: 0.5rem;
      margin-top: -1rem;
      margin-bottom: 1rem;
    }
    p {
      color: ${theme.colors.texts.default};
      font-size: 1.4rem;
    }
  `}
`
export const Wrapper = styled.div`
  display: flex;
`
export const ImageContainer = styled.div`
  img {
    margin-left: -14rem;
    margin-top: -8rem;
    width: 700px;
    z-index: -999;
  }
`

export const SocialLink = styled.ul`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.links.default};
    li {
      display: flex;
      align-self: flex-start;
      margin-top: 2rem;
      & + li {
        margin-left: 1rem;
      }
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  `}
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    margin-top: 4rem;
    width: 10rem;
    height: 3rem;
    border: 1px solid ${theme.colors.button.border.default};
    border-radius: 2rem;
    color: ${theme.colors.texts.default};
    svg {
      margin-left: 0.5rem;
    }
  `}
`
