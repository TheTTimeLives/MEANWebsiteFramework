import { Component, OnInit, Renderer2 } from '@angular/core';
import {MailService} from '../mail.service';
import { Mail} from '../mail';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //We're not going to need to declare objects here more than likely. The beauty of two way data binding. So easy to work with forms.
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;

 
  constructor(private renderer: Renderer2, private service: MailService) {
    this.renderer.setStyle(document.body, 'background-color', 'salmon');
    //Using the renderer. I wonder what else this can do...  
  }

  sendEmail(){

    alert("Your email was sent!");

    let mail = new Mail(this.name, this.company, this.phone, this.email, this.message);

    this.service.sendEmail(mail)
                  .subscribe(data => {
                    console.log(data)
                  })
  }

  ngOnInit() {
    //this should just attempt to post to the backend so we should just get some kind of log from the subscribe
    // this.sendEmail()
  }

}


