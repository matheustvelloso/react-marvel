import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const FormGroup = styled(Form)`
  max-width: 400px;
  display: flex;
  padding: 20px;

  .form-control {
    background-color: #212529;
    margin-left: 60px;
    color: #fff;
    border-radius: 0px;
    border: 1px solid #e62429;
    box-shadow: 0 4px 16px rgba(230, 36, 41, 0.2);
  }
  @media (max-width: 768px) {
    .form-control {
      margin-left: 0;
    }
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    outline: 0;
    box-shadow: 0 4px 16px rgba(230, 36, 41, 0.2);
  }
  .btn {
    background-color: #e62429;
    border-radius: 0px;
    border: 1px solid #e62429;
  }
  .btn:hover {
    background-color: #212529;
    border-radius: 0px;
    box-shadow: 0 4px 16px #c6a972;
  }
`;
