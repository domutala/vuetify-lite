import { mergeProps as _mergeProps, Fragment as _Fragment, createVNode as _createVNode } from "vue";
// Styles
// -- css import remove --

// Components
import { VBtn } from "../../components/VBtn/index.mjs";
import { VDefaultsProvider } from "../../components/VDefaultsProvider/index.mjs";
import { VDivider } from "../../components/VDivider/index.mjs";
import { makeVTextFieldProps, VTextField } from "../../components/VTextField/VTextField.mjs"; // Composables
import { useForm } from "../../composables/form.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { computed, watchEffect } from 'vue';
import { clamp, genericComponent, getDecimals, omit, propsFactory, useRender } from "../../util/index.mjs"; // Types
const makeVNumberInputProps = propsFactory({
  controlVariant: {
    type: String,
    default: 'default'
  },
  inset: Boolean,
  hideInput: Boolean,
  min: {
    type: Number,
    default: -Infinity
  },
  max: {
    type: Number,
    default: Infinity
  },
  step: {
    type: Number,
    default: 1
  },
  ...omit(makeVTextFieldProps(), ['appendInnerIcon', 'prependInnerIcon'])
}, 'VNumberInput');
export const VNumberInput = genericComponent()({
  name: 'VNumberInput',
  props: {
    ...makeVNumberInputProps()
  },
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const stepDecimals = computed(() => getDecimals(props.step));
    const modelDecimals = computed(() => model.value != null ? getDecimals(model.value) : 0);
    const form = useForm();
    const controlsDisabled = computed(() => props.disabled || props.readonly || form?.isReadonly.value);
    const canIncrease = computed(() => {
      if (controlsDisabled.value) return false;
      if (model.value == null) return true;
      return model.value + props.step <= props.max;
    });
    const canDecrease = computed(() => {
      if (controlsDisabled.value) return false;
      if (model.value == null) return true;
      return model.value - props.step >= props.min;
    });
    watchEffect(() => {
      if (controlsDisabled.value) return;
      if (model.value != null && (model.value < props.min || model.value > props.max)) {
        model.value = clamp(model.value, props.min, props.max);
      }
    });
    const controlVariant = computed(() => {
      return props.hideInput ? 'stacked' : props.controlVariant;
    });
    const incrementSlotProps = computed(() => ({
      click: onClickUp
    }));
    const decrementSlotProps = computed(() => ({
      click: onClickDown
    }));
    function toggleUpDown() {
      let increment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (controlsDisabled.value) return;
      if (model.value == null) {
        model.value = 0;
        return;
      }
      const decimals = Math.max(modelDecimals.value, stepDecimals.value);
      if (increment) {
        if (canIncrease.value) model.value = +(model.value + props.step).toFixed(decimals);
      } else {
        if (canDecrease.value) model.value = +(model.value - props.step).toFixed(decimals);
      }
    }
    function onClickUp(e) {
      e.stopPropagation();
      toggleUpDown();
    }
    function onClickDown(e) {
      e.stopPropagation();
      toggleUpDown(false);
    }
    function onKeydown(e) {
      if (['Enter', 'ArrowLeft', 'ArrowRight', 'Backspace', 'Tab'].includes(e.key) || e.ctrlKey) return;
      if (['ArrowDown'].includes(e.key)) {
        e.preventDefault();
        toggleUpDown(false);
        return;
      }
      if (['ArrowUp'].includes(e.key)) {
        e.preventDefault();
        toggleUpDown();
        return;
      }

      // Only numbers, +, - & . are allowed
      if (!/^[0-9\-+.]+$/.test(e.key)) {
        e.preventDefault();
      }
    }
    function onModelUpdate(v) {
      model.value = v ? +v : undefined;
    }
    function onControlMousedown(e) {
      e.stopPropagation();
    }
    useRender(() => {
      const {
        modelValue: _,
        ...textFieldProps
      } = VTextField.filterProps(props);
      function controlNode() {
        const defaultHeight = controlVariant.value === 'stacked' ? 'auto' : '100%';
        return _createVNode("div", {
          "class": "v-number-input__control"
        }, [!slots.decrement ? _createVNode(VBtn, {
          "disabled": !canDecrease.value,
          "flat": true,
          "key": "decrement-btn",
          "height": defaultHeight,
          "name": "decrement-btn",
          "icon": "$expand",
          "size": "small",
          "tabindex": "-1",
          "onClick": onClickDown,
          "onMousedown": onControlMousedown
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "decrement-defaults",
          "defaults": {
            VBtn: {
              disabled: !canDecrease.value,
              flat: true,
              height: defaultHeight,
              size: 'small',
              icon: '$expand'
            }
          }
        }, {
          default: () => [slots.decrement(decrementSlotProps.value)]
        }), _createVNode(VDivider, {
          "vertical": controlVariant.value !== 'stacked'
        }, null), !slots.increment ? _createVNode(VBtn, {
          "disabled": !canIncrease.value,
          "flat": true,
          "key": "increment-btn",
          "height": defaultHeight,
          "name": "increment-btn",
          "icon": "$collapse",
          "onClick": onClickUp,
          "onMousedown": onControlMousedown,
          "size": "small",
          "tabindex": "-1"
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "increment-defaults",
          "defaults": {
            VBtn: {
              disabled: !canIncrease.value,
              flat: true,
              height: defaultHeight,
              size: 'small',
              icon: '$collapse'
            }
          }
        }, {
          default: () => [slots.increment(incrementSlotProps.value)]
        })]);
      }
      function dividerNode() {
        return !props.hideInput && !props.inset ? _createVNode(VDivider, {
          "vertical": true
        }, null) : undefined;
      }
      const appendInnerControl = controlVariant.value === 'split' ? _createVNode("div", {
        "class": "v-number-input__control"
      }, [_createVNode(VDivider, {
        "vertical": true
      }, null), _createVNode(VBtn, {
        "flat": true,
        "height": "100%",
        "icon": "$plus",
        "tile": true,
        "tabindex": "-1",
        "onClick": onClickUp,
        "onMousedown": onControlMousedown
      }, null)]) : !props.reverse ? _createVNode(_Fragment, null, [dividerNode(), controlNode()]) : undefined;
      const hasAppendInner = slots['append-inner'] || appendInnerControl;
      const prependInnerControl = controlVariant.value === 'split' ? _createVNode("div", {
        "class": "v-number-input__control"
      }, [_createVNode(VBtn, {
        "flat": true,
        "height": "100%",
        "icon": "$minus",
        "tile": true,
        "tabindex": "-1",
        "onClick": onClickDown,
        "onMousedown": onControlMousedown
      }, null), _createVNode(VDivider, {
        "vertical": true
      }, null)]) : props.reverse ? _createVNode(_Fragment, null, [controlNode(), dividerNode()]) : undefined;
      const hasPrependInner = slots['prepend-inner'] || prependInnerControl;
      return _createVNode(VTextField, _mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": onModelUpdate,
        "onKeydown": onKeydown,
        "class": ['v-number-input', {
          'v-number-input--default': controlVariant.value === 'default',
          'v-number-input--hide-input': props.hideInput,
          'v-number-input--inset': props.inset,
          'v-number-input--reverse': props.reverse,
          'v-number-input--split': controlVariant.value === 'split',
          'v-number-input--stacked': controlVariant.value === 'stacked'
        }, props.class]
      }, textFieldProps, {
        "style": props.style,
        "inputmode": "decimal"
      }), {
        ...slots,
        'append-inner': hasAppendInner ? function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _createVNode(_Fragment, null, [slots['append-inner']?.(...args), appendInnerControl]);
        } : undefined,
        'prepend-inner': hasPrependInner ? function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _createVNode(_Fragment, null, [prependInnerControl, slots['prepend-inner']?.(...args)]);
        } : undefined
      });
    });
  }
});
//# sourceMappingURL=VNumberInput.mjs.map