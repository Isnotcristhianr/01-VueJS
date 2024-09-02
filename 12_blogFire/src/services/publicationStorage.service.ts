import { PublicationStorageModel } from '@/database/blog/publicationStorage.model';

export class PublicationStorageService{
    static Storage(file: File){
        return new PublicationStorageModel().storage(file);
    }

    static getDownload(file: File){
        return new PublicationStorageModel().getDownload(file);
    }
}