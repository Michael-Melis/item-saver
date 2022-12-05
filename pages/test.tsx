import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import H1 from '../components/elements/headers/Header1';
import H4 from '../components/elements/headers/Header4';

const Test = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstCarName: null,
      firstCarAge: null,
      secondCarName: null,
      secondCarAge: null,
    },
  });
  const [result, setResult] = useState<any>('');

  const thisYear = 2022;
  const carAge = (age: number) => thisYear - age;

  const whichCarsIsOlder = (
    firstCarName: string,
    firstCarAge: number,
    secondCarName: string,
    secondCarAge: number,
  ) =>
    // eslint-disable-next-line no-nested-ternary, implicit-arrow-linebreak
    (carAge(firstCarAge) - carAge(secondCarAge) > 0
      ? `${firstCarName} je ročník: ${carAge(
        firstCarAge,
      )} a je starsie ako ${secondCarName}`
      : carAge(firstCarAge) - carAge(secondCarAge) < 0
        ? `${secondCarName} je ročník: ${carAge(
          secondCarAge,
        )}  a je starsie ako ${firstCarName}`
        : `${secondCarName} je ročník: ${carAge(
          secondCarAge,
        )}  a je rovnako stare ako ${firstCarName}`);

  const handleCarCompare = (data: {
    firstCarName: string | null;
    firstCarAge: number | null;
    secondCarName: string | null;
    secondCarAge: number | null;
  }) => {
    setResult(
      whichCarsIsOlder(
        data.firstCarName || '',
        data.firstCarAge || 0,
        data.secondCarName || '',
        data.secondCarAge || 0,
      ),
    );
  };
  return (
    <div className='min-h-screen   flex flex-col justify-center items-center'>
      <form
        className='flex mb-10 flex-col items-center '
        onSubmit={handleSubmit(handleCarCompare)}>
        <H1 content='Please fill all inputs for card comparision' />
        <div className='flex  my-4'>
          <div className='flex items-center  flex-col m-2 w-56'>
            <H4 content='First car details' />
            <TextField
              variant='outlined'
              {...register('firstCarName', { required: true })}
              type='text'
              error={!!errors?.firstCarName}
              placeholder='Name of the first car'
            />
            {errors?.firstCarName
              && errors?.firstCarName?.type === 'required' && (
                <span className='text-error animate-pulse '>
                  Name of the car is required
                </span>
            )}
            <TextField
              className='mt-4'
              {...register('firstCarAge', { required: true, min: 1 })}
              type='number'
              error={!!errors?.firstCarAge}
              placeholder='Age of the first card'
            />
            {errors?.firstCarAge && errors.firstCarAge?.type === 'required' && (
              <span className='text-error animate-pulse '>
                Age of the car is required
              </span>
            )}
            {errors?.firstCarAge && errors.firstCarAge?.type === 'min' && (
              <span className='text-error animate-pulse '>
                Age of a car need to be positive number and bigger than 0
              </span>
            )}
          </div>
          <div className='border-r-2 border-gray-dark dark:border-gray-light border-dashed'></div>
          <div className='flex items-center flex-col m-2 w-56 '>
            <H4 content='Second car details' />
            <TextField
              {...register('secondCarName', { required: true })}
              type='text'
              aria-invalid={errors?.secondCarName ? 'true' : 'false'}
              error={!!errors?.secondCarName}
              placeholder='Name of the second car'
            />
            {errors?.secondCarName
              && errors?.secondCarName?.type === 'required' && (
                <span className='text-error animate-pulse '>
                  Name of the car is required
                </span>
            )}
            <TextField
              className='mt-4'
              error={!!errors?.secondCarAge}
              {...register('secondCarAge', { required: true, min: 1 })}
              type='number'
              placeholder='Age of the second card'
            />
            {errors?.secondCarAge
              && errors?.secondCarAge?.type === 'required' && (
                <span className='text-error animate-pulse '>
                  Age of the car is required
                </span>
            )}
            {errors?.secondCarAge && errors?.secondCarAge?.type === 'min' && (
              <span className='text-error animate-pulse '>
                Age of a car need to be positive number and bigger than 0
              </span>
            )}
          </div>
        </div>
        <div className='flex flex-col'>
          <Button
            className='bg-primary text-gray-light'
            variant='contained'
            type='submit'>
            Compare cars
          </Button>
          <Button
            className=' text-warning'
            variant='text'
            type='button'
            onClick={() => reset()}>
            Reset form
          </Button>
        </div>
      </form>
      {result && <H1 content={result} styles='animate-pulse' />}
    </div>
  );
};

export default Test;
