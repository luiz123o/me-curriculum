import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 320px;
  display: flex;
  margin: 0 auto;
`
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  margin-left: 6px;
  margin-right: 6px;
  border-radius: 10px;

  height: 400px;
`
export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 200px;
  }
`

export const CardText = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    text-align: center;

    h2 {
      color: ${theme.colors.background.primary};
      opacity: 0.9;
      font-size: 2rem;
      margin-top: -3rem;
    }
    p {
      color: ${theme.colors.texts.default};
      margin-top: 1.2rem;
      text-overflow: ellipsis;
    }
  `}
`
