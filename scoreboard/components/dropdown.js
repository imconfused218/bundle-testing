import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Props: {
 *  selectedItem: string,
 *  items: [string],
 *  handleSelect: (item: string) => undefined,
 *  buttonText: string
 * }
 */

function Dropdown({ selectedItem, items, handleSelect, buttonText }) {
  const [isOpen, toggleDropdown] = useState(false);

  const selectItem = (item) => {
    handleSelect(item);
    toggleDropdown(!isOpen);
  };

  return (
    <div className="c-leaguePicker">
      <button
        className="c-leaguePicker__select"
        onClick={() => toggleDropdown(!isOpen)}
      >
        {buttonText}
        {selectedItem}
      </button>
      {isOpen && (
        <div className="c-leaguePicker__list">
          {items.map((item) => (
            <div
              key={item}
              className="c-leaguePicker__option"
              onClick={() => selectItem(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  handleSelect: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};
