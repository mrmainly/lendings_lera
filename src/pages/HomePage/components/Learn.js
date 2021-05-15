import React from 'react'
import { Container, Box, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import themeMain from '../../../theme'

const useStyles = makeStyles((theme) => ({
    textStyles: {
        color: themeMain.palette.textColor.black,
        textAlign: 'center'
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginBottom: 100,
        flexDirection: 'column'
    },
    container: {
        mimHeight: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: 50,
        marginTop: 100
    },
    logoBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'left',
        },
    },
    cards: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginTop: 30
        },
    },
    logoStyle: {
        height: 100,
        width: 100,
        marginTop: 15
    },
    downTitleBox: {
        textAlign: 'center'
    },
    textBox: {
        marginTop: 15,
        width: '60%',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    }
}))

const Learn = () => {
    const classes = useStyles()
    const object = [
        {
            logo: '/image/logos_b.png',
            title: 'смарт',
            description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
        },
        {
            logo: '/image/Vector5.png',
            title: 'академипроит',
            description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
        },
        {
            logo: '/image/logos.png',
            title: 'итбуткемп',
            description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
        }
    ]
    return (
        <Container className={classes.container}>
            <Box className={classes.titleBox}>
                <Typography className={classes.textStyles} variant="h4">
                    Обучайся
                </Typography>
                <Grid lg={6} sm={12} md={6} xl={6} xs={12} className={classes.downTitleBox}>
                    <Typography variant="body1" style={{ marginTop: 15 }}>
                        Most calendars are designed for teams. Slate is designed for freelancers
                    </Typography>
                </Grid>
            </Box>
            <Grid container className={classes.cards}>
                {object.map((item, index) => (
                    <Grid item key={index} lg={3} sm={10} md={3} xl={3} xs={10} className={classes.card}>
                        <Box>
                            <Typography variant="body2" >
                                {item.title}
                            </Typography>
                        </Box>
                        <Box>
                            <img src={item.logo} className={classes.logoStyle} />
                        </Box>
                        <Box className={classes.textBox}>
                            <Typography>
                                {item.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Learn