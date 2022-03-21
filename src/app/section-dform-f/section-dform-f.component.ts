import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FailureMsgComponent } from '../failure-msg/failure-msg.component';
import { SuccessMsgComponent } from '../success-msg/success-msg.component';

import {jsPDF} from 'jspdf'
import { FormService } from '../shared/form.service';
import { UpdateMsgComponent } from '../update-msg/update-msg.component';
import { SubmitMsgComponent } from '../submit-msg/submit-msg.component';

interface gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-section-dform-f',
  templateUrl: './section-dform-f.component.html',
  styleUrls: ['./section-dform-f.component.css']
})
export class SectionDformFComponent implements OnInit {
  @ViewChild("pdfContent",{static:false}) el!: ElementRef
  genders: gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'others', viewValue: 'Others'},
  ];

  fontStyleControl = new FormControl();


  constructor(
    private dialog:MatDialog,public formService:FormService,private router:Router) { }

  ngOnInit(): void {
      }



  onSubmit(){
    if (this.formService.sectionD.valid){
      // Adding success dialog content in each component
          if (this.formService.sectionD.get('id').value == null){
            const dialogRef = this.dialog.open(SubmitMsgComponent);

            dialogRef.afterClosed().subscribe(result => {
              // console.log(`Dialog result: ${result}`);
              if (result == true){
                this.formService.insertSectionD(this.formService.sectionD.value);
              }
          });
          }else{
            const dialogRef = this.dialog.open(UpdateMsgComponent);

            dialogRef.afterClosed().subscribe(result => {
              //console.log(`Dialog result: ${result}`);
              if (result == true){
                this.formService.updateSectionD(this.formService.sectionD.value);
              }
          });
          }
          //console.log(this.formService.sectionD.value)
          this.router.navigate(['/']);

      //console.log(this.formService.sectionD.value);

     }
    else{
      // Adding failure dialog content in each component
      const dialogRef = this.dialog.open(FailureMsgComponent);

      dialogRef.afterClosed().subscribe(result => {
        //console.log(`Dialog result: ${result}`);
      });
     //console.log(this.formService.sectionD.value);
    }
  }

  onClickReset(){
    this.formService.sectionD.reset();
  }



}
