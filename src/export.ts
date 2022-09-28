import TestComponent from '@/components/TestComponent.vue';
import testStyle from '@/style.css'
const components = [TestComponent];
// 注册组件
const install = function (App: any, options: any) {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};
export { install, testStyle, TestComponent }

// export {testStyle,TestComponent}