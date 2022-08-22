
export const validateType = (type: string, data: string, langContext: any) =>{
  
  switch (type) {
      case 'nick':
      return ValidateNickname(data, langContext)
      case 'login':
          return ValidateLogin(data, langContext)
      case 'password':
        return ValidatePassword(data, langContext )
      case 'mail':
        return ValidateMail(data, langContext )
      case 'sid':
        return ValidateSteamID(data, langContext )
      case 'tw':
        return ValidateTwChannel(data, langContext)
      case 'base':
        return baseValidate(data, langContext)
      default:
          break;
  }
}
    
export const ValidateAppInput = (rexpression: any, input: any) :boolean => {
  const regex = new RegExp(rexpression);        
  return regex.test(input);
}


//Nickname cannot contain numbers or special characters
const ValidateNickname = (input: string, langContext: any): any => {  
  if (!baseValidate(input, langContext)!.isValid) {
    return { isValid: false, error: baseValidate(input, langContext)!.error} 
  } else {
    const isValid = testOnlyLetters(input)  
    if (!isValid) {
      const error = langContext.forms.registerForm.errors[2]
      return { isValid, error}  
    } else {
      return { isValid: true , error: ''}
    }
  }  
}

//Login cannot contain numbers or special characters
const ValidateLogin = (input: string, langContext: any): any => {  
  if (!baseValidate(input, langContext)!.isValid) {
    return { isValid: false, error: baseValidate(input, langContext)!.error} 
  } else {
    const isValid = testLettersAndNumbers(input)  
    if (!isValid) {
      const error = langContext.forms.registerForm.errors[2]  
      return { isValid, error}  
    } else {
      return { isValid: true , error: ''}
    }
  }  
}

//Password must contain at least 8 characters, 1 capital letter, 1 number and a special character
  const ValidatePassword = (input: string, langContext: any): any => {
    if (!baseValidate(input, langContext)!.isValid) {
      return { isValid: false, error: baseValidate(input, langContext)!.error} 
    } else {
      return testTestPassword(input)? { isValid: true, error: '' } : { isValid: true, error: langContext.forms.registerForm.errors[4]   }
    }      
   
}      



//Mail must contain one @ symbol and at least one . symborl
export const ValidateMail = (input: any, langContext: any) => {
  if (!baseValidate(input, langContext)!.isValid) {
    return { isValid: false, error: baseValidate(input, langContext)!.error} 
  } else {
    const isValid = testMail(input)  
    if (!isValid) {
      const error = langContext.forms.registerForm.errors[3]  
      return { isValid, error}  
    } else {
      return { isValid: true , error: ''}
    }
  }              
}

//STEAM_0:1:128621587 
export const ValidateSteamID = (input: any, langContext: any) => {
  if (!baseValidate(input, langContext)!.isValid) {
    return { isValid: false, error: baseValidate(input, langContext)!.error} 
  } else {
    const isValid = testOnlyLetters(input)  
    if (!isValid) {
      const error = langContext.forms.registerForm.errors[2] 
      return { isValid, error}  
    } else {
      return { isValid: true , error: ''}
    }
  }             
}

//STEAM_0:1:128621587 
export const ValidateTwChannel = (input: any, langContext: any) => {
  if (!baseValidate(input, langContext)!.isValid) {
    return { isValid: false, error: baseValidate(input, langContext)!.error} 
  } else {
      return { isValid: true , error: ''}
    }
}             



// Base validation for white spaces an empty field
const baseValidate = (input: string, langContext: any) =>{  
  if (testWhiteSpaces(input)) {
    return { isValid: false, error: langContext.forms.registerForm.errors[0]}
  } else if(testEmptyInput(input)){
    return { isValid: false, error: langContext.forms.registerForm.errors[1]} 
  } else {
    return { isValid: true, error: ''}  
  } 
}



const testWhiteSpaces = (data:string) : boolean =>{
  return new RegExp(/\s/g).test(data)
}

const testOnlyLetters = (data:string) : boolean =>{
  return new RegExp(/^[a-zA-Z\s]*$/).test(data)
}

const testMail = (data:string) : boolean =>{
  return new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/).test(data)
}

const testEmptyInput = (data:string) : boolean =>{ 
  return data === ''?  true : false
}

const testLettersAndNumbers = (data:string) : boolean =>{ 
  return new RegExp("^[A-Za-z0-9_-]*$").test(data)
}

const testTestPassword = (data:string) : boolean =>{ 
  return new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})").test(data)
}
