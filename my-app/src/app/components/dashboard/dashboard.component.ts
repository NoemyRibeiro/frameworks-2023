import { TaskService } from './../task.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private taskService: TaskService) {}
  ngOnInit(): void {
    this.loadTasks();
    console.log(this.tasks)
  }
  loadTasks() {
    console.log('carregar as tasks');
    this.tasks = this.taskService.tasks
  }

  user = 'Noemy';

  tasks: Task[] = [];

  addTask() {
    this.router.navigateByUrl('/task', {
      state: this.tasks,
    });
  }
}
