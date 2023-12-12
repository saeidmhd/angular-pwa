import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Angular PWA App</h1>
      <p>Data from server: {{ serverData?.message }}</p>
      <button (click)="updateData()">Update Data</button>
    </div>
  `
})
export class AppComponent implements OnInit {
  serverData: any;
  title: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.serverData = data;
    });
  }

  updateData(): void {
    const newData = { message: 'Updated from Angular PWA' };
    this.apiService.sendData(newData).subscribe(response => {
      console.log(response);
      this.serverData = newData;
    });
  }
}
