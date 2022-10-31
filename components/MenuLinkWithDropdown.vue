<template>
    <li class="menu__item">
        <a
            @mouseover.passive="isOpen = !isOpen"
            href="#"
            class="menu__link menu__link--has-dropdown flex items-center"
        >
            <span x-html="label"></span>

            <ul
                v-click-away="(isOpen = false)"
                class="menu__dropdown flow flow-space-2"
            >
                <li v-for="(link, key) in links" :key="key">
                    <a :href="link.href" x-html="link.label"></a>
                </li>
            </ul>
        </a>
    </li>
</template>

<style lang="scss">
$showMenuAt: 900px !default;

.menu {
    display: none;

    .menu__item {
        position: relative;
    }

    a {
        color: var(--menu-link-color, var(--color-gray-70));
        text-decoration: none;

        &:hover {
            --menu-link-color: var(
                --menu-link-color-hover,
                var(--color-gray-90)
            );
        }
    }

    .menu__dropdown {
        background-color: var(--menu-dropdown-background-color, white);
        box-shadow: var(--menu-dropdown-shadow, var(--shadow-xl));
        padding: var(--menu-dropdown-padding, var(--space-4) var(--space-6));
        position: absolute;
        left: calc(var(--menu-dropdown-h-offset, var(--space-2)) * -1);
        top: var(--menu-dropdown-v-offset, var(--space-8));
        min-width: var(--menu-dropdown-min-width, 10rem);
    }

    @media (min-width: $showMenuAt) {
        display: block;
    }
}
</style>

<script>
export default {
    name: 'Menu',
    data: function () {
        return {
            isOpen: false,
        }
    },
    props: {
        label: {
            type: 'string',
        },
        links: {
            type: 'array',
        },
    },
}
</script>
