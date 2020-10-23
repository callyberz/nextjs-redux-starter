import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { wrapper } from './redux/store';
import styles from '../styles/Home.module.css';
import {
  decrementCounter,
  incrementCounter,
  getFakeData
} from './redux/actions/counter';

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    // store.dispatch(serverRenderClock(false));
    console.log('in getstaticprops');
    store.dispatch(incrementCounter());
    store.dispatch(getFakeData());
  }
);

function Demo(props) {
  return (
    <div className={styles.container}>
      <div>count: {props.counter}</div>
      <div>
        <Button
          variant='contained'
          color='primary'
          onClick={props.incrementCounter}
        >
          Increment
        </Button>
      </div>

      <div>
        <div>User ID: {props.data.userId}</div>
        <div>Title: {props.data.title}</div>
        <div>Completed: {props.data.completed}</div>

        <Button variant='contained' color='primary' onClick={props.getFakeData}>
          GET
        </Button>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  counter: state.counter.value,
  data: state.counter.data ? state.counter.data : {}
});

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: decrementCounter,
    getFakeData: () => dispatch(getFakeData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);

// import { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import Page from '../components/Page'
// import { addCount } from '../store/count/action'
// import { wrapper } from '../store/store'
// import { serverRenderClock, startClock } from '../store/tick/action'

// const Index = (props) => {
//   useEffect(() => {
//     const timer = props.startClock()

//     return () => {
//       clearInterval(timer)
//     }
//   }, [props])

//   return <Page title="Index Page" linkTo="/other" />
// }
