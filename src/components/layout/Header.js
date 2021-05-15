import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import themeMain from '../../theme'

const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Product",
        href: "/",
    },
    {
        label: "Pricing",
        href: "/",
    },
    {
        label: "About",
        href: "/",
    },
    {
        label: "Contact",
        href: "/",
    },
    {
        label: "Вход",
        href: "/",
        type: 'button'
    },
];

const useStyles = makeStyles(() => ({
    header: {
        background: themeMain.palette.background.layoutBackground,
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
        color: 'white'
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
        background: themeMain.palette.background.layoutBackground,
        color: 'white',
        height: '100%'
    },
}));

export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
    const history = useHistory()

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {femmecubatorLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div >{femmecubatorLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {

        return (<div>
            <div >{femmecubatorLogo}</div>
            {headersData.map(({ label, href }) => {
                return (
                    <Link
                        {...{
                            component: RouterLink,
                            to: href,
                            color: "inherit",
                            style: { textDecoration: "none", },
                            key: label,
                        }}
                    >
                        <MenuItem>{label}</MenuItem>
                    </Link>
                );
            })}</div>)
    };

    const femmecubatorLogo = (
        <Box className={logo}>
            <Typography variant="h6">
                Connect
           </Typography>
            <Box style={{ backgroundColor: '#7879F1', paddingLeft: 5, paddingRight: 5, borderRadius: 5, marginLeft: 5 }}>
                <Typography variant="h6">
                    IT
                </Typography>
            </Box>
        </Box>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton,
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <AppBar className={header} position="static">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}