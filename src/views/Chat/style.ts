import styled from 'styled-components';
import background from '@/assets/img/background.jpg';

export const ChatWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: url(${background}) center;
  background-size: 100%;

  .container {
    height: 85vh;
    width: 85vw;
    /* background-color: black; */
    background-color: rgb(10 9 12);
    opacity: 0.62;
    display: grid;
    grid-template-columns: 25% 75%;
    border-radius: 0.6rem;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
