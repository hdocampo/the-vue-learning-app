<template>
    <div>
        <ul>
            <li v-for="item in links"
                :key="item.index"
            >
                <a :href="item.url">{{ item.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script src="./header.js"></script>

