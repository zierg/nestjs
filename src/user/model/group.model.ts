import { Column, Model, Table, BelongsToMany} from 'sequelize-typescript';
import { User } from './user.model';
import { UserGroup } from './user.group.model';

@Table({ tableName: 'groups' })
export class Group extends Model {
  @Column({ field: 'name' })
  name: string;

  @BelongsToMany(() => User, () => UserGroup)
  user: User;
}