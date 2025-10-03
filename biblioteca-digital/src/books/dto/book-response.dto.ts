export class BookResponseDto{
    title: string;  
    publicationYear: number; 
    isAvailable?: boolean;

    constructor(book: any) { 
        this.title = book.title;
        this.publicationYear = book.publicationDate;
        this.isAvailable = book.isAvailable;
    }
}