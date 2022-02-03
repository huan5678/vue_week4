import { useAdminStore } from "./admin";
import { useProductStore } from "./product";
import { useModalStore } from "./modal";

export default function useStore() {
  const adminStore = useAdminStore();
  const productStore = useProductStore();
  const modalStore = useModalStore();

  return {
    adminStore,
    productStore,
    modalStore,
  };
}
