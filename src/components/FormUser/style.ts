import styled from 'styled-components';

export const FormUserWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: black;
  opacity: 62%;
  padding: 2rem 5rem;
  border-radius: 2rem;

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: white;
    }
  }

  input {
    background-color: transparent;
    padding: 0.5rem;
    border: 0.1rem solid #73767a;
    border-radius: 0.3rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid white;
    }
  }

  button {
    background-color: rgb(31, 42, 54);
    color: white;
    padding: 0.5rem 2rem;
    font-weight: bold;
    border-radius: 0.4rem;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: rgb(0, 0, 0);
    }
  }

  span {
    color: #666;
    a {
      color: white;
    }
  }
`;
