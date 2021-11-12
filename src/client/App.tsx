import {
  buttonDark, cardDark, createTheme,
  darkTheme,
  dateZhCN,
  GlobalTheme,
  NButton, NCard, NConfigProvider,
  NGlobalStyle, NSpace, useOsTheme,
  zhCN
} from 'naive-ui'
import { defineComponent, ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const osTheme = useOsTheme()
    const darkThemeConf = createTheme([darkTheme.common, buttonDark, cardDark])
    const theme = ref<GlobalTheme | null>(
      osTheme.value === 'dark' ? darkThemeConf : null
    )

    const a = ref({
      a: {
        b: 1,
      },
    })

    /** 切换主题颜色 */
    const handleSwitchTheme = (type?: 'dart' | 'os') => {
      switch (type) {
        case 'dart': {
          theme.value = darkThemeConf
          break
        }
        case 'os': {
          theme.value = osTheme.value === 'dark' ? darkThemeConf : null
          break
        }
        default: {
          theme.value = null
        }
      }
    }

    return () => {
      return (
        <NConfigProvider
          theme={theme.value}
          locale={zhCN}
          dateLocale={dateZhCN}
        >
          {!import.meta.env.SSR && <NGlobalStyle />}
          <NCard title="切换主题色">
            <NSpace>
              <NButton type="primary" onClick={() => handleSwitchTheme('dart')}>
                深色
              </NButton>
              <NButton type="primary" onClick={() => handleSwitchTheme()}>
                亮色
              </NButton>
              <NButton type="primary" onClick={() => handleSwitchTheme('dart')}>
                系统色
              </NButton>
            </NSpace>
          </NCard>
          <NCard title="计数">
            <div>{a.value.a.b}</div>
            <NButton type="primary" onClick={() => a.value.a.b++}>
              + 1
            </NButton>
          </NCard>
          <NCard title="跳转页面">
            <NButton type="primary" onClick={() => router.push('/about')}>
              go about
            </NButton>
          </NCard>
          <RouterView />
        </NConfigProvider>
      )
    }
  },
})
