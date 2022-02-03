<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import useStore from "@/stores";
import { Api } from "@/api";
export default {
  setup() {
    const { adminStore } = useStore();
    const { isLoggedIn, handleSetLogin, handleCheckUser, handleGetToken } =
      adminStore;
    const router = useRouter();
    const userName = ref("");
    const userPassword = ref("");

    function handlerSubmit(e) {
      e.preventDefault();

      const username = userName.value;
      const password = userPassword.value;
      Api({
        method: "post",
        url: `admin/signin`,
        data: { username, password },
      })
        .then((res) => {
          const data = {
            token: res.data.token,
            expired: res.data.expired,
          };
          handleSetLogin(data);
          router.push("/admin");
        })
        .catch((err) => {
          console.dir(err);
        });
    }

    onMounted(() => {
      let cookieToken = handleGetToken();
      cookieToken[0] !== "" && router.push("/admin");
    });

    return {
      userName,
      userPassword,
      handlerSubmit,
    };
  },
};
</script>

<template>
  <main class="flex justify-center items-center h-screen bg-gray-50">
    <div class="container max-w-lg">
      <form
        class="space-y-8 p-8 bg-white rounded shadow-sm"
        @submit.prevent="handlerSubmit"
      >
        <legend class="text-4xl text-center">請先登入</legend>
        <div>
          <label for="userName" class="mb-4 block">使用者帳號</label>
          <input
            id="userName"
            type="text"
            name="userName"
            placeholder="請輸入帳號Email"
            v-model.trim="userName"
            class="p-2 rounded border w-full bg-gray-50 invalid:text-primary-600 invalid:border-primary-600 focus:ring-primary-500 focus:text-primary-600 text-primary-800"
          />
        </div>
        <div>
          <label for="userPassword" class="mb-4 block">使用者密碼</label>
          <input
            id="userPassword"
            type="password"
            class="p-2 rounded border w-full bg-gray-50 invalid:text-primary-600 invalid:border-primary-600 focus:ring-primary-500 focus:text-primary-600 text-primary-800"
            v-model="userPassword"
            placeholder="請輸入密碼"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-primary-500 text-white rounded-lg py-4 w-100 transition duration-300 hover:bg-primary-600"
        >
          登入
        </button>
      </form>
    </div>
    <!-- <Modal>
      <section
        class="bg-white rounded-md shadow-md p-4 transition-all duration-500 ease-in-out translate-y-16"
      >
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-medium pl-4">登入失敗</h1>
          <button
            type="button"
            class="text-danger-500 p-4 hover:text-warning-700"
            @click="handlerModalControl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-x h-8 w-8"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
        <h2>請確認您的帳號密碼</h2>
        <p>{{ loginErrorMessage }}</p>
      </section>
    </Modal> -->
  </main>
</template>
