import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import styles from '../styles/Home.module.css';
import { decrementCounter, incrementCounter } from './redux/actions/counter';

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
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
