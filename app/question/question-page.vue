<template>
    <question-card :question="question">
    </question-card>
    <p>2 peers already answered {{question.author.name}}</p>
    <comment-card v-for="comment in comments"></comment-card>
</template>

<script>
import QuestionCard from './question-card.vue'
import CommentCard from './comment-card.vue'

export default {
    props: ['question'],
    data() {
        return {
            comments: []
        }
    },
    components: { QuestionCard },

}
</script>

<style>

</style>
