import styled, { css } from 'styled-components'

export const Human = styled.div`
  position: relative;
  margin: 70px 0 0 77.5px;
  width: 100px;
`
export const Hair = styled.div`
  width: 100%;
  height: 15px;
  position: absolute;
  background-color: var(--color-hair);
  border-radius: 50% 0% 100% 0%;
`
export const Eye = styled.div`
  width: 15px;
  height: 20px;
  background-color: var(--color-eye);
  border-radius: 50%;
  margin-top: 35px;
  position: absolute;
  border: solid 5px var(--color-white);
  left: 15px;

  ${({ right }) =>
    right &&
    css`
      left: auto;
      right: 15px;
    `};
`

export const Ear = styled.div`
  width: 15px;
  height: 20px;
  background-color: var(--color-ear);
  top: 40px;
  position: absolute;
  border-radius: 40% 40%;
  left: -15px;

  ${({ right }) =>
    right &&
    css`
      left: auto;
      right: -15px;
    `};
`
export const Nose = styled.div`
  top: 50px;
  width: 15px;
  height: 20px;
  background-color: var(--color-nose);
  left: 0;
  right: 0;
  position: absolute;
  margin: 0 auto;
  border-radius: 100% 100% 50% 50%;
`
export const Mouth = styled.div`
  width: 40px;
  border: solid 5px var(--color-white);
  left: 0;
  right: 0;
  position: absolute;
  margin: 0 auto;
  top: 75px;
  border-radius: 0 0 50% 50%;

  ${({ sad }) =>
    sad &&
    css`
      background-image: url(/skull.png);
    `};
`

export const Head = styled.div`
  position: absolute;
  z-index: 2;
  margin: 0 auto;
  top: 0;
  left: -10px;
  right: 0;
  width: 130px;
  height: 126px;
  background-image: url(/head.png);
  background-position: right;
  background-size: 146px;
`
export const Neck = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 100px;
  left: 0;
  right: 0;
  width: 20px;
  height: 40px;
  background-color: var(--color-humanbody);
`
export const Corpus = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 112.5px;
  left: 0;
  right: 0;
  width: 60px;
  height: 95px;
  border-radius: 5px;
  background-color: var(--color-bodybg);
`
export const Chest = styled.div`
  display: inline-block;
  width: 30px;
  height: 70px;
  background-color: var(--color-shirtLeft);
  border-radius: 5px 0 0 0;
  ${({ right }) =>
    right &&
    css`
      background-color: var(--color-shirtRight);
      border-radius: 0 5px 0 0;
    `}
`
export const Arm = styled.div`
  position: relative;
  transform: rotate(45deg);
  margin-left: -27px;
  margin-top: -5px;
  width: 22px;
  height: 80px;
  background-color: var(--color-shirtLeft);
  border-radius: 5px;
  ${({ right }) =>
    right &&
    css`
      transform: rotate(-45deg);
      margin-left: 35px;
      background-color: var(--color-shirtRight);
    `}
`
export const Hand = styled.div`
  position: absolute;
  bottom: -14px;
  border-radius: 0 0 50% 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 15px;
  height: 15px;
  background-color: var(--color-humanbody);
`
export const Leg = styled.div`
  background-color: var(--color-bodybg);

  height: 70px;
  width: 25px;
  margin-top: 10px;
  margin-left: -10px;
  transform: rotate(15deg);
  ${({ right }) =>
    right &&
    css`
      transform: rotate(-15deg);
      margin-left: 15px;
    `}
`
export const Foot = styled.div`
  position: absolute;
  bottom: -14px;
  border-radius: 0 0 50% 50%;
  left: -15px;
  right: 0;
  margin: 0 auto;
  width: 40px;
  height: 15px;
  background-color: var(--color-humanbody);
  ${({ right }) =>
    right &&
    css`
      left: 0;
    `}
`

export const Dead = styled.div`
  position: absolute;
  z-index: 3;
  margin: 0 auto;
  top: 0;
  left: -60px;
  right: 0;
  width: 230px;
  height: 300px;
  background-image: url(/skull.png);
  background-color: #F5F5F5;
  background-position: center;
  background-size: cover;
`