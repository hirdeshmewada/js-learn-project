const User={
    _email:'hirdesh@gma.com',
    _password:"abc",
    
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }

}

const chai=Object.create(User)
console.log(chai.email);