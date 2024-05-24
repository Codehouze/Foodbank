import React from "react";
import { TextField, Button, Card } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {Link} from "@mui/material";

function Login() {
  return (
    <>
      <Card sx={{ bgcolor: "primary", padding: "60px", borderRadius:"10px"}} raised={true}>
        <FormControl>
          {/* email  */}
          <h2 style={{color:'green'}}> Welcome Back!</h2>
          
          <div>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              fullWidth={true}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              type="password"
              label="password"
              variant="outlined"
              fullWidth={true}
              sx={{ marginTop: "20px" }}
            />
          </div>

          {/* on logging seek for geo location permission */}
          {/* <Link sx={{justifyItem:"left" }}href="/forget-password">Forget Password? </Link>  */}
          <Button
          href="/dashboard"
            variant="contained"
            className="cta-button"
            sx={{ marginTop: "10px", marginButton: "10px" }}
            color="success"
          >
            Login
          </Button>
          <p>or continue with</p>
          <div>
            <Button>Google </Button>
            <Button>Google </Button>
            <Button>Google </Button>
          </div>
          <p>Don't have an account yet? <Link href="/signup">SignUp</Link> for free</p>
        </FormControl>
      </Card>
    </>
  );
}

export default Login;
