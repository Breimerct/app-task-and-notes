<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          v-if="!isMobile"
        />

        <q-toolbar-title>
          {{ 'notas y tareas' | uppercase }}
        </q-toolbar-title>
        <div>
          <q-btn-dropdown flat round icon="account_circle">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-center">
                    <q-avatar>
                      <img src="../assets/perfil2.jpg" />
                    </q-avatar>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup :to="{ name: 'profile' }">
                <q-item-section>
                  <q-item-label>Perfil</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="logOut">
                <q-item-section>
                  <q-item-label>Cerrar sesión</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="!isMobile"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <q-item-label header class="text-grey-8"> Menú </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="../assets/wallpaper.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="76px" class="q-mb-sm">
            <img src="./../assets/perfil2.jpg" />
          </q-avatar>
          <div class="text-weight-bold">Roxana Simancas</div>
          <div>@RSIMANCAS</div>
        </div>
      </q-img>
    </q-drawer>

    <q-footer reveal elevated class="bg-white" v-if="isMobile">
      <tabs-links></tabs-links>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import firebase from 'firebase';
import TabsLinks from 'src/components/TabsLinks.vue';

const linksData = [
  {
    title: 'Tareas',
    icon: 'book',
    link: 'home',
  },
];

import Vue from 'vue';
import {mapActions} from 'vuex';

export default Vue.extend({
  name: 'MainLayout',
  components: { EssentialLink, TabsLinks },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      isMobile: this.$q.platform.is.mobile
    };
  },

  methods: {
    ...mapActions('moduleTask', ['logOut']),
  },
});
</script>
