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
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 20,
        },
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
    downTitleBox: {
        textAlign: 'center'
    },
    notebookImgBox: {

    }
}))

const Notebook = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Box className={classes.titleBox}>
                <Typography className={classes.textStyles} variant="h4">
                    Найди команду единомышленников
                </Typography>
                <Grid lg={6} sm={12} md={6} xl={6} xs={12} className={classes.downTitleBox}>
                    <Typography variant="body1" style={{ marginTop: 15 }}>
                        Ищешь команду для стартапа или хакатона? Найди участников в команду или собери прямо на платформе!
                    </Typography>
                </Grid>
            </Box>
            <Box className={classes.notebookImgBox}>
                <img src={'image/screen.png'} style={{ width: '100%', height: '100%' }} />
            </Box>
        </Container>
    )
}

export default Notebook