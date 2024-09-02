import { LoadPublicationsUseCase } from "@/domain/use-cases/blog/loadPublications.use_case";
import { defineStore } from "pinia";
import { reactive } from "vue";

import type { PublicationEntity } from "@/domain/entities/publication.entity";
import { formatPublicationAdapter } from "@/adapters/presenters/formatPublication";

//use cases
import { createPublicationUseCase } from "@/domain/use-cases/blog/createPublication.use_case";
import { StorageImgUseCase } from "@/domain/use-cases/blog/storageImg.use_case";
import { GetDownloadImgUseCase } from "@/domain/use-cases/blog/getDownloadImg.use_case";

//db
import { onSnapshot } from "firebase/firestore";

//otro
import Swal from "sweetalert2";
import swal from "sweetalert2";

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
  const create = async (publicationData: PublicationEntity) => {
    try {
      Swal.showLoading();

      await createPublicationUseCase.execute(publicationData);
    } catch (error) {
      console.error(error);
    } finally {
      Swal.hideLoading();
    }
  };

  //subir img
  const uploadImg = async (file: File) => {
    try {
      await StorageImgUseCase.execute(file);
    } catch (error) {
      console.error(error);
      swal.hideLoading();
    }
  };

  //download img
  const downloadImg = async (file: File) => {
    try {
      const resp = await GetDownloadImgUseCase.execute(file);
      return resp;
    } catch (error) {
      console.error(error);
      swal.hideLoading();
    }
  };

  return {
    findAll,
    data,
    create,
    uploadImg,
    downloadImg,
  };
});
