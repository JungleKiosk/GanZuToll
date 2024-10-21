<!-- Modal.vue -->

<script>
export default {
    name: "Modal",
    props: {
        isVisible: Boolean,
        description: String
    },
    methods: {
        closeModal() {
            this.$emit("close");
        }
    }
};
</script>

<template>
    <div v-if="isVisible" class="modal text-dark" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content text-center">
                <div class="modal-body">
                    <p>{{ description }}</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-primary" @click="closeModal">Schließen</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-dialog {
    max-width: 400px;
}

.modal-content {
    padding: 20px;
}
</style>
