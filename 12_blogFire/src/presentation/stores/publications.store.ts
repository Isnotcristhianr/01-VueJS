import { LoadPublicationsUseCase } from "@/domain/use-cases/blog/loadPublications.use_case"
import { defineStore } from "pinia"
import { reactive } from "vue";

interface Data {
    publications: any[];
}   

export const UsePublications = defineStore( 'publications', () => {

    const data = reactive<Data>({
        publications : [] 
    });

    const findAll = async () => {
        const result =  (await LoadPublicationsUseCase.execute()).docs;

        result.forEach( (doc) => {
            //console.log(doc.data());
            if( doc.exists() ){
                data.publications.push( doc.data() );
            }
        } );
    }


    return {
        findAll,
        data
    }
} )