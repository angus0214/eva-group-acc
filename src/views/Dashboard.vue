<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Welcome ! User001
          </v-list-item-title>
          <v-list-item-subtitle>
            有經驗佳
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-body-1">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line style="position: absolute;bottom: 0;">
          <v-switch
            v-model="$vuetify.theme.dark"
            inset
            label="Vuetify Theme Dark"
          ></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ACC - APP</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      navItems: [
        { title: 'New Pin', icon: 'mdi-new-box', link: '/newpin' },
        { title: 'My Pins', icon: 'mdi-alpha-p-box', link: '/mypins' },
        {
          title: 'All Pins',
          icon: 'mdi-collapse-all-outline',
          link: '/allpins',
        },
      ],
      drawer: true,
    };
  },
};
</script>
