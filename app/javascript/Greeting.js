import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showGreeting } from './Redux';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.displayGreetings);

  useEffect(() => {
    dispatch(showGreeting())
  }, [dispatch])

  return (
    <div>{message}</div>
  )
}

export default Greeting