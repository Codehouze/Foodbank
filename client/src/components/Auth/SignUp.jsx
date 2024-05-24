import React from 'react'
import { TextField, Button, Card } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {Link} from '@mui/material';


function SignUp() {
    return (
            <>
              <Card sx={{ bgcolor: "white", padding: "60px", borderRadius:"10px"}}>
                <FormControl>
                  {/* email  */}
                  <h2 style={{color:'green'}}> Sign Up</h2>
                  
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      fullWidth={true}
                      sx={{ marginTop: "20px" }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      fullWidth={true}
                      sx={{ marginTop: "20px" }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="email"
                      variant="outlined"
                      fullWidth={true}
                      sx={{ marginTop: "20px" }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="phone number"
                      variant="outlined"
                      fullWidth={true}
                      sx={{ marginTop: "20px" }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      type="password"
                      label="password"
                      variant="outlined"
                      size='medium'
                      fullWidth={true}
                      sx={{ marginTop: "20px" }}
                    />
                  </div>
        
                  {/* on logging seek for geo location permission */}
                  <p> </p> 
                  <Button
                    variant="contained"
                    className="cta-button"
                    color="success"
                  >
                  Sign Up
                  </Button>

                  <p>Already Have an Account? <Link href="/login">login</Link></p>
                </FormControl>
              </Card>
            </>
          );
        }

export default SignUp