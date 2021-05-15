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
        marginBottom: 100
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
        [theme.breakpoints.down('sm')]: {
            marginTop: 30
        },
    },
    logoStyle: {
        height: 50,
        width: 50,
    }
}))

const Greeting = () => {
    const classes = useStyles()
    const object = [
        {
            logo: '/image/logo4.png',
            title: 'Заполни профиль и мы составим резюме',
            description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
        },
        {
            logo: '/image/logo2.png',
            title: 'Проходи тесты и получай баллы',
            description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
        },
        {
            logo: '/image/logo3.png',
            title: 'Подбор подходящих вакансий',
            description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
        }
    ]
    return (
        <Container className={classes.container}>
            <Box className={classes.titleBox}>
                <Typography className={classes.textStyles} variant="h4">
                    Есть навыки, но не знаешь как трудоустроиться? Мы поможем!
                </Typography>
            </Box>
            <Grid container className={classes.cards}>
                {object.map((item, index) => (
                    <Grid item key={index} lg={3} sm={10} md={3} xl={3} xs={10} className={classes.card}>
                        <Box className={classes.logoBox}>
                            <img src={item.logo} className={classes.logoStyle} />
                            <Typography variant="h6" style={{ marginLeft: 10, fontWeight: 'bold' }}>
                                {item.title}
                            </Typography>
                        </Box>
                        <Box style={{ marginTop: 15 }}>
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

export default Greeting