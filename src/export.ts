import s_button from 'packages/SButton.vue';
import testStyle from '@/style.css'

const components = [s_button];
// 注册组件
const install = function (App: any, options: any) {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};
export { install, testStyle, s_button }

// export {testStyle,TestComponent}