<script>

import card from './components/Card.vue';

export default {
  components: { card },
}
</script>

<template>
  <div>
    <h1>Componentes</h1>
    <hr />
    <card title="VueJs" image="https://cdn.svgporn.com/logos/vue.svg"
      url="https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg" />
    <card title="ReactJs" image="https://cdn.svgporn.com/logos/react.svg"
      url="https://cdn.svgporn.com/logos/react.svg?response-content-disposition=attachment%3Bfilename%3Dreact.svg" />
    <card title="AngularJs" image="https://cdn.svgporn.com/logos/angular-icon.svg"
      url="https://cdn.svgporn.com/logos/angular-icon.svg?response-content-disposition=attachment%3Bfilename%3Dangular-icon.svg" />
  </div>
</template>