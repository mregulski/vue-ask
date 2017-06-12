<!--
A card representing an activity in a question e.g. users answering on commenting on it
-->

<template>
    <div v-if="card.type === 'single'" class="activity activity--single">
        <avatar :src="card.user.avatar">
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
import Avatar from '../components/avatar.vue'
export default {
    props: ['card'],
    data: function() {
        return {
        }
    },
    computed: {
        avatarUrl: function() {
            return this.card.user.avatar
        }
    },
    components: {Avatar}

}
</script>

<style lang="scss">
@import "../css/imports.scss";
.activity {
    width: 90px;
    height: 155px;
    display: flex;
    flex-direction: column;
    margin-right: $activity-gutter;
    position: relative;
}

.activity > :first-child {
    margin-top: 20%;
}

.activity:last-child {
    margin-right: 0px;
}

.activity:first-child {
    margin-left: 10px;
}

.activity--single {
    background: #EEEEEE;
}

.activity--summary {
    font-family: "Libre Baskerville", serif;
}
.activity--summary > p {
    margin: auto;
    text-align: center;
    line-height: 60px;
}

.activity--summary > .activity-title {
    color: black;
    border-top: none;
    font-family: "Libre Baskerville", serif;
    text-transform: lowercase;
}
/*.activity:first-child {
    margin-left: 20px;
}*/
</style>
