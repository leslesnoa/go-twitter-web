export function isEmailValid(email) {
  return email.test(String(email).toLocaleLowerCase)
}