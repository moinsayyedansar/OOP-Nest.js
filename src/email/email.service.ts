import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
    #payment = 10000;
    sendEmail(email:string){
        this.html()
    console.log("email has been sent to",email , this.#payment)
    }

    html(){
        console.log("html of the mail")
    }
    func(){
        console.log("this is a sendEmail func")
    }

}

class user extends EmailService{
      role(){
        console.log("software engineer")
      }
       func(){
        console.log("this is a user func")
    }

}

class address extends user{
      address(){
        console.log("This is the address")
      }
       func(){
        console.log("this is a address func")
    }

}

let output = new EmailService();
let output2 = new user();
let output3 = new address();
output.func()
output2.func()
output3.func()
