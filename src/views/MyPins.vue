<template>
  <v-row class="px-10">
    <v-col cols="12" class="text-h3 ">
      My Pins
    </v-col>
    <v-col cols="4" v-for="(item, index) in myEvents" :key="index">
      <v-card class="mx-auto my-6" max-width="330">
        <v-img
          height="200"
          :src='item.img'
        ></v-img>

        <v-card-title>{{item.name}}</v-card-title>

        <v-card-text>
          <div class="mb-2 subtitle-1">
            <v-icon class="pr-1">mdi-google-maps</v-icon>
            {{item.address}}
          </div>
          <div class="mb-2 subtitle-1">
            <v-icon class="pr-1">mdi-clock-time-eight-outline</v-icon>
           {{item.date}}
          </div>
          <div class="mb-2 subtitle-1">
            <v-icon class="pr-1">mdi-pin</v-icon>
            {{item.countPins}} 位使用者 pin 了這個活動
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title># Category</v-card-title>

        <v-card-text>
          <v-chip-group v-model="selection" column>
            <v-chip class="deep-purple accent-4 white--text">{{item.category}}</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      myEvents: [
        {
          name: 'CCSCA SYMPOSIUM：The ‘New Normal’',
          img: 'https://picsum.photos/id/1033/200/300',
          date: '2020/11/13',
          address: '台北市大安區和平東路二段134號',
          category: '展覽',
          countPins: '1',
        },
        {
          name: '台灣藝術博覽會',
          img: 'https://picsum.photos/id/1051/200/300',
          date: '2020/9/10',
          address: '台北市信義區信義路五段5號',
          category: '博覽會',
          countPins: '136',
        },
        {
          name: '簡單生活節',
          img: 'https://picsum.photos/id/1070/200/300',
          date: '2020/12/12',
          address: '台北市中正區八德路一段1號',
          category: '音樂表演',
          countPins: '78',
        },
      ],
    };
  },
};
</script>
