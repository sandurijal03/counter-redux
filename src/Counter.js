import React from 'react';
import { connect } from 'react-redux';
import { DECREASE, INCREASE, RESET } from './actions';

function Counter(props) {
  // const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <h1>Counter</h1>
      <p className='counter'>{props.count}</p>
      <div className='buttons'>
        <button
          className='btn'
          type='button'
          onClick={() => props.dispatch({ type: DECREASE })}
        >
          decrease
        </button>
        <button
          className='btn'
          type='button'
          onClick={() => props.dispatch({ type: RESET })}
        >
          reset
        </button>
        <button
          className='btn'
          type='button'
          onClick={() => props.dispatch({ type: INCREASE })}
        >
          increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { count: state.count, name: state.name };
}

export default connect(mapStateToProps)(Counter);
