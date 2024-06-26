import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, JSXComponent, PropType } from 'vue';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

type Density = null | 'default' | 'comfortable' | 'compact';

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type ItemSlot = {
    isActive: boolean;
    key: string | number;
    page: string;
    props: Record<string, any>;
};
type ControlSlot = {
    icon: IconValue;
    onClick: (e: Event) => void;
    disabled: boolean;
    'aria-label': string;
    'aria-disabled': boolean;
};
declare const VPagination: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        length: string | number;
        style: vue.StyleValue;
        size: string | number;
        start: string | number;
        disabled: boolean;
        tag: string;
        ariaLabel: string;
        modelValue: number;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        ellipsis: string;
        tile: boolean;
        density: Density;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        color?: string | undefined;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        activeColor?: string | undefined;
        totalVisible?: string | number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            item?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            first?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            prev?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            last?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            item?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            first?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            last?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:first"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:last"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onNext?: ((value: number) => any) | undefined;
        onPrev?: ((value: number) => any) | undefined;
        onFirst?: ((value: number) => any) | undefined;
        onLast?: ((value: number) => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (value: number) => true;
        first: (value: number) => true;
        prev: (value: number) => true;
        next: (value: number) => true;
        last: (value: number) => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        length: string | number;
        style: vue.StyleValue;
        size: string | number;
        start: string | number;
        disabled: boolean;
        tag: string;
        ariaLabel: string;
        modelValue: number;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        ellipsis: string;
        tile: boolean;
        density: Density;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        color?: string | undefined;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        activeColor?: string | undefined;
        totalVisible?: string | number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            item?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            first?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            prev?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            last?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            item?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            first?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            last?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:first"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:last"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onNext?: ((value: number) => any) | undefined;
        onPrev?: ((value: number) => any) | undefined;
        onFirst?: ((value: number) => any) | undefined;
        onLast?: ((value: number) => any) | undefined;
    }, {
        length: string | number;
        style: vue.StyleValue;
        size: string | number;
        start: string | number;
        disabled: boolean;
        tag: string;
        ariaLabel: string;
        modelValue: number;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        ellipsis: string;
        tile: boolean;
        density: Density;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        item: (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        first: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        last: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        length: string | number;
        style: vue.StyleValue;
        size: string | number;
        start: string | number;
        disabled: boolean;
        tag: string;
        ariaLabel: string;
        modelValue: number;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        ellipsis: string;
        tile: boolean;
        density: Density;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        color?: string | undefined;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        activeColor?: string | undefined;
        totalVisible?: string | number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            item?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            first?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            prev?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            next?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            last?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            item?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
            first?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            prev?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            next?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            last?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:first"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:last"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onNext?: ((value: number) => any) | undefined;
        onPrev?: ((value: number) => any) | undefined;
        onFirst?: ((value: number) => any) | undefined;
        onLast?: ((value: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        length: string | number;
        style: vue.StyleValue;
        size: string | number;
        start: string | number;
        disabled: boolean;
        tag: string;
        ariaLabel: string;
        modelValue: number;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        ellipsis: string;
        tile: boolean;
        density: Density;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    length: string | number;
    style: vue.StyleValue;
    size: string | number;
    start: string | number;
    disabled: boolean;
    tag: string;
    ariaLabel: string;
    modelValue: number;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    ellipsis: string;
    tile: boolean;
    density: Density;
    nextIcon: IconValue;
    prevIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    pageAriaLabel: string;
    currentPageAriaLabel: string;
    firstAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    lastAriaLabel: string;
    showFirstLastPage: boolean;
} & {
    class?: any;
    theme?: string | undefined;
    color?: string | undefined;
    border?: string | number | boolean | undefined;
    rounded?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    activeColor?: string | undefined;
    totalVisible?: string | number | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        item?: ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        first?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        prev?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        next?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        last?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        item?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
        first?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        prev?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        next?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        last?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:item"?: false | ((arg: ItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:first"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    "v-slot:last"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onNext?: ((value: number) => any) | undefined;
    onPrev?: ((value: number) => any) | undefined;
    onFirst?: ((value: number) => any) | undefined;
    onLast?: ((value: number) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: number) => true;
    first: (value: number) => true;
    prev: (value: number) => true;
    next: (value: number) => true;
    last: (value: number) => true;
}, string, {
    length: string | number;
    style: vue.StyleValue;
    size: string | number;
    start: string | number;
    disabled: boolean;
    tag: string;
    ariaLabel: string;
    modelValue: number;
    rounded: string | number | boolean;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    ellipsis: string;
    tile: boolean;
    density: Density;
    nextIcon: IconValue;
    prevIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    pageAriaLabel: string;
    currentPageAriaLabel: string;
    firstAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    lastAriaLabel: string;
    showFirstLastPage: boolean;
}, {}, string, vue.SlotsType<Partial<{
    item: (arg: ItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    first: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    last: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    activeColor: StringConstructor;
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => number;
    };
    disabled: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (StringConstructor | NumberConstructor)[];
    firstIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}, vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    activeColor: StringConstructor;
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => number;
    };
    disabled: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (StringConstructor | NumberConstructor)[];
    firstIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}>>;
type VPagination = InstanceType<typeof VPagination>;

export { VPagination };
