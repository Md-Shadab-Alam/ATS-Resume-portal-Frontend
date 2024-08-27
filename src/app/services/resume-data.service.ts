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
 
   BaseApiUrl: string = 'https://localhost:7101/api'
  //BaseApiUrl: string = 'https://resumeportal.azurewebsites.net/api/'
   AiAPIUrl : string ='https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAJmaUeYQ5YucYaKxZt13izqFty2vZvI_E';
 

  getAllResumes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BaseApiUrl}/Resumes`);
  }
 
  // searchResumes(query: string): Observable<any[]>{
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   const body= {
  //     contents:[
  //       {
  //         parts:[
  //           {text: query}
  //         ]
  //       }
  //     ]
  //   }
  //   console.log("query");

  //   return this.http.post<any>(this.AiAPIUrl,body,{headers}).pipe(
  //     switchMap((response)=>{
  //       const keyword = response.keyword || query;

  //       console.log(response)
  //       let params = new HttpParams().set('query', keyword);

  //       return this.http.get<any[]>(`${this.BaseApiUrl}/Resumes/search`, {params});
  //     }),
  //   )
  // }

  findKeyword(query:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      contents: [
        {
          parts: [
             { text: " just give me the keyword not whole sentence, dont write keyword" +  query }
            //{text: "find the keywords which may be related to IT sector, location, technology, skills, and experience from this" + query + "do not generater any new keywords by yourself"}
          ]
        }
      ]
    };

  return this.http.post<any>(this.AiAPIUrl,body,{headers});

  }

  searchResumes(query:string): Observable<any[]>{
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