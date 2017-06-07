<template>
    <div class="question-summary">
        <div class="question-summary--main">
            <img class="avatar" alt="$user's profile picture'" />
            <p>asked</p>
            <div class="question-summary--cards">
                <template v-for="card in cardsToShow">
                    {{card.text}}
                </template>
            </div>
        </div>
        <div class="question-summary--stats">
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            cards: [{img: "none", text: "text"}]
        }
    },
    methods: {
        cardsToShow: function() {
            return cards
        }
    }
}
</script>

<style scoped>

</style>

