import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;

  svg {
    height: 100%;
    width: 100px;
    color: #fff;
  }
`

export const Card = styled.div`
  position: relative;
  width: 320px;
  height: 420px;
  background: #122936;
  border-radius: 2rem;
  overflow: hidden;
  ::after {
    content: 'Mobile';
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 900;
    font-size: 6rem;
    color: rgba(255, 255, 255, 0.1);
  }

  :hover {
    ::before {
      top: -70%;
      transform: skewY(390deg);
    }
  }
  ::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background: #2196f3;
    transform: skewY(345deg);
    transition: 0.6s;
  }
`
