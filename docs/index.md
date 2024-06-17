---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Bszx-hooks"
  text: Vue3封装的常用hooks
  # tagline: Vue3中的Hooks是通过setup函数来使用的，setup函数是Vue3组件中的一个新的生命周期函数，它在组件实例被创建之前调用，并且接收两个参数：props和context。在setup函数中，我们可以定义和返回组件中需要使用的响应式数据、方法、计算属性等，而这些都可以通过Hooks来实现。
  actions:
    - theme: brand
      text: 示例
      link: /state/useTitle

features:
  - title: 逻辑复用
    details: 当多个组件需要共享相同的逻辑时，我们可以将这些逻辑封装成一个Hook，然后在需要的组件中导入并使用它。这样可以避免代码重复，提高代码的复用性。
  - title: 逻辑拆分
    details: 对于复杂的组件，我们可以使用Hooks将组件的逻辑拆分成多个独立的函数，每个函数负责处理一部分逻辑。这样可以使组件的代码更加清晰、易于维护。
  - title: 副作用管理
    details: Hooks中的函数可以访问组件的响应式数据，并且可以在组件的生命周期中执行副作用操作（如定时器、事件监听等）。通过使用Hooks，我们可以更好地管理这些副作用操作，确保它们在组件卸载时得到正确的清理。
---

