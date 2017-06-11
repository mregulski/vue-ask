<!--
    A single question component for the front page
-->
<template>
    <section class="card question">
        <header class="question__header flex flex--row">
            <figure class="question__avatar">
                <div class="avatar-box">
                    <img :src="question.author.avatar" alt="$user's profile picture" />
                </div>
            </figure>
            <div class="question__title flex flex--column flex-fill">
                <p>
                    <span class="user__name">{{question.author.name}}</span>
                    <span class="text--action"> is asking:</span>
                </p>
                <h2 class="header--fancy">{{question.question}}</h2>
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
                <activity-card :card="cardsToShow[0]"></activity-card>
                <activity-card v-for="card in cardsToShow.slice(1)" :card="card">

                </activity-card>
                <!--<activity-card></activity-card>
                <activity-card></activity-card>
                <activity-card></activity-card>
                <activity-card></activity-card>-->
            </div>
            <div class="question__stats flex flex--column">
                <span class="question__stats-item">1 related discussion</span>
                <span class="question__stats-item">6 peers involved</span>
                <span class="question__stats-item">3 conversations</span>
            </div>
        </div>
    </section>
</template>

<script>
import ActivityCard from './activity-card.vue'
export default {
    props: ['question'],
    data: function () {
        return {
            cards: [
                { type: "summary", count: 2 },
                { type: "single", user: {name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=1" }, action: "commented"},
            ]
        }
    },
    computed: {
        cardsToShow: function () {
            return this.cards
        }
    },
    components: {ActivityCard}
}
</script>

<style lang="scss">

.dot {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    position: absolute;
    bottom: -5px;
    left: calc(50% - 5px);
}

.dot--inactive {
    background: #D4D5D6;
}

.question {
    display: flex;
    flex-direction: column;
    width: 100%;
}
    .question__header {
        width: 100%;
        height: 100px;

    }
        .question__avatar {
            width: 100px;
            height: 100px;
            display: flex;
            background: #DFF3FD;

        }
        .question__title {
            background: #DFF3FD;
        }

        .question__spacer {
            background: white;
            width: 150px;
            margin-left: 45px;
        }

    .question__content {
        height: 100%;
        margin-bottom: 40px;
    }

        .question__status {
            width: 100px;
            min-width: 100px;
            min-height: 100%;
            position: relative;
            background: #DFF3FD;
        }

        .question__activity {
            background: white;
            width: 100%;
            padding-top: 40px;
            justify-content: flex-start
        }

        .question__stats {
            background: white;
            padding-top: 40px;
            width: 150px;
            min-width: 150px;
            margin-left: 45px;
        }

            .question__stats > :nth-child(2) {
                margin-top:30%;
                margin-bottom: 30%;
            }

.activity-title {
    display: block;
    width: 80%;
    font-size: .8em;
    border-top: 1px solid #7D8B93;
    padding-top: .5em;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;
    color: #7D8B93;
    text-transform: uppercase;

}
.avatar-box {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
}

.avatar-box > img { /* prevent squashing the aspect ratio*/
    height: 60px;
    min-width: 60px;
}
</style>

