import type { PublicationEntity } from "@/domain/entities/publication.entity";
import type { DocumentData } from "firebase/firestore";

//luxon
import { DateTime } from "luxon";

export const formatPublicationAdapter = (
  data: DocumentData,
    id: string
): PublicationEntity => {
  return {
    id,
    uid: data.uid,
    active: data.active,
    body: data.body,
    createdAt: DateTime.fromSeconds(data.createdAt.seconds).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY),
    img: data.img,
  };
};
