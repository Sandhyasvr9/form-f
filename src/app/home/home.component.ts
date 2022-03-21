import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMsgComponent } from '../delete-msg/delete-msg.component';
import { FormService } from '../shared/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fontStyleControl = new FormControl();

  constructor(public formService:FormService, private dialog: MatDialog) { }
  formArray= [];

  ngOnInit(): void {
    this.formService.getFormList().subscribe(
      list => {
        this.formArray = list.map((item) => {

          return {
            id:item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }

  onDelete(id){
    const dialogRef = this.dialog.open(DeleteMsgComponent);

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
      if (result == true){
      this.formService.deleteForm(id);
      }
    });
  }

  onClickAdd(){
    this.formService.Form1.reset();
    this.formService.form2.reset();
    this.formService.sectionC.reset();
    this.formService.sectionD.reset();
  }

}
