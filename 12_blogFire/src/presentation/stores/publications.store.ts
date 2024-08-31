import { LoadPublicationsUseCase } from "@/domain/use-cases/blog/loadPublications.use_case";
import { onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";
import { reactive } from "vue";

//import { PublicationEntity } from '../../domain/entities/publication.entity';
import type { PublicationEntity } from "@/domain/entities/publication.entity";
import { formatPublicationAdapter } from "@/adapters/presenters/formatPublication";
import { createPublicationUseCase } from "@/domain/use-cases/blog/createPublication.use_case";

export const UsePublications = defineStore("publications", () => {
  const data = reactive<{ publications: PublicationEntity[] }>({
    publications: [],
  });

  const findAll = async () => {
    const query = await LoadPublicationsUseCase.execute();

    onSnapshot(query, (docs) => {
      data.publications = [];
      docs.forEach((publication) => {
        if (publication.exists()) {
          const formatPublication: PublicationEntity = formatPublicationAdapter(
            publication.data(),
            publication.id
          );

          data.publications.push(formatPublication);
        }
      });
    });
  };

  //create publication
  const create = async (publicationData: PublicationEntity) =>{
    try{

      await createPublicationUseCase.execute(publicationData);

    }catch(error){
      console.error(error);
    }
  }

  return {
    findAll,
    data,
    create
  };
});
