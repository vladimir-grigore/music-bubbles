import { TextField } from "@mui/material"
import { styled } from "@mui/material/styles"

export const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-input": {
    color: "aqua",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "aqua",
    },
    "&:hover fieldset": {
      borderColor: "aqua",
    },
    "&.Mui-focused fieldset": {
      borderColor: "aqua",
    },
  },
})
