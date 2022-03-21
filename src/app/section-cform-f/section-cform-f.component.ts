import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router,ActivatedRoute } from '@angular/router';
import { FailureMsgComponent } from '../failure-msg/failure-msg.component';
import { SuccessMsgComponent } from '../success-msg/success-msg.component';

import {jsPDF} from 'jspdf'
import { FormService } from '../shared/form.service';
import { UpdateMsgComponent } from '../update-msg/update-msg.component';


export interface Diagnosis{
  name: string,
  completed: boolean,
  diagnosisArray ?:Diagnosis[]

}

@Component({
  selector: 'app-section-cform-f',
  templateUrl: './section-cform-f.component.html',
  styleUrls: ['./section-cform-f.component.css']
})
export class SectionCFormFComponent implements OnInit {
  @ViewChild("pdfContent",{static:false}) el!: ElementRef

  fontStyleControl = new FormControl();
  blankOneCondition:boolean = false;
  blankTwoCondition:boolean = false;
  allComplete: boolean = false;
  options = {
    pagesplit: true
  };
  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private dialog:MatDialog,
    public formService:FormService) { }

  ngOnInit(): void {    // this.blankOneCondition = this.sectionC.value.preNatalCOnveyedTo.length >0
    // this.blankTwoCondition = this.sectionC.value.preNatalCOnveyedOn.length >0
    // console.log(this.blankOneCondition)
  }

  onSubmit(){
    if (this.formService.sectionC.valid){
          if (this.formService.sectionC.get('id').value == null){
            const dialogRef = this.dialog.open(SuccessMsgComponent);
            dialogRef.afterClosed().subscribe(result => {
              //console.log(`Dialog result: ${result}`);
          if (result == true){
            this.formService.insertSectionc(this.formService.sectionC.value);
            this.router.navigate(["../",'sectionD'],{relativeTo:this.activatedRoute})
          }
        });
          }else{
            const dialogRef = this.dialog.open(UpdateMsgComponent);

            dialogRef.afterClosed().subscribe(result => {
              //console.log(`Dialog result: ${result}`);
              if (result == true){
                this.formService.updateSectionC(this.formService.sectionC.value);
                this.router.navigate(['/']);
              }
          });
          }
          //console.log(this.formService.sectionC.value)
      //console.log(this.formService.sectionC.value);
    }
    else{
      const dialogRef = this.dialog.open(FailureMsgComponent);

      dialogRef.afterClosed().subscribe(result => {
        //console.log(`Dialog result: ${result}`);
      });
     //console.log(this.formService.sectionC.value);
    }
  }



  onClickReset(){
    this.formService.sectionC.reset();
  }



}
