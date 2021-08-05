import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './model/user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Get('/')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/')
  async create(@Body() user: User) {
    return this.userService.create(user);
  }
}
