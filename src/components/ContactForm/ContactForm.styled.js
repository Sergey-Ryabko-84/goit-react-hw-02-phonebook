import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;
  max-width: 500px;
  min-height: 300px;
  background-color: #2b405520;
  border-radius: 4px;
  border: 1px solid #999;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  height: 90px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  width: 240px;
  margin: 8px 0;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

export const SubmitButton = styled.button`
  width: 120px;
  height: 30px;
  color: #fff;
  background-color: #2b4055d0;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.7) 0px 2px 5px 0px;

  :hover {
    background-color: #2b4055f0;
    box-shadow: rgba(99, 99, 99, 0.9) 0px 2px 5px 1px;
  }
`;