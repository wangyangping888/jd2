<template>
  <div class="home">
  	<search-bar></search-bar>
  	
  	<swiper></swiper>
  	<quick-nav></quick-nav>
  	<Buju-Nav></Buju-Nav>
  	<Nav-Bar></Nav-Bar>
  </div>
</template>

<script>

import SearchBar from "@/components/SearchBar";
import Swiper from "@/components/HomeSwiper";
import QuickNav from "@/components/QuickNav";
import NavBar from "@/components/NavBar";
import BujuNav from "@/components/BujuNav";


export default {
  name: 'home',
  components: {
  	SearchBar,
  	Swiper,
  	QuickNav,
  	NavBar,
		BujuNav,
  }
}
</script>
