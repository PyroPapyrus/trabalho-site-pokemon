import { Box, Button, Container, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountCircle, Key } from "@mui/icons-material";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [isValidated, setIsValidated] = useState(false);

  const navigate = useNavigate();


  const handleValidate = () => {
    console.log('Email:', email);  // Adicionando logs de depuração
    console.log('Password:', password);

    if (!email || !password) {
      setError('Ambos os campos devem ser preenchidos');
      setIsValidated(false);
    } else if (password.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres');
      setIsValidated(false);
    } else {
      setError('');
      setIsValidated(true);
    }
  };

  const handleLogin = () => {
    navigate("/pokedex");
  };

  return (
    <div>
      <NavBar hideSearch navigable/>
      <Container
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
            width="60%"
            height="60%"
            marginBottom="40px"
          />

        
          <TextField
            id="email"
            
            label="Email"
            type="search"
            variant="standard"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ), }}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Key/>
                    </InputAdornment>
                )
            }}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center">

          <Box margin={2}>

                <Button
                color="primary"
                variant="contained"
                onClick={handleLogin}
                disabled={!isValidated}
                >
                Log In
                </Button>
            
         </Box>

          <Box margin={2}>
            
          <Button
                color="primary"
                variant="contained"
                onClick={handleValidate}
                >
                verify
                </Button>
          </Box>
                    </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LogIn;
