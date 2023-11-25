import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule-service.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  
  schedules:any[];
  packageOptions:any[];
  statusOptions:any[];

  constructor(private s:ScheduleService) { }


  ngOnInit(): void {

    this.s.getSchedules().subscribe(r => this.schedules=r)
    this.s.getPackages().subscribe(r=>this.packageOptions=r)
    this.s.getStatuses().subscribe(r=>this.statusOptions=r)

    
   
  }

  
}
