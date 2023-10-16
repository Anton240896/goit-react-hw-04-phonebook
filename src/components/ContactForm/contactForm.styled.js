import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  width: 472px;

  padding: 12px;
  margin-top: 28px;
  margin-bottom: 48px;
`;

export const Button = styled.button`
  min-width: 118px;
  height: 49px;
  background-color: white;
  margin-top: 50px;
  margin-left: 417px;
  border-radius: 60px;
  border-color: black;
  border: none;
  cursor: pointer;
  box-shadow: 3px 5px 20px rgba(0, 5, 0, 0.1);

  &:hover {
    background-color: var(--main-color);
    color: black;
    border: 2px solid white;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const LabelStyled = styled.label`
  padding-left: 30px;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;

  input {
    display: block;
    width: 167px;
    margin-left: 5px;
    border-radius: 10%;
  }
`;
