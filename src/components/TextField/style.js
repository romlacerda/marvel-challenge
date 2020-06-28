import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const StyledTextField = styled(TextField)`
  width: 100%;
  border: 1px solid;
  background-color: #000000;
  border-radius: 5px;
  color: #ffffff;

  & input {
    color: #FFFFFF;
  }
`;

export default StyledTextField;
