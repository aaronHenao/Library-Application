import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe, Delete, UseGuards } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorNameDto } from './dto/update-author-name.dto';
import { UpdateAuthorBirthDateDto } from './dto/update-author-birth-date.dto';
import { LibraryApplicationBaseResponse } from 'src/common/dto/base-response.dto';
import { AuthorResponseDto } from './dto/author-response.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(): Promise<LibraryApplicationBaseResponse<AuthorResponseDto[]>>{
        const authors = await this.authorsService.getAll();
        return {
            statusCode: 200,
            message: 'Autores obtenidos correctamente',
            data: authors 
        };
    }

    @Get(':id')
    async getAuthorById(@Param('id') id: string): Promise<LibraryApplicationBaseResponse<AuthorResponseDto>>{
        const author = await this.authorsService.getAuthorById(+id)
        return {
            statusCode: 200,
            message: 'Autor obtenido correctamente',
            data: author
        };
    }

    @Post()
    async save(@Body() autor:CreateAuthorDto): Promise<LibraryApplicationBaseResponse<AuthorResponseDto>>{
        const author = await  this.authorsService.create(autor)
        return{
            statusCode: 201, 
            message: 'Autor creado correctamente',
            data: author
        }
    }

    @Patch(':id/name')
    async updateName(@Param('id') id: string, @Body() updateAuthorName: UpdateAuthorNameDto): Promise<LibraryApplicationBaseResponse<AuthorResponseDto>>{
        const author = await this.authorsService.updateName(+id, updateAuthorName);
        return{
            statusCode: 202, 
            message: 'Nombre del autor actualizado correctamente',
            data: author
        }
    }
    
    @Patch(':id/birth-date')
    async updateBirthDate(@Param('id') id: string, @Body() updateAuthorBirthDate: UpdateAuthorBirthDateDto): Promise<LibraryApplicationBaseResponse<AuthorResponseDto>>{
        const author =  await this.authorsService.updateBirthDate(+id, updateAuthorBirthDate)
        return{
            statusCode: 202, 
            message: 'Fecha de nacimiento del autor actualizada correctamente',
            data: author
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<LibraryApplicationBaseResponse<AuthorResponseDto>>{
        const author = await this.authorsService.delete(id);
        return{
            statusCode: 202, 
            message:'Autor eliminado correctamente',
            data: author
        }
    }


}
