import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { UpdateAuthorNameDto } from './dto/update-author-name.dto';
import { UpdateAuthorBirthDateDto } from './dto/update-author-birth-date.dto';
import { AuthorResponseDto } from './dto/author-response.dto';


@Injectable()
export class AuthorsService {
    constructor(@InjectRepository(Author) private authorRepository: Repository<Author>){}

    async getAll(): Promise<AuthorResponseDto[]>{
        const authors = await this.authorRepository.find();

        if(!authors || authors.length === 0){
            throw new NotFoundException('No se encontraron autores');
        }
        return authors.map(author => new AuthorResponseDto(author))
    }
    
    async getAuthorById(id:number): Promise<AuthorResponseDto>{
        const author = await this.authorRepository.findOneBy({ id });
        if (!author) {
            throw new NotFoundException(`Autor con id ${id} no existe`);
        }
        return new AuthorResponseDto(author);
    }

    async create(newAuthor: Omit<Author, 'id' | 'books'>): Promise<AuthorResponseDto>{
        const existAuthor = await this.authorRepository.findOne({where: {name: newAuthor.name}});

        if(existAuthor){
            throw new BadRequestException(`El autor ${newAuthor.name} ya existe.`)
        }

        const author = await this.authorRepository.create(newAuthor)
        const savedAuthor = await this.authorRepository.save(author)
        return new AuthorResponseDto(savedAuthor)
    }

    async updateName(id: number, updateAuthorName: UpdateAuthorNameDto): Promise<AuthorResponseDto> {
        const author = await this.authorRepository.preload({id: id, ...updateAuthorName})
        if (!author) {
            throw new NotFoundException(`Author con id ${id} no existe`);
        }
        const updatedAuthor = await this.authorRepository.save(author);
        return new AuthorResponseDto(updatedAuthor)
    }

    async updateBirthDate(id: number, updateAuthorBirthDate: UpdateAuthorBirthDateDto): Promise<AuthorResponseDto> {
        const author = await this.authorRepository.preload({id: id, ...updateAuthorBirthDate})
        if (!author) {
            throw new NotFoundException(`Author con id ${id} no existe`);
        }
        const updatedAuthor = await this.authorRepository.save(author);
        return new AuthorResponseDto(updatedAuthor)
    }

    async delete(id:number): Promise<AuthorResponseDto>{
        const author = await this.authorRepository.findOneBy({ id });
        if (!author) {
            throw new NotFoundException(`Autor con id ${id} no existe`);
        }

        const deletedAuthor = await this.authorRepository.remove(author);
        return new AuthorResponseDto(deletedAuthor);
    }

}
