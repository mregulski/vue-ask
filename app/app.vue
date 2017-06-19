<template>
    <div id="app">
        <header class="site-header">
            <a @click="setActiveStory({})" class="button button--back--circle">
                <span class="icon ion-ios-arrow-back"></span>
            </a>
            <div class="main-column">
                <div class="site-header__first">
                    <h1 class="site-title">Questions</h1>
                    <a class="button button--plus">
                        <span class="icon ion-plus-circled"></span>
                    </a>
                    <div class="flex-fill"></div>
                    <div v-if="!isStorySelected" class="site-header__mode-switch">
                        <input type="radio">My shelf</input>
                        <input type="radio">All questions</input>
                    </div>
                    <div v-if="!isStorySelected" class="site-header__sorting">
                        <span>Sort by:
                            <a>recent</a> or
                            <a>hot</a>
                        </span>
                    </div>
                    <div v-if="isStorySelected">
                        <span class="lastDiscussed">last discussed {{ lastDiscussed }} ago</span>
                    </div>
                </div>
                <div v-if="!isStorySelected" class="site-header__search flex flex-row">
                    <input class="search__input flex-fill"></input>
                    <a class="button button--search">Search</a>
                </div>
            </div>
        </header>
        <div id="backplane">
            <main id="content" class="main-column">
                <home-page v-if="!isStorySelected"></home-page>
                <story-page v-else :story="selectedStory" :isSummary="true"></story-page>
                <div v-if="isUserSelected" class="modal">
                    <user-modal @close="modalClosed" class="modal-user" :user="selectedUser"></user-modal>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import HomePage from './home-page.vue'
import { StoryPage } from './story/'
import { UserModal } from './user/'
import Bus from './event-bus.js'
import Api from './mockapi.js'

export default {
    data: function () {
        return {
            appname: "vue-ask",
            // page: "question",
            page: "home",
            selectedUser: {},
            selectedStory: {}
        }
    },
    computed: {
        isStorySelected() {
            return Object.keys(this.selectedStory).length != 0
        },
        isUserSelected() {
            return Object.keys(this.selectedUser).length != 0
        },
        lastDiscussed() {
            //return selectedStory.lastDiscussed
            return '3 days'
        }
    },
    methods: {
        setActiveStory(story) {
            console.log("story-select: ", story)
            this.selectedStory = story
        },
        setActiveUser(user) {
            console.log('user-select: ', user)
            this.selectedUser = user;
        },
        modalClosed() {
            this.setActiveUser({})
            document.body.classList.remove('modal-open')
        }
    },
    components: {
        HomePage,
        StoryPage,
        UserModal
    },
    created() {
        Bus.$on('story-select', story => this.setActiveStory(story))
        Bus.$on('user-select', user => {
            document.body.classList.add('modal-open')
            this.setActiveUser(user)
        })
        // Api.getUser(3).then(user => {
        //     console.log('user:', user)
        //     this.selectedUser = user
        // })
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

.modal-open {
    // overflow: hidden;
}

#backplane {
    min-width: 320px; // height: calc(100% - 2em - 40px);
    // height: 100%;
    background: #FBFBFB; // margin-bottom: 2em;
}

.modal {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top:0;
    left:0;
    // top: 0;
    z-index: 10;
}

.modal-user {
    position: relative;
    background: white;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.site-header__mode-switch {}

.site-header__sorting {
    width: 150px;
    margin-left: 45px;
    text-align: right;
}

.lastDiscussed {
    @include text-fancy(.85em);
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

.button {
    cursor: pointer;
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


@media ($br-medium) {
    .modal-user {
        min-height: 0;
    }
}
@media ($br-large) {
    #backplane {
        margin: 0px 40px 40px 40px;
        padding: 0 200px 2em 200px;
    }
    .site-header {
        padding: 2rem 240px 1.5em 240px;
    }

    [class*="--back"].button {
        left: 60px;
    }

    .modal-user {
        background: white;
        width: 850px;
        margin: 1em auto;
    }
}

a {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
    color: inherit;
}

</style>
