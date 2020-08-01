import React, { ChangeEventHandler } from 'react';

import './search-box.styles.scss';

interface SearchBoxProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>
}

export const SearchBox: React.FC<SearchBoxProps> = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange} />
);
