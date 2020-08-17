import React from "react";
import { useIntl } from "react-intl";
import Form from "react-bootstrap/Form";
import { IProps } from "./interfaces";

const SearchBar = ({ onChange, value = "" }: IProps) => {
  const intl = useIntl();
  return (
    <Form.Control
      value={value}
      placeholder={intl.formatMessage({ id: "searchBar.placeholder" })}
      type="text"
      onChange={({ target: { value: newValue } }) => onChange(newValue)}
    />
  );
};

export default SearchBar;
