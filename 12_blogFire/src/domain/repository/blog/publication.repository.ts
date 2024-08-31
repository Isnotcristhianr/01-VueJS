import type { PublicationEntity } from "@/domain/entities/publication.entity";

export abstract class PublicationRepository {
    abstract findAll(): any;
    abstract create(publication: PublicationEntity): any;
}