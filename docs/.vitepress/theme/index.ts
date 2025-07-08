import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'

// 커스텀 테마 엔트리 파일 (docs/.vitepress/theme/index.ts)
// DefaultTheme을 확장해 기본 레이아웃과 컴포넌트를 그대로 사용하면서
// style.css에 정의된 커스텀 CSS가 전역으로 적용되도록 설정합니다.
export default {
  ...DefaultTheme,
  // Layout을 커스터마이징할 경우, h(DefaultTheme.Layout)를 사용해 감쌉니다.
  Layout: () => h(DefaultTheme.Layout),
  // 앱 초기화 훅: 전역 컴포넌트, 프로퍼티, 라이프사이클 훅 등을 등록할 수 있습니다.
  enhanceApp({ app, router, siteData }) {
    // 예시: 전역 컴포넌트 등록
    // import MyComponent from './components/MyComponent.vue'
    // app.component('MyComponent', MyComponent)

    // 예시: 전역 프로퍼티 제공
    // app.provide('siteData', siteData)

    // 예시: 전역 디렉티브 등록
    // app.directive('focus', {
    //   mounted(el) { el.focus() }
    // })
  }
}
