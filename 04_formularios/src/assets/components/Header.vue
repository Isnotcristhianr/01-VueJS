<<script>
export default {
    data() {
        return {
            url: "https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg",
        };
    },
};
</script>

    <template>
        <div class="row text-center">
            <div class="col-12">
                <h1>Formularios</h1>
                <img :src="url" alt="Vue" width="150">
                <hr>
            </div>
        </div>
    </template>