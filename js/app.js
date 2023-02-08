import { createApp } from 'vue'
import yaml from 'js-yaml'

const CONFIG_URL = '/configs/config.yml'

fetch(CONFIG_URL)
  .then((response) => response.text())
  .then((data) => {
    const config = yaml.load(data)
    const app = createApp({
      data() {
        return {
          schedules: config.schedules,
          upcomings: config.upcomings,
          links: config.links,
        }
      },
    })
    app.mount('#app')
  })
