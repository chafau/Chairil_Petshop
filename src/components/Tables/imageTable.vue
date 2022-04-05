<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="images"
      :items-per-page="5"
      item-key="id"
      class="elevation-1"
      :footer-props="{
        showFirstLastPage: true,
      }"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Image Carousel</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
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
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="imageData.imageName"
                        label="Nama Gambar"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-file-input
                        counter
                        show-size
                        truncate-length="30"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an avatar"
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
                  @click="addImage()"
                >
                  Add
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
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
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.imageName }}</td>
          <td>
            <v-img
              class="mx-auto"
              width="200"
              :src="item.imageURL.join('')"
            ></v-img>
          </td>
          <td>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </td>
        </tr>
      </template></v-data-table
    >
  </div>
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
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  timer: 3500,
  timerProgressBar: true,
});

export default {
  name: "ImageProduct",
  data() {
    return {
      isDisabled: true,
      isLoading: false,
      filesimg: [],
      images: [],
      modal: null,
      imageData: {
        imageName: null,
        imageURL: [],
      },
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: "Nama Gambar",
          align: "start",
          sortable: false,
        },
        { text: "Gambar", sortable: false },
        { text: "Action", sortable: false },
      ],
    };
  },
  firestore() {
    return {
      images: db.collection("images"),
    };
  },
  computed: {},

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
          this.$firestore.images.doc(item.id).delete();

          Toast.fire({
            type: "error",
            icon: "error",
            title: "Deleted  successfully",
          });
        }
      });
      // console.log(item.id);
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
      this.imageData = {
        imageName: null,
        imageURL: [],
      };
      this.filesimg = null;
    },

    addImage() {
      if (!this.imageData.imageName || !this.imageData.imageURL.join("")) {
        // console.log("ini kosong");
      } else {
        this.$firestore.images.add(this.imageData);
        Toast.fire({
          type: "success",
          icon: "success",
          title: "Product created successfully",
        });
        this.close();
        console.log(this.imageData.imageURL);
      }
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
        const storageRef = ref(storage, "images/" + this.filesimg.name);
        const uploadTask = uploadBytesResumable(storageRef, this.filesimg);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              this.imageData.imageURL.push(downloadURL);

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
    //           this.imageData.imageURL.push(downloadURL);

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