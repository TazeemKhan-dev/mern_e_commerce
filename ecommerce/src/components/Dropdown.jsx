import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

const Dropdown = ({ label, options, value, onChange, cs, name }) => {
  const handleClear = (e) => {
    e.stopPropagation(); // Prevents opening the dropdown when clearing
    onChange({ target: { name, value: "" } }); // Clear the selected value
  };

  return (
    <FormControl className={`w-40 ${cs}`}>
      <InputLabel id="dropdown-label" className="text-black dark:text-white">
        {label}
      </InputLabel>
      <Select
        labelId="dropdown-label"
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        className="bg-white dark:bg-gray-800 text-black dark:text-white border dark:border-gray-600"
        renderValue={(selected) =>
          selected ? (
            <div className="flex items-center justify-between">
              <span>
                {options.find((opt) => opt.value === selected)?.label}
              </span>
              <IconButton
                size="small"
                onClick={handleClear}
                onMouseDown={(e) => e.stopPropagation()} // This prevents the dropdown from opening when clicking the clear button
              >
                <ClearIcon
                  fontSize="small"
                  className="text-black dark:text-white"
                />
              </IconButton>
            </div>
          ) : (
            <em>{label}</em>
          )
        }
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            value={option.value}
            className="bg-white text-black "
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
