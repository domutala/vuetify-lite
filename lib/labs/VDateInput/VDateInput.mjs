import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Components
import { makeVConfirmEditProps, VConfirmEdit } from "../../components/VConfirmEdit/VConfirmEdit.mjs";
import { makeVDatePickerProps, VDatePicker } from "../../components/VDatePicker/VDatePicker.mjs";
import { VMenu } from "../../components/VMenu/VMenu.mjs";
import { makeVTextFieldProps, VTextField } from "../../components/VTextField/VTextField.mjs"; // Composables
import { useDate } from "../../composables/date/index.mjs";
import { makeFocusProps, useFocus } from "../../composables/focus.mjs";
import { useLocale } from "../../composables/locale.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { computed, shallowRef } from 'vue';
import { genericComponent, omit, propsFactory, useRender, wrapInArray } from "../../util/index.mjs"; // Types
export const makeVDateInputProps = propsFactory({
  hideActions: Boolean,
  ...makeFocusProps(),
  ...makeVConfirmEditProps(),
  ...makeVTextFieldProps({
    placeholder: 'mm/dd/yyyy',
    prependIcon: '$calendar'
  }),
  ...omit(makeVDatePickerProps({
    weeksInMonth: 'dynamic',
    hideHeader: true
  }), ['active'])
}, 'VDateInput');
export const VDateInput = genericComponent()({
  name: 'VDateInput',
  props: makeVDateInputProps(),
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const adapter = useDate();
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const model = useProxiedModel(props, 'modelValue', props.multiple ? [] : null);
    const menu = shallowRef(false);
    const display = computed(() => {
      const value = wrapInArray(model.value);
      if (!value.length) return null;
      if (props.multiple === true) {
        return t('$vuetify.datePicker.itemsSelected', value.length);
      }
      if (props.multiple === 'range') {
        const start = value[0];
        const end = value[value.length - 1];
        return adapter.isValid(start) && adapter.isValid(end) ? `${adapter.format(start, 'keyboardDate')} - ${adapter.format(end, 'keyboardDate')}` : '';
      }
      return adapter.isValid(model.value) ? adapter.format(model.value, 'keyboardDate') : '';
    });
    function onKeydown(e) {
      if (e.key !== 'Enter') return;
      if (!menu.value || !isFocused.value) {
        menu.value = true;
        return;
      }
      const target = e.target;
      model.value = adapter.date(target.value);
    }
    function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      menu.value = true;
    }
    function onSave() {
      menu.value = false;
    }
    useRender(() => {
      const confirmEditProps = VConfirmEdit.filterProps(props);
      const datePickerProps = VDatePicker.filterProps(omit(props, ['active']));
      const textFieldProps = VTextField.filterProps(props);
      return _createVNode(VTextField, _mergeProps(textFieldProps, {
        "modelValue": display.value,
        "onKeydown": onKeydown,
        "focused": menu.value || isFocused.value,
        "onFocus": focus,
        "onBlur": blur,
        "onClick:control": onClick,
        "onClick:prepend": onClick
      }), {
        default: () => [_createVNode(VMenu, {
          "modelValue": menu.value,
          "onUpdate:modelValue": $event => menu.value = $event,
          "activator": "parent",
          "min-width": "0",
          "closeOnContentClick": false,
          "openOnClick": false
        }, {
          default: () => [_createVNode(VConfirmEdit, _mergeProps(confirmEditProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "onSave": onSave
          }), {
            default: _ref2 => {
              let {
                actions,
                model: proxyModel
              } = _ref2;
              return _createVNode(VDatePicker, _mergeProps(datePickerProps, {
                "modelValue": props.hideActions ? model.value : proxyModel.value,
                "onUpdate:modelValue": val => {
                  if (!props.hideActions) {
                    proxyModel.value = val;
                  } else {
                    model.value = val;
                    if (!props.multiple) menu.value = false;
                  }
                },
                "onMousedown": e => e.preventDefault()
              }), {
                actions: !props.hideActions ? () => actions : undefined
              });
            }
          })]
        }), slots.default?.()]
      });
    });
  }
});
//# sourceMappingURL=VDateInput.mjs.map