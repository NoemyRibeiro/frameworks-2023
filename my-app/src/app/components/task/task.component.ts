import { TaskService } from './../task.service';
import { Router } from '@angular/router';
import { Task } from './../../model/task';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  nome = new FormControl('');
  descricao = new FormControl('');
  responsavel = new FormControl('');
  dt_inicio = new FormControl('');
  dt_fim = new FormControl('');

  tasks: Task[] = [];

  constructor(private router: Router, private taskService: TaskService) {}
  addTask() {
    const t = this.dataToObject();

    this.taskService.tasks.push(t);
    this.limpar();

    setTimeout(() => {
      this.router.navigateByUrl('dashboard');
    }, 1000);
  }

  dataToObject() {
    let task = new Task(); // Criar um objeto
    task.nome = this.nome.value!;
    task.descricao = this.descricao.value!;
    task.responsavel = this.responsavel.value!;
    task.dt_inicio = new Date(this.dt_inicio.value!);
    task.dt_fim = new Date(this.dt_fim.value!);

    return task;
  }

  limpar() {
    this.nome.setValue('');
    this.descricao.setValue('');
    this.responsavel.setValue('');
    this.dt_inicio.setValue('');
    this.dt_fim.setValue('');
  }
}
