import { Component, OnInit } from '@angular/core';
import {FormControl,FormArray} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { SuccessMsgComponent } from '../success-msg/success-msg.component';
import { MatDialog } from '@angular/material/dialog';
import { FailureMsgComponent } from '../failure-msg/failure-msg.component';

import {jsPDF} from 'jspdf'
import { FormService } from '../shared/form.service';
import { UpdateMsgComponent } from '../update-msg/update-msg.component';
@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.css']
})
export class SectionBComponent implements OnInit {

  fontStyleControl = new FormControl();

  checkboxList = [
      'To diagnose intra-uterine and or ectopic pregnancy and confirm viability',
        'Estimation of gestational age (dating)',
        'Vaginal bleeding OR leaking',
        'Suspected pregnancy with IUCD in-situ or suspected pregnancy following contraceptive failure OR MTP failure',
        'Follow-up of cases of abortion',
        'Assessment of cervical canal and diameter of internal os',
        'Discrepancy between uterine size and period of amenorrhea',
        'Any suspected adenexal or uterine pathology OR abnormality',
        'Detection of chromosomal abnormalities, fetal structural defects and other abnormalities and their follow-up',
        'To evaluate fetal presentation and position',
        'Assessment of liquor amnii',
        'Preterm labor OR preterm premature rupture of membranes',
        'Evaluation of placental position, thickness, grading and abnormalities (placenta praevia, retro placental haemorrhage, abnormal adherence etc',
        'Evaluation of umbilical cord presentation, insertion, nuchal encirclement, number of vessels and presence of true knot',
        'Evaluation of previous Caesarean Section scars',
        'Evaluation of fetal growth parameters, fetal weight and fetal well being',
        'Color flow mapping and duplex Doppler studies',
        'Ultrasound guided procedures such as medical termination of pregnancy, external cephalic version etc and their follow-up',
        'Adjunct to diagnostic and therapeutic invasive interventions such as chorionic villus sampling (CVS),amniocenteses, feel blood sampling, fetal skin biopsy, amnio-infusion, intrauterine infusion, placement of shunts etc',
        'Observation of intra-partum events',
        'Medical or surgical conditions complicating pregnancy',
        'Research OR scientific studies in recognized institutions',
  ];
  activeCheckList=[];

  constructor(private dialog:MatDialog,
   private router: Router,
    private activatedRoute:ActivatedRoute,
    public formService:FormService) { }
  arrayBool:boolean= false
  ultraBool:boolean = false
  ngOnInit(): void {
    /*
    this.form2 = new FormGroup({
      'docter_name': new FormControl(null),
      'indications':new FormControl(null),
    })*/



  }


  onAdd(){
    if (this.formService.form2.valid){
        if (this.formService.form2.get('id').value == null){
          const dialogRef = this.dialog.open(SuccessMsgComponent);
          dialogRef.afterClosed().subscribe(result => {
          //console.log(`Dialog result: ${result}`);
          if (result == true){
            this.formService.insertSectionB(this.formService.form2.value);
            //console.log(this.formService.form2.value)
            this.router.navigate(["../", 'sectionC'],{relativeTo:this.activatedRoute})
          }
        });
          }
          else{
            const dialogRef = this.dialog.open(UpdateMsgComponent);

            dialogRef.afterClosed().subscribe(result => {
            //console.log(`Dialog result: ${result}`);
              if(result == true){
                this.formService.updateSectionB(this.formService.form2.value);
                //console.log(this.formService.form2.value)
                this.router.navigate(["/"],{relativeTo:this.activatedRoute})
              }
          });
          }

       //console.log(this.formService.form2.value);

    }
    else{
      const dialogRef = this.dialog.open(FailureMsgComponent);

      dialogRef.afterClosed().subscribe(result => {
        //console.log(`Dialog result: ${result}`);
      });
    }
  }

  onClickultrasound(){
    (<FormArray>this.formService.form2.get('otherProcedure')).removeAt(0)
    this.ultraBool = true
    this.arrayBool = false
  }

  onClickBtn(){
    const control = new FormControl(null);
    if (this.formService.form2.get('otherProcedure').value.length < 1){
      (<FormArray>this.formService.form2.get('otherProcedure')).push(control);
      this.arrayBool = this.formService.form2.get("otherProcedure").value.length === 1
      this.ultraBool = false
    }

  }

  getControls() {
    return (<FormArray>this.formService.form2.get('otherProcedure')).controls;
  }

  onClickReset(){
    this.formService.form2.reset();
  }
 }

