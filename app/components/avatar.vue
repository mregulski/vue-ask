<template>
    <div class="avatar-box">
        <img :src="src" />
    </div>
</template>

<script>
export default {
    props: {
        src: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
@import "../css/imports.scss";

.avatar-box {
    @include circle($avatar-size);
    overflow: hidden;
    margin: auto;
}

.avatar-box > img { /* prevent squashing the aspect ratio*/
    height: $avatar-size;
    min-width: $avatar-size;
}
</style>
