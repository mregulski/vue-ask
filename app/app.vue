<template>
    <div id="app">
        <header class="site-header">
            <a class="button button--back--circle">
                <span class="icon ion-ios-arrow-back"></span>
            </a>
            <div class="main-column">
                <div class="site-header__first flex flex-row">
                    <h1 class="site-title">Questions</h1>
                    <a class="button button--plus">
                        <span class="icon ion-plus-circled"></span>
                    </a>
                    <div class="flex-fill"></div>
                    <div class="site-header__mode-switch">
                        <input type="radio">My shelf</input>
                        <input type="radio">All questions</input>
                    </div>
                    <div class="site-header__sorting">
                            <span>Sort by: <a>recent</a> or <a>hot</a></span>
                    </div>
                </div>
                <div class="search flex flex-row">
                    <input class="search__input flex-fill"></input>
                    <a class="button button--search">Search</a>
                </div>
            </div>
        </header>
        <div id="backplane">
            <div id="content" class="main-column">
                <div v-if="page==='home'">
                    <home-page></home-page>
                </div>
                <div v-else-if="page==='single'">
                    <question-page ></question-page>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HomePage from './home/home-page.vue'
import QuestionPage from './single/question-page.vue'
export default {
    data: function () {
        return {
            appname: "vue-ask",
            page: "home"
        }
    },
    components: {
        HomePage,
        QuestionPage

    },
    methods: {
    }
}
</script>


<style lang="scss">
@import "./colors.scss";

// todo: header sizes
.fancy {
    font-family: "Libre Baskerville", serif;
    font-style: italic;
}

#app {
    height: 100%;
    overflow: auto;
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
    margin: 0px 40px 40px 40px;
    padding: 0 200px;
    background: #FBFBFB;
}

.main-column {
    max-width: 1200px;
    margin: 0 auto;
}
.site-header {
    background: white;
    padding: 2rem 240px 1.5rem 240px;
    position: relative;
    width: 100%;
    z-index: 2;
}

.highlight {
    color: $color-highlight;
}

.site-header__mode-switch {}

.site-header__sorting {
    width: 150px;
    margin-left: 45px;
    text-align: right;
}

.site-header__first {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.site-title {
    margin-right: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    font-family: Cuprum;
    letter-spacing: 1px;
}

.button {
    display: block;
    border: 1px solid #B4B5B8;
    color: #B4B5B8;
}


[class*="--back"].button {
    width: 1em;
    height: 1em;
    margin-top: 2rem;
    margin-right: 1rem;
    text-align: center;
    font-size: 1.8rem;
    padding-top: 1px;
    padding-right: 2px;
    position: absolute;
    left: 60px;
    top: 0;
}
.button.button--search {
    min-width: 150px;
    width: 150px;
    margin-left: 45px;
    text-transform: uppercase;
    text-align: center;
    padding: .5rem 0;
}

[class*="--plus"].button {
    color: #0266B3;
    background: white;
    border: none;
    border-radius: 50%;
    text-align: center;
    align-self: center;
    height: 1em;
    width: 1em;
    font-size: 1.8rem;
    font-family: sans-serif;
}

[class*="--plus"].button:hover {
    color: darken(#0266B3, 10%);
}

[class*="--circle"].button {
    border-radius: 50%;
    text-align: center;
}


</style>
