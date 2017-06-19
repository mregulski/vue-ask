<!--
A card representing an activity in a question e.g. users answering on commenting on it
-->

<template>
    <div v-if="card.type === 'single'" class="activity activity--single">
        <avatar @click="userSelect(card.user)" :src="avatarUrl">
        </avatar>
        <span class="activity-title">Commented</span>
        <div class="dot dot--inactive"></div>
    </div>
    <div v-else class="activity activity--summary">
        <p class="summary__count">
            {{ card.count }}
        </p>
        <span class="activity-title">More activities</span>
        <div class="dot dot--inactive"></div>
    </div>
</template>

<script>
import {Avatar} from '../components/'
import Bus from '../event-bus.js'

export default {
    props: ['card'],
    data: function () {
        return {
        }
    },
    computed: {
        avatarUrl: function () {
            if (this.card.type === "summary") {
                return "";
            }
            if (this.card.user) { //todo: nullcehcking and shit
                return this.card.user.avatar
            }
        }
    },
    methods: {
        userSelect(user) {
            Bus.$emit('user-select', user)
        }
    },
    components: { Avatar }

}
</script>

<style lang="scss" scoped>
@import "../css/imports.scss";
.activity {
    width: $activity-width-small;
    height: 155px;
    display: flex;
    flex-direction: column;
    margin-right: $activity-gutter-small;
    position: relative;
    background: #EEEEEE;
}

@media ($br-small) {
    .activity {
        width: 90px;
        margin-right: $activity-gutter;
    }
    .activity--summary {
        background: white;
    }
    .activity:first-child {
        margin-left: 10px;
    }
}

.activity> :first-child {
    margin-top: 20%;
}

.activity:last-child {
    margin-right: 0px;
}

.activity--summary {
    font-family: "Libre Baskerville", serif;
}

.activity--summary>p {
    margin: auto;
    text-align: center;
    line-height: 60px;
}

.activity--summary>.activity-title {
    color: black;
    border-top: none;
    font-family: "Libre Baskerville", serif;
    text-transform: lowercase;
}
</style>
