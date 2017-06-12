<template>
    <section class="card question">
        <header class="question__header flex flex--row">
            <figure class="question__avatar">
                <div class="avatar-box">
                    <img :src="question.author.avatar" alt="$user's profile picture" />
                </div>
            </figure>
            <div class="question__title flex flex--column flex-fill">
                <p class="question__intro">
                    <span class="user__name highlight">{{question.author.name}}</span>
                    <span class="text--action"> is asking:</span>
                </p>
                <h2 class="header fancy highlight">{{question.question}}</h2>
            </div>
            <div class="question__spacer"></div>
        </header>
        <div class="question__content flex flex--row">
            <div class="question__status flex flex--column">
                <div class="flex-fill"></div>
                <span class="activity-title">Asked</span>
                <div class="dot dot--inactive"></div>
            </div>
            <div class="question__activity flex flex--row">
                <activity-card v-if="cards.length > maxCards" :card="summary"></activity-card>
                <activity-card v-for="card in cardsToShow" :card="card">

                </activity-card>
                <!--<activity-card></activity-card>
                    <activity-card></activity-card>
                    <activity-card></activity-card>
                    <activity-card></activity-card>-->
            </div>
            <div class="question__stats fancy flex flex--column">
                <span class="question__stats-item">
                    <span class="number">1</span>related discussion</span>
                <span class="question__stats-item">
                    <span class="number">6</span>peers involved</span>
                <span class="question__stats-item">
                    <span class="number">3</span>conversations</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
