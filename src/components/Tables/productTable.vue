<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      item-key="id"
      class="elevation-1"
      :footer-props="{
        showFirstLastPage: true,
      }"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Product Table</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                @click="resetData()"
              >
                New Item
              </v-btn>
            </template>

            <v-card id="">
              <v-card-title>{{ modalTitle }}</v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="productData.productName"
                        label="Nama Produk"
                      ></v-text-field>
                      <vue-editor
                        v-model="productData.productDescription"
                      ></vue-editor>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select
                        v-model="productData.selectCondition"
                        :items="itemsCondition"
                        label="Kondisi Barang"
                        persistent-hint
                        return-object
                      ></v-select>
                      <v-row>
                        <v-col>
                          <v-text-field
                            v-model="productData.productWeight"
                            label="Berat"
                          ></v-text-field>
                        </v-col>
                        <v-col>
                          <v-select
                            v-model="productData.selectUnit"
                            :items="itemsUnit"
                            label="Satuan"
                            return-object
                          ></v-select>
                        </v-col>
                      </v-row>

                      <v-select
                        v-model="productData.selectCategory"
                        :items="itemsCategory"
                        label="Kategori"
                        return-object
                      ></v-select>

                      <v-text-field
                        v-model="productData.productPrice"
                        label="Harga"
                        placeholder="Rp."
                      ></v-text-field>
                      {{ Number(productData.productPrice).toLocaleString() }}

                      <v-file-input
                        counter
                        show-size
                        truncate-length="30"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Gambar Produk"
                        prepend-icon="mdi-camera"
                        v-model="filesimg"
                        @change="uploadImage"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn
                  color="success"
                  text
                  :loading="isLoading"
                  :disabled="isDisabled"
                  v-if="modal == 'Add'"
                  @click="addProduct()"
                >
                  Add
                </v-btn>
                <v-btn
                  color="green"
                  text
                  :loading="isLoading"
                  v-if="modal == 'Update'"
                  @click="updateProduct()"
                >
                  Update
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
        </v-toolbar>
      </template>
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.productName }}</td>
          <td>{{ item.selectCondition }}</td>
          <td>{{ item.productWeight }} {{ item.selectUnit }}</td>
          <td>{{ item.selectCategory }}</td>
          <td>Rp. {{ Number(item.productPrice).toLocaleString() }}</td>
          <td>
            <v-icon class="mx-2" small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
            <v-icon class="mx-2" small @click="editProduct(item)">
              mdi-pencil
            </v-icon>
          </td>
        </tr>
      </template></v-data-table
    >

    <!-- {{ this.formattedCost }} -->
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
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
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  timer: 3500,
  timerProgressBar: true,
});

export default {
  name: "ProductTable",
  components: {
    VueEditor,
  },
  data() {
    return {
      isDisabled: true,
      isLoading: false,
      filesimg: [],
      products: [],
      modal: null,
      modalTitle: null,
      productData: {
        productName: null,
        productDescription: null,
        productWeight: null,
        selectCondition: null,
        selectUnit: null,
        productPrice: null,
        selectCategory: null,
        imageProductURL: [],
      },
      dialog: false,
      dialogDelete: false,
      itemsCondition: ["Baru", "Bekas"],
      itemsUnit: ["gr", "Kg"],
      itemsCategory: ["Makanan Hewan", "Accessories Hewan", "Perawatan Hewan"],
      headers: [
        {
          text: "Nama Produk",
          align: "start",
          sortable: false,
        },
        { text: "Kondisi Barang", sortable: false },
        { text: "Berat", sortable: false },
        { text: "Kategori", sortable: false },
        { text: "Harga", sortable: false },
        { text: "Aksi", sortable: false },
      ],
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  computed: {
    // formatter() {
    //   return new Intl.NumberFormat("en-ID", {
    //     style: "currency",
    //     currency: "IDR",
    //   });
    // },
    // formattedCost() {
    //   return this.formatter
    //     .format(this.productData.productPrice)
    //     .replace(/[IDR]/gi, "")
    //     .replace(/(\.+\d{2})/, "")
    //     .replace(/,/g, ".")
    //     .trimLeft();
    // },
  },

  mounted() {},

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {},

  methods: {
    deleteItem(item) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$firestore.products.doc(item.id).delete();

          Toast.fire({
            type: "error",
            icon: "error",
            title: "Deleted  successfully",
          });
        }
      });
      // console.log(item.id);
    },

    editProduct(item) {
      this.dialog = true;
      this.productData = item;
      this.modal = "Update";
      this.modalTitle = "Edit Product";
    },

    updateProduct() {
      this.$firestore.products
        .doc(this.productData.id)
        .update(this.productData);
      Toast.fire({
        type: "success",
        title: "Updated  successfully",
      });
      this.dialog = false;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    resetData() {
      this.productData = {
        productName: null,
        imageProductURL: [],
      };
      this.filesimg = null;
      this.modal = "Add";
      this.modalTitle = "Add Product";
    },

    addProduct() {
      this.$firestore.products.add(this.productData);
      Toast.fire({
        type: "success",
        icon: "success",
        title: "Product created successfully",
      });
      this.close();
      console.log(this.productData.imageProductURL);
    },
    cek() {
      if (this.filesimg.length == 0) {
        console.log(this.filesimg);
      }
    },
    uploadImage() {
      this.isLoading = true;
      if (this.filesimg) {
        const storage = getStorage();
        const storageRef = ref(storage, "products/" + this.filesimg.name);
        const uploadTask = uploadBytesResumable(storageRef, this.filesimg);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              this.productData.imageProductURL.push(downloadURL);

              console.log("File available at", downloadURL);
              this.isDisabled = false;
              this.isLoading = false;
              // if (!downloadURL == 0) {
              //   this.test();
              // }
            });
          }
        );
      }
    },

    // uploadImage(files) {       //withfiles atau tanpa v-model di v-input
    //   if (files) {
    //     const storage = getStorage();
    //     const storageRef = ref(storage, "images/" + files.name);
    //     const uploadTask = uploadBytesResumable(storageRef, files);
    //     uploadTask.on(
    //       "state_changed",
    //       (snapshot) => {},
    //       (error) => {},
    //       () => {
    //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //           this.productData.imageProductURL.push(downloadURL);

    //           console.log("File available at", downloadURL);
    //           // if (!downloadURL == 0) {
    //           //   this.test();
    //           // }
    //         });
    //       }
    //     );
    //   }
    // },
  },
};
</script>

<style lang="scss">
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  text-align: center !important;
}

td {
  text-align: center;
}

.colored-toast.swal2-icon-success {
  background-color: #a5dc86 !important;

  .swal2-title {
    color: rgb(255, 255, 255);
  }
}

.colored-toast.swal2-icon-error {
  background-color: #f27474 !important;

  .swal2-title {
    color: white;
  }
}

.colored-toast .swal2-close {
  color: white;
}

.colored-toast .swal2-html-container {
  color: white;
}
</style>