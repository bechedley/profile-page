export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
// Check that first character of input is a letter
export function validateText(text) {
    const re = /^[A-Za-z][ A-Za-z0-9_@./#&+-]*$/;
    return re.test(String(text).toLowerCase());
  }