import type { PublicationEntity } from "@/domain/entities/publication.entity";
import type { PublicationRepository } from "@/domain/repository/blog/publication.repository";

export class PublicationsServices{

    //inyectar dependencias
    constructor(private readonly publicationRepository: PublicationRepository){}

    finAll(){
        return this.publicationRepository.findAll();
    }

    create(publication: PublicationEntity){
        return this.publicationRepository.create(publication);
    }
}