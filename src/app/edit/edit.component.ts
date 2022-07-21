import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  /* Variable Declaration To display Value */
 
  name: string;
  mobileno: number;
 result: any;
  /* Form Vaildation */
 
  
  customers: any;

  constructor(private customer:CustomerService, private router: ActivatedRoute){}
  
  editForm=new FormGroup({
    name: new FormControl('', Validators.required),
    
    mobileno: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])        
      });
    
  ngOnInit() {
  //  console.log(this.router.snapshot.params.id);
   this.customer.editDept(this.router.snapshot.params.id).subscribe((resultId:any)=>{
    console.log(resultId);
    this.editForm=new FormGroup({
      name: new FormControl(resultId['name']),
      
      mobileno: new FormControl(resultId['mobileno'])        
        });
   })
  }

 updateData() {
  console.log(this.editForm.value);
  //  this.result="The user name is"+ this.form.value.name+ this.form.value.mobileno;
   this.customer.updateDept(this.router.snapshot.params.id, this.editForm.value).subscribe((updateVal: any)=> {
     console.log(updateVal);
   });
  }
reset(){
  this.editForm.reset();
}

}
