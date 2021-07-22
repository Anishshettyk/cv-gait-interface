import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { IoArrowForwardOutline } from 'react-icons/io5';

const { colors } = theme;

const useStyles = makeStyles(() => ({
  textFieldContainer: {
    '& > *': {
      margin: '10px 0px',
    },
  },
  textField: {
    '& label': {
      color: colors.black,
    },
  },
}));

const StyledUserContainer = styled.section`
  background: linear-gradient(to left, ${colors.blue}, ${colors.red});
  width: 100%;
  height: 100vh;
  ${mixins.flexCenter};
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px 20px;
  border-radius: 10px;
  background-color: ${colors.white};
  ${mixins.SmallShadow}

  h1 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${colors.darkBlue1};
    text-align: center;
    margin-bottom: 30px;
  }
  button {
    ${mixins.blueButton}
    ${mixins.flexCenter};

    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
  }
`;

const UserDetails = () => {
  const classes = useStyles();
  return (
    <StyledUserContainer>
      <FormContainer>
        <h1>Enter your details</h1>
        <div className={classes.textFieldContainer}>
          <TextField
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            fullWidth
            className={classes.textField}
            placeholder="Enter your full name"
            type="text"
          />
          <TextField
            id="outlined-basic"
            label="Email ID"
            variant="outlined"
            fullWidth
            className={classes.textField}
            placeholder="Enter your email id"
            type="email"
          />
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            fullWidth
            className={classes.textField}
            placeholder="Enter your age"
            type="number"
          />
          <TextField
            id="outlined-basic"
            label="Height"
            variant="outlined"
            fullWidth
            className={classes.textField}
            placeholder="Enter your height in feet"
            type="number"
          />
          <TextField
            id="outlined-basic"
            label="Weight"
            variant="outlined"
            fullWidth
            className={classes.textField}
            placeholder="Enter your weight in Kgs"
            type="number"
          />
        </div>
        <button type="submit">
          Proceed <IoArrowForwardOutline />
        </button>
      </FormContainer>
    </StyledUserContainer>
  );
};

export default UserDetails;
