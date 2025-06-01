import { FormGroup } from '@angular/forms';

export function firstNameIsInvalid(personalForm: FormGroup) {
  const firstName = personalForm.get('firstName');
  return firstName?.invalid && firstName?.touched;
}
export function lastNameIsInvalid(personalForm: FormGroup) {
  const lastName = personalForm.get('lastName');
  return lastName?.invalid && lastName?.touched;
}
export function emailIsInvalid(personalForm: FormGroup) {
  const email = personalForm.get('email');
  return email?.invalid && email?.touched;
}
export function phoneIsInvalid(personalForm: FormGroup) {
  const phone = personalForm.get('phoneNumber');
  return phone?.invalid && phone?.touched;
}
export function personalFormIsInvalid(personalForm: FormGroup) {
  return (
    firstNameIsInvalid(personalForm) ||
    lastNameIsInvalid(personalForm) ||
    emailIsInvalid(personalForm) ||
    phoneIsInvalid(personalForm) ||
    personalForm?.pristine
  );
}

export function addressIsInvalid(addressGroup: FormGroup) {
  const address = addressGroup.get('address');
  return address?.invalid && address?.touched;
}

export function cityIsInvalid(addressGroup: FormGroup) {
  const city = addressGroup.get('city');
  return city?.invalid && city?.touched;
}
export function stateIsInvalid(addressGroup: FormGroup) {
  const state = addressGroup.get('state');
  return state?.invalid && state?.touched;
}
export function zipIsInvalid(addressGroup: FormGroup) {
  const zip = addressGroup.get('zip');
  return zip?.invalid && zip?.touched;
}
export function addressFormIsInvalid(mainForm: FormGroup) {
  return (
    cityIsInvalid(mainForm) ||
    stateIsInvalid(mainForm) ||
    zipIsInvalid(mainForm) ||
    mainForm.get('address')?.pristine
  );
}
