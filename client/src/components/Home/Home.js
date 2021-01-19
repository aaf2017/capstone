import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import FormQ from '../Forms/FormQ';
import useStyles from './styles';


const Home = () => {
     //const [currentId, setCurrentId] = useState(null);
     const classes = useStyles();
     const dispatch = useDispatch();
 
     useEffect(() => {
         dispatch(getPosts());
     }, [/*currentId,*/dispatch]);
     return(
        <Grow in>
            <Container className={classes.appBody}>  
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={9}>
                    <Posts /*setCurrentId={setCurrentId}*//>
                    </Grid>
                    <Grid gutterItem xs={12} sm={3}>
                        <FormQ /*currentId={currentId} setCurrentId={setCurrentId}*//>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
                
    );
}

export default Home;