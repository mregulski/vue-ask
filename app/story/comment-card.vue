<template>
    <div>
        <article class="comment card" :class="depthClass">
            <div class="comment__avatar">
                <avatar @click="selectUser(comment.author)" :src="comment.author.avatar"></avatar>
            </div>
            <div class="comment__body">
                <div class="comment__meta">
                    <span @click="selectUser(comment.author)" class="comment__author"> {{ comment.author.name }} </span>
                    <span class="comment__action">commented it</span>
                    <span class="comment__date">{{ comment.time }}</span>
                </div>
                <div class="comment__content">
                    {{ comment.content }}
                </div>
            </div>
            <!--<div class="flex-fill"></div>-->
            <voter class="comment__votes" :score="comment.score" @upvote="vote(1)" @downvote="vote(-1)"></voter>
        </article>
        <div class="comment__responses">
            <comment-card v-for="child in childComments" :depth="nextDepth" :comment="child" :key="child.id"></comment-card>
        </div>
        <a v-if="depth === 0" class="button button--discussion">{{ buttonText }}</a>
    </div>
</template>

<script>
import { Avatar, Voter } from '../components/'
import Bus from '../event-bus.js'
export default {
    name: 'CommentCard',
    props: {
        comment: {},
        depth: {
            type: Number,
            default: 0,
        }
    },
    computed: {
        depthClass() {
            return this.depth > 0 ? 'depth-' + this.depth : ""
        },
        childComments() {
            return this.comment.responses || []
        },
        nextDepth() {
            return Math.min(this.depth + 1, 3)
        },
        buttonText() {
            if (this.childComments.length > 0) {
                return 'CONTINUE discussion'
            }
            return "COMMENT"
        }
    },
    methods: {
        vote: function (delta) {
            this.comment.score += delta
        },
        selectUser(user) {
            Bus.$emit('user-select', user)
        }
    },
    components: { Avatar, Voter }
}
</script>

<style lang="scss" scoped>
@import '../css/imports.scss';
$comment-indent: 90px;
$comment-indent-small: 5px;
.comment {
    @include flex(row);
    flex-wrap: wrap;
    min-height: 100px;
}

.comment[class*="depth-"] {
    // only single level of indentation
    margin-left: $comment-indent-small;
}

.comment__responses {
    background: $color-grey-lighter;
}

.comment__avatar {
    padding: 1em 1em 0 1em;
    width: $avatar-width-small;
    height: 60px;
    border-bottom: 1px solid $color-grey-lighter;
}

.comment__meta {
    padding-top: 10px;
    padding-bottom: 21px;
    border-bottom: 1px solid $color-grey-lighter;
}

.comment__author {
    @include text-username();
    margin-right: .5em;
}

.comment__action {
    @include text-action(.8em);
    margin-right: .5em;
}

.comment__action::after {
    font-family: sans-serif;
    content: "\2022";
    padding-left: .5em;
    font-size: 16px;
    color: $color-grey-light;
}

.comment__date {
    @include text-fancy(.9em);
}

.comment__body {
    flex: 1;
    padding-top: 1em;
    padding-bottom: 2em;
    // padding-left: 1em;
}

.comment__content {
    margin-left: -$avatar-width-small;
    padding-top: $avatar-width-small / 2.5;
    padding-left: 1rem;
}

.comment__votes {
    width: auto;
    margin-top: 4em;
    margin-left: 2em;
    margin-right: 3em;
}

.button.button--discussion {
    bottom: 15px;
    left: calc(50% - 75px);
}

@media ($br-small) {
    .comment__avatar {
        width: $avatar-width;
        height: auto;
        border-right: 1px solid $color-grey-lighter;
    }

    .comment__meta {
        margin-bottom: 1em;
    }

    .comment__content {
        margin: 0;
    }

    .comment[class*='depth-'] {
        // only single level of indentation
        margin-left: $comment-indent;
    }

    .comment__responses {
        background: transparent;
    }

    .comment__votes {
    width: auto;
    margin-top: 2em;
    margin-left: 2em;
    margin-right: 3em;
}
}

@media ($br-medium) {

    .comment__votes {
        width: 202px
    }


}
</style>
