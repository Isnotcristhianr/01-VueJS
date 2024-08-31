import { PublicationModel } from "@/database/blog/publication.model";
import type { PublicationEntity } from "@/domain/entities/publication.entity";

export class PublicationsServices{
    static finAll(){
        return new PublicationModel().findAll();
    }

    static create(publication: PublicationEntity){
        return new PublicationModel().create(publication);
    }
}