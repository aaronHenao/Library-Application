import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookTitleDto } from './dto/update-book-title.dto';
import { UpdateAvailableDto } from './dto/update-book-available.dto';
import { UpdateBookAuthorIdDto } from './dto/update-book-author-id.dto';
import { LibraryApplicationBaseResponse } from 'src/common/dto/base-response.dto';
import { BookResponseDto } from './dto/book-response.dto';

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

    @Patch(':id/title')
    async updateTitle(@Param('id') id:string, @Body() updateBookTitle: UpdateBookTitleDto): Promise<LibraryApplicationBaseResponse<BookResponseDto>>{
        const book = await this.bookService.updateTitle(+id, updateBookTitle);
        return{
            statusCode: 202, 
            message: 'Nombre del libro actualizado correctamente',
            data: book
        }
    }

    @Patch(':id/available')
    async updateAvailable(@Param('id') id:string, @Body() updateBookAvailable: UpdateAvailableDto): Promise<LibraryApplicationBaseResponse<BookResponseDto>>{
        const book = await this.bookService.updateAvailable(+id, updateBookAvailable);
        return{
            statusCode: 202, 
            message: 'Disponibilidad del libro actualizada correctamente',
            data: book
        }
    }

    @Patch(':id/author-id')
    async updateAuthorId(@Param('id') id:string, @Body() updateBookAuthorId: UpdateBookAuthorIdDto): Promise<LibraryApplicationBaseResponse<BookResponseDto>>{
        const book = await this.bookService.updateAuthorId(+id, updateBookAuthorId);
        return{
            statusCode: 202, 
            message: 'Autor del libro actualizado correctamente',
            data: book
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<LibraryApplicationBaseResponse<BookResponseDto>>{
        const book = await this.bookService.delete(+id)
        return{
            statusCode: 202, 
            message:'Autor eliminado correctamente',
            data: book
        }
    }

}
