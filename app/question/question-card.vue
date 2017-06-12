<!--
    A single question component for the front page
-->
<template>
    <section class="card story"
        :class="{'story--summary': isSummary, 'story--single': !isSummary}">
        <header class="story__row-1">
            <figure class="story__avatar story__col-1">
                <avatar :src="question.author.avatar">
                </avatar>
            </figure>
            <div class="story__header story__col-2" href="#">
                <p class="story__intro">
                    <span class="username">{{question.author.name}}</span>
                    <span class="small caps"> is asking:</span>
                </p>
                <h2 class="story__title">{{question.question}}</h2>
            </div>

            <div v-if="isSummary" class="story__col-3 story__cutoff">
                <!--filler-->
            </div>
            <div v-else class="story__col-3">
                unfollow
            </div>
        </header>
        <div v-if="isSummary" class="story__row-2">
            <div class="story__status story__col-1">
                <div class="flex-fill"></div>
                <span class="activity-title">Asked</span>
                <div class="dot dot--inactive"></div>
            </div>
            <div class="story__activity story__col-2">
                <activity-card v-for="card in cardsToShow" :card="card"></activity-card>
            </div>
            <div class="story__stats story__col-3">
                <span class="question__stats-item">
                    <span class="number">1</span>related discussion</span>
                <span class="question__stats-item">
                    <span class="number">6</span>peers involved</span>
                <span class="question__stats-item">
                    <span class="number">3</span>conversations</span>
            </div>

        </div>
        <div v-else class="story__row-2">
            <div class="story__status story__col-1">
            </div>
            <div class="story__content story__col-2">
                <p>Lorem ipsum dolor sed amet</p>
            </div>
            </p>
            <div class="story__votes story__col-3">
            </div>
            <a class="button button--discussion">GIVE new answer</a>
        </div>
    </section>
</template>

<script>
import ActivityCard from './activity-card.vue'
import Avatar from '../components/avatar.vue'
import './question-card.scss'
export default {
    // props: ['question', 'summary'],
    props: {
        question: {},
        isSummary: {
            type: Boolean,
            default: false,
        },
    },
    data: function () {
        return {
            maxCards: 0,
            activities: [
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=1" }, action: "commented" },
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=2" }, action: "commented" },
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=3" }, action: "commented" },
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=4" }, action: "commented" },
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=5" }, action: "commented" },
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=1" }, action: "commented" },
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=2" }, action: "commented" },
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=3" }, action: "commented" },
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=4" }, action: "commented" },
                { type: "single", user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=5" }, action: "commented" }
            ]
        }
    },
    computed: {
        summary() {
            return this.isSummary ? {
                type: "summary",
                count: this.activities.length - this.maxCards + 1
            } : {}
        },
        cardsToShow() {
            if (!this.isSummary) { return }
            if (this.activities.length > this.maxCards) {
                let visible = this.activities.slice(0, Math.max(this.maxCards - 1, 0))
                return [this.summary, ...visible]

            }
            return this.activities
        }
    },
    methods: {
        handleResize(event) {
            this.calcMaxCards()
        },
        calcMaxCards() { // including the summary card
            let row = this.$el.querySelector(".story__row-2")
            let lastcol = this.$el.querySelector(".story__stats")
            let spaceForActivities = (row.clientWidth - 100 - lastcol.clientWidth)
            if (lastcol.clientWidth === 0) {
                spaceForActivities -= 5 // "padding"
            }
            this.maxCards = Math.max(Math.floor(spaceForActivities / 99.5), 0)
        }
    },
    components: { ActivityCard, Avatar },
    mounted() {
        window.addEventListener('resize', this.handleResize)
        this.isSummary && this.calcMaxCards()
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize)
    }

}
</script>

<style lang="scss" scoped>
// global
$color-story-bg: #DFF3FD;
$color-highlight: #0266B3;

//question:
@import "../css/imports.scss";

@mixin coloredBg() {
    background-color: $color-story-bg;
}

//todo: smallest responsive version


.story.summary {
    padding-bottom: 40px;
}
/* layout */
.story.story--single {
    margin-bottom: 2em;
}
.story__col-1 {
    @include coloredBg();
    width: $activity-width;
    min-width: $activity-width;
}

.story__col-2 {
    padding-left: 10px;
    flex: 1;
}

// .story__col-3 {
//     // non
// }

.story__row-1 {
    @include flex(row); // height: $activity-width;
}

.story__row-2 {
    @include flex(row);
    // padding-bottom: 40px;
    & .story__col-2 {
        padding-top: $activity-top-gutter;
    }
}


/* specific parts */

.story__avatar {
    width: $activity-width;
    min-height: $activity-width;
    display: flex;
}

.story__header {
    @include flex(column);
    background-color: $color-story-bg;
}

.story__intro {
    margin-top: 1em;
    margin-bottom: .3em;
}

.story__title {
    @include fancy(1rem);
    line-height: 1.2rem;
    color: $color-highlight;
    padding-bottom: .2rem;
}



.story__status {
    @include flex(column);
    position: relative;
}

.story__activity {
    @include flex(row);
    padding-top: $activity-top-gutter;
}

.story__content {
    @include flex(column);
    padding-bottom: 32px;
}

.button.button--discussion {
    position: relative;
    top: 40px;
    width: 150px;
    left: calc(-50% + 75px);
    align-self: center;
    text-align: center;
    background: white;
    border-color: black;
    padding: 5px 0;
    color: black;
}

.story__col-3 {
    width: 202px;
    min-width: 202px;
    padding-right: 1em;
    padding-left: 2em;
}

.story__col-3.story__stats {
    @include flex(column);
    @include fancy(.8rem);
    justify-content: space-between; // squash the text a bit down to look more in line with activity tops
    padding-top: $activity-top-gutter + 2px;
    padding-bottom: 2px;
}

.story__stats .number {
    margin-right: 1em;
}

.story__cutoff {
    display: none;
}

@media screen and (min-width: 1280px) {
    .story__cutoff {
        display: block;
    }
}
</style>

