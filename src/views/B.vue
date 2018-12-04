<template>
  <div class="b"></div>
</template>

<script>
import $ from 'jquery';
import manageSubApp from '@/utils/manageSubApp';

export default {
  mounted() {
    manageSubApp.showSubApp('sub-app-module-b');
  }
}
</script>
