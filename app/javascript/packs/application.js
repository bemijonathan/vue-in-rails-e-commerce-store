// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// =require_tree public


require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
// require("/js/vendor/modernizr-3.5.0.min.js")
// require('js/vendor/modernizr-3.5.0.min.js')
// window.jQuery = window.jquery = require("js/vendor/jquery-3.2.1.min.js")
require("js/plugins.js")
require("js/active.js")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper nb   d 
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)





import user from '../users.vue'
import Index from "../index.vue"
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#hello',
    data: {
      message: "Can you say hello?"
    },
    components: { App, user , Index }
  })
})
