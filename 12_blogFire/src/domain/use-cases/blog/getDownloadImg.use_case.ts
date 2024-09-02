import { PublicationStorageService } from "@/services/publicationStorage.service";

export class GetDownloadImgUseCase {
    static execute(file: File) {
        return PublicationStorageService.getDownload(file);
    }
}