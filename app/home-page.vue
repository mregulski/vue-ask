<template>
    <div>
        <question-card v-for="question in questions" :isSummary="true" :question="question"></question-card>
        <div class="card main-column">
            <a class="more-questions">load more questions</a>
        </div>
    </div>
</template>

<script>
import QuestionCard from './question/question-card.vue'

export default {
    data: function () {
        return {
            appname: "vue-ask",
            questions: [
                {
                    author: {
                        name: "Eva",
                        avatar: "https://source.unsplash.com/random/100x100?face&sig=1"
                    },
                    question: "Will insulin make my patient gain weight?",
                    status: "asked"
                },
                {
                    author: {
                        name: "Andrew",
                        avatar: "https://source.unsplash.com/random/100x100?face&sig=2"
                    },
                    question: "Questioning the Idea of Good Carbs, Bad Carbs?",
                    status: "asked"
                },
                {
                    author: {
                        name: "Andrew",
                        avatar: "https://source.unsplash.com/random/100x100?face&sig=2"
                    },
                    question: "Questioning the Idea of Good Carbs, Bad Carbs?",
                    status: "asked"
                }
            ]
        }
    },
    components: {
        QuestionCard
    }
}
</script>

<style>

</style>
