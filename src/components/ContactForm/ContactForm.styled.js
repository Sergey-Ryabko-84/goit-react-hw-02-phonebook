import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled(Field)``;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

export const SubmitButton = styled.button`
  background-color: gray;
`;