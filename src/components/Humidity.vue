<script setup> // eslint-disable-line
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  weatherInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <section class="section-bottom">
        <div class="block-bottom">
            <div class="block-bottom-inner">
                <div class="block-bottom-pic pic-humidity"></div>
                <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                        <div class="block-bottom-text-block-title">
                            1시간 강수량: {{ weatherInfo?.PCP }} mm
                            <br />
                            강수 확률: {{ weatherInfo?.POP }} %
                        </div>
                        <div class="block-bottom-text-block-desc">
                            강수는 구름이나 공기 중으로부터 지면에 떨어진 액체 또는 고체의 수증기 응결체로서, 비, 이슬비, 얼음싸라기, 눈, 우박, 눈보라 등을 포함합니다. 
                            <br /><br />
                            눈과 같은 고체성 강수는 융해시킨 물의 깊이로 측정하여 강수에 포함됩니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.pic-humidity {
  background-image: url("/src/assets/img/humidity.png");
}
</style>