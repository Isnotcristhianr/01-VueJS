import { firestore } from "@/config/firebaseConfig";
import { PublicationRepository } from "@/domain/repository/blog/publication.repository";
import { collection, getDoc, getDocs } from "firebase/firestore";

export class PublicationModel extends PublicationRepository{
    findAll() {

        const data = collection(firestore, 'publications')

        return getDocs(data)
    }
} 