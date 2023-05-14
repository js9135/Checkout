import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';


const useStyle = makeStyles({

    pay___btn: {
        border: 'none !important',
        backgroundColor: 'transparent !important',
        background: 'linear-gradient(0deg, #FF1060, #E71E9C)',
        color: '#fff !important',
        textTransform: 'initial !important',
        fontFamily: 'poppins !important',
        padding: '0.6rem 1.8rem !important',
        borderRadius: '8px !important',
        transition: '0.5s !important',
        '&:hover': {
            backgroundColor: 'transparent !important',
            background: 'linear-gradient(0deg, #FF1060, #E71E9C)',
            color: '#fff !important',
            transition: '0.5s !important',
        }
    },
    List__Button: {
        backgroundColor: 'transparent !important',
        background: 'linear-gradient(0deg, #FF1060, #E71E9C)',
        color: '#fff !important',
        textTransform: 'initial !important',
        fontFamily: 'poppins !important',
        padding: '0.6rem 1.8rem !important',
        borderRadius: '8px !important',
        transition: '0.5s !important',
        '@media(max-width : 1200px)': {
            padding: '0.6rem 1rem !important',
            '@media(max-width : 600px)': {
                width: '100%'
            },
        },
        '&:hover': {
            backgroundColor: 'transparent !important',
            background: 'linear-gradient(0deg, #FF1060, #E71E9C)',
            color: '#fff !important',
            transition: '0.5s !important',
        }

    },
    TextField__input__main__wrap: {



    },
    TextField__input__main: {
        display: 'inline-flex',
        alignItems: 'baseline',
        borderBottom: '1px solid #707070',
        padding: '0.5rem 0rem',
        width: '100%',

    },
    TextField__input: {
        width: '100%',
        '& .MuiInput-root': {
            color: '#fff'
        },
        '& .MuiInputLabel-root': {
            color: '#707070'
        },
        "& label.Mui-focused": {
            color: "#707070"
        },
        "& label.Mui:before": {
            color: "#707070"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "transparent"
        },
        "& .MuiInput-underline:before": {
            borderBottomColor: "transparent"
        },
        "& .MuiInput-underline:hover": {
            borderBottomColor: "transparent"
        },
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: "#707070"
        },
        "& .MuiFilledInput-underline:before": {
            borderBottomColor: "#707070"
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#707070"
            }
        }
    },

})

export default function Modal() {
    const classes = useStyle();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={classes.pay___btn} variant="outlined" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog 
            sx={{
                backgroundColor:
                  "#0000",
                "& .MuiPaper-root": {
                  backgroundColor: "#2c2b2b",
                },
              }}
            open={open} onClose={handleClose}>
                <DialogTitle fontWeight={600} color={'#E91E9D '} fontFamily={'poppins'} variant="h6">Change Address</DialogTitle>
                <DialogContent>
                    <DialogContentText fontWeight={500} color={'#707070 '} fontFamily={'poppins'}>
                        To change Address to this website, please enter your address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <Box className={classes.TextField__input__main__wrap}>
                        <Box className={classes.TextField__input__main}>

                            <TextField
                                sx={{
                                    'input': {
                                        color: '#fff',
                                        '&::placeholder': {
                                            textOverflow: 'ellipsis !important',
                                            color: '#fff'
                                        }
                                    },
                                }}
                                className={classes.TextField__input} id="standard-basic" label="First Name" placeholder="First Name" variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }} />
                        </Box>

                        <Box className={classes.TextField__input__main}>

                            <TextField
                                sx={{
                                    'input': {
                                        color: '#000',
                                        '&::placeholder': {
                                            textOverflow: 'ellipsis !important',
                                            color: '#000'
                                        }
                                    },
                                }}
                                className={classes.TextField__input} id="standard-basic" label="Last Name" placeholder="Last Name" variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }} />
                        </Box>
                        <Box className={classes.TextField__input__main}>

                            <TextField
                                sx={{
                                    'input': {
                                        color: '#000',
                                        '&::placeholder': {
                                            textOverflow: 'ellipsis !important',
                                            color: '#000'
                                        }
                                    },
                                }}
                                className={classes.TextField__input} id="standard-basic" label="Phone Number" placeholder="Phone Number" variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }} />
                        </Box>
                        <Box className={classes.TextField__input__main}>

                            <TextField
                                sx={{
                                    'input': {
                                        color: '#000',
                                        '&::placeholder': {
                                            textOverflow: 'ellipsis !important',
                                            color: '#000'
                                        }
                                    },
                                }}
                                className={classes.TextField__input} id="standard-basic" label="Email Id" placeholder="Email Id" variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }} />
                        </Box>
                        <Box className={classes.TextField__input__main}>

                            <TextField
                                sx={{
                                    'input': {
                                        color: '#000',
                                        '&::placeholder': {
                                            textOverflow: 'ellipsis !important',
                                            color: '#000'
                                        }
                                    },
                                }}
                                className={classes.TextField__input} id="standard-basic" label="Address" placeholder="Address" variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }} />
                        </Box>
                        <Box className={classes.TextField__input__main}>

                            <TextField
                                sx={{
                                    'input': {
                                        color: '#000',
                                        '&::placeholder': {
                                            textOverflow: 'ellipsis !important',
                                            color: '#000'
                                        }
                                    },
                                }}
                                className={classes.TextField__input} id="standard-basic" label="Zip Code" placeholder="Zip Code" variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                }} />
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.List__Button} onClick={handleClose}>Cancel</Button>
                    <Button className={classes.List__Button} onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}