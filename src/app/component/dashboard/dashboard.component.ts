import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ResumeDataService } from 'src/app/services/resume-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

data:any;


resumes?: any[];
  resumes1: any[] =[];
  flag: boolean = true;
  selectedResumes: any[] =[];
  isDownloading: boolean =false;
 
  constructor(private resumeService: ResumeDataService, private http: HttpClient) { }
 
  ngOnInit(): void {
    this.loadResumes();
  }

  
 
  loadResumes():void{
    this.resumeService.getAllResumes().subscribe(
      data => {
        this.resumes = data;
        console.log(data)
      },
      error => {
        console.error('Error fetching resume', error);
      }
    );
  }
 
  onSearch(query: string):void{
   
    this.resumeService.findKeyword(query).subscribe(
      res => {
         this.data = res.candidates[0].content.parts[0].text
        // this.resumes1 = this.data;
        // this.flag = false;
        console.log(res);
        console.log('Search results:', this.data);
        this.resumeService.searchResumes(this.data).subscribe(
          resp=>{
            this.resumes1 = resp;
            this.flag = false;
            console.log('Search results:', resp);
          },
          error =>{
            console.error('Error search resume:', error);
          }

        )
      },
      error => {
        console.error('Error search resumes:', error);
      }
    )
  }
 
 
  downloadSelectedResumes(){
    const selectedResumes = this.resumes1.filter(r => r.selected);
 
    selectedResumes.forEach((resume, index) => {
      setTimeout(() => {
        this.resumeService.downloadResume(resume.id).subscribe(blob => {
          console.log("check");
          const downloadUrl = window.URL.createObjectURL(blob);
           const link = document.createElement('a');
           link.href = downloadUrl;
           link.download= resume.fileName;
           document.body.appendChild(link);
           link.click();
           document.body.removeChild(link);
        });
      }, index * 3000)
    });
 
  }

  // downloadResume(){
  //   this.resumeService.downloadResume().subscribe(blob => {
  //     console.log("check");
  //     const downloadUrl = window.URL.createObjectURL(blob);
  //      const link = document.createElement('a');
  //      link.href = downloadUrl;
  //      link.download= resume.fileName;
  //      document.body.appendChild(link);
  //      link.click();
  //      document.body.removeChild(link);
  //   });
  // }

}