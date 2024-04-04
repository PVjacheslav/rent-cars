import styled from "styled-components";
import image from './corvet.jpg'

export const Wrapper = styled.div`
  height: 100vh;
  width: 1440px;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h1`
  padding: 10px 20px;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  width: 705px;
  font-size: 40px;
  line-height: 1.1;
  background-color: rgb(163, 163, 163, 0.5);
  color: var(--main-text-color);
`;