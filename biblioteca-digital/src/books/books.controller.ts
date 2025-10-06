import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { LibraryApplicationBaseResponse } from 'src/common/dto/base-response.dto';
import { BookResponseDto } from './dto/book-response.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService){}

    @Get()
    async getAll(): Promise<LibraryApplicationBaseResponse<BookResponseDto[]>>{
        const books = await this.bookService.getAll();
        return {
            statusCode: 200,
            message: 'Libros obtenidos correctamente',
            data: books 
        };
    }

    @Get(':id')
    async getBookById(@Param('id') id:string): Promise<LibraryApplicationBaseResponse<BookResponseDto>>{
        const book = await this.bookService.getBookById(+id)
        return {
            statusCode: 200,
            message: 'Libro obtenido correctamente',
            data: book
        };
    }

    @Post()
    async create(@Body() createBook: CreateBookDto): Promise<LibraryApplicationBaseResponse<BookResponseDto>>{
        const book = await this.bookService.create(createBook);
        return{
            statusCode: 201, 
            message: 'Libro creado correctamente',
            data: book
        }

    }

    @Patch(':id')
    async updateBook(@Param('id') id:string, @Body() updateBook: UpdateBookDto): Promise<LibraryApplicationBaseResponse<BookResponseDto>>{
        const book = await this.bookService.updateBook(+id, updateBook);
        return{
            statusCode: 202, 
            message: 'Libro actualizado correctamente',
            data: book
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<LibraryApplicationBaseResponse<BookResponseDto>>{
        const book = await this.bookService.delete(+id)
        return{
            statusCode: 202, 
            message:'Libro eliminado correctamente',
            data: book
        }
    }

}
