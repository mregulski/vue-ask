<!--
    A single question component for the front page
-->
<template>
    <article class="card story" :class="{'story--summary': isSummary, 'story--single': !isSummary}">
        <header class="story__row-1">
            <div class="story__avatar story__col-1">
                <avatar :src="story.author.avatar">
                </avatar>
            </div>
            <div class="story__header story__col-2" href="#">
                <p class="story__intro">
                    <span class="username">{{story.author.name}}</span>
                    <span class="small caps"> is asking:</span>
                </p>
                <h2 class="story__title">{{story.question}}</h2>
            </div>

            <div v-if="isSummary" class="story__col-3 story__cutoff">
                <!--filler-->
            </div>
            <div v-else class="story__col-3 story__unfollow">
                <a v-if="story.followed" @click="unfollow">unfollow</a>
                <a v-else @click="follow">follow</a>
            </div>
        </header>
        <div v-if="isSummary" class="story__row-2">
            <div class="story__status story__col-1">
                <div class="flex-fill"></div>
                <span class="activity-title">Asked</span>
                <div class="dot dot--inactive"></div>
            </div>
            <div class="story__activity story__col-2">
                <activity-card v-for="card in cardsToShow" :card="card" :key="card.id"></activity-card>
            </div>
            <div class="story__stats story__col-3">
                <span class="story__stats-item">
                    <span class="number">1</span>related discussion</span>
                <span class="story__stats-item">
                    <span class="number">6</span>peers involved</span>
                <span class="story__stats-item">
                    <span class="number">3</span>conversations</span>
            </div>

        </div>
        <div v-else class="story__row-2">
            <div class="story__status story__col-1">
            </div>
            <div class="story__content story__col-2">
                <p>{{ story.content }}</p>
            </div>
            <voter class="story__votes story__col-3" :score="0"></voter>
        </div>
        <a v-if="!isSummary" class="button button--discussion">GIVE new answer</a>
    </article>
</template>

<script>
import ActivityCard from './activity-card.vue'
import { Avatar, Voter } from '../components/'
export default {
    props: {
        story: {},
        isSummary: {
            type: Boolean,
            default: false,
        },
    },
    data: function () {
        return {
            maxCards: 0,
            activities: [
                { type: "single", id: 0, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=1" }, action: "commented" },
                { type: "single", id: 1, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=2" }, action: "commented" },
                { type: "single", id: 2, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=3" }, action: "commented" },
                { type: "single", id: 3, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=4" }, action: "commented" },
                { type: "single", id: 4, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=5" }, action: "commented" },
                { type: "single", id: 5, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=1" }, action: "commented" },
                { type: "single", id: 6, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=2" }, action: "commented" },
                { type: "single", id: 7, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=3" }, action: "commented" },
                { type: "single", id: 8, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=4" }, action: "commented" },
                { type: "single", id: 9, user: { name: "Bob", avatar: "https://source.unsplash.com/random/100x100?face&sig=5" }, action: "commented" }
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
        follow() {

        },
        handleResize(event) {
            this.calcMaxCards()
        },
        calcMaxCards() { // including the summary card
            if (!this.isSummary) {
                return
            }
            let row = this.$el.querySelector(".story__row-2")
            let status = this.$el.querySelector(".story__status")
            let stats = this.$el.querySelector(".story__stats")
            if (row.clientWidth > 376) { //sass: $br-small
                let cardSpace = 99.5
                let spaceForActivities = (row.clientWidth - status.clientWidth - stats.clientWidth - 10)
                if (stats.clientWidth === 0) {
                    spaceForActivities -= 5 // "padding"
                }
                this.maxCards = Math.max(Math.floor(spaceForActivities / cardSpace), 0)
            } else {
                let cardSpace = 81
                let spaceForActivities = (row.clientWidth - status.clientWidth - stats.clientWidth - 1)
                if (stats.clientWidth === 0) {
                    spaceForActivities -= 5 // "padding"
                }
                this.maxCards = Math.max(Math.floor(spaceForActivities / cardSpace), 0)
            }
        }
    },
    components: { ActivityCard, Avatar, Voter },
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
.story.story--summary {
    padding-bottom: 40px;
}



/* layout */

.story.story--single {
    margin-bottom: 4em;
}

.story__col-1 {
    @include coloredBg();
    width: $activity-width;
    min-width: $activity-width;
}

.story__col-2 {
    flex: 1;
}

.story__col-3 {
    padding-right: 1em;
    padding-left: 2em;
}

.story__row-1 {
    @include flex(row);
}

.story__row-2 {
    @include flex(row);
}



/* specific parts */


/* row 1 */

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

.story__unfollow {
    @include coloredBg();
    @include flex(column);
    & a {
        color: $color-highlight;
        margin: auto;
    }
}


/* row 2 */

.story__status {
    display: none;
}

.story__activity {
    @include flex(row);
}

.story__content {
    @include flex(column);
    margin-top: $activity-top-gutter;
    padding-bottom: $activity-top-gutter;
}


.story__col-3.story__votes {
    margin-top: $activity-top-gutter;
    flex: 0 0;
    margin-right: 3em;
    padding: 0;
}


.button.button--discussion {
    top: 14px;
    left: calc(50% - 75px);
}


.story__col-3.story__stats {
    @include flex(column);
    @include fancy(.7rem);
    justify-content: space-between; // squash the text a bit down to look more in line with activity tops
    padding-top: 2em;
    padding-bottom: 2em;
}

.story__stats .number {
    margin-right: 1em;
    font-weight: 600;
}

.story__cutoff {
    display: none;
}

@media ($br-small) {
    .story__col-3 {
        width: 202px;
        min-width: 202px;
    }

    .story__col-2 {
        padding-left: 10px;
    }

    .story__status {
        @include flex(column);
        position: relative;
    }

    .story__activity {
        margin-top: $activity-top-gutter;
    }

    .story__stats {
        padding-top: $activity-top-gutter + 2px;
    }
}

@media ($br-large) {
        .story__cutoff {
        display: block;
    }
}
</style>

