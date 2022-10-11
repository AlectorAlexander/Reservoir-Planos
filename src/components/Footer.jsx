import React from 'react';
import {
  CDBFooter, CDBBtn, CDBIcon, CDBBox,
} from 'cdbreact';

export default function Footer() {
  return (
    <CDBFooter className="shadow footer mt-5 py-3">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src="https://logopond.com/logos/2714a5c6929637ee6b246f8d71a9893c.png" width="70px" />
            <span className="ml-3 h5 font-weight-bold">Reservoir Planos</span>
          </a>

        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; Devwares, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
}
