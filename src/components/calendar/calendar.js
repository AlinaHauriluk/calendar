import styled from "styled-components";
import DateTimePicker from "react-datepicker";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 160px 0;
  background-color: rgb(154, 205, 50);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Container = styled.div`
  width: 40%;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-left: 0;
    width: 90%;
  }
`;
export const Title = styled.h2`
  letter-spacing: 6px;
  font-size: 28px;
  margin-bottom: 30px;
  color: rgb(34, 139, 34);
`;
export const Input = styled.input`
  padding: 10px 20px;
  text-align: center;
  border-radius: 10px;
  letter-spacing: 6px;
  outline: none;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid rgb(34, 139, 34);
  color: white;
  ::placeholder {
    font-size: 16px;
    text-align: center;
    letter-spacing: 6px;
    color: white;
  }
`;
export const SubTitle = styled(Title)`
  font-size: 22px;
  margin: 20px 0;
  letter-spacing: 3px;
`;

export const Data = styled(DateTimePicker)`
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid rgb(34, 139, 34);
  color: white;
  border-radius: 10px;
  ::placeholder {
    font-size: 16px;
    text-align: center;
    letter-spacing: 6px;
    color: white;
  }
`;
export const Price = styled.span`
  color: black;
`;
export const Button = styled.button`
  padding: 10px 20px;
  background-color: rgb(34, 139, 34);
  border: 2px solid black;
  color: white;
  border-radius: 10px;
  letter-spacing: 6px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: black;
  }
  margin-top: 50px;
  margin-left: 20px;
`;
export const Add = styled.div`
  width: 40px;
  height: 20px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid rgb(34, 139, 34);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  letter-spacing: 6px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: rgb(34, 139, 34);
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  fustify-content: center;
  margin-top: 40px;
`
