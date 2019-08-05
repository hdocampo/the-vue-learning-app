<template>
    <div>
        <select name="colorSelector" id="colorSelector">
            <option
                v-for="color in list"
                :key="color.index"
                :value="color.value"
            >
                {{ color.name }}
            </option>
        </select>
    </div>
</template>

<script src="./color-selector.js"></script>