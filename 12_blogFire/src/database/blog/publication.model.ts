import { firestore } from "@/config/firebaseConfig";
import { PublicationRepository } from "@/domain/repository/blog/publication.repository";
import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";

export class PublicationModel extends PublicationRepository {
  findAll() {
   return collection(firestore, "publications");

  }
}
