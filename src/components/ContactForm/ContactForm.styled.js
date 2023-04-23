import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
export const FormButtonSubmit = styled.button`
  background-color: #2196f3;
  color: white;
  margin-top: 10px;
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
  cursor: pointer;
  transition: background-color 300ms;
  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;

export const InputField = styled.input`
  height: 20px;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 5px;

  &:hover {
    border: 1px solid #2196f3;
  }
`;
