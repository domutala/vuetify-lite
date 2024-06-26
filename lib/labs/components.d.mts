import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, ComponentPublicInstance, PropType, JSXComponent, ComputedRef, Ref, EffectScope, nextTick } from 'vue';
// @ts-ignore
import * as vue_router from 'vue-router';

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

declare const VCalendar: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: "static" | "dynamic";
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    } & {
        events?: any[] | undefined;
        title?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        modelValue?: unknown[] | undefined;
        max?: unknown;
        min?: unknown;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayValue?: unknown;
        dayIndex?: number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            header?: ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
            event?: ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
            event?: false | ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
        "v-slot:event"?: false | ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onNext?: ((...args: any[]) => any) | undefined;
        onPrev?: ((...args: any[]) => any) | undefined;
    }, {
        daysInMonth: vue.ComputedRef<{
            date: unknown;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[]>;
        daysInWeek: vue.ComputedRef<{
            date: unknown;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[]>;
        genDays: (days: unknown[], today: unknown) => {
            date: unknown;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[];
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        next: null;
        prev: null;
        'update:modelValue': null;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: "static" | "dynamic";
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    } & {
        events?: any[] | undefined;
        title?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        modelValue?: unknown[] | undefined;
        max?: unknown;
        min?: unknown;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayValue?: unknown;
        dayIndex?: number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            header?: ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
            event?: ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
            event?: false | ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
        "v-slot:event"?: false | ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onNext?: ((...args: any[]) => any) | undefined;
        onPrev?: ((...args: any[]) => any) | undefined;
    }, {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: "static" | "dynamic";
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        header: (arg: {
            title: string;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        event: (arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
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
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: "static" | "dynamic";
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    } & {
        events?: any[] | undefined;
        title?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        modelValue?: unknown[] | undefined;
        max?: unknown;
        min?: unknown;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayValue?: unknown;
        dayIndex?: number | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            header?: ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
            event?: ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | ((arg: {
                title: string;
            }) => vue.VNodeChild) | undefined;
            event?: false | ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
        "v-slot:event"?: false | ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onNext?: ((...args: any[]) => any) | undefined;
        onPrev?: ((...args: any[]) => any) | undefined;
    }, {
        daysInMonth: vue.ComputedRef<{
            date: unknown;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[]>;
        daysInWeek: vue.ComputedRef<{
            date: unknown;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[]>;
        genDays: (days: unknown[], today: unknown) => {
            date: unknown;
            isoDate: string;
            formatted: string;
            year: number;
            month: number;
            isDisabled: boolean;
            isWeekStart: boolean;
            isWeekEnd: boolean;
            isToday: boolean;
            isAdjacent: boolean;
            isHidden: boolean;
            isStart: boolean;
            isSelected: boolean;
            isEnd: boolean;
            isSame: boolean;
            localized: string;
        }[];
    }, {}, {}, {}, {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: "static" | "dynamic";
        hideHeader: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    text: string;
    disabled: boolean;
    day: Record<string, any>;
    nextIcon: string;
    prevIcon: string;
    viewMode: "month" | "day" | "week";
    showAdjacentMonths: boolean;
    weekdays: number[];
    weeksInMonth: "static" | "dynamic";
    hideHeader: boolean;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
    hideWeekNumber: boolean;
} & {
    events?: any[] | undefined;
    title?: string | undefined;
    month?: string | number | undefined;
    year?: string | number | undefined;
    modelValue?: unknown[] | undefined;
    max?: unknown;
    min?: unknown;
    allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
    displayValue?: unknown;
    dayIndex?: number | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        header?: ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
        event?: ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        header?: false | ((arg: {
            title: string;
        }) => vue.VNodeChild) | undefined;
        event?: false | ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:header"?: false | ((arg: {
        title: string;
    }) => vue.VNodeChild) | undefined;
    "v-slot:event"?: false | ((arg: {
        day?: Object | undefined;
        allDay: boolean;
        event: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    onPrev?: ((...args: any[]) => any) | undefined;
}, {
    daysInMonth: vue.ComputedRef<{
        date: unknown;
        isoDate: string;
        formatted: string;
        year: number;
        month: number;
        isDisabled: boolean;
        isWeekStart: boolean;
        isWeekEnd: boolean;
        isToday: boolean;
        isAdjacent: boolean;
        isHidden: boolean;
        isStart: boolean;
        isSelected: boolean;
        isEnd: boolean;
        isSame: boolean;
        localized: string;
    }[]>;
    daysInWeek: vue.ComputedRef<{
        date: unknown;
        isoDate: string;
        formatted: string;
        year: number;
        month: number;
        isDisabled: boolean;
        isWeekStart: boolean;
        isWeekEnd: boolean;
        isToday: boolean;
        isAdjacent: boolean;
        isHidden: boolean;
        isStart: boolean;
        isSelected: boolean;
        isEnd: boolean;
        isSame: boolean;
        localized: string;
    }[]>;
    genDays: (days: unknown[], today: unknown) => {
        date: unknown;
        isoDate: string;
        formatted: string;
        year: number;
        month: number;
        isDisabled: boolean;
        isWeekStart: boolean;
        isWeekEnd: boolean;
        isToday: boolean;
        isAdjacent: boolean;
        isHidden: boolean;
        isStart: boolean;
        isSelected: boolean;
        isEnd: boolean;
        isSame: boolean;
        localized: string;
    }[];
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    next: null;
    prev: null;
    'update:modelValue': null;
}, string, {
    text: string;
    disabled: boolean;
    day: Record<string, any>;
    nextIcon: string;
    prevIcon: string;
    viewMode: "month" | "day" | "week";
    showAdjacentMonths: boolean;
    weekdays: number[];
    weeksInMonth: "static" | "dynamic";
    hideHeader: boolean;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
    hideWeekNumber: boolean;
}, {}, string, vue.SlotsType<Partial<{
    header: (arg: {
        title: string;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    event: (arg: {
        day?: Object | undefined;
        allDay: boolean;
        event: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: vue.PropType<"month" | "day" | "week">;
        default: string;
    };
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (StringConstructor | FunctionConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
    allowedDates: vue.PropType<unknown[] | ((date: unknown) => boolean)>;
    disabled: BooleanConstructor;
    displayValue: vue.PropType<unknown>;
    modelValue: vue.PropType<unknown[]>;
    month: (StringConstructor | NumberConstructor)[];
    max: vue.PropType<unknown>;
    min: vue.PropType<unknown>;
    showAdjacentMonths: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
    weekdays: {
        type: {
            (arrayLength: number): number[];
            (...items: number[]): number[];
            new (arrayLength: number): number[];
            new (...items: number[]): number[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => number[];
    };
    weeksInMonth: {
        type: vue.PropType<"static" | "dynamic">;
        default: string;
    };
    hideHeader: BooleanConstructor;
    hideWeekNumber: BooleanConstructor;
}, vue.ExtractPropTypes<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: vue.PropType<"month" | "day" | "week">;
        default: string;
    };
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (StringConstructor | FunctionConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
    allowedDates: vue.PropType<unknown[] | ((date: unknown) => boolean)>;
    disabled: BooleanConstructor;
    displayValue: vue.PropType<unknown>;
    modelValue: vue.PropType<unknown[]>;
    month: (StringConstructor | NumberConstructor)[];
    max: vue.PropType<unknown>;
    min: vue.PropType<unknown>;
    showAdjacentMonths: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
    weekdays: {
        type: {
            (arrayLength: number): number[];
            (...items: number[]): number[];
            new (arrayLength: number): number[];
            new (...items: number[]): number[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => number[];
    };
    weeksInMonth: {
        type: vue.PropType<"static" | "dynamic">;
        default: string;
    };
    hideHeader: BooleanConstructor;
    hideWeekNumber: BooleanConstructor;
}>>;
type VCalendar = InstanceType<typeof VCalendar>;

declare const VCalendarDay: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
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
        intervals: vue.ComputedRef<number[]>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
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
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
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
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
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
        intervals: vue.ComputedRef<number[]>;
    }, {}, {}, {}, {
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    day: Record<string, any>;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
} & {
    events?: any[] | undefined;
    dayIndex?: number | undefined;
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
    intervals: vue.ComputedRef<number[]>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    day: Record<string, any>;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (StringConstructor | FunctionConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
}, vue.ExtractPropTypes<{
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (StringConstructor | FunctionConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
}>>;
type VCalendarDay = InstanceType<typeof VCalendarDay>;

declare const VCalendarHeader: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
    } & {
        title?: string | undefined;
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
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:toToday"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:next': () => true;
        'click:prev': () => true;
        'click:toToday': () => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
    } & {
        title?: string | undefined;
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
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:toToday"?: (() => any) | undefined;
    }, {
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
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
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
    } & {
        title?: string | undefined;
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
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:toToday"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        text: string;
        nextIcon: string;
        prevIcon: string;
        viewMode: "month" | "day" | "week";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    text: string;
    nextIcon: string;
    prevIcon: string;
    viewMode: "month" | "day" | "week";
} & {
    title?: string | undefined;
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
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
    "onClick:toToday"?: (() => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:next': () => true;
    'click:prev': () => true;
    'click:toToday': () => true;
}, string, {
    text: string;
    nextIcon: string;
    prevIcon: string;
    viewMode: "month" | "day" | "week";
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "day" | "week">;
        default: string;
    };
}, vue.ExtractPropTypes<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "day" | "week">;
        default: string;
    };
}>>;
type VCalendarHeader = InstanceType<typeof VCalendarHeader>;

declare const VCalendarInterval: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        day: Record<string, any>;
        index: number;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
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
        interval: vue.ComputedRef<{
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        }>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        day: Record<string, any>;
        index: number;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
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
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
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
        day: Record<string, any>;
        index: number;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
    } & {
        events?: any[] | undefined;
        dayIndex?: number | undefined;
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
        interval: vue.ComputedRef<{
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        }>;
    }, {}, {}, {}, {
        day: Record<string, any>;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    day: Record<string, any>;
    index: number;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
} & {
    events?: any[] | undefined;
    dayIndex?: number | undefined;
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
    interval: vue.ComputedRef<{
        label: string;
        start: unknown;
        end: unknown;
        events: any[];
    }>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    day: Record<string, any>;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (StringConstructor | FunctionConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
}, vue.ExtractPropTypes<{
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (StringConstructor | FunctionConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
}>>;
type VCalendarInterval = InstanceType<typeof VCalendarInterval>;

declare const VCalendarIntervalEvent: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        allDay: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
    } & {
        event?: Record<string, any> | undefined;
        interval?: Record<string, any> | undefined;
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
        allDay: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
    } & {
        event?: Record<string, any> | undefined;
        interval?: Record<string, any> | undefined;
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
        allDay: boolean;
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
        allDay: boolean;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
    } & {
        event?: Record<string, any> | undefined;
        interval?: Record<string, any> | undefined;
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
        allDay: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    allDay: boolean;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
} & {
    event?: Record<string, any> | undefined;
    interval?: Record<string, any> | undefined;
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
    allDay: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    allDay: BooleanConstructor;
    interval: ObjectConstructor;
    intervalDivisions: {
        type: NumberConstructor;
        required: true;
    };
    intervalDuration: {
        type: NumberConstructor;
        required: true;
    };
    intervalHeight: {
        type: NumberConstructor;
        required: true;
    };
    event: ObjectConstructor;
}, vue.ExtractPropTypes<{
    allDay: BooleanConstructor;
    interval: ObjectConstructor;
    intervalDivisions: {
        type: NumberConstructor;
        required: true;
    };
    intervalDuration: {
        type: NumberConstructor;
        required: true;
    };
    intervalHeight: {
        type: NumberConstructor;
        required: true;
    };
    event: ObjectConstructor;
}>>;
type VCalendarIntervalEvent = InstanceType<typeof VCalendarIntervalEvent>;

declare const VCalendarMonthDay: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        active: boolean;
        disabled: boolean;
    } & {
        events?: any[] | undefined;
        title?: string | number | undefined;
        color?: string | undefined;
        day?: Record<string, any> | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            content?: (() => vue.VNodeChild) | undefined;
            title?: ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
            event?: ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            content?: false | (() => vue.VNodeChild) | undefined;
            title?: false | ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
            event?: false | ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:content"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
        "v-slot:event"?: false | ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        active: boolean;
        disabled: boolean;
    } & {
        events?: any[] | undefined;
        title?: string | number | undefined;
        color?: string | undefined;
        day?: Record<string, any> | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            content?: (() => vue.VNodeChild) | undefined;
            title?: ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
            event?: ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            content?: false | (() => vue.VNodeChild) | undefined;
            title?: false | ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
            event?: false | ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:content"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
        "v-slot:event"?: false | ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    }, {
        active: boolean;
        disabled: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        content: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: {
            title?: string | number | undefined;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        event: (arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
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
        active: boolean;
        disabled: boolean;
    } & {
        events?: any[] | undefined;
        title?: string | number | undefined;
        color?: string | undefined;
        day?: Record<string, any> | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            content?: (() => vue.VNodeChild) | undefined;
            title?: ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
            event?: ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            content?: false | (() => vue.VNodeChild) | undefined;
            title?: false | ((arg: {
                title?: string | number | undefined;
            }) => vue.VNodeChild) | undefined;
            event?: false | ((arg: {
                day?: Object | undefined;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:content"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
        "v-slot:event"?: false | ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        active: boolean;
        disabled: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    active: boolean;
    disabled: boolean;
} & {
    events?: any[] | undefined;
    title?: string | number | undefined;
    color?: string | undefined;
    day?: Record<string, any> | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        content?: (() => vue.VNodeChild) | undefined;
        title?: ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
        event?: ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        content?: false | (() => vue.VNodeChild) | undefined;
        title?: false | ((arg: {
            title?: string | number | undefined;
        }) => vue.VNodeChild) | undefined;
        event?: false | ((arg: {
            day?: Object | undefined;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:content"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: {
        title?: string | number | undefined;
    }) => vue.VNodeChild) | undefined;
    "v-slot:event"?: false | ((arg: {
        day?: Object | undefined;
        allDay: boolean;
        event: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    active: boolean;
    disabled: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    content: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: {
        title?: string | number | undefined;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    event: (arg: {
        day?: Object | undefined;
        allDay: boolean;
        event: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    active: BooleanConstructor;
    color: StringConstructor;
    day: ObjectConstructor;
    disabled: BooleanConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    title: (StringConstructor | NumberConstructor)[];
}, vue.ExtractPropTypes<{
    active: BooleanConstructor;
    color: StringConstructor;
    day: ObjectConstructor;
    disabled: BooleanConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
    title: (StringConstructor | NumberConstructor)[];
}>>;
type VCalendarMonthDay = InstanceType<typeof VCalendarMonthDay>;

type Density = null | 'default' | 'comfortable' | 'compact';

type ValidationResult = string | boolean;
type ValidationRule$1 = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VDateInput: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        header: string;
        title: string;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        tag: string;
        messages: string | readonly string[];
        placeholder: string;
        transition: string;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        prependIcon: NonNullable<IconValue>;
        clearIcon: IconValue;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        nextIcon: string;
        prevIcon: string;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        reverseTransition: string;
        cancelText: string;
        okText: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: NonNullable<NonNullable<"static" | "dynamic">>;
        hideWeekdays: boolean;
        showWeek: boolean;
        landscape: boolean;
        hideHeader: boolean;
        hideActions: boolean;
    } & {
        class?: any;
        id?: string | undefined;
        label?: string | undefined;
        text?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        name?: string | undefined;
        prefix?: string | undefined;
        loading?: string | boolean | undefined;
        counter?: string | number | boolean | undefined;
        month?: string | number | undefined;
        year?: number | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        multiple?: number | boolean | (string & {}) | "range" | undefined;
        role?: string | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        baseColor?: string | undefined;
        max?: unknown;
        bgColor?: string | undefined;
        appendIcon?: IconValue | undefined;
        appendInnerIcon?: IconValue | undefined;
        prependInnerIcon?: IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        min?: unknown;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayValue?: unknown;
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
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (val: string) => boolean;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        header: string;
        title: string;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        tag: string;
        messages: string | readonly string[];
        placeholder: string;
        transition: string;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        prependIcon: NonNullable<IconValue>;
        clearIcon: IconValue;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        nextIcon: string;
        prevIcon: string;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        reverseTransition: string;
        cancelText: string;
        okText: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: NonNullable<NonNullable<"static" | "dynamic">>;
        hideWeekdays: boolean;
        showWeek: boolean;
        landscape: boolean;
        hideHeader: boolean;
        hideActions: boolean;
    } & {
        class?: any;
        id?: string | undefined;
        label?: string | undefined;
        text?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        name?: string | undefined;
        prefix?: string | undefined;
        loading?: string | boolean | undefined;
        counter?: string | number | boolean | undefined;
        month?: string | number | undefined;
        year?: number | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        multiple?: number | boolean | (string & {}) | "range" | undefined;
        role?: string | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        baseColor?: string | undefined;
        max?: unknown;
        bgColor?: string | undefined;
        appendIcon?: IconValue | undefined;
        appendInnerIcon?: IconValue | undefined;
        prependInnerIcon?: IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        min?: unknown;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayValue?: unknown;
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
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, {
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        header: string;
        title: string;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        tag: string;
        messages: string | readonly string[];
        placeholder: string;
        transition: string;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        rounded: string | number | boolean;
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        prependIcon: NonNullable<IconValue>;
        clearIcon: IconValue;
        centerAffix: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        nextIcon: string;
        prevIcon: string;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        reverseTransition: string;
        cancelText: string;
        okText: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: NonNullable<NonNullable<"static" | "dynamic">>;
        hideWeekdays: boolean;
        showWeek: boolean;
        landscape: boolean;
        hideHeader: boolean;
        hideActions: boolean;
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
        flat: boolean;
        style: vue.StyleValue;
        header: string;
        title: string;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        tag: string;
        messages: string | readonly string[];
        placeholder: string;
        transition: string;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        prependIcon: NonNullable<IconValue>;
        clearIcon: IconValue;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        nextIcon: string;
        prevIcon: string;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        reverseTransition: string;
        cancelText: string;
        okText: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: NonNullable<NonNullable<"static" | "dynamic">>;
        hideWeekdays: boolean;
        showWeek: boolean;
        landscape: boolean;
        hideHeader: boolean;
        hideActions: boolean;
    } & {
        class?: any;
        id?: string | undefined;
        label?: string | undefined;
        text?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        name?: string | undefined;
        prefix?: string | undefined;
        loading?: string | boolean | undefined;
        counter?: string | number | boolean | undefined;
        month?: string | number | undefined;
        year?: number | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        multiple?: number | boolean | (string & {}) | "range" | undefined;
        role?: string | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        baseColor?: string | undefined;
        max?: unknown;
        bgColor?: string | undefined;
        appendIcon?: IconValue | undefined;
        appendInnerIcon?: IconValue | undefined;
        prependInnerIcon?: IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        min?: unknown;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayValue?: unknown;
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
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, {}, {}, {}, {}, {
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        header: string;
        title: string;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        tag: string;
        messages: string | readonly string[];
        placeholder: string;
        transition: string;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        rounded: string | number | boolean;
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        prependIcon: NonNullable<IconValue>;
        clearIcon: IconValue;
        centerAffix: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        nextIcon: string;
        prevIcon: string;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        reverseTransition: string;
        cancelText: string;
        okText: string;
        modeIcon: string;
        viewMode: "month" | "year" | "months";
        showAdjacentMonths: boolean;
        weekdays: number[];
        weeksInMonth: NonNullable<NonNullable<"static" | "dynamic">>;
        hideWeekdays: boolean;
        showWeek: boolean;
        landscape: boolean;
        hideHeader: boolean;
        hideActions: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    flat: boolean;
    style: vue.StyleValue;
    header: string;
    title: string;
    type: string;
    active: boolean;
    error: boolean;
    disabled: boolean;
    tag: string;
    messages: string | readonly string[];
    placeholder: string;
    transition: string;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly ValidationRule$1[];
    variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
    tile: boolean;
    density: Density;
    direction: "horizontal" | "vertical";
    prependIcon: NonNullable<IconValue>;
    clearIcon: IconValue;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    nextIcon: string;
    prevIcon: string;
    autofocus: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    reverseTransition: string;
    cancelText: string;
    okText: string;
    modeIcon: string;
    viewMode: "month" | "year" | "months";
    showAdjacentMonths: boolean;
    weekdays: number[];
    weeksInMonth: NonNullable<NonNullable<"static" | "dynamic">>;
    hideWeekdays: boolean;
    showWeek: boolean;
    landscape: boolean;
    hideHeader: boolean;
    hideActions: boolean;
} & {
    class?: any;
    id?: string | undefined;
    label?: string | undefined;
    text?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    color?: string | undefined;
    name?: string | undefined;
    prefix?: string | undefined;
    loading?: string | boolean | undefined;
    counter?: string | number | boolean | undefined;
    month?: string | number | undefined;
    year?: number | undefined;
    border?: string | number | boolean | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    modelValue?: any;
    validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
    validationValue?: any;
    rounded?: string | number | boolean | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    multiple?: number | boolean | (string & {}) | "range" | undefined;
    role?: string | undefined;
    elevation?: string | number | undefined;
    location?: Anchor | undefined;
    baseColor?: string | undefined;
    max?: unknown;
    bgColor?: string | undefined;
    appendIcon?: IconValue | undefined;
    appendInnerIcon?: IconValue | undefined;
    prependInnerIcon?: IconValue | undefined;
    'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
    centerAffix?: boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    suffix?: string | undefined;
    counterValue?: number | ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
    min?: unknown;
    allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
    displayValue?: unknown;
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
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: string) => boolean;
}, string, {
    reverse: boolean;
    flat: boolean;
    style: vue.StyleValue;
    header: string;
    title: string;
    type: string;
    active: boolean;
    error: boolean;
    disabled: boolean;
    tag: string;
    messages: string | readonly string[];
    placeholder: string;
    transition: string;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly ValidationRule$1[];
    rounded: string | number | boolean;
    variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
    tile: boolean;
    density: Density;
    direction: "horizontal" | "vertical";
    prependIcon: NonNullable<IconValue>;
    clearIcon: IconValue;
    centerAffix: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    nextIcon: string;
    prevIcon: string;
    autofocus: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    reverseTransition: string;
    cancelText: string;
    okText: string;
    modeIcon: string;
    viewMode: "month" | "year" | "months";
    showAdjacentMonths: boolean;
    weekdays: number[];
    weeksInMonth: NonNullable<NonNullable<"static" | "dynamic">>;
    hideWeekdays: boolean;
    showWeek: boolean;
    landscape: boolean;
    hideHeader: boolean;
    hideActions: boolean;
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
    header: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: vue.PropType<string>;
        default: string;
    };
    text: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    month: (StringConstructor | NumberConstructor)[];
    year: NumberConstructor;
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    transition: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    modelValue: null;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    multiple: vue.PropType<number | boolean | (string & {}) | "range">;
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    location: vue.PropType<Anchor>;
    max: vue.PropType<unknown>;
    bgColor: StringConstructor;
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    min: vue.PropType<unknown>;
    reverseTransition: {
        type: StringConstructor;
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    viewMode: {
        type: vue.PropType<"month" | "year" | "months">;
        default: string;
    };
    showAdjacentMonths: BooleanConstructor;
    weekdays: {
        type: {
            (arrayLength: number): number[];
            (...items: number[]): number[];
            new (arrayLength: number): number[];
            new (...items: number[]): number[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => number[];
    };
    weeksInMonth: Omit<Omit<{
        type: vue.PropType<"static" | "dynamic">;
        default: string;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<"static" | "dynamic">>;
        default: NonNullable<"static" | "dynamic">;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<NonNullable<"static" | "dynamic">>>;
        default: NonNullable<NonNullable<"static" | "dynamic">>;
    };
    allowedDates: vue.PropType<unknown[] | ((date: unknown) => boolean)>;
    displayValue: vue.PropType<unknown>;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    landscape: BooleanConstructor;
    hideHeader: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    appendInnerIcon: vue.PropType<IconValue>;
    clearable: BooleanConstructor;
    clearIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    baseColor: StringConstructor;
    dirty: BooleanConstructor;
    error: BooleanConstructor;
    flat: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: vue.PropType<IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: vue.PropType<"underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': vue.PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': vue.PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': vue.PropType<(args_0: MouseEvent) => void>;
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: vue.PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: vue.PropType<readonly ValidationRule$1[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined>;
    validationValue: null;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    prependIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    hideDetails: vue.PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<(args_0: MouseEvent) => void>;
    'onClick:append': vue.PropType<(args_0: MouseEvent) => void>;
    autofocus: BooleanConstructor;
    counter: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    counterValue: vue.PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: {
        type: vue.PropType<string>;
        default: string;
    };
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: vue.PropType<Record<string, boolean>>;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    header: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: vue.PropType<string>;
        default: string;
    };
    text: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    month: (StringConstructor | NumberConstructor)[];
    year: NumberConstructor;
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    transition: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    modelValue: null;
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    multiple: vue.PropType<number | boolean | (string & {}) | "range">;
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    location: vue.PropType<Anchor>;
    max: vue.PropType<unknown>;
    bgColor: StringConstructor;
    nextIcon: {
        type: StringConstructor[];
        default: string;
    };
    prevIcon: {
        type: StringConstructor[];
        default: string;
    };
    min: vue.PropType<unknown>;
    reverseTransition: {
        type: StringConstructor;
        default: string;
    };
    modeIcon: {
        type: StringConstructor[];
        default: string;
    };
    viewMode: {
        type: vue.PropType<"month" | "year" | "months">;
        default: string;
    };
    showAdjacentMonths: BooleanConstructor;
    weekdays: {
        type: {
            (arrayLength: number): number[];
            (...items: number[]): number[];
            new (arrayLength: number): number[];
            new (...items: number[]): number[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => number[];
    };
    weeksInMonth: Omit<Omit<{
        type: vue.PropType<"static" | "dynamic">;
        default: string;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<"static" | "dynamic">>;
        default: NonNullable<"static" | "dynamic">;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<NonNullable<"static" | "dynamic">>>;
        default: NonNullable<NonNullable<"static" | "dynamic">>;
    };
    allowedDates: vue.PropType<unknown[] | ((date: unknown) => boolean)>;
    displayValue: vue.PropType<unknown>;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    landscape: BooleanConstructor;
    hideHeader: {
        type: vue.PropType<boolean>;
        default: boolean;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    appendInnerIcon: vue.PropType<IconValue>;
    clearable: BooleanConstructor;
    clearIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    baseColor: StringConstructor;
    dirty: BooleanConstructor;
    error: BooleanConstructor;
    flat: BooleanConstructor;
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: vue.PropType<IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: vue.PropType<"underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': vue.PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': vue.PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': vue.PropType<(args_0: MouseEvent) => void>;
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: vue.PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: vue.PropType<readonly ValidationRule$1[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined>;
    validationValue: null;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    prependIcon: {
        type: vue.PropType<NonNullable<IconValue>>;
        default: NonNullable<IconValue>;
    };
    hideDetails: vue.PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<(args_0: MouseEvent) => void>;
    'onClick:append': vue.PropType<(args_0: MouseEvent) => void>;
    autofocus: BooleanConstructor;
    counter: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    counterValue: vue.PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: {
        type: vue.PropType<string>;
        default: string;
    };
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: vue.PropType<Record<string, boolean>>;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
}>>;
type VDateInput = InstanceType<typeof VDateInput>;

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

type VMessageSlot = {
    message: string;
};

type VCounterSlot = {
    counter: string;
    max: string | number | undefined;
    value: string | number | undefined;
};

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

interface DefaultInputSlot {
    isActive: Ref<boolean>;
    isFocused: Ref<boolean>;
    controlRef: Ref<HTMLElement | undefined>;
    focus: () => void;
    blur: () => void;
}

type ControlSlot = {
    click: (e: MouseEvent) => void;
};
type ControlVariant = 'default' | 'stacked' | 'split';
declare const VNumberInput: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        inset: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        max: number;
        clearIcon: IconValue;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        min: number;
        step: number;
        hideInput: boolean;
        controlVariant: ControlVariant;
    } & {
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
        modelValue?: any;
        validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        role?: string | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            clear?: ((arg: DefaultInputSlot & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            label?: ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            counter?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            increment?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            decrement?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            clear?: false | ((arg: DefaultInputSlot & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            label?: false | ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            counter?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            increment?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            decrement?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:clear"?: false | ((arg: DefaultInputSlot & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:increment"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:decrement"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (val: number) => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        inset: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        max: number;
        clearIcon: IconValue;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        min: number;
        step: number;
        hideInput: boolean;
        controlVariant: ControlVariant;
    } & {
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
        modelValue?: any;
        validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        role?: string | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            clear?: ((arg: DefaultInputSlot & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            label?: ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            counter?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            increment?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            decrement?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            clear?: false | ((arg: DefaultInputSlot & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            label?: false | ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            counter?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            increment?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            decrement?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:clear"?: false | ((arg: DefaultInputSlot & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:increment"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:decrement"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    }, {
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        rounded: string | number | boolean;
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        inset: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        max: number;
        clearIcon: IconValue;
        centerAffix: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        min: number;
        step: number;
        hideInput: boolean;
        controlVariant: ControlVariant;
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
        counter: (arg: VCounterSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        increment: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        decrement: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        inset: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        max: number;
        clearIcon: IconValue;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        min: number;
        step: number;
        hideInput: boolean;
        controlVariant: ControlVariant;
    } & {
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
        modelValue?: any;
        validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        role?: string | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            clear?: ((arg: DefaultInputSlot & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            label?: ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            counter?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            increment?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            decrement?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            clear?: false | ((arg: DefaultInputSlot & {
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            label?: false | ((arg: DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            counter?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
            message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
            prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
            increment?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
            decrement?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:clear"?: false | ((arg: DefaultInputSlot & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:increment"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:decrement"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        reverse: boolean;
        flat: boolean;
        style: vue.StyleValue;
        type: string;
        active: boolean;
        error: boolean;
        disabled: boolean;
        messages: string | readonly string[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly ValidationRule$1[];
        rounded: string | number | boolean;
        variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
        inset: boolean;
        tile: boolean;
        density: Density;
        direction: "horizontal" | "vertical";
        max: number;
        clearIcon: IconValue;
        centerAffix: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        autofocus: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        min: number;
        step: number;
        hideInput: boolean;
        controlVariant: ControlVariant;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    flat: boolean;
    style: vue.StyleValue;
    type: string;
    active: boolean;
    error: boolean;
    disabled: boolean;
    messages: string | readonly string[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly ValidationRule$1[];
    variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
    inset: boolean;
    tile: boolean;
    density: Density;
    direction: "horizontal" | "vertical";
    max: number;
    clearIcon: IconValue;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    autofocus: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    min: number;
    step: number;
    hideInput: boolean;
    controlVariant: ControlVariant;
} & {
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
    modelValue?: any;
    validateOn?: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
    validationValue?: any;
    rounded?: string | number | boolean | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    role?: string | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
    centerAffix?: boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    suffix?: string | undefined;
    counterValue?: number | ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        clear?: ((arg: DefaultInputSlot & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        details?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        label?: ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        counter?: ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        message?: ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        prepend?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        append?: ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'prepend-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        'append-inner'?: ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        increment?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        decrement?: ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        clear?: false | ((arg: DefaultInputSlot & {
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        details?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        label?: false | ((arg: DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        counter?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
        message?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
        prepend?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        append?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'prepend-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        'append-inner'?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
        increment?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
        decrement?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:clear"?: false | ((arg: DefaultInputSlot & {
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: VCounterSlot) => vue.VNodeChild) | undefined;
    "v-slot:message"?: false | ((arg: VMessageSlot) => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: DefaultInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:increment"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
    "v-slot:decrement"?: false | ((arg: ControlSlot) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: number) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: number) => true;
}, string, {
    reverse: boolean;
    flat: boolean;
    style: vue.StyleValue;
    type: string;
    active: boolean;
    error: boolean;
    disabled: boolean;
    messages: string | readonly string[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly ValidationRule$1[];
    rounded: string | number | boolean;
    variant: "underlined" | "filled" | "outlined" | "plain" | "solo" | "solo-inverted" | "solo-filled";
    inset: boolean;
    tile: boolean;
    density: Density;
    direction: "horizontal" | "vertical";
    max: number;
    clearIcon: IconValue;
    centerAffix: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    autofocus: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    min: number;
    step: number;
    hideInput: boolean;
    controlVariant: ControlVariant;
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
    counter: (arg: VCounterSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    increment: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    decrement: (arg: ControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
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
        type: PropType<readonly ValidationRule$1[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined>;
    validationValue: null;
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
    role: StringConstructor;
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
    dirty: BooleanConstructor;
    persistentClear: BooleanConstructor;
    singleLine: BooleanConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    counterValue: PropType<number | ((value: any) => number)>;
    modelModifiers: PropType<Record<string, boolean>>;
    controlVariant: {
        type: PropType<ControlVariant>;
        default: string;
    };
    inset: BooleanConstructor;
    hideInput: BooleanConstructor;
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
}, vue.ExtractPropTypes<{
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
        type: PropType<readonly ValidationRule$1[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined>;
    validationValue: null;
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
    role: StringConstructor;
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
    dirty: BooleanConstructor;
    persistentClear: BooleanConstructor;
    singleLine: BooleanConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    counterValue: PropType<number | ((value: any) => number)>;
    modelModifiers: PropType<Record<string, boolean>>;
    controlVariant: {
        type: PropType<ControlVariant>;
        default: string;
    };
    inset: BooleanConstructor;
    hideInput: BooleanConstructor;
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
}>>;
type VNumberInput = InstanceType<typeof VNumberInput>;

declare const VPicker: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        tag: string;
        tile: boolean;
        landscape: boolean;
        hideHeader: boolean;
    } & {
        class?: any;
        title?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            header?: (() => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        tag: string;
        tile: boolean;
        landscape: boolean;
        hideHeader: boolean;
    } & {
        class?: any;
        title?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            header?: (() => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        style: vue.StyleValue;
        tag: string;
        rounded: string | number | boolean;
        tile: boolean;
        landscape: boolean;
        hideHeader: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        header: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        tile: boolean;
        landscape: boolean;
        hideHeader: boolean;
    } & {
        class?: any;
        title?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        border?: string | number | boolean | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        elevation?: string | number | undefined;
        location?: Anchor | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            header?: (() => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        tag: string;
        rounded: string | number | boolean;
        tile: boolean;
        landscape: boolean;
        hideHeader: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
    tile: boolean;
    landscape: boolean;
    hideHeader: boolean;
} & {
    class?: any;
    title?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    color?: string | undefined;
    border?: string | number | boolean | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    rounded?: string | number | boolean | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    elevation?: string | number | undefined;
    location?: Anchor | undefined;
    bgColor?: string | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        header?: (() => vue.VNodeChild) | undefined;
        default?: (() => vue.VNodeChild) | undefined;
        actions?: (() => vue.VNodeChild) | undefined;
        title?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        header?: false | (() => vue.VNodeChild) | undefined;
        default?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | (() => vue.VNodeChild) | undefined;
        title?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:header"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    style: vue.StyleValue;
    tag: string;
    rounded: string | number | boolean;
    tile: boolean;
    landscape: boolean;
    hideHeader: boolean;
}, {}, string, vue.SlotsType<Partial<{
    header: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
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
        type: vue.PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
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
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
    hideHeader: BooleanConstructor;
}, vue.ExtractPropTypes<{
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
        type: vue.PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
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
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
    hideHeader: BooleanConstructor;
}>>;
type VPicker = InstanceType<typeof VPicker>;

declare const VPickerTitle: {
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
type VPickerTitle = InstanceType<typeof VPickerTitle>;

declare const breakpoints: readonly ["sm", "md", "lg", "xl", "xxl"];
type Breakpoint = typeof breakpoints[number];
type DisplayBreakpoint = 'xs' | Breakpoint;

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
type VListItemSlots = {
    prepend: ListItemSlot;
    append: ListItemSlot;
    default: ListItemSlot;
    title: ListItemTitleSlot;
    subtitle: ListItemSubtitleSlot;
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

interface InternalListItem<T = any> extends ListItem<T> {
    type?: 'item' | 'subheader' | 'divider';
}

declare const VSnackbar: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        modelValue: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
        timeout: string | number;
    } & {
        class?: any;
        text?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
        color?: string | undefined;
        offset?: string | number | number[] | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        contentClass?: any;
        opacity?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        timer?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }> & Omit<{
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
            class?: any;
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
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            class?: any;
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
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, "style" | "disabled" | "absolute" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterEnter") => void) & ((event: "afterLeave") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            class?: any;
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
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, {
            activatorEl: Ref<HTMLElement | undefined>;
            scrimEl: Ref<HTMLElement | undefined>;
            target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: Ref<HTMLElement | undefined>;
            globalTop: Readonly<Ref<boolean>>;
            localTop: vue.ComputedRef<boolean>;
            updateLocation: Ref<((e: Event) => void) | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:outside': (e: MouseEvent) => true;
            'update:modelValue': (value: boolean) => true;
            afterEnter: () => true;
            afterLeave: () => true;
        }, string, {
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isActive: Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Omit<{
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        class?: any;
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
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, "target" | "activatorEl" | "scrimEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "updateLocation"> & vue.ShallowUnwrapRef<{
        activatorEl: Ref<HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: Ref<((e: Event) => void) | undefined>;
    }> & {} & vue.ComponentCustomProperties & {}, "class" | "width" | "height" | "theme" | "key" | "target" | "v-slot:default" | "$children" | "v-slots" | "ref" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "offset" | "onUpdate:modelValue" | "contentClass" | "opacity" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onAfterEnter" | "onAfterLeave" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("style" | "disabled" | "absolute" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (v: boolean) => boolean;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        modelValue: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
        timeout: string | number;
    } & {
        class?: any;
        text?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
        color?: string | undefined;
        offset?: string | number | number[] | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        contentClass?: any;
        opacity?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        timer?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, {
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        modelValue: boolean;
        rounded: string | number | boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
        timeout: string | number;
    }, true, {}, vue.SlotsType<Partial<{
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: {
            isActive: Ref<boolean>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        text: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        modelValue: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
        timeout: string | number;
    } & {
        class?: any;
        text?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
        color?: string | undefined;
        offset?: string | number | number[] | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        contentClass?: any;
        opacity?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        timer?: string | boolean | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }> & Omit<{
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
            class?: any;
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
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            class?: any;
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
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, "style" | "disabled" | "absolute" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterEnter") => void) & ((event: "afterLeave") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            class?: any;
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
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, {
            activatorEl: Ref<HTMLElement | undefined>;
            scrimEl: Ref<HTMLElement | undefined>;
            target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: Ref<HTMLElement | undefined>;
            globalTop: Readonly<Ref<boolean>>;
            localTop: vue.ComputedRef<boolean>;
            updateLocation: Ref<((e: Event) => void) | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:outside': (e: MouseEvent) => true;
            'update:modelValue': (value: boolean) => true;
            afterEnter: () => true;
            afterLeave: () => true;
        }, string, {
            style: vue.StyleValue;
            disabled: boolean;
            absolute: boolean;
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            });
            zIndex: string | number;
            modelValue: boolean;
            origin: Anchor | "auto" | "overlap";
            eager: boolean;
            location: Anchor;
            locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | "connected";
            scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isActive: Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Omit<{
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        class?: any;
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
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, "target" | "activatorEl" | "scrimEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "updateLocation"> & vue.ShallowUnwrapRef<{
        activatorEl: Ref<HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: Ref<((e: Event) => void) | undefined>;
    }> & {} & vue.ComponentCustomProperties & {}, "class" | "width" | "height" | "theme" | "key" | "target" | "v-slot:default" | "$children" | "v-slots" | "ref" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "offset" | "onUpdate:modelValue" | "contentClass" | "opacity" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onAfterEnter" | "onAfterLeave" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("style" | "disabled" | "absolute" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, {}, {}, {}, {
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        modelValue: boolean;
        rounded: string | number | boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
        timeout: string | number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    disabled: boolean;
    absolute: boolean;
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    zIndex: string | number;
    modelValue: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    origin: Anchor | "auto" | "overlap";
    vertical: boolean;
    tile: boolean;
    eager: boolean;
    location: Anchor;
    locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined) | "connected";
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    multiLine: boolean;
    timeout: string | number;
} & {
    class?: any;
    text?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
    color?: string | undefined;
    offset?: string | number | number[] | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    rounded?: string | number | boolean | undefined;
    contentClass?: any;
    opacity?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
    timer?: string | boolean | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        default?: (() => vue.VNodeChild) | undefined;
        actions?: ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        text?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        default?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        text?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: {
        isActive: Ref<boolean>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
}, Omit<Omit<{
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    }> & Omit<{
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
        class?: any;
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
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        class?: any;
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
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, "style" | "disabled" | "absolute" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
    $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
    $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterEnter") => void) & ((event: "afterLeave") => void);
    $el: any;
    $options: vue.ComponentOptionsBase<{
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        class?: any;
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
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, {
        activatorEl: Ref<HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: Ref<((e: Event) => void) | undefined>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:outside': (e: MouseEvent) => true;
        'update:modelValue': (value: boolean) => true;
        afterEnter: () => true;
        afterLeave: () => true;
    }, string, {
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        });
        zIndex: string | number;
        modelValue: boolean;
        origin: Anchor | "auto" | "overlap";
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    }, {}, string, vue.SlotsType<Partial<{
        default: (arg: {
            isActive: Ref<boolean>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    $nextTick: typeof nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
} & Omit<{
    style: vue.StyleValue;
    disabled: boolean;
    absolute: boolean;
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    });
    zIndex: string | number;
    modelValue: boolean;
    origin: Anchor | "auto" | "overlap";
    eager: boolean;
    location: Anchor;
    locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined) | "connected";
    scrollStrategy: "close" | "none" | "block" | ((data: ScrollStrategyData, props: StrategyProps$1, scope: vue.EffectScope) => void) | "reposition";
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    _disableGlobalStack: boolean;
} & {
    class?: any;
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
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        isActive: Ref<boolean>;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isActive: Ref<boolean>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: TemplateRef;
    }) => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onAfterEnter?: (() => any) | undefined;
    onAfterLeave?: (() => any) | undefined;
    "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
}, "target" | "activatorEl" | "scrimEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "updateLocation"> & vue.ShallowUnwrapRef<{
    activatorEl: Ref<HTMLElement | undefined>;
    scrimEl: Ref<HTMLElement | undefined>;
    target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
    animateClick: () => void;
    contentEl: Ref<HTMLElement | undefined>;
    globalTop: Readonly<Ref<boolean>>;
    localTop: vue.ComputedRef<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}> & {} & vue.ComponentCustomProperties & {}, "class" | "width" | "height" | "theme" | "key" | "target" | "v-slot:default" | "$children" | "v-slots" | "ref" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "offset" | "onUpdate:modelValue" | "contentClass" | "opacity" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onAfterEnter" | "onAfterLeave" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("style" | "disabled" | "absolute" | "transition" | "zIndex" | "modelValue" | "origin" | "eager" | "location" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: boolean) => boolean;
}, string, {
    style: vue.StyleValue;
    disabled: boolean;
    absolute: boolean;
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    zIndex: string | number;
    modelValue: boolean;
    rounded: string | number | boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    origin: Anchor | "auto" | "overlap";
    vertical: boolean;
    tile: boolean;
    eager: boolean;
    location: Anchor;
    locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined) | "connected";
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    multiLine: boolean;
    timeout: string | number;
}, {}, string, vue.SlotsType<Partial<{
    activator: (arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: {
        isActive: Ref<boolean>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    text: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    target: vue.PropType<Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined>;
    disabled: BooleanConstructor;
    offset: vue.PropType<string | number | number[] | undefined>;
    absolute: BooleanConstructor;
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: BooleanConstructor;
    contentClass: null;
    origin: {
        type: vue.PropType<Anchor | "auto" | "overlap">;
        default: string;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    eager: BooleanConstructor;
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    activator: vue.PropType<Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined>;
    locationStrategy: {
        type: vue.PropType<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected">;
        default: string;
        validator: (val: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentProps: null;
    attach: vue.PropType<string | boolean | Element>;
    color: StringConstructor;
    variant: {
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: vue.PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    multiLine: BooleanConstructor;
    text: StringConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
}, vue.ExtractPropTypes<{
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    target: vue.PropType<Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined>;
    disabled: BooleanConstructor;
    offset: vue.PropType<string | number | number[] | undefined>;
    absolute: BooleanConstructor;
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "default" | "type"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: BooleanConstructor;
    contentClass: null;
    origin: {
        type: vue.PropType<Anchor | "auto" | "overlap">;
        default: string;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    eager: BooleanConstructor;
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    activator: vue.PropType<Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined>;
    locationStrategy: {
        type: vue.PropType<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected">;
        default: string;
        validator: (val: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentProps: null;
    attach: vue.PropType<string | boolean | Element>;
    color: StringConstructor;
    variant: {
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: vue.PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    multiLine: BooleanConstructor;
    text: StringConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
}>>;
type VSnackbar = InstanceType<typeof VSnackbar>;

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

declare const VPullToRefresh: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        pullDownThreshold: number;
    } & {} & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            pullDownPanel?: ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            pullDownPanel?: false | ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:pullDownPanel"?: false | ((arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
        }) => vue.VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            done: () => void;
        }) => any) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        load: (options: {
            done: () => void;
        }) => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        pullDownThreshold: number;
    } & {} & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            pullDownPanel?: ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            pullDownPanel?: false | ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:pullDownPanel"?: false | ((arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
        }) => vue.VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            done: () => void;
        }) => any) | undefined;
    }, {
        pullDownThreshold: number;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        pullDownPanel: (arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
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
        pullDownThreshold: number;
    } & {} & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            pullDownPanel?: ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            pullDownPanel?: false | ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:pullDownPanel"?: false | ((arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
        }) => vue.VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            done: () => void;
        }) => any) | undefined;
    }, {}, {}, {}, {}, {
        pullDownThreshold: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    pullDownThreshold: number;
} & {} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        pullDownPanel?: ((arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
        }) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        pullDownPanel?: false | ((arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:pullDownPanel"?: false | ((arg: {
        canRefresh: boolean;
        goingUp: boolean;
        refreshing: boolean;
    }) => vue.VNodeChild) | undefined;
} & {
    onLoad?: ((options: {
        done: () => void;
    }) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    load: (options: {
        done: () => void;
    }) => true;
}, string, {
    pullDownThreshold: number;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    pullDownPanel: (arg: {
        canRefresh: boolean;
        goingUp: boolean;
        refreshing: boolean;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    pullDownThreshold: {
        type: NumberConstructor;
        default: number;
    };
}, vue.ExtractPropTypes<{
    pullDownThreshold: {
        type: NumberConstructor;
        default: number;
    };
}>>;
type VPullToRefresh = InstanceType<typeof VPullToRefresh>;

type VSnackbarQueueSlots<T extends string | SnackbarMessage> = {
    default: {
        item: T;
    };
    text: {
        item: T;
    };
    actions: {
        item: T;
        props: {
            onClick: () => void;
        };
    };
};
type SnackbarMessage = Omit<VSnackbar['$props'], '$children' | 'modelValue' | 'onUpdate:modelValue' | 'activator' | 'activatorProps' | 'closeDelay' | 'openDelay' | 'openOnClick' | 'openOnFocus' | 'openOnHover'>;
declare const VSnackbarQueue: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        closeText: string;
        multiLine: boolean;
        timeout: string | number;
    } & {
        class?: any;
        text?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
        color?: string | undefined;
        offset?: string | number | number[] | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        contentClass?: any;
        opacity?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        closable?: string | boolean | undefined;
        activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        timer?: string | boolean | undefined;
    } & {}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'update:modelValue': (val: (string | SnackbarMessage)[]) => true;
    }, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "v-slot:text" | "update:modelValue" | "v-slot:actions">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        closeText: string;
        multiLine: boolean;
        timeout: string | number;
    } & {
        class?: any;
        text?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
        color?: string | undefined;
        offset?: string | number | number[] | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        contentClass?: any;
        opacity?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        closable?: string | boolean | undefined;
        activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        timer?: string | boolean | undefined;
    } & {}, {
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        rounded: string | number | boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        closeText: string;
        multiLine: boolean;
        timeout: string | number;
    }, true, {}, vue.SlotsType<Partial<{
        default: (arg: {
            item: string | SnackbarMessage;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        text: (arg: {
            item: string | SnackbarMessage;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: {
            item: string | SnackbarMessage;
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
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        closeText: string;
        multiLine: boolean;
        timeout: string | number;
    } & {
        class?: any;
        text?: string | undefined;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
        color?: string | undefined;
        offset?: string | number | number[] | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        rounded?: string | number | boolean | undefined;
        contentClass?: any;
        opacity?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        closable?: string | boolean | undefined;
        activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        timer?: string | boolean | undefined;
    } & {}, {}, {}, {}, {}, {
        style: vue.StyleValue;
        disabled: boolean;
        absolute: boolean;
        transition: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        zIndex: string | number;
        rounded: string | number | boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        origin: Anchor | "auto" | "overlap";
        vertical: boolean;
        tile: boolean;
        eager: boolean;
        location: Anchor;
        locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        closeText: string;
        multiLine: boolean;
        timeout: string | number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    disabled: boolean;
    absolute: boolean;
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    zIndex: string | number;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    origin: Anchor | "auto" | "overlap";
    vertical: boolean;
    tile: boolean;
    eager: boolean;
    location: Anchor;
    locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined) | "connected";
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    closeText: string;
    multiLine: boolean;
    timeout: string | number;
} & {
    class?: any;
    text?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    target?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined;
    color?: string | undefined;
    offset?: string | number | number[] | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    rounded?: string | number | boolean | undefined;
    contentClass?: any;
    opacity?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    closable?: string | boolean | undefined;
    activator?: Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
    timer?: string | boolean | undefined;
} & {}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (val: (string | SnackbarMessage)[]) => true;
}, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "v-slot:text" | "update:modelValue" | "v-slot:actions">, string, {
    style: vue.StyleValue;
    disabled: boolean;
    absolute: boolean;
    transition: NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })>;
    zIndex: string | number;
    rounded: string | number | boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    origin: Anchor | "auto" | "overlap";
    vertical: boolean;
    tile: boolean;
    eager: boolean;
    location: Anchor;
    locationStrategy: "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined) | "connected";
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    closeText: string;
    multiLine: boolean;
    timeout: string | number;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        item: string | SnackbarMessage;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    text: (arg: {
        item: string | SnackbarMessage;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: {
        item: string | SnackbarMessage;
        props: {
            onClick: () => void;
        };
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T extends readonly (string | SnackbarMessage)[]>(props: {
    modelValue?: T | undefined;
    'onUpdate:modelValue'?: ((val: T) => void) | undefined;
}, slots: VSnackbarQueueSlots<T[number]>) => GenericProps<{
    modelValue?: T | undefined;
    'onUpdate:modelValue'?: ((val: T) => void) | undefined;
}, VSnackbarQueueSlots<T[number]>>) & FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    text: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    target: PropType<Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined>;
    color: StringConstructor;
    disabled: BooleanConstructor;
    offset: PropType<string | number | number[] | undefined>;
    absolute: BooleanConstructor;
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
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    };
    contentClass: null;
    origin: {
        type: PropType<Anchor | "auto" | "overlap">;
        default: string;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    vertical: BooleanConstructor;
    tile: BooleanConstructor;
    eager: BooleanConstructor;
    location: {
        type: PropType<Anchor>;
        default: string;
    };
    activator: PropType<Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined>;
    locationStrategy: {
        type: PropType<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected">;
        default: string;
        validator: (val: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activatorProps: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentProps: null;
    attach: PropType<string | boolean | Element>;
    multiLine: BooleanConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    closable: (StringConstructor | BooleanConstructor)[];
    closeText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<readonly (string | SnackbarMessage)[]>;
        default: () => never[];
    };
}, vue.ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    text: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    target: PropType<Element | vue.ComponentPublicInstance | (string & {}) | "parent" | "cursor" | [x: number, y: number] | undefined>;
    color: StringConstructor;
    disabled: BooleanConstructor;
    offset: PropType<string | number | number[] | undefined>;
    absolute: BooleanConstructor;
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
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    variant: {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    };
    contentClass: null;
    origin: {
        type: PropType<Anchor | "auto" | "overlap">;
        default: string;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    vertical: BooleanConstructor;
    tile: BooleanConstructor;
    eager: BooleanConstructor;
    location: {
        type: PropType<Anchor>;
        default: string;
    };
    activator: PropType<Element | vue.ComponentPublicInstance | (string & {}) | "parent" | undefined>;
    locationStrategy: {
        type: PropType<"static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined) | "connected">;
        default: string;
        validator: (val: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activatorProps: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentProps: null;
    attach: PropType<string | boolean | Element>;
    multiLine: BooleanConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    closable: (StringConstructor | BooleanConstructor)[];
    closeText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<readonly (string | SnackbarMessage)[]>;
        default: () => never[];
    };
}>>;
type VSnackbarQueue = InstanceType<typeof VSnackbarQueue>;

type Period$1 = 'am' | 'pm';
type AllowFunction = (val: number) => boolean;

declare const VTimePicker: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        title: string;
        disabled: boolean;
        tag: string;
        format: "ampm" | "24hr";
        readonly: boolean;
        tile: boolean;
        scrollable: boolean;
        hideHeader: boolean;
        useSeconds: boolean;
        ampmInTitle: boolean;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
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
        max?: string | undefined;
        bgColor?: string | undefined;
        min?: string | undefined;
        allowedHours?: number[] | AllowFunction | undefined;
        allowedMinutes?: number[] | AllowFunction | undefined;
        allowedSeconds?: number[] | AllowFunction | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:period"?: ((val: Period$1) => any) | undefined;
        "onUpdate:hour"?: ((val: number) => any) | undefined;
        "onUpdate:minute"?: ((val: number) => any) | undefined;
        "onUpdate:second"?: ((val: number) => any) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:hour': (val: number) => number;
        'update:minute': (val: number) => number;
        'update:period': (val: Period$1) => Period$1;
        'update:second': (val: number) => number;
        'update:modelValue': (val: string) => string;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        title: string;
        disabled: boolean;
        tag: string;
        format: "ampm" | "24hr";
        readonly: boolean;
        tile: boolean;
        scrollable: boolean;
        hideHeader: boolean;
        useSeconds: boolean;
        ampmInTitle: boolean;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
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
        max?: string | undefined;
        bgColor?: string | undefined;
        min?: string | undefined;
        allowedHours?: number[] | AllowFunction | undefined;
        allowedMinutes?: number[] | AllowFunction | undefined;
        allowedSeconds?: number[] | AllowFunction | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:period"?: ((val: Period$1) => any) | undefined;
        "onUpdate:hour"?: ((val: number) => any) | undefined;
        "onUpdate:minute"?: ((val: number) => any) | undefined;
        "onUpdate:second"?: ((val: number) => any) | undefined;
    }, {
        style: vue.StyleValue;
        title: string;
        disabled: boolean;
        tag: string;
        format: "ampm" | "24hr";
        readonly: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        scrollable: boolean;
        hideHeader: boolean;
        useSeconds: boolean;
        ampmInTitle: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        title: string;
        disabled: boolean;
        tag: string;
        format: "ampm" | "24hr";
        readonly: boolean;
        tile: boolean;
        scrollable: boolean;
        hideHeader: boolean;
        useSeconds: boolean;
        ampmInTitle: boolean;
    } & {
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
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
        max?: string | undefined;
        bgColor?: string | undefined;
        min?: string | undefined;
        allowedHours?: number[] | AllowFunction | undefined;
        allowedMinutes?: number[] | AllowFunction | undefined;
        allowedSeconds?: number[] | AllowFunction | undefined;
    } & {
        $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
            default?: (() => vue.VNodeChild) | undefined;
            title?: (() => vue.VNodeChild) | undefined;
            actions?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            title?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:period"?: ((val: Period$1) => any) | undefined;
        "onUpdate:hour"?: ((val: number) => any) | undefined;
        "onUpdate:minute"?: ((val: number) => any) | undefined;
        "onUpdate:second"?: ((val: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        title: string;
        disabled: boolean;
        tag: string;
        format: "ampm" | "24hr";
        readonly: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        scrollable: boolean;
        hideHeader: boolean;
        useSeconds: boolean;
        ampmInTitle: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    title: string;
    disabled: boolean;
    tag: string;
    format: "ampm" | "24hr";
    readonly: boolean;
    tile: boolean;
    scrollable: boolean;
    hideHeader: boolean;
    useSeconds: boolean;
    ampmInTitle: boolean;
} & {
    class?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    color?: string | undefined;
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
    max?: string | undefined;
    bgColor?: string | undefined;
    min?: string | undefined;
    allowedHours?: number[] | AllowFunction | undefined;
    allowedMinutes?: number[] | AllowFunction | undefined;
    allowedSeconds?: number[] | AllowFunction | undefined;
} & {
    $children?: vue.VNodeChild | (() => vue.VNodeChild) | {
        default?: (() => vue.VNodeChild) | undefined;
        title?: (() => vue.VNodeChild) | undefined;
        actions?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => vue.VNodeChild) | undefined;
        title?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:title"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onUpdate:period"?: ((val: Period$1) => any) | undefined;
    "onUpdate:hour"?: ((val: number) => any) | undefined;
    "onUpdate:minute"?: ((val: number) => any) | undefined;
    "onUpdate:second"?: ((val: number) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:hour': (val: number) => number;
    'update:minute': (val: number) => number;
    'update:period': (val: Period$1) => Period$1;
    'update:second': (val: number) => number;
    'update:modelValue': (val: string) => string;
}, string, {
    style: vue.StyleValue;
    title: string;
    disabled: boolean;
    tag: string;
    format: "ampm" | "24hr";
    readonly: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    scrollable: boolean;
    hideHeader: boolean;
    useSeconds: boolean;
    ampmInTitle: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    title: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    color: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    location: PropType<Anchor>;
    bgColor: StringConstructor;
    hideHeader: BooleanConstructor;
    allowedHours: PropType<number[] | AllowFunction>;
    allowedMinutes: PropType<number[] | AllowFunction>;
    allowedSeconds: PropType<number[] | AllowFunction>;
    ampmInTitle: BooleanConstructor;
    disabled: BooleanConstructor;
    format: {
        type: PropType<"ampm" | "24hr">;
        default: string;
    };
    max: StringConstructor;
    min: StringConstructor;
    modelValue: PropType<any>;
    readonly: BooleanConstructor;
    scrollable: BooleanConstructor;
    useSeconds: BooleanConstructor;
}, vue.ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    theme: StringConstructor;
    color: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    border: (StringConstructor | NumberConstructor | BooleanConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        default: undefined;
    };
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    location: PropType<Anchor>;
    bgColor: StringConstructor;
    hideHeader: BooleanConstructor;
    allowedHours: PropType<number[] | AllowFunction>;
    allowedMinutes: PropType<number[] | AllowFunction>;
    allowedSeconds: PropType<number[] | AllowFunction>;
    ampmInTitle: BooleanConstructor;
    disabled: BooleanConstructor;
    format: {
        type: PropType<"ampm" | "24hr">;
        default: string;
    };
    max: StringConstructor;
    min: StringConstructor;
    modelValue: PropType<any>;
    readonly: BooleanConstructor;
    scrollable: BooleanConstructor;
    useSeconds: BooleanConstructor;
}>>;
type VTimePicker = InstanceType<typeof VTimePicker>;

declare const VTimePickerClock: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        disabled: boolean;
        format: Function;
        readonly: boolean;
        double: boolean;
        rotate: number;
        max: number;
        min: number;
        step: number;
        scrollable: boolean;
        ampm: boolean;
    } & {
        color?: string | undefined;
        modelValue?: number | undefined;
        displayedValue?: any;
        allowedValues?: ((value: number) => boolean) | undefined;
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
        onChange?: ((val: number) => any) | undefined;
        onInput?: ((val: number) => any) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        change: (val: number) => number;
        input: (val: number) => number;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        disabled: boolean;
        format: Function;
        readonly: boolean;
        double: boolean;
        rotate: number;
        max: number;
        min: number;
        step: number;
        scrollable: boolean;
        ampm: boolean;
    } & {
        color?: string | undefined;
        modelValue?: number | undefined;
        displayedValue?: any;
        allowedValues?: ((value: number) => boolean) | undefined;
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
        onChange?: ((val: number) => any) | undefined;
        onInput?: ((val: number) => any) | undefined;
    }, {
        disabled: boolean;
        format: Function;
        readonly: boolean;
        double: boolean;
        rotate: number;
        step: number;
        scrollable: boolean;
        ampm: boolean;
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
        disabled: boolean;
        format: Function;
        readonly: boolean;
        double: boolean;
        rotate: number;
        max: number;
        min: number;
        step: number;
        scrollable: boolean;
        ampm: boolean;
    } & {
        color?: string | undefined;
        modelValue?: number | undefined;
        displayedValue?: any;
        allowedValues?: ((value: number) => boolean) | undefined;
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
        onChange?: ((val: number) => any) | undefined;
        onInput?: ((val: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean;
        format: Function;
        readonly: boolean;
        double: boolean;
        rotate: number;
        step: number;
        scrollable: boolean;
        ampm: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: boolean;
    format: Function;
    readonly: boolean;
    double: boolean;
    rotate: number;
    max: number;
    min: number;
    step: number;
    scrollable: boolean;
    ampm: boolean;
} & {
    color?: string | undefined;
    modelValue?: number | undefined;
    displayedValue?: any;
    allowedValues?: ((value: number) => boolean) | undefined;
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
    onChange?: ((val: number) => any) | undefined;
    onInput?: ((val: number) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    change: (val: number) => number;
    input: (val: number) => number;
}, string, {
    disabled: boolean;
    format: Function;
    readonly: boolean;
    double: boolean;
    rotate: number;
    step: number;
    scrollable: boolean;
    ampm: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    allowedValues: PropType<(value: number) => boolean>;
    ampm: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    displayedValue: null;
    double: BooleanConstructor;
    format: {
        type: FunctionConstructor;
        default: (val: string | number) => string | number;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    scrollable: BooleanConstructor;
    readonly: BooleanConstructor;
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
    };
}, vue.ExtractPropTypes<{
    allowedValues: PropType<(value: number) => boolean>;
    ampm: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    displayedValue: null;
    double: BooleanConstructor;
    format: {
        type: FunctionConstructor;
        default: (val: string | number) => string | number;
    };
    max: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    scrollable: BooleanConstructor;
    readonly: BooleanConstructor;
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
    };
}>>;
type VTimePickerClock = InstanceType<typeof VTimePickerClock>;

type Period = 'am' | 'pm';
declare const VTimePickerControls: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        disabled: boolean;
        readonly: boolean;
        ampm: boolean;
        ampmReadonly: boolean;
        useSeconds: boolean;
    } & {
        value?: number | undefined;
        color?: string | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
        period?: string | undefined;
        selecting?: number | undefined;
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
        "onUpdate:period"?: ((data: Period) => any) | undefined;
        "onUpdate:selecting"?: ((data: 1 | 3 | 2) => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:period': (data: Period) => Period;
        'update:selecting': (data: 1 | 2 | 3) => 1 | 3 | 2;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        disabled: boolean;
        readonly: boolean;
        ampm: boolean;
        ampmReadonly: boolean;
        useSeconds: boolean;
    } & {
        value?: number | undefined;
        color?: string | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
        period?: string | undefined;
        selecting?: number | undefined;
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
        "onUpdate:period"?: ((data: Period) => any) | undefined;
        "onUpdate:selecting"?: ((data: 1 | 3 | 2) => any) | undefined;
    }, {
        disabled: boolean;
        readonly: boolean;
        ampm: boolean;
        ampmReadonly: boolean;
        useSeconds: boolean;
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
        disabled: boolean;
        readonly: boolean;
        ampm: boolean;
        ampmReadonly: boolean;
        useSeconds: boolean;
    } & {
        value?: number | undefined;
        color?: string | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
        period?: string | undefined;
        selecting?: number | undefined;
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
        "onUpdate:period"?: ((data: Period) => any) | undefined;
        "onUpdate:selecting"?: ((data: 1 | 3 | 2) => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean;
        readonly: boolean;
        ampm: boolean;
        ampmReadonly: boolean;
        useSeconds: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    disabled: boolean;
    readonly: boolean;
    ampm: boolean;
    ampmReadonly: boolean;
    useSeconds: boolean;
} & {
    value?: number | undefined;
    color?: string | undefined;
    hour?: number | undefined;
    minute?: number | undefined;
    second?: number | undefined;
    period?: string | undefined;
    selecting?: number | undefined;
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
    "onUpdate:period"?: ((data: Period) => any) | undefined;
    "onUpdate:selecting"?: ((data: 1 | 3 | 2) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:period': (data: Period) => Period;
    'update:selecting': (data: 1 | 2 | 3) => 1 | 3 | 2;
}, string, {
    disabled: boolean;
    readonly: boolean;
    ampm: boolean;
    ampmReadonly: boolean;
    useSeconds: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    ampm: BooleanConstructor;
    ampmReadonly: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    hour: NumberConstructor;
    minute: NumberConstructor;
    second: NumberConstructor;
    period: StringConstructor;
    readonly: BooleanConstructor;
    useSeconds: BooleanConstructor;
    selecting: NumberConstructor;
    value: NumberConstructor;
}, vue.ExtractPropTypes<{
    ampm: BooleanConstructor;
    ampmReadonly: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    hour: NumberConstructor;
    minute: NumberConstructor;
    second: NumberConstructor;
    period: StringConstructor;
    readonly: BooleanConstructor;
    useSeconds: BooleanConstructor;
    selecting: NumberConstructor;
    value: NumberConstructor;
}>>;
type VTimePickerControls = InstanceType<typeof VTimePickerControls>;

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

export { VCalendar, VCalendarDay, VCalendarHeader, VCalendarInterval, VCalendarIntervalEvent, VCalendarMonthDay, VDateInput, VNumberInput, VPicker, VPickerTitle, VPullToRefresh, VSnackbarQueue, VStepperVertical, VStepperVerticalActions, VStepperVerticalItem, VTimePicker, VTimePickerClock, VTimePickerControls, VTreeview, VTreeviewGroup, VTreeviewItem };
