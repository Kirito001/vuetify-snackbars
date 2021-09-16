<template>
    <v-snackbar
        v-model="show"
        :timeout="props[0].timeout"
        :style="`margin-top:${marginTop}px`"
        :color="props[0].color"
        :top="props[0].top"
        :bottom="props[0].bottom"
        :left="props[0].left"
        :right="props[0].right"
        :centered="props[0].centered"
        :vertical="props[0].vertical"
        :multi-line="props[0].multiLine"
        :outlined="props[0].outlined"
        :light="props[0].light"
        :dark="props[0].dark"
        :transition="props[0].transition"
        :text="props[0].text"
    >
        <span id="snackbarContent">{{ content[0] }}</span>
        <template v-slot:action="{ attrs }">
            <v-btn
                :color="props[0].color?'':'#bb86fc'"
                v-bind="attrs"
                @click="show = false"
                v-show="!props[0].iconClose&&!props[0].hideActions"
                text
            >
                <v-chip
                    :color="props[0].color?'':'#bb86fc'"
                    class="px-2 mr-2"
                    v-text="queue-1"
                    v-show="queue>1"
                    small
                    label
                ></v-chip>
                {{ queue > 1 ? '下一条':'关闭' }}
            </v-btn>
            <v-badge
                :color="props[0].color?'':'#bb86fc'"
                :content="queue-1" :value="queue-1>0"
                v-show="props[0].iconClose"
            >
                <v-btn
                    :color="props[0].color?'':'#bb86fc'"
                    v-bind="attrs"
                    @click="show = false"
                    icon
                >
                    <v-icon size="20">mdi-close</v-icon>
                </v-btn>
            </v-badge>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: 'Snackbar',
    data() {
        return {
            show: false,
            content: [],    // 消息队列
            queue: 0,       // 消息队列数量,
            marginTop: 0,
            props: [],      // 风格队列
            init: {
                color: '',
                top: false,
                bottom: false,
                left: false,
                right: false,
                centered: false,
                vertical: false,
                multiLine: false,
                outlined: false,
                light: false,
                dark: false,
                hideActions: false,
                transition: 'v-snack-transition',
                iconClose: false,
                text: false,
                timeout: 5000
            }
        }
    },
    created() {
        this.props.push(this.init)
    },
    mounted() {
        this.$nextTick(() => {
            let appbar = document.getElementsByClassName('v-app-bar')
            this.marginTop = appbar ? appbar[0].offsetHeight : 0
        })
    },
    methods: {
        execute(params) {
            if(this.queue == 0) {
                this.content = []
                this.props = []
                this.show = true
            }
            if(typeof params == 'object') {
                this.content.push(params.content)
                this.props.push(params)
            } else {
                this.content.push(params)
                this.props.push(this.init)
            }
            this.queue++
        },
        snackqueue() {
            return this.queue
        },
        snackBarCloseAll() {
            if(this.queue == 0) return false

            this.queue = 1
            this.show = false
        }
    },
    watch: {
        show(val) {
            if(!val) {
                let t = this.props[0].transition || 'v-snack-transition'
                setTimeout(() => {
                    this.queue--
                    if(this.queue > 0) {
                        this.content.splice(0, 1)
                        this.props.splice(0, 1)
                        this.show = true
                    }
                }, t=='v-snack-transition'?200:400);
            }
        }
    }
}
</script>