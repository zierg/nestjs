import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserGroup } from './model/user.group.model';
import { Group } from './model/group.model';

@Module({
  imports: [SequelizeModule.forFeature([User, UserGroup, Group])],
  exports: [SequelizeModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
