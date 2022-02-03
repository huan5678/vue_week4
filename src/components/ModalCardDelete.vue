<script>
import { computed, ref, watchEffect } from "vue";
import useStore from "@/stores";
import ModalCardTitle from "./ＭodalCardTitle.vue";
export default {
  components: { ModalCardTitle },
  setup() {
    const { modalStore, productStore } = useStore();
    const { closeModal, state } = modalStore;
    const { handleDeleteProduct } = productStore;
    const productData = ref({ ...state.modalProps });

    watchEffect(() => {
      productData.value = { ...state.modalProps };
    });

    function handleSetDeleteProduct(id) {
      handleDeleteProduct(id);
      closeModal();
    }

    return {
      isOpenModal: computed(() => state.isOpen),
      productData,
      handleSetDeleteProduct,
      closeModal,
    };
  },
};
</script>

<template>
  <section class="space-y-4 bg-gray-50 rounded-md overflow-hidden w-2/3">
    <ModalCardTitle title="請確認是否刪除" :close-modal="closeModal" />
    <p class="p-2 text-secondary-500 text-center text-xl">
      {{ productData.title }}
    </p>
    <div class="container flex justify-between gap-4 p-4">
      <button
        class="flex-auto py-2 bg-danger-500 text-white hover:bg-danger-700 transition duration-300 rounded-md"
        type="button"
        @click="handleSetDeleteProduct(productData.id)"
      >
        確認刪除
      </button>
      <button
        class="flex-auto py-2 bg-gray-500 text-white hover:bg-secondary-700 transition duration-300 rounded-md"
        @click="closeModal"
        type="button"
      >
        取消刪除
      </button>
    </div>
  </section>
</template>
