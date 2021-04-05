import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  max-width: 100rem;
  height: calc(100vh - 10rem);
`
export const ImageContainer = styled.div`
  img {
    margin-top: 15rem;
    width: 50rem;
    height: 50rem;
    opacity: 0.9;
    -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);
    mask-image: linear-gradient(to top, transparent 5%, black 100%);
    border-radius: 50%;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 60rem;
    display: flex;

    margin-top: 15rem;
    flex-direction: column;
    color: ${theme.colors.texts.secondary};
    h1 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1;
      margin-bottom: 2.5rem;
    }
    strong {
      font-size: 5rem;
      font-weight: 900;
      color: ${theme.colors.texts.primary};
    }
  `}
`

export const SocialLink = styled.ul`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.texts.secondary};

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      width: 5rem;
      height: 5rem;
      border: 3px solid ${theme.colors.texts.primary};
      border-radius: 50%;

      &:hover {
        background: ${theme.colors.texts.secondary};
        svg {
          fill: ${theme.colors.texts.primary};
        }
      }

      & + li {
        margin-left: 2rem;
      }

      svg {
        margin-top: 0.4rem;
        margin-left: 0.09rem;
        width: 3rem;
        height: 3rem;
      }
    }
  `}
`
