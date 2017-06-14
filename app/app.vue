<template>
    <div id="app">
        <header class="site-header">
            <a class="button button--back--circle">
                <span class="icon ion-ios-arrow-back"></span>
            </a>
            <div class="main-column">
                <div class="site-header__first">
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
                <div class="site-header__search flex flex-row">
                    <input class="search__input flex-fill"></input>
                    <a class="button button--search">Search</a>
                </div>
            </div>
        </header>
        <div id="backplane">
            <main id="content" class="main-column">
                <div v-if="page==='home'">
                    <home-page></home-page>
                </div>
                <div v-else-if="page==='question'">
                    <story-page :story="selectedQuestion" :isSummary="true"></story-page>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import HomePage from './home-page.vue'
import StoryPage from './story/story-page.vue'



export default {

    data: function () {
        return {
            appname: "vue-ask",
            page: "question",
            // page: "home",
            selectedQuestion: {
                    author: {
                        name: "Eva",
                        avatar: "https://source.unsplash.com/random/100x100?face&sig=1"
                    },
                    question: "Will insulin make my patient gain weight?",
                    content: "Ad ea pariatur dolor anim duis fugiat aute excepteur occaecat ea sint deserunt. Dolor qui deserunt eiusmod exercitation do tempor irure qui ipsum ipsum. Qui do et laboris laboris et voluptate ullamco eiusmod. Dolor culpa qui Lorem id ullamco ex elit aute ut cillum aliqua. Aliquip adipisicing ullamco in ex non sint est ad.",
                    status: "asked"
                }
        }
    },
    components: {
        HomePage,
        StoryPage
    },
    methods: {
    }
}
</script>


<style lang="scss">
@import "./css/imports.scss";

#app {
    // height: 100%;
    width: 100%;
    min-width: 320px;
    overflow: auto;
}

#backplane {
    min-width: 320px;
    // height: calc(100% - 2em - 40px);
    // height: 100%;
    background: #FBFBFB;
    // margin-bottom: 2em;
}

.site-header {
    background: white;
    padding: 2rem 40px 1.5rem 80px;
    position: relative;
    width: 100%;
    z-index: 2;
}

.main-column {
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;
}



.site-header__first {
    @include flex(row);
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.site-header__mode-switch {

}

.site-header__sorting {
    width: 150px;
    margin-left: 45px;
    text-align: right;
}



.site-header__search {
    @include flex(row);
}

.site-title {
    margin-right: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    font-family: Cuprum;
    letter-spacing: 1px;
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
    left: 10px;
    top: 0;
}
@media (min-width: 1200px) {
    #backplane {
        margin: 0px 40px 40px 40px;
        padding: 0 200px 2em 200px;
    }
    .site-header {
         padding: 2rem 240px 1.5rem 240px;
    }

    [class*="--back"].button {
        left: 60px;
    }
}




</style>
