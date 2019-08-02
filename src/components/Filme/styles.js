import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 440px;
  margin-top: 70px;

  img {
    border-top-right-radius: 15px;
  }

  div{
    width: 300px;
    height: 60px;
    margin: auto;
    margin-top: -4px;
    background-color: #444;
    border-top: 5px solid #555;
    border-bottom-left-radius: 15px;
    align-items: center;
    text-align: center;
  }

  p{
    font-weight: bold;
    color: #fff;
    line-height:55px;
  }
`;
