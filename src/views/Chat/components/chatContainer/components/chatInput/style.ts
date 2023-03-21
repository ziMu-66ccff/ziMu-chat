import styled from 'styled-components';

export const ChatInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  background-color: #080420;
  padding: 0 2rem;
  padding-bottom: 0.3rem;

  .btn-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;

    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .epr-main {
        position: absolute;
        top: -250px;
        height: 220px !important;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
        .epr-body::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
        .epr-header-overlay {
          display: none !important;
        }
        .epr-emoji-category-label {
          display: none !important;
        }
      }
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2rem;
    border-radius: 2rem;
    background-color: #ffffff34;

    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #9186f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      background-color: #9a86f3;
      border: none;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
