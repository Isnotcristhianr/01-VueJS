import { PublicationsServices } from "@/services/publications.services";
import { PublicationModel } from "@/database/blog/publication.model";

export class LoadPublicationsUseCase{
    static execute(){
        return new PublicationsServices(new PublicationModel()).finAll();
    }
}