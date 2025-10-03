import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({ 
    type: 'mysql', 
    host: 'sql5.freesqldatabase.com',
    port: 3306,
    username: 'sql5800810',
    password: 'PZP5bplHeV', 
    database: 'sql5800810', 
    entities: [__dirname + '/**/*.entity{.ts,.js}'], 
    synchronize: true, // ¡SOLO PARA DESARROLLO! 
  }),
  AuthorsModule,
  BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
