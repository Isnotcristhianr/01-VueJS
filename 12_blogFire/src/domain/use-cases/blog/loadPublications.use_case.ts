import { PublicationsServices } from "@/services/publications.services";

export class LoadPublicationsUseCase{
    static execute(){
        return PublicationsServices.finAll();
    }
}