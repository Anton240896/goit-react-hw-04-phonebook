import styled from 'styled-components';

export const ContactContainer = styled.li`
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  gap: 40px;

  button {
    width: 65px;
    height: 30px;
    margin-bottom: 5px;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    background-color: white;
    box-shadow: 3px 5px 20px rgba(0, 5, 0, 0.1);
  }

  button:hover {
    background-color: var(--main-color);
    color: black;
    border: 2px solid white;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ContactName = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
`;
