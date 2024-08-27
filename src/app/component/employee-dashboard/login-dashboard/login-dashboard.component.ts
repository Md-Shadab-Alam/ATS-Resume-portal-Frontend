import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from 'src/app/services/resume-data.service';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css']
})
export class LoginDashboardComponent  implements OnInit {
  selectedFile: File | undefined;

  constructor(private http: HttpClient, private resumeService: ResumeDataService) { }

  ngOnInit() { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      console.log(this.selectedFile)
      // Send the file to your backend API
      
      this.resumeService.uploadResume(this.selectedFile)
        .subscribe(
          (response) => {
            console.log('File uploaded successfully:', response);
          },
          (error) => {
            console.error('Error uploading file:', error);
          }
        );
    }
  }
}