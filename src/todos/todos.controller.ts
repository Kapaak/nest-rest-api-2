import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './schemas/todo.schema';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAll(): Promise<Todo[]> {
    return this.todosService.getAll();
  }

  @Get(':id')
  async getOne(@Param() param): Promise<Todo> {
    return this.todosService.getOne(param.id);
  }
  //   create(@Body() createItemDto: CreateItemDto): Promise<Item> {
  @Post()
  async createTodo(@Body() createTodoDto: any): Promise<Todo> {
    return this.todosService.createTodo(createTodoDto);
  }

  @Put(':id')
  async updateTodo(@Body() updateTodoDto, @Param('id') id) {
    console.log(id);
    console.log(updateTodoDto);

    return this.todosService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id): Promise<Todo> {
    return this.todosService.deleteTodo(id);
  }
}
