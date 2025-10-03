import { Book } from "src/books/entities/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 100, unique:true, nullable:false})
    name:string;

    @Column({type: 'date', nullable:true})
    birthDate?: string;
    
    @OneToMany(() => Book, book => book.author) 
    books: Book[];
}