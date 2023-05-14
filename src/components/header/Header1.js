import React from "react";
import { Box, Typography, } from "@mui/material";
 
import { Link, NavLink } from "react-router-dom";
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import { makeStyles } from '@mui/styles';
import bell from '../assets/images/bell.svg'
import Glyph from '../assets/images/Glyph.svg'
import search from '../assets/images/search.svg'
import profile from '../assets/images/profile.svg'
import bag from '../assets/images/bag.svg'
import logo from '../assets/images/logo.svg';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";


const useStyle = makeStyles({

  Nav___MainDiv: {
    display: 'flex',
    margin: '0',
    listStyle: 'none',
    alignItems: 'center'
  },
  Header___bg: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.5rem 0rem',
    alignItems: 'center',
    borderBottom: '1px solid #e91e9d8c',
    '@media(max-width : 900px)': {
      display: 'none'
    }
  },

  Hilight:{
    color:'#E91E9D',
    marginLeft:'30px',
    textDecoration:'none',
    fontFamily:'poppins'
  },
  mob__nav: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },


})












const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Header = () => {


  const [open, setOpen] = React.useState(false);
   

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? '#fff' : '#E91E9D',
      transition: '0.5s',
      display: 'block',
      fontSize: '15px',
      textAlign: 'center',
      textDecoration:'none',
      marginLeft:'30px',
      fontFamily:'poppins'
    }
  }

  const classes = useStyle();

  return (
    <>
      <Box>
        <Box className={classes.Header___bg}>

          <Box >
            <Link className={classes.link__logo} to="/">
              <Typography component={'img'} src={logo} />
            </Link>
          </Box>

          <Box className={classes.Nav___MainDiv} >
            <NavLink style={navLinkStyles} to="#">Home</NavLink>
            <NavLink style={navLinkStyles} to="#">New Items</NavLink>
            <NavLink style={navLinkStyles} to="#">Support</NavLink>
            <NavLink style={navLinkStyles} to="#">About</NavLink>
            <NavLink style={navLinkStyles} to="#">Contact</NavLink>
            <NavLink className={classes.Hilight} to="#">Need help?</NavLink>
          </Box>


          <Box className={classes.Nav___MainDiv} >
            <NavLink className={classes.Hilight} to="#">[4 items]</NavLink>
            <NavLink style={navLinkStyles} to="#"><Typography component={'img'} src={bag} alt=""/></NavLink>
            <NavLink style={navLinkStyles} to="#"><Typography component={'img'} src={profile} alt=""/></NavLink>
          </Box>

        </Box>

        <Box
          sx={{
            display: "none",
            "@media(max-width : 900px)": { display: "block" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1.5rem 0rem 1rem 0rem",
              alignItems: "center",
              "@media(max-width : 600px)": { padding: "1rem 0rem 0rem 0rem" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                 width:'100%',
                 alignItems:'center'
               
              }}
            >
              <Box>
                <Link to="/">
                  {" "}
                  <Typography
                    component={"img"}
                    src={logo}
                    width={"100px"}
                  />
                </Link>
              </Box>
              <Box onClick={handleClickOpen}>
                <MenuIcon
                  sx={{ color: "#E91E9D", cursor: "pointer", fontSize: "30px" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          sx={{
            backgroundImage:
              "linear-gradient(45deg, #716449, #ccb483, #716449)",
            "& .MuiPaper-root": {
              backgroundColor: "#000",
            },
          }}
        >
          <AppBar
            sx={{
              position: "relative",
              backgroundColor: "#000",
              boxShadow: "none",
            }}
          >
            <Toolbar
              sx={{
                backgroundColor: "#000",
                boxShadow: "none",
                justifyContent: "right",
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box sx={{ textAlign: "center", display: "grid", gap: "20px" }}>
            <NavLink className={classes.mob__nav} onClick={handleClose} to="#">
              Home
            </NavLink>
            <NavLink to="#" className={classes.mob__nav} onClick={handleClose}>
            New Items
            </NavLink>
            <NavLink to="#" className={classes.mob__nav} onClick={handleClose} >
            Support
           </NavLink>

            <NavLink  className={classes.mob__nav} onClick={handleClose} to="#">
              About
            </NavLink>

            <NavLink  className={classes.mob__nav} onClick={handleClose} to="#">
              Contact
            </NavLink>

            <NavLink  className={classes.mob__nav} onClick={handleClose} to="#">
              Need help?
            </NavLink>

            <NavLink className={classes.mob__nav} onClick={handleClose} to="#">[4 items]</NavLink>
            <NavLink className={classes.mob__nav} onClick={handleClose} to="#"><Typography component={'img'} src={bag} alt=""/></NavLink>
            <NavLink className={classes.mob__nav} onClick={handleClose} to="#"><Typography component={'img'} src={profile} alt=""/></NavLink>
          </Box>
        </Dialog>
      </Box>












    </>
  )
}

export default Header;