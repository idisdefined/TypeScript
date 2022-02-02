export interface FormInc {
  checkin?: string,
  checkout?: string,
  price?: string
}

export const searchFormArg = (formData: FormInc): void => {
  console.log(formData)
}