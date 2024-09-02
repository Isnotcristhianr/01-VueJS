import { firestore, } from "@/config/firebaseConfig";
import type { PublicationEntity } from "@/domain/entities/publication.entity";
import { PublicationRepository } from "@/domain/repository/blog/publication.repository";
import { query } from "firebase/database";
import { addDoc, collection, limit, orderBy, where, } from "firebase/firestore";

export class PublicationModel extends PublicationRepository {
  findAll() {
    return query(
      collection(firestore, "publications"),
      orderBy("createdAt", "desc"),
      limit(100),
      where("active", "==", true)
    );
  }

  //create
  create(publication: PublicationEntity){
    const ref = collection(firestore, "publications");
    return addDoc(ref, publication);
  }
}
