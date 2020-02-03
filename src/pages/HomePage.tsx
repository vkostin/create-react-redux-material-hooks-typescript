import {Card, CardContent, Divider, Grid, List, ListItem, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import * as React from "react";
import {useGet} from "../hooks/useGet";
import {useState} from "react";
import Button from "@material-ui/core/Button";

export const HomePage = () => {
    const classes = useStyles();
    const url = "http://fathomless-wave-08869.herokuapp.com/posts"; //compileFooUrl({ fooId: this.props.fooId });

    const [loadToggle, setToggle] = useState(-1);

    const {isLoading, data, error} = useGet(url, loadToggle);

    return (
        <div className={classes.root}>
            <Card>
                <CardContent>
                    <Button onClick={() => {
                        setToggle(() => (-loadToggle));
                    }}>Load</Button>
                    <Typography>Getting data from some abstract api</Typography>
                    {isLoading && <Typography>Loading</Typography>}
                    {error && <Typography>Error</Typography>}
                    {error && <Typography variant="body2">{error}</Typography>}
                    <List>
                        {data && data.map((x: any, idx: number) =>
                            <ListItem key={idx}>
                                <Grid container>
                                    <Grid item>
                                        <Typography variant={"h4"}>{x.id} {x.title}</Typography>
                                    </Grid>
                                    <Grid item>
                                        {x.body}
                                    </Grid>
                                </Grid>
                                <Divider/>
                            </ListItem>
                        )}
                    </List>
                </CardContent>
            </Card>
        </div>
    );
};

const useStyles = makeStyles({
    root: {
        height: "100%",
        textAlign: "center",
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },

    centerContainer: {
        flex: 1,
        height: "90%",
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
        flexDirection: "column",
    },

    button: {
        marginTop: 20,
    },
});
