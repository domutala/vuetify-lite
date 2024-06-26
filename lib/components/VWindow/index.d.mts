import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, ComponentInternalInstance, Ref, ComputedRef, JSXComponent, PropType } from 'vue';

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

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface TouchHandlers {
    start?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    end?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    move?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    left?: (wrapper: TouchData) => void;
    right?: (wrapper: TouchData) => void;
    up?: (wrapper: TouchData) => void;
    down?: (wrapper: TouchData) => void;
}
interface TouchData {
    touchstartX: number;
    touchstartY: number;
    touchmoveX: number;
    touchmoveY: number;
    touchendX: number;
    touchendY: number;
    offsetX: number;
    offsetY: number;
}

type VWindowSlots = {
    default: {
        group: GroupProvide;
    };
    additional: {
        group: GroupProvide;
    };
    prev: {
        props: ControlProps;
    };
    next: {
        props: ControlProps;
    };
};
type ControlProps = {
    icon: IconValue;
    class: string;
    onClick: () => void;
    'aria-label': string;
};
declare const VWindow: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: boolean | "force";
        direction: "horizontal" | "vertical";
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        continuous: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        touch?: boolean | TouchHandlers | undefined;
        showArrows?: string | boolean | undefined;
    } & {}, {
        group: GroupProvide;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => boolean;
    }, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "v-slot:additional" | "update:modelValue" | "v-slot:next" | "v-slot:prev">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: boolean | "force";
        direction: "horizontal" | "vertical";
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        continuous: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        touch?: boolean | TouchHandlers | undefined;
        showArrows?: string | boolean | undefined;
    } & {}, {
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: boolean | "force";
        touch: boolean | TouchHandlers;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        continuous: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: (arg: {
            group: GroupProvide;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        additional: (arg: {
            group: GroupProvide;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: {
            props: ControlProps;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: {
            props: ControlProps;
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
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: boolean | "force";
        direction: "horizontal" | "vertical";
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        continuous: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        touch?: boolean | TouchHandlers | undefined;
        showArrows?: string | boolean | undefined;
    } & {}, {
        group: GroupProvide;
    }, {}, {}, {}, {
        reverse: boolean;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mandatory: boolean | "force";
        touch: boolean | TouchHandlers;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        continuous: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: boolean | "force";
    direction: "horizontal" | "vertical";
    selectedClass: string;
    nextIcon: IconValue;
    prevIcon: IconValue;
    continuous: boolean;
} & {
    class?: any;
    theme?: string | undefined;
    touch?: boolean | TouchHandlers | undefined;
    showArrows?: string | boolean | undefined;
} & {}, {
    group: GroupProvide;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => boolean;
}, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "v-slot:additional" | "update:modelValue" | "v-slot:next" | "v-slot:prev">, string, {
    reverse: boolean;
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    mandatory: boolean | "force";
    touch: boolean | TouchHandlers;
    direction: "horizontal" | "vertical";
    selectedClass: string;
    nextIcon: IconValue;
    prevIcon: IconValue;
    continuous: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        group: GroupProvide;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    additional: (arg: {
        group: GroupProvide;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: {
        props: ControlProps;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: {
        props: ControlProps;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>(props: {
    modelValue?: T | undefined;
    'onUpdate:modelValue'?: ((value: T) => void) | undefined;
}, slots: VWindowSlots) => GenericProps<{
    modelValue?: T | undefined;
    'onUpdate:modelValue'?: ((value: T) => void) | undefined;
}, VWindowSlots>) & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: {
        type: PropType<boolean | "force">;
        default: "force";
    };
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: {
        type: PropType<boolean | "force">;
        default: "force";
    };
}>>;
type VWindow = InstanceType<typeof VWindow>;

declare const VWindowItem: {
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
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        groupItem: GroupItemProvide;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'group:selected': (val: {
            value: boolean;
        }) => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
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
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
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
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        groupItem: GroupItemProvide;
    }, {}, {}, {}, {
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
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {
    groupItem: GroupItemProvide;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => true;
}, string, {
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
type VWindowItem = InstanceType<typeof VWindowItem>;

export { VWindow, VWindowItem };
