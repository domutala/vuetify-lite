import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, VNodeChild, VNode, ComponentPublicInstance, PropType, Ref, JSXComponent, UnwrapRef } from 'vue';

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
type EventProp<T extends any[] = any[], F = (...args: T) => void> = F;
declare const EventProp: <T extends any[] = any[]>() => PropType<(...args: T) => void>;
type TemplateRef = {
    (target: Element | ComponentPublicInstance | null): void;
    value: HTMLElement | ComponentPublicInstance | null | undefined;
    readonly el: HTMLElement | undefined;
};

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

type ExpandProps = {
    expandOnClick: boolean;
    expanded: readonly string[];
    'onUpdate:expanded': ((value: any[]) => void) | undefined;
};
declare function provideExpanded(props: ExpandProps): {
    expand: (item: DataTableItem, value: boolean) => void;
    expanded: Ref<Set<string>> & {
        readonly externalValue: readonly string[];
    };
    expandOnClick: Ref<boolean>;
    isExpanded: (item: DataTableItem) => boolean;
    toggleExpand: (item: DataTableItem) => void;
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

type SortItem = {
    key: string;
    order?: boolean | 'asc' | 'desc';
};
declare function provideSort(options: {
    sortBy: Ref<readonly SortItem[]>;
    mustSort: Ref<boolean>;
    multiSort: Ref<boolean>;
    page?: Ref<number>;
}): {
    sortBy: Ref<readonly SortItem[]>;
    toggleSort: (column: InternalDataTableHeader) => void;
    isSorted: (column: InternalDataTableHeader) => boolean;
};

interface GroupableItem<T = any> {
    type: 'item';
    raw: T;
}
interface Group<T = any> {
    type: 'group';
    depth: number;
    id: string;
    key: string;
    value: any;
    items: readonly (T | Group<T>)[];
}
declare function provideGroupBy(options: {
    groupBy: Ref<readonly SortItem[]>;
    sortBy: Ref<readonly SortItem[]>;
}): {
    sortByWithGroups: vue.ComputedRef<SortItem[]>;
    toggleGroup: (group: Group) => void;
    opened: Ref<Set<string> & Omit<Set<string>, keyof Set<any>>>;
    groupBy: Ref<readonly SortItem[]>;
    extractRows: <T extends GroupableItem<any>>(items: readonly (T | Group<T>)[]) => T[];
    isGroupOpen: (group: Group) => boolean;
};

type DataTableCompareFunction<T = any> = (a: T, b: T) => number | null;
type DataTableHeader<T = Record<string, any>> = {
    key?: 'data-table-group' | 'data-table-select' | 'data-table-expand' | (string & {});
    value?: SelectItemKey<T>;
    title?: string;
    fixed?: boolean;
    align?: 'start' | 'end' | 'center';
    width?: number | string;
    minWidth?: string;
    maxWidth?: string;
    nowrap?: boolean;
    headerProps?: Record<string, any>;
    cellProps?: HeaderCellProps;
    sortable?: boolean;
    sort?: DataTableCompareFunction;
    sortRaw?: DataTableCompareFunction;
    filter?: FilterFunction;
    mobile?: boolean;
    children?: DataTableHeader<T>[];
};
type InternalDataTableHeader = Omit<DataTableHeader, 'key' | 'value' | 'children'> & {
    key: string | null;
    value: SelectItemKey | null;
    sortable: boolean;
    fixedOffset?: number;
    lastFixed?: boolean;
    nowrap?: boolean;
    colspan?: number;
    rowspan?: number;
    children?: InternalDataTableHeader[];
};
interface DataTableItem<T = any> extends InternalItem<T>, GroupableItem<T>, SelectableItem {
    key: any;
    index: number;
    columns: {
        [key: string]: any;
    };
}
type GroupHeaderSlot = {
    index: number;
    item: Group;
    columns: InternalDataTableHeader[];
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
    toggleGroup: ReturnType<typeof provideGroupBy>['toggleGroup'];
    isGroupOpen: ReturnType<typeof provideGroupBy>['isGroupOpen'];
};
type ItemSlotBase<T> = {
    index: number;
    item: T;
    internalItem: DataTableItem<T>;
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
};
type ItemSlot<T> = ItemSlotBase<T> & {
    columns: InternalDataTableHeader[];
};
type ItemKeySlot<T> = ItemSlotBase<T> & {
    value: any;
    column: InternalDataTableHeader;
};
type RowProps<T> = Record<string, any> | ((data: Pick<ItemKeySlot<T>, 'index' | 'item' | 'internalItem'>) => Record<string, any>);
type CellProps<T> = Record<string, any> | ((data: Pick<ItemKeySlot<T>, 'index' | 'item' | 'internalItem' | 'value' | 'column'>) => Record<string, any>);
type HeaderCellProps = Record<string, any> | ((data: Pick<ItemKeySlot<any>, 'index' | 'item' | 'internalItem' | 'value'>) => Record<string, any>);

interface DataTableItemProps {
    items: any[];
    itemValue: SelectItemKey;
    itemSelectable: SelectItemKey;
    returnObject: boolean;
}

interface SelectableItem {
    value: any;
    selectable: boolean;
}
type SelectionProps = Pick<DataTableItemProps, 'itemValue'> & {
    modelValue: readonly any[];
    selectStrategy: 'single' | 'page' | 'all';
    valueComparator: typeof deepEqual;
    'onUpdate:modelValue': EventProp<[any[]]> | undefined;
};
declare function provideSelection(props: SelectionProps, { allItems, currentPage }: {
    allItems: Ref<SelectableItem[]>;
    currentPage: Ref<SelectableItem[]>;
}): {
    toggleSelect: (item: SelectableItem) => void;
    select: (items: SelectableItem[], value: boolean) => void;
    selectAll: (value: boolean) => void;
    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
    isSomeSelected: (items: SelectableItem | SelectableItem[]) => boolean;
    someSelected: vue.ComputedRef<boolean>;
    allSelected: vue.ComputedRef<boolean>;
    showSelectAll: vue.ComputedRef<boolean>;
};

declare const breakpoints: readonly ["sm", "md", "lg", "xl", "xxl"];
type Breakpoint = typeof breakpoints[number];
type DisplayBreakpoint = 'xs' | Breakpoint;

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type HeadersSlotProps = {
    headers: InternalDataTableHeader[][];
    columns: InternalDataTableHeader[];
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    someSelected: UnwrapRef<ReturnType<typeof provideSelection>['someSelected']>;
    allSelected: UnwrapRef<ReturnType<typeof provideSelection>['allSelected']>;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    getSortIcon: (column: InternalDataTableHeader) => IconValue;
    isSorted: ReturnType<typeof provideSort>['isSorted'];
};
type VDataTableHeaderCellColumnSlotProps = {
    column: InternalDataTableHeader;
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    isSorted: ReturnType<typeof provideSort>['isSorted'];
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    someSelected: UnwrapRef<ReturnType<typeof provideSelection>['someSelected']>;
    allSelected: UnwrapRef<ReturnType<typeof provideSelection>['allSelected']>;
    getSortIcon: (column: InternalDataTableHeader) => IconValue;
};
type VDataTableHeadersSlots = {
    headers: HeadersSlotProps;
    loader: LoaderSlotProps;
    'header.data-table-select': VDataTableHeaderCellColumnSlotProps;
    'header.data-table-expand': VDataTableHeaderCellColumnSlotProps;
} & {
    [key: `header.${string}`]: VDataTableHeaderCellColumnSlotProps;
};
declare const VDataTableHeaders: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        mobile: boolean | null;
        sticky: boolean;
        multiSort: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    } & {
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-select'?: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-expand'?: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-select'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-expand'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        mobile: boolean | null;
        sticky: boolean;
        multiSort: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    } & {
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-select'?: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-expand'?: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-select'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-expand'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
    }, {
        mobile: boolean | null;
        sticky: boolean;
        multiSort: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    }, true, {}, vue.SlotsType<Partial<{
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        mobile: boolean | null;
        sticky: boolean;
        multiSort: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    } & {
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-select'?: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-expand'?: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-select'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
            'header.data-table-expand'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        mobile: boolean | null;
        sticky: boolean;
        multiSort: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    mobile: boolean | null;
    sticky: boolean;
    multiSort: boolean;
    disableSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
} & {
    color?: string | undefined;
    loading?: string | boolean | undefined;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    headerProps?: Record<string, any> | undefined;
} & {
    $children?: {} | vue.VNodeChild | {
        [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        headers?: ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'header.data-table-select'?: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        'header.data-table-expand'?: ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        headers?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
        'header.data-table-select'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
        'header.data-table-expand'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:headers"?: false | ((arg: HeadersSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
    "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => vue.VNodeChild) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    mobile: boolean | null;
    sticky: boolean;
    multiSort: boolean;
    disableSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
}, {}, string, vue.SlotsType<Partial<{
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    color: StringConstructor;
    sticky: BooleanConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: PropType<Record<string, any>>;
    };
}, vue.ExtractPropTypes<{
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    color: StringConstructor;
    sticky: BooleanConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: PropType<Record<string, any>>;
    };
}>>;
type VDataTableHeaders = InstanceType<typeof VDataTableHeaders>;

type Density = null | 'default' | 'comfortable' | 'compact';

declare function providePagination(options: {
    page: Ref<number>;
    itemsPerPage: Ref<number>;
    itemsLength: Ref<number>;
}): {
    page: Ref<number>;
    itemsPerPage: Ref<number>;
    startIndex: vue.ComputedRef<number>;
    stopIndex: vue.ComputedRef<number>;
    pageCount: vue.ComputedRef<number>;
    itemsLength: Ref<number>;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (value: number) => void;
    setItemsPerPage: (value: number) => void;
};

type VDataTableGroupHeaderRowSlots = {
    'data-table-group': {
        item: Group;
        count: number;
        props: Record<string, unknown>;
    };
    'data-table-select': {
        props: Record<string, unknown>;
    };
};

type VDataTableRowSlots<T> = {
    'item.data-table-select': Omit<ItemKeySlot<T>, 'value'>;
    'item.data-table-expand': Omit<ItemKeySlot<T>, 'value'>;
    'header.data-table-select': VDataTableHeaderCellColumnSlotProps;
    'header.data-table-expand': VDataTableHeaderCellColumnSlotProps;
} & {
    [key: `item.${string}`]: ItemKeySlot<T>;
    [key: `header.${string}`]: VDataTableHeaderCellColumnSlotProps;
};
declare const VDataTableRow: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        mobile: boolean | null;
    } & {
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
        onDblclick?: ((args_0: MouseEvent) => void) | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        index?: number | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "item" | "cellProps" | `v-slot:header.${string}` | `v-slot:item.${string}`>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        mobile: boolean | null;
    } & {
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
        onDblclick?: ((args_0: MouseEvent) => void) | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        index?: number | undefined;
    }, {
        mobile: boolean | null;
    }, true, {}, vue.SlotsType<Partial<{
        [x: `item.${string}`]: (arg: ItemKeySlot<unknown>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-select': (arg: Omit<ItemKeySlot<unknown>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-expand': (arg: Omit<ItemKeySlot<unknown>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        mobile: boolean | null;
    } & {
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
        onDblclick?: ((args_0: MouseEvent) => void) | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        index?: number | undefined;
    }, {}, {}, {}, {}, {
        mobile: boolean | null;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    mobile: boolean | null;
} & {
    onClick?: ((args_0: MouseEvent) => void) | undefined;
    onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
    onDblclick?: ((args_0: MouseEvent) => void) | undefined;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    index?: number | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "item" | "cellProps" | `v-slot:header.${string}` | `v-slot:item.${string}`>, string, {
    mobile: boolean | null;
}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot<unknown>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot<unknown>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot<unknown>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>(props: {
    item?: DataTableItem<T> | undefined;
    cellProps?: CellProps<T> | undefined;
}, slots: VDataTableRowSlots<T>) => GenericProps<{
    item?: DataTableItem<T> | undefined;
    cellProps?: CellProps<T> | undefined;
}, VDataTableRowSlots<T>>) & FilterPropsOptions<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    index: NumberConstructor;
    item: PropType<DataTableItem<any>>;
    cellProps: PropType<CellProps<any>>;
    onClick: PropType<(args_0: MouseEvent) => void>;
    onContextmenu: PropType<(args_0: MouseEvent) => void>;
    onDblclick: PropType<(args_0: MouseEvent) => void>;
}, vue.ExtractPropTypes<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    index: NumberConstructor;
    item: PropType<DataTableItem<any>>;
    cellProps: PropType<CellProps<any>>;
    onClick: PropType<(args_0: MouseEvent) => void>;
    onContextmenu: PropType<(args_0: MouseEvent) => void>;
    onDblclick: PropType<(args_0: MouseEvent) => void>;
}>>;
type VDataTableRow = InstanceType<typeof VDataTableRow>;

type VDataTableRowsSlots<T> = VDataTableGroupHeaderRowSlots & VDataTableRowSlots<T> & {
    item: ItemSlot<T> & {
        props: Record<string, any>;
    };
    loading: never;
    'group-header': GroupHeaderSlot;
    'no-data': never;
    'expanded-row': ItemSlot<T>;
};
declare const VDataTableRows: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        noDataText: string;
        loadingText: string;
        mobile: boolean | null;
        hideNoData: boolean;
    } & {
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        cellProps?: CellProps<any> | undefined;
        rowProps?: RowProps<any> | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "items" | "v-slot:item" | "v-slot:no-data" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        noDataText: string;
        loadingText: string;
        mobile: boolean | null;
        hideNoData: boolean;
    } & {
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        cellProps?: CellProps<any> | undefined;
        rowProps?: RowProps<any> | undefined;
    }, {
        noDataText: string;
        loadingText: string;
        mobile: boolean | null;
        hideNoData: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        [x: `item.${string}`]: (arg: ItemKeySlot<unknown>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'data-table-group': (arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'data-table-select': (arg: {
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-select': (arg: Omit<ItemKeySlot<unknown>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-expand': (arg: Omit<ItemKeySlot<unknown>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            index: number;
            item: unknown;
            internalItem: DataTableItem<unknown>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'expanded-row': (arg: ItemSlot<unknown>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        noDataText: string;
        loadingText: string;
        mobile: boolean | null;
        hideNoData: boolean;
    } & {
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        cellProps?: CellProps<any> | undefined;
        rowProps?: RowProps<any> | undefined;
    }, {}, {}, {}, {}, {
        noDataText: string;
        loadingText: string;
        mobile: boolean | null;
        hideNoData: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    noDataText: string;
    loadingText: string;
    mobile: boolean | null;
    hideNoData: boolean;
} & {
    loading?: string | boolean | undefined;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    cellProps?: CellProps<any> | undefined;
    rowProps?: RowProps<any> | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "items" | "v-slot:item" | "v-slot:no-data" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row">, string, {
    noDataText: string;
    loadingText: string;
    mobile: boolean | null;
    hideNoData: boolean;
}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot<unknown>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-group': (arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot<unknown>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot<unknown>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        index: number;
        item: unknown;
        internalItem: DataTableItem<unknown>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'expanded-row': (arg: ItemSlot<unknown>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>(props: {
    items?: readonly (DataTableItem<T> | Group<T>)[] | undefined;
}, slots: VDataTableRowsSlots<T>) => GenericProps<{
    items?: readonly (DataTableItem<T> | Group<T>)[] | undefined;
}, VDataTableRowsSlots<T>>) & FilterPropsOptions<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<readonly (Group<any> | DataTableItem<any>)[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowProps: PropType<RowProps<any>>;
    cellProps: PropType<CellProps<any>>;
}, vue.ExtractPropTypes<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | DisplayBreakpoint>;
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<readonly (Group<any> | DataTableItem<any>)[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowProps: PropType<RowProps<any>>;
    cellProps: PropType<CellProps<any>>;
}>>;
type VDataTableRows = InstanceType<typeof VDataTableRows>;

type VDataTableSlotProps<T> = {
    page: number;
    itemsPerPage: number;
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    pageCount: number;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    setItemsPerPage: ReturnType<typeof providePagination>['setItemsPerPage'];
    someSelected: boolean;
    allSelected: boolean;
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    select: ReturnType<typeof provideSelection>['select'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isGroupOpen: ReturnType<typeof provideGroupBy>['isGroupOpen'];
    toggleGroup: ReturnType<typeof provideGroupBy>['toggleGroup'];
    items: readonly T[];
    internalItems: readonly DataTableItem[];
    groupedItems: readonly (DataTableItem<T> | Group<DataTableItem<T>>)[];
    columns: InternalDataTableHeader[];
    headers: InternalDataTableHeader[][];
};
type VDataTableSlots<T> = VDataTableRowsSlots<T> & VDataTableHeadersSlots & {
    default: VDataTableSlotProps<T>;
    colgroup: VDataTableSlotProps<T>;
    top: VDataTableSlotProps<T>;
    body: VDataTableSlotProps<T>;
    tbody: VDataTableSlotProps<T>;
    thead: VDataTableSlotProps<T>;
    tfoot: VDataTableSlotProps<T>;
    bottom: VDataTableSlotProps<T>;
    'body.prepend': VDataTableSlotProps<T>;
    'body.append': VDataTableSlotProps<T>;
    'footer.prepend': never;
};
type ItemType$2<T> = T extends readonly (infer U)[] ? U : never;
declare const VDataTable: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        filterKeys?: FilterKeys | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:currentItems"?: ((value: any) => any) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any[]) => boolean;
        'update:page': (value: number) => boolean;
        'update:itemsPerPage': (value: number) => boolean;
        'update:sortBy': (value: any) => boolean;
        'update:options': (value: any) => boolean;
        'update:groupBy': (value: any) => boolean;
        'update:expanded': (value: any) => boolean;
        'update:currentItems': (value: any) => boolean;
    }, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "items" | "update:modelValue" | "v-slot:loader" | "v-slot:item" | "itemValue" | "v-slot:no-data" | "cellProps" | "itemSelectable" | "rowProps" | "headers" | "v-slot:headers" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row" | "v-slot:top" | "v-slot:bottom" | "v-slot:body" | "v-slot:colgroup" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:body.prepend" | "v-slot:body.append" | "v-slot:footer.prepend">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        filterKeys?: FilterKeys | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:currentItems"?: ((value: any) => any) | undefined;
    }, {
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        [x: `item.${string}`]: (arg: ItemKeySlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'data-table-group': (arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'data-table-select': (arg: {
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-select': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-expand': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'expanded-row': (arg: ItemSlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        colgroup: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        top: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        body: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        tbody: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        thead: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        tfoot: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        bottom: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'body.prepend': (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'body.append': (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'footer.prepend': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        filterKeys?: FilterKeys | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:currentItems"?: ((value: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly SortItem[];
    pageText: string;
    page: string | number;
    mobile: boolean | null;
    sticky: boolean;
    expanded: readonly string[];
    density: Density;
    valueComparator: typeof deepEqual;
    nextIcon: string;
    prevIcon: string;
    selectStrategy: "page" | "all" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    hideNoData: boolean;
    hover: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    showSelect: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemsPerPage: string | number;
    firstIcon: string;
    lastIcon: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    disableSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hideDefaultBody: boolean;
    hideDefaultFooter: boolean;
    hideDefaultHeader: boolean;
} & {
    search?: string | undefined;
    class?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    customFilter?: FilterFunction | undefined;
    customKeyFilter?: FilterKeyFunctions | undefined;
    filterKeys?: FilterKeys | undefined;
    customKeySort?: Record<string, DataTableCompareFunction> | undefined;
    headerProps?: Record<string, any> | undefined;
} & {
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
    "onUpdate:currentItems"?: ((value: any) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any[]) => boolean;
    'update:page': (value: number) => boolean;
    'update:itemsPerPage': (value: number) => boolean;
    'update:sortBy': (value: any) => boolean;
    'update:options': (value: any) => boolean;
    'update:groupBy': (value: any) => boolean;
    'update:expanded': (value: any) => boolean;
    'update:currentItems': (value: any) => boolean;
}, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "items" | "update:modelValue" | "v-slot:loader" | "v-slot:item" | "itemValue" | "v-slot:no-data" | "cellProps" | "itemSelectable" | "rowProps" | "headers" | "v-slot:headers" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row" | "v-slot:top" | "v-slot:bottom" | "v-slot:body" | "v-slot:colgroup" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:body.prepend" | "v-slot:body.append" | "v-slot:footer.prepend">, string, {
    style: vue.StyleValue;
    tag: string;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly SortItem[];
    pageText: string;
    page: string | number;
    mobile: boolean | null;
    sticky: boolean;
    expanded: readonly string[];
    density: Density;
    valueComparator: typeof deepEqual;
    nextIcon: string;
    prevIcon: string;
    selectStrategy: "page" | "all" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    hideNoData: boolean;
    hover: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    showSelect: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemsPerPage: string | number;
    firstIcon: string;
    lastIcon: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    disableSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hideDefaultBody: boolean;
    hideDefaultFooter: boolean;
    hideDefaultHeader: boolean;
}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-group': (arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'expanded-row': (arg: ItemSlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    colgroup: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    top: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    body: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    tbody: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    thead: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    tfoot: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    bottom: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'body.prepend': (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'body.append': (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'footer.prepend': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T extends readonly any[], V>(props: {
    items?: T | undefined;
    itemValue?: SelectItemKey<ItemType$2<T>>;
    rowProps?: RowProps<ItemType$2<T>> | undefined;
    cellProps?: CellProps<ItemType$2<T>> | undefined;
    itemSelectable?: SelectItemKey<ItemType$2<T>>;
    headers?: readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<ItemType$2<T>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly any[] | undefined;
    }[] | undefined;
    modelValue?: V | undefined;
    'onUpdate:modelValue'?: ((value: V) => void) | undefined;
}, slots: VDataTableSlots<ItemType$2<T>>) => GenericProps<{
    items?: T | undefined;
    itemValue?: SelectItemKey<ItemType$2<T>>;
    rowProps?: RowProps<ItemType$2<T>> | undefined;
    cellProps?: CellProps<ItemType$2<T>> | undefined;
    itemSelectable?: SelectItemKey<ItemType$2<T>>;
    headers?: readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<ItemType$2<T>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly any[] | undefined;
    }[] | undefined;
    modelValue?: V | undefined;
    'onUpdate:modelValue'?: ((value: V) => void) | undefined;
}, VDataTableSlots<ItemType$2<T>>>) & FilterPropsOptions<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: vue.PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
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
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: vue.PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: vue.PropType<number | DisplayBreakpoint>;
    color: StringConstructor;
    sticky: BooleanConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: vue.PropType<Record<string, any>>;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"page" | "all" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    rowProps: vue.PropType<RowProps<any>>;
    cellProps: vue.PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    headers: vue.PropType<readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]>;
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, vue.ExtractPropTypes<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: vue.PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
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
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: vue.PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: vue.PropType<number | DisplayBreakpoint>;
    color: StringConstructor;
    sticky: BooleanConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: vue.PropType<Record<string, any>>;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"page" | "all" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    rowProps: vue.PropType<RowProps<any>>;
    cellProps: vue.PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    headers: vue.PropType<readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]>;
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>;
type VDataTable = InstanceType<typeof VDataTable>;

declare const VDataTableFooter: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        itemsPerPageText: string;
        pageText: string;
        nextIcon: string;
        prevIcon: string;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    } & {} & {
        $children?: {} | vue.VNodeChild | {
            prepend?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        itemsPerPageText: string;
        pageText: string;
        nextIcon: string;
        prevIcon: string;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    } & {} & {
        $children?: {} | vue.VNodeChild | {
            prepend?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    }, {
        itemsPerPageText: string;
        pageText: string;
        nextIcon: string;
        prevIcon: string;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        itemsPerPageText: string;
        pageText: string;
        nextIcon: string;
        prevIcon: string;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    } & {} & {
        $children?: {} | vue.VNodeChild | {
            prepend?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        itemsPerPageText: string;
        pageText: string;
        nextIcon: string;
        prevIcon: string;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    itemsPerPageText: string;
    pageText: string;
    nextIcon: string;
    prevIcon: string;
    firstIcon: string;
    lastIcon: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
} & {} & {
    $children?: {} | vue.VNodeChild | {
        prepend?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        prepend?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, {
    itemsPerPageText: string;
    pageText: string;
    nextIcon: string;
    prevIcon: string;
    firstIcon: string;
    lastIcon: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
}, {}, string, vue.SlotsType<Partial<{
    prepend: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
}, vue.ExtractPropTypes<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
}>>;

type VDataTableVirtualSlotProps<T> = Omit<VDataTableSlotProps<T>, 'setItemsPerPage' | 'page' | 'pageCount' | 'itemsPerPage'>;
type VDataTableVirtualSlots<T> = VDataTableRowsSlots<T> & VDataTableHeadersSlots & {
    colgroup: VDataTableVirtualSlotProps<T>;
    top: VDataTableVirtualSlotProps<T>;
    headers: VDataTableHeadersSlots['headers'];
    bottom: VDataTableVirtualSlotProps<T>;
    'body.prepend': VDataTableVirtualSlotProps<T>;
    'body.append': VDataTableVirtualSlotProps<T>;
    item: {
        itemRef: TemplateRef;
    };
};
type ItemType$1<T> = T extends readonly (infer U)[] ? U : never;
declare const VDataTableVirtual: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        sortBy: readonly SortItem[];
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        itemHeight: string | number;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        filterKeys?: FilterKeys | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
        headers?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly {
                readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: "end" | "center" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | undefined;
                readonly maxWidth?: string | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: FilterFunction | undefined;
                readonly mobile?: boolean | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any[]) => boolean;
        'update:sortBy': (value: any) => boolean;
        'update:options': (value: any) => boolean;
        'update:groupBy': (value: any) => boolean;
        'update:expanded': (value: any) => boolean;
    }, "$children" | "v-slots" | "modelValue" | "items" | "update:modelValue" | "v-slot:loader" | "v-slot:item" | "itemValue" | "v-slot:no-data" | "cellProps" | "itemSelectable" | "rowProps" | "v-slot:headers" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row" | "v-slot:top" | "v-slot:bottom" | "v-slot:colgroup" | "v-slot:body.prepend" | "v-slot:body.append">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        sortBy: readonly SortItem[];
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        itemHeight: string | number;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        filterKeys?: FilterKeys | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
        headers?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly {
                readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: "end" | "center" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | undefined;
                readonly maxWidth?: string | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: FilterFunction | undefined;
                readonly mobile?: boolean | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
    }, {
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        sortBy: readonly SortItem[];
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        itemHeight: string | number;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        [x: `item.${string}`]: (arg: ItemKeySlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'data-table-group': (arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'data-table-select': (arg: {
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-select': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-expand': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        } & {
            itemRef: TemplateRef;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'expanded-row': (arg: ItemSlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        colgroup: (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        top: (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        bottom: (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'body.prepend': (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'body.append': (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        noDataText: string;
        loadingText: string;
        sortBy: readonly SortItem[];
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        itemHeight: string | number;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        customFilter?: FilterFunction | undefined;
        customKeyFilter?: FilterKeyFunctions | undefined;
        filterKeys?: FilterKeys | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
        headers?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly {
                readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: "end" | "center" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | undefined;
                readonly maxWidth?: string | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: FilterFunction | undefined;
                readonly mobile?: boolean | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        sortBy: readonly SortItem[];
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        filterMode: FilterMode;
        noFilter: boolean;
        itemHeight: string | number;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
    noDataText: string;
    loadingText: string;
    sortBy: readonly SortItem[];
    mobile: boolean | null;
    sticky: boolean;
    expanded: readonly string[];
    density: Density;
    valueComparator: typeof deepEqual;
    selectStrategy: "page" | "all" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    itemHeight: string | number;
    hideNoData: boolean;
    hover: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    showSelect: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    disableSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hideDefaultBody: boolean;
    hideDefaultFooter: boolean;
    hideDefaultHeader: boolean;
} & {
    search?: string | undefined;
    class?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    customFilter?: FilterFunction | undefined;
    customKeyFilter?: FilterKeyFunctions | undefined;
    filterKeys?: FilterKeys | undefined;
    customKeySort?: Record<string, DataTableCompareFunction> | undefined;
    headerProps?: Record<string, any> | undefined;
    headers?: readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[] | undefined;
} & {
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any[]) => boolean;
    'update:sortBy': (value: any) => boolean;
    'update:options': (value: any) => boolean;
    'update:groupBy': (value: any) => boolean;
    'update:expanded': (value: any) => boolean;
}, "$children" | "v-slots" | "modelValue" | "items" | "update:modelValue" | "v-slot:loader" | "v-slot:item" | "itemValue" | "v-slot:no-data" | "cellProps" | "itemSelectable" | "rowProps" | "v-slot:headers" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row" | "v-slot:top" | "v-slot:bottom" | "v-slot:colgroup" | "v-slot:body.prepend" | "v-slot:body.append">, string, {
    style: vue.StyleValue;
    tag: string;
    noDataText: string;
    loadingText: string;
    sortBy: readonly SortItem[];
    mobile: boolean | null;
    sticky: boolean;
    expanded: readonly string[];
    density: Density;
    valueComparator: typeof deepEqual;
    selectStrategy: "page" | "all" | "single";
    returnObject: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    itemHeight: string | number;
    hideNoData: boolean;
    hover: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    showSelect: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    disableSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hideDefaultBody: boolean;
    hideDefaultFooter: boolean;
    hideDefaultHeader: boolean;
}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-group': (arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    } & {
        itemRef: TemplateRef;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'expanded-row': (arg: ItemSlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    colgroup: (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    top: (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    bottom: (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'body.prepend': (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'body.append': (arg: VDataTableVirtualSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T extends readonly any[], V>(props: {
    items?: T | undefined;
    itemValue?: SelectItemKey<ItemType$1<T>>;
    rowProps?: RowProps<ItemType$1<T>> | undefined;
    cellProps?: CellProps<ItemType$1<T>> | undefined;
    itemSelectable?: SelectItemKey<ItemType$1<T>>;
    modelValue?: V | undefined;
    'onUpdate:modelValue'?: ((value: V) => void) | undefined;
}, slots: VDataTableVirtualSlots<ItemType$1<T>>) => GenericProps<{
    items?: T | undefined;
    itemValue?: SelectItemKey<ItemType$1<T>>;
    rowProps?: RowProps<ItemType$1<T>> | undefined;
    cellProps?: CellProps<ItemType$1<T>> | undefined;
    itemSelectable?: SelectItemKey<ItemType$1<T>>;
    modelValue?: V | undefined;
    'onUpdate:modelValue'?: ((value: V) => void) | undefined;
}, VDataTableVirtualSlots<ItemType$1<T>>>) & FilterPropsOptions<{
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    itemHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    height: (StringConstructor | NumberConstructor)[];
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
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
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: vue.PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: vue.PropType<number | DisplayBreakpoint>;
    color: StringConstructor;
    sticky: BooleanConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: vue.PropType<Record<string, any>>;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"page" | "all" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    rowProps: vue.PropType<RowProps<any>>;
    cellProps: vue.PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    headers: vue.PropType<readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]>;
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
}, vue.ExtractPropTypes<{
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    itemHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    height: (StringConstructor | NumberConstructor)[];
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
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
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: vue.PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: vue.PropType<number | DisplayBreakpoint>;
    color: StringConstructor;
    sticky: BooleanConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: vue.PropType<Record<string, any>>;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"page" | "all" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    rowProps: vue.PropType<RowProps<any>>;
    cellProps: vue.PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    headers: vue.PropType<readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]>;
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
}>>;
type VDataTableVirtual = InstanceType<typeof VDataTableVirtual>;

type ItemType<T> = T extends readonly (infer U)[] ? U : never;
declare const VDataTableServer: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        itemsLength: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
        headers?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly {
                readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: "end" | "center" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | undefined;
                readonly maxWidth?: string | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: FilterFunction | undefined;
                readonly mobile?: boolean | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((options: any) => any) | undefined;
        "onUpdate:page"?: ((page: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
        "onUpdate:options"?: ((options: any) => any) | undefined;
    }, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any[]) => boolean;
        'update:page': (page: number) => boolean;
        'update:itemsPerPage': (page: number) => boolean;
        'update:sortBy': (sortBy: any) => boolean;
        'update:options': (options: any) => boolean;
        'update:expanded': (options: any) => boolean;
        'update:groupBy': (value: any) => boolean;
    }, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "items" | "update:modelValue" | "v-slot:loader" | "v-slot:item" | "itemValue" | "v-slot:no-data" | "cellProps" | "itemSelectable" | "rowProps" | "v-slot:headers" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row" | "v-slot:top" | "v-slot:bottom" | "v-slot:body" | "v-slot:colgroup" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:body.prepend" | "v-slot:body.append" | "v-slot:footer.prepend">, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        itemsLength: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
        headers?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly {
                readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: "end" | "center" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | undefined;
                readonly maxWidth?: string | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: FilterFunction | undefined;
                readonly mobile?: boolean | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((options: any) => any) | undefined;
        "onUpdate:page"?: ((page: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
        "onUpdate:options"?: ((options: any) => any) | undefined;
    }, {
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        [x: `item.${string}`]: (arg: ItemKeySlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'data-table-group': (arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'data-table-select': (arg: {
            props: Record<string, unknown>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-select': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'item.data-table-expand': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
            isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
            toggleSelect: (item: SelectableItem) => void;
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'expanded-row': (arg: ItemSlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        colgroup: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        top: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        body: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        tbody: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        thead: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        tfoot: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        bottom: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'body.prepend': (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'body.append': (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[];
        'footer.prepend': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        itemsLength: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        class?: any;
        width?: string | number | undefined;
        height?: string | number | undefined;
        theme?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | DisplayBreakpoint | undefined;
        customKeySort?: Record<string, DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
        headers?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly {
                readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: "end" | "center" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | undefined;
                readonly maxWidth?: string | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: FilterFunction | undefined;
                readonly mobile?: boolean | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((options: any) => any) | undefined;
        "onUpdate:page"?: ((page: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
        "onUpdate:options"?: ((options: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: vue.StyleValue;
        tag: string;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly SortItem[];
        pageText: string;
        page: string | number;
        mobile: boolean | null;
        sticky: boolean;
        expanded: readonly string[];
        density: Density;
        valueComparator: typeof deepEqual;
        nextIcon: string;
        prevIcon: string;
        selectStrategy: "page" | "all" | "single";
        returnObject: boolean;
        hideNoData: boolean;
        hover: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        itemsPerPage: string | number;
        firstIcon: string;
        lastIcon: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        disableSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    tag: string;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly SortItem[];
    pageText: string;
    page: string | number;
    mobile: boolean | null;
    sticky: boolean;
    expanded: readonly string[];
    density: Density;
    valueComparator: typeof deepEqual;
    nextIcon: string;
    prevIcon: string;
    selectStrategy: "page" | "all" | "single";
    returnObject: boolean;
    hideNoData: boolean;
    hover: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    showSelect: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemsPerPage: string | number;
    itemsLength: string | number;
    firstIcon: string;
    lastIcon: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    disableSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hideDefaultBody: boolean;
    hideDefaultFooter: boolean;
    hideDefaultHeader: boolean;
} & {
    search?: string | undefined;
    class?: any;
    width?: string | number | undefined;
    height?: string | number | undefined;
    theme?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    mobileBreakpoint?: number | DisplayBreakpoint | undefined;
    customKeySort?: Record<string, DataTableCompareFunction> | undefined;
    headerProps?: Record<string, any> | undefined;
    headers?: readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[] | undefined;
} & {
    "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:expanded"?: ((options: any) => any) | undefined;
    "onUpdate:page"?: ((page: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
    "onUpdate:options"?: ((options: any) => any) | undefined;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any[]) => boolean;
    'update:page': (page: number) => boolean;
    'update:itemsPerPage': (page: number) => boolean;
    'update:sortBy': (sortBy: any) => boolean;
    'update:options': (options: any) => boolean;
    'update:expanded': (options: any) => boolean;
    'update:groupBy': (value: any) => boolean;
}, "v-slot:default" | "$children" | "v-slots" | "modelValue" | "items" | "update:modelValue" | "v-slot:loader" | "v-slot:item" | "itemValue" | "v-slot:no-data" | "cellProps" | "itemSelectable" | "rowProps" | "v-slot:headers" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row" | "v-slot:top" | "v-slot:bottom" | "v-slot:body" | "v-slot:colgroup" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:body.prepend" | "v-slot:body.append" | "v-slot:footer.prepend">, string, {
    style: vue.StyleValue;
    tag: string;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly SortItem[];
    pageText: string;
    page: string | number;
    mobile: boolean | null;
    sticky: boolean;
    expanded: readonly string[];
    density: Density;
    valueComparator: typeof deepEqual;
    nextIcon: string;
    prevIcon: string;
    selectStrategy: "page" | "all" | "single";
    returnObject: boolean;
    hideNoData: boolean;
    hover: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    showSelect: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemsPerPage: string | number;
    firstIcon: string;
    lastIcon: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    disableSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hideDefaultBody: boolean;
    hideDefaultFooter: boolean;
    hideDefaultHeader: boolean;
}, {}, string, vue.SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-group': (arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-select': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'item.data-table-expand': (arg: Omit<ItemKeySlot<any>, "value">) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
        isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
        toggleSelect: (item: SelectableItem) => void;
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loading: () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'group-header': (arg: GroupHeaderSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'no-data': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'expanded-row': (arg: ItemSlot<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    headers: (arg: HeadersSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    colgroup: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    top: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    body: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    tbody: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    thead: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    tfoot: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    bottom: (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'body.prepend': (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'body.append': (arg: VDataTableSlotProps<any>) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'footer.prepend': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T extends readonly any[], V>(props: {
    items?: T | undefined;
    itemValue?: SelectItemKey<ItemType<T>>;
    rowProps?: RowProps<ItemType<T>> | undefined;
    cellProps?: CellProps<ItemType<T>> | undefined;
    itemSelectable?: SelectItemKey<ItemType<T>>;
    modelValue?: V | undefined;
    'onUpdate:modelValue'?: ((value: V) => void) | undefined;
}, slots: VDataTableSlots<ItemType<T>>) => GenericProps<{
    items?: T | undefined;
    itemValue?: SelectItemKey<ItemType<T>>;
    rowProps?: RowProps<ItemType<T>> | undefined;
    cellProps?: CellProps<ItemType<T>> | undefined;
    itemSelectable?: SelectItemKey<ItemType<T>>;
    modelValue?: V | undefined;
    'onUpdate:modelValue'?: ((value: V) => void) | undefined;
}, VDataTableSlots<ItemType<T>>>) & FilterPropsOptions<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: vue.PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
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
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: vue.PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: vue.PropType<number | DisplayBreakpoint>;
    color: StringConstructor;
    sticky: BooleanConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: vue.PropType<Record<string, any>>;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"page" | "all" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    rowProps: vue.PropType<RowProps<any>>;
    cellProps: vue.PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    headers: vue.PropType<readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]>;
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsLength: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}, vue.ExtractPropTypes<{
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    firstIcon: {
        type: StringConstructor;
        default: string;
    };
    lastIcon: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: vue.PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
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
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: vue.PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: vue.PropType<number | DisplayBreakpoint>;
    color: StringConstructor;
    sticky: BooleanConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: vue.PropType<Record<string, any>>;
    };
    sortBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: vue.PropType<Record<string, DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: vue.PropType<"page" | "all" | "single">;
        default: string;
    };
    modelValue: {
        type: vue.PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: vue.PropType<SelectItemKey>;
        default: null;
    };
    rowProps: vue.PropType<RowProps<any>>;
    cellProps: vue.PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    headers: vue.PropType<readonly {
        readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: "end" | "center" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | undefined;
        readonly maxWidth?: string | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: FilterFunction | undefined;
        readonly mobile?: boolean | undefined;
        readonly children?: readonly {
            readonly key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: "end" | "center" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | undefined;
            readonly maxWidth?: string | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: ((data: Pick<ItemKeySlot<any>, "value" | "item" | "index" | "internalItem">) => Record<string, any>) | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: FilterFunction | undefined;
            readonly mobile?: boolean | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]>;
    groupBy: {
        type: vue.PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<readonly string[]>;
        default: () => never[];
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsLength: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
}>>;
type VDataTableServer = InstanceType<typeof VDataTableServer>;

export { VDataTable, VDataTableFooter, VDataTableHeaders, VDataTableRow, VDataTableRows, VDataTableServer, VDataTableVirtual };
