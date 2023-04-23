import styled from 'styled-components';

export const ContactListItem = styled.li`
  list-style: none;
  border-radius: 10px;
  padding: 7px 20px;
  margin-bottom: 5px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  & {
    font-size: 20px;
  }
`;
export const ContactListItemName = styled.span`
  margin-right: 10px;
`;

export const ContactListItemNumber = styled.span`
  margin-right: 10px;
`;

export const ContactListItemButton = styled.span`
  background-color: #2196f3;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.06em;
  display: block;
  max-width: 100px;
  padding: 5px 10px;
  max-height: 50px;
  border: none;
  border-radius: 4px;
  margin-left: auto;
  cursor: pointer;
  transition: background-color 300ms;
  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;
