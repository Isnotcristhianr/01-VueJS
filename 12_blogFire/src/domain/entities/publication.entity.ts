export interface PublicationEntity {
  uid: string;
  id: string;
  active: boolean;
  createdAt: Date;
  body: string;
  img?: string;
}

export interface PublicationsEntity {
  publications: PublicationEntity[];
}
