import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'Black',
    },
    '& label.Mui-error': {
        color: 'Red',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'Black',
    },
    '& .MuiInput-underline-error:after': {
        borderBottomColor: 'Black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'Black',
        },
        '& Mui-error': {
            color: 'Red',
        },
        // '&:hover fieldset': {
        //     borderColor: 'Black',
        // },
        '&.Mui-focused fieldset': {
            borderColor: 'Black',
            color: 'Black'
        },
        '&.Mui-error fieldset': {
            borderColor: 'Red',
            color: 'Red'
        }
    },
})

export default CustomTextField