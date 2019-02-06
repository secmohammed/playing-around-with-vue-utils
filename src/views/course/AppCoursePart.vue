<template>
    <div>
        <a href="#">
            {{ part.title }}
        </a>
    </div>
</template>
<script>
    export default {
        props: {
            part: {
                required: true,
                type: Object
            }
        }
    }
</script>
