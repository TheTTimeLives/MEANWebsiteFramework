export class Mail {
    name: string;
    company: string;
    phone: string;
    email: string;
    message: string;

    constructor(name: string, company: string, phone: string, email: string, message: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.email = email;
        this.message = message;
     }
}