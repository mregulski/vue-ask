<template>
    <div>
        <story-card v-for="story in stories" :isSummary="true" :story="story" :key="story.id"></story-card>
        <div class="card main-column">
            <a class="more-stories">load more questions</a>
        </div>
    </div>
</template>

<script>
import StoryCard from './story/story-card.vue'
import Api from './mockapi.js'
export default {
    data: function () {
        return {
            appname: "vue-ask",
            stories: []
        }
    },
    created() {
        Api.getStories().then(result => {
            this.stories = result;
        })
    },
    components: {
        StoryCard
    }
}
</script>

<style>

</style>
