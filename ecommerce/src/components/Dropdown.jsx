import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

const Dropdown = ({ label, options, value, onChange, cs, name }) => {
  const handleClear = () => {
    onChange({ target: { name, value: "" } }); // Clear value
  };

  return (
    <FormControl className={`w-40 ${cs}`}>
      <InputLabel id="dropdown-label">{label}</InputLabel>
      <Select
        labelId="dropdown-label"
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        renderValue={(selected) =>
          selected ? (
            <div className="flex items-center justify-between">
              <span>
                {options.find((opt) => opt.value === selected)?.label}
              </span>
              <IconButton size="small" onClick={handleClear}>
                <ClearIcon fontSize="small" />
              </IconButton>
            </div>
          ) : (
            <em>{label}</em>
          )
        }
      >
        {/* "Clear" Option */}
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
