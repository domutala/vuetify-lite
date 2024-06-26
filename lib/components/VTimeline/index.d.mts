import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, Prop, JSXComponent, PropType } from 'vue';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

type Density = null | 'default' | 'comfortable' | 'compact';

type TimelineDirection = 'vertical' | 'horizontal';
type TimelineSide = 'start' | 'end' | undefined;
type TimelineAlign = 'center' | 'start';
type TimelineTruncateLine = 'start' | 'end' | 'both' | undefined;
declare const VTimeline: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        size: string | number;
        tag: string;
        justify: string;
        density: Density;
        fillDot: boolean;
        lineInset: NonNullable<string | number>;
        lineThickness: string | number;
    } & {
        class?: any;
        side?: TimelineSide;
        align?: TimelineAlign | undefined;
        theme?: string | undefined;
        direction?: TimelineDirection | undefined;
        dotColor?: string | undefined;
        iconColor?: string | undefined;
        lineColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        truncateLine?: TimelineTruncateLine;
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
        size: string | number;
        tag: string;
        justify: string;
        density: Density;
        fillDot: boolean;
        lineInset: NonNullable<string | number>;
        lineThickness: string | number;
    } & {
        class?: any;
        side?: TimelineSide;
        align?: TimelineAlign | undefined;
        theme?: string | undefined;
        direction?: TimelineDirection | undefined;
        dotColor?: string | undefined;
        iconColor?: string | undefined;
        lineColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        truncateLine?: TimelineTruncateLine;
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
        size: string | number;
        tag: string;
        justify: string;
        density: Density;
        fillDot: boolean;
        hideOpposite: boolean;
        lineInset: NonNullable<string | number>;
        lineThickness: string | number;
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
        size: string | number;
        tag: string;
        justify: string;
        density: Density;
        fillDot: boolean;
        lineInset: NonNullable<string | number>;
        lineThickness: string | number;
    } & {
        class?: any;
        side?: TimelineSide;
        align?: TimelineAlign | undefined;
        theme?: string | undefined;
        direction?: TimelineDirection | undefined;
        dotColor?: string | undefined;
        iconColor?: string | undefined;
        lineColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        truncateLine?: TimelineTruncateLine;
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
        size: string | number;
        tag: string;
        justify: string;
        density: Density;
        fillDot: boolean;
        hideOpposite: boolean;
        lineInset: NonNullable<string | number>;
        lineThickness: string | number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    size: string | number;
    tag: string;
    justify: string;
    density: Density;
    fillDot: boolean;
    lineInset: NonNullable<string | number>;
    lineThickness: string | number;
} & {
    class?: any;
    side?: TimelineSide;
    align?: TimelineAlign | undefined;
    theme?: string | undefined;
    direction?: TimelineDirection | undefined;
    dotColor?: string | undefined;
    iconColor?: string | undefined;
    lineColor?: string | undefined;
    hideOpposite?: boolean | undefined;
    truncateLine?: TimelineTruncateLine;
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
    size: string | number;
    tag: string;
    justify: string;
    density: Density;
    fillDot: boolean;
    hideOpposite: boolean;
    lineInset: NonNullable<string | number>;
    lineThickness: string | number;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
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
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    iconColor: StringConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    lineInset: {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    align: Prop<TimelineAlign>;
    direction: Prop<TimelineDirection>;
    justify: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    side: Prop<TimelineSide>;
    lineThickness: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineColor: StringConstructor;
    truncateLine: Prop<TimelineTruncateLine>;
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
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
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    iconColor: StringConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    lineInset: {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    align: Prop<TimelineAlign>;
    direction: Prop<TimelineDirection>;
    justify: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    side: Prop<TimelineSide>;
    lineThickness: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineColor: StringConstructor;
    truncateLine: Prop<TimelineTruncateLine>;
}>>;
type VTimeline = InstanceType<typeof VTimeline>;

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VTimelineItem: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        size: string | number;
        tag: string;
        tile: boolean;
        fillDot: boolean;
        hideDot: boolean;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        icon?: IconValue | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        density?: "default" | "compact" | undefined;
        dotColor?: string | undefined;
        iconColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        lineInset?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            icon?: (() => vue.VNodeChild) | undefined;
            opposite?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            icon?: false | (() => vue.VNodeChild) | undefined;
            opposite?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:opposite"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        size: string | number;
        tag: string;
        tile: boolean;
        fillDot: boolean;
        hideDot: boolean;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        icon?: IconValue | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        density?: "default" | "compact" | undefined;
        dotColor?: string | undefined;
        iconColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        lineInset?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            icon?: (() => vue.VNodeChild) | undefined;
            opposite?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            icon?: false | (() => vue.VNodeChild) | undefined;
            opposite?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:opposite"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        style: vue.StyleValue;
        size: string | number;
        tag: string;
        rounded: string | number | boolean;
        tile: boolean;
        fillDot: boolean;
        hideDot: boolean;
        hideOpposite: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        icon: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        opposite: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        size: string | number;
        tag: string;
        tile: boolean;
        fillDot: boolean;
        hideDot: boolean;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        icon?: IconValue | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        density?: "default" | "compact" | undefined;
        dotColor?: string | undefined;
        iconColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        lineInset?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            icon?: (() => vue.VNodeChild) | undefined;
            opposite?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            icon?: false | (() => vue.VNodeChild) | undefined;
            opposite?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:opposite"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        size: string | number;
        tag: string;
        rounded: string | number | boolean;
        tile: boolean;
        fillDot: boolean;
        hideDot: boolean;
        hideOpposite: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    size: string | number;
    tag: string;
    tile: boolean;
    fillDot: boolean;
    hideDot: boolean;
} & {
    class?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    icon?: IconValue | undefined;
    rounded?: string | number | boolean | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    elevation?: string | number | undefined;
    density?: "default" | "compact" | undefined;
    dotColor?: string | undefined;
    iconColor?: string | undefined;
    hideOpposite?: boolean | undefined;
    lineInset?: string | number | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        icon?: (() => vue.VNodeChild) | undefined;
        opposite?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        icon?: false | (() => vue.VNodeChild) | undefined;
        opposite?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:icon"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:opposite"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    size: string | number;
    tag: string;
    rounded: string | number | boolean;
    tile: boolean;
    fillDot: boolean;
    hideDot: boolean;
    hideOpposite: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    icon: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    opposite: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    tag: {
        type: StringConstructor;
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
    density: PropType<"default" | "compact">;
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    icon: PropType<IconValue>;
    iconColor: StringConstructor;
    lineInset: (StringConstructor | NumberConstructor)[];
}, vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
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
    density: PropType<"default" | "compact">;
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    icon: PropType<IconValue>;
    iconColor: StringConstructor;
    lineInset: (StringConstructor | NumberConstructor)[];
}>>;
type VTimelineItem = InstanceType<typeof VTimelineItem>;

export { VTimeline, VTimelineItem };
