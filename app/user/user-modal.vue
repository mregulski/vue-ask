<template>
    <article class="profile">
        <header class="profile__header">
            <avatar class="profile__avatar" :src="user.avatar" :large="true"></avatar>
            <h1 class="profile__username">{{ user.name }}</h1>
            <section class="profile__bio">
                <div class="bio__item">
                    <span class="bio__caption">member for</span>
                    <span class="bio__value">5 month</span>
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
                <a>back</a>
                <h2>How it all started</h2>
                <a>next</a>
            </div>
            <section class="profile__stats">
                <stat-square class="profile__stat" :stat="peers" :angle="-37">
                </stat-square>
                <stat-square class="profile__stat" :stat="discussions" :angle="-10">
                </stat-square>
                <stat-square class="profile__stat" :stat="findings" :angle="-32">
                </stat-square>
                <stat-square class="profile__stat" :stat="questions" :angle="10">
                </stat-square>
            </section>
            <section class="profile__peers">
            </section>
            <section class="profile__hotstory">
            </section>
        </main>
    </article>
</template>

<script>
import StatSquare from './stat-square.vue'
import Stat from './stat.js'
import Avatar from '../components/avatar.vue'
export default {
    props: ['user'],
    computed: {
        peers() {
            return new Stat('peers', 13)
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
    components: {
        StatSquare, Avatar
    }

}
</script>

<style scoped lang="scss">
@import '../css/imports.scss';
.profile {
    padding: 8px;
}

.profile__header {
    @include flex(column);
    align-items: center;
    padding-bottom: 1em;
    border-bottom: 1px solid $color-grey-light;
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

.profile__main {
    padding-top: 1em;
    @include flex(column);
    width: 100%;
    align-items: center;
}

.profile__nav {
    @include flex(row);
    width: 100%;
    justify-content: space-between;
}

.profile__stats {
    @include flex(row);
    flex-wrap: wrap;
    width: auto;
    align-self: center;
    margin-top: 2em;
}

.profile__stat {
    margin: 6px auto;
}

.bio__caption {
    @include text-action(.9em);
    letter-spacing: .3px;
}

.bio__value {
    padding-left: .5em;
}

@media ($br-small) {
    .profile {
        padding-left: 123px;
        padding-right: 123px;
        padding-top: 32px;
        padding-bottom: 16px;
    }
    .profile__bio {
        @include flex(row);
        flex-wrap: wrap;
    }
    .bio__item {
        @include flex(row);
    }

    .profile__stat:not(:first-child) {
        margin-left: 20px;
    }
}
</style>
