<template>
    <div>
        <div class="text-center">
            <img :src="gif.images.original.url" :alt="gif.id" class="rounded-t-lg" height="100" loading="lazy">
        </div>
        <div class="p-4 shadow">
            <p class="text-center font-bold">{{ gif.title }}</p>
        </div>
        <div class="text-center m-2 p-2 ">
            <a :href="gif.images.original.url"
                class="rounded-full bg-blue-400 text-white m-3 p-2 xl:px-24 md:px-5 sm:px-10 transition-all duration-300"
                :download="gif.images.original.url">
                <img src="../assets/Cloud UI Interface Icon.svg" alt="Cloud icon" class="w-5 h-5 inline-block">
                Descargar</a>

        </div>
    </div>
</template>

<script>
export default {
    props: ['gif'],
}
</script>
