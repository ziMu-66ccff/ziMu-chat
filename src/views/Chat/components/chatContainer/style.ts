import styled from 'styled-components';

export const ChatContainerWrapper = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-rows: 10% 78% 12%;
  gap: 0.1rem;
  overflow: hidden;
  /* @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: 35% 65%;
  } */
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
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
  }

  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0.5rem;

      &-thumb {
        background-color: #ffffff39;
        width: 1rem;
        border-radius: 1rem;
      }
    }

    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 0.6rem;
        font-size: 1.1rem;
        border-radius: 0.8rem;
        color: white;
      }
    }

    .sended {
      justify-content: flex-end;

      .content {
        background-color: #000000;
      }
    }

    .received {
      justify-content: flex-start;

      .content {
        background-color: rgba(255, 255, 255, 0.204);
      }
    }
  }
`;
