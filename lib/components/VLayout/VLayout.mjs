import { createVNode as _createVNode, Fragment as _Fragment } from "vue";
// Styles
// -- css import remove --

// Composables
import { makeComponentProps } from "../../composables/component.mjs";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.mjs";
import { createLayout, makeLayoutProps } from "../../composables/layout.mjs"; // Utilities
import { Suspense } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs";
export const makeVLayoutProps = propsFactory({
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLayoutProps()
}, 'VLayout');
export const VLayout = genericComponent()({
  name: 'VLayout',
  props: makeVLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => _createVNode("div", {
      "ref": layoutRef,
      "class": [layoutClasses.value, props.class],
      "style": [dimensionStyles.value, layoutStyles.value, props.style]
    }, [_createVNode(Suspense, null, {
      default: () => [_createVNode(_Fragment, null, [slots.default?.()])]
    })]));
    return {
      getLayoutItem,
      items
    };
  }
});
//# sourceMappingURL=VLayout.mjs.map