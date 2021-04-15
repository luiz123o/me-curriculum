import styled, { css } from 'styled-components'
import { darken, tint } from 'polished'
export const ServicesSection = styled.section`
  max-width: 1120px;
  margin: 0 auto;
`

export const Container = styled.div``

export const ServicesHeader = styled.header`
  ${({ theme }) => css``}
`
export const ServiceContainerCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `}
`
