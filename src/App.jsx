import * as React from 'react';
import './App.css'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {

  return (
    <>
      <Container >
        <h1> Cadastro </h1>
        <Stack spacing={2}>
          <Stack spacing={2} direction={"row"}> 
          <TextField required id="outlined-basic" label="Nome" variant="outlined" />
          <TextField required id="outlined-basic" label="Sobrenome" variant="outlined" />
          </Stack>
          <TextField required id="outlined-basic" label="Email" variant="outlined" />
          <TextField required id="outlined-basic" label="Telefone" variant="outlined" />
          <TextField required id="outlined-basic" label="Mensagem" variant="outlined" multiline rows={4}/>
          <Button variant="contained">Cadastrar</Button> 
        </Stack>
      </Container>
    </>
  )
}

export default App
