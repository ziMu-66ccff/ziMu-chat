import styled from 'styled-components';

import background from '@/assets/img/background.jpg';

export const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  /* flex-direction: column; */
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: url(${background}) center;
  background-size: 100%;
`;
