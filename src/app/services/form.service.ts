import { Injectable } from '@angular/core';
import { Form } from '../model/form';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  forms: Form[] = [{
    id:1,name:"nandhini",phoneNumber:"9842572788",email:"nandhini@gmail.com"
  }];


 getItem(id: number): { name: string, phoneNumber: string, mail: string } {
  const form4 = this.forms.find((form) => form.id === id);
  if (form4) {
    return {
      name: form4.name,
      phoneNumber: form4.phoneNumber,
      mail: form4.email
    };
  }
  return { name: '', phoneNumber: '', mail: '' };
}

 add(name1: string,phoneNumber1:string,email1:string): Form[] {
  let form1: Form ={id:this.forms.length+1,name:name1,phoneNumber:phoneNumber1,email:email1};
  this.forms.push(form1);
  console.log(this.forms);
  
  return this.forms;

 }

 delete(id:number):Form[]{
  let form2: Form [] = [];
  for(let form of this.forms) {
    if (form.id !== id){
      form2.push(form);
    }
  }
  this.forms=form2;
  return this.forms;
 }

 edit(id:number,name1: string,phoneNumber1:string,email1:string):Form [] {
 let form3: Form[]= [];
 for(let form of this.forms){
  if(form.id!==id){
    form3.push(form);
 }
 else {
  let updated = {id:id ,name:name1,phoneNumber:phoneNumber1,email:email1};
   form3.push(updated);
 }
 }
 this.forms=form3;
 return this.forms;
 }
}






