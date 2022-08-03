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
   const [focusName, setFocusName] = useState(false);
   const [focusEmail, setFocusEmail] = useState(false);

   const handleBlurName = e => {
      if (e.currentTarget.value) return;
      setFocusName(null);
   };

   const handleBlurEmail = e => {
      if (e.currentTarget.value) return;
      setFocusEmail(null);
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
               <LabelTitle isFocus={focusName}>Enter your name</LabelTitle>
               <Input
                  id={'name'}
                  type="text"
                  {...register('name')}
                  onFocus={() => setFocusName(true)}
                  onBlur={handleBlurName}
               />
            </Label>
            <Label htmlFor={'email'}>
               <LabelTitle isFocus={focusEmail}>Enter email*</LabelTitle>
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
                  onFocus={() => setFocusEmail(true)}
                  onBlur={handleBlurEmail}
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
