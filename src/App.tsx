// prettier-ignore
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery
} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import {makeStyles} from "@material-ui/styles";
import * as React from "react";
import {Route, Router} from "react-router-dom";
import {history} from "./configureStore";
import {withRoot} from "./withRoot";
import {HomePage, TodoPage} from "./pages";
import {goHome} from "./routing/RoutingHelper";

function Routes() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Route exact={true} path="/" component={HomePage}/>
            <Route exact={true} path="/todo" component={TodoPage}/>
        </div>
    );
}

// function Drawer(props: { todoList: Todo[], handleDrawerToggle: () => void; }) {
//     const classes = useStyles();
//
//     return (
//         <div>
//             <div className={classes.drawerHeader}/>
//             <Divider/>
//             <List>
//                 <ListItem button onClick={() => {
//                     goHome();
//                     props.handleDrawerToggle();
//                 }}>
//                     <ListItemIcon>
//                         <HomeIcon/>
//                     </ListItemIcon>
//                     <ListItemText primary="Home"/>
//                 </ListItem>
//             </List>
//             <Divider/>
//             {/*<List>*/}
//             {/*<ListItem button onClick={() => history.push("/todo")}>*/}
//             {/*<ListItemIcon>*/}
//             {/*<TodoIcon todoList={props.todoList} />*/}
//             {/*</ListItemIcon>*/}
//             {/*<ListItemText primary="Todo" />*/}
//             {/*</ListItem>*/}
//             {/*</List>*/}
//         </div>
//     );
// }

function App() {
    const classes = useStyles();
    // const [mobileOpen, setMobileOpen] = React.useState(false);
    // const todoList = useSelector((state: RootState) => state.todoList);
    const isMobile = false;
    // useMediaQuery((theme: Theme) =>
    //     theme.breakpoints.down("sm")
    // );

    // const handleDrawerToggle = () => {
    //     setMobileOpen(!mobileOpen);
    // };

    return (
        <Router history={history}>
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            {/*<IconButton*/}
                            {/*color="inherit"*/}
                            {/*aria-label="open drawer"*/}
                            {/*onClick={handleDrawerToggle}*/}
                            {/*className={classes.navIconHide}*/}
                            {/*>*/}
                            {/*<MenuIcon />*/}
                            {/*</IconButton>*/}
                            <IconButton
                                color="inherit"
                                aria-label="go home"
                                onClick={() => {
                                    goHome();
                                }}
                            >
                                <HomeIcon/>
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap={isMobile}
                            >
                                TS Based mockup
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {/*<Hidden mdUp>*/}
                    {/*<DrawerMui*/}
                    {/*variant="temporary"*/}
                    {/*anchor={"left"}*/}
                    {/*open={mobileOpen}*/}
                    {/*classes={{*/}
                    {/*paper: classes.drawerPaper,*/}
                    {/*}}*/}
                    {/*onClose={handleDrawerToggle}*/}
                    {/*ModalProps={{*/}
                    {/*keepMounted: true, // Better open performance on mobile.*/}
                    {/*}}*/}
                    {/*>*/}
                    {/*<Drawer todoList={todoList} handleDrawerToggle={()=> handleDrawerToggle()} />*/}
                    {/*</DrawerMui>*/}
                    {/*</Hidden>*/}
                    {/*<Hidden smDown>*/}
                    {/*<DrawerMui*/}
                    {/*variant="permanent"*/}
                    {/*open*/}
                    {/*classes={{*/}
                    {/*paper: classes.drawerPaper,*/}
                    {/*}}*/}
                    {/*>*/}
                    {/*<Drawer todoList={todoList} handleDrawerToggle={()=> handleDrawerToggle()} />*/}
                    {/*</DrawerMui>*/}
                    {/*</Hidden>*/}
                    <Routes/>
                </div>
            </div>
        </Router>
    );
}


const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
    },
    appFrame: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        position: "absolute",
    },
    navIconHide: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    // drawerHeader: theme.mixins.toolbar,
    // drawerPaper: {
    //     width: 64,
    //     backgroundColor: theme.palette.background.default,
    //     [theme.breakpoints.up("md")]: {
    //         width: drawerWidth,
    //         position: "relative",
    //         height: "100%",
    //     },
    // },
    content: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        height: "calc(100% - 56px)",
        marginTop: 56,
        [theme.breakpoints.up("sm")]: {
            height: "calc(100% - 64px)",
            marginTop: 64,
        },
    },
}));

export default withRoot(App);
