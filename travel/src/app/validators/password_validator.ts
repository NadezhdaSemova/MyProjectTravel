import { AbstractControl } from "@angular/forms"

export const PasswordMatchValidators = (passwordControName: string, repeatPasswordControlName: string) =>{
    const validator = (form: AbstractControl) => {
        const passwordControl = form.get(passwordControName);
        const repeatPasswordControl = form.get(repeatPasswordControlName);

        if(passwordControl || !repeatPasswordControl) return;

        if(passwordControl!.value !== repeatPasswordControl.value){
            repeatPasswordControl.setErrors({notMatch: true})
        }else {
            const errors = repeatPasswordControl.errors;
            if(!errors) return;

            delete errors.notMatch;
            repeatPasswordControl.setErrors(errors);
        }
    }
    return validator;
}