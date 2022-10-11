/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState();
  const [page, setPage] = useState('cep');
  const contextValue = {
    page,
    setPage,
    Data,
    setData,
    Loading,
    setLoading,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
