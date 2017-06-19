<template>
    <article class="profile">
        <a @click="close" class="profile__close">
            <span class="icon ion-close"></span>
        </a>
        <header class="profile__header">
            <avatar class="profile__avatar" :src="user.avatar" :large="true"></avatar>
            <h1 class="profile__username">{{ user.name }}</h1>
            <section class="profile__bio">
                <div class="bio__item">
                    <span class="bio__caption">member for</span>
                    <span class="bio__value">5 months</span>
                </div>
                <div class="bio__item">
                    <span class="bio__caption">last seen</span>
                    <span class="bio__value">Saturday afternoon</span>
                </div>
                <div class="bio__item">
                    <span class="bio__caption">activity level</span>
                    2/3
                </div>
            </section>
        </header>
        <main class="profile__main">
            <div class="profile__nav">
                <a class="profile__page-prev icon ion-ios-arrow-left"></a>
                <h2 class="profile__pagename">How it all started</h2>
                <a class="profile__page-next icon ion-ios-arrow-right"></a>
            </div>
            <section class="profile__stats">
                <h3 class="profile__section-heading">That's where we have been these 5 months ago</h3>
                <div class="profile__section-content">
                    <stat-square class="profile__stat" :stat="peerCount" :angle="-37">
                    </stat-square>
                    <stat-square class="profile__stat" :stat="discussions" :angle="-10">
                    </stat-square>
                    <stat-square class="profile__stat" :stat="findings" :angle="-32">
                    </stat-square>
                    <stat-square class="profile__stat" :stat="questions" :angle="10">
                    </stat-square>
                </div>
            </section>
            <section class="profile__peers">
                <h3 class="profile__section-heading">Who joined the platform that same period</h3>
                <div class="profile__section-content">
                    <div v-for="peer in peers" class="profile__peer">
                        <div class="peer__avatar">
                            <avatar :src="peer.avatar"></avatar>
                        </div>
                        <span class="peer__name">{{ peer.name }}</span>
                    </div>
                </div>
            </section>

        </main>
        <section class="profile__hotstory">
            <h3 class="profile__section-heading">The hottest discussion these days</h3>
            <div class="hotstory__wrapper">
                <div class="hotstory">
                    <avatar class="hotstory__avatar" :src="user.avatar"></avatar>
                    <div class="hotstory__intro">
                        <span class="hotstory__author">Andrew</span>
                        <span class="hotstory__action">found the guardian article</span>
                    </div>
                    <h4 class="hotstory__title">Vegan diet to stop diabetes progress</h4>
                    <div class="hotstory__stats">
                        <p>
                            <span class="number">3</span>
                            <span>peers involved</span>
                        </p>
                        <p>
                            <span class="number">6</span>
                            <span>related discussions</span>
                        </p>
                        <p>
                            <span class="number">9</span>
                            <span>conversations</span>
                        </p>
                        <p>
                            <span class="number">12</span>
                            <span>upvotes</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
import StatSquare from './stat-square.vue'
import Stat from './stat.js'
import Avatar from '../components/avatar.vue'
import Api from '../mockapi.js'
export default {
    props: ['user'],
    data: function () {
        return {
            peers: []
        }
    },
    computed: {
        peerCount() {
            return new Stat('peers', this.peers.length)
        },
        discussions() {
            return new Stat('discussions', 8)
        },
        findings() {
            return new Stat('findings', 4)
        },
        questions() {
            return new Stat('questions', 13)
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    },
    created() {
        let userIds = [1, 2, 3]
        Promise.all(userIds.map(x => Api.getUser(x)))
            .then(users => this.peers = users)
    },
    components: {
        StatSquare, Avatar
    }

}
</script>

<style scoped lang="scss">
@import '../css/imports.scss';
.profile {
    @include flex(column);
    align-items: center;
    height: 100%;
    overflow-y: scroll;
}
.profile__close {
    position: absolute;
    color: $color-grey-light;
    top: 10px;
    right: 10px;
}
.profile__header {
    @include flex(column);
    width: 300px;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid $color-grey-light;
}

.profile__username {
    @include text-username(1.8em);
    padding-top: 10px;
}

.profile__bio {
    @include flex(column);
    padding-top: 20px;
    width: 100%;
    justify-content: space-between;
}

.bio__item {
    @include flex(column);
    align-items: center;
    margin-top: auto;
}

.bio__item:not(:first-of-type) {
    margin-top: 1em;
}

.bio__caption {
    @include text-action(1em);
    letter-spacing: .3px;
}

.bio__value {
    padding-left: .5em;
}


.profile__main {
    @include flex(column);
    padding-top: 1em;
    padding-left: 1em;
    padding-right: 1em;
    width: 300px;
    align-items: center;
}

.profile__main>section {
    margin-bottom: 2em;
}

.profile__nav {
    @include flex(row);
    width: 300px;
    justify-content: space-between;
}


.profile__section-heading {
    @include text-action(1em);
    font-weight: normal;
    width: 100%;
    text-align: center;
    padding-bottom: 1.5em;
}

.profile__section-content {
    @include flex(row);
    justify-content: space-around;
}

.profile__page-prev,
.profile__page-next {
    font-size: 24px;
    color: white;
    background: $color-highlight;
    width: 1em;
    height: 1em;
    text-align: center;
    border-radius: 24px;
}

$profileArrowsOffset: 2px; //fixes centering to look more centered
.profile__page-prev {
    padding-right: $profileArrowsOffset;
}

.profile__page-next {
    padding-left: $profileArrowsOffset;
}

.profile__pagename {
    @include text-fancy(1.7em);
}


.profile__stats {
    // @include flex(row);
    // flex-wrap: wrap;
    width: auto;
    align-self: center;
    padding-top: 2em;
    padding-bottom: 2em;
}

.profile__stats .profile__section-content {
    flex-wrap: wrap;
    margin: 0 3em;
}

.profile__stat {
    margin: 6px auto;
}


.profile__peer {
    @include flex(column);
    align-items: center;
    width: $activity-width;
}

.peer__avatar {
    @include stripes(lighten($color-grey-lighter, 5%));
    padding: 1em;
}

.peer__name {
    @include text-username(1.2em);
    padding: .7em .3em 0 .3em;
    text-align: center;
}

.profile__hotstory {
    width: 100%;
    // max-width: 100%;
}

.hotstory__wrapper {
    margin-top: 1.2em;
    @include stripes(lighten($color-grey-lighter, 5%)); // width: 100%;
}

.hotstory {
    @include flex(column);
    align-items: center;
    margin-left: 2em;
    margin-right: 2em;
}

.hotstory__avatar {
    position: relative;
    top: -$avatar-size-small/2;
}

.hotstory__intro {
    @include flex(row);
    justify-content: center;
    align-items: baseline;
    padding-bottom: .4em;
}

.hotstory__author {
    @include text-username(1.1em);
    margin-right: .5em;
}

.hotstory__action {
    @include text-action(1em);
    color: darken($color-grey-light, 7%);
}

.hotstory__title {
    @include text-fancy(1.3em);
    color: $color-highlight;
}

.hotstory__stats {
    @include flex(row);
    @include text-fancy(.9em);
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2em;
    margin-right: 4em;
    margin-left: 4em;
    margin-bottom: 3em;
    width: 100%;
}

.hotstory__stats > p {
    width: 50%;
    margin: .3em auto;
}

@media ($br-small) {
    .profile {
        padding-left: 0;
        padding-right: 0;
    }
    .profile__stats .profile__section-content {
        flex-wrap: wrap;
        margin: 0 2em;
    }

    .profile__nav {}

    .profile__main>section {
        margin: 0 4em 2em 4em;
    }

    .profile__hotstory {
        width: 100%;
    }

    .hotstory__stats > p {
        width: auto;
    }
}

@media ($br-medium) {
    .hotstory {
        width: 600px;

        margin: 0 auto;
    }
    .profile {
        height: calc(100% - 2em);
        // padding-left: 123px;
        // padding-right: 123px;
        padding-top: 26px;
        padding-bottom: 16px;
    }
    .profile__header {
        width: 600px;
    }

    .profile__main {
        width: 600px;
    }
    .profile__bio {
        @include flex(row);
        flex-wrap: wrap;
    }
    .bio__item {
        @include flex(row);
    }
    .profile__stats .profile__section-content {
        flex-wrap: wrap;
        margin: auto;
    }

    .profile__stat:not(:first-child) {
        margin-left: 18px;
    }
}
</style>
