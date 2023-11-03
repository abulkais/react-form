import React, { useState } from 'react'
import Input from './Form-fields/Input'


function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const fromfield = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
      pattern: "[A-Za-z0-9]{3,16}$",
      errorMessage: "Username should be 3-16 characters and should not include any special character!",
      autocomplete: "off"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      autocomplete: "off",
      errorMessage: "it should be valid Email Address"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      autocomplete: "off",
      errorMessage: "Password should be 8-20 charcter and includes 1 letter , 1 number and 1 special charcter",
      pattern: `!@#$%^&*()-_+={}[]|\;:"<>,./?`
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Conform Password",
      label: "Conform Password",
      required: true,
      autocomplete: "off",
      errorMessage: "text password should be match",
      pattern: values.password,
    }

  ];
  const onChange = (e) => {
    // console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {
          fromfield.map(field => (
            <Input key={field.id} {...field} onChange={onChange} value={values[field.name]} />
          ))}
        <button className='button'>submit</button>
      </form >
    </>
  )
}

export default App
