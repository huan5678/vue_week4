<script>
import { computed } from "vue";
import useStore from "@/stores";
import ModalCardTitle from "./ＭodalCardTitle.vue";
export default {
  components: { ModalCardTitle },
  setup() {
    const { modalStore } = useStore();
    const { state, closeModal } = modalStore;
    return {
      targetProduct: computed(() => state.modalProps),
      closeModal,
    };
  },
};
</script>

<template>
  <section
    class="flex flex-col overflow-hidden space-y-4 bg-gray-50 rounded-md pb-4"
  >
    <ModalCardTitle title="產品詳細內容" :close-modal="closeModal" />
    <div class="flex justify-between p-4">
      <img
        class="max-h-[300px]"
        :src="targetProduct.imageUrl"
        :alt="targetProduct.title"
      />
      <div class="p-4 flex-1 space-y-8">
        <h2 class="font-bold text-xl mb-2">
          {{ targetProduct.title }}
          <span
            class="px-2 py-1 ml-2 rounded text-sm bg-primary-400 text-white"
          >
            {{ targetProduct.category }}
          </span>
        </h2>
        <ul class="space-y-4">
          <li>商品描述：{{ targetProduct.description }}</li>
          <li>商品內容：{{ targetProduct.content }}</li>
          <li>
            {{ targetProduct.price }}
            <span class="pl-1 text-gray-400 line-through">{{
              targetProduct.origin_price
            }}</span>
            個 / 元
          </li>
        </ul>
      </div>
    </div>
    <div class="flex gap-4 overflow-x-auto">
      <img
        v-for="img in targetProduct.imagesUrl"
        :key="img"
        class="max-h-48 w-1/12 object-cover flex-auto"
        :src="img"
      />
    </div>
  </section>
</template>
