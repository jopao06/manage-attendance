<template>
  <a-config-provider :theme="{
    token: {
      colorPrimary: '#17AD49',
      colorTextBase: '#00291B',
      fontFamily: 'Rubik, sans-serif',
      fontSize: 16,
      borderRadius: 4,
    }
  }">
    <RouterView />
  </a-config-provider>
</template>

<style>
body {
  margin: 0;
}
</style>