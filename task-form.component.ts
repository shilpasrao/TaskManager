import { Component, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  constructor() { }
  ngOnInit(): void {
  }

  //Create a new Task
  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        name: this.newTask,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }
}