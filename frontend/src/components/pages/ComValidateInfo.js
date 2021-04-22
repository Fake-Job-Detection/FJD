import React from "react";
import company from "./Company";


export default function ComValidateInfo(values) {
    let errors = {};
  
    if (!values.Name.trim()) {
      errors.Name = 'Name required';
    }
    if (!values.CMP_Name.trim()) {
      errors.CMP_Name = 'Company Name required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.confirmpassword) {
      errors.confirmpassword = 'Password is required';
    } else if (values.confirmpassword !== values.confirmpassword) {
      errors.confirmpassword = 'Passwords do not match';
    }
    return errors;
  }
  