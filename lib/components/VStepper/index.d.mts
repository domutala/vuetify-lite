import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, PropType } from 'vue';

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

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
declare const VStepperItem: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        error: boolean;
        disabled: boolean;
        complete: boolean;
        rules: readonly ValidationRule[];
        ripple: boolean | {
            class: string;
        } | undefined;
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    } & {
        title?: string | undefined;
        value?: any;
        color?: string | undefined;
        icon?: string | undefined;
        selectedClass?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
            default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'group:selected': (val: {
            value: boolean;
        }) => boolean;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        error: boolean;
        disabled: boolean;
        complete: boolean;
        rules: readonly ValidationRule[];
        ripple: boolean | {
            class: string;
        } | undefined;
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    } & {
        title?: string | undefined;
        value?: any;
        color?: string | undefined;
        icon?: string | undefined;
        selectedClass?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
            default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        error: boolean;
        disabled: boolean;
        complete: boolean;
        rules: readonly ValidationRule[];
        ripple: boolean | {
            class: string;
        } | undefined;
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
        title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        error: boolean;
        disabled: boolean;
        complete: boolean;
        rules: readonly ValidationRule[];
        ripple: boolean | {
            class: string;
        } | undefined;
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    } & {
        title?: string | undefined;
        value?: any;
        color?: string | undefined;
        icon?: string | undefined;
        selectedClass?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
            default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {}, {}, {}, {}, {
        error: boolean;
        disabled: boolean;
        complete: boolean;
        rules: readonly ValidationRule[];
        ripple: boolean | {
            class: string;
        } | undefined;
        completeIcon: string;
        editable: boolean;
        editIcon: string;
        errorIcon: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    error: boolean;
    disabled: boolean;
    complete: boolean;
    rules: readonly ValidationRule[];
    ripple: boolean | {
        class: string;
    } | undefined;
    completeIcon: string;
    editable: boolean;
    editIcon: string;
    errorIcon: string;
} & {
    title?: string | undefined;
    value?: any;
    color?: string | undefined;
    icon?: string | undefined;
    selectedClass?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: vue.VNodeChild | ((arg: StepperItemSlot) => vue.VNodeChild) | {
        default?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => boolean;
}, string, {
    error: boolean;
    disabled: boolean;
    complete: boolean;
    rules: readonly ValidationRule[];
    ripple: boolean | {
        class: string;
    } | undefined;
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
    title: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
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
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}, vue.ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
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
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}>>;
type VStepperItem = InstanceType<typeof VStepperItem>;

type VStepperSlot = {
    prev: () => void;
    next: () => void;
};
declare const VStepper: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: boolean | null;
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        selectedClass: string;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        max?: number | undefined;
        bgColor?: string | undefined;
        completeIcon?: string | undefined;
        editIcon?: string | undefined;
        errorIcon?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: (() => vue.VNodeChild) | undefined;
            next?: (() => vue.VNodeChild) | undefined;
        } | ((arg: VStepperSlot) => vue.VNodeChild);
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: false | (() => vue.VNodeChild) | undefined;
            next?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {
        prev: () => void;
        next: () => void;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (v: unknown) => boolean;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: boolean | null;
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        selectedClass: string;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        max?: number | undefined;
        bgColor?: string | undefined;
        completeIcon?: string | undefined;
        editIcon?: string | undefined;
        errorIcon?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: (() => vue.VNodeChild) | undefined;
            next?: (() => vue.VNodeChild) | undefined;
        } | ((arg: VStepperSlot) => vue.VNodeChild);
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: false | (() => vue.VNodeChild) | undefined;
            next?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: boolean | null;
        modelValue: any;
        rounded: string | number | boolean;
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        selectedClass: string;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
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
        actions: (arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        header: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header-item': (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        prev: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        next: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        selectedClass: string;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        max?: number | undefined;
        bgColor?: string | undefined;
        completeIcon?: string | undefined;
        editIcon?: string | undefined;
        errorIcon?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: (() => vue.VNodeChild) | undefined;
            next?: (() => vue.VNodeChild) | undefined;
        } | ((arg: VStepperSlot) => vue.VNodeChild);
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
            header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
            prev?: false | (() => vue.VNodeChild) | undefined;
            next?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {
        prev: () => void;
        next: () => void;
    }, {}, {}, {}, {
        flat: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: boolean | null;
        modelValue: any;
        rounded: string | number | boolean;
        items: readonly StepperItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        tile: boolean;
        selectedClass: string;
        itemTitle: string;
        itemValue: string;
        hideActions: boolean;
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
    items: readonly StepperItem[];
    mandatory: NonNullable<boolean | "force">;
    multiple: boolean;
    tile: boolean;
    selectedClass: string;
    itemTitle: string;
    itemValue: string;
    hideActions: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
} & {
    class?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    color?: string | undefined;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    border?: string | number | boolean | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    modelValue?: any;
    rounded?: string | number | boolean | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    elevation?: string | number | undefined;
    location?: Anchor | undefined;
    max?: number | undefined;
    bgColor?: string | undefined;
    completeIcon?: string | undefined;
    editIcon?: string | undefined;
    errorIcon?: string | undefined;
} & {
    $children?: vue.VNodeChild | {
        [x: `header-item.${string}`]: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        actions?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        default?: ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        header?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        'header-item'?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        item?: ((arg: StepperItem) => vue.VNodeChild) | undefined;
        prev?: (() => vue.VNodeChild) | undefined;
        next?: (() => vue.VNodeChild) | undefined;
    } | ((arg: VStepperSlot) => vue.VNodeChild);
    'v-slots'?: {
        [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        actions?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        default?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
        header?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        'header-item'?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
        item?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
        prev?: false | (() => vue.VNodeChild) | undefined;
        next?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: VStepperSlot) => vue.VNodeChild) | undefined;
    "v-slot:header"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:header-item"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: StepperItem) => vue.VNodeChild) | undefined;
    "v-slot:prev"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {
    prev: () => void;
    next: () => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => boolean;
}, string, {
    flat: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mobile: boolean | null;
    modelValue: any;
    rounded: string | number | boolean;
    items: readonly StepperItem[];
    mandatory: NonNullable<boolean | "force">;
    multiple: boolean;
    tile: boolean;
    selectedClass: string;
    itemTitle: string;
    itemValue: string;
    hideActions: boolean;
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
    actions: (arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: VStepperSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: StepperItem) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header-item': (arg: StepperItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    prev: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    color: StringConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    completeIcon: StringConstructor;
    editIcon: StringConstructor;
    editable: BooleanConstructor;
    errorIcon: StringConstructor;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
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
    flat: BooleanConstructor;
}, vue.ExtractPropTypes<{
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<Anchor>;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    color: StringConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<NonNullable<boolean | "force">>;
        default: NonNullable<boolean | "force">;
    };
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    completeIcon: StringConstructor;
    editIcon: StringConstructor;
    editable: BooleanConstructor;
    errorIcon: StringConstructor;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
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
    flat: BooleanConstructor;
}>>;
type VStepper = InstanceType<typeof VStepper>;

declare const VStepperActions: {
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
        type: PropType<boolean | "next" | "prev">;
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
        type: PropType<boolean | "next" | "prev">;
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
type VStepperActions = InstanceType<typeof VStepperActions>;

declare const VStepperHeader: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
        } | (() => vue.VNodeChild);
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
        } | (() => vue.VNodeChild);
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        style: vue.StyleValue;
        tag: string;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        tag: string;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
        } | (() => vue.VNodeChild);
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, {
        style: vue.StyleValue;
        tag: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | {
        default?: (() => vue.VNodeChild) | undefined;
    } | (() => vue.VNodeChild);
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VStepperHeader = InstanceType<typeof VStepperHeader>;

declare const VStepperWindow: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        direction: "horizontal" | "vertical";
        selectedClass: string;
    } & {
        class?: any;
        theme?: string | undefined;
        modelValue?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
        } | (() => vue.VNodeChild);
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (v: unknown) => boolean;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        direction: "horizontal" | "vertical";
        selectedClass: string;
    } & {
        class?: any;
        theme?: string | undefined;
        modelValue?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
        } | (() => vue.VNodeChild);
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        direction: "horizontal" | "vertical";
        selectedClass: string;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        direction: "horizontal" | "vertical";
        selectedClass: string;
    } & {
        class?: any;
        theme?: string | undefined;
        modelValue?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
        } | (() => vue.VNodeChild);
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {}, {}, {}, {}, {
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        direction: "horizontal" | "vertical";
        selectedClass: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    direction: "horizontal" | "vertical";
    selectedClass: string;
} & {
    class?: any;
    theme?: string | undefined;
    modelValue?: any;
} & {
    $children?: vue.VNodeChild | {
        default?: (() => vue.VNodeChild) | undefined;
    } | (() => vue.VNodeChild);
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => boolean;
}, string, {
    reverse: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    direction: "horizontal" | "vertical";
    selectedClass: string;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    reverse: BooleanConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    theme: StringConstructor;
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: null;
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
    };
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    reverse: BooleanConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    theme: StringConstructor;
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: null;
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
    };
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VStepperWindow = InstanceType<typeof VStepperWindow>;

declare const VStepperWindowItem: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        disabled: boolean;
        eager: boolean;
    } & {
        class?: any;
        value?: any;
        transition?: string | boolean | undefined;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
        } | (() => vue.VNodeChild);
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        disabled: boolean;
        eager: boolean;
    } & {
        class?: any;
        value?: any;
        transition?: string | boolean | undefined;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
        } | (() => vue.VNodeChild);
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        style: vue.StyleValue;
        disabled: boolean;
        transition: string | boolean;
        eager: boolean;
        reverseTransition: string | boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        disabled: boolean;
        eager: boolean;
    } & {
        class?: any;
        value?: any;
        transition?: string | boolean | undefined;
        selectedClass?: string | undefined;
        reverseTransition?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
        } | (() => vue.VNodeChild);
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        disabled: boolean;
        transition: string | boolean;
        eager: boolean;
        reverseTransition: string | boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    disabled: boolean;
    eager: boolean;
} & {
    class?: any;
    value?: any;
    transition?: string | boolean | undefined;
    selectedClass?: string | undefined;
    reverseTransition?: string | boolean | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: (() => vue.VNodeChild) | undefined;
    } | (() => vue.VNodeChild);
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    disabled: boolean;
    transition: string | boolean;
    eager: boolean;
    reverseTransition: string | boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}, vue.ExtractPropTypes<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}>>;
type VStepperWindowItem = InstanceType<typeof VStepperWindowItem>;

export { VStepper, VStepperActions, VStepperHeader, VStepperItem, VStepperWindow, VStepperWindowItem };
