import styled from 'styled-components';

export const Container = styled.section`
  width: 563px;
  margin-top: 132px;
  min-height: 100px;
  margin-left: 600px;
  margin-right: auto;
  background-color: #dee873;
  border-radius: 10%;

  svg {
    position: absolute;
    top: 240px;
    left: 620px;
  }
`;

export const ContactFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 138px;
  margin-left: 31px;
  margin-top: 80px;
`;

export const Contacts = styled.h3`
  font-size: 25px;
`;

export const PhonebookName = styled.h2`
  text-align: center;
  margin-right: -44px;
`;
