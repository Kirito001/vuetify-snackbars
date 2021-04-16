<template>
    <v-app>
        <v-app-bar color="#6200ee" height="64" dark app>
			<v-toolbar-title>
				<v-img
					width="150"
					src="@/assets/logo.svg"
					contain
				></v-img>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn @click="$vuetify.theme.dark=!$vuetify.theme.dark" icon>
				<v-icon>mdi-brightness-4</v-icon>
			</v-btn>
        </v-app-bar>

        <v-main>
            <v-container class="pa-0" fluid>
				<v-sheet max-width="1000" class="pa-5 pa-sm-10 mx-auto" elevation="3">
					<h4 class="text-h4 mb-6">消息条（this.$snackbar）</h4>
					<v-alert color="green" border="left" text>针对 <code>vuetify</code> 的 <code>snackbar</code> 组件封装的以js驱动的消息条，完全遵循材质设计规范，<a href="https://www.material.io/components/snackbars" target="_blank">
							<span>前往 snackbar 的材质设计</span>
							<v-icon size="16" style="vertical-align:unset">mdi-open-in-new</v-icon>
						</a>
					</v-alert>
					<v-divider class="my-6"></v-divider>
					<v-btn color="brown" class="mr-3" @click="$snackbar(`this.$snackbar('基础消息条')`)" dark>基础消息条</v-btn>
					<v-btn color="brown" @click="$snackbar({content: 'Material Design Icons growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project.'})" dark>object类型消息条</v-btn>
					<v-divider class="my-6"></v-divider>
					消息队列数：
					<v-badge :content="$snackqueue()" :value="$snackqueue()" color="#6200ee" overlap>
						<v-icon color="orange" size="32">mdi-android-messages</v-icon>
					</v-badge>
					<v-btn class="ml-10" color="#6200ee" @click="$snackBarCloseAll()" dark>
						<v-icon left>mdi-trash-can-outline</v-icon> 清空队列
					</v-btn>
					<v-divider class="my-6"></v-divider>
					
					<v-btn class="mr-3 mb-3" color="red" @click="$snackbar({content: '红色消息条', color: 'red'})" dark>红色消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="green" @click="$snackbar({content: '绿色消息条', color: 'green'})" dark>绿色消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="blue" @click="$snackbar({content: '蓝色消息条', color: 'blue'})" dark>蓝色消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="yellow" @click="$snackbar({content: '黄色消息条', color: 'yellow'})" light>黄色消息条</v-btn>
					<br/>
					<v-btn color="blue-grey" class="mr-3 mb-3" @click="$snackbar({content: '{ top:true }', top: true})" dark>顶部消息条</v-btn>
					<v-btn color="blue-grey" class="mr-3 mb-3" @click="$snackbar({content: '{ top: true, right: true }', top: true, right: true})" dark>右上角消息条</v-btn>
					<v-btn color="blue-grey" class="mr-3 mb-3" @click="$snackbar({content: '{ left: true }', left: true})" dark>左下角消息条</v-btn>
					<v-btn color="blue-grey" class="mr-3 mb-3" @click="$snackbar({content: '{ centered: true }', centered: true})" dark>中央消息条</v-btn>
					<br/>
					<v-btn color="blue-grey" class="mr-3 mb-3" @click="$snackbar({content: '{ vertical: true }', vertical: true})" dark>内容堆叠消息条</v-btn>
					<v-btn color="blue-grey" class="mr-3 mb-3" @click="$snackbar({content: '{ light: true }', light: true})" dark>浅色主题消息条</v-btn>
					<v-btn color="blue-grey" class="mr-3 mb-3" @click="$snackbar({content: '{ multiLine: true }', multiLine: true})" dark>提升最低高度的消息条</v-btn>
					<br/>
					<v-btn class="mr-3 mb-3" color="brown" @click="$snackbar({content: 'this.$snackbar({ hideActions: true })', hideActions: true})" dark>无操作消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="brown" @click="$snackbar({content: 'this.$snackbar({ iconClose: true })', iconClose: true})" dark>图标关闭消息条</v-btn>

					<h5 class="text-h5 my-4">薄边框消息条</h5>
					light：
					<v-btn class="mr-3 mb-3" color="red" @click="$snackbar({content: '红色消息条', color: 'red', outlined: true})" dark>红色消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="green" @click="$snackbar({content: '绿色消息条', color: 'green', outlined: true})" dark>绿色消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="blue" @click="$snackbar({content: '蓝色消息条', color: 'blue', outlined: true})" dark>蓝色消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="yellow" @click="$snackbar({content: '黄色消息条', color: 'yellow', outlined: true})" light>黄色消息条</v-btn>
					<br/>
					dark：
					<v-btn class="mr-3 mb-3" color="red" @click="$snackbar({content: '红色消息条', color: 'red', outlined: true, dark: true})" dark>红色消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="green" @click="$snackbar({content: '绿色消息条', color: 'green', outlined: true, dark: true})" dark>绿色消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="blue" @click="$snackbar({content: '蓝色消息条', color: 'blue', outlined: true, dark: true})" dark>蓝色消息条</v-btn>
					<v-btn class="mr-3 mb-3" color="yellow" @click="$snackbar({content: '黄色消息条', color: 'yellow', outlined: true, dark: true})" light>黄色消息条</v-btn>
					<br/>
					<h5 class="text-h5 my-4">消息条动画类型<br/>
						<span class="text-subtitle-1 text--secondary">默认 transition="snack-transition"</span>
					</h5>
					<v-btn class="mr-3 mb-3" color="brown" @click="$snackbar({content: `transition='fade-transition'`, transition: 'fade-transition'})" dark>fade transition</v-btn>
					<v-btn class="mr-3 mb-3" color="brown" @click="$snackbar({content: `transition='slide-y-transition'`, transition: 'slide-y-transition'})" dark>slide y transition</v-btn>
					<v-btn class="mr-3 mb-3" color="brown" @click="$snackbar({content: `transition='slide-y-reverse-transition'`, transition: 'slide-y-reverse-transition'})" dark>slide y reverse transition</v-btn>
					<v-btn class="mr-3 mb-3" color="brown" @click="$snackbar({content: `transition='fab-transition'`, transition: 'fab-transition'})" dark>fab transition</v-btn>
					<v-btn class="mr-3 mb-3" color="brown" @click="$snackbar({content: `transition='scale-transition'`, transition: 'scale-transition'})" dark>scale transition</v-btn>
					<v-btn class="mr-3 mb-3" color="brown" @click="$snackbar({content: `transition='slide-x-transition'`, left: true, transition: 'slide-x-transition'})" dark>slide x transition</v-btn>
					<v-btn class="mr-3 mb-3" color="brown" @click="$snackbar({content: `transition='slide-x-reverse-transition'`, right: true, transition: 'slide-x-reverse-transition'})" dark>slide x reverse transition</v-btn>

                    <h5 class="text-h5 mt-10 mb-5">安装</h5>

                    <v-alert class="pl-8" border="left" color="grey" style="font-family: none;" colored-border text>
                        npm<span class="orange--text mx-3">i</span>v-snackbar
                    </v-alert>

                    <v-alert class="pl-8" border="left" color="grey" style="font-family: none;" colored-border text>
                        <span class="text--disabled">// main.js</span><br/>
                        import<span class="orange--text mx-3">Vue</span>from<span class="red--text mx-3">'vue'</span><br/>
                        import<span class="orange--text mx-3">snackbar</span>from<span class="red--text mx-3">'vuetify-snackbars'</span><br/><br/>
                        Vue.<span class="orange--text">use</span>(<span class="red--text">snackbar</span>)
                    </v-alert>

                    <h5 class="text-h5 mt-10 mb-5">使用</h5>
                    你可以只是写一堆文字说明，超级方便，像这样 <v-icon>mdi-arrow-down</v-icon>
                    <v-alert class="mt-2 pl-8" border="left" color="grey" style="font-family: none;" colored-border text>
                        this.<span class="orange--text">$snackbar</span>( '这是一段消息文本，默认所有风格' )
                    </v-alert>
                    或者你需要定义风格 <v-icon>mdi-arrow-down</v-icon>
                    <v-alert class="mt-2 pl-8" border="left" color="grey" style="font-family: none;" colored-border text>
                        this.<span class="orange--text">$snackbar</span>({
                            <div class="ml-8">
                                <span class="red--text mr-3">content:</span> '这是一个自定义风格消息条',<br/>
                                <span class="red--text mr-3">top:</span> true,<br/>
                                <span class="red--text mr-3">iconClose:</span> true,<br/>
                                <span class="red--text mr-3">transition:</span> 'fade-transition'<br/>
                            </div>
                        })
                    </v-alert>

                    <h5 class="text-h5 mt-10 mb-5">属性 & 方法</h5>
                    <v-data-table
                        class="mb-10"
                        :headers="header"
                        :items="items"
                        hide-default-footer
                        disable-pagination
                        disable-sort
                    >
                        <template v-slot:item.desc="{ item }">
                            <span v-html="item.desc"></span>
                        </template>
                    </v-data-table>
                    <v-data-table
                        :headers="funheader"
                        :items="cols"
                        hide-default-footer
                        disable-pagination
                        disable-sort
                    ></v-data-table>
				</v-sheet>
			</v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            header: [
                { text: '属性', value: 'name' },
                { text: '类型', value: 'type' },
                { text: '默认值', value: 'default', width: '18%' },
                { text: '描述', value: 'desc', width: '50%' },
            ],
            items: [
                { name: 'bottom', type: 'Boolean', default: false, desc: '将消息条向底部对齐' },
                { name: 'color', type: 'String', default: '#333333', desc: '消息条颜色' },
                { name: 'centered', type: 'Boolean', default: false, desc: '在屏幕中央放置消息条' },
                { name: 'top', type: 'Boolean', default: false, desc: '将消息条向顶部对齐' },
                { name: 'dark', type: 'Boolean', default: false, desc: '将暗色主题变量应用到消息条' },
                { name: 'hideActions', type: 'Boolean', default: false, desc: '无操作的消息条' },
                { name: 'iconClose', type: 'Boolean', default: false, desc: '将关闭操作换成图标' },
                { name: 'left', type: 'Boolean', default: false, desc: '将消息条向左边对齐' },
                { name: 'light', type: 'Boolean', default: false, desc: '将亮色主题变量应用到消息条' },
                { name: 'multiLine', type: 'Boolean', default: false, desc: '使消息条具有更大的最低高度' },
                { name: 'outlined', type: 'Boolean', default: false, desc: '移除阴影和背景颜色并添加薄边框' },
                { name: 'right', type: 'Boolean', default: false, desc: '将消息条向右边对齐' },
                { name: 'transition', type: 'String', default: 'v-snack-transition', desc: '设置消息条过渡动画，可以是 <a href="https://v2.vuetifyjs.com/zh-Hans/styles/transitions/" target="_blank">built in transitions</a> 或者是自己自定义的' },
                { name: 'timeout', type: 'Number', default: 5000, desc: '等待 Snackbars 自动隐藏的时间。使用 0 来保持永久开启' },
                { name: 'vertical', type: 'Boolean', default: false, desc: '将消息条内容堆叠在操作（按钮）之上' },
            ],
            funheader: [
                { text: '方法', value: 'name' },
                { text: '描述', value: 'desc' },
                { text: '返回值', value: 'return' },
            ],
            cols: [
                { name: 'this.$snackqueue()', desc: '获取当前消息条的队列数量', return: '队列数量' },
                { name: 'this.$snackBarCloseAll()', desc: '清空所有的消息条', return: '无' },
            ]
        }
    }
};
</script>
