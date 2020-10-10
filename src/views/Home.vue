<template>
  <div>
    <topnav></topnav>
    <enav></enav>
  </div>
</template>

<script>
import topnav from "@/components/Partials/top-nav";
import enav from "@/components/Partials/navbar";

export default {
  name: "Home",
  components: {
    topnav,
    enav,
  },
};
</script>
