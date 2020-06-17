import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { Task } from '../../modeltypes';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task: Task
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

}
