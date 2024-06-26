import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, JSXComponent, PropType } from 'vue';
// @ts-ignore
import * as vue_router from 'vue-router';

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

declare function deepEqual(a: any, b: any): boolean;
type SelectItemKey<T = Record<string, any>> = boolean | null | undefined | string | readonly (string | number)[] | ((item: T, fallback?: any) => any);

type Density = null | 'default' | 'comfortable' | 'compact';

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type ListItemSlot = {
    isActive: boolean;
    isSelected: boolean;
    isIndeterminate: boolean;
    select: (value: boolean) => void;
};
type ListItemTitleSlot = {
    title?: string | number;
};
type ListItemSubtitleSlot = {
    subtitle?: string | number;
};
type VListItemSlots = {
    prepend: ListItemSlot;
    append: ListItemSlot;
    default: ListItemSlot;
    title: ListItemTitleSlot;
    subtitle: ListItemSubtitleSlot;
};

/**
 * - match without highlight
 * - single match (index), length already known
 * - single match (start, end)
 * - multiple matches (start, end), probably shouldn't overlap
 */
type FilterMatch = boolean | number | [number, number] | [number, number][];
type FilterFunction = (value: string, query: string, item?: InternalItem) => FilterMatch;
type FilterKeyFunctions = Record<string, FilterFunction>;
type FilterKeys = string | string[];
type FilterMode = 'some' | 'every' | 'union' | 'intersection';
interface InternalItem<T = any> {
    value: any;
    raw: T;
}

type ActiveStrategyFn = (data: {
    id: unknown;
    value: boolean;
    activated: Set<unknown>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown>;
type ActiveStrategyTransformInFn = (v: unknown | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
type ActiveStrategyTransformOutFn = (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
type ActiveStrategy = {
    activate: ActiveStrategyFn;
    in: ActiveStrategyTransformInFn;
    out: ActiveStrategyTransformOutFn;
};

type OpenStrategyFn = (data: {
    id: unknown;
    value: boolean;
    opened: Set<unknown>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown>;
type OpenSelectStrategyFn = (data: {
    id: unknown;
    value: boolean;
    opened: Set<unknown>;
    selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown> | null;
type OpenStrategy = {
    open: OpenStrategyFn;
    select: OpenSelectStrategyFn;
};

type SelectStrategyFn = (data: {
    id: unknown;
    value: boolean;
    selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Map<unknown, 'on' | 'off' | 'indeterminate'>;
type SelectStrategyTransformInFn = (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, 'on' | 'off' | 'indeterminate'>;
type SelectStrategyTransformOutFn = (v: Map<unknown, 'on' | 'off' | 'indeterminate'>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
type SelectStrategy = {
    select: SelectStrategyFn;
    in: SelectStrategyTransformInFn;
    out: SelectStrategyTransformOutFn;
};

type ActiveStrategyProp = 'single-leaf' | 'leaf' | 'independent' | 'single-independent' | ActiveStrategy | ((mandatory: boolean) => ActiveStrategy);
type SelectStrategyProp = 'single-leaf' | 'leaf' | 'independent' | 'single-independent' | 'classic' | SelectStrategy | ((mandatory: boolean) => SelectStrategy);
type OpenStrategyProp = 'single' | 'multiple' | 'list' | OpenStrategy;

interface ListItem<T = any> extends InternalItem<T> {
    title: string;
    props: {
        [key: string]: any;
        title: string;
        value: any;
    };
    children?: ListItem<T>[];
}

interface InternalListItem<T = any> extends ListItem<T> {
    type?: 'item' | 'subheader' | 'divider';
}

type VListChildrenSlots<T> = {
    [K in keyof Omit<VListItemSlots, 'default'>]: VListItemSlots[K] & {
        item: T;
    };
} & {
    default: never;
    item: {
        props: InternalListItem['props'];
    };
    divider: {
        props: InternalListItem['props'];
    };
    subheader: {
        props: InternalListItem['props'];
    };
    header: {
        props: InternalListItem['props'];
    };
};

declare const VTreeview: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        valueComparator: typeof deepEqual;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<NonNullable<SelectStrategyProp>>;
        openStrategy: NonNullable<NonNullable<OpenStrategyProp>>;
        collapseIcon: string;
        expandIcon: string;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemTitle: SelectItemKey;
        itemValue: SelectItemKey;
        itemChildren: SelectItemKey;
        itemProps: SelectItemKey;
        itemType: string;
        loadingIcon: string;
        openAll: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        activated?: any;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        selected?: any;
        bgColor?: string | undefined;
        activeClass?: string | undefined;
        opened?: any;
        activeStrategy?: ActiveStrategyProp | undefined;
        'onUpdate:opened'?: (() => void) | undefined;
        activeColor?: string | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        'onClick:open'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        'onClick:select'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
    } & {
        "onUpdate:activated"?: ((val: unknown) => any) | undefined;
        "onUpdate:selected"?: ((val: unknown) => any) | undefined;
        "onUpdate:opened"?: ((val: unknown) => any) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, {
        open: typeof open;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'update:opened': (val: unknown) => boolean;
        'update:activated': (val: unknown) => boolean;
        'update:selected': (val: unknown) => boolean;
        'click:open': (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => boolean;
        'click:select': (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => boolean;
    }, "v-slot:default" | "$children" | "v-slots" | "items" | "v-slot:title" | "v-slot:prepend" | "v-slot:append" | "v-slot:subtitle" | "v-slot:header" | "v-slot:divider" | "v-slot:item" | "v-slot:subheader">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        valueComparator: typeof deepEqual;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<NonNullable<SelectStrategyProp>>;
        openStrategy: NonNullable<NonNullable<OpenStrategyProp>>;
        collapseIcon: string;
        expandIcon: string;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemTitle: SelectItemKey;
        itemValue: SelectItemKey;
        itemChildren: SelectItemKey;
        itemProps: SelectItemKey;
        itemType: string;
        loadingIcon: string;
        openAll: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        activated?: any;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        selected?: any;
        bgColor?: string | undefined;
        activeClass?: string | undefined;
        opened?: any;
        activeStrategy?: ActiveStrategyProp | undefined;
        'onUpdate:opened'?: (() => void) | undefined;
        activeColor?: string | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        'onClick:open'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        'onClick:select'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
    } & {
        "onUpdate:activated"?: ((val: unknown) => any) | undefined;
        "onUpdate:selected"?: ((val: unknown) => any) | undefined;
        "onUpdate:opened"?: ((val: unknown) => any) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, {
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        valueComparator: typeof deepEqual;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<NonNullable<SelectStrategyProp>>;
        openStrategy: NonNullable<NonNullable<OpenStrategyProp>>;
        collapseIcon: string;
        expandIcon: string;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemTitle: SelectItemKey;
        itemValue: SelectItemKey;
        itemChildren: SelectItemKey;
        itemProps: SelectItemKey;
        itemType: string;
        loadingIcon: string;
        openAll: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        title: (arg: ListItemTitleSlot & {
            item: unknown;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        prepend: (arg: ListItemSlot & {
            item: unknown;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: ListItemSlot & {
            item: unknown;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: ListItemSubtitleSlot & {
            item: unknown;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        divider: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        subheader: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        header: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
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
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        valueComparator: typeof deepEqual;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<NonNullable<SelectStrategyProp>>;
        openStrategy: NonNullable<NonNullable<OpenStrategyProp>>;
        collapseIcon: string;
        expandIcon: string;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemTitle: SelectItemKey;
        itemValue: SelectItemKey;
        itemChildren: SelectItemKey;
        itemProps: SelectItemKey;
        itemType: string;
        loadingIcon: string;
        openAll: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        activated?: any;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        selected?: any;
        bgColor?: string | undefined;
        activeClass?: string | undefined;
        opened?: any;
        activeStrategy?: ActiveStrategyProp | undefined;
        'onUpdate:opened'?: (() => void) | undefined;
        activeColor?: string | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        'onClick:open'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        'onClick:select'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
    } & {
        "onUpdate:activated"?: ((val: unknown) => any) | undefined;
        "onUpdate:selected"?: ((val: unknown) => any) | undefined;
        "onUpdate:opened"?: ((val: unknown) => any) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, {
        open: typeof open;
    }, {}, {}, {}, {
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        mandatory: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        valueComparator: typeof deepEqual;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: NonNullable<NonNullable<SelectStrategyProp>>;
        openStrategy: NonNullable<NonNullable<OpenStrategyProp>>;
        collapseIcon: string;
        expandIcon: string;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemTitle: SelectItemKey;
        itemValue: SelectItemKey;
        itemChildren: SelectItemKey;
        itemProps: SelectItemKey;
        itemType: string;
        loadingIcon: string;
        openAll: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    mandatory: boolean;
    tile: boolean;
    density: Density;
    slim: boolean;
    valueComparator: typeof deepEqual;
    activatable: boolean;
    selectable: boolean;
    selectStrategy: NonNullable<NonNullable<SelectStrategyProp>>;
    openStrategy: NonNullable<NonNullable<OpenStrategyProp>>;
    collapseIcon: string;
    expandIcon: string;
    lines: false | "one" | "two" | "three";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    filterKeys: NonNullable<FilterKeys>;
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: SelectItemKey;
    itemProps: SelectItemKey;
    itemType: string;
    loadingIcon: string;
    openAll: boolean;
} & {
    search?: string | undefined;
    class?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    color?: string | undefined;
    activated?: any;
    border?: string | number | boolean | undefined;
    rounded?: string | number | boolean | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    elevation?: string | number | undefined;
    baseColor?: string | undefined;
    selected?: any;
    bgColor?: string | undefined;
    activeClass?: string | undefined;
    opened?: any;
    activeStrategy?: ActiveStrategyProp | undefined;
    'onUpdate:opened'?: (() => void) | undefined;
    activeColor?: string | undefined;
    customFilter?: FilterFunction | undefined;
    customKeyFilter?: FilterKeyFunctions | undefined;
    'onClick:open'?: ((args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void) | undefined;
    'onClick:select'?: ((args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void) | undefined;
    loadChildren?: ((item: unknown) => Promise<void>) | undefined;
} & {
    "onUpdate:activated"?: ((val: unknown) => any) | undefined;
    "onUpdate:selected"?: ((val: unknown) => any) | undefined;
    "onUpdate:opened"?: ((val: unknown) => any) | undefined;
    "onClick:open"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
    "onClick:select"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
}, {
    open: typeof open;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:opened': (val: unknown) => boolean;
    'update:activated': (val: unknown) => boolean;
    'update:selected': (val: unknown) => boolean;
    'click:open': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => boolean;
    'click:select': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => boolean;
}, "v-slot:default" | "$children" | "v-slots" | "items" | "v-slot:title" | "v-slot:prepend" | "v-slot:append" | "v-slot:subtitle" | "v-slot:header" | "v-slot:divider" | "v-slot:item" | "v-slot:subheader">, string, {
    style: vue.StyleValue;
    disabled: boolean;
    tag: string;
    rounded: string | number | boolean;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    mandatory: boolean;
    tile: boolean;
    density: Density;
    slim: boolean;
    valueComparator: typeof deepEqual;
    activatable: boolean;
    selectable: boolean;
    selectStrategy: NonNullable<NonNullable<SelectStrategyProp>>;
    openStrategy: NonNullable<NonNullable<OpenStrategyProp>>;
    collapseIcon: string;
    expandIcon: string;
    lines: false | "one" | "two" | "three";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    filterKeys: NonNullable<FilterKeys>;
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: SelectItemKey;
    itemProps: SelectItemKey;
    itemType: string;
    loadingIcon: string;
    openAll: boolean;
}, {}, string, vue.SlotsType<Partial<{
    title: (arg: ListItemTitleSlot & {
        item: unknown;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: ListItemSlot & {
        item: unknown;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: ListItemSlot & {
        item: unknown;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: ListItemSubtitleSlot & {
        item: unknown;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    divider: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subheader: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>(props: {
    items?: T[] | undefined;
}, slots: VListChildrenSlots<T>) => GenericProps<{
    items?: T[] | undefined;
}, VListChildrenSlots<T>>) & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    activated: null;
    tag: {
        type: StringConstructor;
        default: string;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    mandatory: BooleanConstructor;
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
    baseColor: StringConstructor;
    selected: null;
    bgColor: StringConstructor;
    slim: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    activeClass: StringConstructor;
    opened: null;
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: vue.PropType<ActiveStrategyProp>;
    selectStrategy: Omit<{
        type: vue.PropType<NonNullable<SelectStrategyProp>>;
        default: NonNullable<SelectStrategyProp>;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<NonNullable<SelectStrategyProp>>>;
        default: NonNullable<NonNullable<SelectStrategyProp>>;
    };
    openStrategy: Omit<{
        type: vue.PropType<NonNullable<OpenStrategyProp>>;
        default: NonNullable<OpenStrategyProp>;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<NonNullable<OpenStrategyProp>>>;
        default: NonNullable<NonNullable<OpenStrategyProp>>;
    };
    'onUpdate:opened': vue.PropType<() => void>;
    activeColor: StringConstructor;
    collapseIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    expandIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    lines: {
        type: vue.PropType<false | "one" | "two" | "three">;
        default: string;
    };
    returnObject: BooleanConstructor;
    itemTitle: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    'onClick:open': vue.PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    'onClick:select': vue.PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    itemType: {
        type: StringConstructor;
        default: string;
    };
    loadChildren: vue.PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: {
        type: vue.PropType<NonNullable<FilterKeys>>;
        default: NonNullable<FilterKeys>;
    };
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    openAll: BooleanConstructor;
    search: StringConstructor;
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    activated: null;
    tag: {
        type: StringConstructor;
        default: string;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    mandatory: BooleanConstructor;
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
    baseColor: StringConstructor;
    selected: null;
    bgColor: StringConstructor;
    slim: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    activeClass: StringConstructor;
    opened: null;
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: vue.PropType<ActiveStrategyProp>;
    selectStrategy: Omit<{
        type: vue.PropType<NonNullable<SelectStrategyProp>>;
        default: NonNullable<SelectStrategyProp>;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<NonNullable<SelectStrategyProp>>>;
        default: NonNullable<NonNullable<SelectStrategyProp>>;
    };
    openStrategy: Omit<{
        type: vue.PropType<NonNullable<OpenStrategyProp>>;
        default: NonNullable<OpenStrategyProp>;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<NonNullable<OpenStrategyProp>>>;
        default: NonNullable<NonNullable<OpenStrategyProp>>;
    };
    'onUpdate:opened': vue.PropType<() => void>;
    activeColor: StringConstructor;
    collapseIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    expandIcon: {
        type: vue.PropType<string>;
        default: string;
    };
    lines: {
        type: vue.PropType<false | "one" | "two" | "three">;
        default: string;
    };
    returnObject: BooleanConstructor;
    itemTitle: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    'onClick:open': vue.PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    'onClick:select': vue.PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    itemType: {
        type: StringConstructor;
        default: string;
    };
    loadChildren: vue.PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: {
        type: vue.PropType<NonNullable<FilterKeys>>;
        default: NonNullable<FilterKeys>;
    };
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    openAll: BooleanConstructor;
    search: StringConstructor;
}>>;
type VTreeview = InstanceType<typeof VTreeview>;

declare const VTreeviewItem: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        replace: boolean;
        style: vue.StyleValue;
        nav: boolean;
        disabled: boolean;
        tag: string;
        loading: boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        link?: boolean | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        class?: any;
        title?: string | number | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        active?: boolean | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        activeColor?: string | undefined;
        subtitle?: string | number | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        toggleIcon?: IconValue | undefined;
    } & {
        $children?: vue.VNodeChild | {
            prepend?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } | ((arg: ListItemSlot) => vue.VNodeChild);
        'v-slots'?: {
            prepend?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        replace: boolean;
        style: vue.StyleValue;
        nav: boolean;
        disabled: boolean;
        tag: string;
        loading: boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        link?: boolean | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        class?: any;
        title?: string | number | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        active?: boolean | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        activeColor?: string | undefined;
        subtitle?: string | number | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        toggleIcon?: IconValue | undefined;
    } & {
        $children?: vue.VNodeChild | {
            prepend?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } | ((arg: ListItemSlot) => vue.VNodeChild);
        'v-slots'?: {
            prepend?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
    }, {
        replace: boolean;
        link: boolean;
        style: vue.StyleValue;
        nav: boolean;
        active: boolean;
        disabled: boolean;
        tag: string;
        loading: boolean;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    }, true, {}, vue.SlotsType<Partial<{
        prepend: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: ListItemTitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: ListItemSubtitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        replace: boolean;
        style: vue.StyleValue;
        nav: boolean;
        disabled: boolean;
        tag: string;
        loading: boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        link?: boolean | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        class?: any;
        title?: string | number | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        active?: boolean | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        activeColor?: string | undefined;
        subtitle?: string | number | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        toggleIcon?: IconValue | undefined;
    } & {
        $children?: vue.VNodeChild | {
            prepend?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            default?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            title?: ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } | ((arg: ListItemSlot) => vue.VNodeChild);
        'v-slots'?: {
            prepend?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            default?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
            title?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        replace: boolean;
        link: boolean;
        style: vue.StyleValue;
        nav: boolean;
        active: boolean;
        disabled: boolean;
        tag: string;
        loading: boolean;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    replace: boolean;
    style: vue.StyleValue;
    nav: boolean;
    disabled: boolean;
    tag: string;
    loading: boolean;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    exact: boolean;
    tile: boolean;
    density: Density;
    slim: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
} & {
    link?: boolean | undefined;
    onClick?: ((args_0: MouseEvent) => void) | undefined;
    class?: any;
    title?: string | number | undefined;
    value?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    active?: boolean | undefined;
    theme?: string | undefined;
    href?: string | undefined;
    color?: string | undefined;
    to?: vue_router.RouteLocationRaw | undefined;
    border?: string | number | boolean | undefined;
    rounded?: string | number | boolean | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    elevation?: string | number | undefined;
    baseColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    activeClass?: string | undefined;
    appendAvatar?: string | undefined;
    prependAvatar?: string | undefined;
    activeColor?: string | undefined;
    subtitle?: string | number | undefined;
    lines?: false | "one" | "two" | "three" | undefined;
    toggleIcon?: IconValue | undefined;
} & {
    $children?: vue.VNodeChild | {
        prepend?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        append?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        default?: ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        title?: ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
        subtitle?: ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
    } | ((arg: ListItemSlot) => vue.VNodeChild);
    'v-slots'?: {
        prepend?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        append?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        default?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
        title?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
        subtitle?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: ListItemSlot) => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: ListItemTitleSlot) => vue.VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    replace: boolean;
    link: boolean;
    style: vue.StyleValue;
    nav: boolean;
    active: boolean;
    disabled: boolean;
    tag: string;
    loading: boolean;
    rounded: string | number | boolean;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    exact: boolean;
    tile: boolean;
    density: Density;
    slim: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
}, {}, string, vue.SlotsType<Partial<{
    prepend: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: ListItemSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: ListItemTitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: ListItemSubtitleSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
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
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: vue.PropType<false | "one" | "two" | "three">;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    ripple: {
        type: vue.PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    slim: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    subtitle: (StringConstructor | NumberConstructor)[];
    title: (StringConstructor | NumberConstructor)[];
    value: null;
    onClick: vue.PropType<(args_0: MouseEvent) => void>;
    onClickOnce: vue.PropType<(args_0: MouseEvent) => void>;
    loading: BooleanConstructor;
    toggleIcon: vue.PropType<IconValue>;
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
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
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
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: vue.PropType<false | "one" | "two" | "three">;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    ripple: {
        type: vue.PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    slim: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    subtitle: (StringConstructor | NumberConstructor)[];
    title: (StringConstructor | NumberConstructor)[];
    value: null;
    onClick: vue.PropType<(args_0: MouseEvent) => void>;
    onClickOnce: vue.PropType<(args_0: MouseEvent) => void>;
    loading: BooleanConstructor;
    toggleIcon: vue.PropType<IconValue>;
}>>;
type VTreeviewItem = InstanceType<typeof VTreeviewItem>;

declare const VTreeviewGroup: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        tag: string;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        fluid: boolean;
    } & {
        class?: any;
        title?: string | undefined;
        value?: any;
        color?: string | undefined;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        tag: string;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        fluid: boolean;
    } & {
        class?: any;
        title?: string | undefined;
        value?: any;
        color?: string | undefined;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    }, {
        style: vue.StyleValue;
        tag: string;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        fluid: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        activator: (arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
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
        tag: string;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        fluid: boolean;
    } & {
        class?: any;
        title?: string | undefined;
        value?: any;
        color?: string | undefined;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        tag: string;
        collapseIcon: NonNullable<IconValue>;
        expandIcon: NonNullable<IconValue>;
        fluid: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
    collapseIcon: NonNullable<IconValue>;
    expandIcon: NonNullable<IconValue>;
    fluid: boolean;
} & {
    class?: any;
    title?: string | undefined;
    value?: any;
    color?: string | undefined;
    baseColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    activeColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        activator?: ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        activator?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:activator"?: false | ((arg: {
        isOpen: boolean;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
    collapseIcon: NonNullable<IconValue>;
    expandIcon: NonNullable<IconValue>;
    fluid: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    activator: (arg: {
        isOpen: boolean;
        props: Record<string, unknown>;
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
    value: null;
    color: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    baseColor: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    appendIcon: vue.PropType<IconValue>;
    activeColor: StringConstructor;
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
    fluid: BooleanConstructor;
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    title: StringConstructor;
    value: null;
    color: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    baseColor: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    appendIcon: vue.PropType<IconValue>;
    activeColor: StringConstructor;
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
    fluid: BooleanConstructor;
}>>;
type VTreeviewGroup = InstanceType<typeof VTreeviewGroup>;

export { VTreeview, VTreeviewGroup, VTreeviewItem };
