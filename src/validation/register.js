
function signupValidation(values) {
    let errors = {};
        
        if(!values.username){
            errors.username = "Email is required"
        }
        if(!values.password){
            errors.password = "Password is required"
        }
        if(values.password !== values.confirmPassword){
            errors.confirmPassword = "Passwords does not match"
        }
        return errors;  
}

export default signupValidation;
