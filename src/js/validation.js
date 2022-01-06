export const validation = {
  required(str) {
    return str.trim() === ''
  },

  email(str) {
    const regExp =
      /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm
    const isEmailValid = regExp.test(str.trim())

    return !isEmailValid
  },
}
