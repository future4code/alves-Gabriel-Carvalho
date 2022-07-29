import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 0;
`;

export const Text = styled.div`
  text-align: center;
  font-style: normal;
  font-family: "IBM Plex Sans", sans-serif;
  h1 {
    color: #373737;
    font-size: 2.25rem;
    line-height: 2.938rem;
    margin-bottom: 0;
    margin-top: 0.5rem;
    font-weight: 700;
  }
  p {
    font-size: 1rem;
    line-height: 1.313rem;
    color: #000000;
    font-weight: 300;
    padding: 0;
    margin: 0;
  }
`;

export const Image = styled.div`
  width: 5.25rem;
  height: 5.25rem;
  margin-top: 4.688rem;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Input = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 0.25rem;
  background: #ffffff;
  width: 22.688rem;
  height: 3.75rem;
  color: black;
  margin-top: 4.688rem;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
