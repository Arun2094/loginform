import React from "react";
import './Login.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DialogBox from './Dialog'
import {useForm} from 'react-hook-form';

function Loginpage() {
    const { register,formState: { errors }} = useForm();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="loginpage" >
                    <InputLabel
                        htmlFor="outlined-adornment-Username" {...register("fname", { required: "required", minLength: 1 })} autoComplete="off" >UserName<span>{errors.fname?.message}</span>
                    </InputLabel>
                    <OutlinedInput id="outlined-adornment-Username" label="Password" />
                    <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end" >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password" />
                    <Stack spacing={2} direction="row" className="submitbtn">
                    <Link to="/Mainform"><Button type="sum" variant="contained">Submit</Button></Link>
                        <Button variant="Text">Cancel</Button>
                    </Stack>
                    <Stack spacing={2} direction="row" className="submitbtn1">
                    <Link to="/Sign"> <Button variant="contained">Signin</Button></Link>
                        <Button variant="contained" onClick={handleClickOpen}>Forgot Password/Username</Button>
                        <DialogBox open={open} handleClose={handleClose}></DialogBox>
                    </Stack>
                </div>
            </Box>
        </>
    );
}

export default Loginpage;