import { Injectable } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private firebase:AngularFireDatabase, private router:Router) { }
  formList:AngularFireList<any>;

  Form1 = new FormGroup({
      'id':new FormControl(null),
      'nameandAddress': new FormControl(null),
      'regdNo':new FormControl(null),
      'patientname': new FormControl(null),
      'age': new FormControl(null),
      'childrenGroup':new FormGroup({
        'noOfChildren':new FormControl(null),
        'livingSons':new FormControl(null),
        'livingDaughters': new FormControl(null),
      }),
      'otherName':new FormControl(null),
      'postalAddress':new FormControl(null),
      'referral':new FormGroup({
        'referredBy':new FormControl(null),
        'selfReferral':new FormControl(null),
      }),
      'lastDate':new FormControl(null),
      })

    getFormList(){
      this.formList = this.firebase.list('formList');
      return this.formList.snapshotChanges();
      }

    insertSectionA(user){
       this.formList.push({
          'nameandAddress': user.nameandAddress,
          'regdNo':user.regdNo,
          'patientname': user.patientname,
          'age': user.age,
          'childrenGroup':({
          'noOfChildren':user.childrenGroup.noOfChildren,
          'livingSons':user.childrenGroup.livingSons,
          'livingDaughters': user.childrenGroup.livingDaughters,
          }),
          'otherName':user.otherName,
          'postalAddress':user.postalAddress,
          'referral':({
          'referredBy':user.referral.referredBy,
          'selfReferral':user.referral.selfReferral,
          }),
          'lastDate':user.lastDate,
        })
      }


      populateFormA(user){
        this.router.navigate(['/sectionA']);
        this.Form1.patchValue(user);
        console.log();
      }

      populateFormB(user){
        this.router.navigate(['/sectionB']);
        this.form2.patchValue(user);
      }

      populateFormC(user){
        this.router.navigate(['/sectionC']);
        this.sectionC.patchValue(user);
      }

      populateFormD(user){
        this.router.navigate(['/sectionD']);
        this.sectionD.patchValue(user);
      }

      updateSectionA(user){
        this.formList.update(user.id,{
            'nameandAddress': user.nameandAddress,
            'regdNo':user.regdNo,
            'patientname': user.patientname,
            'age': user.age,
            'childrenGroup':({
            'noOfChildren':user.childrenGroup.noOfChildren,
            'livingSons':user.childrenGroup.livingSons,
            'livingDaughters': user.childrenGroup.livingDaughters,
            }),
            'otherName':user.otherName,
            'postalAddress':user.postalAddress,
            'referral':({
            'referredBy':user.referral.referredBy,
            'selfReferral':user.referral.selfReferral,
            }),
            'lastDate':user.lastDate,
            })
      }

      deleteForm(id){
        this.formList.remove(id);
      }







      form2 = new FormGroup({
        'id':new FormControl(null),
        'docter_name': new FormControl(null,Validators.required),
        'indications':new FormControl(null),
        'checkBoxs':new FormGroup({
          'To diagnose intra-uterine and or ectopic pregnancy and confirm viability':new FormControl(null),
          'Estimation of gestational age (dating)':new FormControl(null),
          'Vaginal bleeding OR leaking':new FormControl(null),
          'Suspected pregnancy with IUCD in-situ or suspected pregnancy following contraceptive failure OR MTP failure':new FormControl(null),
          'Follow-up of cases of abortion':new FormControl(null),
          'Assessment of cervical canal and diameter of internal os':new FormControl(null),
          'Discrepancy between uterine size and period of amenorrhea':new FormControl(null),
          'Any suspected adenexal or uterine pathology OR abnormality':new FormControl(null),
          'Detection of chromosomal abnormalities, fetal structural defects and other abnormalities and their follow-up':new FormControl(null),
          'To evaluate fetal presentation and position':new FormControl(null),
          'Assessment of liquor amnii':new FormControl(null),
          'Preterm labor OR preterm premature rupture of membranes':new FormControl(null),
          'Evaluation of placental position, thickness, grading and abnormalities (placenta praevia, retro placental haemorrhage, abnormal adherence etc':new FormControl(null),
          'Evaluation of umbilical cord presentation, insertion, nuchal encirclement, number of vessels and presence of true knot':new FormControl(null),
          'Evaluation of previous Caesarean Section scars':new FormControl(null),
          'Evaluation of fetal growth parameters, fetal weight and fetal well being':new FormControl(null),
          'Color flow mapping and duplex Doppler studies':new FormControl(null),
          'Ultrasound guided procedures such as medical termination of pregnancy, external cephalic version etc and their follow-up':new FormControl(null),
          'Adjunct to diagnostic and therapeutic invasive interventions such as chorionic villus sampling (CVS),amniocenteses, feel blood sampling, fetal skin biopsy, amnio-infusion, intrauterine infusion, placement of shunts etc':new FormControl(null),
          'Observation of intra-partum events':new FormControl(null),
          'Medical or surgical conditions complicating pregnancy':new FormControl(null),
          'Research OR scientific studies in recognized institutions':new FormControl(null),
        }),
        'procedure':new FormControl(null),
        'otherProcedure':new FormArray([]),
        'dateOfDeclaration':new FormControl(null),
        'dateOfProcedure':new FormControl(null),
        'resultOfProcedure':new FormControl(null),
        'resultConveyedTo':new FormControl(null),
        'resultConveyedOn':new FormControl(null),
        'indication':new FormControl(null),
        'date':new FormControl(null),
        'place': new FormControl(null)
      })


      insertSectionB(user){
        this.formList.push({
          'docter_name':user.docter_name ,
        'indications':user.indications,
        'checkBoxs':({
          'To diagnose intra-uterine and or ectopic pregnancy and confirm viability':user.checkBoxs['To diagnose intra-uterine and or ectopic pregnancy and confirm viability'],
          'Estimation of gestational age (dating)':user.checkBoxs['Estimation of gestational age (dating)'],
          'Vaginal bleeding OR leaking':user.checkBoxs['Vaginal bleeding OR leaking'],
          'Suspected pregnancy with IUCD in-situ or suspected pregnancy following contraceptive failure OR MTP failure':user.checkBoxs['Suspected pregnancy with IUCD in-situ or suspected pregnancy following contraceptive failure OR MTP failure'],
          'Follow-up of cases of abortion':user.checkBoxs['Follow-up of cases of abortion'],
          'Assessment of cervical canal and diameter of internal os':user.checkBoxs['Assessment of cervical canal and diameter of internal os'],
          'Discrepancy between uterine size and period of amenorrhea':user.checkBoxs['Discrepancy between uterine size and period of amenorrhea'],
          'Any suspected adenexal or uterine pathology OR abnormality':user.checkBoxs['Any suspected adenexal or uterine pathology OR abnormality'],
          'Detection of chromosomal abnormalities, fetal structural defects and other abnormalities and their follow-up':user.checkBoxs['Detection of chromosomal abnormalities, fetal structural defects and other abnormalities and their follow-up'],
          'To evaluate fetal presentation and position':user.checkBoxs['To evaluate fetal presentation and position'],
          'Assessment of liquor amnii':user.checkBoxs['Assessment of liquor amnii'],
          'Preterm labor OR preterm premature rupture of membranes':user.checkBoxs['Preterm labor OR preterm premature rupture of membranes'],
          'Evaluation of placental position, thickness, grading and abnormalities (placenta praevia, retro placental haemorrhage, abnormal adherence etc':user.checkBoxs['Evaluation of placental position, thickness, grading and abnormalities (placenta praevia, retro placental haemorrhage, abnormal adherence etc'],
          'Evaluation of umbilical cord presentation, insertion, nuchal encirclement, number of vessels and presence of true knot':user.checkBoxs['Evaluation of umbilical cord presentation, insertion, nuchal encirclement, number of vessels and presence of true knot'],
          'Evaluation of previous Caesarean Section scars':user.checkBoxs['Evaluation of previous Caesarean Section scars'],
          'Evaluation of fetal growth parameters, fetal weight and fetal well being':user.checkBoxs['Evaluation of fetal growth parameters, fetal weight and fetal well being'],
          'Color flow mapping and duplex Doppler studies':user.checkBoxs['Color flow mapping and duplex Doppler studies'],
          'Ultrasound guided procedures such as medical termination of pregnancy, external cephalic version etc and their follow-up':user.checkBoxs['Ultrasound guided procedures such as medical termination of pregnancy, external cephalic version etc and their follow-up'],
          'Adjunct to diagnostic and therapeutic invasive interventions such as chorionic villus sampling (CVS),amniocenteses, feel blood sampling, fetal skin biopsy, amnio-infusion, intrauterine infusion, placement of shunts etc':user.checkBoxs['Adjunct to diagnostic and therapeutic invasive interventions such as chorionic villus sampling (CVS),amniocenteses, feel blood sampling, fetal skin biopsy, amnio-infusion, intrauterine infusion, placement of shunts etc'],
          'Observation of intra-partum events':user.checkBoxs['Observation of intra-partum events'],
          'Medical or surgical conditions complicating pregnancy':user.checkBoxs['Medical or surgical conditions complicating pregnancy'],
          'Research OR scientific studies in recognized institutions':user.checkBoxs['Research OR scientific studies in recognized institutions'],
        }),
        'procedure':user.procedure,
        'otherProcedure':user.otherProcedure,
        'dateOfDeclaration':user.dateOfDeclaration,
        'dateOfProcedure':user.dateOfProcedure,
        'resultOfProcedure':user.resultOfProcedure,
        'resultConveyedTo':user.resultConveyedTo,
        'resultConveyedOn':user.resultConveyedOn,
        'indication':user.indication,
        'date':user.date,
        'place':user. place,
        })
      }

      updateSectionB(user){
        this.formList.update(user.id,{
          'docter_name':user.docter_name ,
          'indications':user.indications,
          'checkBoxs':({
            'To diagnose intra-uterine and or ectopic pregnancy and confirm viability':user.checkBoxs['To diagnose intra-uterine and or ectopic pregnancy and confirm viability'],
            'Estimation of gestational age (dating)':user.checkBoxs['Estimation of gestational age (dating)'],
            'Vaginal bleeding OR leaking':user.checkBoxs['Vaginal bleeding OR leaking'],
            'Suspected pregnancy with IUCD in-situ or suspected pregnancy following contraceptive failure OR MTP failure':user.checkBoxs['Suspected pregnancy with IUCD in-situ or suspected pregnancy following contraceptive failure OR MTP failure'],
            'Follow-up of cases of abortion':user.checkBoxs['Follow-up of cases of abortion'],
            'Assessment of cervical canal and diameter of internal os':user.checkBoxs['Assessment of cervical canal and diameter of internal os'],
            'Discrepancy between uterine size and period of amenorrhea':user.checkBoxs['Discrepancy between uterine size and period of amenorrhea'],
            'Any suspected adenexal or uterine pathology OR abnormality':user.checkBoxs['Any suspected adenexal or uterine pathology OR abnormality'],
            'Detection of chromosomal abnormalities, fetal structural defects and other abnormalities and their follow-up':user.checkBoxs['Detection of chromosomal abnormalities, fetal structural defects and other abnormalities and their follow-up'],
            'To evaluate fetal presentation and position':user.checkBoxs['To evaluate fetal presentation and position'],
            'Assessment of liquor amnii':user.checkBoxs['Assessment of liquor amnii'],
            'Preterm labor OR preterm premature rupture of membranes':user.checkBoxs['Preterm labor OR preterm premature rupture of membranes'],
            'Evaluation of placental position, thickness, grading and abnormalities (placenta praevia, retro placental haemorrhage, abnormal adherence etc':user.checkBoxs['Evaluation of placental position, thickness, grading and abnormalities (placenta praevia, retro placental haemorrhage, abnormal adherence etc'],
            'Evaluation of umbilical cord presentation, insertion, nuchal encirclement, number of vessels and presence of true knot':user.checkBoxs['Evaluation of umbilical cord presentation, insertion, nuchal encirclement, number of vessels and presence of true knot'],
            'Evaluation of previous Caesarean Section scars':user.checkBoxs['Evaluation of previous Caesarean Section scars'],
            'Evaluation of fetal growth parameters, fetal weight and fetal well being':user.checkBoxs['Evaluation of fetal growth parameters, fetal weight and fetal well being'],
            'Color flow mapping and duplex Doppler studies':user.checkBoxs['Color flow mapping and duplex Doppler studies'],
            'Ultrasound guided procedures such as medical termination of pregnancy, external cephalic version etc and their follow-up':user.checkBoxs['Ultrasound guided procedures such as medical termination of pregnancy, external cephalic version etc and their follow-up'],
            'Adjunct to diagnostic and therapeutic invasive interventions such as chorionic villus sampling (CVS),amniocenteses, feel blood sampling, fetal skin biopsy, amnio-infusion, intrauterine infusion, placement of shunts etc':user.checkBoxs['Adjunct to diagnostic and therapeutic invasive interventions such as chorionic villus sampling (CVS),amniocenteses, feel blood sampling, fetal skin biopsy, amnio-infusion, intrauterine infusion, placement of shunts etc'],
            'Observation of intra-partum events':user.checkBoxs['Observation of intra-partum events'],
            'Medical or surgical conditions complicating pregnancy':user.checkBoxs['Medical or surgical conditions complicating pregnancy'],
            'Research OR scientific studies in recognized institutions':user.checkBoxs['Research OR scientific studies in recognized institutions'],
          }),
          'procedure':user.procedure,
          'otherProcedure':user.otherProcedure,
          'dateOfDeclaration':user.dateOfDeclaration,
          'dateOfProcedure':user.dateOfProcedure,
          'resultOfProcedure':user.resultOfProcedure,
          'resultConveyedTo':user.resultConveyedTo,
          'resultConveyedOn':user.resultConveyedOn,
          'indication':user.indication,
          'date':user.date,
          'place':user. place,
        })
      }

        sectionC = new FormGroup({
          'id':new FormControl(null),
          'doctorName': new FormControl(null),
          'geneticDisease':new FormControl(null),
          'geneticHistory':new FormControl(null),
          'otherDiagnosis': new FormControl(null),
          'diagnosisProcedureIndications': new FormGroup({

            'chromosomalDisorders': new FormControl(null),
            'metabolicDisorders': new FormControl(null),
            'congenitalAnomaly': new FormControl(null),
            'mentalDisability': new FormControl(null),
            'Haemoglobinopathy': new FormControl(null),
            'sexLinkedDisorders': new FormControl(null),
            'singleGeneDisorder': new FormControl(null),
            'previousChildOrChildrenWithOthers': new FormControl(null),
            'previousChildOrChildrenWithOthersDetail': new FormControl(null),
            'advancedMaternalAge': new FormControl(null),

            'mother': new FormControl(null),
            'father': new FormControl(null),
            'sibling': new FormControl(null),
            'diagnosisProcedureIndicationsOthers': new FormControl(null),
            'diagnosisProcedureIndicationsOthersDetail': new FormControl(null)


          }),
          'pregnantWomanConsentDate': new FormControl(null),
          'invasiveProcedures': new FormGroup({
            'amniocentesis': new FormControl(null),
            'chorionicVilliAspiration': new FormControl(null),
            'fetalBiopsy': new FormControl(null),
            'Cordocentesis': new FormControl(null),
            "invasiveProceduresOthers":new FormControl(null),
            'invasiveProceduresOthersDetail': new FormControl(null)

          }),
          'invasiveProcedureComplications': new FormControl(null),
          'recommendedAditionalTests': new FormGroup({
            'chromosomalStudies': new FormControl(null),
            'biochemicalStudies':new FormControl(null),
            'molecularStudies':new FormControl(null),
            'preImplantationGenderDiagnosis': new FormControl(null),
            'recommendedAditionalTestsOthers': new FormControl(null),
            'recommendedAditionalTestsOthersDetail': new FormControl(null)


          }),
          'resultsOfTheProcedures': new FormControl(null),
          'proceduresCariedoutDate': new FormControl(null),
          'preNatalCOnveyedTo': new FormControl(null),
          'preNatalCOnveyedOn': new FormControl(null),
          'MTPIndiaction': new FormControl(null),
          'dateFIlled': new FormControl(null),
          'place':new FormControl(null)

        })


        insertSectionc(user){
          this.formList.push({
          'doctorName': user.doctorName,
          'geneticDisease':user.geneticDisease,
          'geneticHistory':user.geneticHistory,
          'otherDiagnosis': user.otherDiagnosis,
          'diagnosisProcedureIndications':({

            'chromosomalDisorders': user.diagnosisProcedureIndications.chromosomalDisorders,
            'metabolicDisorders': user.diagnosisProcedureIndications.metabolicDisorders,
            'congenitalAnomaly': user.diagnosisProcedureIndications.congenitalAnomaly,
            'mentalDisability': user.diagnosisProcedureIndications.mentalDisability,
            'Haemoglobinopathy': user.diagnosisProcedureIndications.Haemoglobinopathy,
            'sexLinkedDisorders': user.diagnosisProcedureIndications.sexLinkedDisorders,
            'singleGeneDisorder': user.diagnosisProcedureIndications.singleGeneDisorder,
            'previousChildOrChildrenWithOthers': user.diagnosisProcedureIndications.previousChildOrChildrenWithOthers,
            'previousChildOrChildrenWithOthersDetail': user.diagnosisProcedureIndications.previousChildOrChildrenWithOthersDetail,
            'advancedMaternalAge': user.diagnosisProcedureIndications.advancedMaternalAge,

            'mother': user.diagnosisProcedureIndications.mother,
            'father': user.diagnosisProcedureIndications.father,
            'sibling': user.diagnosisProcedureIndications.sibling,
            'diagnosisProcedureIndicationsOthers': user.diagnosisProcedureIndications.diagnosisProcedureIndicationsOthers,
            'diagnosisProcedureIndicationsOthersDetail': user.diagnosisProcedureIndications.diagnosisProcedureIndicationsOthersDetail


          }),
          'pregnantWomanConsentDate': user.pregnantWomanConsentDate,
          'invasiveProcedures':({
            'amniocentesis': user.invasiveProcedures.amniocentesis,
            'chorionicVilliAspiration': user.invasiveProcedures.chorionicVilliAspiration,
            'fetalBiopsy': user.invasiveProcedures.fetalBiopsy,
            'Cordocentesis': user.invasiveProcedures.Cordocentesis,
            "invasiveProceduresOthers":user.invasiveProcedures.invasiveProceduresOthers,
            'invasiveProceduresOthersDetail': user.invasiveProcedures.invasiveProceduresOthersDetail

          }),
          'invasiveProcedureComplications': user.invasiveProcedureComplications,
          'recommendedAditionalTests':({
            'chromosomalStudies': user.recommendedAditionalTests.chromosomalStudies,
            'biochemicalStudies':user.recommendedAditionalTests.biochemicalStudies,
            'molecularStudies':user.recommendedAditionalTests.molecularStudies,
            'preImplantationGenderDiagnosis': user.recommendedAditionalTests.preImplantationGenderDiagnosis,
            'recommendedAditionalTestsOthers': user.recommendedAditionalTests.recommendedAditionalTestsOthers,
            'recommendedAditionalTestsOthersDetail': user.recommendedAditionalTests.recommendedAditionalTestsOthersDetail


          }),
          'resultsOfTheProcedures': user.resultsOfTheProcedures,
          'proceduresCariedoutDate': user.proceduresCariedoutDate,
          'preNatalCOnveyedTo': user.preNatalCOnveyedTo,
          'preNatalCOnveyedOn': user.preNatalCOnveyedOn,
          'MTPIndiaction': user.MTPIndiaction,
          'dateFIlled': user.dateFIlled,
          'place':user.place

          })
        }

        updateSectionC(user){
          this.formList.update(user.id,{
            'doctorName': user.doctorName,
            'geneticDisease':user.geneticDisease,
            'geneticHistory':user.geneticHistory,
            'otherDiagnosis': user.otherDiagnosis,
            'diagnosisProcedureIndications':({

              'chromosomalDisorders': user.diagnosisProcedureIndications.chromosomalDisorders,
              'metabolicDisorders': user.diagnosisProcedureIndications.metabolicDisorders,
              'congenitalAnomaly': user.diagnosisProcedureIndications.congenitalAnomaly,
              'mentalDisability': user.diagnosisProcedureIndications.mentalDisability,
              'Haemoglobinopathy': user.diagnosisProcedureIndications.Haemoglobinopathy,
              'sexLinkedDisorders': user.diagnosisProcedureIndications.sexLinkedDisorders,
              'singleGeneDisorder': user.diagnosisProcedureIndications.singleGeneDisorder,
              'previousChildOrChildrenWithOthers': user.diagnosisProcedureIndications.previousChildOrChildrenWithOthers,
              'previousChildOrChildrenWithOthersDetail': user.diagnosisProcedureIndications.previousChildOrChildrenWithOthersDetail,
              'advancedMaternalAge': user.diagnosisProcedureIndications.advancedMaternalAge,

              'mother': user.diagnosisProcedureIndications.mother,
              'father': user.diagnosisProcedureIndications.father,
              'sibling': user.diagnosisProcedureIndications.sibling,
              'diagnosisProcedureIndicationsOthers': user.diagnosisProcedureIndications.diagnosisProcedureIndicationsOthers,
              'diagnosisProcedureIndicationsOthersDetail': user.diagnosisProcedureIndications.diagnosisProcedureIndicationsOthersDetail


            }),
            'pregnantWomanConsentDate': user.pregnantWomanConsentDate,
            'invasiveProcedures':({
              'amniocentesis': user.invasiveProcedures.amniocentesis,
              'chorionicVilliAspiration': user.invasiveProcedures.chorionicVilliAspiration,
              'fetalBiopsy': user.invasiveProcedures.fetalBiopsy,
              'Cordocentesis': user.invasiveProcedures.Cordocentesis,
              "invasiveProceduresOthers":user.invasiveProcedures.invasiveProceduresOthers,
              'invasiveProceduresOthersDetail': user.invasiveProcedures.invasiveProceduresOthersDetail

            }),
            'invasiveProcedureComplications': user.invasiveProcedureComplications,
            'recommendedAditionalTests':({
              'chromosomalStudies': user.recommendedAditionalTests.chromosomalStudies,
              'biochemicalStudies':user.recommendedAditionalTests.biochemicalStudies,
              'molecularStudies':user.recommendedAditionalTests.molecularStudies,
              'preImplantationGenderDiagnosis': user.recommendedAditionalTests.preImplantationGenderDiagnosis,
              'recommendedAditionalTestsOthers': user.recommendedAditionalTests.recommendedAditionalTestsOthers,
              'recommendedAditionalTestsOthersDetail': user.recommendedAditionalTests.recommendedAditionalTestsOthersDetail


            }),
            'resultsOfTheProcedures': user.resultsOfTheProcedures,
            'proceduresCariedoutDate': user.proceduresCariedoutDate,
            'preNatalCOnveyedTo': user.preNatalCOnveyedTo,
            'preNatalCOnveyedOn': user.preNatalCOnveyedOn,
            'MTPIndiaction': user.MTPIndiaction,
            'dateFIlled': user.dateFIlled,
            'place':user.place

          })
        }

        sectionD = new FormGroup({
          'id':new FormControl(null),
          'name':new FormControl(null),
          'diagnosis':new FormControl(null),
          'dateOfDeclaretion': new FormControl(null),
          'nameOfIdentification':new FormControl(null),
          'age': new FormControl(null),
          'gender': new FormControl(null),
          'relationship': new FormControl(null),
          'address':new  FormControl(null),
          'contactNumber':new FormControl(null,Validators.compose([Validators.minLength(10),
          Validators.maxLength(10),Validators.required])),
          'dateOfAttestation': new FormControl(null),
          'dateOfConductingTest': new FormControl(null),
          'nameOfPersonConductingTest': new FormControl(null),
          'nameOfPersonReciveingTest': new FormControl(null)
        })


        insertSectionD(user){
          this.formList.push({
            'name':user.name,
            'diagnosis':user.diagnosis,
            'dateOfDeclaretion': user.dateOfDeclaretion,
            'nameOfIdentification':user.nameOfIdentification,
            'age': user.age,
            'gender': user.gender,
            'relationship': user.relationship,
            'address':user.address,
            'contactNumber':user.contactNumber,
            'dateOfAttestation': user.dateOfAttestation,
            'dateOfConductingTest': user.dateOfConductingTest,
            'nameOfPersonConductingTest': user.nameOfPersonConductingTest,
            'nameOfPersonReciveingTest': user.nameOfPersonReciveingTest
          })
        }


        updateSectionD(user){
          this.formList.update(user.id,{
            'name':user.name,
            'diagnosis':user.diagnosis,
            'dateOfDeclaretion': user.dateOfDeclaretion,
            'nameOfIdentification':user.nameOfIdentification,
            'age': user.age,
            'gender': user.gender,
            'relationship': user.relationship,
            'address':user.address,
            'contactNumber':user.contactNumber,
            'dateOfAttestation': user.dateOfAttestation,
            'dateOfConductingTest': user.dateOfConductingTest,
            'nameOfPersonConductingTest': user.nameOfPersonConductingTest,
            'nameOfPersonReciveingTest': user.nameOfPersonReciveingTest
          })
        }





}
