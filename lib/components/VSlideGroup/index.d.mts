import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, JSXComponent, PropType, ComponentInternalInstance, Ref, ComputedRef, InjectionKey, UnwrapRef } from 'vue';

type SlotsToProps<U extends RawSlots, T = MakeInternalSlots<U>> = {
    $children?: (VNodeChild | (T extends {
        default: infer V;
    } ? V : {}) | {
        [K in keyof T]?: T[K];
    });
    'v-slots'?: {
        [K in keyof T]?: T[K] | false;
    };
} & {
    [K in keyof T as `v-slot:${K & string}`]?: T[K] | false;
};
type RawSlots = Record<string, unknown>;
type Slot<T> = [T] extends [never] ? () => VNodeChild : (arg: T) => VNodeChild;
type VueSlot<T> = [T] extends [never] ? () => VNode[] : (arg: T) => VNode[];
type MakeInternalSlots<T extends RawSlots> = {
    [K in keyof T]: Slot<T[K]>;
};
type MakeSlots<T extends RawSlots> = {
    [K in keyof T]: VueSlot<T[K]>;
};
type GenericProps<Props, Slots extends Record<string, unknown>> = {
    $props: Props & SlotsToProps<Slots>;
    $slots: MakeSlots<Slots>;
};
interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

declare const breakpoints: readonly ["sm", "md", "lg", "xl", "xxl"];
type Breakpoint = typeof breakpoints[number];
type DisplayBreakpoint = 'xs' | Breakpoint;

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface GroupItem {
    id: number;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
    useIndexAsValue?: boolean;
}
interface GroupProvide {
    register: (item: GroupItem, cmp: ComponentInternalInstance) => void;
    unregister: (id: number) => void;
    select: (id: number, value: boolean) => void;
    selected: Ref<Readonly<number[]>>;
    isSelected: (id: number) => boolean;
    prev: () => void;
    next: () => void;
    selectedClass: Ref<string | undefined>;
    items: ComputedRef<{
        id: number;
        value: unknown;
        disabled: boolean | undefined;
    }[]>;
    disabled: Ref<boolean | undefined>;
    getItemIndex: (value: unknown) => number;
}
interface GroupItemProvide {
    id: number;
    isSelected: Ref<boolean>;
    isFirst: Ref<boolean>;
    isLast: Ref<boolean>;
    toggle: () => void;
    select: (value: boolean) => void;
    selectedClass: Ref<(string | undefined)[] | false>;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
    group: GroupProvide;
}

interface SlideGroupSlot {
    next: GroupProvide['next'];
    prev: GroupProvide['prev'];
    select: GroupProvide['select'];
    isSelected: GroupProvide['isSelected'];
}
type VSlideGroupSlots = {
    default: SlideGroupSlot;
    prev: SlideGroupSlot;
    next: SlideGroupSlot;
};
declare const VSlideGroup: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        symbol: any;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: NonNullable<boolean | null> | null;
        multiple: boolean;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
    } & {
        class?: any;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        mandatory?: boolean | "force" | undefined;
        max?: number | undefined;
        showArrows?: string | boolean | undefined;
    } & {}, {
        selected: vue.Ref<readonly number[]>;
        scrollTo: (location: 'prev' | 'next') => void;
        scrollOffset: vue.ShallowRef<number>;
        focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => boolean;
    }, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "update:modelValue" | "v-slot:next" | "v-slot:prev">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        symbol: any;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: NonNullable<boolean | null> | null;
        multiple: boolean;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
    } & {
        class?: any;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        mandatory?: boolean | "force" | undefined;
        max?: number | undefined;
        showArrows?: string | boolean | undefined;
    } & {}, {
        symbol: any;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: NonNullable<boolean | null> | null;
        multiple: boolean;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
    }, true, {}, vue.SlotsType<Partial<{
        default: (arg: SlideGroupSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: SlideGroupSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: SlideGroupSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        symbol: any;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: NonNullable<boolean | null> | null;
        multiple: boolean;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
    } & {
        class?: any;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        mandatory?: boolean | "force" | undefined;
        max?: number | undefined;
        showArrows?: string | boolean | undefined;
    } & {}, {
        selected: vue.Ref<readonly number[]>;
        scrollTo: (location: 'prev' | 'next') => void;
        scrollOffset: vue.ShallowRef<number>;
        focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
    }, {}, {}, {}, {
        symbol: any;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: NonNullable<boolean | null> | null;
        multiple: boolean;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    symbol: any;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mobile: NonNullable<boolean | null> | null;
    multiple: boolean;
    direction: "horizontal" | "vertical";
    selectedClass: string;
    centerActive: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
} & {
    class?: any;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    mandatory?: boolean | "force" | undefined;
    max?: number | undefined;
    showArrows?: string | boolean | undefined;
} & {}, {
    selected: vue.Ref<readonly number[]>;
    scrollTo: (location: 'prev' | 'next') => void;
    scrollOffset: vue.ShallowRef<number>;
    focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => boolean;
}, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "update:modelValue" | "v-slot:next" | "v-slot:prev">, string, {
    symbol: any;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mobile: NonNullable<boolean | null> | null;
    multiple: boolean;
    direction: "horizontal" | "vertical";
    selectedClass: string;
    centerActive: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: SlideGroupSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: SlideGroupSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: SlideGroupSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>(props: {
    modelValue?: T | undefined;
    'onUpdate:modelValue'?: ((value: T) => void) | undefined;
}, slots: VSlideGroupSlots) => GenericProps<{
    modelValue?: T | undefined;
    'onUpdate:modelValue'?: ((value: T) => void) | undefined;
}, VSlideGroupSlots>) & FilterPropsOptions<{
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<NonNullable<boolean | null> | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    centerActive: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: InjectionKey<GroupProvide>;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
}, vue.ExtractPropTypes<{
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<NonNullable<boolean | null> | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    centerActive: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: InjectionKey<GroupProvide>;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
}>>;
type VSlideGroup = InstanceType<typeof VSlideGroup>;

declare const VSlideGroupItem: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        disabled: boolean;
    } & {
        value?: any;
        selectedClass?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
                select: GroupItemProvide['select'];
                toggle: GroupItemProvide['toggle'];
                selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
            select: GroupItemProvide['select'];
            toggle: GroupItemProvide['toggle'];
            selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
                select: GroupItemProvide['select'];
                toggle: GroupItemProvide['toggle'];
                selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
            select: GroupItemProvide['select'];
            toggle: GroupItemProvide['toggle'];
            selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'group:selected': (val: {
            value: boolean;
        }) => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        disabled: boolean;
    } & {
        value?: any;
        selectedClass?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
                select: GroupItemProvide['select'];
                toggle: GroupItemProvide['toggle'];
                selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
            select: GroupItemProvide['select'];
            toggle: GroupItemProvide['toggle'];
            selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
                select: GroupItemProvide['select'];
                toggle: GroupItemProvide['toggle'];
                selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
            select: GroupItemProvide['select'];
            toggle: GroupItemProvide['toggle'];
            selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        disabled: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: (arg: {
            isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
            select: GroupItemProvide['select'];
            toggle: GroupItemProvide['toggle'];
            selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
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
        disabled: boolean;
    } & {
        value?: any;
        selectedClass?: string | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
                select: GroupItemProvide['select'];
                toggle: GroupItemProvide['toggle'];
                selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
            select: GroupItemProvide['select'];
            toggle: GroupItemProvide['toggle'];
            selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
                select: GroupItemProvide['select'];
                toggle: GroupItemProvide['toggle'];
                selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
            select: GroupItemProvide['select'];
            toggle: GroupItemProvide['toggle'];
            selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, {
        disabled: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: boolean;
} & {
    value?: any;
    selectedClass?: string | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
            select: GroupItemProvide['select'];
            toggle: GroupItemProvide['toggle'];
            selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
        select: GroupItemProvide['select'];
        toggle: GroupItemProvide['toggle'];
        selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
            select: GroupItemProvide['select'];
            toggle: GroupItemProvide['toggle'];
            selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
        select: GroupItemProvide['select'];
        toggle: GroupItemProvide['toggle'];
        selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
    }) => vue.VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => true;
}, string, {
    disabled: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
        select: GroupItemProvide['select'];
        toggle: GroupItemProvide['toggle'];
        selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}, vue.ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}>>;
type VSlideGroupItem = InstanceType<typeof VSlideGroupItem>;

export { VSlideGroup, VSlideGroupItem };
