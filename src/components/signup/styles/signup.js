import styled from "styled-components/macro";
import { FormHolder, RegistrationHolder } from "../../signin/styles/signin";

export const SignUpFormHolder = styled(FormHolder)`
  flex: 1;
`;

export const SubTitle = styled.h2`
  color: rgba(142, 142, 142, 1);
  font-size: 19px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 10px;
  text-align: center;
`;

export const SignUpSubmit = styled.button`
  margin: 10px auto;
  width: 77%;
  align-self: stretch;
  margin: 10px auto;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #0095f6;
  opacity: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  padding: 5px 9px;
  cursor: pointer;
  text-align: center;
  &:disabled {
    background-color: rgba(0, 149, 246, 0.3);
    cursor: not-allowed;
  }
`;

export const LoginHolder = styled(RegistrationHolder)``;
