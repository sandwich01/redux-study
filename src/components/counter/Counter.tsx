import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../../store/features/counterFeature';
import { RootState } from '../../store/store';
import { Button } from '@mui/material';
import cls from './Counter.module.scss'

const Counter: FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={cls.CounterWrapper}>
      <div className={cls.CounterButtons}>
        <input readOnly type='number' value={count} />
        <Button variant='contained' color='success' onClick={() => dispatch(decrement())}>-</Button>
        <Button variant='contained' color='error' onClick={() => dispatch(increment())}>+</Button>
        <Button variant='contained' color='info' onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</Button>
        <Button variant='contained' color='info' onClick={() => dispatch(decrementByAmount(5))}>Decrement by 5</Button>
      </div>
    </div>
  );
};

export default Counter;
