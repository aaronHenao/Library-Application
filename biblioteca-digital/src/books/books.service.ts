import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "./entities/book.entity";
import { Not, Repository } from "typeorm";
import { Author } from "src/authors/entities/author.entity";
import { CreateBookDto } from "./dto/create-book.dto";
import { BookResponseDto } from "./dto/book-response.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
        @InjectRepository(Author) private readonly authorRepository: Repository<Author>
    ){}

    async getAll(): Promise<BookResponseDto[]> {
        const books = await this.bookRepository.find(); 
        if(!books || books.length === 0){
            throw new NotFoundException('No se encontraron libros');
        }
        return books.map(book => new BookResponseDto(book))
    } 

    async getBookById(id:number): Promise<BookResponseDto>{
        const book = await this.bookRepository.findOneBy({id: id})

        if(!book){
            throw new NotFoundException(`Libro con ID ${id} no se encontró`)
        }
        return new BookResponseDto(book);
    }

    async create(createBook: CreateBookDto): Promise<BookResponseDto> {
        const existBook = await this.bookRepository.findOneBy({title: createBook.title});

        if(existBook){
            throw new BadRequestException(`El libro de título - ${createBook.title} - ya existe en el sistema`)
        }

        const author = await this.authorRepository.findOneBy({id: createBook.authorId});
        if(!author){
            throw new NotFoundException(`Autor con id ${createBook.authorId} no encontrado`)
        }

        const newBook = this.bookRepository.create({...createBook, author: author});
        this.bookRepository.save(newBook);
        return new BookResponseDto(newBook)
    }

    async updateBook(id:number, updateBookTitle: UpdateBookDto): Promise<BookResponseDto>{
        const book = await this.bookRepository.preload({id: id, ...updateBookTitle});

        if(!book){
            throw new NotFoundException(`Libro ID ${id} no encontrado`)
        }
        this.bookRepository.save(book);
        return new BookResponseDto(book)
    }

    async delete(id: number): Promise<BookResponseDto>{
        const book = await this.bookRepository.findOneBy({ id });
        if (!book) {
            throw new NotFoundException(`Libro con id ${id} no existe`);
        }
        await this.bookRepository.remove(book);
        return new BookResponseDto(book);
    }

}
