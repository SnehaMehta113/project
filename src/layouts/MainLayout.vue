<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Accounts',
    caption: '',
    icon: '',
    link: '/accounts/'
  },
  {
    title: 'Items',
    caption: '',
    icon: '',
    link: '/items/'
  },
  {
    title: 'Banks',
    caption: '',
    icon: '',
    link: '/banks/'
  },
  {
    title: 'Invoices',
    caption: '',
    icon: '',
    link: '/invoices/'
  },
  {
    title: 'Organisation',
    caption: '',
    icon: '',
    link: '/organisation/'
  },
  {
    title: 'Contacts',
    caption: '',
    icon: '',
    link: '/contacts/'
  },
  {
    title: 'Driver',
    caption: '',
    icon: '',
    link: '/driver/'
  },
  {
    title: 'Vehicles',
    caption: '',
    icon: '',
    link: '/vehicles/'
  },
  {
    title: 'Log Book',
    caption: '',
    icon: '',
    link: '/log_book/'
  },
  {
    title: 'Contracts',
    caption: '',
    icon: '',
    link: '/contracts/'
  },
  {
    title: 'Vehicles Type',
    caption: '',
    icon: '',
    link: '/vehicles_type/'
  },
  {
    title: 'Menu',
    caption: '',
    icon: '',
    link: '/menu/'
  },
  {
    title: 'Menu Modules',
    caption: '',
    icon: '',
    link: '/menu_modules/'
  },
  {
    title: 'Departments',
    caption: '',
    icon: '',
    link: '/departments/'
  },
  {
    title: 'Documents',
    caption: '',
    icon: '',
    link: '/documents/'
  },
  {
    title: 'Invoice Details',
    caption: '',
    icon: '',
    link: '/invoice_details/'
  },
  {
    title: 'Accounting Receipts',
    caption: '',
    icon: '',
    link: 'accounting_receipts/'
  },
  {
    title: 'Account Settlements',
    caption: '',
    icon: '',
    link: 'account_settlements/'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
