<template>
    <div class="stat" :style="rotation">
        <div class="stat__wrapper" :style="counterRotation">
            <span class="stat__value number">{{ stat.value }}</span>
            <span class="stat__name">{{ stat.name }}</span>
        </div>
    </div>
</template>

<script>
import Stat from './stat.js'
export default {
    props: {
        stat: {
            type: Stat,
            required: true
        },
        angle: {
            type: Number,
            required: false,
            default: 0
        }
    },
    computed: {
        rotation() {
            return `transform: rotate(${this.angle}deg);`
        },
        counterRotation() {
            return `transform: rotate(${-this.angle}deg);`
        }
    }
}
</script>

<style scoped lang="scss">
@import '../css/imports.scss';

.stat {
    width: 95px;
    height: 95px;
    position: relative;
    background: $color-blue-light; // transform: rotate(30deg);
}
    

.stat__wrapper {
    @include flex(column); // transform: rotate(-30deg);
    width: 100%;
    height: 100%;
    padding: 5px 0;

}

.stat__value,
.stat__name {

    display: block;
    margin-left: auto;
    margin-right: auto;
}

.stat__value {
    @include text-number(1.3em);
    margin-top: 1em;
    margin-bottom: auto;
}

.stat__name {
    @include text-fancy(.9em);
    margin-top: auto;
    margin-bottom: 2em;
}
</style>
