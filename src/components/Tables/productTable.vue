<template>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="products"
          :items-per-page="5"
          item-key="id"
          class="elevation-1"
          :footer-props="{
            showFirstLastPage: true,
          }"
          ><template v-slot:item="{ item }">
            <tr>
              <td>{{ item.productName }}</td>
              <td><img :src="item.imageURL" alt="" width="80px" /></td>
            </tr> </template
        ></v-data-table>
      </v-container>
</template>

<script>
import { fb, db } from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Swal from "sweetalert2";
import $ from "jquery";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

export default {
  name: "TableProduct",
  data() {
    return {
      headers: [
        {
          text: "Gambar",
          align: "start",
        },
        { text: "Category", value: "category" },
        { text: "" },
      ],
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
};
</script>