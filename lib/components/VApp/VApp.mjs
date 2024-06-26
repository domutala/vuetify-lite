import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
// Styles
// -- css import remove --

// Composables
import { makeComponentProps } from "../../composables/component.mjs";
import { createLayout, makeLayoutProps } from "../../composables/layout.mjs";
import { useRtl } from "../../composables/locale.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs"; // Utilities
import { Suspense } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs";
export const makeVAppProps = propsFactory({
  ...makeComponentProps(),
  ...makeLayoutProps({
    fullHeight: true
  }),
  ...makeThemeProps()
}, 'VApp');
export const VApp = genericComponent()({
  name: 'VApp',
  props: makeVAppProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      rtlClasses
    } = useRtl();
    useRender(() => _createVNode("div", {
      "ref": layoutRef,
      "class": ['v-application', theme.themeClasses.value, layoutClasses.value, rtlClasses.value, props.class],
      "style": [props.style]
    }, [_createVNode("div", {
      "class": "v-application__wrap"
    }, [_createVNode(Suspense, null, {
      default: () => [_createVNode(_Fragment, null, [slots.default?.()])]
    })])]));
    return {
      getLayoutItem,
      items,
      theme
    };
  }
});
//# sourceMappingURL=VApp.mjs.map