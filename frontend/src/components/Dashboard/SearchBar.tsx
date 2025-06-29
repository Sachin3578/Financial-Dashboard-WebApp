import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { ChangeEvent } from "react";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
}

const SearchBar = ({
  placeholder = "Search...",
  value,
  onChange,
  fullWidth = true,
}: SearchBarProps) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "white" }} />
          </InputAdornment>
        ),
        style: { color: "white", margin:"10px", width: "60%", marginLeft: '23rem' }, // <-- input text color
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "white" },
          "&:hover fieldset": { borderColor: "white" },
          "&.Mui-focused fieldset": { borderColor: "white" },
        },
        input: { color: "white" }, // input text
        label: { color: "white" }, // optional label
      }}
    />
  );
};

export default SearchBar;
