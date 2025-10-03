export class LibraryApplicationBaseResponse<T> {
    statusCode: number;
    message: string;
    data: T;
}