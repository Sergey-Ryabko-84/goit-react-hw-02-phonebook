import styled from 'styled-components';

export const FormWrapper = styled.form`
    display: inline-flex;
    flex-direction: column;
    gap: 12px;
`;

export const Input = styled(Field)``;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;