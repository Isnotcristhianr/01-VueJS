import { PublicationModel } from "@/database/blog/publication.model";

export class PublicationsServices{
    static finAll(){
        return new PublicationModel().findAll();
    }
}