import { Author } from "src/authors/entities/author.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    @PrimaryGeneratedColumn() 
    id: number; 

    @Column({ type: 'varchar', length: 255 }) 
    title: string; 

    @Column({ type: 'int' }) 
    publicationYear: number; 

    @Column({ type: 'boolean', default: false }) 
    isAvailable: boolean; 

    @ManyToOne(() => Author, author => author.books, { onDelete: 'SET NULL' }) 
    author: Author; 
}