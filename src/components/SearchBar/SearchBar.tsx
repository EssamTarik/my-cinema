import React from 'react';
import { useIntl } from 'react-intl';
import Form from 'react-bootstrap/Form';
import { IProps } from './interfaces';

const SearchBar = ({ onChange }: IProps) => {
  const intl = useIntl();
  return (
    <Form.Control
      placeholder={intl.formatMessage({ id: 'searchBar.placeholder' })}
      type="text"
      onChange={({ target: { value } }) => onChange(value)} />
  );
}

export default SearchBar;