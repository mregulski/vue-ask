<!--
    A single question component for the front page
-->
<template>
    <article class="card story-summary">
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
                <h2 class="story__title" @click="select(story)">{{story.question}}</h2>
            </div>

            <div class="story__col-3 story__cutoff">
                <!--filler-->
            </div>
        </header>
        <div class="story__row-2">
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

    </article>
</template>

<script>
import ActivityCard from './activity-card.vue'
import { Avatar, Voter } from '../components/'
import Bus from '../event-bus.js'

export default {
    props: ['story'],
    data: function () {
        return {
            maxCards: 0,
        }
    },
    computed: {
        summary() {
            return {
                type: "summary",
                count: this.story.activity.length - this.maxCards + 1
            }
        },
        cardsToShow() {
            let activitiesToShow = this.story.activity.length > this.maxCards
                ? this.maxCards - 1
                : this.maxCards
            let visibleActivities = this.story.activity
                .slice(0, activitiesToShow)
                .map(x => {
                    x.type = "single"
                    return x
                })
            if (this.story.activity.length > this.maxCards) {
                return [this.summary, ...visibleActivities]

            }
            return visibleActivities
        }
    },
    methods: {
        select(story) {
            Bus.$emit('story-select', story)
        },
        handleResize(event) {
            this.calcMaxCards()
        },
        calcMaxCards() { // including the summary card
            let row = this.$el.querySelector(".story__row-2")
            let status = this.$el.querySelector(".story__status")
            let stats = this.$el.querySelector(".story__stats")
            if (row.clientWidth > 420) { //sass: $br-small
                let cardSpace = 99.5
                let spaceForActivities = (row.clientWidth - status.clientWidth - stats.clientWidth - 10)
                if (stats.clientWidth === 0) {
                    spaceForActivities -= 5 // "padding"
                }
                this.maxCards = Math.max(Math.floor(spaceForActivities / cardSpace), 1)
            } else {
                let cardSpace = 81
                let spaceForActivities = (row.clientWidth - status.clientWidth - stats.clientWidth - 1)
                if (stats.clientWidth === 0) {
                    spaceForActivities -= 5 // "padding"
                }
                this.maxCards = Math.max(Math.floor(spaceForActivities / cardSpace), 1)
            }
        }
    },
    components: { ActivityCard, Avatar, Voter },
    mounted() {
        window.addEventListener('resize', this.handleResize)
        this.calcMaxCards()
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize)
    }

}
</script>

<style lang="scss" scoped>
// global
//question:
@import "../css/imports.scss";

@mixin coloredBg() {
    background-color: $color-story-bg;
}




/* layout */

.story-summary {
    padding-bottom: 4em;
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
    min-width: auto;
    width: auto;
}


.story__row-1 {
    @include flex(row);
}

.story__row-2 {
    @include flex(row);
}


.hide--medium {
    display: none;
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
    padding-top: 2em;
    padding-bottom: .3em;
}

.story__title {
    @include text-fancy(1rem);
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



.story__col-3.story__stats {
    @include flex(column);
    @include text-fancy(.7rem);
    justify-content: space-between; // squash the text a bit down to look more in line with activity tops
    padding-top: 4em;
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

@media ($br-medium) {
    .story__col-3 {
        width: 202px;
        min-width: 202px;
        margin-left: 0;
    }
}

@media ($br-large) {
    .story__cutoff {
        display: block;
    }
}
</style>

