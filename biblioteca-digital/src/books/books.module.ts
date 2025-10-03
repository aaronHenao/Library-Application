import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity';
import { Book } from './entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
