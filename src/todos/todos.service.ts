import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodosService {
  // constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}
  constructor(@InjectModel('Todo') private todoModel: Model<TodoDocument>) {}

  async getAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async createTodo(createTodoDto: any): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async getOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({ _id: id });
  }

  async updateTodo(id: string, todo: any): Promise<Todo> {
    // return this.todoModel.findById(id, todo);
    return this.todoModel.findByIdAndUpdate(id, todo, {
      useFindAndModify: false,
    });
  }

  async deleteTodo(id: string): Promise<Todo> {
    console.log(id);

    return await this.todoModel.findByIdAndRemove(id, {
      useFindAndModify: false,
    });
  }
}
