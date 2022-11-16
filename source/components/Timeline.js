import styled from "styled-components";

export const StyledTimeline = styled.div`

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #b3b2b3 #ffffff;
  }
  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
    height: 10px;
  }
  *::-webkit-scrollbar-track {
    background-color: gray;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #161D6D;
    border-radius: 100vw;
  }

  flex: 1;
  width: 100%;
  margin: auto;
  margin-bottom: 60px;
  padding: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundBase};
  border-radius: 0px 0px 15px 15px;
  h2 {
    font-size: 20px;
    margin-bottom: 16px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColorBase}
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      img {
        border-radius: 10px;
        box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.4);
      }
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          padding-bottom: 8px;
          color: ${({ theme }) => theme.textColorBase};
        }
      }
    }
  }
`;