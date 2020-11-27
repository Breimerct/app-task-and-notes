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
        />

        <q-toolbar-title>
          {{ 'Roxana task' | uppercase }}
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
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Perfil</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onClose">
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
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list>
          <q-item-label header class="text-grey-8">
            Menú
          </q-item-label>
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import firebase from 'firebase';
const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
];

import Vue from 'vue';

export default Vue.extend({
  name: 'MainLayout',
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  },

  methods: {
    onClose(): void {
      firebase.auth().signOut();
    }
  }
});
</script>
