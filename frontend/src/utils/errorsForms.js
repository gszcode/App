export const validateRegister = (form) => {
  let errors = {}

  !form.name ? (errors.name = 'Required field.') : (errors.name = '')

  !form.email ? (errors.email = 'Required field.') : (errors.email = '')

  !form.password
    ? (errors.password = 'Required field.')
    : (errors.password = '')

  !form.repassword
    ? (errors.repassword = 'Required field.')
    : (errors.repassword = '')

  return errors
}
export const validateLogin = (form) => {
  let errors = {}

  !form.email ? (errors.email = 'Required field.') : (errors.email = '')

  !form.password
    ? (errors.password = 'Required field.')
    : (errors.password = '')

  return errors
}
