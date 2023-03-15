<template>
  <a-layout class="data-server-map-server-container">
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            <div class="data-server-map-server-content">
                <div class="data-server-map-server-header-container">
                    <publish-button></publish-button>
                </div>
                
                <div class="data-server-map-server-content-container">
                    <published-map-server-list></published-map-server-list>
                </div>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
import publishButton from '@/components/publish-button/index.vue'
import publishedMapServerList from '@/components/publish-list/index.vue'
export default {
        components: {
            publishButton,
            publishedMapServerList
        },
        data() {
            return {};
        },
    };
</script>

<style>

</style>