import { LoadPublicationsUseCase } from "@/domain/use-cases/blog/loadPublications.use_case"
import { defineStore } from "pinia"

export const UsePublications = defineStore( 'publications', () => {

    const findAll = () => {
        const result = LoadPublicationsUseCase.execute();

        console.log(result);
    }

    return {
        findAll,
    }
} )