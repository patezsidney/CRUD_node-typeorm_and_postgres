import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  isAdm: boolean;

  @Column()
  createdOn: Date;

  @Column()
  updatedOn: Date;

  @Column()
  password: string;
}
