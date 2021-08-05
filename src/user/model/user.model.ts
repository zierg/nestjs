import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { UserGroup } from './user.group.model';
import { Group } from './group.model';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ field: 'first_name' })
  firstName: string;

  @Column({ field: 'last_name' })
  lastName: string;

  @Column({ field: 'is_active', defaultValue: true })
  isActive: boolean;

  @BelongsToMany(() => Group, () => UserGroup)
  group: Group;
}