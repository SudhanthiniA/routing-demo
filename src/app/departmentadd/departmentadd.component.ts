import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-departmentadd',
  templateUrl: './departmentadd.component.html',
  styleUrls: ['./departmentadd.component.scss']
})
export class DepartmentaddComponent implements OnInit {

  /* Variable Declaration To display Value */
 
  name: string;
  mobileno: number;
 result: any;
  /* Form Vaildation */
 
  
  customers: any;

  constructor(private customer:CustomerService){}
  
  form=new FormGroup({
    name: new FormControl('', Validators.required),
    
    mobileno: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])        
      });
    
  ngOnInit() {
   
  }

  onSubmit() {
  //  this.result="The user name is"+ this.form.value.name+ this.form.value.mobileno;
   this.customer.saveData(this.form.value).subscribe((resultVal)=> {
     console.log(resultVal);
   });
  }
reset(){
  this.form.reset();
}

}
