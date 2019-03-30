import validation from 'validate.js'

export default function validate(fieldName, value) {
  
  const constraints = {
    name: {
      presence: { allowEmpty: false },
      format: {
        pattern: /^[a-zA-Z0-9]+$/,
        // minimum: 3,
        message: 'Name must be characters',
      },
    },
      email: {

        presence: { allowEmpty: false },
        format: {
          pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
          message: 'email is invalid',
        },
      },

    password: {
      presence: { allowEmpty: false },
      format: {
         pattern: /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/,     
         message: 'Enter strong & secure password',
      },
    },

    confirmpassword: {
      presence: { allowEmpty: false },
      format: {
         message: 'Enter confirm strong & secure password',
      },    
    },

    mobile: {
      presence: { allowEmpty: false },
      
    },
    rating: {
      numericality: {
        greaterThan: 0,
      },
    },
    review: {
      presence: { allowEmpty: false },
    },
    refund: {
      presence: { allowEmpty: false },
    },
  }

  let formValues = {}
  formValues[fieldName] = value

  const formFields = {}
  formFields[fieldName] = constraints[fieldName]

  const result = validation(formValues, formFields)

  if (result) {
    return result[fieldName][0]
  }
  return null
}
