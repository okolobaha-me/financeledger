import { useForm } from 'react-hook-form';
import {
   Button,
   Error,
   Input,
   InputsWrapper,
   Label,
   LabelTitle,
} from './Form.styled';
import { Warn } from '../Icons/Warn';
import { useState } from 'react';

export const Form = () => {
   const [focus, setFocus] = useState(null);

   const handleBlur = () => {
      setFocus(null);
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = data => console.log(data);

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <InputsWrapper>
            <Label htmlFor={'name'}>
               <LabelTitle isFocus={focus === 'name'}>
                  Enter your name
               </LabelTitle>
               <Input
                  id={'name'}
                  type="text"
                  {...register('name')}
                  onFocus={() => setFocus('name')}
                  onBlur={handleBlur}
               />
            </Label>
            <Label htmlFor={'email'}>
               <LabelTitle isFocus={focus === 'email'}>Enter email*</LabelTitle>
               <Input
                  id={'email'}
                  type="text"
                  {...register('email', {
                     required: 'This is a required field',
                     pattern: {
                        message: 'Please enter a valid email',
                        value: /^\S+@\S+$/i,
                     },
                  })}
                  onFocus={() => setFocus('email')}
                  onBlur={handleBlur}
               />
               {errors.email?.message && (
                  <Error>
                     <Warn />
                     {errors.email?.message}
                  </Error>
               )}
            </Label>
         </InputsWrapper>

         <Button type={'submit'}>Send</Button>
      </form>
   );
};
