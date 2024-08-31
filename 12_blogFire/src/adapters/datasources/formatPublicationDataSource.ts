import type { PublicationEntity } from '@/domain/entities/publication.entity';
import { Timestamp } from 'firebase/firestore';

interface CreatePublication{
    body: string;
}

export const formatPublicationDataSourceAdapter = (
    data: CreatePublication,
    uid: string
): PublicationEntity => {
    return {
        uid: uid,
        active: true,
        body: data.body,
        createdAt: Timestamp.now(),
        img: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
};