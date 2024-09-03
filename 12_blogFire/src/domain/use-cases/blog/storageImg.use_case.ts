import { PublicationStorageModel } from "@/database/blog/publicationStorage.model";
import { PublicationStorageService } from "@/services/publicationStorage.service";

export class StorageImgUseCase{
    static execute(file: File){
        return new PublicationStorageService(new PublicationStorageModel()).Storage(file);
    }
}