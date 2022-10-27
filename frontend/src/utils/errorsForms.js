export const validateLogin = (form) => {
  let errors = {}

  !form.email ? (errors.email = 'Required field.') : (errors.email = '')

  !form.password
    ? (errors.password = 'Required field.')
    : (errors.password = '')

  return errors
}
