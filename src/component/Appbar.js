import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Appbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My Task Board</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar