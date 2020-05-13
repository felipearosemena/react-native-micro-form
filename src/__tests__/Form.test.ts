import React from 'react';
import { shallow } from 'enzyme';
// import { View, Keyboard } from 'react-native';
// import { formFieldTypes } from '../../constants';
// import Form from './Form';
// import TextInput from '../TextInput';
// import Button from '../Button';

// const FIELD_TEXT = 'FIELD_TEXT';
// const FIELD_EMAIL = 'FIELD_EMAIL';
// const FIELD_PASSWORD = 'FIELD_PASSWORD';

// function FormExample({ customValidate = () => null }) {
//   const formConfig = {
//     [FIELD_TEXT]: {
//       required: true,
//       defaultValue: 'some text',
//       label: 'Simple text field',
//       type: formFieldTypes.text,
//       validate: customValidate,
//     },
//     [FIELD_EMAIL]: {
//       required: true,
//       defaultValue: 'email@gmail.com',
//       label: 'Email field',
//       type: formFieldTypes.email,
//     },
//     [FIELD_PASSWORD]: {
//       required: true,
//       defaultValue: 'Longpassword1',
//       label: 'Password field',
//       type: formFieldTypes.password,
//     },
//   };

//   const handleSubmit = (form) => () => {};

//   return (
//     <Form config={formConfig}>
//       {(form) => (
//         <View testID={'view-wrapper'}>
//           <TextInput {...form.getTextInputProps(FIELD_EMAIL)} testID={'email'} />
//           <TextInput {...form.getTextInputProps(FIELD_TEXT)} testID={'text'} />
//           <TextInput {...form.getTextInputProps(FIELD_PASSWORD)} testID={'password'} />
//           <Button onPress={handleSubmit(form)}>Submit</Button>
//         </View>
//       )}
//     </Form>
//   );
// }

// const findByID = (wrapper, id) => {
//   return wrapper.root.find((node) => node.props.testID === id);
// };

describe('Form', () => {
  // let renderer;
  // let root;
  // let form;
  // let emailInput;
  // let textInput;
  // let passwordInput;
  // let setStateSpy;
  // beforeEach(() => {
  //   renderer = create(<FormExample />);
  //   root = renderer.root;
  //   form = root.findByType(Form).instance;
  //   setStateSpy = jest.spyOn(form, 'setState');
  //   emailInput = findByID(renderer, 'email');
  //   textInput = findByID(renderer, 'text');
  //   passwordInput = findByID(renderer, 'password');
  // });

  // it('should initialize with correct intial values', () => {
  //   expect(form.getValues()).toEqual({
  //     [FIELD_TEXT]: 'some text',
  //     [FIELD_EMAIL]: 'email@gmail.com',
  //     [FIELD_PASSWORD]: 'Longpassword1',
  //   });
  // });

  // it('should push ref objects to the inputRefs array in the order that they are rendered', () => {
  //   expect(form.inputRefs.map((obj) => obj.name)).toEqual([FIELD_EMAIL, FIELD_TEXT, FIELD_PASSWORD]);
  //   expect(form.inputRefs.filter((obj) => obj.input.props.name === obj.name).length).toEqual(3);
  // });

  // describe('getTextInputProps', () => {
  //   it('should return the correct TextInput props', async () => {
  //     await form.setErrors({ [FIELD_EMAIL]: 'error' });
  //     const props = form.getTextInputProps(FIELD_EMAIL);
  //     expect(props.name).toEqual(FIELD_EMAIL);
  //     expect(props.value).toEqual('email@gmail.com');
  //     expect(props.label).toEqual('Email field');
  //     expect(props.inputError).toEqual('error');
  //     expect(typeof props.onFocus).toEqual('function');
  //     expect(typeof props.onBlur).toEqual('function');
  //     expect(typeof props.onChangeText).toEqual('function');
  //     expect(typeof props.onSubmitEditing).toEqual('function');
  //     expect(typeof props.ref).toEqual('function');
  //   });

  //   it('onTextChange, should update the values in the component instance, but not trigger re-render', () => {
  //     passwordInput.props.onChangeText('NewValue');
  //     expect(form.getValues()[FIELD_PASSWORD]).toEqual('NewValue');
  //   });
  //   it('onFocus, should clear they error on the field being focused', () => {
  //     passwordInput.props.onChangeText('Invalid value');
  //     passwordInput.props.onBlur();

  //     expect(setStateSpy).toHaveBeenCalled();
  //     expect(form.state.errors[FIELD_PASSWORD]).toBeTruthy();

  //     passwordInput.props.onFocus();
  //     expect(setStateSpy).toHaveBeenCalled();
  //     expect(form.state.errors[FIELD_PASSWORD]).toEqual(null);
  //   });
  //   it('onBlur, should validate and display errors for the field getting blurred', () => {
  //     passwordInput.props.onChangeText('Invalid value');
  //     passwordInput.props.onBlur();

  //     expect(setStateSpy).toHaveBeenCalled();
  //     expect(passwordInput.props.inputError).toEqual(form.state.errors[FIELD_PASSWORD]);
  //   });

  //   it('onSubmitEditing, should focus on the next input (if available)', () => {
  //     const textRefObj = form.inputRefs.find((obj) => obj.name === FIELD_TEXT);
  //     const focus = jest.fn();
  //     textRefObj.input.focus = focus;
  //     emailInput.props.onSubmitEditing();
  //     expect(focus).toHaveBeenCalledTimes(1);
  //   });
  //   it('onSubmitEditing, should dismiss the keyboard from last input', () => {
  //     const dismissSpy = jest.spyOn(Keyboard, 'dismiss');
  //     passwordInput.props.onSubmitEditing();
  //     expect(dismissSpy).toHaveBeenCalledTimes(1);
  //   });
  // });

  // describe('renderErrors', () => {
  //   it('should validate each field in the config object & set state with any errors', () => {
  //     textInput.props.onChangeText('');
  //     passwordInput.props.onChangeText('invalidpass');
  //     emailInput.props.onChangeText('invalidemail');

  //     form.renderErrors();
  //     expect(setStateSpy).toHaveBeenCalled();
  //     expect(form.state.errors[FIELD_TEXT]).toBeTruthy();
  //     expect(form.state.errors[FIELD_EMAIL]).toBeTruthy();
  //     expect(form.state.errors[FIELD_PASSWORD]).toBeTruthy();
  //   });

  //   it('should additionally validate each field with a custom "validate" function provided in config', () => {
  //     const error = 'This field is wrong';
  //     const customValidate = jest.fn(() => error);
  //     renderer.update(<FormExample customValidate={customValidate} />);

  //     textInput.props.onChangeText('a');
  //     form.renderErrors();
  //     expect(setStateSpy).toHaveBeenCalled();
  //     expect(form.state.errors[FIELD_TEXT]).toEqual(error);
  //   });
  // });

  // describe('getErrors', () => {
  //   it('should return an object if there are errors or false if there are no errors', () => {
  //     textInput.props.onChangeText('');
  //     passwordInput.props.onChangeText('invalidpass');
  //     emailInput.props.onChangeText('invalidemail');

  //     let errors = form.getErrors();

  //     expect(typeof errors).toEqual('object');

  //     textInput.props.onChangeText('valid');
  //     passwordInput.props.onChangeText('ValidPassword1');
  //     emailInput.props.onChangeText('valid@email.com');

  //     errors = form.getErrors();

  //     expect(errors).toEqual(false);
  //   });
  // });
});
