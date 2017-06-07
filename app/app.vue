<template>
    <div id="app">
        <header>
            <a id="back">&lt;</a>
            <h1>Question</h1>
            <a class="question-add">+</a>
            <ask-search></ask-search>
        </header>

    </div>
</template>

<script>
import UserCard from './components/user-card.vue'

export default {
    data: function () {
        return {
            appname: "vue-ask"
        }
    },
    created: function() {
        console.log("app: created")
    }, components: {
        UserCard
    }
}
</script>
<style scoped>
header {
    display: flex;
    flex-direction: row;
    padding-left: 3em;
    background: white;
}

header h1 {
    margin: 3px;

}

#app {
    height: 100%;
}

#back {
    display: inline-block;
    width: 1em;
    height: 1em;
    text-align: center;
    padding: 3px;
    border-radius: 1em;
    border: black 1px solid;
}
</style>
