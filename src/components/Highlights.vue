<script setup> // eslint-disable-line
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    weatherInfo: {
        type: [Object, null],
        required: true
    },
});

</script>

<template>
    <div class="section highlights">
        <div class="title">
            오늘의 날씨 Highlights
        </div>
        <div class="highlights-wrapper">
            <div class="highlight">
                <div class="card">
                    <div class="card-title">
                        Wind
                    </div>
                    <div class="info-main">
                        <div class="info-main-num">
                            {{ weatherInfo?.WSD }}
                        </div>
                        <div class="info-main-text">
                            m/s
                        </div>
                    </div>
                    <div class="info-main">
                        <div class="info-main-num">
                            {{ weatherInfo?.VEC }}
                        </div>
                        <div class="info-main-text">
                            deg
                        </div>
                    </div>
                </div>
            </div>
            <div class="highlight">
                <div class="card">
                    <div class="card-title">
                        UVI
                    </div>
                    <div class="info-main">
                        <div class="info-main-num">
                            {{ weatherInfo?.current?.uvi }}
                        </div>
                        <div class="info-main-text">
                            정보없음
                        </div>
                    </div>
                </div>
            </div>
            <div class="highlight">
                <div class="card">
                    <div class="card-title">
                        Pressure
                    </div>
                    <div class="info-main">
                        <div class="info-main-num">
                            {{ weatherInfo?.current?.pressure }}
                        </div>
                        <div class="info-main-text">
                            정보 없음
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/styles/main.css';

.highlights {
  padding: 28px 18px 18px;
  background: url('/src/assets/img/gradient-4.jpg') no-repeat 0% 0%;
  background-size: cover;
  border-radius: 25px;
}

.highlights-wrapper {
  display: flex;
  justify-content: space-between;
}

.title {
    padding-bottom: 16px;
}

.highlight {
    width: 32%;
}

.card {
    min-height: 230px;
    padding: 16px;
    background: url('/src/assets/img/gradient-2.jpg') no-repeat 50% 50%;
    background-size: cover;
    border-radius: 8px;
}

.card-info { 
    margin-top: 30px;
}

.info-main {
  display: flex;
  /* align-items: flex-end; */
  margin-top: 40px;
}

.info-main:last-child {
  text-align: right;
}

.info-main-num {
  font-size: 30px;
}

.info-main-text {
  padding-left: 2px;
  padding-bottom: 3px;
  font-size: 15px;
  color: rgba(#ffff, 0.75);
}

.card-pic-wind {
    width: 40%;
    height: 90px;
    margin-bottom: 16px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
    background-image: url('/src/assets/img/wind.png');
}

</style>