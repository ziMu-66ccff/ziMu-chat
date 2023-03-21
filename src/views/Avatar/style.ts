import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  background-color: #131324;

  .loader {
    max-inline-size: 100%;
  }

  .title {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      border-radius: 5rem;
      padding: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      img {
        height: 6rem;
      }
    }
    .selected {
      border: 0.4rem solid #66ccff;
    }
  }
  .submit-btn {
    background-color: #997af0;
    color: white;
    padding: none;
    font-weight: bold;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transform: 0.5s ease-in-out;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;
