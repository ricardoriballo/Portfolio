import './App.scss';
import { Button, TextField } from '@material-ui/core';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


function App() {
  return (
    <div className="App">
     <AppBar position='static'>
         <Toolbar>
             <Typography>React Navbar Example</Typography>
         </Toolbar>
      </AppBar>
      <div style={{padding:"20px"}}>
      <AccountCircle/>
      </div>
        <Button  color="primary" variant="contained"> Pulsa</Button> 
        <TextField id="name" label="Name" variant="outlined" />
    </div>
  );
}

export default App;
