import React from "react";
import { Card } from "@mui/material";
import { Paper } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Nav from "../SharedComponent/Nav";

function DonateFood() {
  return (
    <>
      <Nav sx={{ margin: "15px" }} />
      <div className="container">
        <Card sx={{ marginTop: "45px", maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_9uR-cJAKb1vQJ2xjqz10s6MeRrGX5OqmQ&s"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{color:'green'}}>
                DONATE
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Empowering Communities by Connecting Surplus Food to Those in
                need.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Paper elevation={3} sx={{ marginTop: "10px", padding: "30px", borderRadius:"10px"}}>
          <h2 style={{color:'green'}}>Details</h2>
          <div>
            <form>
            <TextField
                label="Food Name"
                variant="outlined"
                placeholder="Rice, Yam, Apple e.t.c"
                sx={{ marginTop: "10px" }}
                fullWidth={true}
              />
                <TextField
                label="Food Type"
                variant="outlined"
                placeholder="Grain, Tubber, Vegetables e.t.c"
                sx={{ marginTop: "10px" }}
                fullWidth={true}
              />
              <TextField
                label="Location"
                variant="outlined"
                placeholder="Grain, Tubber, Vegetables e.t.c"
                sx={{ marginTop: "10px" }}
                fullWidth={true}
              />
            
              <TextField
                label="Date and Time"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                fullWidth={true}
              />
              <TextField
                label="Quantity"
                variant="outlined"
                className="TextField"
                sx={{ marginTop: "10px" }}
                fullWidth={true}
              />
              <div>
                <Button
                  href="/dashboard"
                  variant="contained"
                  className="cta-button"
                  fullWidth={true}
                  sx={{ marginTop: "10px" }}
                  color="success"
                >
           
                  Donate
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default DonateFood;
