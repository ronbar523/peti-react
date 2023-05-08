import React from 'react'
import { Paper } from '@mui/material';
import ResendButton from './Buttons/ResendButton';

const VerifyCard = ({verify, setVerify, setModalAlreadyVerify}) => {
    return ( <>
    {!verify ? (
        <Paper
          className="myProfileCardVerify"
          sx={{
            p: 1.3,
            paddingLeft: 2,
            m: "auto",
          }}
        >
          <h6 className="d-inline">Your email is not verify </h6>

          <ResendButton
            setVerify={setVerify}
            setModalAlreadyVerify={setModalAlreadyVerify}
          />
        </Paper>
      ) : null}
    </> );
}
 
export default VerifyCard;