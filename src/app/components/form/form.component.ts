import { Component } from '@angular/core';
import { Form } from 'src/app/model/form';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  input: string ='';
  phnNum: string='';
  mail:string ='';
  forms: Form[] = [];
  edited: number=0;
  btn='SAVE';

  constructor(private formService:FormService) {
    this.forms = this.formService.forms
  }
  
  add(): void {
    if(this.edited===0){
       this.forms = this.formService.add(this.input,this.phnNum,this.mail);
    }
    else{
      this.forms=this.formService.edit(this.edited,this.input,this.phnNum,this.mail);
      this.btn='SAVE';
    }
    this.input='';
    this.phnNum='';
    this.mail='';
    this.edited = 0
  }


  delete(id:number): void {
    this.forms = this.formService.delete(id);
  }

  edit(id: number): void {
    this.edited = id;
    const formData = this.formService.getItem(id);
    this.input = formData.name;
    this.phnNum = formData.phoneNumber;
    this.mail = formData.mail;
    this.btn = 'EDIT';
  }


}
