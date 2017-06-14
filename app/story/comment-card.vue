<template>
    <div>
        <article class="comment card" :class="depthClass">
            <div class="comment__avatar">
                <avatar :src="comment.user.avatar"></avatar>
            </div>
            <div class="comment__body">
                <div class="comment__meta">
                    <span class="comment__author"> {{ comment.user.name }} </span>
                    <span class="comment__action">commented</span>
                    <span class="comment__date">yesterday</span>
                </div>
                <div class="comment__content">
                    {{ comment.content }}
                </div>
            </div>
            <!--<div class="flex-fill"></div>-->
            <voter class="comment__votes" :score="comment.score" @upvote="vote(1)" @downvote="vote(-1)"></voter>
        </article>
        <comment-card v-for="child in childComments" :depth="nextDepth" :comment="child" :key="child.id"></comment-card>
        <a v-if="depth === 0" class="button button--discussion">{{ buttonText }}</a>
    </div>
</template>

<script>
import { Avatar, Voter } from '../components/'
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
            return 'comment--depth-' + this.depth
        },
        childComments() {
            return this.comment.responses || []
        },
        nextDepth() {
            return Math.min(this.depth+1, 3)
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
        }
    },
    components: { Avatar, Voter }
}
</script>

<style lang="scss" scoped>
@import '../css/imports.scss';
.comment {
    @include flex(row);
    min-height: 100px;
}
.comment__avatar {
    padding: 1em;
    width: 90px;
    border-right: 1px solid $color-grey-lighter;
}

.comment__author {
    @include text-username();
}

.comment__body {
    flex: 1;
    padding-top: 1em;
    padding-left: 1em;
}

.comment__votes {
    flex: 0 0 202px; // width: 200px;
    margin-top: 2em;
    margin-left: 1em;
    margin-right: 3em;
}

.button.button--discussion {
    bottom: 15px;
    left: calc(50% - 75px);

}

@media ($br-small) {
    .comment--depth-1 {
        margin-left: 90px;
    }
}

</style>
