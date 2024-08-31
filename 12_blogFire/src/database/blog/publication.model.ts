import { firestore, } from "@/config/firebaseConfig";
import type { PublicationEntity } from "@/domain/entities/publication.entity";
import { PublicationRepository } from "@/domain/repository/blog/publication.repository";
import { addDoc, collection, } from "firebase/firestore";

export class PublicationModel extends PublicationRepository {
  findAll() {
   return collection(firestore, "publications");
  }

  //create
  create(publication: PublicationEntity){
    const ref = collection(firestore, "publications");
    return addDoc(ref, publication);
  }
}
