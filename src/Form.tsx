import { Component, ReactNode, Ref, } from 'react';
// import React from 'react';
// import PropTypes from 'prop-types';
import {TextInput} from 'react-native'
// import KeyboardAwareView from '../KeyboardAwareView';
import mapValues from 'lodash/mapValues';
// import styles from './Form.style';
// import { validateField } from '../../utils';

// export const hasErrors = errors => !!Object.keys(errors).length;

export type FormError = string | null;

export type FormErrors = {
  [key: string]: FormError;
};

export type FormValue = string | number;

export type FormValues = {
  [key: string]: FormValue;
};

export interface FormInstance {
  errors: FormErrors;
}

export type FormState = {
  values: FormValues;
  errors: FormErrors;
};

export type FormFieldConfig = {
  type: string;
  required: boolean;
  defaultValue: string | number;
  label: string;
};

export type FormConfig = {
  [key: string]: FormFieldConfig;
};

export type FormProps = {
  config: FormConfig;
  onSubmitEditingLast?: (form: FormInstance) => void;
  children: (form: FormInstance) => ReactNode;
};

export interface TextInputProps {
  name: string;
  value: string | number;
  label: string;
  inputError: string | null;
  onFocus: () => void;
  onBlur: () => void;
  onChangeText: (value: FormValue) => void;
  onSubmitEditing: () => void;
  ref: () => void;
}

export class Form extends Component<FormProps, FormState> {
  inputRefs: TextInput[];

  constructor(props: FormProps) {
    super(props);
    const values = mapValues(this.props.config, (fieldConfig: FormFieldConfig) => fieldConfig.defaultValue);
    this.inputRefs = [];
    this.state = {
      values,
      errors: {},
    };
  }
  validate = (name: string): FormError => {
    // const value = this.state.values[name];
    // const fieldConfig = this.props.config[name];
    // const { label, required, type, validate } = fieldConfig;
    // let error = validateField({ value, label, required, type });
    // if (!error && validate) {
    //   error = validate({ value, label, required, type });
    // }
    // return error;
  };
  // getErrors = () => {
  //   let errors = {};
  //   let name;
  //   for (name in this.state.values) {
  //     const error = this.validate(name);
  //     if (error) {
  //       errors[name] = error;
  //     }
  //   }
  //   return hasErrors(errors) ? errors : false;
  // };
  // setErrors = errors => {
  //   this.setState({ errors });
  // };
  // renderErrors = () => {
  //   const errors = this.getErrors();
  //   if (errors) {
  //     this.setErrors(errors);
  //   }
  //   return errors;
  // };
  onFocus = (name: string) => () => {
    const { errors } = this.state;
    if (errors[name]) {
      this.setState({
        errors: {
          ...errors,
          [name]: null,
        },
      });
    }
  };

  onBlur = (name: string) => () => {
    const { errors } = this.state;
    const error = this.validate(name);
    this.setState({
      errors: {
        ...errors,
        [name]: error,
      },
    });
  };

  onChangeText = (name: string) => (value: FormValue) => {
    this.setState({
      values: { ...this.state.values, [name]: value },
    });
  };

  onSubmitEditing = (name: string) => () => {
    const currIndex = this.findRefIndex(name);
    const nextRef = this.inputRefs[currIndex + 1];
    if (nextRef) {
      try {
        nextRef.focus();
      } catch (error) {
        console.error(error);
      }
    } else {
      Keyboard.dismiss();
      this.props.onSubmitEditingLast(this.getForm());
    }
  };
  // /**
  //  * Refs get pushed to the queue in the order that they are rendererd (top to bottom)
  //  */
  // handleRef = name => input => {
  //   if (!input) {
  //     return;
  //   }
  //   if (this.findRefIndex(name) === -1) {
  //     this.inputRefs.push({
  //       name,
  //       input: input.input,
  //     });
  //   }
  // };

  findRefIndex = (name: string) => {
    return this.inputRefs.findIndex((ref) => ref.name === name);
  };

  getTextInputProps = (name: string): TextInputProps => {
    const fieldConfig = this.props.config[name];

    return {
      name,
      value: this.state.values[name],
      label: fieldConfig.label,
      inputError: this.state.errors[name],
      onFocus: this.onFocus(name),
      onBlur: this.onBlur(name),
      onChangeText: this.onChangeText(name),
      onSubmitEditing: this.onSubmitEditing(name),
      // ref: this.handleRef(name),
    };
  };

  // getValues = () => this.state.values;
  getForm = () => {
    const {
      getTextInputProps,
      // getValues,
      // setErrors,
      // getErrors,
      // renderErrors,
    } = this;
    // const { errors } = this.state;
    // const isInvalid = !!getErrors();

    const errors = {};

    return {
      getTextInputProps,
      // getValues,
      // setErrors,
      // getErrors,
      // renderErrors,
      errors,
      // isInvalid,
    };
  };

  render() {
    // const { children } = this.props;
    const form = this.getForm();
    return this.props.children(form);
  }
}

export default Form;
