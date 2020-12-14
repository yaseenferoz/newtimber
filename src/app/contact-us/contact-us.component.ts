import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  msg="";
  public sendEmail(e: Event) {
  
    e.preventDefault();
    emailjs.sendForm('service_1e3n9tw', 'template_39qavuv', e.target as HTMLFormElement, 'user_AeRvdfLM74b1a13R6anEL')
      .then((result: EmailJSResponseStatus) => {
       this.msg="Send SuccessFully";

      }, (error) => {
       this.msg="Sending Failed"
      });

    
  }

 
  constructor() { }

  ngOnInit() {
  }

}
