import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adduser } from './actions/index';

const useForm = (validate) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    dispatch(adduser(values))
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm;