import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hashSync } from 'bcrypt';

@Entity('UserCompany')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @Column()
  provider: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAtt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAtt: Date;

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAtt: Date;
}
