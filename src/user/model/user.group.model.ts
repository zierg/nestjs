import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { Group } from './group.model';

@Table({ tableName: 'user_groups'} )
export class UserGroup extends Model {

  @ForeignKey(() => User)
  @Column({ field: 'user_id' })
  userId: number;

  @ForeignKey(() => Group)
  @Column({ field: 'group_id' })
  groupId: number;
}