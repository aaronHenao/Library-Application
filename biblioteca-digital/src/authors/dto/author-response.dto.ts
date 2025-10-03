export class AuthorResponseDto{
    name: string;
    birthDate?: string;

    constructor(author: any) {  
        this.name = author.name;
        this.birthDate = author.birthDate;
    }
}