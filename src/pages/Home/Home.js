import React from "react";
import Header1 from '../../components/header/Header1'
import { makeStyles } from '@mui/styles';
import { Box, Button, Container, Grid, IconButton, TextField, Typography } from "@mui/material";
import Header from "../../components/header/Header1";
import google from '../../components/assets/images/google.svg'
import phonepe from '../../components/assets/images/phonepe.svg'
import paytm from '../../components/assets/images/paytm.svg'
import zip from '../../components/assets/images/zip.svg'
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import user1 from '../../components/assets/images/user1.svg'
import home from '../../components/assets/images/home.svg'
import atm from '../../components/assets/images/atm.png'
import user2 from '../../components/assets/images/user2.svg'
import telegram from '../../components/assets/images/telegram.svg'
import ind from '../../components/assets/images/ind.svg'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Modal from "../../components/Modal";
import item from '../../components/assets/images/item.svg'

const useStyle = makeStyles({
    Main__div: {
        backgroundColor: '#202020',
        padding: '0rem 6rem 6rem 6rem',
        minHeight: '100vh',
        '@media(max-width : 1200px)': {
            padding: '0rem 1rem 4rem 1rem',
            '@media(max-width : 900px)': {
                padding: '0rem 2rem 4rem 2rem',
                '@media(max-width : 600px)': {
                    padding: '0rem 1rem 2rem 1rem',
                }
            }
        }
    },
    back__Button: {
        border: 'none !important',
        color: '#E91E9D !important',
        textTransform: 'initial !important',
        fontFamily: 'poppins !important',
        padding: '0px !important',
        '&:hover': {
            backgroundColor: 'transparent !important'
        }
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
    Divider: {
        backgroundColor: '#707070',
        height: '1.5rem',
        width: '1px',
        margin: '0rem 1rem'
    },
    TextField__input__main: {
        display: 'inline-flex',
        alignItems: 'baseline',
        borderBottom: '1px solid #707070',
        padding: '0.5rem 1rem',
        width: '21rem',
        '@media(max-width : 1200px)': {
            width: '16rem',
            '@media(max-width : 900px)': {
                width: '19rem',
                '@media(max-width : 600px)': {
                    width: '90%',
                }
            }
        }
    },
    TextField__input__main2: {
        display: 'inline-flex',
        alignItems: 'baseline',
        borderBottom: '1px solid #707070',
        padding: '0rem',
        '@media(max-width : 600px)': {
            width: '100%',
        }
    },
    TextField__input__main3: {
        display: 'flex',
        alignItems: 'baseline',
        borderBottom: '1px solid #707070',
        padding: '0.5rem 1rem',
    },
    TextField__input__main__wrap: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1.5rem',
        '@media(max-width : 600px)': {
            display: 'inherit'
        }

    },
    TextField__input__main__wrap2: {
        marginTop: '1.5rem'

    },
    box___main: {
        textAlign: 'left',

    },
    Hding: {
        padding: '3rem 0rem 2rem 0rem'
    },
    butn___Process__wrap2: {
        margin: '1.5rem 0rem 0rem 0rem',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        '@media(max-width : 600px)': {
            display: 'inherit'
        }
    },
    butn___Process__wrap: {
        margin: '1.5rem 0rem 0rem 0rem',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        '@media(max-width : 600px)': {
            display: 'inherit',
        }
    },
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
        border: '1px solid #707070 !important',
        color: '#707070 !important',
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
        },
        '&:focus': {
            backgroundColor: 'transparent !important',
            background: 'linear-gradient(0deg, #FF1060, #E71E9C)',
            color: '#fff !important',
            transition: '0.5s !important',
        }

    },
    second__step: {
        marginTop: '3rem'
    },
    btm___list: {
        marginLeft: '2rem',
        '@media(max-width : 1200px)': {
            marginLeft: '1rem',
            '@media(max-width : 900px)': {
                marginLeft: '1.8rem',
                '@media(max-width : 600px)': {
                    marginLeft: '0rem',
                    marginTop: '1rem',
                }
            }
        }
    },
    manage___Card: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #707070',
        padding: '1rem 0rem',
    },
    Grid__main: {
        paddingTop: '5rem',
        '@media(max-width : 900px)': {
            paddingTop: '2rem',
        }
    },
    product__hding: {
        margin: '1.5rem 0rem',
        textAlign: 'left'
    },
    dis__list2: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        paddingBottom: '2.5rem'
    },
    dis__list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        borderBottom: '1px solid #707070',
        paddingBottom: '1.5rem'
    },
    dis__list__items: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1.5rem'
    },
    right___main: {
        backgroundColor: '#18171C',
        borderRadius: '8px',
        padding: '1rem',
        marginTop: '5.5rem',
        '@media(max-width : 900px)': {
            marginTop: '7.5rem',
        }
    },
    atm__Img: {
        marginTop: '-5rem'
    },
    pro__item: {
        display: 'flex',
        alignItems: 'center',
        '@media(max-width : 1200px)':{
            display:'inherit'
        }
    }


})






const Home = () => {
    const classes = useStyle();
    return (
        <>

            <Box className={classes.Main__div}>
                <Header />
                <Box className={classes.Grid__main}>

                    <Grid container spacing={0}>
                        <Grid lg={7} md={8} sm={12} xs={12}>
                            <Box className={classes.box___main}>
                                <Box >
                                    <Button className={classes.back__Button} disableRipple variant="outlined" startIcon={<NavigateBeforeIcon />}>
                                        Back to card
                                    </Button>
                                </Box>
                                <Box className={classes.Hding}>
                                    <Typography fontWeight={600} color={'#fff'} fontFamily={'poppins'} variant="h3">Checkout</Typography>
                                    <Typography color={'#929292'} fontFamily={'poppins'}>a checkout is a counter where you pay for things you are buying</Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Typography fontWeight={500} color={'#fff'} fontFamily={'poppins'} variant="h5">1. Contact Information</Typography>
                                    <Modal />
                                </Box>
                                <Box className={classes.TextField__input__main__wrap}>
                                    <Box className={classes.TextField__input__main}>
                                        <Typography component={'img'} src={user1} alt="" />
                                        <Box className={classes.Divider} />
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
                                        <Typography component={'img'} src={user2} alt="" />
                                        <Box className={classes.Divider} />
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
                                            className={classes.TextField__input} id="standard-basic" label="Last Name" placeholder="Last Name" variant="standard"
                                            InputProps={{
                                                disableUnderline: true,
                                            }} />
                                    </Box>
                                </Box>

                                <Box className={classes.TextField__input__main__wrap}>
                                    <Box className={classes.TextField__input__main}>
                                        <Typography component={'img'} src={ind} alt="" />
                                        <Box className={classes.Divider} />
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
                                            className={classes.TextField__input} id="standard-basic" label="Phone Number" placeholder="Phone Number" variant="standard"
                                            InputProps={{
                                                disableUnderline: true,
                                            }} />
                                    </Box>

                                    <Box className={classes.TextField__input__main}>
                                        <Typography component={'img'} src={telegram} alt="" />
                                        <Box className={classes.Divider} />
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
                                            className={classes.TextField__input} id="standard-basic" label="Email Id" placeholder="Email Id" variant="standard"
                                            InputProps={{
                                                disableUnderline: true,
                                            }} />
                                    </Box>
                                </Box>

                                <Box className={classes.TextField__input__main__wrap2}>
                                    <Box className={classes.TextField__input__main3}>
                                        <Typography component={'img'} src={home} alt="" />
                                        <Box className={classes.Divider} />
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
                                            className={classes.TextField__input} id="standard-basic" label="Address" placeholder="Address" variant="standard"
                                            InputProps={{
                                                disableUnderline: true,
                                            }} />
                                    </Box>
                                </Box>

                                <Box className={classes.second__step}>
                                    <Box>
                                        <Typography fontWeight={500} color={'#fff'} fontFamily={'poppins'} variant="h5">2. Delivery method</Typography>
                                    </Box>
                                    <Box className={classes.butn___Process__wrap} component={'ul'}>
                                        <Box component={'li'}>
                                            <Button className={classes.List__Button} disableRipple variant="outlined" startIcon={<LocalShippingOutlinedIcon />}>
                                                Same-day
                                            </Button>
                                        </Box>

                                        <Box sx={{
                                            '@media(max-width : 600px)': {
                                                marginTop: '1rem',
                                            }
                                        }} component={'li'}>
                                            <Button className={classes.List__Button} disableRipple variant="outlined" startIcon={<DeliveryDiningOutlinedIcon />}>
                                                Express
                                            </Button>
                                        </Box>

                                        <Box
                                            sx={{
                                                '@media(max-width : 600px)': {
                                                    marginTop: '1rem',
                                                }
                                            }} component={'li'}>
                                            <Button className={classes.List__Button} disableRipple variant="outlined" startIcon={<RadioButtonCheckedOutlinedIcon />}>
                                                Normal
                                            </Button>
                                        </Box>

                                        <Box sx={{
                                            '@media(max-width : 600px)': {
                                                marginTop: '1rem',
                                            }
                                        }} component={'li'}>
                                            <Box className={classes.TextField__input__main2}>
                                                <Typography component={'img'} src={zip} alt="" />
                                                <Box className={classes.Divider} />
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
                                                    className={classes.TextField__input} id="standard-basic" label="Zip Code" placeholder="Zip Code" variant="standard"
                                                    InputProps={{
                                                        disableUnderline: true,
                                                    }} />
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box className={classes.second__step}>

                                        <Box>
                                            <Typography fontWeight={500} color={'#fff'} fontFamily={'poppins'} variant="h5">3. Payment Method</Typography>
                                        </Box>

                                        <Box className={classes.butn___Process__wrap2} component={'ul'}>
                                            <Box component={'li'}>
                                                <Button className={classes.List__Button} disableRipple variant="outlined" startIcon={<Typography component={'img'} src={google} alt="" />}>
                                                    Pay
                                                </Button>
                                            </Box>

                                            <Box className={classes.btm___list} component={'li'}>
                                                <Button className={classes.List__Button} disableRipple variant="outlined" startIcon={<Typography component={'img'} src={paytm} alt="" />}>
                                                    Paytm
                                                </Button>
                                            </Box>

                                            <Box className={classes.btm___list} component={'li'}>
                                                <Button className={classes.List__Button} disableRipple variant="outlined" startIcon={<Typography component={'img'} src={phonepe} alt="" />}>
                                                    PhonePay
                                                </Button>
                                            </Box>


                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid lg={1.5} md={0.5} sm={0} xs={0}></Grid>
                        <Grid lg={3.5} md={3.5} sm={12} xs={12}>
                            <Box className={classes.right___main}>
                                <Box>
                                    <Box className={classes.atm__Img}><Typography component={'img'} src={atm} alt="" width={'100%'} /></Box>
                                </Box>
                                <Box className={classes.manage___Card}>
                                    <Box>
                                        <Typography color={'#fff'} fontFamily={'poppins'}>Manage Cards</Typography>
                                    </Box>
                                    <Box>
                                        <IconButton sx={{ color: '#fff' }} disableRipple aria-label="delete">
                                            <EastOutlinedIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Box className={classes.pro__item}>
                                    <Box sx={{
                                        '@media(max-width : 1200px)':{
                                            textAlign:'left',
                                            marginTop:'1.5rem'
                                        }
                                    }}><Typography component={'img'} src={item} alt="" width={85} /></Box>
                                    <Box width={20}/>
                                    <Box className={classes.product__hding}>

                                        <Typography fontWeight={600} color={'#fff'} fontFamily={'poppins'} variant="h6">Casual T-shirt for men</Typography>
                                        <Typography color={'#fff'} fontFamily={'poppins'} fontSize={'14px'}>The Trunk Checks Red Shirt has an
                                            exquisitely smooth weave for year-round </Typography>
                                    </Box>
                                </Box>

                                <Box className={classes.dis__list} component={'ul'}>
                                    <Box className={classes.dis__list__items} component={'li'}>
                                        <Typography color={'#707070'} fontFamily={'poppins'}>Subtotal</Typography>
                                        <Typography color={'#fff'} fontFamily={'poppins'}>$5.00</Typography>
                                    </Box>

                                    <Box className={classes.dis__list__items} component={'li'}>
                                        <Typography color={'#707070'} fontFamily={'poppins'}>Discount</Typography>
                                        <Typography color={'#fff'} fontFamily={'poppins'}>$3.00(%02)</Typography>
                                    </Box>

                                    <Box className={classes.dis__list__items} component={'li'}>
                                        <Typography color={'#707070'} fontFamily={'poppins'}>Delivery Service</Typography>
                                        <Typography color={'#fff'} fontFamily={'poppins'}>Free</Typography>
                                    </Box>


                                </Box>

                                <Box className={classes.dis__list2} component={'ul'}>
                                    <Box className={classes.dis__list__items} component={'li'}>
                                        <Typography color={'#707070'} fontFamily={'poppins'}>Total</Typography>
                                        <Typography fontWeight={700} variant="h6" color={'#fff'} fontFamily={'poppins'}>$3.00</Typography>
                                    </Box>
                                </Box>

                                <Button fullWidth className={classes.pay___btn} variant="contained" endIcon={<EastOutlinedIcon />}>
                                    Pay
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>



        </>
    )
}

export default Home