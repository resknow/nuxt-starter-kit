<template>
    <nav class="menu">
        <ul class="flex gap-6">
            <li v-for="(link, key) in links" :key="key" class="menu__item">
                <a
                    class="menu__link flex items-center"
                    :href="link.href"
                    v-html="link.label"
                >
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        links: {
            type: 'array',
        },
    },
}
</script>
