/**
 * api-extractor-test-01
 * 
 * @remarks
 * This library is consumed by api-extractor-test-02 and api-extractor-test-03.
 * It tests the basic types of definitions, and all the weird cases for following
 * chains of type aliases.
 * 
 * @packagedocumentation
 */

/// <reference types="jest" />

/**
 * Example of an abstract class that is directly exported.
 * @public
 */
export declare abstract class AbstractClass {
    abstract test(): void;
}

/**
 * Example of an abstract class that is exported separately from its
 * definition.
 *
 * @public
 */
export declare abstract class AbstractClass2 {
    abstract test2(): void;
}

/**
 * Example of an abstract class that is not the default export
 *
 * @public
 */
export declare abstract class AbstractClass3 {
    abstract test3(): void;
}

/**
 * Test different kinds of ambient definitions
 * @public
 */
export declare class AmbientConsumer {
    /**
     * Found via tsconfig.json's "lib" setting, which specifies the built-in "es2015.collection"
     */
    builtinDefinition1(): Map<string, string>;
    /**
     * Found via tsconfig.json's "lib" setting, which specifies the built-in "es2015.promise"
     */
    builtinDefinition2(): Promise<void>;
    /**
     * Configured via tsconfig.json's "lib" setting, which specifies "@types/jest".
     * The emitted index.d.ts gets a reference like this:  <reference types="jest" />
     */
    definitelyTyped(): jest.Context;
    /**
     * Found via tsconfig.json's "include" setting point to a *.d.ts file.
     * This is an old-style Definitely Typed definition, which is the worst possible kind,
     * because consumers are expected to provide this, with no idea where it came from.
     */
    localTypings(): IAmbientInterfaceExample;
}

/**
 * Referenced by DefaultExportEdgeCaseReferencer.
 * @public
 */
export declare class ClassExportedAsDefault {
}

/**
 * This class illustrates some cases involving type literals.
 * @public
 */
export declare class ClassWithTypeLiterals {
    /** type literal in  */
    method1(vector: {
        x: number;
        y: number;
    }): void;
    /** type literal output  */
    method2(): {
        classValue: ClassWithTypeLiterals;
        callback: () => number;
    } | undefined;
}

/**
 * Tests a decorator
 * @public
 */
export declare class DecoratorTest {
    /**
     * Function with a decorator
     */
    test(): void;
}

/**
 * @public
 */
export declare class DefaultExportEdgeCase {
    /**
     * This reference is encountered before the definition of DefaultExportEdgeCase.
     * The symbol.name will be "default" in this situation.
     */
    reference: ClassExportedAsDefault;
}

/** @public */
export declare class ForgottenExportConsumer1 {
    test1(): IForgottenExport | undefined;
}

/** @public */
export declare class ForgottenExportConsumer2 {
    test2(): IForgottenExport_2 | undefined;
}

/**
 * This class directly consumes IForgottenDirectDependency
 * and indirectly consumes IForgottenIndirectDependency.
 * @beta
 */
export declare class ForgottenExportConsumer3 {
    test2(): IForgottenDirectDependency | undefined;
}

/**
 * This class is directly consumed by ForgottenExportConsumer3.
 */
declare interface IForgottenDirectDependency {
    member: IForgottenIndirectDependency;
}

/**
 * The ForgottenExportConsumer1 class relies on this IForgottenExport.
 *
 * This should end up as a non-exported "IForgottenExport" in the index.d.ts.
 */
declare interface IForgottenExport {
    instance1: string;
}

/**
 * The ForgottenExportConsumer2 class relies on this IForgottenExport.
 *
 * This should end up as a non-exported "IForgottenExport_2" in the index.d.ts.
 * It is renamed to avoid a conflict with the IForgottenExport from ForgottenExportConsumer1.
 */
declare interface IForgottenExport_2 {
    instance2: string;
}

/**
 * This class is indirectly consumed by ForgottenExportConsumer3.
 */
declare interface IForgottenIndirectDependency {
}

/**
 * This interface is exported as the default export for its source file.
 * @public
 */
export declare interface IInterfaceAsDefaultExport {
    /**
     * A member of the interface
     */
    member: string;
}

/* Excluded from this release type: IMergedInterface */

/* Excluded from this release type: IMergedInterfaceReferencee */

/**
 * api-extractor-test-01
 *
 * @remarks
 * This library is consumed by api-extractor-test-02 and api-extractor-test-03.
 * It tests the basic types of definitions, and all the weird cases for following
 * chains of type aliases.
 *
 * @packagedocumentation
 */
/**
 * A simple, normal definition
 * @public
 */
export declare interface ISimpleInterface {
}

/**
 * This class gets aliased twice before being exported from the package.
 * @public
 */
export declare class ReexportedClass {
    getSelfReference(): ReexportedClass;
    getValue(): string;
}

/* Excluded from this release type: _TypeReferencesInAedoc */

/**
 * Example decorator
 * @public
 */
export declare function virtual(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>): void;
