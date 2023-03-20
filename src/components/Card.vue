<script>
export default {
  props: {
    number: Number,
    text: String,
  },
  data() {
    return {
      clicked: false,
    };
  },
};
</script>
<template>
  <div
    class="flip-card"
    :class="clicked ? 'flip-card-active' : ''"
    @click="clicked = !clicked"
  >
    <div class="flip-card-inner">
      <div class="flip-card-front">
        {{ number }}
        <!-- Какой будет шляпа, чтобы положить конец всем шляпам? Что можно надеть на
        голову, что заставит людей замереть, и смотреть с трепетом и изумлением? -->
      </div>
      <div class="flip-card-back">
        {{ text }}
        <!-- 1 -->
      </div>
    </div>
  </div>
</template>


<style>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card-active .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 18px;
  padding: 0px 5px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  border: 1px solid #000;
  background-color: dodgerblue;
  color: black;
}

/* Style the back side */
.flip-card-back {
  border: 1px solid #fff;
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>