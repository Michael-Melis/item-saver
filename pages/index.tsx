import Button from '@mui/material/Button';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { iconAction } from '../store/iconSlice';

const Home = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const icon = useAppSelector((state) => state.icon.icon);

  const handleClick = () => {
    setIsError(!isError);
    dispatch(isError ? iconAction.iconSun() : iconAction.iconMoon());
  };
  return (
    <div
      className={`m-4 p-16 ${
        icon === 'moon' ? 'bg-secondary' : 'bg-gray-light'
      }`}>
      <h1 className='text-center text-success md:text-orange'>
        {isError ? 'MIkooo' : 'Patulda'}
      </h1>
      <Button onClick={handleClick}>Click me </Button>
    </div>
  );
};
export default Home;
