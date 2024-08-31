import { firestore, } from "@/config/firebaseConfig";
import type { PublicationEntity } from "@/domain/entities/publication.entity";
import { PublicationRepository } from "@/domain/repository/blog/publication.repository";
import { set } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore";

export class PublicationModel extends PublicationRepository {
  findAll() {
   return collection(firestore, "publications");
  }

  //create
  create(publication: PublicationEntity){
    const ref = doc(firestore, "publications");
    return setDoc(ref, publication);
  }
}
