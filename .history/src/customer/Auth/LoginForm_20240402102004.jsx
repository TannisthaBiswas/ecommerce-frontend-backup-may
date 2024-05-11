import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
//import { getUser, login } from "../../../Redux/Auth/Action";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../State/Auth/Action";


const LoginForm = ({ handleNext }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const jwt = localStorage.getItem("jwt");
  //const [openSnackBar, setOpenSnackBar] = useState(false);
  //const { auth } = useSelector((store) => store);
  //const handleCloseSnakbar = () => setOpenSnackBar(false);


  {/*useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt))
    }

  }, [jwt])


  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true)
  }, [auth.user]);*/}


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),

    }
    dispatch(login(userData));
    console.log("login user", userData);

    

  };

  return (
    <div className="  ">
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={              
                [
                {padding:".8rem 0", bgcolor:"#6BC77B",
                  '&:hover': {
                    color: 'white',
                    backgroundColor: '#80cca0',
                  },
                }
              ]}
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0">Don't have an account?</p>
          <Button onClick={() => navigate("/register")} className="ml-5" size="small">
            Register
          </Button>
        </div>
      </div>
      {/*<Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
        <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: '100%' }}>
          {auth.error ? auth.error : auth.user ? "Register Success" : ""}
        </Alert>
  </Snackbar>*/}
    </div>
  );
}

export default LoginForm
