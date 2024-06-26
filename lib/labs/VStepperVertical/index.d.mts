import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, JSXComponent, PropType } from 'vue';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const breakpoints: readonly ["sm", "md", "lg", "xl", "xxl"];
type Breakpoint = typeof breakpoints[number];
type DisplayBreakpoint = 'xs' | Breakpoint;

type StepperItem = string | Record<string, any>;
type StepperItemSlot = {
    canEdit: boolean;
    hasError: boolean;
    hasCompleted: boolean;
    title?: string | number;
    subtitle?: string | number;
    step: any;
};
type ValidationRule = () => string | boolean;

type VStepperSlot = {
    prev: () => void;
    next: () => void;
};

declare const VStepperVertical: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: boolean | null;
        readonly: boolean;
        variant: NonNullable<"default" | "inset" | "accordion" | "popout">;
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
        focusable: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        class?: any;
        title?: string | undefined;
        text?: string | undefined;
        value?: any;
        theme?: string | undefined;
        color?: string | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        max?: number | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        completeIcon?: string | undefined;
        editIcon?: string | undefined;
        errorIcon?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: VStepperSlot & {
                step: unknown;
            }) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | ((arg: VStepperSlot & {
            step: unknown;
        }) => vue.VNodeChild);
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: VStepperSlot & {
                step: unknown;
            }) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VStepperSlot & {
            step: unknown;
        }) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (val: any) => boolean;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: boolean | null;
        readonly: boolean;
        variant: NonNullable<"default" | "inset" | "accordion" | "popout">;
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
        focusable: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        class?: any;
        title?: string | undefined;
        text?: string | undefined;
        value?: any;
        theme?: string | undefined;
        color?: string | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        max?: number | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        completeIcon?: string | undefined;
        editIcon?: string | undefined;
        errorIcon?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: VStepperSlot & {
                step: unknown;
            }) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | ((arg: VStepperSlot & {
            step: unknown;
        }) => vue.VNodeChild);
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: VStepperSlot & {
                step: unknown;
            }) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VStepperSlot & {
            step: unknown;
        }) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    }, {
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: boolean | null;
        readonly: boolean;
        modelValue: any;
        rounded: string | number | boolean;
        variant: NonNullable<"default" | "inset" | "accordion" | "popout">;
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
        focusable: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        [x: `header-item.${string}`]: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        [x: `item.${string}`]: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: VStepperSlot & {
            step: unknown;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: boolean | null;
        readonly: boolean;
        variant: NonNullable<"default" | "inset" | "accordion" | "popout">;
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
        focusable: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        class?: any;
        title?: string | undefined;
        text?: string | undefined;
        value?: any;
        theme?: string | undefined;
        color?: string | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        max?: number | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        completeIcon?: string | undefined;
        editIcon?: string | undefined;
        errorIcon?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: VStepperSlot & {
                step: unknown;
            }) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | ((arg: VStepperSlot & {
            step: unknown;
        }) => vue.VNodeChild);
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: VStepperSlot & {
                step: unknown;
            }) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VStepperSlot & {
            step: unknown;
        }) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: boolean | null;
        readonly: boolean;
        modelValue: any;
        rounded: string | number | boolean;
        variant: NonNullable<"default" | "inset" | "accordion" | "popout">;
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
        focusable: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    flat: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mobile: boolean | null;
    readonly: boolean;
    variant: NonNullable<"default" | "inset" | "accordion" | "popout">;
    items: readonly StepperItem[];
    mandatory: NonNullable<boolean | "force">;
    multiple: boolean;
    tile: boolean;
    eager: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    itemTitle: string;
    itemValue: string;
    hideActions: boolean;
    focusable: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
} & {
    class?: any;
    title?: string | undefined;
    text?: string | undefined;
    value?: any;
    theme?: string | undefined;
    color?: string | undefined;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    modelValue?: any;
    rounded?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    max?: number | undefined;
    selectedClass?: string | undefined;
    bgColor?: string | undefined;
    completeIcon?: string | undefined;
    editIcon?: string | undefined;
    errorIcon?: string | undefined;
} & {
    $children?: vue.VNodeChild | {
        [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        actions?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        default?: ((arg: VStepperSlot & {
            step: unknown;
        }) => vue.VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        prev?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        next?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } | ((arg: VStepperSlot & {
        step: unknown;
    }) => vue.VNodeChild);
    'v-slots'?: {
        [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        actions?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        default?: false | ((arg: VStepperSlot & {
            step: unknown;
        }) => vue.VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        prev?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        next?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: VStepperSlot & {
        step: unknown;
    }) => vue.VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => boolean;
}, string, {
    flat: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mobile: boolean | null;
    readonly: boolean;
    modelValue: any;
    rounded: string | number | boolean;
    variant: NonNullable<"default" | "inset" | "accordion" | "popout">;
    items: readonly StepperItem[];
    mandatory: NonNullable<boolean | "force">;
    multiple: boolean;
    tile: boolean;
    eager: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    itemTitle: string;
    itemValue: string;
    hideActions: boolean;
    focusable: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
}, {}, string, vue.SlotsType<Partial<{
    [x: `header-item.${string}`]: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `item.${string}`]: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: VStepperSlot & {
        step: unknown;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    flat: BooleanConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    title: StringConstructor;
    text: StringConstructor;
    value: null;
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: Omit<{
        type: vue.PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<"default" | "inset" | "accordion" | "popout">>;
        default: NonNullable<"default" | "inset" | "accordion" | "popout">;
    };
    mandatory: {
        type: vue.PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    multiple: BooleanConstructor;
    tile: BooleanConstructor;
    eager: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    max: NumberConstructor;
    selectedClass: StringConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: vue.PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    collapseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    expandIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    mobile: {
        type: vue.PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: vue.PropType<number | DisplayBreakpoint>;
    altLabels: BooleanConstructor;
    completeIcon: StringConstructor;
    editIcon: StringConstructor;
    editable: BooleanConstructor;
    errorIcon: StringConstructor;
    items: {
        type: vue.PropType<readonly StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    nonLinear: BooleanConstructor;
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    flat: BooleanConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    title: StringConstructor;
    text: StringConstructor;
    value: null;
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: Omit<{
        type: vue.PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<"default" | "inset" | "accordion" | "popout">>;
        default: NonNullable<"default" | "inset" | "accordion" | "popout">;
    };
    mandatory: {
        type: vue.PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    multiple: BooleanConstructor;
    tile: BooleanConstructor;
    eager: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    max: NumberConstructor;
    selectedClass: StringConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: vue.PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    collapseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    expandIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    mobile: {
        type: vue.PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: vue.PropType<number | DisplayBreakpoint>;
    altLabels: BooleanConstructor;
    completeIcon: StringConstructor;
    editIcon: StringConstructor;
    editable: BooleanConstructor;
    errorIcon: StringConstructor;
    items: {
        type: vue.PropType<readonly StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    nonLinear: BooleanConstructor;
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VStepperVertical = InstanceType<typeof VStepperVertical>;

declare const VStepperVerticalItem: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        error: boolean;
        disabled: boolean;
        tag: string;
        complete: boolean;
        static: boolean;
        readonly: boolean;
        rules: readonly ValidationRule[];
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        hideActions: boolean;
        focusable: boolean;
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    } & {
        class?: any;
        title?: string | undefined;
        text?: string | undefined;
        value?: any;
        color?: string | undefined;
        icon?: string | undefined;
        rounded?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
            default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            text?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            prev?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            actions?: ((arg: StepperItemSlot & {
                next: () => void;
                prev: () => void;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            text?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: StepperItemSlot & {
                next: () => void;
                prev: () => void;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: StepperItemSlot & {
            next: () => void;
            prev: () => void;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:finish"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:next': () => true;
        'click:prev': () => true;
        'click:finish': () => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        error: boolean;
        disabled: boolean;
        tag: string;
        complete: boolean;
        static: boolean;
        readonly: boolean;
        rules: readonly ValidationRule[];
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        hideActions: boolean;
        focusable: boolean;
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    } & {
        class?: any;
        title?: string | undefined;
        text?: string | undefined;
        value?: any;
        color?: string | undefined;
        icon?: string | undefined;
        rounded?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
            default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            text?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            prev?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            actions?: ((arg: StepperItemSlot & {
                next: () => void;
                prev: () => void;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            text?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: StepperItemSlot & {
                next: () => void;
                prev: () => void;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: StepperItemSlot & {
            next: () => void;
            prev: () => void;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:finish"?: (() => any) | undefined;
    }, {
        style: vue.StyleValue;
        error: boolean;
        disabled: boolean;
        tag: string;
        complete: boolean;
        static: boolean;
        readonly: boolean;
        rules: readonly ValidationRule[];
        rounded: string | number | boolean;
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        hideActions: boolean;
        focusable: boolean;
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    }, true, {}, vue.SlotsType<Partial<{
        default: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        text: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: StepperItemSlot & {
            next: () => void;
            prev: () => void;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: vue.StyleValue;
        error: boolean;
        disabled: boolean;
        tag: string;
        complete: boolean;
        static: boolean;
        readonly: boolean;
        rules: readonly ValidationRule[];
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        hideActions: boolean;
        focusable: boolean;
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    } & {
        class?: any;
        title?: string | undefined;
        text?: string | undefined;
        value?: any;
        color?: string | undefined;
        icon?: string | undefined;
        rounded?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
            default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            text?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            prev?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            actions?: ((arg: StepperItemSlot & {
                next: () => void;
                prev: () => void;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            text?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: StepperItemSlot & {
                next: () => void;
                prev: () => void;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: StepperItemSlot & {
            next: () => void;
            prev: () => void;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:finish"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        error: boolean;
        disabled: boolean;
        tag: string;
        complete: boolean;
        static: boolean;
        readonly: boolean;
        rules: readonly ValidationRule[];
        rounded: string | number | boolean;
        tile: boolean;
        eager: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        hideActions: boolean;
        focusable: boolean;
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    error: boolean;
    disabled: boolean;
    tag: string;
    complete: boolean;
    static: boolean;
    readonly: boolean;
    rules: readonly ValidationRule[];
    tile: boolean;
    eager: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: NonNullable<IconValue>;
    expandIcon: NonNullable<IconValue>;
    hideActions: boolean;
    focusable: boolean;
    completeIcon: string;
    editable: boolean;
    editIcon: string;
    errorIcon: string;
} & {
    class?: any;
    title?: string | undefined;
    text?: string | undefined;
    value?: any;
    color?: string | undefined;
    icon?: string | undefined;
    rounded?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    selectedClass?: string | undefined;
    bgColor?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
        default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        text?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        prev?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        next?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        actions?: ((arg: StepperItemSlot & {
            next: () => void;
            prev: () => void;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        text?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        prev?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        next?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        actions?: false | ((arg: StepperItemSlot & {
            next: () => void;
            prev: () => void;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:text"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: StepperItemSlot & {
        next: () => void;
        prev: () => void;
    }) => vue.VNodeChild) | undefined;
} & {
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
    "onClick:finish"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:next': () => true;
    'click:prev': () => true;
    'click:finish': () => true;
}, string, {
    style: vue.StyleValue;
    error: boolean;
    disabled: boolean;
    tag: string;
    complete: boolean;
    static: boolean;
    readonly: boolean;
    rules: readonly ValidationRule[];
    rounded: string | number | boolean;
    tile: boolean;
    eager: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: NonNullable<IconValue>;
    expandIcon: NonNullable<IconValue>;
    hideActions: boolean;
    focusable: boolean;
    completeIcon: string;
    editable: boolean;
    editIcon: string;
    errorIcon: string;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    text: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: StepperItemSlot & {
        next: () => void;
        prev: () => void;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    title: StringConstructor;
    text: StringConstructor;
    value: null;
    color: StringConstructor;
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    static: BooleanConstructor;
    readonly: BooleanConstructor;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    eager: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    selectedClass: StringConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: vue.PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    collapseIcon: Omit<{
        type: vue.PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    expandIcon: Omit<{
        type: vue.PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    focusable: BooleanConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: StringConstructor;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    hideActions: BooleanConstructor;
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    title: StringConstructor;
    text: StringConstructor;
    value: null;
    color: StringConstructor;
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    static: BooleanConstructor;
    readonly: BooleanConstructor;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    eager: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    selectedClass: StringConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: vue.PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    collapseIcon: Omit<{
        type: vue.PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    expandIcon: Omit<{
        type: vue.PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    focusable: BooleanConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: StringConstructor;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: StringConstructor;
        default: string;
    };
    icon: StringConstructor;
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    hideActions: BooleanConstructor;
}>>;
type VStepperVerticalItem = InstanceType<typeof VStepperVerticalItem>;

declare const VStepperVerticalActions: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    } & {
        color?: string | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prev?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prev"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:prev': () => true;
        'click:next': () => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    } & {
        color?: string | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prev?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prev"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
    }, {
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    }, true, {}, vue.SlotsType<Partial<{
        prev: (arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    } & {
        color?: string | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prev?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prev"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: boolean | "next" | "prev";
    prevText: string;
    nextText: string;
} & {
    color?: string | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        prev?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        next?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        prev?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
        next?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prev"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNodeChild) | undefined;
} & {
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:prev': () => true;
    'click:next': () => true;
}, string, {
    disabled: boolean | "next" | "prev";
    prevText: string;
    nextText: string;
}, {}, string, vue.SlotsType<Partial<{
    prev: (arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: {
            onClick: () => void;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    disabled: {
        type: vue.PropType<boolean | "next" | "prev">;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    disabled: {
        type: vue.PropType<boolean | "next" | "prev">;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VStepperVerticalActions = InstanceType<typeof VStepperVerticalActions>;

export { VStepperVertical, VStepperVerticalActions, VStepperVerticalItem };
