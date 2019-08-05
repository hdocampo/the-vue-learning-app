<template>
    <div>
        <ul>
            <li v-for="item in links"
                :key="item.index"
            >
                <router-link :to=item.url> {{ item.text }} </router-link>
            </li>
        </ul>
    </div>
</template>

<script src="./header.js"></script>

