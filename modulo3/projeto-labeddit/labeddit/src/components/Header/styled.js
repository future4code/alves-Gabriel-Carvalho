import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3.125rem;
  align-items: center;
  justify-content: center;
  background: #ededed;
`;

export const Image = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 1.751rem;
  height: 1.79rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Button = styled.button`
  font-family: "Noto Sans", sans-serif;
  background-color: none;
  font-style: normal;
  color: #4088cb;
  width: 3.438rem;
  height: 1.563rem;
  font-size: 18px;
  line-height: 1.533rem;
  border: none;
  margin-left: 70%;
`;
