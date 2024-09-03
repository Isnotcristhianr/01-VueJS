import { PublicationStorageModel } from "@/database/blog/publicationStorage.model";
import { PublicationStorageService } from "@/services/publicationStorage.service";

export class GetDownloadImgUseCase {
    static execute(file: File) {
        return new PublicationStorageService(new PublicationStorageModel()).getDownload(file);
    }
}