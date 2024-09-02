import { PublicationStorageService } from "@/services/publicationStorage.service";

export class StorageImgUseCase{
    static execute(file: File){
        return PublicationStorageService.Storage(file);
    }
}