import {
  Entity, Column, UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn
} from 'typeorm';
import { v4 as uuid } from "uuid";
import { Expose } from 'class-transformer';

@Entity('tags')
class Tag {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  name: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @Expose({ name: 'hashtag' })
  hashtag(): string {
    return `#${this.name}`
  }

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default Tag;
