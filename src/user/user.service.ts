import { Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';

@Injectable()
export class UserService {
  constructor(private emailservice: EmailService ){}
createUser(){
    console.log("hi , i am a user");
    this.emailservice.sendEmail;
}

}

