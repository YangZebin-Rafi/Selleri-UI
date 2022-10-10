import S_Button from '@/components/SButton.vue';
import testStyle from '@/style.css'
const components = [S_Button];
// 注册组件
const install = function (App: any, options: any) {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};
export { install, testStyle, S_Button }

// export {testStyle,TestComponent}