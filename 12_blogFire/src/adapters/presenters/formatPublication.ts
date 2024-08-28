import type { PublicationEntity } from "@/domain/entities/publication.entity";
import type { DocumentData } from "firebase/firestore";

export const formatPublicationAdapter = (
  data: DocumentData,
    id: string
): PublicationEntity => {
  return {
    id,
    uid: data.uid,
    active: true,
    body: data.body,
    createdAt: new Date(),
    img: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
};
