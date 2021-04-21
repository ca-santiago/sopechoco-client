import styled from 'styled-components/native';

export const SForm = {
  TextInput: styled.TextInput`
    border-width: 1px;
    border-color: rgb(135, 135, 142);
    border-radius: 10px;
    margin-bottom: 5px;
    padding-left: 10px;
  `,
  InputGroup: styled.View`
    padding: 5px;
  `,
  InputContainer: styled.View`
    margin: 5px;
  `,
  FormContainer: styled.View`
    padding: 5px;
    margin-top: 200px;
  `,
  RegisterText: styled.Text`
    margin: 5px;
    margin-top: 20px;
    color: rgb(100, 120, 150);
  `,
  LoginBtn: styled.View`
    /* padding: 10px; */
  `,
  LoginText: styled.Text`
    border-radius: 10px;
    background-color: #bf4141;
    padding: 10px;
    text-align: center;
    color: white;
  `,
  FormTitle: styled.Text`
    margin-bottom: 15px;
    font-size: 23px;
    color: #3f3f3f;
    font-weight: bold;
    text-align: center;
  `,
};
