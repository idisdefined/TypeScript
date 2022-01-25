export interface FormInc {
    check?: string,
    price?: string,
    isOut?: string 
}

export const searchFormArg = (formData: FormInc): void => {
  console.log(formData)
}