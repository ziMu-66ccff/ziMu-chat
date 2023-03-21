import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  /* background-color: #080420; */
  background-color: black;
  border-radius: 0.6rem;

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
      color: white;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;

    &::-webkit-scrollbar {
      width: 0.3rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.3rem;
        border-radius: 1rem;
      }
    }

    .contact {
      display: flex;
      align-items: center;
      background-color: #ffffff39;
      min-height: 5rem;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;

      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: black;
    }
  }

  .current-user {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: rgba(25 25 30);
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
  }
`;
