<template>
  <div class="controls">
    <div class="controls__flex">
      <div class="cat__wrapper">
<!--        you can use an array with names of classes in ":class"-->
        <img class="controls__img" src="../assets/cat.jpg" alt="cat"
              v-if="isCatShow"
             :class="isModified"
             :style="imgStyle">
        <p v-else>Cat will be back soon</p>
      </div>
      <div class="controls__items">
        <h2>Cat is having fun</h2>
        <button @click="isCatShow = !isCatShow">{{ isCatShow ? 'Hide' : 'Show' }}</button>
        <p>Modify the picture!</p>
        <button class="controls__button"
                @click="isModified.sepia = !isModified.sepia" :class="isModified.sepia ? 'active' : '' ">Sepia filter</button>
        <button class="controls__button"
                @click="isModified.border = !isModified.border" :class="isModified.border ? 'active' : '' ">Border on</button>
        <button class="controls__button"
                @click="isModified.shadow = !isModified.shadow" :class="isModified.shadow ? 'active' : '' ">Shadow on</button>
        <p>Width: {{ imgSizes.currentWidth }}</p>
        <input type="range"
               :value="imgSizes.currentWidth"
               @input="imgSizes.currentWidth = $event.target.value"
               :min="imgSizes.minWidth"
               :max="imgSizes.maxWidth">
        <p>Height: {{ imgSizes.currentHeight }}</p>
        <input type="range"
               :value="imgSizes.currentHeight"
               @input="imgSizes.currentHeight = $event.target.value"
               :min="imgSizes.minHeight"
               :max="imgSizes.maxHeight">
        <p>Rotate the picture for {{ imgSizes.currentAngle }}deg angle</p>
        <input type="range"
               :value="imgSizes.currentAngle"
               @input="imgSizes.currentAngle = $event.target.value"
               min="0"
               max="360">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatsControls',
  data () {
    return {
      isCatShow: true,
      isModified: {
        sepia: false,
        border: false,
        shadow: false
      },
      imgSizes: {
        maxWidth: 776,
        minWidth: 300,
        maxHeight: 478,
        minHeight: 178,
        currentWidth: 776,
        currentHeight: 478,
        currentAngle: 0
      }
    }
  },
  computed: {
    imgStyle () {
      return {
        width: `${this.imgSizes.currentWidth}px`,
        height: `${this.imgSizes.currentHeight}px`,
        transform: `rotate(${this.imgSizes.currentAngle}deg)`
      }
    }
  }
}
</script>

<style lang="scss">
.controls {
  border-top: aquamarine 3px solid;
  padding-top: 30px;
  font-size: 18px;
  p {
    margin: 0;
    margin-top: 10px;
  }
  .cat__wrapper {
    width: 776px;
    height: 478px;

    background: #ddd;
  }
  &__img {
    transition: all .2s ease;
    display: block;
    &.sepia {
      filter: sepia(100%);
    }
    &.border {
      border: 3px solid aqua;
    }
    &.shadow {
      box-shadow: 10px 10px 10px #777;
    }
  }
  &__button {
    &.active {
      background-color: #aaa;
      color: #fff;
    }
  }
}

.controls__flex {
  display: flex;
  gap: 30px;
}

</style>
