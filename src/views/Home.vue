<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import useStore from "@/stores";

export default {
  setup() {
    const router = useRouter();

    const { adminStore } = useStore();

    const { handleCheckUser } = adminStore;

    onMounted(() => {
      setTimeout(() => {
        handleCheckUser() === true
          ? router.push("/admin")
          : router.push("/login");
      }, 1000);
    });
  },
};
</script>
