<template>
    <div class="accordion"></div>
</template>

<script>
export default {
    name: 'Accordion',
    data: function () {
        return {
            activeItem: null,
        }
    },
    props: {
        id: {
            type: 'string',
            default: 'item',
        },
    },
}
</script>
