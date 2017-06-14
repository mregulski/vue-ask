<template>
    <div class="voter">
        <p class="voter__counter">{{ voteCount }} {{ voteType }}</p>
        <div class="voter__buttons">
            <a class="icon ion-arrow-up-b" @click="upvote">
            </a>
            <a class="icon ion-arrow-down-b" @click="downvote">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        score: {
            type: Number,
            required: true,
        }
    },
    computed: {
        voteType: function() {
            let text = this.score >= 0 ? "upvote" : 'downvote';
            if (this.voteCount != 1) {
                text += 's' // super basic pluralization
            }
            return text;
        },
        voteCount: function() {
            return Math.abs(this.score)
        }
    },
    methods: {

        upvote() {
            this.$emit('upvote')
        },
        downvote() {
            this.$emit('downvote')
        }
    }
}
</script>

<style scoped lang="scss" scoped>
    @import '../css/imports.scss';
    .voter {
        @include flex(row);
        height: 2em;
        justify-content: flex-end;
        align-items: center;
    }
    .voter__buttons {
        @include flex(column);
        margin-left: 2em;
        color: $color-highlight;
        font-size: 1.5em;
    }
    .voter__buttons a {
        cursor: pointer;
    }
</style>
