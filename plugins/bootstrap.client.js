import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import Modal from 'bootstrap/js/dist/modal';

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      modal: Modal
    }
  }
})
