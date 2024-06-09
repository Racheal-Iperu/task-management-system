import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrls: ['./tasks-dashboard.component.css']
})
export class TasksDashboardComponent implements OnInit {
  tasks

  constructor(private tasksService: TasksService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.tasksService.getTasks().subscribe(res => {
      this.tasks = res
    })
  }

  handleTaskClick(task) {
    const taskId = task.id
    this.route.navigate([`tasks-form/${taskId}`])
  }

  addTask(){
    this.route.navigate(["tasks-form"])
  }
}
