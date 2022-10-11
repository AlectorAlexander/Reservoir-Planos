import React, { useContext } from 'react';
import {
  CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox,
} from 'cdbreact';
import Context from '../context/Context';

export default function Footer() {
  const {
    Data,
  } = useContext(Context);
  const {
    cep, logradouro, bairro, localidade, uf, ddd,
  } = Data;
  return (
    <CDBFooter className="shadow fixed-bottom">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="https://logopond.com/logos/2714a5c6929637ee6b246f8d71a9893c.png" width="70px" />
              <span className="ml-3 h5 font-weight-bold">Reservoir Planos</span>
            </a>
            <p className="my-3" style={{ width: '550px' }}>
              {`Todas as ofertas localizas próximas ao bairro ${bairro}, ${logradouro}, com o cep ${cep}, em ${localidade}-${uf}, DDD ${ddd}.`}
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>

        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <small className="text-center" style={{ width: '50%' }}>
            &copy; Resevoir Planos, 2022. All rights reserved.
          </small>
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
