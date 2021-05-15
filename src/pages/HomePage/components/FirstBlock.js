import React from 'react'
import { Container, Box, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ButtonCustom from '../../../components/ButtonCustom'
import themeMain from '../../../theme'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 200,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
    textStyles: {
        color: themeMain.palette.textColor.default,
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 50,
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            paddingLeft: 0
        },
    },
    grayPanel: {
        width: '100%',
        backgroundColor: '#E2E3E5',
        padding: '5px 0px 5px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 5,
        [theme.breakpoints.down('sm')]: {
            borderTopLeftRadius: 5,
        },
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
    grayPanelInside: {
        backgroundColor: 'white',
        width: '100%',
        height: 15,
        marginRight: 5,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 5
        },
    },
    img: {
        width: '100%',
        height: 500,
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        [theme.breakpoints.down('sm')]: {
            height: 400
        },
        [theme.breakpoints.down('xs')]: {
            height: 300
        },
    }
}))

const FirstBlock = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container}>
            <Grid item lg={4} sm={8} md={4} xl={4} xs={8} >
                <Box className={classes.grayPanel}><Box className={classes.grayPanelInside}></Box></Box>
                <Box>
                    <img src={'/image/SCREENMASK.png'} className={classes.img} />
                </Box>
            </Grid>
            <Grid item lg={8} sm={12} md={8} xl={8} xs={12} className={classes.content}>
                <Box style={{ marginTop: 20 }}>
                    <Typography variant="h4" className={classes.textStyles}>
                        LearnIT - мост между<br /> IT специалистами и обучающимися
                    </Typography>
                </Box>
                <Box style={{ marginTop: 20 }} >
                    <Typography variant="body2" className={classes.textStyles}>
                        Most calendars are designed for teams.<br /> Slate is designed for freelancers
                    </Typography>
                </Box>
                <Box>
                    <ButtonCustom text='Регистрация' />
                </Box>
            </Grid>
        </Grid>
    )
}

export default FirstBlock