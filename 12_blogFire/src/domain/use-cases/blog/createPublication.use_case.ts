import { PublicationsServices } from "@/services/publications.services";
import type { PublicationEntity } from "../../entities/publication.entity";

export class createPublicationUseCase {
  static execute(publication: PublicationEntity) {
    return PublicationsServices.create(publication);
  }
}
