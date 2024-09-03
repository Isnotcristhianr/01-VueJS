import { PublicationsServices } from "@/services/publications.services";
import type { PublicationEntity } from "../../entities/publication.entity";
import { PublicationModel } from "@/database/blog/publication.model";

export class createPublicationUseCase {
  static execute(publication: PublicationEntity) {
    return new PublicationsServices(new PublicationModel()).create(publication);
  }
}
