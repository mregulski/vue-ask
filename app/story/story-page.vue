<template>
    <div>
        <story-details :story="story">
        </story-details>

        <aside class="comments">
            <p class="comments__summary">
                <span class="number">{{ comments.length }}</span>
                peers already answered {{story.author.name}}</p>
            <comment-card v-for="comment in comments" :comment="comment"></comment-card>
        </aside>
    </div>
</template>

<script>
import { CommentCard, StoryDetails } from './'
import Api from '../mockapi.js'


export default {
    props: ['story'],
    data: function () {
        return {
            comments: []
        }
    },
    methods: {
    },
    components: { StoryDetails, CommentCard },
    created() {
        Api.getComments(this.story.id).then(result => { this.comments = result })
    }

}
</script>

<style scoped lang="scss">
@import '../css/imports.scss';
.comments {
    @include flex(column);
}

.comments__summary {
    @include text-fancy();
    margin: 0 auto 1em auto;
}

.comments__summary .number {
    font-weight: 600;
}
</style>
