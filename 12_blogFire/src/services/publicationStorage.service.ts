import type { PublicationStorageRepository } from '@/domain/repository/blog/publicationStorage.repository';

export class PublicationStorageService{

    //inyectar dependencias
    constructor(private readonly publicationStorageRepopsitory: PublicationStorageRepository){}

    Storage(file: File){
        return this.publicationStorageRepopsitory.storage(file);
    }

    getDownload(file: File){
        return this.publicationStorageRepopsitory.getDownload(file);
    }
}