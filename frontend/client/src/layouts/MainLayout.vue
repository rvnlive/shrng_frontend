<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <!-- <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar> -->
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer> -->

    <div class="q-pa-md q-gutter-sm q-pt-md">
      <q-btn no-caps push color="primary" label="List BottomSheet" @click="show()" />
      <q-btn no-caps push color="white" text-color="primary" label="Grid BottomSheet" @click="show(true)" />
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// import { ref } from 'vue'
// import { useQuasar } from 'quasar'
const $q = useQuasar()

function show (grid) {
  $q.bottomSheet({
    dark: true,
    message: 'Bottom Sheet message',
    grid,
    actions: [
      {
        label: 'Drive',
        img: 'https://cdn.quasar.dev/img/logo_drive_128px.png',
        id: 'drive'
      },
      {
        label: 'Keep',
        img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
        id: 'keep'
      },
      {
        label: 'Google Hangouts',
        img: 'https://cdn.quasar.dev/img/logo_hangouts_128px.png',
        id: 'calendar'
      },
      {
        label: 'Calendar',
        img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
        id: 'calendar'
      },
      {},
      {
        label: 'Share',
        icon: 'share',
        id: 'share'
      },
      {
        label: 'Upload',
        icon: 'cloud_upload',
        color: 'primary',
        id: 'upload'
      },
      {},
      {
        label: 'John',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        id: 'john'
      }
    ]
  }).onOk(action => {
    // console.log('Action chosen:', action.id)
  }).onCancel(() => {
    // console.log('Dismissed')
  }).onDismiss(() => {
    // console.log('I am triggered on both OK and Cancel')
  })
}
</script>

