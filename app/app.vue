<template>
    <div id="app">
        <header class="site-header">
            <a class="button button--back button--circle">&lt;</a>
            <div class="main-column flex flex-row">
                <h1 class="site-title">Questions</h1>
                <a class="button button--circle button--plus">+</a>
            </div>
            <div class="main-column flex flex-row">
                <input></input>
                <a class="button">Search</a>
            </div>
        </header>
        <div id="backplane">
            <div id="content" class="main-column">
                <template v-for="question in questions">
                    <question-card :question="question"></question-card>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionCard from './components/question-card.vue'

export default {
    data: function () {
        return {
            appname: "vue-ask",
            questions: [
                {
                    author: {
                        name: "Eva",
                        avatarUrl: "https://source.unsplash.com/random/100x100?face&sig=1"
                    },
                    question: "Will insulin make my patient gain weight?",
                    status: "asked"
                },
                {
                    author: {
                        name: "Andrew",
                        avatarUrl: "https://source.unsplash.com/random/100x100?face&sig=2"
                    },
                    question: "Questioning the Idea of Good Carbs, Bad Carbs?",
                    status: "asked"
                }]
        }
    },
    created: function () {
        console.log("app: created")
    }, components: {
        QuestionCard
    }
}
</script>


<style lang="scss">
$color-question-accent: #DFF3FD;

.text-display {
    font-family: Cuprum, sans-serif;
}
[class*="--fancy"] {
    font-family: "Libre Baskerville", serif;
    font-style: italic;
}
#app {
    height: 100%;
}
.card {
    background: white;
    position: relative;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.5);
}

.flex {
    display: flex;
}
.flex--row {
    flex-direction: row;
}

.flex--column {
    flex-direction: column;
}

.flex-fill {
    flex:1;
}
#backplane {
    height: 100%;
    margin: 0px 40px 40px 40px;
    padding: 0 200px;
    background: #FBFBFB;
}

.main-column {
    max-width: 1200px;
    margin: 0 auto;
}
.site-header {
    padding: 2em 240px 0 240px;
    padding-bottom: 20px;
    background: white;
    position: relative;
    z-index: 2;

}

.highlight {
    color: #0266B3;
}


.site-title {
    margin: 3px;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    font-family: Cuprum;
    letter-spacing: 1px;
}


.button--back {
    width: 1em;
    height: 1em;
    padding: 3px;
    position: absolute;
    left: 60px;
    top: 10px;
}

.button.button--plus {
    color: white;
    padding: 1px;
    background: #0266B3;
    border: none;
    content: "+";
    width: 1em;
    height: 1em;
}


.button {
    display: inline-block;
    border: 1px solid #B4B5B8;
    color: #B4B5B8;
}

.button--circle {
    text-align: center;
    font-size: 1.5em;
    border-radius: 50%;
    text-align: center;
    vertical-align: baseline;
}


</style>
