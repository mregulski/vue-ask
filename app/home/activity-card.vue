<!--
A card representing an activity in a question e.g. users answering on commenting on it
-->

<template>
    <div v-if="card.type === 'single'" class="activity activity--single">
        <div class="avatar-box">
            <img :src="avatarUrl"/>
        </div>
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

}
</script>

<style>
.activity {
    width: 90px;
    height: 155px;
    display: flex;
    flex-direction: column;
    /*border: 1px dashed red;*/
    margin-right: 20px;
    position: relative;
}

.activity > :first-child {
    width: 60px;
    height: 60px;
    margin-top: 20%;
}

.activity:first-child {
    margin-left: 20px;
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
