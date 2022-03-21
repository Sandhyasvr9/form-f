import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessMsgComponent } from '../success-msg/success-msg.component';
import { FailureMsgComponent } from '../failure-msg/failure-msg.component';
import { FormService } from '../shared/form.service';
import { UpdateMsgComponent } from '../update-msg/update-msg.component';



@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.css']
})
export class SectionAComponent implements OnInit {
  fontStyleControl = new FormControl()
  formArray=[];


  constructor(private router:Router, private activatedRoute:ActivatedRoute,private dialog:MatDialog,public formService :FormService) { }

  ngOnInit(): void {
    //this.formService.getFormList();
  }

  onClickReset(){
    this.formService.Form1.reset();
  }

  onAdd(){

    if (this.formService.Form1.valid){

          if (this.formService.Form1.get('id').value == null){
            const dialogRef = this.dialog.open(SuccessMsgComponent);

            dialogRef.afterClosed().subscribe(result => {
             // console.log(`Dialog result: ${result}`);
              if (result == true){
               // console.log(this.formService.Form1.value);
                this.formService.insertSectionA(this.formService.Form1.value);
               this.router.navigate(["../", 'sectionB'],{relativeTo:this.activatedRoute})
              }
          });

          }else{
            const dialogRef = this.dialog.open(UpdateMsgComponent);

            dialogRef.afterClosed().subscribe(result => {
              //console.log(`Dialog result: ${result}`);
              if (result == true){
                this.formService.updateSectionA(this.formService.Form1.value)
                //console.log(this.formService.Form1.value);
                this.router.navigate(["/"],{relativeTo:this.activatedRoute})
              }
            });

          }

     // console.log(this.formService.Form1.value);
    }
    else{
      const dialogRef = this.dialog.open(FailureMsgComponent);

        dialogRef.afterClosed().subscribe(result => {
          //console.log(`Dialog result: ${result}`);
        });
   // console.log(this.formService.Form1.value);
    }
  }


}
