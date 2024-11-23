<script>
export default {
    data() {
        return {
            menuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    }
};
</script>

<template>
    <div class="container mt-5">
        <!-- Pulsante Toggle Fisso -->
        <button class="menu-toggle btn_index" @click="toggleMenu">
            ☰ Menu
        </button>

        <!-- Menu Laterale Scorrevole -->
        <div class="side-menu" :class="{ 'open': menuOpen }">
            <h2>Index</h2>
            <hr>
            <ul>
                <li><h4><a href="#casi">1. Casi</a></h4></li>
                <ul>
                    <li><a href="#nominativo">Nominativo</a></li>
                    <li><a href="#accusativo">Accusativo</a></li>
                    <li><a href="#dativo">Dativo</a></li>
                </ul>
            </ul>
        </div>
    </div>
</template>

<style scoped>
/* Pulsante Toggle Fisso */
.menu-toggle {
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    position: fixed;
    top: 100px;
    right: 30px;
    z-index: 1000;
    cursor: pointer;
}



/* Menu Laterale */
.side-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #85dff3c6;
    padding: 20px;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 999;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

.side-menu.open {
    transform: translateX(0);
}

/* Stile per i Link del Menu */
.side-menu h2 {
    margin-top: 50px;
    color: rgb(0, 0, 0);
}

.side-menu ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
}

.side-menu ul li {
    margin: 10px 0;
}

.side-menu ul li a {
    color: #12104b;
    text-decoration: none;
    font-weight: bold;
}

.side-menu ul li a:hover {
    color: rgb(255, 140, 0);
}

/* Modifica per il menu in modalità mobile */
@media (max-width: 768px) {
    .menu-toggle {
        top: 100px;
        right: 20px;
        padding: 8px 12px;
        font-size: 1em;
    }
}
</style>
