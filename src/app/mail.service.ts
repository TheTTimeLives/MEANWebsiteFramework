import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail} from './mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendEmail(mail: Mail) {
    return this.http.post('/mail', mail)
  }


}
