import { BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserResponseDto } from '../dto/user-response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async getAll(): Promise<UserResponseDto[]>{
        const users = await this.userRepository.find()

        if(!users || users.length === 0){
            throw new NotFoundException("No se encontraron usuarios");
        }

        return users.map(users => new UserResponseDto(users));
    }

    async getUserById(id: number): Promise<UserResponseDto>{
        const user = await this.userRepository.findOneBy({id: id})

        if(!user){
            throw new NotFoundException("No se encontraron usuarios");
        }

        return new UserResponseDto(user)
    }

    async create(newUser: CreateUserDto): Promise<UserResponseDto>{
        const existUser = await this.userRepository.findOneBy({email: newUser.email});

        if(existUser){
            throw new BadRequestException("El correo ya está registrado en el sistema");
        }

        const user = await this.userRepository.create(newUser);
        const savedUser = await this.userRepository.save(user);
        return new UserResponseDto(savedUser);
    }

   async updateUser(id: number, updatedUser: UpdateUserDto){
        const user = await this.userRepository.preload({id: id, ...updatedUser})
        if (!user) {
            throw new NotFoundException(`Author con id ${id} no existe`);
        }
                
        const updatedAuthor = await this.userRepository.save(user);
        return new UserResponseDto(updatedUser)
   }

   async deleteUser(id: number){
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`Usuario con id ${id} no existe`);
        }
    
        const deletedUser = await this.userRepository.remove(user);
        return new UserResponseDto(deletedUser);
   }

}
