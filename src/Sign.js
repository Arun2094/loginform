import { TextField } from "@mui/material";
import React from "react";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Sign.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
// import Customerdetails from "./Customerdetails";
function Sign() {
    const { register, formState: { errors }, handleSubmit,reset,watch } = useForm();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [tableData, setTableData] = React.useState([]);
    function onsubmit(data) {
       // console.log("data444", data)
        alert("New User Successfully Created")
        reset();
        setTableData([...tableData, data]);
        } 
    return (
        <>
            <form className="newentry" onSubmit={handleSubmit(onsubmit)}>
                <h2 className="new">New User Entry Form</h2>
                <div className="signinpage" >
                    <TextField label="FirstName" id="fname" placeholder='Enter The First Name'  {...register("fname", { required: "required", minLength: 1 })} /><span>{errors.fname?.message}</span><br></br><br></br>
                    <TextField label="LastName" id="lname" placeholder="Enter the Last Name"{...register("lname",{required:"required",minLength:1})}  /><span>{errors.lname?.message}</span><br></br><br></br>
                    <TextField label="Email" id="mail" placeholder='Enter The Mail_Id'{...register("mail",{required:"required",minLength:1})}  /><span>{errors.mail?.message}</span><br></br><br></br>
                    <TextField label="FatherName" id="faname" placeholder="Enter the Father Name"{...register("fanmae",{required:"required",minLength:1})}  /><span>{errors.mail?.message}</span><br></br><br></br>
                    <OutlinedInput
                        id="password" placeholder="Enter the Password"
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
                        label="Password" {...register("password",{required:"required",minLength:{value:3,message:"length shd be of 3"}})} /><span>{errors.password?.message}</span><br></br><br></br>
                    <OutlinedInput
                        id="Confirmpassword" placeholder="Enter the Confirm Password"
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
                        label="Password" {...register("Confirmpassword",{required:"required",minLength:{value:3,message:"length shd be of 3"},
                        validate:(val) =>{
                            if(watch('password') !== val ){
                                return ("Passwrds dont match");
                            }
                        }
                        })} /><span>{errors.Confirmpassword?.message}</span>
                    <Stack spacing={2} direction="row" className="submitbtn5">
                        <Button type="submit" variant="contained">Submit</Button>
                        <Button variant="Text"><Link to="/">Back</Link></Button>
                    </Stack>
                    {/* <Customerdetails/> */}
                </div>
            </form>
        </>
    );
}
export default Sign;