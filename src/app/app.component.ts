import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';

interface Task {
  _id?: string;
  name: string;
  description: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  task: Task = { name: '', description: '' };
  tasks: Task[] = [];
  isEditing = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTasks();
  }

  openSidebar() {
    this.sidenav.open();
  }

  closeSidebar() {
    this.sidenav.close();
    this.isEditing = false;
    this.task = { name: '', description: '' }; // Reset task
  }

  fetchTasks() {
    const apiUrl = 'http://localhost:2030/get';
    this.http.get<Task[]>(apiUrl).subscribe(
      response => {
        this.tasks = response;
      },
      error => {
        console.error('Error fetching tasks:', error);
      }
    );
  }


  onSubmit() {
    if (this.isEditing) {
      this.updateTask(this.task._id!);
    } else {
      this.addTask();
    }
  }

  addTask() {
    const apiUrl = 'http://localhost:2030/post';
    this.http.post(apiUrl, this.task).subscribe(
      response => {
        console.log('Task submitted successfully:', response);
        this.fetchTasks(); // Refresh the task list after adding a new task
        this.closeSidebar();
      },
      error => {
        console.error('Error submitting task:', error);
      }
    );
  }

  updateTask(id: string) {
    const apiUrl = `http://localhost:2030/put/${id}`;
    this.http.put(apiUrl, this.task).subscribe(
      response => {
        console.log('Task updated successfully:', response);
        this.fetchTasks(); // Refresh the task list after updating a task
        this.closeSidebar();
      },
      error => {
        console.error('Error updating task:', error);
      }
    );
  }

  deleteTask(id: string) {
    const apiUrl = `http://localhost:2030/delete/${id}`;
    this.http.delete(apiUrl).subscribe(
      response => {
        console.log('Task deleted successfully:', response);
        this.fetchTasks(); // Refresh the task list after deleting a task
      },
      error => {
        console.error('Error deleting task:', error);
      }
    );
  }


  editTask(task: Task) {
    this.task = { ...task };
    this.isEditing = true;
    this.openSidebar();
  }
}






















































































































































