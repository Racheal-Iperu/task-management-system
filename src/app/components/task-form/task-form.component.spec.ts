import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { TaskFormComponent } from './task-form.component';
import { TasksService } from '../../services/tasks.service';
import { UsersService } from '../../services/users.service';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;
  let mockActivatedRoute, mockRouter, mockTasksService, mockUsersService;

  beforeEach(async () => {
    mockActivatedRoute = {
      params: of({ taskId: 1 }) // Mocking route params
    };
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockTasksService = jasmine.createSpyObj(['getTaskById', 'updateTask', 'createTask', 'deleteTask']);
    mockTasksService.getTaskById.and.returnValue(of({ /* mock task data */ }));
    mockUsersService = jasmine.createSpyObj(['getUsers']);
    mockUsersService.getUsers.and.returnValue(of([
      {
        "id": 1,
        "username": "user1",
        "password": "password1",
        "fName": "Joe"
      }, {
        "id": 2,
        "username": "user2",
        "password": "password2",
        "fName": "Doe"
      }
    ])); // mock data for users returned

    await TestBed.configureTestingModule({
      declarations: [ TaskFormComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: TasksService, useValue: mockTasksService },
        { provide: UsersService, useValue: mockUsersService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //testing that the component is  created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on initialization', () => {
    expect(component.users).toEqual([{
      "id": 1,
      "username": "user1",
      "password": "password1",
      "fName": "Joe"
    }, {
      "id": 2,
      "username": "user2",
      "password": "password2",
      "fName": "Doe"
    }]);
  });


  it('should reset form', () => {
    component.formGroup.setValue({
      assignee: 'User 1',
      status: 'in_progress',
      taskName: 'Task 1',
      description: 'Description 1'
    });
    component.resetForm();
    expect(component.formGroup.value).toEqual({ // when a form is reset it's values become null
      assignee: null,
      status: null,
      taskName: null,
      description: null
    });
  });

  it('should navigate back to dashboard', () => {
    component.backToDashBoard();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['dashBoard']);
  });

  it('should delete task', () => {
    component.deleteTask();
    expect(mockTasksService.deleteTask).toHaveBeenCalledWith(1); // Ensure taskId matches the mock value
  });
});
