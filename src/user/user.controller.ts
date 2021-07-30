import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './model/user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/')
  async create(@Body() user: User) {
    return this.userService.create(user);
  }
}
