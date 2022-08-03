import {
  Component,
  VERSION,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 //---------------------------------------------------*------------------------------------------------------------------//

 @ViewChild('pdf', { static: false })
 pdf!: ElementRef;

 public viewPDF() {
   // Document of 981pt wide and 940pt high
   const doc: jsPDF = new jsPDF('p', 'pt', [981, 940]);

   const specialElementHandlers = {
     '#editor': function (element: any, renderer: any) {
       return true;
     },
   };

   const pdfTable = this.pdf.nativeElement;

   doc.html(pdfTable, {
     callback: (doc) => {
       //opening the document to view in new window
       doc.output('dataurlnewwindow');
     },
   });
 }

 //---------------------------------------------------*------------------------------------------------------------------//

 //For downloading the pdf

 public downloadAsPDF() {
   // Document of 981pt wide and 940pt high
   const doc: jsPDF = new jsPDF('p', 'pt', [981, 940], true);

   const specialElementHandlers = {
     '#editor': function (element: any, renderer: any) {
       return true;
     },
   };

   const pdfTable = this.pdf.nativeElement;

   doc.html(pdfTable, {
     callback: (doc) => {
       //saving the document with a custom name
       doc.save(`${this.Fullname}_Resume.pdf`);
     },
   });
 }

 //---------------------------------------------------*------------------------------------------------------------------//

 //Variables for Accesing th information for reume
 Fullname: string = '';
 phoneNumber: any = '';
 Email: any = '';
 Address: any = '';
 PS: any = '';
 DOB: any = '';
 Skill: string = '';
 university:string='';
 university2:string='';
 Degree:string='';
 Degree2:string='';
 edu_year:any='';
 edu_year2:any='';
 Percentage:any='';
 ED:string=""
 ED2:string='';
 Percentage2:any='';
 selectedOption:any='';
 company_name:any='';
 JD:any='';
 Jdescription:string='';
 Experience:any='';
 Hobbies:any=''

 //---------------------------------------------------*------------------------------------------------------------------//

 //function to add more than one skills 
 addSkills(){
   const txt:any =(<HTMLInputElement>document.getElementById('skills')).value;
   const listNode = document.getElementById('list');
   const liNode = document.createElement('LI');
   const txtNode=document.createTextNode(txt);
   liNode.appendChild(txtNode);
   listNode?.appendChild(liNode);
 }

 //---------------------------------------------------*------------------------------------------------------------------//
 //function to add more than one Hobbies 


 addHobbies(){
   const txt2:any =(<HTMLInputElement>document.getElementById('hobbies')).value;
   const listNode2 = document.getElementById('list2');
   const liNode2 = document.createElement('LI');
   const txtNode2=document.createTextNode(txt2);
   liNode2.appendChild(txtNode2);
   listNode2?.appendChild(liNode2);
 }
}