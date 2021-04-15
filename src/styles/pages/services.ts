import styled, { css } from 'styled-components'
import { tint } from 'polished'
export const ServicesSection = styled.section`
  max-width: 1120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
export const Wrapper = styled.div`
  display: flex;
  margin-top: 3rem;
`

export const Container = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

export const ServicesHeader = styled.header`
  ${({ theme }) => css`
    text-align: center;
    h3 {
      font-size: 1.6rem;
      color: ${tint(0.5, theme.colors.texts.title)};
      opacity: 0.7;
    }
    h1 {
      font-size: 4rem;
      color: ${theme.colors.texts.default};
    }
    p {
      margin-top: 1.2rem;
      font-size: 1.4rem;
      color: ${theme.colors.texts.default};
    }
  `}
`
export const ServiceContainerCards = styled.ul`
  width: 300px;
  display: flex;
  justify-content: space-between;

  li {
    width: 300px;
  }
`
