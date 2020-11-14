import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { initializeStore } from './redux/store';
import LoadingOverLay from '../components/LoadingOverLay';
// import styles from "../styles/Home.module.css";

import {
  decrementCounter,
  incrementCounter,
  getFakeData,
} from './redux/actions/counter';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  container: {},
  root: {
    minWidth: 275,
    margin: 16,
  },
  title: {
    fontSize: 14,
  },
});

// must use 'async await' for async redux thunk functions
// getServerSideProps is to fetch data from server side first
export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  await dispatch(getFakeData());
  return { props: { initialReduxState: reduxStore.getState() } };
}

function Demo(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    // only dispatch action when first load
    // dispatch(getFakeData());
  }, [dispatch]);

  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(getFakeData())}
      >
        GET
      </Button>

      <div>
        {counter.data &&
          counter.data.length > 0 &&
          counter.data.map((weather) => (
            <Card className={classes.root} key={weather.id}>
              <CardContent>
                <div>{weather.id}</div>
                <div>{weather.title}</div>
                <div>{weather.body}</div>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
      </div>

      {counter.isFetching && <LoadingOverLay />}
    </div>
  );
}

export default Demo;
