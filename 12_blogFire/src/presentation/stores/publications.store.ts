import { LoadPublicationsUseCase } from "@/domain/use-cases/blog/loadPublications.use_case";
import { onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";
import { reactive } from "vue";

interface Data {
  publications: any[];
}

export const UsePublications = defineStore("publications", () => {
  const data = reactive<Data>({
    publications: [],
  });

  const findAll = async () => {
    const query = await LoadPublicationsUseCase.execute();

    onSnapshot(query, (docs) => {
      data.publications = [];
      docs.forEach((publication) => {
        if (publication.exists()) {
          data.publications.push(publication.data());
        }
      });
    });
  };

  return {
    findAll,
    data,
  };
});
