import { FC, ReactNode } from "react"

type FunctionComponent<Props extends Object = {}, Base = {}, ExcludeProp extends string = ""> = FC<
    keyof Props extends never?
        Base & {children?: ReactNode}:
        Props extends Base?
            Props & {children?: ReactNode}: 
            ExcludeProp extends ""? 
                Props & Base & {children?: ReactNode}:
                Props & Omit<Base & {children?: ReactNode}, ExcludeProp> 
>

export type Component<Props extends Object = {}, Base extends Object | FunctionComponent = {}, ExcludeProp extends string = ""> = 
    Base extends FunctionComponent<infer ComponentProp, infer ComponentBase, infer ComponentExclude> ? 
        FunctionComponent<
            keyof Props extends never? ComponentProp: Props, 
            ComponentProp & ComponentBase, 
            ExcludeProp extends ""? ComponentExclude: ExcludeProp
        >:
        FunctionComponent<Props, Base, ExcludeProp>;

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
        ? Acc[number]
        : Enumerate<N, [...Acc, Acc['length']]>
      
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | T