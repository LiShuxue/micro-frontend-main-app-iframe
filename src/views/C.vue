<template>
  <div class="c"></div>
</template>

<script>
import $ from 'jquery';
import manageSubApp from '@/utils/manageSubApp';

export default {
  beforeRouteEnter(to, from, next) {
    manageSubApp.hideAllSubApp();
    next();
  },
  mounted() {
    manageSubApp.showSubApp('sub-app-module-c');
  }
}
</script>
