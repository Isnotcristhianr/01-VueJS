import type { PublicationEntity } from '@/domain/entities/publication.entity';
import { Timestamp } from 'firebase/firestore';

interface CreatePublication{
    body: string;
    img: string;
}

export const formatPublicationDataSourceAdapter = (
    data: CreatePublication,
    uid: string,
): PublicationEntity => {
    return {
        uid: uid,
        active: true,
        body: data.body,
        createdAt: Timestamp.now(),
        img: data.img
    }
};