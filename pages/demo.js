import { useState } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { decrementCounter, incrementCounter } from './redux/actions/counter';

function Demo(props) {
  console.log('GGGG');
  console.log(props);

  return (
    <div className={styles.container}>
      <div>count: {props.counter}</div>
      <div>
        <button onClick={props.incrementCounter}>Increment</button>
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
