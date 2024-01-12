<script setup> // eslint-disable-line
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  coordInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <section class="section-bottom right">
        <div class="block-bottom">
            <div class="block-bottom-inner">
                <div class="block-bottom-pic pic-coords"></div>
                <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                        <div class="block-bottom-text-block-title">
                            경도 (longitude): {{coordInfo?.lon}} 분
                        </div>
                        <div class="block-bottom-text-block-desc">
                            경도는 본초자오선을 기준으로 동쪽 혹은 서쪽으로 얼마나 떨어져 있는지 나타내는 위치이다.
                        </div>
                    </div>
                    <div class="block-bottom-text-block">
                        <div class="block-bottom-text-block-title">
                            위도 (latitude): {{coordInfo?.lat}} 분
                        </div>
                        <div class="block-bottom-text-block-desc">
                            위도는 적도를 기준으로 북쪽 및 남쪽으로 얼마나 떨어져 있는지 각도로 나타난 것이다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.pic-coords {
  background-image: url("/src/assets/img/compass.png");
}
</style>