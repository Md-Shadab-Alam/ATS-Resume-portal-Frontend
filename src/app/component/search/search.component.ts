import { Component, EventEmitter, Output } from '@angular/core';
import { ResumeDataService } from 'src/app/services/resume-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string='';
  @Output() search = new EventEmitter<string>();
 
 
  constructor(private resumeService: ResumeDataService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  // onSearch(): void{
  //   this.resumeService.searchResumes(this.query).subscribe(resumes => {
  //     console.log(resumes);
  //   });
 
  onSearch(): void{
    this.search.emit(this.query)
    console.log("Search")
  }
}
