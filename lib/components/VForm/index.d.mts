import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes } from 'vue';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}

interface FieldValidationResult {
    id: number | string;
    errorMessages: string[];
}
interface FormValidationResult {
    valid: boolean;
    errors: FieldValidationResult[];
}
interface SubmitEventPromise extends SubmitEvent, Promise<FormValidationResult> {
}

declare const VForm: {
    new (...args: any[]): vue.CreateComponentPublicInstance<{
        style: vue.StyleValue;
        disabled: boolean;
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        fastFail: boolean;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: vue.Raw<vue.ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: vue.Raw<vue.ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: vue.Raw<vue.ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: vue.Raw<vue.ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild) | undefined;
    } & {
        onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
        "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
    }, {
        errors: vue.Ref<{
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isValidating: vue.ShallowRef<boolean>;
        isValid: vue.Ref<boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: vue.Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: vue.Raw<vue.ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[]>;
        validate: () => Promise<{
            valid: boolean;
            errors: {
                id: string | number;
                errorMessages: string[];
            }[];
        }>;
        reset: () => void;
        resetValidation: () => void;
    } & HTMLFormElement, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (val: boolean | null) => true;
        submit: (e: SubmitEventPromise) => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & {
        style: vue.StyleValue;
        disabled: boolean;
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        fastFail: boolean;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: vue.Raw<vue.ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: vue.Raw<vue.ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: vue.Raw<vue.ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: vue.Raw<vue.ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild) | undefined;
    } & {
        onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
        "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
    }, {
        style: vue.StyleValue;
        disabled: boolean;
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        fastFail: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        default: (arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: vue.Raw<vue.ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
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
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        fastFail: boolean;
    } & {
        class?: any;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: vue.Raw<vue.ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: vue.Raw<vue.ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                errors: vue.Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: vue.ComputedRef<boolean>;
                isReadonly: vue.ComputedRef<boolean>;
                isValidating: vue.ShallowRef<boolean>;
                isValid: vue.Ref<boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: vue.Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: vue.Raw<vue.ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[]>;
                validate: () => Promise<{
                    valid: boolean;
                    errors: {
                        id: string | number;
                        errorMessages: string[];
                    }[];
                }>;
                reset: () => void;
                resetValidation: () => void;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: vue.Raw<vue.ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild) | undefined;
    } & {
        onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
        "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
    }, {
        errors: vue.Ref<{
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isValidating: vue.ShallowRef<boolean>;
        isValid: vue.Ref<boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: vue.Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: vue.Raw<vue.ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[]>;
        validate: () => Promise<{
            valid: boolean;
            errors: {
                id: string | number;
                errorMessages: string[];
            }[];
        }>;
        reset: () => void;
        resetValidation: () => void;
    } & HTMLFormElement, {}, {}, {}, {
        style: vue.StyleValue;
        disabled: boolean;
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
        fastFail: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    style: vue.StyleValue;
    disabled: boolean;
    readonly: boolean;
    modelValue: boolean | null;
    validateOn: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
    fastFail: boolean;
} & {
    class?: any;
} & {
    $children?: vue.VNodeChild | {
        default?: ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: vue.Raw<vue.ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        errors: vue.Ref<{
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isValidating: vue.ShallowRef<boolean>;
        isValid: vue.Ref<boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: vue.Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: vue.Raw<vue.ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[]>;
        validate: () => Promise<{
            valid: boolean;
            errors: {
                id: string | number;
                errorMessages: string[];
            }[];
        }>;
        reset: () => void;
        resetValidation: () => void;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            errors: vue.Ref<{
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: vue.ComputedRef<boolean>;
            isReadonly: vue.ComputedRef<boolean>;
            isValidating: vue.ShallowRef<boolean>;
            isValid: vue.Ref<boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: vue.Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: vue.Raw<vue.ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[]>;
            validate: () => Promise<{
                valid: boolean;
                errors: {
                    id: string | number;
                    errorMessages: string[];
                }[];
            }>;
            reset: () => void;
            resetValidation: () => void;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        errors: vue.Ref<{
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isValidating: vue.ShallowRef<boolean>;
        isValid: vue.Ref<boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: vue.Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: vue.Raw<vue.ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[]>;
        validate: () => Promise<{
            valid: boolean;
            errors: {
                id: string | number;
                errorMessages: string[];
            }[];
        }>;
        reset: () => void;
        resetValidation: () => void;
    }) => vue.VNodeChild) | undefined;
} & {
    onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
    "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
}, {
    errors: vue.Ref<{
        id: string | number;
        errorMessages: string[];
    }[]>;
    isDisabled: vue.ComputedRef<boolean>;
    isReadonly: vue.ComputedRef<boolean>;
    isValidating: vue.ShallowRef<boolean>;
    isValid: vue.Ref<boolean | null> & {
        readonly externalValue: boolean | null;
    };
    items: vue.Ref<{
        id: string | number;
        validate: () => Promise<string[]>;
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        vm: vue.Raw<vue.ComponentInternalInstance>;
        isValid: boolean | null;
        errorMessages: string[];
    }[]>;
    validate: () => Promise<{
        valid: boolean;
        errors: {
            id: string | number;
            errorMessages: string[];
        }[];
    }>;
    reset: () => void;
    resetValidation: () => void;
} & HTMLFormElement, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: boolean | null) => true;
    submit: (e: SubmitEventPromise) => true;
}, string, {
    style: vue.StyleValue;
    disabled: boolean;
    readonly: boolean;
    modelValue: boolean | null;
    validateOn: ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined;
    fastFail: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (arg: {
        errors: vue.Ref<{
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: vue.ComputedRef<boolean>;
        isReadonly: vue.ComputedRef<boolean>;
        isValidating: vue.ShallowRef<boolean>;
        isValid: vue.Ref<boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: vue.Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: vue.Raw<vue.ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[]>;
        validate: () => Promise<{
            valid: boolean;
            errors: {
                id: string | number;
                errorMessages: string[];
            }[];
        }>;
        reset: () => void;
        resetValidation: () => void;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    disabled: BooleanConstructor;
    fastFail: BooleanConstructor;
    readonly: BooleanConstructor;
    modelValue: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    validateOn: {
        type: vue.PropType<("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined>;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
}, vue.ExtractPropTypes<{
    disabled: BooleanConstructor;
    fastFail: BooleanConstructor;
    readonly: BooleanConstructor;
    modelValue: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    validateOn: {
        type: vue.PropType<("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | "lazy" | undefined>;
        default: string;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
}>>;
type VForm = InstanceType<typeof VForm>;

export { VForm };
