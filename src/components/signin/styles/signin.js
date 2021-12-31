import styled from "styled-components/macro";

export const Image = styled.img`
  height: 427px;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  margin: 99px 0 0 151px;

  &.current-image {
    z-index: 2;
    transition: opacity 1.5s ease-in;
    visibility: visible;
    opacity: 1;
  }

  &.previous-image {
    visibility: visible;
    opacity: 1;
  }
`;

export const FormHolder = styled.div`
  align-items: center;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`;

export const Title = styled.h1`
  background-image: url(${"../images/logo.png"});
  margin: 32px auto 12px;
  background-repeat: no-repeat;
  background-position: 0 - 130px;
  background-size: 175px 51px;
  height: 51px;
  width: 175px;
  text-indent: 110%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(219, 219, 219, 1);
`;

export const InputSection = styled.div`
  margin: 24px 40px 6px;
  flex: 0 0 auto;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`;

export const InputField = styled.div`
  display: flex;
  align-items: center;
  background: rgba(250, 250, 250, 1);
  border: 1px solid rgba(219, 219, 219, 1);
  border-radius: 3px;
  box-sizing: border-box;
  color: rgba(38, 38, 38, 1);
  flex-direction: row;
  font-size: 14px;
  position: relative;
  width: 100%;
  margin-top: 5px;
  height: 38px;
`;

export const Error = styled.div`
  display: flex;
  border: 1px solid;
  margin: 10px 15px;
  padding: 10px;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  background-color: #ffbaba;
`;

export const Span = styled.span`
  color: rgba(142, 142, 142, 1);
  font-size: 13px;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  transform-origin: left;
  transition: transform ease-out 0.1s, -webkit-transform ease-out 0.1s;
  user-select: none;
  white-space: nowrap;

  &.small-span {
    transform: scale(0.83333) translateY(-13px);
  }
`;

export const Input = styled.input`
  background: rgba(250, 250, 250, 1);
  border: 0;
  flex: 1 0 auto;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
  font-size: 16px;

  &.small-input {
    font-size: 12px;
  }
`;

export const Submit = styled.button`
  width: 77%;
  align-self: stretch;
  margin: 10px auto;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: rgba(0, 149, 246, 0.3);
  opacity: 1;
  border: 1px solid transparent;
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;

  &.form-valid {
    background-color: #0095f6;
    cursor: pointer;
  }
`;

export const Break = styled.div`
  display: flex;
  color: rgba(142, 142, 142, 1);
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  margin: 10px 15px 18px;
  text-transform: uppercase;
`;

export const VerticalLine = styled.hr`
  width: 107px;
  background-color: rgba(219, 219, 219, 1);
  height: 1px;
  border: 0px;
`;

export const Text = styled.a`
  text-align: center;
  color: rgba(0, 55, 107, 1);
  line-height: 14px;
  margin-bottom: 10px;
  font-size: 12px;
  cursor: pointer;
`;

export const RegistrationHolder = styled.div`
  align-items: center;
  background-color: #fff;
  background-color: rgba(var(--d87, 255, 255, 255), 1);
  border: 1px solid #dbdbdb;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin: -3px 0 -4px;

  p {
    color: rgba(38, 38, 38, 1);
    font-size: 14px;
    margin: 15px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: rgba(0, 149, 246, 1);
  }
`;
