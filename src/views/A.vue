<template>
  <div class="a"></div>
</template>

<script>
import $ from 'jquery';
import manageSubApp from '@/utils/manageSubApp';

export default {
  beforeRouteEnter(to, from, next) {
    manageSubApp.hideAllSubApp();
    next(vm => {
      // use vm to replace this
    });
  },
  mounted() {
    manageSubApp.showSubApp('sub-app-module-a');
  }
}
</script>
