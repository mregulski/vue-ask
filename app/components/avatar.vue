<template>
    <figure class="avatar-box" :class="{'avatar-box--large': large}">
        <a href="#">
            <img @click="clicked" :src="src" />
        </a>
    </figure>
</template>

<script>
import Bus from '../event-bus.js'
export default {
    props: {
        src: {
            required: true,
            type: String
        },
        large: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    methods: {
        clicked() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped lang="scss">
@import "../css/imports.scss";


.avatar-box {
    @include circle($avatar-size-small);
    overflow: hidden;
    margin: auto;
}

.avatar-box a {
    display: block;
}

.avatar-box img {
    /* prevent squashing the aspect ratio*/
    height: $avatar-size-small;
    min-width: $avatar-size-small;
}

.avatar-box.avatar-box--large {
    @include circle($avatar-size);
}

.avatar-box.avatar-box--large img {
    height: $avatar-size;
    min-width: $avatar-size;
}


@media ($br-small) {
    .avatar-box {
        @include circle($avatar-size);
        overflow: hidden;
        margin: auto;
    }

    .avatar-box img {
        /* prevent squashing the aspect ratio*/
        height: $avatar-size;
        min-width: $avatar-size;
    }

    .avatar-box.avatar-box--large {
        @include circle($avatar-size-large);
    }
    .avatar-box.avatar-box--large img {
        height: $avatar-size-large;
        min-width: $avatar-size-large;
    }
}
</style>
