<template>
    <article class="card story-details">
        <div class="story-details__wrapper">
            <div class="story__avatar story__col-1">
                <avatar @click="userSelect(story.author)" :src="story.author.avatar">
                </avatar>
            </div>
            <div class="story__header story__col-2" href="#">
                <p class="story__intro">
                    <span @click="userSelect(story.author)" class="username">{{story.author.name}}</span>
                    <span class="small caps"> is asking:</span>
                </p>
                <h2 class="story__title">{{story.question}}</h2>
            </div>
            <div class="story__col-3 story__unfollow">
                <a v-if="story.followed" @click="follow(false)">unfollow</a>
                <a v-else @click="follow(true)">follow</a>
            </div>
            <div class="story__filler story__col-1">
            </div>
            <div class="story__content story__col-2">
                <p>{{ story.content }}</p>
            </div>
            <voter @upvote="vote(1)" @downvote="vote(-1)" class="story__votes story__col-3" :score="story.score"></voter>
        </div>
        <a class="button button--discussion">GIVE new answer</a>
    </article>
</template>

<script>
import { Avatar, Voter } from '../components/'
import Bus from '../event-bus.js'

export default {
    props: ['story'],
    components: { Avatar, Voter },
    methods: {
        follow(doFollow) {
            story.followed = !!doFollow
        },
        vote(amount) {
            this.story.score += amount
        },
        userSelect(user) {
            Bus.$emit('user-select', user)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../css/imports.scss";

@mixin coloredBg() {
    background-color: $color-story-bg;
}

// .story-details div,
// p,
// h2 {
//     border: 1px dashed red;
// }
$single__avatar-small: 70px;






/* columns */

.story-details__wrapper {
    @include flex(row);
    flex-wrap: wrap;
}

.story-details {
    margin-bottom: 4em;
}

.story__col-1 {
    @include coloredBg();
    width: $single__avatar-small;
    min-width: $single__avatar-small;
}

.story__col-2 {
    width: calc(100% - 100px);
}

.story__col-3 {

    min-width: 100px;
    width: 100px;
}



/* specific parts */

.story__avatar {
    width: $single__avatar-small;
    height: $single__avatar-small;
    display: flex;
    order: 1;
}

.story__header {
    @include flex(row);
    flex-wrap: wrap;
    width: calc(100% - #{$single__avatar-small});
    background-color: $color-story-bg;
    order: 2;
    height: calc(auto + #{$single__avatar-small})
}

.story__intro {
    padding-top: 2em;
    width: 100%;
    height: $single__avatar-small;
}

.story__title {
    $left-shift: $single__avatar-small + 10px;
    @include text-fancy(1rem);
    @include coloredBg();
    line-height: 1.2rem;
    width: calc(100% + #{$left-shift}); // avatar box + 10
    margin-left: -$left-shift;
    padding: 0 .5em 1em 1em;
    color: $color-highlight;
}

.story__unfollow {
    @include flex(column);
    order: 5;
    width: 50%;
    padding-left: 16px;
    & a {
        color: $color-highlight;
        margin: auto 0;
    }
}


.story__filler {
    display: none;
    order: 4;
}

.story__content {
    @include flex(column);
    width: 100%;
    margin-top: 0;
    margin-right: auto;
    padding: $activity-top-gutter/2; // padding-bottom: $activity-top-gutter;
    order: 3;
}

.story__votes {
    width: 50%;
    padding-right: 1em;
    order: 6;
}

.button.button--discussion {
    top: 14px;
    left: calc(50% - 75px);
}


@media ($br-small) {
    $rowSpaceTaken: $activity-width + 100px;
    .story__col-1 {
        width: $activity-width;
        min-width: $activity-width;
    }
    .story__col-2 {
        width: calc(100% - #{$rowSpaceTaken} - 100px);
        padding-left: 10px;
    }
    .story__col-3 {
        padding-right: 1em;
        padding-left: 2em;
    }

    .story__avatar {
        width: $activity-width;
        min-height: $activity-width;
        height: auto;
        display: flex;
        order: 1;
    }

    .story__header {
        @include flex(column);
        $rowSpaceTaken: $activity-width + 200px;
        width: calc(100% - #{$rowSpaceTaken});
        background-color: $color-story-bg;
        order: 2;
        height: auto;
    }

    .story__intro {
        margin-bottom: .3em;
        height: auto;
    }

    .story__title {
        padding-left: 0;
        padding-bottom: .2rem;
        margin-left: 0;
        width: auto;
        min-width: auto;
    }

    .story__unfollow {
        @include coloredBg();
        @include flex(column);
        width: 200px;
        order: 3;
        & a {
            color: $color-highlight;
            margin: auto;
        }
    }
    .story__filler {
        display: block;
        order: 4;
    }

    .story__content {
        @include flex(column);
        margin-top: 0;
        padding-bottom: $activity-top-gutter;
        order: 5;
    }

    .story__votes {
        margin-top: $activity-top-gutter; // margin-left: 2em;
        margin-right: 3em;
        width: auto;
        padding: 0;
        order: 6;
    }
}

@media ($br-medium) {
    $rowSpaceTaken: $activity-width + 202px;
    .story__col-3 {
        // width: 202px;
        // min-width: 202px;
    }
    .story__col-2 {
        // $rowSpaceTaken: $activity-width + 202px;
        // width: calc(100% - #{$rowSpaceTaken - 202px});
    }
    .story__header {
        // $rowSpaceTaken: $activity-width + 202px;
        // width: calc(100% - #{$rowSpaceTaken});
    }
}

@media ($br-large) {}
</style>
