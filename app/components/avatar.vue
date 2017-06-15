<template>
    <figure class="avatar-box" :class="{'avatar-box--large': large}">
        <img :src="src" />
    </figure>
</template>

<script>
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
    }
}
</script>

<style scoped lang="scss">
@import "../css/imports.scss";
$avatar-size-small: 40px;
$avatar-size: 50px;
$avatar-size-large: 85px;

.avatar-box {
    @include circle($avatar-size-small);
    overflow: hidden;
    margin: auto;
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
