import { reactive } from "vue";
import { defineStore } from "pinia";
import { useAdminStore } from "@/stores/admin";
import { Api } from "@/api";

export const useProductStore = defineStore("product", function () {
  const api_path = import.meta.env.VITE_API_PATH;
  const productList = reactive({
    products: [],
    pagination: {},
    currentPage: 1,
    category: null,
  });

  const adminStore = useAdminStore();

  function handleGetProductAll() {
    Api({
      method: "get",
      url: `api/${api_path}/admin/products/all`,
      token: adminStore.token,
    })
      .then((res) => {
        // console.log(res.data);
        productList.products = res.data.products;
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleGetProductList(
    page = productList.currentPage,
    category = productList.category
  ) {
    Api({
      method: "get",
      url: `api/${api_path}/admin/products?page=${page}${
        category ? `&category=${category}` : ""
      }`,
      token: adminStore.token,
    })
      .then((res) => {
        // console.log(res.data);

        productList.products = res.data.products;
        productList.pagination = res.data.pagination;
      })
      .catch((err) => {
        console.dir(err);
      });
  }
  function handleEditProduct(id, data) {
    Api({
      method: "put",
      url: `api/${api_path}/admin/product/${id}`,
      data: { data: data },
      token: adminStore.token,
    })
      .then((res) => {
        handleGetProductList();
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleDeleteProduct(id) {
    Api({
      method: "delete",
      url: `api/${api_path}/admin/product/${id}`,
      token: adminStore.token,
    })
      .then((res) => {
        handleGetProductList();
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleCreateProduct(data) {
    Api({
      method: "post",
      url: `api/${api_path}/admin/product`,
      data: { data: data },
      token: adminStore.token,
    })
      .then((res) => {
        handleGetProductList(productList.currentPage);
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  function handleImageUpload(file) {
    const formData = new FormData();
    formData.append("file-to-upload", file);
    return Api({
      method: "post",
      url: `api/${api_path}/admin/upload`,
      data: formData,
      token: adminStore.token,
    });
  }

  return {
    productList,
    handleCreateProduct,
    handleGetProductAll,
    handleGetProductList,
    handleEditProduct,
    handleDeleteProduct,
    handleImageUpload,
  };
});
