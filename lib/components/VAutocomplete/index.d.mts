import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, ComponentPublicInstance, JSXComponent, PropType, ComputedRef, Ref, EffectScope } from 'vue';

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

declare class Box {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor({ x, y, width, height }: {
        x: number;
        y: number;
        width: number;
        height: number;
    });
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
}

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
type TemplateRef = {
    (target: Element | ComponentPublicInstance | null): void;
    value: HTMLElement | ComponentPublicInstance | null | undefined;
    readonly el: HTMLElement | undefined;
};

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

type VMessageSlot = {
    message: string;
};

type Density = null | 'default' | 'comfortable' | 'compact';

type ValidationResult = string | boolean;
type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface VInputSlot {
    id: ComputedRef<string>;
    messagesId: ComputedRef<string>;
    isDirty: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    isReadonly: ComputedRef<boolean>;
    isPristine: Ref<boolean>;
    isValid: ComputedRef<boolean | null>;
    isValidating: Ref<boolean>;
    reset: () => void;
    resetValidation: () => void;
    validate: () => void;
}
type VInputSlots = {
    default: VInputSlot;
    prepend: VInputSlot;
    append: VInputSlot;
    details: VInputSlot;
    message: VMessageSlot;
};

interface DefaultInputSlot {
    isActive: Ref<boolean>;
    isFocused: Ref<boolean>;
    controlRef: Ref<HTMLElement | undefined>;
    focus: () => void;
    blur: () => void;
}
interface VFieldSlot extends DefaultInputSlot {
    props: Record<string, unknown>;
}
type VFieldSlots = {
    clear: DefaultInputSlot & {
        props: Record<string, any>;
    };
    'prepend-inner': DefaultInputSlot;
    'append-inner': DefaultInputSlot;
    label: DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    };
    loader: LoaderSlotProps;
    default: VFieldSlot;
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

interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    targetEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
type ScrollStrategyFn = (data: ScrollStrategyData, props: StrategyProps$1, scope: EffectScope) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
interface StrategyProps$1 {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFn;
    contained: boolean | undefined;
}
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps$1): void;
declare function repositionScrollStrategy(data: ScrollStrategyData, props: StrategyProps$1, scope: EffectScope): void;

interface LocationStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    target: Ref<HTMLElement | [x: number, y: number] | undefined>;
    isActive: Ref<boolean>;
    isRtl: Ref<boolean>;
}
type LocationStrategyFn = (data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => undefined | {
    updateLocation: (e: Event) => void;
};
declare const locationStrategies: {
    static: typeof staticLocationStrategy;
    connected: typeof connectedLocationStrategy;
};
interface StrategyProps {
    locationStrategy: keyof typeof locationStrategies | LocationStrategyFn;
    location: Anchor;
    origin: Anchor | 'auto' | 'overlap';
    offset?: number | string | number[];
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}
declare function staticLocationStrategy(): void;
declare function connectedLocationStrategy(data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>): {
    updateLocation: () => {
        available: {
            x: number;
            y: number;
        };
        contentBox: Box;
    } | undefined;
};

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

type Primitive = string | number | boolean | symbol;
type Val<T, ReturnObject extends boolean> = [T] extends [Primitive] ? T : (ReturnObject extends true ? T : any);
type Value<T, ReturnObject extends boolean, Multiple extends boolean> = Multiple extends true ? readonly Val<T, ReturnObject>[] : Val<T, ReturnObject> | null;
type ItemType<T> = T extends readonly (infer U)[] ? U : never;
declare const VAutocomplete: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        menu: boolean;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        noDataText: string;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule[];
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        eager: boolean;
        role: string;
        density: Density;
        direction: "horizontal" | "vertical";
        valueComparator: typeof deepEqual;
        clearIcon: IconValue;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemChildren: NonNullable<SelectItemKey>;
        autofocus: boolean;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        closeText: string;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: IconValue;
        openOnClear: boolean;
        clearOnSelect: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        id?: string | undefined;
        label?: string | undefined;
        width?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        name?: string | undefined;
        prefix?: string | undefined;
        loading?: string | boolean | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        prependInnerIcon?: IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        listProps?: (Partial<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        }> & Omit<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        } & {
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
        } & {
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, "style" | "nav" | "disabled" | "tag" | "rounded" | "variant" | "mandatory" | "tile" | "density" | "slim" | "valueComparator" | "activatable" | "selectable" | "selectStrategy" | "openStrategy" | "lines" | "returnObject" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            'onClick:select'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                title?: ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: ListItemTitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
        }) | undefined;
        menuProps?: (Partial<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        }> & Omit<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        } & {
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "style" | "disabled" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim">) | undefined;
        itemColor?: string | undefined;
        autoSelectFirst?: boolean | "exact" | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:menu"?: ((value: boolean) => any) | undefined;
        "onUpdate:search"?: ((value: any) => any) | undefined;
    }, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'update:focused': (focused: boolean) => boolean;
        'update:search': (value: any) => true;
        'update:modelValue': (value: any) => boolean;
        'update:menu': (value: boolean) => true;
    }, "$children" | "v-slots" | "modelValue" | "items" | "multiple" | "v-slot:prepend" | "v-slot:append" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:message" | "v-slot:details" | "returnObject" | "v-slot:item" | "itemTitle" | "itemValue" | "itemProps" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:chip" | "v-slot:selection" | "v-slot:prepend-item" | "v-slot:append-item" | "v-slot:no-data">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        menu: boolean;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        noDataText: string;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule[];
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        eager: boolean;
        role: string;
        density: Density;
        direction: "horizontal" | "vertical";
        valueComparator: typeof deepEqual;
        clearIcon: IconValue;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemChildren: NonNullable<SelectItemKey>;
        autofocus: boolean;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        closeText: string;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: IconValue;
        openOnClear: boolean;
        clearOnSelect: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        id?: string | undefined;
        label?: string | undefined;
        width?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        name?: string | undefined;
        prefix?: string | undefined;
        loading?: string | boolean | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        prependInnerIcon?: IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        listProps?: (Partial<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        }> & Omit<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        } & {
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
        } & {
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, "style" | "nav" | "disabled" | "tag" | "rounded" | "variant" | "mandatory" | "tile" | "density" | "slim" | "valueComparator" | "activatable" | "selectable" | "selectStrategy" | "openStrategy" | "lines" | "returnObject" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            'onClick:select'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                title?: ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: ListItemTitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
        }) | undefined;
        menuProps?: (Partial<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        }> & Omit<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        } & {
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "style" | "disabled" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim">) | undefined;
        itemColor?: string | undefined;
        autoSelectFirst?: boolean | "exact" | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:menu"?: ((value: boolean) => any) | undefined;
        "onUpdate:search"?: ((value: any) => any) | undefined;
    }, {
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        menu: boolean;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        noDataText: string;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule[];
        rounded: string | number | boolean;
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        eager: boolean;
        role: string;
        density: Density;
        direction: "horizontal" | "vertical";
        valueComparator: typeof deepEqual;
        clearIcon: IconValue;
        centerAffix: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemChildren: NonNullable<SelectItemKey>;
        autofocus: boolean;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        closeText: string;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: IconValue;
        openOnClear: boolean;
        clearOnSelect: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        clear: (arg: DefaultInputSlot & {
            props: Record<string, any>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'prepend-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'append-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            item: ListItem<unknown>;
            index: number;
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        chip: (arg: {
            item: ListItem<unknown>;
            index: number;
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        selection: (arg: {
            item: ListItem<unknown>;
            index: number;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'prepend-item': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'append-item': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        flat: boolean;
        style: vue.StyleValue;
        menu: boolean;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        noDataText: string;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule[];
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        eager: boolean;
        role: string;
        density: Density;
        direction: "horizontal" | "vertical";
        valueComparator: typeof deepEqual;
        clearIcon: IconValue;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemChildren: NonNullable<SelectItemKey>;
        autofocus: boolean;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        closeText: string;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: IconValue;
        openOnClear: boolean;
        clearOnSelect: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        id?: string | undefined;
        label?: string | undefined;
        width?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        name?: string | undefined;
        prefix?: string | undefined;
        loading?: string | boolean | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        prependInnerIcon?: IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        listProps?: (Partial<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        }> & Omit<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        } & {
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
        } & {
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, "style" | "nav" | "disabled" | "tag" | "rounded" | "variant" | "mandatory" | "tile" | "density" | "slim" | "valueComparator" | "activatable" | "selectable" | "selectStrategy" | "openStrategy" | "lines" | "returnObject" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            'onClick:select'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                title?: ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: ListItemTitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
        }) | undefined;
        menuProps?: (Partial<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        }> & Omit<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        } & {
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "style" | "disabled" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim">) | undefined;
        itemColor?: string | undefined;
        autoSelectFirst?: boolean | "exact" | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:menu"?: ((value: boolean) => any) | undefined;
        "onUpdate:search"?: ((value: any) => any) | undefined;
    }, any, {}, {}, {}, {
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        menu: boolean;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        noDataText: string;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule[];
        rounded: string | number | boolean;
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        eager: boolean;
        role: string;
        density: Density;
        direction: "horizontal" | "vertical";
        valueComparator: typeof deepEqual;
        clearIcon: IconValue;
        centerAffix: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        filterKeys: NonNullable<FilterKeys>;
        itemChildren: NonNullable<SelectItemKey>;
        autofocus: boolean;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        closeText: string;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: IconValue;
        openOnClear: boolean;
        clearOnSelect: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    flat: boolean;
    style: vue.StyleValue;
    menu: boolean;
    type: string;
    active: boolean;
    error: boolean;
    disabled: boolean;
    messages: string | readonly string[];
    noDataText: string;
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly ValidationRule[];
    variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
    tile: boolean;
    eager: boolean;
    role: string;
    density: Density;
    direction: "horizontal" | "vertical";
    valueComparator: typeof deepEqual;
    clearIcon: IconValue;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    filterKeys: NonNullable<FilterKeys>;
    itemChildren: NonNullable<SelectItemKey>;
    autofocus: boolean;
    clearable: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    chips: boolean;
    closableChips: boolean;
    closeText: string;
    openText: string;
    hideNoData: boolean;
    hideSelected: boolean;
    menuIcon: IconValue;
    openOnClear: boolean;
    clearOnSelect: boolean;
} & {
    search?: string | undefined;
    class?: any;
    id?: string | undefined;
    label?: string | undefined;
    width?: string | number | undefined;
    theme?: string | undefined;
    color?: string | undefined;
    name?: string | undefined;
    prefix?: string | undefined;
    loading?: string | boolean | undefined;
    placeholder?: string | undefined;
    counter?: string | number | boolean | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
    rounded?: string | number | boolean | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    prependInnerIcon?: IconValue | undefined;
    'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
    centerAffix?: boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    customFilter?: FilterFunction | undefined;
    customKeyFilter?: FilterKeyFunctions | undefined;
    suffix?: string | undefined;
    counterValue?: number | ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
    listProps?: (Partial<{
        style: vue.StyleValue;
        nav: boolean;
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
        selectStrategy: NonNullable<SelectStrategyProp>;
        openStrategy: NonNullable<OpenStrategyProp>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
    }> & Omit<{
        style: vue.StyleValue;
        nav: boolean;
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
        selectStrategy: NonNullable<SelectStrategyProp>;
        openStrategy: NonNullable<OpenStrategyProp>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
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
        bgColor?: string | undefined;
        activeClass?: string | undefined;
        activeStrategy?: ActiveStrategyProp | undefined;
        activeColor?: string | undefined;
        collapseIcon?: string | undefined;
        expandIcon?: string | undefined;
        "onUpdate:activated"?: ((value: unknown) => any) | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        nav: boolean;
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
        selectStrategy: NonNullable<SelectStrategyProp>;
        openStrategy: NonNullable<OpenStrategyProp>;
        lines: false | "one" | "two" | "three";
        returnObject: boolean;
        itemType: string;
    } & {
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
        bgColor?: string | undefined;
        activeClass?: string | undefined;
        activeStrategy?: ActiveStrategyProp | undefined;
        activeColor?: string | undefined;
        collapseIcon?: string | undefined;
        expandIcon?: string | undefined;
    } & {
        "onUpdate:activated"?: ((value: unknown) => any) | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, "style" | "nav" | "disabled" | "tag" | "rounded" | "variant" | "mandatory" | "tile" | "density" | "slim" | "valueComparator" | "activatable" | "selectable" | "selectStrategy" | "openStrategy" | "lines" | "returnObject" | "itemType"> & {
        items?: readonly any[] | undefined;
        itemTitle?: SelectItemKey<any>;
        itemValue?: SelectItemKey<any>;
        itemChildren?: SelectItemKey<any>;
        itemProps?: SelectItemKey<any>;
        selected?: unknown;
        'onUpdate:selected'?: ((value: unknown) => void) | undefined;
        'onClick:open'?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        'onClick:select'?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        opened?: unknown;
        'onUpdate:opened'?: ((value: unknown) => void) | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            title?: ((arg: ListItemTitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            prepend?: ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            append?: ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            subtitle?: ((arg: ListItemSubtitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            item?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            divider?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            subheader?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            header?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            title?: false | ((arg: ListItemTitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            prepend?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            append?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            subtitle?: false | ((arg: ListItemSubtitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            item?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            divider?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            subheader?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            header?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:title"?: false | ((arg: ListItemTitleSlot & {
            item: any;
        }) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: ListItemSlot & {
            item: any;
        }) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: ListItemSlot & {
            item: any;
        }) => vue.VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot & {
            item: any;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:divider"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => vue.VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => vue.VNodeChild) | undefined;
    }) | undefined;
    menuProps?: (Partial<{
        style: vue.StyleValue;
        disabled: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        };
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected">;
        scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
        closeDelay: NonNullable<string | number>;
        openDelay: NonNullable<string | number>;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: NonNullable<string | boolean>;
    }> & Omit<{
        style: vue.StyleValue;
        disabled: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        };
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected">;
        scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
        closeDelay: NonNullable<string | number>;
        openDelay: NonNullable<string | number>;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: NonNullable<string | boolean>;
        class?: any;
        id?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
        offset?: string | number | number[] | undefined;
        contentClass?: any;
        opacity?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        disabled: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        };
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected">;
        scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
        closeDelay: NonNullable<string | number>;
        openDelay: NonNullable<string | number>;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: NonNullable<string | boolean>;
    } & {
        class?: any;
        id?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
        offset?: string | number | number[] | undefined;
        contentClass?: any;
        opacity?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, "style" | "disabled" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim">) | undefined;
    itemColor?: string | undefined;
    autoSelectFirst?: boolean | "exact" | undefined;
} & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:menu"?: ((value: boolean) => any) | undefined;
    "onUpdate:search"?: ((value: any) => any) | undefined;
}, any, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:focused': (focused: boolean) => boolean;
    'update:search': (value: any) => true;
    'update:modelValue': (value: any) => boolean;
    'update:menu': (value: boolean) => true;
}, "$children" | "v-slots" | "modelValue" | "items" | "multiple" | "v-slot:prepend" | "v-slot:append" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:message" | "v-slot:details" | "returnObject" | "v-slot:item" | "itemTitle" | "itemValue" | "itemProps" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:chip" | "v-slot:selection" | "v-slot:prepend-item" | "v-slot:append-item" | "v-slot:no-data">, string, {
    reverse: boolean;
    flat: boolean;
    style: vue.StyleValue;
    menu: boolean;
    type: string;
    active: boolean;
    error: boolean;
    disabled: boolean;
    messages: string | readonly string[];
    noDataText: string;
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly ValidationRule[];
    rounded: string | number | boolean;
    variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
    tile: boolean;
    eager: boolean;
    role: string;
    density: Density;
    direction: "horizontal" | "vertical";
    valueComparator: typeof deepEqual;
    clearIcon: IconValue;
    centerAffix: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    filterKeys: NonNullable<FilterKeys>;
    itemChildren: NonNullable<SelectItemKey>;
    autofocus: boolean;
    clearable: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    chips: boolean;
    closableChips: boolean;
    closeText: string;
    openText: string;
    hideNoData: boolean;
    hideSelected: boolean;
    menuIcon: IconValue;
    openOnClear: boolean;
    clearOnSelect: boolean;
}, {}, string, vue.SlotsType<Partial<{
    clear: (arg: DefaultInputSlot & {
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    details: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    message: (arg: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'prepend-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'append-inner': (arg: DefaultInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        item: ListItem<unknown>;
        index: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    chip: (arg: {
        item: ListItem<unknown>;
        index: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    selection: (arg: {
        item: ListItem<unknown>;
        index: number;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'prepend-item': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'append-item': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T extends readonly any[], Item = ItemType<T>, ReturnObject extends boolean = false, Multiple extends boolean = false, V extends Value<Item, ReturnObject, Multiple> = Value<Item, ReturnObject, Multiple>>(props: {
    items?: T | undefined;
    itemTitle?: SelectItemKey<ItemType<T>>;
    itemValue?: SelectItemKey<ItemType<T>>;
    itemProps?: SelectItemKey<ItemType<T>>;
    returnObject?: ReturnObject | undefined;
    multiple?: Multiple | undefined;
    modelValue?: V | null | undefined;
    'onUpdate:modelValue'?: ((value: V) => void) | undefined;
}, slots: Omit<VInputSlots & VFieldSlots, "default"> & {
    item: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    chip: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    selection: {
        item: ListItem<Item>;
        index: number;
    };
    'prepend-item': never;
    'append-item': never;
    'no-data': never;
}) => GenericProps<{
    items?: T | undefined;
    itemTitle?: SelectItemKey<ItemType<T>>;
    itemValue?: SelectItemKey<ItemType<T>>;
    itemProps?: SelectItemKey<ItemType<T>>;
    returnObject?: ReturnObject | undefined;
    multiple?: Multiple | undefined;
    modelValue?: V | null | undefined;
    'onUpdate:modelValue'?: ((value: V) => void) | undefined;
}, Omit<VInputSlots & VFieldSlots, "default"> & {
    item: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    chip: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    selection: {
        item: ListItem<Item>;
        index: number;
    };
    'prepend-item': never;
    'append-item': never;
    'no-data': never;
}>) & FilterPropsOptions<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "default" | "type"> & {
        type: PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    reverse: BooleanConstructor;
    flat: BooleanConstructor;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    id: StringConstructor;
    label: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    width: (StringConstructor | NumberConstructor)[];
    active: BooleanConstructor;
    error: BooleanConstructor;
    theme: StringConstructor;
    color: StringConstructor;
    name: StringConstructor;
    prefix: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    placeholder: StringConstructor;
    counter: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<any>;
        default: any;
    };
    validateOn: PropType<("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined>;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: {
        type: PropType<"underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    tile: BooleanConstructor;
    role: {
        type: PropType<string>;
        default: string;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    clearIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prependInnerIcon: PropType<IconValue>;
    'onClick:clear': PropType<(args_0: MouseEvent) => void>;
    'onClick:prepend': PropType<(args_0: MouseEvent) => void>;
    'onClick:append': PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': PropType<(args_0: MouseEvent) => void>;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    hideDetails: PropType<boolean | "auto">;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    persistentClear: BooleanConstructor;
    singleLine: BooleanConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    counterValue: PropType<number | ((value: any) => number)>;
    modelModifiers: PropType<Record<string, boolean>>;
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<NonNullable<SelectItemKey>>;
        default: NonNullable<SelectItemKey>;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    chips: BooleanConstructor;
    closableChips: BooleanConstructor;
    closeText: {
        type: StringConstructor;
        default: string;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    eager: BooleanConstructor;
    hideNoData: BooleanConstructor;
    hideSelected: BooleanConstructor;
    listProps: {
        type: PropType<Partial<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        }> & Omit<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        } & {
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
        } & {
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, "style" | "nav" | "disabled" | "tag" | "rounded" | "variant" | "mandatory" | "tile" | "density" | "slim" | "valueComparator" | "activatable" | "selectable" | "selectStrategy" | "openStrategy" | "lines" | "returnObject" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            'onClick:select'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                title?: ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: ListItemTitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
        }>;
    };
    menu: BooleanConstructor;
    menuIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    menuProps: {
        type: PropType<Partial<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        }> & Omit<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        } & {
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "style" | "disabled" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim">>;
    };
    multiple: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    openOnClear: BooleanConstructor;
    itemColor: StringConstructor;
    customFilter: PropType<FilterFunction>;
    customKeyFilter: PropType<FilterKeyFunctions>;
    filterKeys: {
        type: PropType<NonNullable<FilterKeys>>;
        default: NonNullable<FilterKeys>;
    };
    filterMode: {
        type: PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    autoSelectFirst: {
        type: PropType<boolean | "exact">;
    };
    clearOnSelect: BooleanConstructor;
    search: StringConstructor;
}, vue.ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "default" | "type"> & {
        type: PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    reverse: BooleanConstructor;
    flat: BooleanConstructor;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    id: StringConstructor;
    label: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    width: (StringConstructor | NumberConstructor)[];
    active: BooleanConstructor;
    error: BooleanConstructor;
    theme: StringConstructor;
    color: StringConstructor;
    name: StringConstructor;
    prefix: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    placeholder: StringConstructor;
    counter: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    modelValue: {
        type: PropType<any>;
        default: any;
    };
    validateOn: PropType<("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined>;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: {
        type: PropType<"underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    tile: BooleanConstructor;
    role: {
        type: PropType<string>;
        default: string;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    clearIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prependInnerIcon: PropType<IconValue>;
    'onClick:clear': PropType<(args_0: MouseEvent) => void>;
    'onClick:prepend': PropType<(args_0: MouseEvent) => void>;
    'onClick:append': PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': PropType<(args_0: MouseEvent) => void>;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    hideDetails: PropType<boolean | "auto">;
    autofocus: BooleanConstructor;
    clearable: BooleanConstructor;
    persistentClear: BooleanConstructor;
    singleLine: BooleanConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    counterValue: PropType<number | ((value: any) => number)>;
    modelModifiers: PropType<Record<string, boolean>>;
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<NonNullable<SelectItemKey>>;
        default: NonNullable<SelectItemKey>;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    chips: BooleanConstructor;
    closableChips: BooleanConstructor;
    closeText: {
        type: StringConstructor;
        default: string;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    eager: BooleanConstructor;
    hideNoData: BooleanConstructor;
    hideSelected: BooleanConstructor;
    listProps: {
        type: PropType<Partial<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        }> & Omit<{
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            nav: boolean;
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
            selectStrategy: NonNullable<SelectStrategyProp>;
            openStrategy: NonNullable<OpenStrategyProp>;
            lines: false | "one" | "two" | "three";
            returnObject: boolean;
            itemType: string;
        } & {
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
            bgColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: ActiveStrategyProp | undefined;
            activeColor?: string | undefined;
            collapseIcon?: string | undefined;
            expandIcon?: string | undefined;
        } & {
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, "style" | "nav" | "disabled" | "tag" | "rounded" | "variant" | "mandatory" | "tile" | "density" | "slim" | "valueComparator" | "activatable" | "selectable" | "selectStrategy" | "openStrategy" | "lines" | "returnObject" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            'onClick:select'?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                title?: ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: (() => vue.VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: ListItemTitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                prepend?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                append?: false | ((arg: ListItemSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                subtitle?: false | ((arg: ListItemSubtitleSlot & {
                    item: any;
                }) => vue.VNodeChild) | undefined;
                default?: false | (() => vue.VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: ListItemTitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: ListItemSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: ListItemSubtitleSlot & {
                item: any;
            }) => vue.VNodeChild) | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => vue.VNodeChild) | undefined;
        }>;
    };
    menu: BooleanConstructor;
    menuIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    menuProps: {
        type: PropType<Partial<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        }> & Omit<{
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            disabled: boolean;
            transition: NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            };
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: NonNullable<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected">;
            scrollStrategy: NonNullable<"close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition">;
            closeDelay: NonNullable<string | number>;
            openDelay: NonNullable<string | number>;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: NonNullable<string | boolean>;
        } & {
            class?: any;
            id?: string | undefined;
            width?: string | number | undefined;
            height?: string | number | undefined;
            theme?: string | undefined;
            target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
            offset?: string | number | number[] | undefined;
            contentClass?: any;
            opacity?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, "style" | "disabled" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim">>;
    };
    multiple: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    openOnClear: BooleanConstructor;
    itemColor: StringConstructor;
    customFilter: PropType<FilterFunction>;
    customKeyFilter: PropType<FilterKeyFunctions>;
    filterKeys: {
        type: PropType<NonNullable<FilterKeys>>;
        default: NonNullable<FilterKeys>;
    };
    filterMode: {
        type: PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    autoSelectFirst: {
        type: PropType<boolean | "exact">;
    };
    clearOnSelect: BooleanConstructor;
    search: StringConstructor;
}>>;
type VAutocomplete = InstanceType<typeof VAutocomplete>;

export { VAutocomplete };
