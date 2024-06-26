import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, PropType } from 'vue';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

type SparklineItem = number | {
    value: number;
};

declare const VSparkline: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        fill: boolean;
        type: "bar" | "trend";
        width: string | number;
        height: string | number;
        modelValue: SparklineItem[];
        smooth: boolean;
        padding: string | number;
        gradient: string[];
        itemValue: string;
        labels: SparklineItem[];
        autoDraw: boolean;
        autoDrawEasing: string;
        gradientDirection: "left" | "right" | "top" | "bottom";
        labelSize: string | number;
        lineWidth: string | number;
        showLabels: boolean;
        autoLineWidth: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        max?: string | number | undefined;
        min?: string | number | undefined;
        autoDrawDuration?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: void) => vue.VNodeChild) | {
            default?: ((arg: void) => vue.VNodeChild) | undefined;
            label?: ((arg: {
                index: number;
                value: string;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: void) => vue.VNodeChild) | undefined;
            label?: false | ((arg: {
                index: number;
                value: string;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: void) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            index: number;
            value: string;
        }) => vue.VNodeChild) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        fill: boolean;
        type: "bar" | "trend";
        width: string | number;
        height: string | number;
        modelValue: SparklineItem[];
        smooth: boolean;
        padding: string | number;
        gradient: string[];
        itemValue: string;
        labels: SparklineItem[];
        autoDraw: boolean;
        autoDrawEasing: string;
        gradientDirection: "left" | "right" | "top" | "bottom";
        labelSize: string | number;
        lineWidth: string | number;
        showLabels: boolean;
        autoLineWidth: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        max?: string | number | undefined;
        min?: string | number | undefined;
        autoDrawDuration?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: void) => vue.VNodeChild) | {
            default?: ((arg: void) => vue.VNodeChild) | undefined;
            label?: ((arg: {
                index: number;
                value: string;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: void) => vue.VNodeChild) | undefined;
            label?: false | ((arg: {
                index: number;
                value: string;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: void) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            index: number;
            value: string;
        }) => vue.VNodeChild) | undefined;
    }, {
        fill: boolean;
        type: "bar" | "trend";
        width: string | number;
        height: string | number;
        modelValue: SparklineItem[];
        smooth: boolean;
        padding: string | number;
        gradient: string[];
        itemValue: string;
        labels: SparklineItem[];
        autoDraw: boolean;
        autoDrawEasing: string;
        gradientDirection: "left" | "right" | "top" | "bottom";
        labelSize: string | number;
        lineWidth: string | number;
        showLabels: boolean;
        autoLineWidth: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: (arg: void) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: {
            index: number;
            value: string;
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
        fill: boolean;
        type: "bar" | "trend";
        width: string | number;
        height: string | number;
        modelValue: SparklineItem[];
        smooth: boolean;
        padding: string | number;
        gradient: string[];
        itemValue: string;
        labels: SparklineItem[];
        autoDraw: boolean;
        autoDrawEasing: string;
        gradientDirection: "left" | "right" | "top" | "bottom";
        labelSize: string | number;
        lineWidth: string | number;
        showLabels: boolean;
        autoLineWidth: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        max?: string | number | undefined;
        min?: string | number | undefined;
        autoDrawDuration?: string | number | undefined;
    } & {
        $children?: vue.VNodeChild | ((arg: void) => vue.VNodeChild) | {
            default?: ((arg: void) => vue.VNodeChild) | undefined;
            label?: ((arg: {
                index: number;
                value: string;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: void) => vue.VNodeChild) | undefined;
            label?: false | ((arg: {
                index: number;
                value: string;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: void) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            index: number;
            value: string;
        }) => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        fill: boolean;
        type: "bar" | "trend";
        width: string | number;
        height: string | number;
        modelValue: SparklineItem[];
        smooth: boolean;
        padding: string | number;
        gradient: string[];
        itemValue: string;
        labels: SparklineItem[];
        autoDraw: boolean;
        autoDrawEasing: string;
        gradientDirection: "left" | "right" | "top" | "bottom";
        labelSize: string | number;
        lineWidth: string | number;
        showLabels: boolean;
        autoLineWidth: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    fill: boolean;
    type: "bar" | "trend";
    width: string | number;
    height: string | number;
    modelValue: SparklineItem[];
    smooth: boolean;
    padding: string | number;
    gradient: string[];
    itemValue: string;
    labels: SparklineItem[];
    autoDraw: boolean;
    autoDrawEasing: string;
    gradientDirection: "left" | "right" | "top" | "bottom";
    labelSize: string | number;
    lineWidth: string | number;
    showLabels: boolean;
    autoLineWidth: boolean;
} & {
    id?: string | undefined;
    color?: string | undefined;
    max?: string | number | undefined;
    min?: string | number | undefined;
    autoDrawDuration?: string | number | undefined;
} & {
    $children?: vue.VNodeChild | ((arg: void) => vue.VNodeChild) | {
        default?: ((arg: void) => vue.VNodeChild) | undefined;
        label?: ((arg: {
            index: number;
            value: string;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: void) => vue.VNodeChild) | undefined;
        label?: false | ((arg: {
            index: number;
            value: string;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: void) => vue.VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: {
        index: number;
        value: string;
    }) => vue.VNodeChild) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    fill: boolean;
    type: "bar" | "trend";
    width: string | number;
    height: string | number;
    modelValue: SparklineItem[];
    smooth: boolean;
    padding: string | number;
    gradient: string[];
    itemValue: string;
    labels: SparklineItem[];
    autoDraw: boolean;
    autoDrawEasing: string;
    gradientDirection: "left" | "right" | "top" | "bottom";
    labelSize: string | number;
    lineWidth: string | number;
    showLabels: boolean;
    autoLineWidth: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: void) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: {
        index: number;
        value: string;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    autoDraw: BooleanConstructor;
    autoDrawDuration: (StringConstructor | NumberConstructor)[];
    autoDrawEasing: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    gradient: {
        type: PropType<string[]>;
        default: () => never[];
    };
    gradientDirection: {
        type: PropType<"left" | "right" | "top" | "bottom">;
        validator: (val: string) => boolean;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    labels: {
        type: PropType<SparklineItem[]>;
        default: () => never[];
    };
    labelSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    id: StringConstructor;
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<SparklineItem[]>;
        default: () => never[];
    };
    min: (StringConstructor | NumberConstructor)[];
    max: (StringConstructor | NumberConstructor)[];
    padding: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showLabels: BooleanConstructor;
    smooth: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    fill: BooleanConstructor;
    autoLineWidth: BooleanConstructor;
    type: {
        type: PropType<"bar" | "trend">;
        default: string;
    };
}, vue.ExtractPropTypes<{
    autoDraw: BooleanConstructor;
    autoDrawDuration: (StringConstructor | NumberConstructor)[];
    autoDrawEasing: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    gradient: {
        type: PropType<string[]>;
        default: () => never[];
    };
    gradientDirection: {
        type: PropType<"left" | "right" | "top" | "bottom">;
        validator: (val: string) => boolean;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    labels: {
        type: PropType<SparklineItem[]>;
        default: () => never[];
    };
    labelSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    id: StringConstructor;
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<SparklineItem[]>;
        default: () => never[];
    };
    min: (StringConstructor | NumberConstructor)[];
    max: (StringConstructor | NumberConstructor)[];
    padding: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showLabels: BooleanConstructor;
    smooth: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    fill: BooleanConstructor;
    autoLineWidth: BooleanConstructor;
    type: {
        type: PropType<"bar" | "trend">;
        default: string;
    };
}>>;
type VSparkline = InstanceType<typeof VSparkline>;

export { VSparkline };
