<template>
  <div>
    <b-modal
      :id="id"
      :name="name"
      size="lg"
      header-text-variant="white"
      header-bg-variant="primary"
      v-model="show"
    >
      <template #modal-header>
        <a class="icon h5"> <i class="fas fa-tags p-2"></i>{{ id }}</a>
      </template>
      <b-form novalidate class="" @submit.prevent>
        <b-card-group deck>
          <b-card header-text-variant="white" header-bg-variant="primary">
            <!-- Contenido del componente de la card -->
            <b-card-text>
              <!-- ini formulario  -->
              <b-form-row>
                <b-container fluid>
                  <!-- Interfaz de usuario -->
                  <b-row>
                    <b-col lg="6" class="my-1">
                      <b-form-group
                        label="Ordenar:"
                        label-for="sort-by-select"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-size="sm"
                        class="mb-0"
                        v-slot="{ ariaDescribedby }"
                      >
                        <b-input-group size="sm">
                          <b-form-select
                            id="sort-by-select"
                            v-model="sortBy"
                            :options="sortOptions"
                            :aria-describedby="ariaDescribedby"
                            class="w-75"
                          >
                            <template #first>
                              <option value="">-- ninguno --</option>
                            </template>
                          </b-form-select>

                          <b-form-select
                            v-model="sortDesc"
                            :disabled="!sortBy"
                            :aria-describedby="ariaDescribedby"
                            size="sm"
                            class="w-25"
                          >
                            <option :value="false">Asc</option>
                            <option :value="true">Desc</option>
                          </b-form-select>
                        </b-input-group>
                      </b-form-group>
                    </b-col>

                    <b-col lg="6" class="my-1">
                      <b-form-group
                        label="Buscar:"
                        label-for="filter-input"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-size="sm"
                        class="mb-0"
                      >
                        <b-input-group size="sm">
                          <b-form-input
                            id="filter-input"
                            v-model="filter"
                            type="search"
                            class="form-control mr-sm-2"
                            placeholder="Busqueda"
                            aria-label="Search"
                          ></b-form-input>
                          <b-button
                            pill
                            class="btn btn-primary btn-sm"
                            @click="prompt"
                            >Adicionar <i class="fa fa-plus ml-3"></i>
                          </b-button>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <!-- ini Tabla -->
                  <div class="row container">
                    <b-table
                      hover
                      responsive
                      select-mode="single"
                      selectable
                      :items="totalItems"
                      :fields="fields"
                      :current-page="currentPage"
                      :per-page="perPage"
                      :filter="filter"
                      :filter-included-fields="filterOn"
                      :sort-by.sync="sortBy"
                      :sort-desc.sync="sortDesc"
                      :sort-direction="sortDirection"
                      stacked="md"
                      show-empty
                      @filtered="onFiltered"
                      @row-selected="onRowSelected"
                    >
                      <template
                        v-slot:cell(name)="{ value, item, field: { key } }"
                      >
                        <template v-if="!item.isEditing">{{ value }}</template>
                        <b-form-input v-else v-model="item[key]" />
                      </template>

                      <template v-slot:cell(actions)="{ item }">
                        <!-- Editar -->
                        <template>
                          <button
                            type="button"
                            :class="
                              item.isEditing
                                ? 'btn btn-outline-sucess'
                                : 'btn btn-outline-primary'
                            "
                            @click="onEdit(item)"
                          >
                            <i
                              :class="
                                item.isEditing
                                  ? 'fas fa-check'
                                  : 'fas fa-pencil-alt'
                              "
                            ></i>
                          </button>
                        </template>
                        <!-- Editar -->

                        <!-- Boton Eliminar -->
                        <button
                          type="button"
                          class="btn btn-outline-primary"
                          @click="onDelete(item)"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </template>
                    </b-table>
                  </div>
                  <!-- fin Tabla -->

                  <!-- ini Paginacion -->
                  <b-row>
                    <b-col sm="7" md="6" class="my-1">
                      <b-pagination
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        align="fill"
                        size="sm"
                        class="my-0"
                      ></b-pagination>
                    </b-col>
                    <b-col sm="5" md="6" class="my-1">
                      <b-form-group
                        label="Por Pagina:"
                        label-for="per-page-select"
                        label-cols-sm="6"
                        label-cols-md="4"
                        label-cols-lg="3"
                        label-align-sm="right"
                        label-size="sm"
                        class="mb-0"
                      >
                        <b-form-select
                          id="per-page-select"
                          v-model="perPage"
                          :options="pageOptions"
                          size="sm"
                        ></b-form-select>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <!-- fin Paginacion -->

                  <!-- New Model modal -->
                  <b-modal
                    :id="infoModal.id"
                    :title="infoModal.title"
                    @hide="resetInfoModal"
                  >
                    <!-- ok-only -->
                    <pre>{{ infoModal.content }}</pre>
                  </b-modal>
                </b-container>
              </b-form-row>
              <!-- end formulario  -->
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-form>

      <template #modal-footer>
        <div class="w-100">
          <p>Desde Modal: {{ name }}</p>

          <p class="float-left">Footer</p>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="cancelButton"
          >
            Cancelar
          </b-button>
          <b-button
            variant="secondary"
            size="sm"
            class="float-right mx-2"
            @click="okButton"
          >
            OK
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namePrompt:null,
      nameState: null,
      submittedNames: [], //Formulario modal
      show: false, // Mostrar el Formulario Modal
      fields: [
        {
          key: "id",
          label: "ID",
          sortable: true,
          class: "text-center",
        },

        {
          key: "name",
          label: "Descripcion",
          sortable: true,
          sortDirection: "name",
        },
        { key: "actions", label: "Acciones" },
      ],
      selected: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Todos..." }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  props: ["id", "name", "items"],

  computed: {
    totalItems() {
      return [...this.items];
    },

    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },

  updated() {
    this.totalRows = this.items.length;
  },
  mounted() {
    this.totalRows = this.items.length;
    console.log("Registros :", this.items.length);
  },
  methods: {
    /**
     * Evento generado para capturar dato del prompt
     */
    async prompt(){
      const nameP = await this.$dialog.prompt({ text:"Ingrese nombre.",title:'Nuevo:'})
      if(nameP){
        //Se retorna algun valor
        this.namePrompt = nameP
        this.handleSubmit()
      }
    },

    onEdit(item) {
      if (item.isEditing) {
        //item.isEditing = false;        
        var payload ={}
        payload.id = item.id
        payload.name = item.name
        console.log(payload)
        this.$set(item, "isEditing", false);        
        // Despachar evento
        this.$emit("update", payload); //Emite el evento de cambio
      } else {
        this.$set(item, "isEditing", true);
      }
    },
    newItem(name) {
      //Crear Nuevo registro
      const nItem = {};
      nItem.id = this.items.length + 1;
      nItem.name = name;
      return nItem;
    },
    onCreate(item) {
      //console.log(item)
      this.$emit("create", item); //Emite el evento de cambio
    },
    onRead(item) {},
    onUpdate(item) {
      this.$emit("update", item); //Emite el evento de cambio
    },
    onDelete(item) {
      // Se elimina de la matriz de datos
      //console.log(item);
      this.$emit("delete", item); //Emite el evento de cambio
      this.items = this.items.filter((res) => res !== item);
      // Aciones posteriores on el objeto item
      this.totalRows = this.items.length;
    },
    cancelButton() {
      this.selected = null;
      //this.show=false
      this.$set(this, "show", false);
    },
    okButton() {
      this.$emit("change", this.id, this.selected); //Emite el evento de cambio
      this.show = false;
    },
    onRowSelected(items) {
      this.selected = items;
    },
    info(item, index, button) {
      this.infoModal.title = `Registro con ID: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length; //Para paginacion
      this.currentPage = 1;
    },
    checkFormValidity() {
      // Modal New
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
   /*  resetModal() {
      this.name = "";
      this.nameState = null;
    }, */
    handleOk(bvModalEvt) {
      //Se ejecuta cuando se crea un nuevo componente desde el modal nuevo
      bvModalEvt.preventDefault(); // Prevent modal from closing
      this.handleSubmit(); // Se dispara el evento de envio de elemento nuevo
    },
    handleSubmit() {
      /* if (!this.checkFormValidity()) {
        // Salir si no es valido
        return;
      } */
      //console.log(this.items);
      this.newItem(this.namePrompt);
      var temp = this.newItem(this.namePrompt.toUpperCase()); // Push the name to submitted names
      //console.log("Adicionando:")
      //console.log(temp)
      this.items.push(temp);
      this.totalRows = this.items.length;
      this.onCreate(temp);
      /* this.$nextTick(() => {
        // Parecido a async
        this.$bvModal.hide("modal-new"); // Ocultar modal manualmente
      }); */
    },

    mensaje(type, title, text) {
      //En caso de usar algun mensaje
      this.$notify({ type, title, text });
    },
  },
};
</script> 