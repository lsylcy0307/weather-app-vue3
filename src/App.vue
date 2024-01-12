
<script setup>
import { ref, onMounted } from 'vue';
import WeatherSummary from './components/WeatherSummary.vue';
import Highlights from './components/Highlights.vue';
import Coords from './components/Coords.vue';
import Humidity from './components/Humidity.vue';
import { getCurrentDate, getCurrentHour } from './utils'
import { API_KEY, BASE_URL } from './constants/index'
import { readExcel } from './utils/readExcel'

const weatherInfo = ref(null);
const coordInfo = ref(null);
const isError = ref(false);

const area = ref('서울특별시 종로구');
const getWeather = async () => {
    try {
        const data = await readExcel(area.value);

        if (data.x !== null && data.y !== null) {
            const locationInfo = {
                nx: data.x,
                ny: data.y,
                baseDate: getCurrentDate(),
                baseTime: getCurrentHour(),
            };

            coordInfo.value = {lon: data.lon, lat: data.lat};

            const apiRequest = `${BASE_URL}?serviceKey=${API_KEY}&base_date=${locationInfo.baseDate}&base_time=${locationInfo.baseTime}&nx=${locationInfo.nx}&ny=${locationInfo.ny}&numOfRows&dataType=JSON`;
            console.log(apiRequest);
            const response = await fetch(apiRequest);
            const responseData = await response.json();
            const weatherData = responseData.response.body.items.item;

            //EXCTRACT KEY WEATHER DATA
            const TMP = weatherData.find(item => item.category === 'TMP').fcstValue;
            const WSD = weatherData.find(item => item.category === 'WSD').fcstValue;
            const VEC = weatherData.find(item => item.category === 'VEC').fcstValue;
            const PCP = weatherData.find(item => item.category === 'PCP').fcstValue;
            const POP = weatherData.find(item => item.category === 'POP').fcstValue;

            weatherInfo.value = {
                AREA: area.value,
                TMP: TMP,
                WSD: WSD,
                VEC: VEC,
                PCP: PCP,
                POP: POP
            };
            isError.value = false;
        } else {
            console.error('Invalid coordinates obtained from readExcel');
            isError.value = true;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        isError.value = true;
    }
};

onMounted(getWeather);
</script>


<template>
  <div class="page">
    <!-- <img id="background" src='./img/background.png'> -->
    <main class="main">
      <div class="container">
        <div class="laptop">
          <p>기상청의 API를 이용하여 만든 날씨 앱입니다. (시)와 (구)를 입력하여 현재 날씨를 확인하세요.</p>
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                  <div class="city-inner">
                    <input v-model="area" type="text" class="searchbar" @keyup.enter="getWeather" placeholder="서울특별시 구로구">
                  </div>
                  <div v-if="isError" class="error">
                      지역 명칭이 올바른지 확인해주세요.
                  </div>
                  <WeatherSummary :weatherInfo="weatherInfo" />
              </div>
            </section>
            <section class="section section-right">
              <Highlights :weatherInfo="weatherInfo" />
            </section>
          </div>
          <div class="sections section-bottom">
            <Coords :coordInfo="coordInfo" />
            <Humidity :weatherInfo="weatherInfo" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<style>
@import './assets/styles/main.css';

.page {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0;

  background: url('./assets/img/background.png') no-repeat 50% 50%;
  background-size: cover;
}

.laptop {
  width: 100%;
  padding: 20px;
  border-radius: 25px;
}

.sections {
  display: flex;
  width: 100%;
}

.section-left {
  width: 30%;
  padding-right: 10px;
}

.section-right {
  width: 70%;
  padding-left: 10px;
}

.section-bottom {
  margin-top: 12px;
  gap: 16px;
  z-index: 2;
}

.info {
  height: 100%;
  padding: 16px;
  background: url('./assets/img/gradient-1.jpg') no-repeat 50% 50%;
  background-size: cover;
  border-radius: 25px;
}

.searchbar {
  width: 100%;
  padding: 16px;
  font-family: 'Inter', Arial, sans-serif;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
}


.city-inner {
  position: relative;
  display: inline-block;
  width: 100%;
}

.city-inner::after {
  content: '';
  position: absolute;
  top: 0;
  right: 10px;
  width: 25px;
  height: 25px;
  background: url('./assets/img/search.svg') no-repeat 50% 50%;
  background-size: contain;
  transform: translateY(50%);
  cursor: pointer;
}

/* Add spacing between the icon and the text input */
.city-inner input {
  margin-right: 35px; /* Adjust the value according to your needs */
}

.error {
  margin-top: 10px;
  color: red;
}

</style>