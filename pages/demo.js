import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { initializeStore } from './redux/store';
// import { wrapper } from './redux/store';
import styles from '../styles/Home.module.css';

import {
  decrementCounter,
  incrementCounter,
  getFakeData,
} from './redux/actions/counter';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 16,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch(getFakeData());
  // const counter = useSelector(state => state.counter);

  console.log('GGGGGGDADAD');
  console.log(reduxStore.getState());

  return { props: { initialReduxState: reduxStore.getState() } };
}

// ---------------------
function Demo(props) {
  console.log(props);

  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    // console.log('doing in useEffect');
    // only dispatch action if
    // dispatch(getFakeData());
  }, [dispatch]);

  const counter = useSelector(state => state.counter);
  // console.info('dakhdkahdkad');
  // console.log(counter);

  return (
    <>
      <div className={styles.container}>
        {/* <div>count: {props.counter}</div> */}
        {/* <div>
          <Button
            variant="contained"
            color="primary"
            onClick={props.incrementCounter}
          >
            Increment
          </Button>
        </div> */}

        <div>
          {counter.data &&
            counter.data.length > 0 &&
            counter.data.map(weather => (
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(getFakeData())}
          >
            GET
          </Button>
        </div>
      </div>
    </>
  );
}

export default Demo;

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     store.dispatch(serverRenderClock(false));
//     console.log('in getstaticprops');
//     store.dispatch(incrementCounter());
//     store.dispatch(getFakeData());
//   }
// );

// function Demo(props) {
//   const classes = useStyles();

//   return (
//     <div className={styles.container}>
//       <div>count: {props.counter}</div>
//       <div>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={props.incrementCounter}
//         >
//           Increment
//         </Button>
//       </div>

//       <div>
//         {props.data &&
//           props.data.length > 0 &&
//           props.data.map(weather => (
//             <Card className={classes.root} key={weather.id}>
//               <CardContent>
//                 <div>{weather.id}</div>
//                 <div>{weather.title}</div>
//                 <div>{weather.body}</div>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           ))}
//         {/* <div>User ID: {props.data.userId}</div>
//         <div>Title: {props.data.title}</div>
//         <div>Completed: {props.data.completed}</div> */}

//         <Button variant="contained" color="primary" onClick={props.getFakeData}>
//           GET
//         </Button>
//       </div>
//     </div>
//   );
// }
// const mapStateToProps = state => ({
//   counter: state.counter.value,
//   data: state.counter.data ? state.counter.data : {},
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     incrementCounter: () => dispatch(incrementCounter()),
//     decrementCounter: decrementCounter,
//     getFakeData: () => dispatch(getFakeData()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Demo);
