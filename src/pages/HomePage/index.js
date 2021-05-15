import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../../components/layout/Layout'
import FirstBlock from './components/FirstBlock'
import Greeting from './components/Greeting'
import Notebook from './components/Notebook'
import Learn from './components/Learn'

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${"/image/Rectangle9.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 800
    }
}))
const HomePage = () => {
    const classes = useStyles()
    return (
        <Layout>
            <div className={classes.root}>
                <FirstBlock />
            </div>
            <Greeting />
            <Notebook />
            <Learn />
        </Layout>
    )
}

export default HomePage