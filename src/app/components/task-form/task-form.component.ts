import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TasksService} from "../../services/tasks.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  formGroup: FormGroup;
  editing: boolean = false
  taskId: number

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private tasksService: TasksService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      assignee: ['', [Validators.required]],
      status: ['', Validators.required],
      taskName: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.route.params.subscribe(params => {
      this.taskId = params['taskId'] // if exists means we are editing
      if (this.taskId) {
        this.editing = true
        this.tasksService.getTaskById(this.taskId).subscribe(res => {
          this.formGroup.patchValue(res);
        })
      }
    })

  }
  onSubmit() {
    if (this.formGroup.invalid) {
      return
    } else {
      if (this.editing) {
        this.tasksService.updateTask(this.formGroup.value, this.taskId).subscribe({
          next: (res => {
            this.router.navigate([`dashBoard`])
          }),
          error: (error: HttpErrorResponse) => {

          }
        })
      } else {
        this.tasksService.createTask(this.formGroup.value).subscribe({
          next: (res => {
            this.router.navigate([`dashBoard`])
          }),
          error: (error: HttpErrorResponse) => {

          }
        })
      }
    }
  }
  //delete a task
  deleteTask(){
    this.tasksService.deleteTask(this.taskId).subscribe({
        next: (res => {
          this.router.navigate([`dashBoard`])
        }),
        error: (error: HttpErrorResponse) => {

        }
      }

    )
  }

  resetForm(){
    this.formGroup.reset();
  }

  backToDashBoard(){
    this.router.navigate([`dashBoard`])
  }
}
