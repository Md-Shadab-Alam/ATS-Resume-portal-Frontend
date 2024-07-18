import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  //private apiUrl = (environment as any).apiUrl;


  constructor(private http: HttpClient) { } 
 
  // BaseApiUrl: string = 'https://localhost:7101/api'
  BaseApiUrl: string = 'https://resumeportal.azurewebsites.net/api/'

  getAllResumes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BaseApiUrl}/Resumes`);
  }
 
  searchResumes(query: string): Observable<any[]>{
    let params = new HttpParams().set('query', query);
    return this.http.get<any[]>(`${this.BaseApiUrl}/Resumes/search`, {params: params});
  }
 
  uploadResume(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('resume', file, file.name);
 
    return this.http.post(`${this.BaseApiUrl}/resumes/upload`, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }
 
  //change for checkbox
  downloadResume(id: number): Observable<Blob> {
    return this.http.get(`${this.BaseApiUrl}/Resumes/download/${id}`, {responseType: 'blob'});
  }
 // https://localhost:7101/api/Resumes/download/2
}