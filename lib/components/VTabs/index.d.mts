import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, ComponentInternalInstance, Ref, ComputedRef, JSXComponent, PropType } from 'vue';
// @ts-ignore
import * as vue_router from 'vue-router';

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

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

type Density = null | 'default' | 'comfortable' | 'compact';

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VTab: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        replace: boolean;
        fixed: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        exact: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        hideSlider: boolean;
    } & {
        class?: any;
        text?: string | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        icon?: boolean | IconValue | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        sliderColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            loader?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
    }, Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            active: boolean;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            rounded: string | number | boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        }> & Omit<{
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            class?: any;
            text?: string | undefined;
            value?: any;
            width?: string | number | undefined;
            height?: string | number | undefined;
            active?: boolean | undefined;
            theme?: string | undefined;
            href?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            icon?: boolean | IconValue | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            border?: string | number | boolean | undefined;
            position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
            rounded?: string | number | boolean | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            location?: Anchor | undefined;
            baseColor?: string | undefined;
            selectedClass?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                loader?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        } & {
            class?: any;
            text?: string | undefined;
            value?: any;
            width?: string | number | undefined;
            height?: string | number | undefined;
            active?: boolean | undefined;
            theme?: string | undefined;
            href?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            icon?: boolean | IconValue | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            border?: string | number | boolean | undefined;
            position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
            rounded?: string | number | boolean | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            location?: Anchor | undefined;
            baseColor?: string | undefined;
            selectedClass?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                loader?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, "symbol" | "flat" | "replace" | "style" | "size" | "active" | "disabled" | "tag" | "readonly" | "rounded" | "variant" | "block" | "exact" | "tile" | "density" | "slim" | "stacked" | "ripple">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "group:selected", val: {
            value: boolean;
        }) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        } & {
            class?: any;
            text?: string | undefined;
            value?: any;
            width?: string | number | undefined;
            height?: string | number | undefined;
            active?: boolean | undefined;
            theme?: string | undefined;
            href?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            icon?: boolean | IconValue | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            border?: string | number | boolean | undefined;
            position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
            rounded?: string | number | boolean | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            location?: Anchor | undefined;
            baseColor?: string | undefined;
            selectedClass?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                loader?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, {
            group: GroupItemProvide | null;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'group:selected': (val: {
                value: boolean;
            }) => true;
        }, string, {
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            active: boolean;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            rounded: string | number | boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Omit<{
        symbol: any;
        flat: boolean;
        replace: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        block: boolean;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        class?: any;
        text?: string | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        active?: boolean | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        icon?: boolean | IconValue | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            loader?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, "group"> & vue.ShallowUnwrapRef<{
        group: GroupItemProvide | null;
    }> & {} & vue.ComponentCustomProperties & {}, "class" | "text" | "value" | "width" | "height" | "theme" | "key" | "href" | "color" | "v-slot:default" | "$children" | "v-slots" | "loading" | "icon" | "ref" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "to" | "border" | "position" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "elevation" | "v-slot:prepend" | "v-slot:append" | "location" | "baseColor" | "selectedClass" | "onGroup:selected" | "prependIcon" | "appendIcon" | ("symbol" | "flat" | "replace" | "style" | "size" | "active" | "disabled" | "tag" | "readonly" | "rounded" | "variant" | "block" | "exact" | "tile" | "density" | "slim" | "stacked" | "ripple") | "v-slot:loader">, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        replace: boolean;
        fixed: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        exact: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        hideSlider: boolean;
    } & {
        class?: any;
        text?: string | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        icon?: boolean | IconValue | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        sliderColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            loader?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        replace: boolean;
        fixed: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        rounded: string | number | boolean;
        variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        exact: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        hideSlider: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loader: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        fixed: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        exact: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        hideSlider: boolean;
    } & {
        class?: any;
        text?: string | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        icon?: boolean | IconValue | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        sliderColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            loader?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
    }, Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            active: boolean;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            rounded: string | number | boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        }> & Omit<{
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
            class?: any;
            text?: string | undefined;
            value?: any;
            width?: string | number | undefined;
            height?: string | number | undefined;
            active?: boolean | undefined;
            theme?: string | undefined;
            href?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            icon?: boolean | IconValue | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            border?: string | number | boolean | undefined;
            position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
            rounded?: string | number | boolean | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            location?: Anchor | undefined;
            baseColor?: string | undefined;
            selectedClass?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                loader?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        } & {
            class?: any;
            text?: string | undefined;
            value?: any;
            width?: string | number | undefined;
            height?: string | number | undefined;
            active?: boolean | undefined;
            theme?: string | undefined;
            href?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            icon?: boolean | IconValue | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            border?: string | number | boolean | undefined;
            position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
            rounded?: string | number | boolean | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            location?: Anchor | undefined;
            baseColor?: string | undefined;
            selectedClass?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                loader?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, "symbol" | "flat" | "replace" | "style" | "size" | "active" | "disabled" | "tag" | "readonly" | "rounded" | "variant" | "block" | "exact" | "tile" | "density" | "slim" | "stacked" | "ripple">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "group:selected", val: {
            value: boolean;
        }) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        } & {
            class?: any;
            text?: string | undefined;
            value?: any;
            width?: string | number | undefined;
            height?: string | number | undefined;
            active?: boolean | undefined;
            theme?: string | undefined;
            href?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            icon?: boolean | IconValue | undefined;
            to?: vue_router.RouteLocationRaw | undefined;
            border?: string | number | boolean | undefined;
            position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
            rounded?: string | number | boolean | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            elevation?: string | number | undefined;
            location?: Anchor | undefined;
            baseColor?: string | undefined;
            selectedClass?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
        } & {
            $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
                default?: (() => vue.VNodeChild) | undefined;
                prepend?: (() => vue.VNodeChild) | undefined;
                append?: (() => vue.VNodeChild) | undefined;
                loader?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => vue.VNodeChild) | undefined;
                prepend?: false | (() => vue.VNodeChild) | undefined;
                append?: false | (() => vue.VNodeChild) | undefined;
                loader?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, {
            group: GroupItemProvide | null;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'group:selected': (val: {
                value: boolean;
            }) => true;
        }, string, {
            symbol: any;
            flat: boolean;
            replace: boolean;
            style: vue.StyleValue;
            size: string | number;
            active: boolean;
            disabled: boolean;
            tag: string;
            readonly: boolean;
            rounded: string | number | boolean;
            variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            block: boolean;
            exact: boolean;
            tile: boolean;
            density: Density;
            slim: boolean;
            stacked: boolean;
            ripple: boolean | {
                class: string;
            } | undefined;
        }, {}, string, vue.SlotsType<Partial<{
            default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Omit<{
        symbol: any;
        flat: boolean;
        replace: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        block: boolean;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        class?: any;
        text?: string | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        active?: boolean | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        icon?: boolean | IconValue | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            loader?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, "group"> & vue.ShallowUnwrapRef<{
        group: GroupItemProvide | null;
    }> & {} & vue.ComponentCustomProperties & {}, "class" | "text" | "value" | "width" | "height" | "theme" | "key" | "href" | "color" | "v-slot:default" | "$children" | "v-slots" | "loading" | "icon" | "ref" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "to" | "border" | "position" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "elevation" | "v-slot:prepend" | "v-slot:append" | "location" | "baseColor" | "selectedClass" | "onGroup:selected" | "prependIcon" | "appendIcon" | ("symbol" | "flat" | "replace" | "style" | "size" | "active" | "disabled" | "tag" | "readonly" | "rounded" | "variant" | "block" | "exact" | "tile" | "density" | "slim" | "stacked" | "ripple") | "v-slot:loader">, `$${any}`>, {}, {}, {}, {
        replace: boolean;
        fixed: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        rounded: string | number | boolean;
        variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        exact: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        hideSlider: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    replace: boolean;
    fixed: boolean;
    style: vue.StyleValue;
    size: string | number;
    disabled: boolean;
    tag: string;
    readonly: boolean;
    variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
    exact: boolean;
    tile: boolean;
    density: Density;
    direction: "horizontal" | "vertical";
    selectedClass: string;
    slim: boolean;
    stacked: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    hideSlider: boolean;
} & {
    class?: any;
    text?: string | undefined;
    value?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    href?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    icon?: boolean | IconValue | undefined;
    to?: vue_router.RouteLocationRaw | undefined;
    border?: string | number | boolean | undefined;
    rounded?: string | number | boolean | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    elevation?: string | number | undefined;
    baseColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    sliderColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        prepend?: (() => vue.VNodeChild) | undefined;
        append?: (() => vue.VNodeChild) | undefined;
        loader?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        prepend?: false | (() => vue.VNodeChild) | undefined;
        append?: false | (() => vue.VNodeChild) | undefined;
        loader?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
}, Omit<Omit<{
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        symbol: any;
        flat: boolean;
        replace: boolean;
        style: vue.StyleValue;
        size: string | number;
        active: boolean;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        block: boolean;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    }> & Omit<{
        symbol: any;
        flat: boolean;
        replace: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        block: boolean;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        class?: any;
        text?: string | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        active?: boolean | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        icon?: boolean | IconValue | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            loader?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        symbol: any;
        flat: boolean;
        replace: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        block: boolean;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        class?: any;
        text?: string | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        active?: boolean | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        icon?: boolean | IconValue | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            loader?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, "symbol" | "flat" | "replace" | "style" | "size" | "active" | "disabled" | "tag" | "readonly" | "rounded" | "variant" | "block" | "exact" | "tile" | "density" | "slim" | "stacked" | "ripple">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        prepend?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        append?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        loader?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
    $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
    $emit: (event: "group:selected", val: {
        value: boolean;
    }) => void;
    $el: any;
    $options: vue.ComponentOptionsBase<{
        symbol: any;
        flat: boolean;
        replace: boolean;
        style: vue.StyleValue;
        size: string | number;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        block: boolean;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        class?: any;
        text?: string | undefined;
        value?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        active?: boolean | undefined;
        theme?: string | undefined;
        href?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        icon?: boolean | IconValue | undefined;
        to?: vue_router.RouteLocationRaw | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            prepend?: (() => vue.VNodeChild) | undefined;
            append?: (() => vue.VNodeChild) | undefined;
            loader?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            prepend?: false | (() => vue.VNodeChild) | undefined;
            append?: false | (() => vue.VNodeChild) | undefined;
            loader?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        group: GroupItemProvide | null;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'group:selected': (val: {
            value: boolean;
        }) => true;
    }, string, {
        symbol: any;
        flat: boolean;
        replace: boolean;
        style: vue.StyleValue;
        size: string | number;
        active: boolean;
        disabled: boolean;
        tag: string;
        readonly: boolean;
        rounded: string | number | boolean;
        variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        block: boolean;
        exact: boolean;
        tile: boolean;
        density: Density;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    }, {}, string, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loader: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
    }>>> & {
        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
        created?: ((() => void) | (() => void)[]) | undefined;
        beforeMount?: ((() => void) | (() => void)[]) | undefined;
        mounted?: ((() => void) | (() => void)[]) | undefined;
        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
        updated?: ((() => void) | (() => void)[]) | undefined;
        activated?: ((() => void) | (() => void)[]) | undefined;
        deactivated?: ((() => void) | (() => void)[]) | undefined;
        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
        destroyed?: ((() => void) | (() => void)[]) | undefined;
        unmounted?: ((() => void) | (() => void)[]) | undefined;
        renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
        errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof vue.nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
} & Omit<{
    symbol: any;
    flat: boolean;
    replace: boolean;
    style: vue.StyleValue;
    size: string | number;
    disabled: boolean;
    tag: string;
    readonly: boolean;
    variant: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    block: boolean;
    exact: boolean;
    tile: boolean;
    density: Density;
    slim: boolean;
    stacked: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
} & {
    class?: any;
    text?: string | undefined;
    value?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    active?: boolean | undefined;
    theme?: string | undefined;
    href?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    icon?: boolean | IconValue | undefined;
    to?: vue_router.RouteLocationRaw | undefined;
    border?: string | number | boolean | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    rounded?: string | number | boolean | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    elevation?: string | number | undefined;
    location?: Anchor | undefined;
    baseColor?: string | undefined;
    selectedClass?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        prepend?: (() => vue.VNodeChild) | undefined;
        append?: (() => vue.VNodeChild) | undefined;
        loader?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        prepend?: false | (() => vue.VNodeChild) | undefined;
        append?: false | (() => vue.VNodeChild) | undefined;
        loader?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, "group"> & vue.ShallowUnwrapRef<{
    group: GroupItemProvide | null;
}> & {} & vue.ComponentCustomProperties & {}, "class" | "text" | "value" | "width" | "height" | "theme" | "key" | "href" | "color" | "v-slot:default" | "$children" | "v-slots" | "loading" | "icon" | "ref" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "to" | "border" | "position" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "elevation" | "v-slot:prepend" | "v-slot:append" | "location" | "baseColor" | "selectedClass" | "onGroup:selected" | "prependIcon" | "appendIcon" | ("symbol" | "flat" | "replace" | "style" | "size" | "active" | "disabled" | "tag" | "readonly" | "rounded" | "variant" | "block" | "exact" | "tile" | "density" | "slim" | "stacked" | "ripple") | "v-slot:loader">, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    replace: boolean;
    fixed: boolean;
    style: vue.StyleValue;
    size: string | number;
    disabled: boolean;
    tag: string;
    readonly: boolean;
    rounded: string | number | boolean;
    variant: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
    exact: boolean;
    tile: boolean;
    density: Density;
    direction: "horizontal" | "vertical";
    selectedClass: string;
    slim: boolean;
    stacked: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    hideSlider: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    replace: BooleanConstructor;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    text: StringConstructor;
    value: null;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    href: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string>;
        default: string;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    icon: PropType<boolean | IconValue>;
    to: PropType<vue_router.RouteLocationRaw>;
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    readonly: BooleanConstructor;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: Omit<Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "default" | "type"> & {
        type: PropType<NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>>;
        default: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
    };
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    exact: BooleanConstructor;
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    baseColor: StringConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    slim: BooleanConstructor;
    stacked: BooleanConstructor;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    fixed: BooleanConstructor;
    sliderColor: StringConstructor;
    hideSlider: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}, vue.ExtractPropTypes<{
    replace: BooleanConstructor;
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    text: StringConstructor;
    value: null;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    href: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string>;
        default: string;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    icon: PropType<boolean | IconValue>;
    to: PropType<vue_router.RouteLocationRaw>;
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    readonly: BooleanConstructor;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: Omit<Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "default" | "type"> & {
        type: PropType<NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>>;
        default: NonNullable<NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">>;
    };
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    exact: BooleanConstructor;
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    baseColor: StringConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    slim: BooleanConstructor;
    stacked: BooleanConstructor;
    ripple: {
        type: PropType<boolean | {
            class: string;
        } | undefined>;
        default: boolean;
    };
    fixed: BooleanConstructor;
    sliderColor: StringConstructor;
    hideSlider: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}>>;
type VTab = InstanceType<typeof VTab>;

declare const breakpoints: readonly ["sm", "md", "lg", "xl", "xxl"];
type Breakpoint = typeof breakpoints[number];
type DisplayBreakpoint = 'xs' | Breakpoint;

type TabItem = string | number | Record<string, any>;
type VTabsSlot = {
    item: TabItem;
};
declare const VTabs: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        symbol: any;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: NonNullable<boolean | null> | null;
        items: readonly TabItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        stacked: boolean;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        grow: boolean;
        hideSlider: boolean;
        alignTabs: "end" | "title" | "center" | "start";
        fixedTabs: boolean;
    } & {
        class?: any;
        height?: string | number | undefined;
        color?: string | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        modelValue?: any;
        max?: number | undefined;
        bgColor?: string | undefined;
        showArrows?: string | boolean | undefined;
        sliderColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            [x: `tab.${string}`]: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            tab?: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            window?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `tab.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            tab?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            window?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:tab.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:tab"?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        "v-slot:window"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (v: unknown) => boolean;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        symbol: any;
        style: vue.StyleValue;
        disabled: boolean;
        tag: string;
        mobile: NonNullable<boolean | null> | null;
        items: readonly TabItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        stacked: boolean;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        grow: boolean;
        hideSlider: boolean;
        alignTabs: "end" | "title" | "center" | "start";
        fixedTabs: boolean;
    } & {
        class?: any;
        height?: string | number | undefined;
        color?: string | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        modelValue?: any;
        max?: number | undefined;
        bgColor?: string | undefined;
        showArrows?: string | boolean | undefined;
        sliderColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            [x: `tab.${string}`]: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            tab?: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            window?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `tab.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            tab?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            window?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:tab.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:tab"?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        "v-slot:window"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {
        symbol: any;
        style: vue.StyleValue;
        height: string | number;
        disabled: boolean;
        tag: string;
        mobile: NonNullable<boolean | null> | null;
        modelValue: any;
        items: readonly TabItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        stacked: boolean;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        grow: boolean;
        hideSlider: boolean;
        alignTabs: "end" | "title" | "center" | "start";
        fixedTabs: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        [x: `tab.${string}`]: (arg: VTabsSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        [x: `item.${string}`]: (arg: VTabsSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        tab: (arg: VTabsSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: VTabsSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        window: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        items: readonly TabItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        stacked: boolean;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        grow: boolean;
        hideSlider: boolean;
        alignTabs: "end" | "title" | "center" | "start";
        fixedTabs: boolean;
    } & {
        class?: any;
        height?: string | number | undefined;
        color?: string | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        modelValue?: any;
        max?: number | undefined;
        bgColor?: string | undefined;
        showArrows?: string | boolean | undefined;
        sliderColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            [x: `tab.${string}`]: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            tab?: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            item?: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            window?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `tab.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            tab?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            item?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
            window?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:tab.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:tab"?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        "v-slot:window"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {}, {}, {}, {}, {
        symbol: any;
        style: vue.StyleValue;
        height: string | number;
        disabled: boolean;
        tag: string;
        mobile: NonNullable<boolean | null> | null;
        modelValue: any;
        items: readonly TabItem[];
        mandatory: NonNullable<boolean | "force">;
        multiple: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        selectedClass: string;
        stacked: boolean;
        centerActive: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        grow: boolean;
        hideSlider: boolean;
        alignTabs: "end" | "title" | "center" | "start";
        fixedTabs: boolean;
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
    items: readonly TabItem[];
    mandatory: NonNullable<boolean | "force">;
    multiple: boolean;
    density: Density;
    direction: "horizontal" | "vertical";
    selectedClass: string;
    stacked: boolean;
    centerActive: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    grow: boolean;
    hideSlider: boolean;
    alignTabs: "end" | "title" | "center" | "start";
    fixedTabs: boolean;
} & {
    class?: any;
    height?: string | number | undefined;
    color?: string | undefined;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    modelValue?: any;
    max?: number | undefined;
    bgColor?: string | undefined;
    showArrows?: string | boolean | undefined;
    sliderColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        [x: `tab.${string}`]: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        default?: (() => vue.VNodeChild) | undefined;
        tab?: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        item?: ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        window?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        [x: `tab.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        [x: `item.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        default?: false | (() => vue.VNodeChild) | undefined;
        tab?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        item?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
        window?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:tab.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
    [x: `v-slot:item.${string}`]: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:tab"?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: VTabsSlot) => vue.VNodeChild) | undefined;
    "v-slot:window"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => boolean;
}, string, {
    symbol: any;
    style: vue.StyleValue;
    height: string | number;
    disabled: boolean;
    tag: string;
    mobile: NonNullable<boolean | null> | null;
    modelValue: any;
    items: readonly TabItem[];
    mandatory: NonNullable<boolean | "force">;
    multiple: boolean;
    density: Density;
    direction: "horizontal" | "vertical";
    selectedClass: string;
    stacked: boolean;
    centerActive: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    grow: boolean;
    hideSlider: boolean;
    alignTabs: "end" | "title" | "center" | "start";
    fixedTabs: boolean;
}, {}, string, vue.SlotsType<Partial<{
    [x: `tab.${string}`]: (arg: VTabsSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `item.${string}`]: (arg: VTabsSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    tab: (arg: VTabsSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: VTabsSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    window: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
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
    selectedClass: Omit<{
        type: PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
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
        default: vue.InjectionKey<GroupProvide>;
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
    alignTabs: {
        type: PropType<"end" | "title" | "center" | "start">;
        default: string;
    };
    color: StringConstructor;
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    sliderColor: StringConstructor;
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
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
    selectedClass: Omit<{
        type: PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
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
        default: vue.InjectionKey<GroupProvide>;
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
    alignTabs: {
        type: PropType<"end" | "title" | "center" | "start">;
        default: string;
    };
    color: StringConstructor;
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    sliderColor: StringConstructor;
}>>;
type VTabs = InstanceType<typeof VTabs>;

declare const VTabsWindow: {
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
type VTabsWindow = InstanceType<typeof VTabsWindow>;

declare const VTabsWindowItem: {
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
type VTabsWindowItem = InstanceType<typeof VTabsWindowItem>;

export { VTab, VTabs, VTabsWindow, VTabsWindowItem };
