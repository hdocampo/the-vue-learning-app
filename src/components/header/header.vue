<template>
    <div>
        <b-nav>
            <b-nav-item v-for="item in links"
                :key="item.index"
                :to=item.url>{{ item.text }}</b-nav-item>
        </b-nav>
    </div>
</template>

<script src="./header.js"></script>

