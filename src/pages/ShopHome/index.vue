<template>
  <div>
    <TypeNav />
    <CarouselFigure />
    <!-- <h2>nihao </h2> -->
    <TodayCommand />
    <GoodsRank />
    <GuessLike />
    <FloorsContent
      v-for="floor in floorContent"
      :key="floor.id"
      :list="floor"
    />

    <FooterBrand />
  </div>
</template>

<script>
import CarouselFigure from "@/pages/ShopHome/CarouselFigure";
import TodayCommand from "@/pages/ShopHome/TodayCommand";
import GoodsRank from "@/pages/ShopHome/GoodsRank";
import GuessLike from "@/pages/ShopHome/GuessLike";
import FloorsContent from "@/pages/ShopHome/FloorsContent";
import FooterBrand from "@/pages/ShopHome/FooterBrand";
import { mapState } from "vuex";
export default {
  name: "ShopName",
  components: {
    CarouselFigure,
    TodayCommand,
    GoodsRank,
    GuessLike,
    FloorsContent,
    FooterBrand,
  },
  mounted() {
    console.log("farther mounted");
    this.$store.dispatch("shophome/getFloorContent");
    this.$store.dispatch('user/getUserInfo');
  },
  computed: {
    ...mapState("shophome", {
      floorContent: (state) => state.floorContent,
    }),
  },
};
</script>

<style scoped>
</style>