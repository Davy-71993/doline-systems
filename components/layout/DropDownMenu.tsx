// Suggested code may be subject to a license. Learn more: ~LicenseLog:1282116487.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1386769065.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:435263502.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3712511788.
import React, { useState } from 'react';

interface DropDownMenuProps {
  options: string[];
  onSelect: (option: string) => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-button">
        {selectedOption || 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
