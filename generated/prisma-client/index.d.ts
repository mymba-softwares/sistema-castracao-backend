
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model PetOwner
 * 
 */
export type PetOwner = $Result.DefaultSelection<Prisma.$PetOwnerPayload>
/**
 * Model CommitmentTerm
 * 
 */
export type CommitmentTerm = $Result.DefaultSelection<Prisma.$CommitmentTermPayload>
/**
 * Model Veterinarian
 * 
 */
export type Veterinarian = $Result.DefaultSelection<Prisma.$VeterinarianPayload>
/**
 * Model Animal
 * 
 */
export type Animal = $Result.DefaultSelection<Prisma.$AnimalPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model MedicalRecord
 * 
 */
export type MedicalRecord = $Result.DefaultSelection<Prisma.$MedicalRecordPayload>
/**
 * Model ClinicalRecord
 * 
 */
export type ClinicalRecord = $Result.DefaultSelection<Prisma.$ClinicalRecordPayload>
/**
 * Model UserDevice
 * 
 */
export type UserDevice = $Result.DefaultSelection<Prisma.$UserDevicePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Bulletin
 * 
 */
export type Bulletin = $Result.DefaultSelection<Prisma.$BulletinPayload>
/**
 * Model SystemLog
 * 
 */
export type SystemLog = $Result.DefaultSelection<Prisma.$SystemLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  administrator: 'administrator',
  semas: 'semas',
  veterinarian: 'veterinarian',
  receptionist: 'receptionist',
  petOwner: 'petOwner',
  student: 'student'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Species: {
  canine: 'canine',
  feline: 'feline'
};

export type Species = (typeof Species)[keyof typeof Species]


export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const ServiceType: {
  triage: 'triage',
  castrationSurgery: 'castrationSurgery',
  postOperative: 'postOperative'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const AppointmentStatus: {
  scheduled: 'scheduled',
  confirmed: 'confirmed',
  completed: 'completed',
  canceled: 'canceled',
  absent: 'absent'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const ClinicalRecordType: {
  triage: 'triage',
  surgery: 'surgery',
  followUp: 'followUp'
};

export type ClinicalRecordType = (typeof ClinicalRecordType)[keyof typeof ClinicalRecordType]


export const SurgeryType: {
  orchiectomy: 'orchiectomy',
  ovariohysterectomy: 'ovariohysterectomy'
};

export type SurgeryType = (typeof SurgeryType)[keyof typeof SurgeryType]


export const NotificationChannel: {
  push: 'push',
  email: 'email',
  whatsapp: 'whatsapp'
};

export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel]


export const Target: {
  all: 'all',
  petOwners: 'petOwners',
  semas: 'semas',
  veterinarians: 'veterinarians',
  receptionists: 'receptionists'
};

export type Target = (typeof Target)[keyof typeof Target]


export const LogType: {
  info: 'info',
  warning: 'warning',
  error: 'error',
  security: 'security',
  audit: 'audit'
};

export type LogType = (typeof LogType)[keyof typeof LogType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Species = $Enums.Species

export const Species: typeof $Enums.Species

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type ClinicalRecordType = $Enums.ClinicalRecordType

export const ClinicalRecordType: typeof $Enums.ClinicalRecordType

export type SurgeryType = $Enums.SurgeryType

export const SurgeryType: typeof $Enums.SurgeryType

export type NotificationChannel = $Enums.NotificationChannel

export const NotificationChannel: typeof $Enums.NotificationChannel

export type Target = $Enums.Target

export const Target: typeof $Enums.Target

export type LogType = $Enums.LogType

export const LogType: typeof $Enums.LogType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petOwner`: Exposes CRUD operations for the **PetOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PetOwners
    * const petOwners = await prisma.petOwner.findMany()
    * ```
    */
  get petOwner(): Prisma.PetOwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commitmentTerm`: Exposes CRUD operations for the **CommitmentTerm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommitmentTerms
    * const commitmentTerms = await prisma.commitmentTerm.findMany()
    * ```
    */
  get commitmentTerm(): Prisma.CommitmentTermDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veterinarian`: Exposes CRUD operations for the **Veterinarian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veterinarians
    * const veterinarians = await prisma.veterinarian.findMany()
    * ```
    */
  get veterinarian(): Prisma.VeterinarianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalRecord`: Exposes CRUD operations for the **MedicalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalRecords
    * const medicalRecords = await prisma.medicalRecord.findMany()
    * ```
    */
  get medicalRecord(): Prisma.MedicalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clinicalRecord`: Exposes CRUD operations for the **ClinicalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClinicalRecords
    * const clinicalRecords = await prisma.clinicalRecord.findMany()
    * ```
    */
  get clinicalRecord(): Prisma.ClinicalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDevice`: Exposes CRUD operations for the **UserDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDevices
    * const userDevices = await prisma.userDevice.findMany()
    * ```
    */
  get userDevice(): Prisma.UserDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulletin`: Exposes CRUD operations for the **Bulletin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bulletins
    * const bulletins = await prisma.bulletin.findMany()
    * ```
    */
  get bulletin(): Prisma.BulletinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemLog`: Exposes CRUD operations for the **SystemLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemLogs
    * const systemLogs = await prisma.systemLog.findMany()
    * ```
    */
  get systemLog(): Prisma.SystemLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Token: 'Token',
    PetOwner: 'PetOwner',
    CommitmentTerm: 'CommitmentTerm',
    Veterinarian: 'Veterinarian',
    Animal: 'Animal',
    Appointment: 'Appointment',
    MedicalRecord: 'MedicalRecord',
    ClinicalRecord: 'ClinicalRecord',
    UserDevice: 'UserDevice',
    Notification: 'Notification',
    Bulletin: 'Bulletin',
    SystemLog: 'SystemLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "token" | "petOwner" | "commitmentTerm" | "veterinarian" | "animal" | "appointment" | "medicalRecord" | "clinicalRecord" | "userDevice" | "notification" | "bulletin" | "systemLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      PetOwner: {
        payload: Prisma.$PetOwnerPayload<ExtArgs>
        fields: Prisma.PetOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetOwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetOwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload>
          }
          findFirst: {
            args: Prisma.PetOwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetOwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload>
          }
          findMany: {
            args: Prisma.PetOwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload>[]
          }
          create: {
            args: Prisma.PetOwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload>
          }
          createMany: {
            args: Prisma.PetOwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetOwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload>[]
          }
          delete: {
            args: Prisma.PetOwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload>
          }
          update: {
            args: Prisma.PetOwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload>
          }
          deleteMany: {
            args: Prisma.PetOwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetOwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetOwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload>[]
          }
          upsert: {
            args: Prisma.PetOwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetOwnerPayload>
          }
          aggregate: {
            args: Prisma.PetOwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetOwner>
          }
          groupBy: {
            args: Prisma.PetOwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetOwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetOwnerCountArgs<ExtArgs>
            result: $Utils.Optional<PetOwnerCountAggregateOutputType> | number
          }
        }
      }
      CommitmentTerm: {
        payload: Prisma.$CommitmentTermPayload<ExtArgs>
        fields: Prisma.CommitmentTermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommitmentTermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommitmentTermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload>
          }
          findFirst: {
            args: Prisma.CommitmentTermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommitmentTermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload>
          }
          findMany: {
            args: Prisma.CommitmentTermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload>[]
          }
          create: {
            args: Prisma.CommitmentTermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload>
          }
          createMany: {
            args: Prisma.CommitmentTermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommitmentTermCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload>[]
          }
          delete: {
            args: Prisma.CommitmentTermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload>
          }
          update: {
            args: Prisma.CommitmentTermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload>
          }
          deleteMany: {
            args: Prisma.CommitmentTermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommitmentTermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommitmentTermUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload>[]
          }
          upsert: {
            args: Prisma.CommitmentTermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitmentTermPayload>
          }
          aggregate: {
            args: Prisma.CommitmentTermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommitmentTerm>
          }
          groupBy: {
            args: Prisma.CommitmentTermGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommitmentTermGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommitmentTermCountArgs<ExtArgs>
            result: $Utils.Optional<CommitmentTermCountAggregateOutputType> | number
          }
        }
      }
      Veterinarian: {
        payload: Prisma.$VeterinarianPayload<ExtArgs>
        fields: Prisma.VeterinarianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeterinarianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeterinarianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload>
          }
          findFirst: {
            args: Prisma.VeterinarianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeterinarianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload>
          }
          findMany: {
            args: Prisma.VeterinarianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload>[]
          }
          create: {
            args: Prisma.VeterinarianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload>
          }
          createMany: {
            args: Prisma.VeterinarianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeterinarianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload>[]
          }
          delete: {
            args: Prisma.VeterinarianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload>
          }
          update: {
            args: Prisma.VeterinarianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload>
          }
          deleteMany: {
            args: Prisma.VeterinarianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeterinarianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeterinarianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload>[]
          }
          upsert: {
            args: Prisma.VeterinarianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarianPayload>
          }
          aggregate: {
            args: Prisma.VeterinarianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeterinarian>
          }
          groupBy: {
            args: Prisma.VeterinarianGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeterinarianGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeterinarianCountArgs<ExtArgs>
            result: $Utils.Optional<VeterinarianCountAggregateOutputType> | number
          }
        }
      }
      Animal: {
        payload: Prisma.$AnimalPayload<ExtArgs>
        fields: Prisma.AnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findFirst: {
            args: Prisma.AnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findMany: {
            args: Prisma.AnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          create: {
            args: Prisma.AnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          createMany: {
            args: Prisma.AnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          delete: {
            args: Prisma.AnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          update: {
            args: Prisma.AnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          deleteMany: {
            args: Prisma.AnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          upsert: {
            args: Prisma.AnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          aggregate: {
            args: Prisma.AnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimal>
          }
          groupBy: {
            args: Prisma.AnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      MedicalRecord: {
        payload: Prisma.$MedicalRecordPayload<ExtArgs>
        fields: Prisma.MedicalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findFirst: {
            args: Prisma.MedicalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findMany: {
            args: Prisma.MedicalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          create: {
            args: Prisma.MedicalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          createMany: {
            args: Prisma.MedicalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          delete: {
            args: Prisma.MedicalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          update: {
            args: Prisma.MedicalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          deleteMany: {
            args: Prisma.MedicalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          upsert: {
            args: Prisma.MedicalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          aggregate: {
            args: Prisma.MedicalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalRecord>
          }
          groupBy: {
            args: Prisma.MedicalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordCountAggregateOutputType> | number
          }
        }
      }
      ClinicalRecord: {
        payload: Prisma.$ClinicalRecordPayload<ExtArgs>
        fields: Prisma.ClinicalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload>
          }
          findFirst: {
            args: Prisma.ClinicalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload>
          }
          findMany: {
            args: Prisma.ClinicalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload>[]
          }
          create: {
            args: Prisma.ClinicalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload>
          }
          createMany: {
            args: Prisma.ClinicalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload>[]
          }
          delete: {
            args: Prisma.ClinicalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload>
          }
          update: {
            args: Prisma.ClinicalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload>
          }
          deleteMany: {
            args: Prisma.ClinicalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClinicalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload>[]
          }
          upsert: {
            args: Prisma.ClinicalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicalRecordPayload>
          }
          aggregate: {
            args: Prisma.ClinicalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinicalRecord>
          }
          groupBy: {
            args: Prisma.ClinicalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicalRecordCountAggregateOutputType> | number
          }
        }
      }
      UserDevice: {
        payload: Prisma.$UserDevicePayload<ExtArgs>
        fields: Prisma.UserDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          findFirst: {
            args: Prisma.UserDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          findMany: {
            args: Prisma.UserDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          create: {
            args: Prisma.UserDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          createMany: {
            args: Prisma.UserDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          delete: {
            args: Prisma.UserDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          update: {
            args: Prisma.UserDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          deleteMany: {
            args: Prisma.UserDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          upsert: {
            args: Prisma.UserDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          aggregate: {
            args: Prisma.UserDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDevice>
          }
          groupBy: {
            args: Prisma.UserDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<UserDeviceCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Bulletin: {
        payload: Prisma.$BulletinPayload<ExtArgs>
        fields: Prisma.BulletinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulletinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulletinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          findFirst: {
            args: Prisma.BulletinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulletinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          findMany: {
            args: Prisma.BulletinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>[]
          }
          create: {
            args: Prisma.BulletinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          createMany: {
            args: Prisma.BulletinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BulletinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>[]
          }
          delete: {
            args: Prisma.BulletinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          update: {
            args: Prisma.BulletinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          deleteMany: {
            args: Prisma.BulletinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulletinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BulletinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>[]
          }
          upsert: {
            args: Prisma.BulletinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPayload>
          }
          aggregate: {
            args: Prisma.BulletinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulletin>
          }
          groupBy: {
            args: Prisma.BulletinGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulletinGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulletinCountArgs<ExtArgs>
            result: $Utils.Optional<BulletinCountAggregateOutputType> | number
          }
        }
      }
      SystemLog: {
        payload: Prisma.$SystemLogPayload<ExtArgs>
        fields: Prisma.SystemLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findFirst: {
            args: Prisma.SystemLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findMany: {
            args: Prisma.SystemLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          create: {
            args: Prisma.SystemLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          createMany: {
            args: Prisma.SystemLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          delete: {
            args: Prisma.SystemLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          update: {
            args: Prisma.SystemLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          deleteMany: {
            args: Prisma.SystemLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          upsert: {
            args: Prisma.SystemLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          aggregate: {
            args: Prisma.SystemLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemLog>
          }
          groupBy: {
            args: Prisma.SystemLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemLogCountArgs<ExtArgs>
            result: $Utils.Optional<SystemLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    token?: TokenOmit
    petOwner?: PetOwnerOmit
    commitmentTerm?: CommitmentTermOmit
    veterinarian?: VeterinarianOmit
    animal?: AnimalOmit
    appointment?: AppointmentOmit
    medicalRecord?: MedicalRecordOmit
    clinicalRecord?: ClinicalRecordOmit
    userDevice?: UserDeviceOmit
    notification?: NotificationOmit
    bulletin?: BulletinOmit
    systemLog?: SystemLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userDevices: number
    notifications: number
    bulletins: number
    systemLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDevices?: boolean | UserCountOutputTypeCountUserDevicesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    bulletins?: boolean | UserCountOutputTypeCountBulletinsArgs
    systemLogs?: boolean | UserCountOutputTypeCountSystemLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBulletinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSystemLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogWhereInput
  }


  /**
   * Count Type PetOwnerCountOutputType
   */

  export type PetOwnerCountOutputType = {
    animals: number
    appointments: number
    commitmentTerms: number
  }

  export type PetOwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animals?: boolean | PetOwnerCountOutputTypeCountAnimalsArgs
    appointments?: boolean | PetOwnerCountOutputTypeCountAppointmentsArgs
    commitmentTerms?: boolean | PetOwnerCountOutputTypeCountCommitmentTermsArgs
  }

  // Custom InputTypes
  /**
   * PetOwnerCountOutputType without action
   */
  export type PetOwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwnerCountOutputType
     */
    select?: PetOwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetOwnerCountOutputType without action
   */
  export type PetOwnerCountOutputTypeCountAnimalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
  }

  /**
   * PetOwnerCountOutputType without action
   */
  export type PetOwnerCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PetOwnerCountOutputType without action
   */
  export type PetOwnerCountOutputTypeCountCommitmentTermsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitmentTermWhereInput
  }


  /**
   * Count Type VeterinarianCountOutputType
   */

  export type VeterinarianCountOutputType = {
    clinicalRecords: number
  }

  export type VeterinarianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinicalRecords?: boolean | VeterinarianCountOutputTypeCountClinicalRecordsArgs
  }

  // Custom InputTypes
  /**
   * VeterinarianCountOutputType without action
   */
  export type VeterinarianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinarianCountOutputType
     */
    select?: VeterinarianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeterinarianCountOutputType without action
   */
  export type VeterinarianCountOutputTypeCountClinicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicalRecordWhereInput
  }


  /**
   * Count Type AnimalCountOutputType
   */

  export type AnimalCountOutputType = {
    appointments: number
  }

  export type AnimalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | AnimalCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimalCountOutputType
     */
    select?: AnimalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    clinicalRecords: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinicalRecords?: boolean | AppointmentCountOutputTypeCountClinicalRecordsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountClinicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicalRecordWhereInput
  }


  /**
   * Count Type MedicalRecordCountOutputType
   */

  export type MedicalRecordCountOutputType = {
    clinicalRecords: number
  }

  export type MedicalRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinicalRecords?: boolean | MedicalRecordCountOutputTypeCountClinicalRecordsArgs
  }

  // Custom InputTypes
  /**
   * MedicalRecordCountOutputType without action
   */
  export type MedicalRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecordCountOutputType
     */
    select?: MedicalRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicalRecordCountOutputType without action
   */
  export type MedicalRecordCountOutputTypeCountClinicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicalRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    role: $Enums.Role | null
    email: string | null
    hashedPassword: string | null
    completeName: string | null
    cpf: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    recoveryMode: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    role: $Enums.Role | null
    email: string | null
    hashedPassword: string | null
    completeName: string | null
    cpf: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    recoveryMode: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    email: number
    hashedPassword: number
    completeName: number
    cpf: number
    phone: number
    createdAt: number
    updatedAt: number
    recoveryMode: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    email?: true
    hashedPassword?: true
    completeName?: true
    cpf?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    recoveryMode?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    email?: true
    hashedPassword?: true
    completeName?: true
    cpf?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    recoveryMode?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    email?: true
    hashedPassword?: true
    completeName?: true
    cpf?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    recoveryMode?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt: Date
    updatedAt: Date
    recoveryMode: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    email?: boolean
    hashedPassword?: boolean
    completeName?: boolean
    cpf?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recoveryMode?: boolean
    token?: boolean | User$tokenArgs<ExtArgs>
    petOwner?: boolean | User$petOwnerArgs<ExtArgs>
    veterinarian?: boolean | User$veterinarianArgs<ExtArgs>
    userDevices?: boolean | User$userDevicesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    bulletins?: boolean | User$bulletinsArgs<ExtArgs>
    systemLogs?: boolean | User$systemLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    email?: boolean
    hashedPassword?: boolean
    completeName?: boolean
    cpf?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recoveryMode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    email?: boolean
    hashedPassword?: boolean
    completeName?: boolean
    cpf?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recoveryMode?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    email?: boolean
    hashedPassword?: boolean
    completeName?: boolean
    cpf?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recoveryMode?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "email" | "hashedPassword" | "completeName" | "cpf" | "phone" | "createdAt" | "updatedAt" | "recoveryMode", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | User$tokenArgs<ExtArgs>
    petOwner?: boolean | User$petOwnerArgs<ExtArgs>
    veterinarian?: boolean | User$veterinarianArgs<ExtArgs>
    userDevices?: boolean | User$userDevicesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    bulletins?: boolean | User$bulletinsArgs<ExtArgs>
    systemLogs?: boolean | User$systemLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs> | null
      petOwner: Prisma.$PetOwnerPayload<ExtArgs> | null
      veterinarian: Prisma.$VeterinarianPayload<ExtArgs> | null
      userDevices: Prisma.$UserDevicePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      bulletins: Prisma.$BulletinPayload<ExtArgs>[]
      systemLogs: Prisma.$SystemLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.Role
      email: string
      hashedPassword: string
      completeName: string
      cpf: string
      phone: string
      createdAt: Date
      updatedAt: Date
      recoveryMode: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends User$tokenArgs<ExtArgs> = {}>(args?: Subset<T, User$tokenArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    petOwner<T extends User$petOwnerArgs<ExtArgs> = {}>(args?: Subset<T, User$petOwnerArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    veterinarian<T extends User$veterinarianArgs<ExtArgs> = {}>(args?: Subset<T, User$veterinarianArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userDevices<T extends User$userDevicesArgs<ExtArgs> = {}>(args?: Subset<T, User$userDevicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bulletins<T extends User$bulletinsArgs<ExtArgs> = {}>(args?: Subset<T, User$bulletinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    systemLogs<T extends User$systemLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$systemLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'Role'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly completeName: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly recoveryMode: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.token
   */
  export type User$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
  }

  /**
   * User.petOwner
   */
  export type User$petOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    where?: PetOwnerWhereInput
  }

  /**
   * User.veterinarian
   */
  export type User$veterinarianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    where?: VeterinarianWhereInput
  }

  /**
   * User.userDevices
   */
  export type User$userDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    where?: UserDeviceWhereInput
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    cursor?: UserDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.bulletins
   */
  export type User$bulletinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    where?: BulletinWhereInput
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    cursor?: BulletinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }

  /**
   * User.systemLogs
   */
  export type User$systemLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    where?: SystemLogWhereInput
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    cursor?: SystemLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    jwt: string | null
    refreshJwt: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    jwt: string | null
    refreshJwt: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    userId: number
    jwt: number
    refreshJwt: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    userId?: true
    jwt?: true
    refreshJwt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    userId?: true
    jwt?: true
    refreshJwt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    userId?: true
    jwt?: true
    refreshJwt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    userId: number
    jwt: string | null
    refreshJwt: string | null
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jwt?: boolean
    refreshJwt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jwt?: boolean
    refreshJwt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jwt?: boolean
    refreshJwt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    userId?: boolean
    jwt?: boolean
    refreshJwt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "jwt" | "refreshJwt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      jwt: string | null
      refreshJwt: string | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly userId: FieldRef<"Token", 'Int'>
    readonly jwt: FieldRef<"Token", 'String'>
    readonly refreshJwt: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model PetOwner
   */

  export type AggregatePetOwner = {
    _count: PetOwnerCountAggregateOutputType | null
    _avg: PetOwnerAvgAggregateOutputType | null
    _sum: PetOwnerSumAggregateOutputType | null
    _min: PetOwnerMinAggregateOutputType | null
    _max: PetOwnerMaxAggregateOutputType | null
  }

  export type PetOwnerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PetOwnerSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PetOwnerMinAggregateOutputType = {
    id: number | null
    userId: number | null
    fullAddress: string | null
  }

  export type PetOwnerMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    fullAddress: string | null
  }

  export type PetOwnerCountAggregateOutputType = {
    id: number
    userId: number
    fullAddress: number
    _all: number
  }


  export type PetOwnerAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PetOwnerSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PetOwnerMinAggregateInputType = {
    id?: true
    userId?: true
    fullAddress?: true
  }

  export type PetOwnerMaxAggregateInputType = {
    id?: true
    userId?: true
    fullAddress?: true
  }

  export type PetOwnerCountAggregateInputType = {
    id?: true
    userId?: true
    fullAddress?: true
    _all?: true
  }

  export type PetOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetOwner to aggregate.
     */
    where?: PetOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetOwners to fetch.
     */
    orderBy?: PetOwnerOrderByWithRelationInput | PetOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PetOwners
    **/
    _count?: true | PetOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetOwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetOwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetOwnerMaxAggregateInputType
  }

  export type GetPetOwnerAggregateType<T extends PetOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePetOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetOwner[P]>
      : GetScalarType<T[P], AggregatePetOwner[P]>
  }




  export type PetOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetOwnerWhereInput
    orderBy?: PetOwnerOrderByWithAggregationInput | PetOwnerOrderByWithAggregationInput[]
    by: PetOwnerScalarFieldEnum[] | PetOwnerScalarFieldEnum
    having?: PetOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetOwnerCountAggregateInputType | true
    _avg?: PetOwnerAvgAggregateInputType
    _sum?: PetOwnerSumAggregateInputType
    _min?: PetOwnerMinAggregateInputType
    _max?: PetOwnerMaxAggregateInputType
  }

  export type PetOwnerGroupByOutputType = {
    id: number
    userId: number
    fullAddress: string
    _count: PetOwnerCountAggregateOutputType | null
    _avg: PetOwnerAvgAggregateOutputType | null
    _sum: PetOwnerSumAggregateOutputType | null
    _min: PetOwnerMinAggregateOutputType | null
    _max: PetOwnerMaxAggregateOutputType | null
  }

  type GetPetOwnerGroupByPayload<T extends PetOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], PetOwnerGroupByOutputType[P]>
        }
      >
    >


  export type PetOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullAddress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    animals?: boolean | PetOwner$animalsArgs<ExtArgs>
    appointments?: boolean | PetOwner$appointmentsArgs<ExtArgs>
    commitmentTerms?: boolean | PetOwner$commitmentTermsArgs<ExtArgs>
    _count?: boolean | PetOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petOwner"]>

  export type PetOwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullAddress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petOwner"]>

  export type PetOwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullAddress?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petOwner"]>

  export type PetOwnerSelectScalar = {
    id?: boolean
    userId?: boolean
    fullAddress?: boolean
  }

  export type PetOwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullAddress", ExtArgs["result"]["petOwner"]>
  export type PetOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    animals?: boolean | PetOwner$animalsArgs<ExtArgs>
    appointments?: boolean | PetOwner$appointmentsArgs<ExtArgs>
    commitmentTerms?: boolean | PetOwner$commitmentTermsArgs<ExtArgs>
    _count?: boolean | PetOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetOwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetOwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PetOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PetOwner"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      animals: Prisma.$AnimalPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      commitmentTerms: Prisma.$CommitmentTermPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      fullAddress: string
    }, ExtArgs["result"]["petOwner"]>
    composites: {}
  }

  type PetOwnerGetPayload<S extends boolean | null | undefined | PetOwnerDefaultArgs> = $Result.GetResult<Prisma.$PetOwnerPayload, S>

  type PetOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetOwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetOwnerCountAggregateInputType | true
    }

  export interface PetOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PetOwner'], meta: { name: 'PetOwner' } }
    /**
     * Find zero or one PetOwner that matches the filter.
     * @param {PetOwnerFindUniqueArgs} args - Arguments to find a PetOwner
     * @example
     * // Get one PetOwner
     * const petOwner = await prisma.petOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetOwnerFindUniqueArgs>(args: SelectSubset<T, PetOwnerFindUniqueArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PetOwner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetOwnerFindUniqueOrThrowArgs} args - Arguments to find a PetOwner
     * @example
     * // Get one PetOwner
     * const petOwner = await prisma.petOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetOwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, PetOwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetOwnerFindFirstArgs} args - Arguments to find a PetOwner
     * @example
     * // Get one PetOwner
     * const petOwner = await prisma.petOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetOwnerFindFirstArgs>(args?: SelectSubset<T, PetOwnerFindFirstArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetOwnerFindFirstOrThrowArgs} args - Arguments to find a PetOwner
     * @example
     * // Get one PetOwner
     * const petOwner = await prisma.petOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetOwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, PetOwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PetOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetOwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PetOwners
     * const petOwners = await prisma.petOwner.findMany()
     * 
     * // Get first 10 PetOwners
     * const petOwners = await prisma.petOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petOwnerWithIdOnly = await prisma.petOwner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetOwnerFindManyArgs>(args?: SelectSubset<T, PetOwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PetOwner.
     * @param {PetOwnerCreateArgs} args - Arguments to create a PetOwner.
     * @example
     * // Create one PetOwner
     * const PetOwner = await prisma.petOwner.create({
     *   data: {
     *     // ... data to create a PetOwner
     *   }
     * })
     * 
     */
    create<T extends PetOwnerCreateArgs>(args: SelectSubset<T, PetOwnerCreateArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PetOwners.
     * @param {PetOwnerCreateManyArgs} args - Arguments to create many PetOwners.
     * @example
     * // Create many PetOwners
     * const petOwner = await prisma.petOwner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetOwnerCreateManyArgs>(args?: SelectSubset<T, PetOwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PetOwners and returns the data saved in the database.
     * @param {PetOwnerCreateManyAndReturnArgs} args - Arguments to create many PetOwners.
     * @example
     * // Create many PetOwners
     * const petOwner = await prisma.petOwner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PetOwners and only return the `id`
     * const petOwnerWithIdOnly = await prisma.petOwner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetOwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, PetOwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PetOwner.
     * @param {PetOwnerDeleteArgs} args - Arguments to delete one PetOwner.
     * @example
     * // Delete one PetOwner
     * const PetOwner = await prisma.petOwner.delete({
     *   where: {
     *     // ... filter to delete one PetOwner
     *   }
     * })
     * 
     */
    delete<T extends PetOwnerDeleteArgs>(args: SelectSubset<T, PetOwnerDeleteArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PetOwner.
     * @param {PetOwnerUpdateArgs} args - Arguments to update one PetOwner.
     * @example
     * // Update one PetOwner
     * const petOwner = await prisma.petOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetOwnerUpdateArgs>(args: SelectSubset<T, PetOwnerUpdateArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PetOwners.
     * @param {PetOwnerDeleteManyArgs} args - Arguments to filter PetOwners to delete.
     * @example
     * // Delete a few PetOwners
     * const { count } = await prisma.petOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetOwnerDeleteManyArgs>(args?: SelectSubset<T, PetOwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PetOwners
     * const petOwner = await prisma.petOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetOwnerUpdateManyArgs>(args: SelectSubset<T, PetOwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetOwners and returns the data updated in the database.
     * @param {PetOwnerUpdateManyAndReturnArgs} args - Arguments to update many PetOwners.
     * @example
     * // Update many PetOwners
     * const petOwner = await prisma.petOwner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PetOwners and only return the `id`
     * const petOwnerWithIdOnly = await prisma.petOwner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetOwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, PetOwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PetOwner.
     * @param {PetOwnerUpsertArgs} args - Arguments to update or create a PetOwner.
     * @example
     * // Update or create a PetOwner
     * const petOwner = await prisma.petOwner.upsert({
     *   create: {
     *     // ... data to create a PetOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PetOwner we want to update
     *   }
     * })
     */
    upsert<T extends PetOwnerUpsertArgs>(args: SelectSubset<T, PetOwnerUpsertArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PetOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetOwnerCountArgs} args - Arguments to filter PetOwners to count.
     * @example
     * // Count the number of PetOwners
     * const count = await prisma.petOwner.count({
     *   where: {
     *     // ... the filter for the PetOwners we want to count
     *   }
     * })
    **/
    count<T extends PetOwnerCountArgs>(
      args?: Subset<T, PetOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PetOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetOwnerAggregateArgs>(args: Subset<T, PetOwnerAggregateArgs>): Prisma.PrismaPromise<GetPetOwnerAggregateType<T>>

    /**
     * Group by PetOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetOwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetOwnerGroupByArgs['orderBy'] }
        : { orderBy?: PetOwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PetOwner model
   */
  readonly fields: PetOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PetOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    animals<T extends PetOwner$animalsArgs<ExtArgs> = {}>(args?: Subset<T, PetOwner$animalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends PetOwner$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, PetOwner$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commitmentTerms<T extends PetOwner$commitmentTermsArgs<ExtArgs> = {}>(args?: Subset<T, PetOwner$commitmentTermsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PetOwner model
   */
  interface PetOwnerFieldRefs {
    readonly id: FieldRef<"PetOwner", 'Int'>
    readonly userId: FieldRef<"PetOwner", 'Int'>
    readonly fullAddress: FieldRef<"PetOwner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PetOwner findUnique
   */
  export type PetOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PetOwner to fetch.
     */
    where: PetOwnerWhereUniqueInput
  }

  /**
   * PetOwner findUniqueOrThrow
   */
  export type PetOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PetOwner to fetch.
     */
    where: PetOwnerWhereUniqueInput
  }

  /**
   * PetOwner findFirst
   */
  export type PetOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PetOwner to fetch.
     */
    where?: PetOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetOwners to fetch.
     */
    orderBy?: PetOwnerOrderByWithRelationInput | PetOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetOwners.
     */
    cursor?: PetOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetOwners.
     */
    distinct?: PetOwnerScalarFieldEnum | PetOwnerScalarFieldEnum[]
  }

  /**
   * PetOwner findFirstOrThrow
   */
  export type PetOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PetOwner to fetch.
     */
    where?: PetOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetOwners to fetch.
     */
    orderBy?: PetOwnerOrderByWithRelationInput | PetOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetOwners.
     */
    cursor?: PetOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetOwners.
     */
    distinct?: PetOwnerScalarFieldEnum | PetOwnerScalarFieldEnum[]
  }

  /**
   * PetOwner findMany
   */
  export type PetOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PetOwners to fetch.
     */
    where?: PetOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetOwners to fetch.
     */
    orderBy?: PetOwnerOrderByWithRelationInput | PetOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PetOwners.
     */
    cursor?: PetOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetOwners.
     */
    skip?: number
    distinct?: PetOwnerScalarFieldEnum | PetOwnerScalarFieldEnum[]
  }

  /**
   * PetOwner create
   */
  export type PetOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a PetOwner.
     */
    data: XOR<PetOwnerCreateInput, PetOwnerUncheckedCreateInput>
  }

  /**
   * PetOwner createMany
   */
  export type PetOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PetOwners.
     */
    data: PetOwnerCreateManyInput | PetOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetOwner createManyAndReturn
   */
  export type PetOwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * The data used to create many PetOwners.
     */
    data: PetOwnerCreateManyInput | PetOwnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetOwner update
   */
  export type PetOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a PetOwner.
     */
    data: XOR<PetOwnerUpdateInput, PetOwnerUncheckedUpdateInput>
    /**
     * Choose, which PetOwner to update.
     */
    where: PetOwnerWhereUniqueInput
  }

  /**
   * PetOwner updateMany
   */
  export type PetOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PetOwners.
     */
    data: XOR<PetOwnerUpdateManyMutationInput, PetOwnerUncheckedUpdateManyInput>
    /**
     * Filter which PetOwners to update
     */
    where?: PetOwnerWhereInput
    /**
     * Limit how many PetOwners to update.
     */
    limit?: number
  }

  /**
   * PetOwner updateManyAndReturn
   */
  export type PetOwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * The data used to update PetOwners.
     */
    data: XOR<PetOwnerUpdateManyMutationInput, PetOwnerUncheckedUpdateManyInput>
    /**
     * Filter which PetOwners to update
     */
    where?: PetOwnerWhereInput
    /**
     * Limit how many PetOwners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetOwner upsert
   */
  export type PetOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the PetOwner to update in case it exists.
     */
    where: PetOwnerWhereUniqueInput
    /**
     * In case the PetOwner found by the `where` argument doesn't exist, create a new PetOwner with this data.
     */
    create: XOR<PetOwnerCreateInput, PetOwnerUncheckedCreateInput>
    /**
     * In case the PetOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetOwnerUpdateInput, PetOwnerUncheckedUpdateInput>
  }

  /**
   * PetOwner delete
   */
  export type PetOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
    /**
     * Filter which PetOwner to delete.
     */
    where: PetOwnerWhereUniqueInput
  }

  /**
   * PetOwner deleteMany
   */
  export type PetOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetOwners to delete
     */
    where?: PetOwnerWhereInput
    /**
     * Limit how many PetOwners to delete.
     */
    limit?: number
  }

  /**
   * PetOwner.animals
   */
  export type PetOwner$animalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    cursor?: AnimalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * PetOwner.appointments
   */
  export type PetOwner$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * PetOwner.commitmentTerms
   */
  export type PetOwner$commitmentTermsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    where?: CommitmentTermWhereInput
    orderBy?: CommitmentTermOrderByWithRelationInput | CommitmentTermOrderByWithRelationInput[]
    cursor?: CommitmentTermWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitmentTermScalarFieldEnum | CommitmentTermScalarFieldEnum[]
  }

  /**
   * PetOwner without action
   */
  export type PetOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetOwner
     */
    select?: PetOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetOwner
     */
    omit?: PetOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetOwnerInclude<ExtArgs> | null
  }


  /**
   * Model CommitmentTerm
   */

  export type AggregateCommitmentTerm = {
    _count: CommitmentTermCountAggregateOutputType | null
    _avg: CommitmentTermAvgAggregateOutputType | null
    _sum: CommitmentTermSumAggregateOutputType | null
    _min: CommitmentTermMinAggregateOutputType | null
    _max: CommitmentTermMaxAggregateOutputType | null
  }

  export type CommitmentTermAvgAggregateOutputType = {
    id: number | null
    petOwnerId: number | null
  }

  export type CommitmentTermSumAggregateOutputType = {
    id: number | null
    petOwnerId: number | null
  }

  export type CommitmentTermMinAggregateOutputType = {
    id: number | null
    petOwnerId: number | null
    signatureDate: Date | null
    documentUrl: string | null
  }

  export type CommitmentTermMaxAggregateOutputType = {
    id: number | null
    petOwnerId: number | null
    signatureDate: Date | null
    documentUrl: string | null
  }

  export type CommitmentTermCountAggregateOutputType = {
    id: number
    petOwnerId: number
    signatureDate: number
    documentUrl: number
    _all: number
  }


  export type CommitmentTermAvgAggregateInputType = {
    id?: true
    petOwnerId?: true
  }

  export type CommitmentTermSumAggregateInputType = {
    id?: true
    petOwnerId?: true
  }

  export type CommitmentTermMinAggregateInputType = {
    id?: true
    petOwnerId?: true
    signatureDate?: true
    documentUrl?: true
  }

  export type CommitmentTermMaxAggregateInputType = {
    id?: true
    petOwnerId?: true
    signatureDate?: true
    documentUrl?: true
  }

  export type CommitmentTermCountAggregateInputType = {
    id?: true
    petOwnerId?: true
    signatureDate?: true
    documentUrl?: true
    _all?: true
  }

  export type CommitmentTermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommitmentTerm to aggregate.
     */
    where?: CommitmentTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitmentTerms to fetch.
     */
    orderBy?: CommitmentTermOrderByWithRelationInput | CommitmentTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommitmentTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitmentTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitmentTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommitmentTerms
    **/
    _count?: true | CommitmentTermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommitmentTermAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommitmentTermSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommitmentTermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommitmentTermMaxAggregateInputType
  }

  export type GetCommitmentTermAggregateType<T extends CommitmentTermAggregateArgs> = {
        [P in keyof T & keyof AggregateCommitmentTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommitmentTerm[P]>
      : GetScalarType<T[P], AggregateCommitmentTerm[P]>
  }




  export type CommitmentTermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitmentTermWhereInput
    orderBy?: CommitmentTermOrderByWithAggregationInput | CommitmentTermOrderByWithAggregationInput[]
    by: CommitmentTermScalarFieldEnum[] | CommitmentTermScalarFieldEnum
    having?: CommitmentTermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommitmentTermCountAggregateInputType | true
    _avg?: CommitmentTermAvgAggregateInputType
    _sum?: CommitmentTermSumAggregateInputType
    _min?: CommitmentTermMinAggregateInputType
    _max?: CommitmentTermMaxAggregateInputType
  }

  export type CommitmentTermGroupByOutputType = {
    id: number
    petOwnerId: number
    signatureDate: Date
    documentUrl: string | null
    _count: CommitmentTermCountAggregateOutputType | null
    _avg: CommitmentTermAvgAggregateOutputType | null
    _sum: CommitmentTermSumAggregateOutputType | null
    _min: CommitmentTermMinAggregateOutputType | null
    _max: CommitmentTermMaxAggregateOutputType | null
  }

  type GetCommitmentTermGroupByPayload<T extends CommitmentTermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommitmentTermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommitmentTermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommitmentTermGroupByOutputType[P]>
            : GetScalarType<T[P], CommitmentTermGroupByOutputType[P]>
        }
      >
    >


  export type CommitmentTermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petOwnerId?: boolean
    signatureDate?: boolean
    documentUrl?: boolean
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commitmentTerm"]>

  export type CommitmentTermSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petOwnerId?: boolean
    signatureDate?: boolean
    documentUrl?: boolean
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commitmentTerm"]>

  export type CommitmentTermSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petOwnerId?: boolean
    signatureDate?: boolean
    documentUrl?: boolean
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commitmentTerm"]>

  export type CommitmentTermSelectScalar = {
    id?: boolean
    petOwnerId?: boolean
    signatureDate?: boolean
    documentUrl?: boolean
  }

  export type CommitmentTermOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "petOwnerId" | "signatureDate" | "documentUrl", ExtArgs["result"]["commitmentTerm"]>
  export type CommitmentTermInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }
  export type CommitmentTermIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }
  export type CommitmentTermIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }

  export type $CommitmentTermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommitmentTerm"
    objects: {
      petOwner: Prisma.$PetOwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      petOwnerId: number
      signatureDate: Date
      documentUrl: string | null
    }, ExtArgs["result"]["commitmentTerm"]>
    composites: {}
  }

  type CommitmentTermGetPayload<S extends boolean | null | undefined | CommitmentTermDefaultArgs> = $Result.GetResult<Prisma.$CommitmentTermPayload, S>

  type CommitmentTermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommitmentTermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommitmentTermCountAggregateInputType | true
    }

  export interface CommitmentTermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommitmentTerm'], meta: { name: 'CommitmentTerm' } }
    /**
     * Find zero or one CommitmentTerm that matches the filter.
     * @param {CommitmentTermFindUniqueArgs} args - Arguments to find a CommitmentTerm
     * @example
     * // Get one CommitmentTerm
     * const commitmentTerm = await prisma.commitmentTerm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommitmentTermFindUniqueArgs>(args: SelectSubset<T, CommitmentTermFindUniqueArgs<ExtArgs>>): Prisma__CommitmentTermClient<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommitmentTerm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommitmentTermFindUniqueOrThrowArgs} args - Arguments to find a CommitmentTerm
     * @example
     * // Get one CommitmentTerm
     * const commitmentTerm = await prisma.commitmentTerm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommitmentTermFindUniqueOrThrowArgs>(args: SelectSubset<T, CommitmentTermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommitmentTermClient<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommitmentTerm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentTermFindFirstArgs} args - Arguments to find a CommitmentTerm
     * @example
     * // Get one CommitmentTerm
     * const commitmentTerm = await prisma.commitmentTerm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommitmentTermFindFirstArgs>(args?: SelectSubset<T, CommitmentTermFindFirstArgs<ExtArgs>>): Prisma__CommitmentTermClient<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommitmentTerm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentTermFindFirstOrThrowArgs} args - Arguments to find a CommitmentTerm
     * @example
     * // Get one CommitmentTerm
     * const commitmentTerm = await prisma.commitmentTerm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommitmentTermFindFirstOrThrowArgs>(args?: SelectSubset<T, CommitmentTermFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommitmentTermClient<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommitmentTerms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentTermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommitmentTerms
     * const commitmentTerms = await prisma.commitmentTerm.findMany()
     * 
     * // Get first 10 CommitmentTerms
     * const commitmentTerms = await prisma.commitmentTerm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commitmentTermWithIdOnly = await prisma.commitmentTerm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommitmentTermFindManyArgs>(args?: SelectSubset<T, CommitmentTermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommitmentTerm.
     * @param {CommitmentTermCreateArgs} args - Arguments to create a CommitmentTerm.
     * @example
     * // Create one CommitmentTerm
     * const CommitmentTerm = await prisma.commitmentTerm.create({
     *   data: {
     *     // ... data to create a CommitmentTerm
     *   }
     * })
     * 
     */
    create<T extends CommitmentTermCreateArgs>(args: SelectSubset<T, CommitmentTermCreateArgs<ExtArgs>>): Prisma__CommitmentTermClient<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommitmentTerms.
     * @param {CommitmentTermCreateManyArgs} args - Arguments to create many CommitmentTerms.
     * @example
     * // Create many CommitmentTerms
     * const commitmentTerm = await prisma.commitmentTerm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommitmentTermCreateManyArgs>(args?: SelectSubset<T, CommitmentTermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommitmentTerms and returns the data saved in the database.
     * @param {CommitmentTermCreateManyAndReturnArgs} args - Arguments to create many CommitmentTerms.
     * @example
     * // Create many CommitmentTerms
     * const commitmentTerm = await prisma.commitmentTerm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommitmentTerms and only return the `id`
     * const commitmentTermWithIdOnly = await prisma.commitmentTerm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommitmentTermCreateManyAndReturnArgs>(args?: SelectSubset<T, CommitmentTermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommitmentTerm.
     * @param {CommitmentTermDeleteArgs} args - Arguments to delete one CommitmentTerm.
     * @example
     * // Delete one CommitmentTerm
     * const CommitmentTerm = await prisma.commitmentTerm.delete({
     *   where: {
     *     // ... filter to delete one CommitmentTerm
     *   }
     * })
     * 
     */
    delete<T extends CommitmentTermDeleteArgs>(args: SelectSubset<T, CommitmentTermDeleteArgs<ExtArgs>>): Prisma__CommitmentTermClient<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommitmentTerm.
     * @param {CommitmentTermUpdateArgs} args - Arguments to update one CommitmentTerm.
     * @example
     * // Update one CommitmentTerm
     * const commitmentTerm = await prisma.commitmentTerm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommitmentTermUpdateArgs>(args: SelectSubset<T, CommitmentTermUpdateArgs<ExtArgs>>): Prisma__CommitmentTermClient<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommitmentTerms.
     * @param {CommitmentTermDeleteManyArgs} args - Arguments to filter CommitmentTerms to delete.
     * @example
     * // Delete a few CommitmentTerms
     * const { count } = await prisma.commitmentTerm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommitmentTermDeleteManyArgs>(args?: SelectSubset<T, CommitmentTermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommitmentTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentTermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommitmentTerms
     * const commitmentTerm = await prisma.commitmentTerm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommitmentTermUpdateManyArgs>(args: SelectSubset<T, CommitmentTermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommitmentTerms and returns the data updated in the database.
     * @param {CommitmentTermUpdateManyAndReturnArgs} args - Arguments to update many CommitmentTerms.
     * @example
     * // Update many CommitmentTerms
     * const commitmentTerm = await prisma.commitmentTerm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommitmentTerms and only return the `id`
     * const commitmentTermWithIdOnly = await prisma.commitmentTerm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommitmentTermUpdateManyAndReturnArgs>(args: SelectSubset<T, CommitmentTermUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommitmentTerm.
     * @param {CommitmentTermUpsertArgs} args - Arguments to update or create a CommitmentTerm.
     * @example
     * // Update or create a CommitmentTerm
     * const commitmentTerm = await prisma.commitmentTerm.upsert({
     *   create: {
     *     // ... data to create a CommitmentTerm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommitmentTerm we want to update
     *   }
     * })
     */
    upsert<T extends CommitmentTermUpsertArgs>(args: SelectSubset<T, CommitmentTermUpsertArgs<ExtArgs>>): Prisma__CommitmentTermClient<$Result.GetResult<Prisma.$CommitmentTermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommitmentTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentTermCountArgs} args - Arguments to filter CommitmentTerms to count.
     * @example
     * // Count the number of CommitmentTerms
     * const count = await prisma.commitmentTerm.count({
     *   where: {
     *     // ... the filter for the CommitmentTerms we want to count
     *   }
     * })
    **/
    count<T extends CommitmentTermCountArgs>(
      args?: Subset<T, CommitmentTermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommitmentTermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommitmentTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentTermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommitmentTermAggregateArgs>(args: Subset<T, CommitmentTermAggregateArgs>): Prisma.PrismaPromise<GetCommitmentTermAggregateType<T>>

    /**
     * Group by CommitmentTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitmentTermGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommitmentTermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommitmentTermGroupByArgs['orderBy'] }
        : { orderBy?: CommitmentTermGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommitmentTermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommitmentTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommitmentTerm model
   */
  readonly fields: CommitmentTermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommitmentTerm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommitmentTermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    petOwner<T extends PetOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetOwnerDefaultArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommitmentTerm model
   */
  interface CommitmentTermFieldRefs {
    readonly id: FieldRef<"CommitmentTerm", 'Int'>
    readonly petOwnerId: FieldRef<"CommitmentTerm", 'Int'>
    readonly signatureDate: FieldRef<"CommitmentTerm", 'DateTime'>
    readonly documentUrl: FieldRef<"CommitmentTerm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CommitmentTerm findUnique
   */
  export type CommitmentTermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    /**
     * Filter, which CommitmentTerm to fetch.
     */
    where: CommitmentTermWhereUniqueInput
  }

  /**
   * CommitmentTerm findUniqueOrThrow
   */
  export type CommitmentTermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    /**
     * Filter, which CommitmentTerm to fetch.
     */
    where: CommitmentTermWhereUniqueInput
  }

  /**
   * CommitmentTerm findFirst
   */
  export type CommitmentTermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    /**
     * Filter, which CommitmentTerm to fetch.
     */
    where?: CommitmentTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitmentTerms to fetch.
     */
    orderBy?: CommitmentTermOrderByWithRelationInput | CommitmentTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommitmentTerms.
     */
    cursor?: CommitmentTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitmentTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitmentTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommitmentTerms.
     */
    distinct?: CommitmentTermScalarFieldEnum | CommitmentTermScalarFieldEnum[]
  }

  /**
   * CommitmentTerm findFirstOrThrow
   */
  export type CommitmentTermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    /**
     * Filter, which CommitmentTerm to fetch.
     */
    where?: CommitmentTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitmentTerms to fetch.
     */
    orderBy?: CommitmentTermOrderByWithRelationInput | CommitmentTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommitmentTerms.
     */
    cursor?: CommitmentTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitmentTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitmentTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommitmentTerms.
     */
    distinct?: CommitmentTermScalarFieldEnum | CommitmentTermScalarFieldEnum[]
  }

  /**
   * CommitmentTerm findMany
   */
  export type CommitmentTermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    /**
     * Filter, which CommitmentTerms to fetch.
     */
    where?: CommitmentTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommitmentTerms to fetch.
     */
    orderBy?: CommitmentTermOrderByWithRelationInput | CommitmentTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommitmentTerms.
     */
    cursor?: CommitmentTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommitmentTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommitmentTerms.
     */
    skip?: number
    distinct?: CommitmentTermScalarFieldEnum | CommitmentTermScalarFieldEnum[]
  }

  /**
   * CommitmentTerm create
   */
  export type CommitmentTermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    /**
     * The data needed to create a CommitmentTerm.
     */
    data: XOR<CommitmentTermCreateInput, CommitmentTermUncheckedCreateInput>
  }

  /**
   * CommitmentTerm createMany
   */
  export type CommitmentTermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommitmentTerms.
     */
    data: CommitmentTermCreateManyInput | CommitmentTermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommitmentTerm createManyAndReturn
   */
  export type CommitmentTermCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * The data used to create many CommitmentTerms.
     */
    data: CommitmentTermCreateManyInput | CommitmentTermCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommitmentTerm update
   */
  export type CommitmentTermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    /**
     * The data needed to update a CommitmentTerm.
     */
    data: XOR<CommitmentTermUpdateInput, CommitmentTermUncheckedUpdateInput>
    /**
     * Choose, which CommitmentTerm to update.
     */
    where: CommitmentTermWhereUniqueInput
  }

  /**
   * CommitmentTerm updateMany
   */
  export type CommitmentTermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommitmentTerms.
     */
    data: XOR<CommitmentTermUpdateManyMutationInput, CommitmentTermUncheckedUpdateManyInput>
    /**
     * Filter which CommitmentTerms to update
     */
    where?: CommitmentTermWhereInput
    /**
     * Limit how many CommitmentTerms to update.
     */
    limit?: number
  }

  /**
   * CommitmentTerm updateManyAndReturn
   */
  export type CommitmentTermUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * The data used to update CommitmentTerms.
     */
    data: XOR<CommitmentTermUpdateManyMutationInput, CommitmentTermUncheckedUpdateManyInput>
    /**
     * Filter which CommitmentTerms to update
     */
    where?: CommitmentTermWhereInput
    /**
     * Limit how many CommitmentTerms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommitmentTerm upsert
   */
  export type CommitmentTermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    /**
     * The filter to search for the CommitmentTerm to update in case it exists.
     */
    where: CommitmentTermWhereUniqueInput
    /**
     * In case the CommitmentTerm found by the `where` argument doesn't exist, create a new CommitmentTerm with this data.
     */
    create: XOR<CommitmentTermCreateInput, CommitmentTermUncheckedCreateInput>
    /**
     * In case the CommitmentTerm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommitmentTermUpdateInput, CommitmentTermUncheckedUpdateInput>
  }

  /**
   * CommitmentTerm delete
   */
  export type CommitmentTermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
    /**
     * Filter which CommitmentTerm to delete.
     */
    where: CommitmentTermWhereUniqueInput
  }

  /**
   * CommitmentTerm deleteMany
   */
  export type CommitmentTermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommitmentTerms to delete
     */
    where?: CommitmentTermWhereInput
    /**
     * Limit how many CommitmentTerms to delete.
     */
    limit?: number
  }

  /**
   * CommitmentTerm without action
   */
  export type CommitmentTermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommitmentTerm
     */
    select?: CommitmentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommitmentTerm
     */
    omit?: CommitmentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitmentTermInclude<ExtArgs> | null
  }


  /**
   * Model Veterinarian
   */

  export type AggregateVeterinarian = {
    _count: VeterinarianCountAggregateOutputType | null
    _avg: VeterinarianAvgAggregateOutputType | null
    _sum: VeterinarianSumAggregateOutputType | null
    _min: VeterinarianMinAggregateOutputType | null
    _max: VeterinarianMaxAggregateOutputType | null
  }

  export type VeterinarianAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VeterinarianSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VeterinarianMinAggregateOutputType = {
    id: number | null
    userId: number | null
    crmv: string | null
    active: boolean | null
  }

  export type VeterinarianMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    crmv: string | null
    active: boolean | null
  }

  export type VeterinarianCountAggregateOutputType = {
    id: number
    userId: number
    crmv: number
    active: number
    _all: number
  }


  export type VeterinarianAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VeterinarianSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VeterinarianMinAggregateInputType = {
    id?: true
    userId?: true
    crmv?: true
    active?: true
  }

  export type VeterinarianMaxAggregateInputType = {
    id?: true
    userId?: true
    crmv?: true
    active?: true
  }

  export type VeterinarianCountAggregateInputType = {
    id?: true
    userId?: true
    crmv?: true
    active?: true
    _all?: true
  }

  export type VeterinarianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veterinarian to aggregate.
     */
    where?: VeterinarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarians to fetch.
     */
    orderBy?: VeterinarianOrderByWithRelationInput | VeterinarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeterinarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veterinarians
    **/
    _count?: true | VeterinarianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeterinarianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeterinarianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeterinarianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeterinarianMaxAggregateInputType
  }

  export type GetVeterinarianAggregateType<T extends VeterinarianAggregateArgs> = {
        [P in keyof T & keyof AggregateVeterinarian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeterinarian[P]>
      : GetScalarType<T[P], AggregateVeterinarian[P]>
  }




  export type VeterinarianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeterinarianWhereInput
    orderBy?: VeterinarianOrderByWithAggregationInput | VeterinarianOrderByWithAggregationInput[]
    by: VeterinarianScalarFieldEnum[] | VeterinarianScalarFieldEnum
    having?: VeterinarianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeterinarianCountAggregateInputType | true
    _avg?: VeterinarianAvgAggregateInputType
    _sum?: VeterinarianSumAggregateInputType
    _min?: VeterinarianMinAggregateInputType
    _max?: VeterinarianMaxAggregateInputType
  }

  export type VeterinarianGroupByOutputType = {
    id: number
    userId: number
    crmv: string | null
    active: boolean
    _count: VeterinarianCountAggregateOutputType | null
    _avg: VeterinarianAvgAggregateOutputType | null
    _sum: VeterinarianSumAggregateOutputType | null
    _min: VeterinarianMinAggregateOutputType | null
    _max: VeterinarianMaxAggregateOutputType | null
  }

  type GetVeterinarianGroupByPayload<T extends VeterinarianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeterinarianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeterinarianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeterinarianGroupByOutputType[P]>
            : GetScalarType<T[P], VeterinarianGroupByOutputType[P]>
        }
      >
    >


  export type VeterinarianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    crmv?: boolean
    active?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    clinicalRecords?: boolean | Veterinarian$clinicalRecordsArgs<ExtArgs>
    _count?: boolean | VeterinarianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veterinarian"]>

  export type VeterinarianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    crmv?: boolean
    active?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veterinarian"]>

  export type VeterinarianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    crmv?: boolean
    active?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veterinarian"]>

  export type VeterinarianSelectScalar = {
    id?: boolean
    userId?: boolean
    crmv?: boolean
    active?: boolean
  }

  export type VeterinarianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "crmv" | "active", ExtArgs["result"]["veterinarian"]>
  export type VeterinarianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    clinicalRecords?: boolean | Veterinarian$clinicalRecordsArgs<ExtArgs>
    _count?: boolean | VeterinarianCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeterinarianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VeterinarianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VeterinarianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veterinarian"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      clinicalRecords: Prisma.$ClinicalRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      crmv: string | null
      active: boolean
    }, ExtArgs["result"]["veterinarian"]>
    composites: {}
  }

  type VeterinarianGetPayload<S extends boolean | null | undefined | VeterinarianDefaultArgs> = $Result.GetResult<Prisma.$VeterinarianPayload, S>

  type VeterinarianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeterinarianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeterinarianCountAggregateInputType | true
    }

  export interface VeterinarianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veterinarian'], meta: { name: 'Veterinarian' } }
    /**
     * Find zero or one Veterinarian that matches the filter.
     * @param {VeterinarianFindUniqueArgs} args - Arguments to find a Veterinarian
     * @example
     * // Get one Veterinarian
     * const veterinarian = await prisma.veterinarian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeterinarianFindUniqueArgs>(args: SelectSubset<T, VeterinarianFindUniqueArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veterinarian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeterinarianFindUniqueOrThrowArgs} args - Arguments to find a Veterinarian
     * @example
     * // Get one Veterinarian
     * const veterinarian = await prisma.veterinarian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeterinarianFindUniqueOrThrowArgs>(args: SelectSubset<T, VeterinarianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veterinarian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarianFindFirstArgs} args - Arguments to find a Veterinarian
     * @example
     * // Get one Veterinarian
     * const veterinarian = await prisma.veterinarian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeterinarianFindFirstArgs>(args?: SelectSubset<T, VeterinarianFindFirstArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veterinarian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarianFindFirstOrThrowArgs} args - Arguments to find a Veterinarian
     * @example
     * // Get one Veterinarian
     * const veterinarian = await prisma.veterinarian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeterinarianFindFirstOrThrowArgs>(args?: SelectSubset<T, VeterinarianFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veterinarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veterinarians
     * const veterinarians = await prisma.veterinarian.findMany()
     * 
     * // Get first 10 Veterinarians
     * const veterinarians = await prisma.veterinarian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veterinarianWithIdOnly = await prisma.veterinarian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeterinarianFindManyArgs>(args?: SelectSubset<T, VeterinarianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veterinarian.
     * @param {VeterinarianCreateArgs} args - Arguments to create a Veterinarian.
     * @example
     * // Create one Veterinarian
     * const Veterinarian = await prisma.veterinarian.create({
     *   data: {
     *     // ... data to create a Veterinarian
     *   }
     * })
     * 
     */
    create<T extends VeterinarianCreateArgs>(args: SelectSubset<T, VeterinarianCreateArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veterinarians.
     * @param {VeterinarianCreateManyArgs} args - Arguments to create many Veterinarians.
     * @example
     * // Create many Veterinarians
     * const veterinarian = await prisma.veterinarian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeterinarianCreateManyArgs>(args?: SelectSubset<T, VeterinarianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veterinarians and returns the data saved in the database.
     * @param {VeterinarianCreateManyAndReturnArgs} args - Arguments to create many Veterinarians.
     * @example
     * // Create many Veterinarians
     * const veterinarian = await prisma.veterinarian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veterinarians and only return the `id`
     * const veterinarianWithIdOnly = await prisma.veterinarian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeterinarianCreateManyAndReturnArgs>(args?: SelectSubset<T, VeterinarianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veterinarian.
     * @param {VeterinarianDeleteArgs} args - Arguments to delete one Veterinarian.
     * @example
     * // Delete one Veterinarian
     * const Veterinarian = await prisma.veterinarian.delete({
     *   where: {
     *     // ... filter to delete one Veterinarian
     *   }
     * })
     * 
     */
    delete<T extends VeterinarianDeleteArgs>(args: SelectSubset<T, VeterinarianDeleteArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veterinarian.
     * @param {VeterinarianUpdateArgs} args - Arguments to update one Veterinarian.
     * @example
     * // Update one Veterinarian
     * const veterinarian = await prisma.veterinarian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeterinarianUpdateArgs>(args: SelectSubset<T, VeterinarianUpdateArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veterinarians.
     * @param {VeterinarianDeleteManyArgs} args - Arguments to filter Veterinarians to delete.
     * @example
     * // Delete a few Veterinarians
     * const { count } = await prisma.veterinarian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeterinarianDeleteManyArgs>(args?: SelectSubset<T, VeterinarianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veterinarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veterinarians
     * const veterinarian = await prisma.veterinarian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeterinarianUpdateManyArgs>(args: SelectSubset<T, VeterinarianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veterinarians and returns the data updated in the database.
     * @param {VeterinarianUpdateManyAndReturnArgs} args - Arguments to update many Veterinarians.
     * @example
     * // Update many Veterinarians
     * const veterinarian = await prisma.veterinarian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veterinarians and only return the `id`
     * const veterinarianWithIdOnly = await prisma.veterinarian.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VeterinarianUpdateManyAndReturnArgs>(args: SelectSubset<T, VeterinarianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veterinarian.
     * @param {VeterinarianUpsertArgs} args - Arguments to update or create a Veterinarian.
     * @example
     * // Update or create a Veterinarian
     * const veterinarian = await prisma.veterinarian.upsert({
     *   create: {
     *     // ... data to create a Veterinarian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veterinarian we want to update
     *   }
     * })
     */
    upsert<T extends VeterinarianUpsertArgs>(args: SelectSubset<T, VeterinarianUpsertArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veterinarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarianCountArgs} args - Arguments to filter Veterinarians to count.
     * @example
     * // Count the number of Veterinarians
     * const count = await prisma.veterinarian.count({
     *   where: {
     *     // ... the filter for the Veterinarians we want to count
     *   }
     * })
    **/
    count<T extends VeterinarianCountArgs>(
      args?: Subset<T, VeterinarianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeterinarianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veterinarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeterinarianAggregateArgs>(args: Subset<T, VeterinarianAggregateArgs>): Prisma.PrismaPromise<GetVeterinarianAggregateType<T>>

    /**
     * Group by Veterinarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeterinarianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeterinarianGroupByArgs['orderBy'] }
        : { orderBy?: VeterinarianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeterinarianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeterinarianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veterinarian model
   */
  readonly fields: VeterinarianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veterinarian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeterinarianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clinicalRecords<T extends Veterinarian$clinicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Veterinarian$clinicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Veterinarian model
   */
  interface VeterinarianFieldRefs {
    readonly id: FieldRef<"Veterinarian", 'Int'>
    readonly userId: FieldRef<"Veterinarian", 'Int'>
    readonly crmv: FieldRef<"Veterinarian", 'String'>
    readonly active: FieldRef<"Veterinarian", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Veterinarian findUnique
   */
  export type VeterinarianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarian to fetch.
     */
    where: VeterinarianWhereUniqueInput
  }

  /**
   * Veterinarian findUniqueOrThrow
   */
  export type VeterinarianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarian to fetch.
     */
    where: VeterinarianWhereUniqueInput
  }

  /**
   * Veterinarian findFirst
   */
  export type VeterinarianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarian to fetch.
     */
    where?: VeterinarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarians to fetch.
     */
    orderBy?: VeterinarianOrderByWithRelationInput | VeterinarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veterinarians.
     */
    cursor?: VeterinarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veterinarians.
     */
    distinct?: VeterinarianScalarFieldEnum | VeterinarianScalarFieldEnum[]
  }

  /**
   * Veterinarian findFirstOrThrow
   */
  export type VeterinarianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarian to fetch.
     */
    where?: VeterinarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarians to fetch.
     */
    orderBy?: VeterinarianOrderByWithRelationInput | VeterinarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veterinarians.
     */
    cursor?: VeterinarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veterinarians.
     */
    distinct?: VeterinarianScalarFieldEnum | VeterinarianScalarFieldEnum[]
  }

  /**
   * Veterinarian findMany
   */
  export type VeterinarianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarians to fetch.
     */
    where?: VeterinarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarians to fetch.
     */
    orderBy?: VeterinarianOrderByWithRelationInput | VeterinarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veterinarians.
     */
    cursor?: VeterinarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarians.
     */
    skip?: number
    distinct?: VeterinarianScalarFieldEnum | VeterinarianScalarFieldEnum[]
  }

  /**
   * Veterinarian create
   */
  export type VeterinarianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    /**
     * The data needed to create a Veterinarian.
     */
    data: XOR<VeterinarianCreateInput, VeterinarianUncheckedCreateInput>
  }

  /**
   * Veterinarian createMany
   */
  export type VeterinarianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veterinarians.
     */
    data: VeterinarianCreateManyInput | VeterinarianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veterinarian createManyAndReturn
   */
  export type VeterinarianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * The data used to create many Veterinarians.
     */
    data: VeterinarianCreateManyInput | VeterinarianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veterinarian update
   */
  export type VeterinarianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    /**
     * The data needed to update a Veterinarian.
     */
    data: XOR<VeterinarianUpdateInput, VeterinarianUncheckedUpdateInput>
    /**
     * Choose, which Veterinarian to update.
     */
    where: VeterinarianWhereUniqueInput
  }

  /**
   * Veterinarian updateMany
   */
  export type VeterinarianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veterinarians.
     */
    data: XOR<VeterinarianUpdateManyMutationInput, VeterinarianUncheckedUpdateManyInput>
    /**
     * Filter which Veterinarians to update
     */
    where?: VeterinarianWhereInput
    /**
     * Limit how many Veterinarians to update.
     */
    limit?: number
  }

  /**
   * Veterinarian updateManyAndReturn
   */
  export type VeterinarianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * The data used to update Veterinarians.
     */
    data: XOR<VeterinarianUpdateManyMutationInput, VeterinarianUncheckedUpdateManyInput>
    /**
     * Filter which Veterinarians to update
     */
    where?: VeterinarianWhereInput
    /**
     * Limit how many Veterinarians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Veterinarian upsert
   */
  export type VeterinarianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    /**
     * The filter to search for the Veterinarian to update in case it exists.
     */
    where: VeterinarianWhereUniqueInput
    /**
     * In case the Veterinarian found by the `where` argument doesn't exist, create a new Veterinarian with this data.
     */
    create: XOR<VeterinarianCreateInput, VeterinarianUncheckedCreateInput>
    /**
     * In case the Veterinarian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeterinarianUpdateInput, VeterinarianUncheckedUpdateInput>
  }

  /**
   * Veterinarian delete
   */
  export type VeterinarianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
    /**
     * Filter which Veterinarian to delete.
     */
    where: VeterinarianWhereUniqueInput
  }

  /**
   * Veterinarian deleteMany
   */
  export type VeterinarianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veterinarians to delete
     */
    where?: VeterinarianWhereInput
    /**
     * Limit how many Veterinarians to delete.
     */
    limit?: number
  }

  /**
   * Veterinarian.clinicalRecords
   */
  export type Veterinarian$clinicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    where?: ClinicalRecordWhereInput
    orderBy?: ClinicalRecordOrderByWithRelationInput | ClinicalRecordOrderByWithRelationInput[]
    cursor?: ClinicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClinicalRecordScalarFieldEnum | ClinicalRecordScalarFieldEnum[]
  }

  /**
   * Veterinarian without action
   */
  export type VeterinarianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinarian
     */
    select?: VeterinarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinarian
     */
    omit?: VeterinarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarianInclude<ExtArgs> | null
  }


  /**
   * Model Animal
   */

  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalAvgAggregateOutputType = {
    id: number | null
    petOwnerId: number | null
  }

  export type AnimalSumAggregateOutputType = {
    id: number | null
    petOwnerId: number | null
  }

  export type AnimalMinAggregateOutputType = {
    id: number | null
    petOwnerId: number | null
    name: string | null
    species: $Enums.Species | null
    gender: $Enums.Gender | null
    estimatedAge: string | null
    sizeWeight: string | null
    breed: string | null
    microchipNumber: string | null
  }

  export type AnimalMaxAggregateOutputType = {
    id: number | null
    petOwnerId: number | null
    name: string | null
    species: $Enums.Species | null
    gender: $Enums.Gender | null
    estimatedAge: string | null
    sizeWeight: string | null
    breed: string | null
    microchipNumber: string | null
  }

  export type AnimalCountAggregateOutputType = {
    id: number
    petOwnerId: number
    name: number
    species: number
    gender: number
    estimatedAge: number
    sizeWeight: number
    breed: number
    microchipNumber: number
    _all: number
  }


  export type AnimalAvgAggregateInputType = {
    id?: true
    petOwnerId?: true
  }

  export type AnimalSumAggregateInputType = {
    id?: true
    petOwnerId?: true
  }

  export type AnimalMinAggregateInputType = {
    id?: true
    petOwnerId?: true
    name?: true
    species?: true
    gender?: true
    estimatedAge?: true
    sizeWeight?: true
    breed?: true
    microchipNumber?: true
  }

  export type AnimalMaxAggregateInputType = {
    id?: true
    petOwnerId?: true
    name?: true
    species?: true
    gender?: true
    estimatedAge?: true
    sizeWeight?: true
    breed?: true
    microchipNumber?: true
  }

  export type AnimalCountAggregateInputType = {
    id?: true
    petOwnerId?: true
    name?: true
    species?: true
    gender?: true
    estimatedAge?: true
    sizeWeight?: true
    breed?: true
    microchipNumber?: true
    _all?: true
  }

  export type AnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animal to aggregate.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithAggregationInput | AnimalOrderByWithAggregationInput[]
    by: AnimalScalarFieldEnum[] | AnimalScalarFieldEnum
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _avg?: AnimalAvgAggregateInputType
    _sum?: AnimalSumAggregateInputType
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }

  export type AnimalGroupByOutputType = {
    id: number
    petOwnerId: number
    name: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed: string | null
    microchipNumber: string | null
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type AnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petOwnerId?: boolean
    name?: boolean
    species?: boolean
    gender?: boolean
    estimatedAge?: boolean
    sizeWeight?: boolean
    breed?: boolean
    microchipNumber?: boolean
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
    appointments?: boolean | Animal$appointmentsArgs<ExtArgs>
    medicalRecord?: boolean | Animal$medicalRecordArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petOwnerId?: boolean
    name?: boolean
    species?: boolean
    gender?: boolean
    estimatedAge?: boolean
    sizeWeight?: boolean
    breed?: boolean
    microchipNumber?: boolean
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petOwnerId?: boolean
    name?: boolean
    species?: boolean
    gender?: boolean
    estimatedAge?: boolean
    sizeWeight?: boolean
    breed?: boolean
    microchipNumber?: boolean
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectScalar = {
    id?: boolean
    petOwnerId?: boolean
    name?: boolean
    species?: boolean
    gender?: boolean
    estimatedAge?: boolean
    sizeWeight?: boolean
    breed?: boolean
    microchipNumber?: boolean
  }

  export type AnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "petOwnerId" | "name" | "species" | "gender" | "estimatedAge" | "sizeWeight" | "breed" | "microchipNumber", ExtArgs["result"]["animal"]>
  export type AnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
    appointments?: boolean | Animal$appointmentsArgs<ExtArgs>
    medicalRecord?: boolean | Animal$medicalRecordArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }

  export type $AnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animal"
    objects: {
      petOwner: Prisma.$PetOwnerPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      medicalRecord: Prisma.$MedicalRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      petOwnerId: number
      name: string | null
      species: $Enums.Species
      gender: $Enums.Gender
      estimatedAge: string
      sizeWeight: string
      breed: string | null
      microchipNumber: string | null
    }, ExtArgs["result"]["animal"]>
    composites: {}
  }

  type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = $Result.GetResult<Prisma.$AnimalPayload, S>

  type AnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface AnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animal'], meta: { name: 'Animal' } }
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalFindUniqueArgs>(args: SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalFindFirstArgs>(args?: SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animalWithIdOnly = await prisma.animal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimalFindManyArgs>(args?: SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
     */
    create<T extends AnimalCreateArgs>(args: SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalCreateManyArgs>(args?: SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Animals and returns the data saved in the database.
     * @param {AnimalCreateManyAndReturnArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimalCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
     */
    delete<T extends AnimalDeleteArgs>(args: SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalUpdateArgs>(args: SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalDeleteManyArgs>(args?: SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalUpdateManyArgs>(args: SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals and returns the data updated in the database.
     * @param {AnimalUpdateManyAndReturnArgs} args - Arguments to update many Animals.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimalUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
     */
    upsert<T extends AnimalUpsertArgs>(args: SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animal model
   */
  readonly fields: AnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    petOwner<T extends PetOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetOwnerDefaultArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Animal$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Animal$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalRecord<T extends Animal$medicalRecordArgs<ExtArgs> = {}>(args?: Subset<T, Animal$medicalRecordArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Animal model
   */
  interface AnimalFieldRefs {
    readonly id: FieldRef<"Animal", 'Int'>
    readonly petOwnerId: FieldRef<"Animal", 'Int'>
    readonly name: FieldRef<"Animal", 'String'>
    readonly species: FieldRef<"Animal", 'Species'>
    readonly gender: FieldRef<"Animal", 'Gender'>
    readonly estimatedAge: FieldRef<"Animal", 'String'>
    readonly sizeWeight: FieldRef<"Animal", 'String'>
    readonly breed: FieldRef<"Animal", 'String'>
    readonly microchipNumber: FieldRef<"Animal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findUniqueOrThrow
   */
  export type AnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findFirstOrThrow
   */
  export type AnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal create
   */
  export type AnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a Animal.
     */
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }

  /**
   * Animal createMany
   */
  export type AnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal createManyAndReturn
   */
  export type AnimalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal update
   */
  export type AnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a Animal.
     */
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal updateManyAndReturn
   */
  export type AnimalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the Animal to update in case it exists.
     */
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     */
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }

  /**
   * Animal delete
   */
  export type AnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter which Animal to delete.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animal.appointments
   */
  export type Animal$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Animal.medicalRecord
   */
  export type Animal$medicalRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
  }

  /**
   * Animal without action
   */
  export type AnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    animalId: number | null
    petOwnerId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    animalId: number | null
    petOwnerId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    animalId: number | null
    petOwnerId: number | null
    serviceType: $Enums.ServiceType | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AppointmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    notes: string | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    animalId: number | null
    petOwnerId: number | null
    serviceType: $Enums.ServiceType | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AppointmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    notes: string | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    animalId: number
    petOwnerId: number
    serviceType: number
    startTime: number
    endTime: number
    status: number
    createdAt: number
    updatedAt: number
    notes: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    animalId?: true
    petOwnerId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    animalId?: true
    petOwnerId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    animalId?: true
    petOwnerId?: true
    serviceType?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    animalId?: true
    petOwnerId?: true
    serviceType?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    animalId?: true
    petOwnerId?: true
    serviceType?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    animalId: number
    petOwnerId: number
    serviceType: $Enums.ServiceType | null
    startTime: Date
    endTime: Date
    status: $Enums.AppointmentStatus
    createdAt: Date
    updatedAt: Date
    notes: string | null
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animalId?: boolean
    petOwnerId?: boolean
    serviceType?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
    clinicalRecords?: boolean | Appointment$clinicalRecordsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animalId?: boolean
    petOwnerId?: boolean
    serviceType?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animalId?: boolean
    petOwnerId?: boolean
    serviceType?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    animalId?: boolean
    petOwnerId?: boolean
    serviceType?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animalId" | "petOwnerId" | "serviceType" | "startTime" | "endTime" | "status" | "createdAt" | "updatedAt" | "notes", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
    clinicalRecords?: boolean | Appointment$clinicalRecordsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    petOwner?: boolean | PetOwnerDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
      petOwner: Prisma.$PetOwnerPayload<ExtArgs>
      clinicalRecords: Prisma.$ClinicalRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      animalId: number
      petOwnerId: number
      serviceType: $Enums.ServiceType | null
      startTime: Date
      endTime: Date
      status: $Enums.AppointmentStatus
      createdAt: Date
      updatedAt: Date
      notes: string | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    petOwner<T extends PetOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetOwnerDefaultArgs<ExtArgs>>): Prisma__PetOwnerClient<$Result.GetResult<Prisma.$PetOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clinicalRecords<T extends Appointment$clinicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$clinicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly animalId: FieldRef<"Appointment", 'Int'>
    readonly petOwnerId: FieldRef<"Appointment", 'Int'>
    readonly serviceType: FieldRef<"Appointment", 'ServiceType'>
    readonly startTime: FieldRef<"Appointment", 'DateTime'>
    readonly endTime: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly notes: FieldRef<"Appointment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.clinicalRecords
   */
  export type Appointment$clinicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    where?: ClinicalRecordWhereInput
    orderBy?: ClinicalRecordOrderByWithRelationInput | ClinicalRecordOrderByWithRelationInput[]
    cursor?: ClinicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClinicalRecordScalarFieldEnum | ClinicalRecordScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model MedicalRecord
   */

  export type AggregateMedicalRecord = {
    _count: MedicalRecordCountAggregateOutputType | null
    _avg: MedicalRecordAvgAggregateOutputType | null
    _sum: MedicalRecordSumAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  export type MedicalRecordAvgAggregateOutputType = {
    id: number | null
    animalId: number | null
  }

  export type MedicalRecordSumAggregateOutputType = {
    id: number | null
    animalId: number | null
  }

  export type MedicalRecordMinAggregateOutputType = {
    id: number | null
    animalId: number | null
    microchipNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalRecordMaxAggregateOutputType = {
    id: number | null
    animalId: number | null
    microchipNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalRecordCountAggregateOutputType = {
    id: number
    animalId: number
    microchipNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalRecordAvgAggregateInputType = {
    id?: true
    animalId?: true
  }

  export type MedicalRecordSumAggregateInputType = {
    id?: true
    animalId?: true
  }

  export type MedicalRecordMinAggregateInputType = {
    id?: true
    animalId?: true
    microchipNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalRecordMaxAggregateInputType = {
    id?: true
    animalId?: true
    microchipNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalRecordCountAggregateInputType = {
    id?: true
    animalId?: true
    microchipNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecord to aggregate.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalRecords
    **/
    _count?: true | MedicalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type GetMedicalRecordAggregateType<T extends MedicalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalRecord[P]>
      : GetScalarType<T[P], AggregateMedicalRecord[P]>
  }




  export type MedicalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithAggregationInput | MedicalRecordOrderByWithAggregationInput[]
    by: MedicalRecordScalarFieldEnum[] | MedicalRecordScalarFieldEnum
    having?: MedicalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalRecordCountAggregateInputType | true
    _avg?: MedicalRecordAvgAggregateInputType
    _sum?: MedicalRecordSumAggregateInputType
    _min?: MedicalRecordMinAggregateInputType
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type MedicalRecordGroupByOutputType = {
    id: number
    animalId: number
    microchipNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicalRecordCountAggregateOutputType | null
    _avg: MedicalRecordAvgAggregateOutputType | null
    _sum: MedicalRecordSumAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  type GetMedicalRecordGroupByPayload<T extends MedicalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
        }
      >
    >


  export type MedicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animalId?: boolean
    microchipNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    clinicalRecords?: boolean | MedicalRecord$clinicalRecordsArgs<ExtArgs>
    _count?: boolean | MedicalRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animalId?: boolean
    microchipNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animalId?: boolean
    microchipNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectScalar = {
    id?: boolean
    animalId?: boolean
    microchipNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animalId" | "microchipNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["medicalRecord"]>
  export type MedicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
    clinicalRecords?: boolean | MedicalRecord$clinicalRecordsArgs<ExtArgs>
    _count?: boolean | MedicalRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animal?: boolean | AnimalDefaultArgs<ExtArgs>
  }

  export type $MedicalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalRecord"
    objects: {
      animal: Prisma.$AnimalPayload<ExtArgs>
      clinicalRecords: Prisma.$ClinicalRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      animalId: number
      microchipNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalRecord"]>
    composites: {}
  }

  type MedicalRecordGetPayload<S extends boolean | null | undefined | MedicalRecordDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordPayload, S>

  type MedicalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalRecordCountAggregateInputType | true
    }

  export interface MedicalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalRecord'], meta: { name: 'MedicalRecord' } }
    /**
     * Find zero or one MedicalRecord that matches the filter.
     * @param {MedicalRecordFindUniqueArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalRecordFindUniqueArgs>(args: SelectSubset<T, MedicalRecordFindUniqueArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalRecordFindUniqueOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalRecordFindFirstArgs>(args?: SelectSubset<T, MedicalRecordFindFirstArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany()
     * 
     * // Get first 10 MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalRecordFindManyArgs>(args?: SelectSubset<T, MedicalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalRecord.
     * @param {MedicalRecordCreateArgs} args - Arguments to create a MedicalRecord.
     * @example
     * // Create one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.create({
     *   data: {
     *     // ... data to create a MedicalRecord
     *   }
     * })
     * 
     */
    create<T extends MedicalRecordCreateArgs>(args: SelectSubset<T, MedicalRecordCreateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalRecords.
     * @param {MedicalRecordCreateManyArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalRecordCreateManyArgs>(args?: SelectSubset<T, MedicalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalRecords and returns the data saved in the database.
     * @param {MedicalRecordCreateManyAndReturnArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalRecord.
     * @param {MedicalRecordDeleteArgs} args - Arguments to delete one MedicalRecord.
     * @example
     * // Delete one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.delete({
     *   where: {
     *     // ... filter to delete one MedicalRecord
     *   }
     * })
     * 
     */
    delete<T extends MedicalRecordDeleteArgs>(args: SelectSubset<T, MedicalRecordDeleteArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalRecord.
     * @param {MedicalRecordUpdateArgs} args - Arguments to update one MedicalRecord.
     * @example
     * // Update one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalRecordUpdateArgs>(args: SelectSubset<T, MedicalRecordUpdateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalRecords.
     * @param {MedicalRecordDeleteManyArgs} args - Arguments to filter MedicalRecords to delete.
     * @example
     * // Delete a few MedicalRecords
     * const { count } = await prisma.medicalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalRecordDeleteManyArgs>(args?: SelectSubset<T, MedicalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalRecordUpdateManyArgs>(args: SelectSubset<T, MedicalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords and returns the data updated in the database.
     * @param {MedicalRecordUpdateManyAndReturnArgs} args - Arguments to update many MedicalRecords.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalRecord.
     * @param {MedicalRecordUpsertArgs} args - Arguments to update or create a MedicalRecord.
     * @example
     * // Update or create a MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.upsert({
     *   create: {
     *     // ... data to create a MedicalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalRecord we want to update
     *   }
     * })
     */
    upsert<T extends MedicalRecordUpsertArgs>(args: SelectSubset<T, MedicalRecordUpsertArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordCountArgs} args - Arguments to filter MedicalRecords to count.
     * @example
     * // Count the number of MedicalRecords
     * const count = await prisma.medicalRecord.count({
     *   where: {
     *     // ... the filter for the MedicalRecords we want to count
     *   }
     * })
    **/
    count<T extends MedicalRecordCountArgs>(
      args?: Subset<T, MedicalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalRecordAggregateArgs>(args: Subset<T, MedicalRecordAggregateArgs>): Prisma.PrismaPromise<GetMedicalRecordAggregateType<T>>

    /**
     * Group by MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalRecordGroupByArgs['orderBy'] }
        : { orderBy?: MedicalRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalRecord model
   */
  readonly fields: MedicalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clinicalRecords<T extends MedicalRecord$clinicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecord$clinicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicalRecord model
   */
  interface MedicalRecordFieldRefs {
    readonly id: FieldRef<"MedicalRecord", 'Int'>
    readonly animalId: FieldRef<"MedicalRecord", 'Int'>
    readonly microchipNumber: FieldRef<"MedicalRecord", 'String'>
    readonly createdAt: FieldRef<"MedicalRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalRecord findUnique
   */
  export type MedicalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findUniqueOrThrow
   */
  export type MedicalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findFirst
   */
  export type MedicalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findFirstOrThrow
   */
  export type MedicalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findMany
   */
  export type MedicalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord create
   */
  export type MedicalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalRecord.
     */
    data: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
  }

  /**
   * MedicalRecord createMany
   */
  export type MedicalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalRecord createManyAndReturn
   */
  export type MedicalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord update
   */
  export type MedicalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalRecord.
     */
    data: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
    /**
     * Choose, which MedicalRecord to update.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord updateMany
   */
  export type MedicalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
  }

  /**
   * MedicalRecord updateManyAndReturn
   */
  export type MedicalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord upsert
   */
  export type MedicalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalRecord to update in case it exists.
     */
    where: MedicalRecordWhereUniqueInput
    /**
     * In case the MedicalRecord found by the `where` argument doesn't exist, create a new MedicalRecord with this data.
     */
    create: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
    /**
     * In case the MedicalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
  }

  /**
   * MedicalRecord delete
   */
  export type MedicalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter which MedicalRecord to delete.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord deleteMany
   */
  export type MedicalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to delete
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to delete.
     */
    limit?: number
  }

  /**
   * MedicalRecord.clinicalRecords
   */
  export type MedicalRecord$clinicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    where?: ClinicalRecordWhereInput
    orderBy?: ClinicalRecordOrderByWithRelationInput | ClinicalRecordOrderByWithRelationInput[]
    cursor?: ClinicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClinicalRecordScalarFieldEnum | ClinicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord without action
   */
  export type MedicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
  }


  /**
   * Model ClinicalRecord
   */

  export type AggregateClinicalRecord = {
    _count: ClinicalRecordCountAggregateOutputType | null
    _avg: ClinicalRecordAvgAggregateOutputType | null
    _sum: ClinicalRecordSumAggregateOutputType | null
    _min: ClinicalRecordMinAggregateOutputType | null
    _max: ClinicalRecordMaxAggregateOutputType | null
  }

  export type ClinicalRecordAvgAggregateOutputType = {
    id: number | null
    medicalRecordId: number | null
    appointmentId: number | null
    veterinarianId: number | null
  }

  export type ClinicalRecordSumAggregateOutputType = {
    id: number | null
    medicalRecordId: number | null
    appointmentId: number | null
    veterinarianId: number | null
  }

  export type ClinicalRecordMinAggregateOutputType = {
    id: number | null
    medicalRecordId: number | null
    appointmentId: number | null
    veterinarianId: number | null
    type: $Enums.ClinicalRecordType | null
    treatmentDate: Date | null
    fitForSurgery: boolean | null
    surgeryType: $Enums.SurgeryType | null
    observations: string | null
    instructions: string | null
  }

  export type ClinicalRecordMaxAggregateOutputType = {
    id: number | null
    medicalRecordId: number | null
    appointmentId: number | null
    veterinarianId: number | null
    type: $Enums.ClinicalRecordType | null
    treatmentDate: Date | null
    fitForSurgery: boolean | null
    surgeryType: $Enums.SurgeryType | null
    observations: string | null
    instructions: string | null
  }

  export type ClinicalRecordCountAggregateOutputType = {
    id: number
    medicalRecordId: number
    appointmentId: number
    veterinarianId: number
    type: number
    treatmentDate: number
    fitForSurgery: number
    surgeryType: number
    observations: number
    instructions: number
    _all: number
  }


  export type ClinicalRecordAvgAggregateInputType = {
    id?: true
    medicalRecordId?: true
    appointmentId?: true
    veterinarianId?: true
  }

  export type ClinicalRecordSumAggregateInputType = {
    id?: true
    medicalRecordId?: true
    appointmentId?: true
    veterinarianId?: true
  }

  export type ClinicalRecordMinAggregateInputType = {
    id?: true
    medicalRecordId?: true
    appointmentId?: true
    veterinarianId?: true
    type?: true
    treatmentDate?: true
    fitForSurgery?: true
    surgeryType?: true
    observations?: true
    instructions?: true
  }

  export type ClinicalRecordMaxAggregateInputType = {
    id?: true
    medicalRecordId?: true
    appointmentId?: true
    veterinarianId?: true
    type?: true
    treatmentDate?: true
    fitForSurgery?: true
    surgeryType?: true
    observations?: true
    instructions?: true
  }

  export type ClinicalRecordCountAggregateInputType = {
    id?: true
    medicalRecordId?: true
    appointmentId?: true
    veterinarianId?: true
    type?: true
    treatmentDate?: true
    fitForSurgery?: true
    surgeryType?: true
    observations?: true
    instructions?: true
    _all?: true
  }

  export type ClinicalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClinicalRecord to aggregate.
     */
    where?: ClinicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicalRecords to fetch.
     */
    orderBy?: ClinicalRecordOrderByWithRelationInput | ClinicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClinicalRecords
    **/
    _count?: true | ClinicalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClinicalRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClinicalRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicalRecordMaxAggregateInputType
  }

  export type GetClinicalRecordAggregateType<T extends ClinicalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateClinicalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinicalRecord[P]>
      : GetScalarType<T[P], AggregateClinicalRecord[P]>
  }




  export type ClinicalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicalRecordWhereInput
    orderBy?: ClinicalRecordOrderByWithAggregationInput | ClinicalRecordOrderByWithAggregationInput[]
    by: ClinicalRecordScalarFieldEnum[] | ClinicalRecordScalarFieldEnum
    having?: ClinicalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicalRecordCountAggregateInputType | true
    _avg?: ClinicalRecordAvgAggregateInputType
    _sum?: ClinicalRecordSumAggregateInputType
    _min?: ClinicalRecordMinAggregateInputType
    _max?: ClinicalRecordMaxAggregateInputType
  }

  export type ClinicalRecordGroupByOutputType = {
    id: number
    medicalRecordId: number
    appointmentId: number | null
    veterinarianId: number
    type: $Enums.ClinicalRecordType
    treatmentDate: Date
    fitForSurgery: boolean | null
    surgeryType: $Enums.SurgeryType | null
    observations: string | null
    instructions: string | null
    _count: ClinicalRecordCountAggregateOutputType | null
    _avg: ClinicalRecordAvgAggregateOutputType | null
    _sum: ClinicalRecordSumAggregateOutputType | null
    _min: ClinicalRecordMinAggregateOutputType | null
    _max: ClinicalRecordMaxAggregateOutputType | null
  }

  type GetClinicalRecordGroupByPayload<T extends ClinicalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicalRecordGroupByOutputType[P]>
        }
      >
    >


  export type ClinicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicalRecordId?: boolean
    appointmentId?: boolean
    veterinarianId?: boolean
    type?: boolean
    treatmentDate?: boolean
    fitForSurgery?: boolean
    surgeryType?: boolean
    observations?: boolean
    instructions?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    appointment?: boolean | ClinicalRecord$appointmentArgs<ExtArgs>
    veterinarian?: boolean | VeterinarianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinicalRecord"]>

  export type ClinicalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicalRecordId?: boolean
    appointmentId?: boolean
    veterinarianId?: boolean
    type?: boolean
    treatmentDate?: boolean
    fitForSurgery?: boolean
    surgeryType?: boolean
    observations?: boolean
    instructions?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    appointment?: boolean | ClinicalRecord$appointmentArgs<ExtArgs>
    veterinarian?: boolean | VeterinarianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinicalRecord"]>

  export type ClinicalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicalRecordId?: boolean
    appointmentId?: boolean
    veterinarianId?: boolean
    type?: boolean
    treatmentDate?: boolean
    fitForSurgery?: boolean
    surgeryType?: boolean
    observations?: boolean
    instructions?: boolean
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    appointment?: boolean | ClinicalRecord$appointmentArgs<ExtArgs>
    veterinarian?: boolean | VeterinarianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinicalRecord"]>

  export type ClinicalRecordSelectScalar = {
    id?: boolean
    medicalRecordId?: boolean
    appointmentId?: boolean
    veterinarianId?: boolean
    type?: boolean
    treatmentDate?: boolean
    fitForSurgery?: boolean
    surgeryType?: boolean
    observations?: boolean
    instructions?: boolean
  }

  export type ClinicalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicalRecordId" | "appointmentId" | "veterinarianId" | "type" | "treatmentDate" | "fitForSurgery" | "surgeryType" | "observations" | "instructions", ExtArgs["result"]["clinicalRecord"]>
  export type ClinicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    appointment?: boolean | ClinicalRecord$appointmentArgs<ExtArgs>
    veterinarian?: boolean | VeterinarianDefaultArgs<ExtArgs>
  }
  export type ClinicalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    appointment?: boolean | ClinicalRecord$appointmentArgs<ExtArgs>
    veterinarian?: boolean | VeterinarianDefaultArgs<ExtArgs>
  }
  export type ClinicalRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalRecord?: boolean | MedicalRecordDefaultArgs<ExtArgs>
    appointment?: boolean | ClinicalRecord$appointmentArgs<ExtArgs>
    veterinarian?: boolean | VeterinarianDefaultArgs<ExtArgs>
  }

  export type $ClinicalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClinicalRecord"
    objects: {
      medicalRecord: Prisma.$MedicalRecordPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
      veterinarian: Prisma.$VeterinarianPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicalRecordId: number
      appointmentId: number | null
      veterinarianId: number
      type: $Enums.ClinicalRecordType
      treatmentDate: Date
      fitForSurgery: boolean | null
      surgeryType: $Enums.SurgeryType | null
      observations: string | null
      instructions: string | null
    }, ExtArgs["result"]["clinicalRecord"]>
    composites: {}
  }

  type ClinicalRecordGetPayload<S extends boolean | null | undefined | ClinicalRecordDefaultArgs> = $Result.GetResult<Prisma.$ClinicalRecordPayload, S>

  type ClinicalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClinicalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicalRecordCountAggregateInputType | true
    }

  export interface ClinicalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClinicalRecord'], meta: { name: 'ClinicalRecord' } }
    /**
     * Find zero or one ClinicalRecord that matches the filter.
     * @param {ClinicalRecordFindUniqueArgs} args - Arguments to find a ClinicalRecord
     * @example
     * // Get one ClinicalRecord
     * const clinicalRecord = await prisma.clinicalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicalRecordFindUniqueArgs>(args: SelectSubset<T, ClinicalRecordFindUniqueArgs<ExtArgs>>): Prisma__ClinicalRecordClient<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClinicalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClinicalRecordFindUniqueOrThrowArgs} args - Arguments to find a ClinicalRecord
     * @example
     * // Get one ClinicalRecord
     * const clinicalRecord = await prisma.clinicalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicalRecordClient<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClinicalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalRecordFindFirstArgs} args - Arguments to find a ClinicalRecord
     * @example
     * // Get one ClinicalRecord
     * const clinicalRecord = await prisma.clinicalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicalRecordFindFirstArgs>(args?: SelectSubset<T, ClinicalRecordFindFirstArgs<ExtArgs>>): Prisma__ClinicalRecordClient<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClinicalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalRecordFindFirstOrThrowArgs} args - Arguments to find a ClinicalRecord
     * @example
     * // Get one ClinicalRecord
     * const clinicalRecord = await prisma.clinicalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicalRecordClient<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClinicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClinicalRecords
     * const clinicalRecords = await prisma.clinicalRecord.findMany()
     * 
     * // Get first 10 ClinicalRecords
     * const clinicalRecords = await prisma.clinicalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicalRecordWithIdOnly = await prisma.clinicalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicalRecordFindManyArgs>(args?: SelectSubset<T, ClinicalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClinicalRecord.
     * @param {ClinicalRecordCreateArgs} args - Arguments to create a ClinicalRecord.
     * @example
     * // Create one ClinicalRecord
     * const ClinicalRecord = await prisma.clinicalRecord.create({
     *   data: {
     *     // ... data to create a ClinicalRecord
     *   }
     * })
     * 
     */
    create<T extends ClinicalRecordCreateArgs>(args: SelectSubset<T, ClinicalRecordCreateArgs<ExtArgs>>): Prisma__ClinicalRecordClient<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClinicalRecords.
     * @param {ClinicalRecordCreateManyArgs} args - Arguments to create many ClinicalRecords.
     * @example
     * // Create many ClinicalRecords
     * const clinicalRecord = await prisma.clinicalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicalRecordCreateManyArgs>(args?: SelectSubset<T, ClinicalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClinicalRecords and returns the data saved in the database.
     * @param {ClinicalRecordCreateManyAndReturnArgs} args - Arguments to create many ClinicalRecords.
     * @example
     * // Create many ClinicalRecords
     * const clinicalRecord = await prisma.clinicalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClinicalRecords and only return the `id`
     * const clinicalRecordWithIdOnly = await prisma.clinicalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClinicalRecord.
     * @param {ClinicalRecordDeleteArgs} args - Arguments to delete one ClinicalRecord.
     * @example
     * // Delete one ClinicalRecord
     * const ClinicalRecord = await prisma.clinicalRecord.delete({
     *   where: {
     *     // ... filter to delete one ClinicalRecord
     *   }
     * })
     * 
     */
    delete<T extends ClinicalRecordDeleteArgs>(args: SelectSubset<T, ClinicalRecordDeleteArgs<ExtArgs>>): Prisma__ClinicalRecordClient<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClinicalRecord.
     * @param {ClinicalRecordUpdateArgs} args - Arguments to update one ClinicalRecord.
     * @example
     * // Update one ClinicalRecord
     * const clinicalRecord = await prisma.clinicalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicalRecordUpdateArgs>(args: SelectSubset<T, ClinicalRecordUpdateArgs<ExtArgs>>): Prisma__ClinicalRecordClient<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClinicalRecords.
     * @param {ClinicalRecordDeleteManyArgs} args - Arguments to filter ClinicalRecords to delete.
     * @example
     * // Delete a few ClinicalRecords
     * const { count } = await prisma.clinicalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicalRecordDeleteManyArgs>(args?: SelectSubset<T, ClinicalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClinicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClinicalRecords
     * const clinicalRecord = await prisma.clinicalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicalRecordUpdateManyArgs>(args: SelectSubset<T, ClinicalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClinicalRecords and returns the data updated in the database.
     * @param {ClinicalRecordUpdateManyAndReturnArgs} args - Arguments to update many ClinicalRecords.
     * @example
     * // Update many ClinicalRecords
     * const clinicalRecord = await prisma.clinicalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClinicalRecords and only return the `id`
     * const clinicalRecordWithIdOnly = await prisma.clinicalRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClinicalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ClinicalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClinicalRecord.
     * @param {ClinicalRecordUpsertArgs} args - Arguments to update or create a ClinicalRecord.
     * @example
     * // Update or create a ClinicalRecord
     * const clinicalRecord = await prisma.clinicalRecord.upsert({
     *   create: {
     *     // ... data to create a ClinicalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClinicalRecord we want to update
     *   }
     * })
     */
    upsert<T extends ClinicalRecordUpsertArgs>(args: SelectSubset<T, ClinicalRecordUpsertArgs<ExtArgs>>): Prisma__ClinicalRecordClient<$Result.GetResult<Prisma.$ClinicalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClinicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalRecordCountArgs} args - Arguments to filter ClinicalRecords to count.
     * @example
     * // Count the number of ClinicalRecords
     * const count = await prisma.clinicalRecord.count({
     *   where: {
     *     // ... the filter for the ClinicalRecords we want to count
     *   }
     * })
    **/
    count<T extends ClinicalRecordCountArgs>(
      args?: Subset<T, ClinicalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClinicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClinicalRecordAggregateArgs>(args: Subset<T, ClinicalRecordAggregateArgs>): Prisma.PrismaPromise<GetClinicalRecordAggregateType<T>>

    /**
     * Group by ClinicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicalRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClinicalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicalRecordGroupByArgs['orderBy'] }
        : { orderBy?: ClinicalRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClinicalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClinicalRecord model
   */
  readonly fields: ClinicalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClinicalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicalRecord<T extends MedicalRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecordDefaultArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends ClinicalRecord$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, ClinicalRecord$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    veterinarian<T extends VeterinarianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeterinarianDefaultArgs<ExtArgs>>): Prisma__VeterinarianClient<$Result.GetResult<Prisma.$VeterinarianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClinicalRecord model
   */
  interface ClinicalRecordFieldRefs {
    readonly id: FieldRef<"ClinicalRecord", 'Int'>
    readonly medicalRecordId: FieldRef<"ClinicalRecord", 'Int'>
    readonly appointmentId: FieldRef<"ClinicalRecord", 'Int'>
    readonly veterinarianId: FieldRef<"ClinicalRecord", 'Int'>
    readonly type: FieldRef<"ClinicalRecord", 'ClinicalRecordType'>
    readonly treatmentDate: FieldRef<"ClinicalRecord", 'DateTime'>
    readonly fitForSurgery: FieldRef<"ClinicalRecord", 'Boolean'>
    readonly surgeryType: FieldRef<"ClinicalRecord", 'SurgeryType'>
    readonly observations: FieldRef<"ClinicalRecord", 'String'>
    readonly instructions: FieldRef<"ClinicalRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClinicalRecord findUnique
   */
  export type ClinicalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalRecord to fetch.
     */
    where: ClinicalRecordWhereUniqueInput
  }

  /**
   * ClinicalRecord findUniqueOrThrow
   */
  export type ClinicalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalRecord to fetch.
     */
    where: ClinicalRecordWhereUniqueInput
  }

  /**
   * ClinicalRecord findFirst
   */
  export type ClinicalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalRecord to fetch.
     */
    where?: ClinicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicalRecords to fetch.
     */
    orderBy?: ClinicalRecordOrderByWithRelationInput | ClinicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClinicalRecords.
     */
    cursor?: ClinicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClinicalRecords.
     */
    distinct?: ClinicalRecordScalarFieldEnum | ClinicalRecordScalarFieldEnum[]
  }

  /**
   * ClinicalRecord findFirstOrThrow
   */
  export type ClinicalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalRecord to fetch.
     */
    where?: ClinicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicalRecords to fetch.
     */
    orderBy?: ClinicalRecordOrderByWithRelationInput | ClinicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClinicalRecords.
     */
    cursor?: ClinicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClinicalRecords.
     */
    distinct?: ClinicalRecordScalarFieldEnum | ClinicalRecordScalarFieldEnum[]
  }

  /**
   * ClinicalRecord findMany
   */
  export type ClinicalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ClinicalRecords to fetch.
     */
    where?: ClinicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClinicalRecords to fetch.
     */
    orderBy?: ClinicalRecordOrderByWithRelationInput | ClinicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClinicalRecords.
     */
    cursor?: ClinicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClinicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClinicalRecords.
     */
    skip?: number
    distinct?: ClinicalRecordScalarFieldEnum | ClinicalRecordScalarFieldEnum[]
  }

  /**
   * ClinicalRecord create
   */
  export type ClinicalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ClinicalRecord.
     */
    data: XOR<ClinicalRecordCreateInput, ClinicalRecordUncheckedCreateInput>
  }

  /**
   * ClinicalRecord createMany
   */
  export type ClinicalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClinicalRecords.
     */
    data: ClinicalRecordCreateManyInput | ClinicalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClinicalRecord createManyAndReturn
   */
  export type ClinicalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ClinicalRecords.
     */
    data: ClinicalRecordCreateManyInput | ClinicalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClinicalRecord update
   */
  export type ClinicalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ClinicalRecord.
     */
    data: XOR<ClinicalRecordUpdateInput, ClinicalRecordUncheckedUpdateInput>
    /**
     * Choose, which ClinicalRecord to update.
     */
    where: ClinicalRecordWhereUniqueInput
  }

  /**
   * ClinicalRecord updateMany
   */
  export type ClinicalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClinicalRecords.
     */
    data: XOR<ClinicalRecordUpdateManyMutationInput, ClinicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which ClinicalRecords to update
     */
    where?: ClinicalRecordWhereInput
    /**
     * Limit how many ClinicalRecords to update.
     */
    limit?: number
  }

  /**
   * ClinicalRecord updateManyAndReturn
   */
  export type ClinicalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * The data used to update ClinicalRecords.
     */
    data: XOR<ClinicalRecordUpdateManyMutationInput, ClinicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which ClinicalRecords to update
     */
    where?: ClinicalRecordWhereInput
    /**
     * Limit how many ClinicalRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClinicalRecord upsert
   */
  export type ClinicalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ClinicalRecord to update in case it exists.
     */
    where: ClinicalRecordWhereUniqueInput
    /**
     * In case the ClinicalRecord found by the `where` argument doesn't exist, create a new ClinicalRecord with this data.
     */
    create: XOR<ClinicalRecordCreateInput, ClinicalRecordUncheckedCreateInput>
    /**
     * In case the ClinicalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicalRecordUpdateInput, ClinicalRecordUncheckedUpdateInput>
  }

  /**
   * ClinicalRecord delete
   */
  export type ClinicalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
    /**
     * Filter which ClinicalRecord to delete.
     */
    where: ClinicalRecordWhereUniqueInput
  }

  /**
   * ClinicalRecord deleteMany
   */
  export type ClinicalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClinicalRecords to delete
     */
    where?: ClinicalRecordWhereInput
    /**
     * Limit how many ClinicalRecords to delete.
     */
    limit?: number
  }

  /**
   * ClinicalRecord.appointment
   */
  export type ClinicalRecord$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * ClinicalRecord without action
   */
  export type ClinicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicalRecord
     */
    select?: ClinicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClinicalRecord
     */
    omit?: ClinicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicalRecordInclude<ExtArgs> | null
  }


  /**
   * Model UserDevice
   */

  export type AggregateUserDevice = {
    _count: UserDeviceCountAggregateOutputType | null
    _avg: UserDeviceAvgAggregateOutputType | null
    _sum: UserDeviceSumAggregateOutputType | null
    _min: UserDeviceMinAggregateOutputType | null
    _max: UserDeviceMaxAggregateOutputType | null
  }

  export type UserDeviceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserDeviceSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserDeviceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    fcmToken: string | null
    deviceInfo: string | null
    createdAt: Date | null
    lastActiveAt: Date | null
  }

  export type UserDeviceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    fcmToken: string | null
    deviceInfo: string | null
    createdAt: Date | null
    lastActiveAt: Date | null
  }

  export type UserDeviceCountAggregateOutputType = {
    id: number
    userId: number
    fcmToken: number
    deviceInfo: number
    createdAt: number
    lastActiveAt: number
    _all: number
  }


  export type UserDeviceAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserDeviceSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserDeviceMinAggregateInputType = {
    id?: true
    userId?: true
    fcmToken?: true
    deviceInfo?: true
    createdAt?: true
    lastActiveAt?: true
  }

  export type UserDeviceMaxAggregateInputType = {
    id?: true
    userId?: true
    fcmToken?: true
    deviceInfo?: true
    createdAt?: true
    lastActiveAt?: true
  }

  export type UserDeviceCountAggregateInputType = {
    id?: true
    userId?: true
    fcmToken?: true
    deviceInfo?: true
    createdAt?: true
    lastActiveAt?: true
    _all?: true
  }

  export type UserDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevice to aggregate.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDevices
    **/
    _count?: true | UserDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDeviceMaxAggregateInputType
  }

  export type GetUserDeviceAggregateType<T extends UserDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDevice[P]>
      : GetScalarType<T[P], AggregateUserDevice[P]>
  }




  export type UserDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDeviceWhereInput
    orderBy?: UserDeviceOrderByWithAggregationInput | UserDeviceOrderByWithAggregationInput[]
    by: UserDeviceScalarFieldEnum[] | UserDeviceScalarFieldEnum
    having?: UserDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDeviceCountAggregateInputType | true
    _avg?: UserDeviceAvgAggregateInputType
    _sum?: UserDeviceSumAggregateInputType
    _min?: UserDeviceMinAggregateInputType
    _max?: UserDeviceMaxAggregateInputType
  }

  export type UserDeviceGroupByOutputType = {
    id: number
    userId: number
    fcmToken: string
    deviceInfo: string | null
    createdAt: Date
    lastActiveAt: Date
    _count: UserDeviceCountAggregateOutputType | null
    _avg: UserDeviceAvgAggregateOutputType | null
    _sum: UserDeviceSumAggregateOutputType | null
    _min: UserDeviceMinAggregateOutputType | null
    _max: UserDeviceMaxAggregateOutputType | null
  }

  type GetUserDeviceGroupByPayload<T extends UserDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], UserDeviceGroupByOutputType[P]>
        }
      >
    >


  export type UserDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fcmToken?: boolean
    deviceInfo?: boolean
    createdAt?: boolean
    lastActiveAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fcmToken?: boolean
    deviceInfo?: boolean
    createdAt?: boolean
    lastActiveAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fcmToken?: boolean
    deviceInfo?: boolean
    createdAt?: boolean
    lastActiveAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectScalar = {
    id?: boolean
    userId?: boolean
    fcmToken?: boolean
    deviceInfo?: boolean
    createdAt?: boolean
    lastActiveAt?: boolean
  }

  export type UserDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fcmToken" | "deviceInfo" | "createdAt" | "lastActiveAt", ExtArgs["result"]["userDevice"]>
  export type UserDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDevice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      fcmToken: string
      deviceInfo: string | null
      createdAt: Date
      lastActiveAt: Date
    }, ExtArgs["result"]["userDevice"]>
    composites: {}
  }

  type UserDeviceGetPayload<S extends boolean | null | undefined | UserDeviceDefaultArgs> = $Result.GetResult<Prisma.$UserDevicePayload, S>

  type UserDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDeviceCountAggregateInputType | true
    }

  export interface UserDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDevice'], meta: { name: 'UserDevice' } }
    /**
     * Find zero or one UserDevice that matches the filter.
     * @param {UserDeviceFindUniqueArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDeviceFindUniqueArgs>(args: SelectSubset<T, UserDeviceFindUniqueArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDeviceFindUniqueOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDeviceFindFirstArgs>(args?: SelectSubset<T, UserDeviceFindFirstArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDevices
     * const userDevices = await prisma.userDevice.findMany()
     * 
     * // Get first 10 UserDevices
     * const userDevices = await prisma.userDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDeviceFindManyArgs>(args?: SelectSubset<T, UserDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDevice.
     * @param {UserDeviceCreateArgs} args - Arguments to create a UserDevice.
     * @example
     * // Create one UserDevice
     * const UserDevice = await prisma.userDevice.create({
     *   data: {
     *     // ... data to create a UserDevice
     *   }
     * })
     * 
     */
    create<T extends UserDeviceCreateArgs>(args: SelectSubset<T, UserDeviceCreateArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDevices.
     * @param {UserDeviceCreateManyArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDeviceCreateManyArgs>(args?: SelectSubset<T, UserDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDevices and returns the data saved in the database.
     * @param {UserDeviceCreateManyAndReturnArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDevices and only return the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDevice.
     * @param {UserDeviceDeleteArgs} args - Arguments to delete one UserDevice.
     * @example
     * // Delete one UserDevice
     * const UserDevice = await prisma.userDevice.delete({
     *   where: {
     *     // ... filter to delete one UserDevice
     *   }
     * })
     * 
     */
    delete<T extends UserDeviceDeleteArgs>(args: SelectSubset<T, UserDeviceDeleteArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDevice.
     * @param {UserDeviceUpdateArgs} args - Arguments to update one UserDevice.
     * @example
     * // Update one UserDevice
     * const userDevice = await prisma.userDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDeviceUpdateArgs>(args: SelectSubset<T, UserDeviceUpdateArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDevices.
     * @param {UserDeviceDeleteManyArgs} args - Arguments to filter UserDevices to delete.
     * @example
     * // Delete a few UserDevices
     * const { count } = await prisma.userDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeviceDeleteManyArgs>(args?: SelectSubset<T, UserDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDevices
     * const userDevice = await prisma.userDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDeviceUpdateManyArgs>(args: SelectSubset<T, UserDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDevices and returns the data updated in the database.
     * @param {UserDeviceUpdateManyAndReturnArgs} args - Arguments to update many UserDevices.
     * @example
     * // Update many UserDevices
     * const userDevice = await prisma.userDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDevices and only return the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDevice.
     * @param {UserDeviceUpsertArgs} args - Arguments to update or create a UserDevice.
     * @example
     * // Update or create a UserDevice
     * const userDevice = await prisma.userDevice.upsert({
     *   create: {
     *     // ... data to create a UserDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDevice we want to update
     *   }
     * })
     */
    upsert<T extends UserDeviceUpsertArgs>(args: SelectSubset<T, UserDeviceUpsertArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceCountArgs} args - Arguments to filter UserDevices to count.
     * @example
     * // Count the number of UserDevices
     * const count = await prisma.userDevice.count({
     *   where: {
     *     // ... the filter for the UserDevices we want to count
     *   }
     * })
    **/
    count<T extends UserDeviceCountArgs>(
      args?: Subset<T, UserDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDeviceAggregateArgs>(args: Subset<T, UserDeviceAggregateArgs>): Prisma.PrismaPromise<GetUserDeviceAggregateType<T>>

    /**
     * Group by UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDeviceGroupByArgs['orderBy'] }
        : { orderBy?: UserDeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDevice model
   */
  readonly fields: UserDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDevice model
   */
  interface UserDeviceFieldRefs {
    readonly id: FieldRef<"UserDevice", 'Int'>
    readonly userId: FieldRef<"UserDevice", 'Int'>
    readonly fcmToken: FieldRef<"UserDevice", 'String'>
    readonly deviceInfo: FieldRef<"UserDevice", 'String'>
    readonly createdAt: FieldRef<"UserDevice", 'DateTime'>
    readonly lastActiveAt: FieldRef<"UserDevice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDevice findUnique
   */
  export type UserDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice findUniqueOrThrow
   */
  export type UserDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice findFirst
   */
  export type UserDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDevices.
     */
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice findFirstOrThrow
   */
  export type UserDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDevices.
     */
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice findMany
   */
  export type UserDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevices to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice create
   */
  export type UserDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDevice.
     */
    data: XOR<UserDeviceCreateInput, UserDeviceUncheckedCreateInput>
  }

  /**
   * UserDevice createMany
   */
  export type UserDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDevices.
     */
    data: UserDeviceCreateManyInput | UserDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDevice createManyAndReturn
   */
  export type UserDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many UserDevices.
     */
    data: UserDeviceCreateManyInput | UserDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDevice update
   */
  export type UserDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDevice.
     */
    data: XOR<UserDeviceUpdateInput, UserDeviceUncheckedUpdateInput>
    /**
     * Choose, which UserDevice to update.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice updateMany
   */
  export type UserDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDevices.
     */
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyInput>
    /**
     * Filter which UserDevices to update
     */
    where?: UserDeviceWhereInput
    /**
     * Limit how many UserDevices to update.
     */
    limit?: number
  }

  /**
   * UserDevice updateManyAndReturn
   */
  export type UserDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * The data used to update UserDevices.
     */
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyInput>
    /**
     * Filter which UserDevices to update
     */
    where?: UserDeviceWhereInput
    /**
     * Limit how many UserDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDevice upsert
   */
  export type UserDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDevice to update in case it exists.
     */
    where: UserDeviceWhereUniqueInput
    /**
     * In case the UserDevice found by the `where` argument doesn't exist, create a new UserDevice with this data.
     */
    create: XOR<UserDeviceCreateInput, UserDeviceUncheckedCreateInput>
    /**
     * In case the UserDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDeviceUpdateInput, UserDeviceUncheckedUpdateInput>
  }

  /**
   * UserDevice delete
   */
  export type UserDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter which UserDevice to delete.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice deleteMany
   */
  export type UserDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevices to delete
     */
    where?: UserDeviceWhereInput
    /**
     * Limit how many UserDevices to delete.
     */
    limit?: number
  }

  /**
   * UserDevice without action
   */
  export type UserDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    read: boolean | null
    channel: $Enums.NotificationChannel | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    message: string | null
    read: boolean | null
    channel: $Enums.NotificationChannel | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    read: number
    channel: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    channel?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    channel?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    channel?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    title: string
    message: string
    read: boolean
    channel: $Enums.NotificationChannel
    metadata: JsonValue | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    channel?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    channel?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    channel?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    channel?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "read" | "channel" | "metadata" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      message: string
      read: boolean
      channel: $Enums.NotificationChannel
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly channel: FieldRef<"Notification", 'NotificationChannel'>
    readonly metadata: FieldRef<"Notification", 'Json'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Bulletin
   */

  export type AggregateBulletin = {
    _count: BulletinCountAggregateOutputType | null
    _avg: BulletinAvgAggregateOutputType | null
    _sum: BulletinSumAggregateOutputType | null
    _min: BulletinMinAggregateOutputType | null
    _max: BulletinMaxAggregateOutputType | null
  }

  export type BulletinAvgAggregateOutputType = {
    id: number | null
    createdByUserId: number | null
  }

  export type BulletinSumAggregateOutputType = {
    id: number | null
    createdByUserId: number | null
  }

  export type BulletinMinAggregateOutputType = {
    id: number | null
    createdByUserId: number | null
    title: string | null
    message: string | null
    targetRoles: $Enums.Target | null
    createdAt: Date | null
  }

  export type BulletinMaxAggregateOutputType = {
    id: number | null
    createdByUserId: number | null
    title: string | null
    message: string | null
    targetRoles: $Enums.Target | null
    createdAt: Date | null
  }

  export type BulletinCountAggregateOutputType = {
    id: number
    createdByUserId: number
    title: number
    message: number
    targetRoles: number
    createdAt: number
    _all: number
  }


  export type BulletinAvgAggregateInputType = {
    id?: true
    createdByUserId?: true
  }

  export type BulletinSumAggregateInputType = {
    id?: true
    createdByUserId?: true
  }

  export type BulletinMinAggregateInputType = {
    id?: true
    createdByUserId?: true
    title?: true
    message?: true
    targetRoles?: true
    createdAt?: true
  }

  export type BulletinMaxAggregateInputType = {
    id?: true
    createdByUserId?: true
    title?: true
    message?: true
    targetRoles?: true
    createdAt?: true
  }

  export type BulletinCountAggregateInputType = {
    id?: true
    createdByUserId?: true
    title?: true
    message?: true
    targetRoles?: true
    createdAt?: true
    _all?: true
  }

  export type BulletinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bulletin to aggregate.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bulletins
    **/
    _count?: true | BulletinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulletinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulletinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulletinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulletinMaxAggregateInputType
  }

  export type GetBulletinAggregateType<T extends BulletinAggregateArgs> = {
        [P in keyof T & keyof AggregateBulletin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulletin[P]>
      : GetScalarType<T[P], AggregateBulletin[P]>
  }




  export type BulletinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinWhereInput
    orderBy?: BulletinOrderByWithAggregationInput | BulletinOrderByWithAggregationInput[]
    by: BulletinScalarFieldEnum[] | BulletinScalarFieldEnum
    having?: BulletinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulletinCountAggregateInputType | true
    _avg?: BulletinAvgAggregateInputType
    _sum?: BulletinSumAggregateInputType
    _min?: BulletinMinAggregateInputType
    _max?: BulletinMaxAggregateInputType
  }

  export type BulletinGroupByOutputType = {
    id: number
    createdByUserId: number
    title: string | null
    message: string
    targetRoles: $Enums.Target
    createdAt: Date
    _count: BulletinCountAggregateOutputType | null
    _avg: BulletinAvgAggregateOutputType | null
    _sum: BulletinSumAggregateOutputType | null
    _min: BulletinMinAggregateOutputType | null
    _max: BulletinMaxAggregateOutputType | null
  }

  type GetBulletinGroupByPayload<T extends BulletinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulletinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulletinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulletinGroupByOutputType[P]>
            : GetScalarType<T[P], BulletinGroupByOutputType[P]>
        }
      >
    >


  export type BulletinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdByUserId?: boolean
    title?: boolean
    message?: boolean
    targetRoles?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulletin"]>

  export type BulletinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdByUserId?: boolean
    title?: boolean
    message?: boolean
    targetRoles?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulletin"]>

  export type BulletinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdByUserId?: boolean
    title?: boolean
    message?: boolean
    targetRoles?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulletin"]>

  export type BulletinSelectScalar = {
    id?: boolean
    createdByUserId?: boolean
    title?: boolean
    message?: boolean
    targetRoles?: boolean
    createdAt?: boolean
  }

  export type BulletinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdByUserId" | "title" | "message" | "targetRoles" | "createdAt", ExtArgs["result"]["bulletin"]>
  export type BulletinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BulletinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BulletinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BulletinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bulletin"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdByUserId: number
      title: string | null
      message: string
      targetRoles: $Enums.Target
      createdAt: Date
    }, ExtArgs["result"]["bulletin"]>
    composites: {}
  }

  type BulletinGetPayload<S extends boolean | null | undefined | BulletinDefaultArgs> = $Result.GetResult<Prisma.$BulletinPayload, S>

  type BulletinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulletinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulletinCountAggregateInputType | true
    }

  export interface BulletinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bulletin'], meta: { name: 'Bulletin' } }
    /**
     * Find zero or one Bulletin that matches the filter.
     * @param {BulletinFindUniqueArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulletinFindUniqueArgs>(args: SelectSubset<T, BulletinFindUniqueArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bulletin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulletinFindUniqueOrThrowArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulletinFindUniqueOrThrowArgs>(args: SelectSubset<T, BulletinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bulletin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinFindFirstArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulletinFindFirstArgs>(args?: SelectSubset<T, BulletinFindFirstArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bulletin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinFindFirstOrThrowArgs} args - Arguments to find a Bulletin
     * @example
     * // Get one Bulletin
     * const bulletin = await prisma.bulletin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulletinFindFirstOrThrowArgs>(args?: SelectSubset<T, BulletinFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bulletins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bulletins
     * const bulletins = await prisma.bulletin.findMany()
     * 
     * // Get first 10 Bulletins
     * const bulletins = await prisma.bulletin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulletinWithIdOnly = await prisma.bulletin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulletinFindManyArgs>(args?: SelectSubset<T, BulletinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bulletin.
     * @param {BulletinCreateArgs} args - Arguments to create a Bulletin.
     * @example
     * // Create one Bulletin
     * const Bulletin = await prisma.bulletin.create({
     *   data: {
     *     // ... data to create a Bulletin
     *   }
     * })
     * 
     */
    create<T extends BulletinCreateArgs>(args: SelectSubset<T, BulletinCreateArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bulletins.
     * @param {BulletinCreateManyArgs} args - Arguments to create many Bulletins.
     * @example
     * // Create many Bulletins
     * const bulletin = await prisma.bulletin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulletinCreateManyArgs>(args?: SelectSubset<T, BulletinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bulletins and returns the data saved in the database.
     * @param {BulletinCreateManyAndReturnArgs} args - Arguments to create many Bulletins.
     * @example
     * // Create many Bulletins
     * const bulletin = await prisma.bulletin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bulletins and only return the `id`
     * const bulletinWithIdOnly = await prisma.bulletin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BulletinCreateManyAndReturnArgs>(args?: SelectSubset<T, BulletinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bulletin.
     * @param {BulletinDeleteArgs} args - Arguments to delete one Bulletin.
     * @example
     * // Delete one Bulletin
     * const Bulletin = await prisma.bulletin.delete({
     *   where: {
     *     // ... filter to delete one Bulletin
     *   }
     * })
     * 
     */
    delete<T extends BulletinDeleteArgs>(args: SelectSubset<T, BulletinDeleteArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bulletin.
     * @param {BulletinUpdateArgs} args - Arguments to update one Bulletin.
     * @example
     * // Update one Bulletin
     * const bulletin = await prisma.bulletin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulletinUpdateArgs>(args: SelectSubset<T, BulletinUpdateArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bulletins.
     * @param {BulletinDeleteManyArgs} args - Arguments to filter Bulletins to delete.
     * @example
     * // Delete a few Bulletins
     * const { count } = await prisma.bulletin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulletinDeleteManyArgs>(args?: SelectSubset<T, BulletinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bulletins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bulletins
     * const bulletin = await prisma.bulletin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulletinUpdateManyArgs>(args: SelectSubset<T, BulletinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bulletins and returns the data updated in the database.
     * @param {BulletinUpdateManyAndReturnArgs} args - Arguments to update many Bulletins.
     * @example
     * // Update many Bulletins
     * const bulletin = await prisma.bulletin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bulletins and only return the `id`
     * const bulletinWithIdOnly = await prisma.bulletin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BulletinUpdateManyAndReturnArgs>(args: SelectSubset<T, BulletinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bulletin.
     * @param {BulletinUpsertArgs} args - Arguments to update or create a Bulletin.
     * @example
     * // Update or create a Bulletin
     * const bulletin = await prisma.bulletin.upsert({
     *   create: {
     *     // ... data to create a Bulletin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bulletin we want to update
     *   }
     * })
     */
    upsert<T extends BulletinUpsertArgs>(args: SelectSubset<T, BulletinUpsertArgs<ExtArgs>>): Prisma__BulletinClient<$Result.GetResult<Prisma.$BulletinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bulletins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinCountArgs} args - Arguments to filter Bulletins to count.
     * @example
     * // Count the number of Bulletins
     * const count = await prisma.bulletin.count({
     *   where: {
     *     // ... the filter for the Bulletins we want to count
     *   }
     * })
    **/
    count<T extends BulletinCountArgs>(
      args?: Subset<T, BulletinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulletinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bulletin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BulletinAggregateArgs>(args: Subset<T, BulletinAggregateArgs>): Prisma.PrismaPromise<GetBulletinAggregateType<T>>

    /**
     * Group by Bulletin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BulletinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulletinGroupByArgs['orderBy'] }
        : { orderBy?: BulletinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BulletinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulletinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bulletin model
   */
  readonly fields: BulletinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bulletin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulletinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bulletin model
   */
  interface BulletinFieldRefs {
    readonly id: FieldRef<"Bulletin", 'Int'>
    readonly createdByUserId: FieldRef<"Bulletin", 'Int'>
    readonly title: FieldRef<"Bulletin", 'String'>
    readonly message: FieldRef<"Bulletin", 'String'>
    readonly targetRoles: FieldRef<"Bulletin", 'Target'>
    readonly createdAt: FieldRef<"Bulletin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bulletin findUnique
   */
  export type BulletinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where: BulletinWhereUniqueInput
  }

  /**
   * Bulletin findUniqueOrThrow
   */
  export type BulletinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where: BulletinWhereUniqueInput
  }

  /**
   * Bulletin findFirst
   */
  export type BulletinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bulletins.
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bulletins.
     */
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }

  /**
   * Bulletin findFirstOrThrow
   */
  export type BulletinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    /**
     * Filter, which Bulletin to fetch.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bulletins.
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bulletins.
     */
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }

  /**
   * Bulletin findMany
   */
  export type BulletinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    /**
     * Filter, which Bulletins to fetch.
     */
    where?: BulletinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bulletins to fetch.
     */
    orderBy?: BulletinOrderByWithRelationInput | BulletinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bulletins.
     */
    cursor?: BulletinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bulletins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bulletins.
     */
    skip?: number
    distinct?: BulletinScalarFieldEnum | BulletinScalarFieldEnum[]
  }

  /**
   * Bulletin create
   */
  export type BulletinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    /**
     * The data needed to create a Bulletin.
     */
    data: XOR<BulletinCreateInput, BulletinUncheckedCreateInput>
  }

  /**
   * Bulletin createMany
   */
  export type BulletinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bulletins.
     */
    data: BulletinCreateManyInput | BulletinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bulletin createManyAndReturn
   */
  export type BulletinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * The data used to create many Bulletins.
     */
    data: BulletinCreateManyInput | BulletinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bulletin update
   */
  export type BulletinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    /**
     * The data needed to update a Bulletin.
     */
    data: XOR<BulletinUpdateInput, BulletinUncheckedUpdateInput>
    /**
     * Choose, which Bulletin to update.
     */
    where: BulletinWhereUniqueInput
  }

  /**
   * Bulletin updateMany
   */
  export type BulletinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bulletins.
     */
    data: XOR<BulletinUpdateManyMutationInput, BulletinUncheckedUpdateManyInput>
    /**
     * Filter which Bulletins to update
     */
    where?: BulletinWhereInput
    /**
     * Limit how many Bulletins to update.
     */
    limit?: number
  }

  /**
   * Bulletin updateManyAndReturn
   */
  export type BulletinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * The data used to update Bulletins.
     */
    data: XOR<BulletinUpdateManyMutationInput, BulletinUncheckedUpdateManyInput>
    /**
     * Filter which Bulletins to update
     */
    where?: BulletinWhereInput
    /**
     * Limit how many Bulletins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bulletin upsert
   */
  export type BulletinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    /**
     * The filter to search for the Bulletin to update in case it exists.
     */
    where: BulletinWhereUniqueInput
    /**
     * In case the Bulletin found by the `where` argument doesn't exist, create a new Bulletin with this data.
     */
    create: XOR<BulletinCreateInput, BulletinUncheckedCreateInput>
    /**
     * In case the Bulletin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulletinUpdateInput, BulletinUncheckedUpdateInput>
  }

  /**
   * Bulletin delete
   */
  export type BulletinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
    /**
     * Filter which Bulletin to delete.
     */
    where: BulletinWhereUniqueInput
  }

  /**
   * Bulletin deleteMany
   */
  export type BulletinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bulletins to delete
     */
    where?: BulletinWhereInput
    /**
     * Limit how many Bulletins to delete.
     */
    limit?: number
  }

  /**
   * Bulletin without action
   */
  export type BulletinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bulletin
     */
    select?: BulletinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bulletin
     */
    omit?: BulletinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinInclude<ExtArgs> | null
  }


  /**
   * Model SystemLog
   */

  export type AggregateSystemLog = {
    _count: SystemLogCountAggregateOutputType | null
    _avg: SystemLogAvgAggregateOutputType | null
    _sum: SystemLogSumAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  export type SystemLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    targetId: number | null
  }

  export type SystemLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    targetId: number | null
  }

  export type SystemLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    targetTable: string | null
    targetId: number | null
    action: string | null
    description: string | null
    type: $Enums.LogType | null
    originIp: string | null
    createdAt: Date | null
  }

  export type SystemLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    targetTable: string | null
    targetId: number | null
    action: string | null
    description: string | null
    type: $Enums.LogType | null
    originIp: string | null
    createdAt: Date | null
  }

  export type SystemLogCountAggregateOutputType = {
    id: number
    userId: number
    targetTable: number
    targetId: number
    action: number
    description: number
    type: number
    originIp: number
    createdAt: number
    _all: number
  }


  export type SystemLogAvgAggregateInputType = {
    id?: true
    userId?: true
    targetId?: true
  }

  export type SystemLogSumAggregateInputType = {
    id?: true
    userId?: true
    targetId?: true
  }

  export type SystemLogMinAggregateInputType = {
    id?: true
    userId?: true
    targetTable?: true
    targetId?: true
    action?: true
    description?: true
    type?: true
    originIp?: true
    createdAt?: true
  }

  export type SystemLogMaxAggregateInputType = {
    id?: true
    userId?: true
    targetTable?: true
    targetId?: true
    action?: true
    description?: true
    type?: true
    originIp?: true
    createdAt?: true
  }

  export type SystemLogCountAggregateInputType = {
    id?: true
    userId?: true
    targetTable?: true
    targetId?: true
    action?: true
    description?: true
    type?: true
    originIp?: true
    createdAt?: true
    _all?: true
  }

  export type SystemLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLog to aggregate.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemLogs
    **/
    _count?: true | SystemLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemLogMaxAggregateInputType
  }

  export type GetSystemLogAggregateType<T extends SystemLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemLog[P]>
      : GetScalarType<T[P], AggregateSystemLog[P]>
  }




  export type SystemLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogWhereInput
    orderBy?: SystemLogOrderByWithAggregationInput | SystemLogOrderByWithAggregationInput[]
    by: SystemLogScalarFieldEnum[] | SystemLogScalarFieldEnum
    having?: SystemLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemLogCountAggregateInputType | true
    _avg?: SystemLogAvgAggregateInputType
    _sum?: SystemLogSumAggregateInputType
    _min?: SystemLogMinAggregateInputType
    _max?: SystemLogMaxAggregateInputType
  }

  export type SystemLogGroupByOutputType = {
    id: number
    userId: number | null
    targetTable: string
    targetId: number
    action: string
    description: string | null
    type: $Enums.LogType
    originIp: string | null
    createdAt: Date
    _count: SystemLogCountAggregateOutputType | null
    _avg: SystemLogAvgAggregateOutputType | null
    _sum: SystemLogSumAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  type GetSystemLogGroupByPayload<T extends SystemLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
            : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
        }
      >
    >


  export type SystemLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetTable?: boolean
    targetId?: boolean
    action?: boolean
    description?: boolean
    type?: boolean
    originIp?: boolean
    createdAt?: boolean
    user?: boolean | SystemLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetTable?: boolean
    targetId?: boolean
    action?: boolean
    description?: boolean
    type?: boolean
    originIp?: boolean
    createdAt?: boolean
    user?: boolean | SystemLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    targetTable?: boolean
    targetId?: boolean
    action?: boolean
    description?: boolean
    type?: boolean
    originIp?: boolean
    createdAt?: boolean
    user?: boolean | SystemLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectScalar = {
    id?: boolean
    userId?: boolean
    targetTable?: boolean
    targetId?: boolean
    action?: boolean
    description?: boolean
    type?: boolean
    originIp?: boolean
    createdAt?: boolean
  }

  export type SystemLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "targetTable" | "targetId" | "action" | "description" | "type" | "originIp" | "createdAt", ExtArgs["result"]["systemLog"]>
  export type SystemLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SystemLog$userArgs<ExtArgs>
  }
  export type SystemLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SystemLog$userArgs<ExtArgs>
  }
  export type SystemLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SystemLog$userArgs<ExtArgs>
  }

  export type $SystemLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      targetTable: string
      targetId: number
      action: string
      description: string | null
      type: $Enums.LogType
      originIp: string | null
      createdAt: Date
    }, ExtArgs["result"]["systemLog"]>
    composites: {}
  }

  type SystemLogGetPayload<S extends boolean | null | undefined | SystemLogDefaultArgs> = $Result.GetResult<Prisma.$SystemLogPayload, S>

  type SystemLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemLogCountAggregateInputType | true
    }

  export interface SystemLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemLog'], meta: { name: 'SystemLog' } }
    /**
     * Find zero or one SystemLog that matches the filter.
     * @param {SystemLogFindUniqueArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemLogFindUniqueArgs>(args: SelectSubset<T, SystemLogFindUniqueArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemLogFindUniqueOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemLogFindFirstArgs>(args?: SelectSubset<T, SystemLogFindFirstArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemLogs
     * const systemLogs = await prisma.systemLog.findMany()
     * 
     * // Get first 10 SystemLogs
     * const systemLogs = await prisma.systemLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemLogFindManyArgs>(args?: SelectSubset<T, SystemLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemLog.
     * @param {SystemLogCreateArgs} args - Arguments to create a SystemLog.
     * @example
     * // Create one SystemLog
     * const SystemLog = await prisma.systemLog.create({
     *   data: {
     *     // ... data to create a SystemLog
     *   }
     * })
     * 
     */
    create<T extends SystemLogCreateArgs>(args: SelectSubset<T, SystemLogCreateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemLogs.
     * @param {SystemLogCreateManyArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemLogCreateManyArgs>(args?: SelectSubset<T, SystemLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemLogs and returns the data saved in the database.
     * @param {SystemLogCreateManyAndReturnArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemLogs and only return the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemLog.
     * @param {SystemLogDeleteArgs} args - Arguments to delete one SystemLog.
     * @example
     * // Delete one SystemLog
     * const SystemLog = await prisma.systemLog.delete({
     *   where: {
     *     // ... filter to delete one SystemLog
     *   }
     * })
     * 
     */
    delete<T extends SystemLogDeleteArgs>(args: SelectSubset<T, SystemLogDeleteArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemLog.
     * @param {SystemLogUpdateArgs} args - Arguments to update one SystemLog.
     * @example
     * // Update one SystemLog
     * const systemLog = await prisma.systemLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemLogUpdateArgs>(args: SelectSubset<T, SystemLogUpdateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemLogs.
     * @param {SystemLogDeleteManyArgs} args - Arguments to filter SystemLogs to delete.
     * @example
     * // Delete a few SystemLogs
     * const { count } = await prisma.systemLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemLogDeleteManyArgs>(args?: SelectSubset<T, SystemLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemLogs
     * const systemLog = await prisma.systemLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemLogUpdateManyArgs>(args: SelectSubset<T, SystemLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemLogs and returns the data updated in the database.
     * @param {SystemLogUpdateManyAndReturnArgs} args - Arguments to update many SystemLogs.
     * @example
     * // Update many SystemLogs
     * const systemLog = await prisma.systemLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemLogs and only return the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemLog.
     * @param {SystemLogUpsertArgs} args - Arguments to update or create a SystemLog.
     * @example
     * // Update or create a SystemLog
     * const systemLog = await prisma.systemLog.upsert({
     *   create: {
     *     // ... data to create a SystemLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemLog we want to update
     *   }
     * })
     */
    upsert<T extends SystemLogUpsertArgs>(args: SelectSubset<T, SystemLogUpsertArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogCountArgs} args - Arguments to filter SystemLogs to count.
     * @example
     * // Count the number of SystemLogs
     * const count = await prisma.systemLog.count({
     *   where: {
     *     // ... the filter for the SystemLogs we want to count
     *   }
     * })
    **/
    count<T extends SystemLogCountArgs>(
      args?: Subset<T, SystemLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemLogAggregateArgs>(args: Subset<T, SystemLogAggregateArgs>): Prisma.PrismaPromise<GetSystemLogAggregateType<T>>

    /**
     * Group by SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemLogGroupByArgs['orderBy'] }
        : { orderBy?: SystemLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemLog model
   */
  readonly fields: SystemLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SystemLog$userArgs<ExtArgs> = {}>(args?: Subset<T, SystemLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemLog model
   */
  interface SystemLogFieldRefs {
    readonly id: FieldRef<"SystemLog", 'Int'>
    readonly userId: FieldRef<"SystemLog", 'Int'>
    readonly targetTable: FieldRef<"SystemLog", 'String'>
    readonly targetId: FieldRef<"SystemLog", 'Int'>
    readonly action: FieldRef<"SystemLog", 'String'>
    readonly description: FieldRef<"SystemLog", 'String'>
    readonly type: FieldRef<"SystemLog", 'LogType'>
    readonly originIp: FieldRef<"SystemLog", 'String'>
    readonly createdAt: FieldRef<"SystemLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemLog findUnique
   */
  export type SystemLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findUniqueOrThrow
   */
  export type SystemLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findFirst
   */
  export type SystemLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findFirstOrThrow
   */
  export type SystemLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findMany
   */
  export type SystemLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog create
   */
  export type SystemLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemLog.
     */
    data: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
  }

  /**
   * SystemLog createMany
   */
  export type SystemLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemLog createManyAndReturn
   */
  export type SystemLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemLog update
   */
  export type SystemLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemLog.
     */
    data: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
    /**
     * Choose, which SystemLog to update.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog updateMany
   */
  export type SystemLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemLogs.
     */
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemLogs to update
     */
    where?: SystemLogWhereInput
    /**
     * Limit how many SystemLogs to update.
     */
    limit?: number
  }

  /**
   * SystemLog updateManyAndReturn
   */
  export type SystemLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * The data used to update SystemLogs.
     */
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemLogs to update
     */
    where?: SystemLogWhereInput
    /**
     * Limit how many SystemLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemLog upsert
   */
  export type SystemLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemLog to update in case it exists.
     */
    where: SystemLogWhereUniqueInput
    /**
     * In case the SystemLog found by the `where` argument doesn't exist, create a new SystemLog with this data.
     */
    create: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
    /**
     * In case the SystemLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
  }

  /**
   * SystemLog delete
   */
  export type SystemLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter which SystemLog to delete.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog deleteMany
   */
  export type SystemLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLogs to delete
     */
    where?: SystemLogWhereInput
    /**
     * Limit how many SystemLogs to delete.
     */
    limit?: number
  }

  /**
   * SystemLog.user
   */
  export type SystemLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SystemLog without action
   */
  export type SystemLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    email: 'email',
    hashedPassword: 'hashedPassword',
    completeName: 'completeName',
    cpf: 'cpf',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    recoveryMode: 'recoveryMode'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jwt: 'jwt',
    refreshJwt: 'refreshJwt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const PetOwnerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullAddress: 'fullAddress'
  };

  export type PetOwnerScalarFieldEnum = (typeof PetOwnerScalarFieldEnum)[keyof typeof PetOwnerScalarFieldEnum]


  export const CommitmentTermScalarFieldEnum: {
    id: 'id',
    petOwnerId: 'petOwnerId',
    signatureDate: 'signatureDate',
    documentUrl: 'documentUrl'
  };

  export type CommitmentTermScalarFieldEnum = (typeof CommitmentTermScalarFieldEnum)[keyof typeof CommitmentTermScalarFieldEnum]


  export const VeterinarianScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    crmv: 'crmv',
    active: 'active'
  };

  export type VeterinarianScalarFieldEnum = (typeof VeterinarianScalarFieldEnum)[keyof typeof VeterinarianScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    id: 'id',
    petOwnerId: 'petOwnerId',
    name: 'name',
    species: 'species',
    gender: 'gender',
    estimatedAge: 'estimatedAge',
    sizeWeight: 'sizeWeight',
    breed: 'breed',
    microchipNumber: 'microchipNumber'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    animalId: 'animalId',
    petOwnerId: 'petOwnerId',
    serviceType: 'serviceType',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    notes: 'notes'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const MedicalRecordScalarFieldEnum: {
    id: 'id',
    animalId: 'animalId',
    microchipNumber: 'microchipNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalRecordScalarFieldEnum = (typeof MedicalRecordScalarFieldEnum)[keyof typeof MedicalRecordScalarFieldEnum]


  export const ClinicalRecordScalarFieldEnum: {
    id: 'id',
    medicalRecordId: 'medicalRecordId',
    appointmentId: 'appointmentId',
    veterinarianId: 'veterinarianId',
    type: 'type',
    treatmentDate: 'treatmentDate',
    fitForSurgery: 'fitForSurgery',
    surgeryType: 'surgeryType',
    observations: 'observations',
    instructions: 'instructions'
  };

  export type ClinicalRecordScalarFieldEnum = (typeof ClinicalRecordScalarFieldEnum)[keyof typeof ClinicalRecordScalarFieldEnum]


  export const UserDeviceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fcmToken: 'fcmToken',
    deviceInfo: 'deviceInfo',
    createdAt: 'createdAt',
    lastActiveAt: 'lastActiveAt'
  };

  export type UserDeviceScalarFieldEnum = (typeof UserDeviceScalarFieldEnum)[keyof typeof UserDeviceScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    read: 'read',
    channel: 'channel',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const BulletinScalarFieldEnum: {
    id: 'id',
    createdByUserId: 'createdByUserId',
    title: 'title',
    message: 'message',
    targetRoles: 'targetRoles',
    createdAt: 'createdAt'
  };

  export type BulletinScalarFieldEnum = (typeof BulletinScalarFieldEnum)[keyof typeof BulletinScalarFieldEnum]


  export const SystemLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    targetTable: 'targetTable',
    targetId: 'targetId',
    action: 'action',
    description: 'description',
    type: 'type',
    originIp: 'originIp',
    createdAt: 'createdAt'
  };

  export type SystemLogScalarFieldEnum = (typeof SystemLogScalarFieldEnum)[keyof typeof SystemLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Species'
   */
  export type EnumSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Species'>
    


  /**
   * Reference to a field of type 'Species[]'
   */
  export type ListEnumSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Species[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'ServiceType[]'
   */
  export type ListEnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'ClinicalRecordType'
   */
  export type EnumClinicalRecordTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClinicalRecordType'>
    


  /**
   * Reference to a field of type 'ClinicalRecordType[]'
   */
  export type ListEnumClinicalRecordTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClinicalRecordType[]'>
    


  /**
   * Reference to a field of type 'SurgeryType'
   */
  export type EnumSurgeryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SurgeryType'>
    


  /**
   * Reference to a field of type 'SurgeryType[]'
   */
  export type ListEnumSurgeryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SurgeryType[]'>
    


  /**
   * Reference to a field of type 'NotificationChannel'
   */
  export type EnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel'>
    


  /**
   * Reference to a field of type 'NotificationChannel[]'
   */
  export type ListEnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Target'
   */
  export type EnumTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Target'>
    


  /**
   * Reference to a field of type 'Target[]'
   */
  export type ListEnumTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Target[]'>
    


  /**
   * Reference to a field of type 'LogType'
   */
  export type EnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType'>
    


  /**
   * Reference to a field of type 'LogType[]'
   */
  export type ListEnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    email?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
    completeName?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    recoveryMode?: BoolFilter<"User"> | boolean
    token?: XOR<TokenNullableScalarRelationFilter, TokenWhereInput> | null
    petOwner?: XOR<PetOwnerNullableScalarRelationFilter, PetOwnerWhereInput> | null
    veterinarian?: XOR<VeterinarianNullableScalarRelationFilter, VeterinarianWhereInput> | null
    userDevices?: UserDeviceListRelationFilter
    notifications?: NotificationListRelationFilter
    bulletins?: BulletinListRelationFilter
    systemLogs?: SystemLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    completeName?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recoveryMode?: SortOrder
    token?: TokenOrderByWithRelationInput
    petOwner?: PetOwnerOrderByWithRelationInput
    veterinarian?: VeterinarianOrderByWithRelationInput
    userDevices?: UserDeviceOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    bulletins?: BulletinOrderByRelationAggregateInput
    systemLogs?: SystemLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    hashedPassword?: StringFilter<"User"> | string
    completeName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    recoveryMode?: BoolFilter<"User"> | boolean
    token?: XOR<TokenNullableScalarRelationFilter, TokenWhereInput> | null
    petOwner?: XOR<PetOwnerNullableScalarRelationFilter, PetOwnerWhereInput> | null
    veterinarian?: XOR<VeterinarianNullableScalarRelationFilter, VeterinarianWhereInput> | null
    userDevices?: UserDeviceListRelationFilter
    notifications?: NotificationListRelationFilter
    bulletins?: BulletinListRelationFilter
    systemLogs?: SystemLogListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    completeName?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recoveryMode?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    email?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    completeName?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    recoveryMode?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    userId?: IntFilter<"Token"> | number
    jwt?: StringNullableFilter<"Token"> | string | null
    refreshJwt?: StringNullableFilter<"Token"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jwt?: SortOrderInput | SortOrder
    refreshJwt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    jwt?: string
    refreshJwt?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "jwt" | "refreshJwt">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jwt?: SortOrderInput | SortOrder
    refreshJwt?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    userId?: IntWithAggregatesFilter<"Token"> | number
    jwt?: StringNullableWithAggregatesFilter<"Token"> | string | null
    refreshJwt?: StringNullableWithAggregatesFilter<"Token"> | string | null
  }

  export type PetOwnerWhereInput = {
    AND?: PetOwnerWhereInput | PetOwnerWhereInput[]
    OR?: PetOwnerWhereInput[]
    NOT?: PetOwnerWhereInput | PetOwnerWhereInput[]
    id?: IntFilter<"PetOwner"> | number
    userId?: IntFilter<"PetOwner"> | number
    fullAddress?: StringFilter<"PetOwner"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    animals?: AnimalListRelationFilter
    appointments?: AppointmentListRelationFilter
    commitmentTerms?: CommitmentTermListRelationFilter
  }

  export type PetOwnerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullAddress?: SortOrder
    user?: UserOrderByWithRelationInput
    animals?: AnimalOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
    commitmentTerms?: CommitmentTermOrderByRelationAggregateInput
  }

  export type PetOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: PetOwnerWhereInput | PetOwnerWhereInput[]
    OR?: PetOwnerWhereInput[]
    NOT?: PetOwnerWhereInput | PetOwnerWhereInput[]
    fullAddress?: StringFilter<"PetOwner"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    animals?: AnimalListRelationFilter
    appointments?: AppointmentListRelationFilter
    commitmentTerms?: CommitmentTermListRelationFilter
  }, "id" | "userId">

  export type PetOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullAddress?: SortOrder
    _count?: PetOwnerCountOrderByAggregateInput
    _avg?: PetOwnerAvgOrderByAggregateInput
    _max?: PetOwnerMaxOrderByAggregateInput
    _min?: PetOwnerMinOrderByAggregateInput
    _sum?: PetOwnerSumOrderByAggregateInput
  }

  export type PetOwnerScalarWhereWithAggregatesInput = {
    AND?: PetOwnerScalarWhereWithAggregatesInput | PetOwnerScalarWhereWithAggregatesInput[]
    OR?: PetOwnerScalarWhereWithAggregatesInput[]
    NOT?: PetOwnerScalarWhereWithAggregatesInput | PetOwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PetOwner"> | number
    userId?: IntWithAggregatesFilter<"PetOwner"> | number
    fullAddress?: StringWithAggregatesFilter<"PetOwner"> | string
  }

  export type CommitmentTermWhereInput = {
    AND?: CommitmentTermWhereInput | CommitmentTermWhereInput[]
    OR?: CommitmentTermWhereInput[]
    NOT?: CommitmentTermWhereInput | CommitmentTermWhereInput[]
    id?: IntFilter<"CommitmentTerm"> | number
    petOwnerId?: IntFilter<"CommitmentTerm"> | number
    signatureDate?: DateTimeFilter<"CommitmentTerm"> | Date | string
    documentUrl?: StringNullableFilter<"CommitmentTerm"> | string | null
    petOwner?: XOR<PetOwnerScalarRelationFilter, PetOwnerWhereInput>
  }

  export type CommitmentTermOrderByWithRelationInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    signatureDate?: SortOrder
    documentUrl?: SortOrderInput | SortOrder
    petOwner?: PetOwnerOrderByWithRelationInput
  }

  export type CommitmentTermWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommitmentTermWhereInput | CommitmentTermWhereInput[]
    OR?: CommitmentTermWhereInput[]
    NOT?: CommitmentTermWhereInput | CommitmentTermWhereInput[]
    petOwnerId?: IntFilter<"CommitmentTerm"> | number
    signatureDate?: DateTimeFilter<"CommitmentTerm"> | Date | string
    documentUrl?: StringNullableFilter<"CommitmentTerm"> | string | null
    petOwner?: XOR<PetOwnerScalarRelationFilter, PetOwnerWhereInput>
  }, "id">

  export type CommitmentTermOrderByWithAggregationInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    signatureDate?: SortOrder
    documentUrl?: SortOrderInput | SortOrder
    _count?: CommitmentTermCountOrderByAggregateInput
    _avg?: CommitmentTermAvgOrderByAggregateInput
    _max?: CommitmentTermMaxOrderByAggregateInput
    _min?: CommitmentTermMinOrderByAggregateInput
    _sum?: CommitmentTermSumOrderByAggregateInput
  }

  export type CommitmentTermScalarWhereWithAggregatesInput = {
    AND?: CommitmentTermScalarWhereWithAggregatesInput | CommitmentTermScalarWhereWithAggregatesInput[]
    OR?: CommitmentTermScalarWhereWithAggregatesInput[]
    NOT?: CommitmentTermScalarWhereWithAggregatesInput | CommitmentTermScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommitmentTerm"> | number
    petOwnerId?: IntWithAggregatesFilter<"CommitmentTerm"> | number
    signatureDate?: DateTimeWithAggregatesFilter<"CommitmentTerm"> | Date | string
    documentUrl?: StringNullableWithAggregatesFilter<"CommitmentTerm"> | string | null
  }

  export type VeterinarianWhereInput = {
    AND?: VeterinarianWhereInput | VeterinarianWhereInput[]
    OR?: VeterinarianWhereInput[]
    NOT?: VeterinarianWhereInput | VeterinarianWhereInput[]
    id?: IntFilter<"Veterinarian"> | number
    userId?: IntFilter<"Veterinarian"> | number
    crmv?: StringNullableFilter<"Veterinarian"> | string | null
    active?: BoolFilter<"Veterinarian"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    clinicalRecords?: ClinicalRecordListRelationFilter
  }

  export type VeterinarianOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    crmv?: SortOrderInput | SortOrder
    active?: SortOrder
    user?: UserOrderByWithRelationInput
    clinicalRecords?: ClinicalRecordOrderByRelationAggregateInput
  }

  export type VeterinarianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    crmv?: string
    AND?: VeterinarianWhereInput | VeterinarianWhereInput[]
    OR?: VeterinarianWhereInput[]
    NOT?: VeterinarianWhereInput | VeterinarianWhereInput[]
    active?: BoolFilter<"Veterinarian"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    clinicalRecords?: ClinicalRecordListRelationFilter
  }, "id" | "userId" | "crmv">

  export type VeterinarianOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    crmv?: SortOrderInput | SortOrder
    active?: SortOrder
    _count?: VeterinarianCountOrderByAggregateInput
    _avg?: VeterinarianAvgOrderByAggregateInput
    _max?: VeterinarianMaxOrderByAggregateInput
    _min?: VeterinarianMinOrderByAggregateInput
    _sum?: VeterinarianSumOrderByAggregateInput
  }

  export type VeterinarianScalarWhereWithAggregatesInput = {
    AND?: VeterinarianScalarWhereWithAggregatesInput | VeterinarianScalarWhereWithAggregatesInput[]
    OR?: VeterinarianScalarWhereWithAggregatesInput[]
    NOT?: VeterinarianScalarWhereWithAggregatesInput | VeterinarianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Veterinarian"> | number
    userId?: IntWithAggregatesFilter<"Veterinarian"> | number
    crmv?: StringNullableWithAggregatesFilter<"Veterinarian"> | string | null
    active?: BoolWithAggregatesFilter<"Veterinarian"> | boolean
  }

  export type AnimalWhereInput = {
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    id?: IntFilter<"Animal"> | number
    petOwnerId?: IntFilter<"Animal"> | number
    name?: StringNullableFilter<"Animal"> | string | null
    species?: EnumSpeciesFilter<"Animal"> | $Enums.Species
    gender?: EnumGenderFilter<"Animal"> | $Enums.Gender
    estimatedAge?: StringFilter<"Animal"> | string
    sizeWeight?: StringFilter<"Animal"> | string
    breed?: StringNullableFilter<"Animal"> | string | null
    microchipNumber?: StringNullableFilter<"Animal"> | string | null
    petOwner?: XOR<PetOwnerScalarRelationFilter, PetOwnerWhereInput>
    appointments?: AppointmentListRelationFilter
    medicalRecord?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
  }

  export type AnimalOrderByWithRelationInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    name?: SortOrderInput | SortOrder
    species?: SortOrder
    gender?: SortOrder
    estimatedAge?: SortOrder
    sizeWeight?: SortOrder
    breed?: SortOrderInput | SortOrder
    microchipNumber?: SortOrderInput | SortOrder
    petOwner?: PetOwnerOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    medicalRecord?: MedicalRecordOrderByWithRelationInput
  }

  export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    microchipNumber?: string
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    petOwnerId?: IntFilter<"Animal"> | number
    name?: StringNullableFilter<"Animal"> | string | null
    species?: EnumSpeciesFilter<"Animal"> | $Enums.Species
    gender?: EnumGenderFilter<"Animal"> | $Enums.Gender
    estimatedAge?: StringFilter<"Animal"> | string
    sizeWeight?: StringFilter<"Animal"> | string
    breed?: StringNullableFilter<"Animal"> | string | null
    petOwner?: XOR<PetOwnerScalarRelationFilter, PetOwnerWhereInput>
    appointments?: AppointmentListRelationFilter
    medicalRecord?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
  }, "id" | "microchipNumber">

  export type AnimalOrderByWithAggregationInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    name?: SortOrderInput | SortOrder
    species?: SortOrder
    gender?: SortOrder
    estimatedAge?: SortOrder
    sizeWeight?: SortOrder
    breed?: SortOrderInput | SortOrder
    microchipNumber?: SortOrderInput | SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _avg?: AnimalAvgOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
    _sum?: AnimalSumOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    OR?: AnimalScalarWhereWithAggregatesInput[]
    NOT?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animal"> | number
    petOwnerId?: IntWithAggregatesFilter<"Animal"> | number
    name?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    species?: EnumSpeciesWithAggregatesFilter<"Animal"> | $Enums.Species
    gender?: EnumGenderWithAggregatesFilter<"Animal"> | $Enums.Gender
    estimatedAge?: StringWithAggregatesFilter<"Animal"> | string
    sizeWeight?: StringWithAggregatesFilter<"Animal"> | string
    breed?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    microchipNumber?: StringNullableWithAggregatesFilter<"Animal"> | string | null
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    animalId?: IntFilter<"Appointment"> | number
    petOwnerId?: IntFilter<"Appointment"> | number
    serviceType?: EnumServiceTypeNullableFilter<"Appointment"> | $Enums.ServiceType | null
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    petOwner?: XOR<PetOwnerScalarRelationFilter, PetOwnerWhereInput>
    clinicalRecords?: ClinicalRecordListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    animalId?: SortOrder
    petOwnerId?: SortOrder
    serviceType?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    animal?: AnimalOrderByWithRelationInput
    petOwner?: PetOwnerOrderByWithRelationInput
    clinicalRecords?: ClinicalRecordOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    animalId?: IntFilter<"Appointment"> | number
    petOwnerId?: IntFilter<"Appointment"> | number
    serviceType?: EnumServiceTypeNullableFilter<"Appointment"> | $Enums.ServiceType | null
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    notes?: StringNullableFilter<"Appointment"> | string | null
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    petOwner?: XOR<PetOwnerScalarRelationFilter, PetOwnerWhereInput>
    clinicalRecords?: ClinicalRecordListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    animalId?: SortOrder
    petOwnerId?: SortOrder
    serviceType?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    animalId?: IntWithAggregatesFilter<"Appointment"> | number
    petOwnerId?: IntWithAggregatesFilter<"Appointment"> | number
    serviceType?: EnumServiceTypeNullableWithAggregatesFilter<"Appointment"> | $Enums.ServiceType | null
    startTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
  }

  export type MedicalRecordWhereInput = {
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    id?: IntFilter<"MedicalRecord"> | number
    animalId?: IntFilter<"MedicalRecord"> | number
    microchipNumber?: StringNullableFilter<"MedicalRecord"> | string | null
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    clinicalRecords?: ClinicalRecordListRelationFilter
  }

  export type MedicalRecordOrderByWithRelationInput = {
    id?: SortOrder
    animalId?: SortOrder
    microchipNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    animal?: AnimalOrderByWithRelationInput
    clinicalRecords?: ClinicalRecordOrderByRelationAggregateInput
  }

  export type MedicalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    animalId?: number
    microchipNumber?: string
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    clinicalRecords?: ClinicalRecordListRelationFilter
  }, "id" | "animalId" | "microchipNumber">

  export type MedicalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    animalId?: SortOrder
    microchipNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalRecordCountOrderByAggregateInput
    _avg?: MedicalRecordAvgOrderByAggregateInput
    _max?: MedicalRecordMaxOrderByAggregateInput
    _min?: MedicalRecordMinOrderByAggregateInput
    _sum?: MedicalRecordSumOrderByAggregateInput
  }

  export type MedicalRecordScalarWhereWithAggregatesInput = {
    AND?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    OR?: MedicalRecordScalarWhereWithAggregatesInput[]
    NOT?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicalRecord"> | number
    animalId?: IntWithAggregatesFilter<"MedicalRecord"> | number
    microchipNumber?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
  }

  export type ClinicalRecordWhereInput = {
    AND?: ClinicalRecordWhereInput | ClinicalRecordWhereInput[]
    OR?: ClinicalRecordWhereInput[]
    NOT?: ClinicalRecordWhereInput | ClinicalRecordWhereInput[]
    id?: IntFilter<"ClinicalRecord"> | number
    medicalRecordId?: IntFilter<"ClinicalRecord"> | number
    appointmentId?: IntNullableFilter<"ClinicalRecord"> | number | null
    veterinarianId?: IntFilter<"ClinicalRecord"> | number
    type?: EnumClinicalRecordTypeFilter<"ClinicalRecord"> | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFilter<"ClinicalRecord"> | Date | string
    fitForSurgery?: BoolNullableFilter<"ClinicalRecord"> | boolean | null
    surgeryType?: EnumSurgeryTypeNullableFilter<"ClinicalRecord"> | $Enums.SurgeryType | null
    observations?: StringNullableFilter<"ClinicalRecord"> | string | null
    instructions?: StringNullableFilter<"ClinicalRecord"> | string | null
    medicalRecord?: XOR<MedicalRecordScalarRelationFilter, MedicalRecordWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    veterinarian?: XOR<VeterinarianScalarRelationFilter, VeterinarianWhereInput>
  }

  export type ClinicalRecordOrderByWithRelationInput = {
    id?: SortOrder
    medicalRecordId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    veterinarianId?: SortOrder
    type?: SortOrder
    treatmentDate?: SortOrder
    fitForSurgery?: SortOrderInput | SortOrder
    surgeryType?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    medicalRecord?: MedicalRecordOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
    veterinarian?: VeterinarianOrderByWithRelationInput
  }

  export type ClinicalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClinicalRecordWhereInput | ClinicalRecordWhereInput[]
    OR?: ClinicalRecordWhereInput[]
    NOT?: ClinicalRecordWhereInput | ClinicalRecordWhereInput[]
    medicalRecordId?: IntFilter<"ClinicalRecord"> | number
    appointmentId?: IntNullableFilter<"ClinicalRecord"> | number | null
    veterinarianId?: IntFilter<"ClinicalRecord"> | number
    type?: EnumClinicalRecordTypeFilter<"ClinicalRecord"> | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFilter<"ClinicalRecord"> | Date | string
    fitForSurgery?: BoolNullableFilter<"ClinicalRecord"> | boolean | null
    surgeryType?: EnumSurgeryTypeNullableFilter<"ClinicalRecord"> | $Enums.SurgeryType | null
    observations?: StringNullableFilter<"ClinicalRecord"> | string | null
    instructions?: StringNullableFilter<"ClinicalRecord"> | string | null
    medicalRecord?: XOR<MedicalRecordScalarRelationFilter, MedicalRecordWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    veterinarian?: XOR<VeterinarianScalarRelationFilter, VeterinarianWhereInput>
  }, "id">

  export type ClinicalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    medicalRecordId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    veterinarianId?: SortOrder
    type?: SortOrder
    treatmentDate?: SortOrder
    fitForSurgery?: SortOrderInput | SortOrder
    surgeryType?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    _count?: ClinicalRecordCountOrderByAggregateInput
    _avg?: ClinicalRecordAvgOrderByAggregateInput
    _max?: ClinicalRecordMaxOrderByAggregateInput
    _min?: ClinicalRecordMinOrderByAggregateInput
    _sum?: ClinicalRecordSumOrderByAggregateInput
  }

  export type ClinicalRecordScalarWhereWithAggregatesInput = {
    AND?: ClinicalRecordScalarWhereWithAggregatesInput | ClinicalRecordScalarWhereWithAggregatesInput[]
    OR?: ClinicalRecordScalarWhereWithAggregatesInput[]
    NOT?: ClinicalRecordScalarWhereWithAggregatesInput | ClinicalRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClinicalRecord"> | number
    medicalRecordId?: IntWithAggregatesFilter<"ClinicalRecord"> | number
    appointmentId?: IntNullableWithAggregatesFilter<"ClinicalRecord"> | number | null
    veterinarianId?: IntWithAggregatesFilter<"ClinicalRecord"> | number
    type?: EnumClinicalRecordTypeWithAggregatesFilter<"ClinicalRecord"> | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeWithAggregatesFilter<"ClinicalRecord"> | Date | string
    fitForSurgery?: BoolNullableWithAggregatesFilter<"ClinicalRecord"> | boolean | null
    surgeryType?: EnumSurgeryTypeNullableWithAggregatesFilter<"ClinicalRecord"> | $Enums.SurgeryType | null
    observations?: StringNullableWithAggregatesFilter<"ClinicalRecord"> | string | null
    instructions?: StringNullableWithAggregatesFilter<"ClinicalRecord"> | string | null
  }

  export type UserDeviceWhereInput = {
    AND?: UserDeviceWhereInput | UserDeviceWhereInput[]
    OR?: UserDeviceWhereInput[]
    NOT?: UserDeviceWhereInput | UserDeviceWhereInput[]
    id?: IntFilter<"UserDevice"> | number
    userId?: IntFilter<"UserDevice"> | number
    fcmToken?: StringFilter<"UserDevice"> | string
    deviceInfo?: StringNullableFilter<"UserDevice"> | string | null
    createdAt?: DateTimeFilter<"UserDevice"> | Date | string
    lastActiveAt?: DateTimeFilter<"UserDevice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDeviceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserDeviceWhereInput | UserDeviceWhereInput[]
    OR?: UserDeviceWhereInput[]
    NOT?: UserDeviceWhereInput | UserDeviceWhereInput[]
    userId?: IntFilter<"UserDevice"> | number
    fcmToken?: StringFilter<"UserDevice"> | string
    deviceInfo?: StringNullableFilter<"UserDevice"> | string | null
    createdAt?: DateTimeFilter<"UserDevice"> | Date | string
    lastActiveAt?: DateTimeFilter<"UserDevice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
    _count?: UserDeviceCountOrderByAggregateInput
    _avg?: UserDeviceAvgOrderByAggregateInput
    _max?: UserDeviceMaxOrderByAggregateInput
    _min?: UserDeviceMinOrderByAggregateInput
    _sum?: UserDeviceSumOrderByAggregateInput
  }

  export type UserDeviceScalarWhereWithAggregatesInput = {
    AND?: UserDeviceScalarWhereWithAggregatesInput | UserDeviceScalarWhereWithAggregatesInput[]
    OR?: UserDeviceScalarWhereWithAggregatesInput[]
    NOT?: UserDeviceScalarWhereWithAggregatesInput | UserDeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserDevice"> | number
    userId?: IntWithAggregatesFilter<"UserDevice"> | number
    fcmToken?: StringWithAggregatesFilter<"UserDevice"> | string
    deviceInfo?: StringNullableWithAggregatesFilter<"UserDevice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserDevice"> | Date | string
    lastActiveAt?: DateTimeWithAggregatesFilter<"UserDevice"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    metadata?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    channel?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    metadata?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    channel?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    channel?: EnumNotificationChannelWithAggregatesFilter<"Notification"> | $Enums.NotificationChannel
    metadata?: JsonNullableWithAggregatesFilter<"Notification">
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type BulletinWhereInput = {
    AND?: BulletinWhereInput | BulletinWhereInput[]
    OR?: BulletinWhereInput[]
    NOT?: BulletinWhereInput | BulletinWhereInput[]
    id?: IntFilter<"Bulletin"> | number
    createdByUserId?: IntFilter<"Bulletin"> | number
    title?: StringNullableFilter<"Bulletin"> | string | null
    message?: StringFilter<"Bulletin"> | string
    targetRoles?: EnumTargetFilter<"Bulletin"> | $Enums.Target
    createdAt?: DateTimeFilter<"Bulletin"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BulletinOrderByWithRelationInput = {
    id?: SortOrder
    createdByUserId?: SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrder
    targetRoles?: SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type BulletinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BulletinWhereInput | BulletinWhereInput[]
    OR?: BulletinWhereInput[]
    NOT?: BulletinWhereInput | BulletinWhereInput[]
    createdByUserId?: IntFilter<"Bulletin"> | number
    title?: StringNullableFilter<"Bulletin"> | string | null
    message?: StringFilter<"Bulletin"> | string
    targetRoles?: EnumTargetFilter<"Bulletin"> | $Enums.Target
    createdAt?: DateTimeFilter<"Bulletin"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BulletinOrderByWithAggregationInput = {
    id?: SortOrder
    createdByUserId?: SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrder
    targetRoles?: SortOrder
    createdAt?: SortOrder
    _count?: BulletinCountOrderByAggregateInput
    _avg?: BulletinAvgOrderByAggregateInput
    _max?: BulletinMaxOrderByAggregateInput
    _min?: BulletinMinOrderByAggregateInput
    _sum?: BulletinSumOrderByAggregateInput
  }

  export type BulletinScalarWhereWithAggregatesInput = {
    AND?: BulletinScalarWhereWithAggregatesInput | BulletinScalarWhereWithAggregatesInput[]
    OR?: BulletinScalarWhereWithAggregatesInput[]
    NOT?: BulletinScalarWhereWithAggregatesInput | BulletinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bulletin"> | number
    createdByUserId?: IntWithAggregatesFilter<"Bulletin"> | number
    title?: StringNullableWithAggregatesFilter<"Bulletin"> | string | null
    message?: StringWithAggregatesFilter<"Bulletin"> | string
    targetRoles?: EnumTargetWithAggregatesFilter<"Bulletin"> | $Enums.Target
    createdAt?: DateTimeWithAggregatesFilter<"Bulletin"> | Date | string
  }

  export type SystemLogWhereInput = {
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    id?: IntFilter<"SystemLog"> | number
    userId?: IntNullableFilter<"SystemLog"> | number | null
    targetTable?: StringFilter<"SystemLog"> | string
    targetId?: IntFilter<"SystemLog"> | number
    action?: StringFilter<"SystemLog"> | string
    description?: StringNullableFilter<"SystemLog"> | string | null
    type?: EnumLogTypeFilter<"SystemLog"> | $Enums.LogType
    originIp?: StringNullableFilter<"SystemLog"> | string | null
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SystemLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    targetTable?: SortOrder
    targetId?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    originIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SystemLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    userId?: IntNullableFilter<"SystemLog"> | number | null
    targetTable?: StringFilter<"SystemLog"> | string
    targetId?: IntFilter<"SystemLog"> | number
    action?: StringFilter<"SystemLog"> | string
    description?: StringNullableFilter<"SystemLog"> | string | null
    type?: EnumLogTypeFilter<"SystemLog"> | $Enums.LogType
    originIp?: StringNullableFilter<"SystemLog"> | string | null
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SystemLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    targetTable?: SortOrder
    targetId?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    originIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SystemLogCountOrderByAggregateInput
    _avg?: SystemLogAvgOrderByAggregateInput
    _max?: SystemLogMaxOrderByAggregateInput
    _min?: SystemLogMinOrderByAggregateInput
    _sum?: SystemLogSumOrderByAggregateInput
  }

  export type SystemLogScalarWhereWithAggregatesInput = {
    AND?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    OR?: SystemLogScalarWhereWithAggregatesInput[]
    NOT?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemLog"> | number
    userId?: IntNullableWithAggregatesFilter<"SystemLog"> | number | null
    targetTable?: StringWithAggregatesFilter<"SystemLog"> | string
    targetId?: IntWithAggregatesFilter<"SystemLog"> | number
    action?: StringWithAggregatesFilter<"SystemLog"> | string
    description?: StringNullableWithAggregatesFilter<"SystemLog"> | string | null
    type?: EnumLogTypeWithAggregatesFilter<"SystemLog"> | $Enums.LogType
    originIp?: StringNullableWithAggregatesFilter<"SystemLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemLog"> | Date | string
  }

  export type UserCreateInput = {
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    bulletins?: BulletinCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerUncheckedCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianUncheckedCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    bulletins?: BulletinUncheckedCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUncheckedUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUncheckedUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUncheckedUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
  }

  export type UserUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TokenCreateInput = {
    jwt?: string | null
    refreshJwt?: string | null
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    userId: number
    jwt?: string | null
    refreshJwt?: string | null
  }

  export type TokenUpdateInput = {
    jwt?: NullableStringFieldUpdateOperationsInput | string | null
    refreshJwt?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jwt?: NullableStringFieldUpdateOperationsInput | string | null
    refreshJwt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenCreateManyInput = {
    id?: number
    userId: number
    jwt?: string | null
    refreshJwt?: string | null
  }

  export type TokenUpdateManyMutationInput = {
    jwt?: NullableStringFieldUpdateOperationsInput | string | null
    refreshJwt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jwt?: NullableStringFieldUpdateOperationsInput | string | null
    refreshJwt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetOwnerCreateInput = {
    fullAddress: string
    user: UserCreateNestedOneWithoutPetOwnerInput
    animals?: AnimalCreateNestedManyWithoutPetOwnerInput
    appointments?: AppointmentCreateNestedManyWithoutPetOwnerInput
    commitmentTerms?: CommitmentTermCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerUncheckedCreateInput = {
    id?: number
    userId: number
    fullAddress: string
    animals?: AnimalUncheckedCreateNestedManyWithoutPetOwnerInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPetOwnerInput
    commitmentTerms?: CommitmentTermUncheckedCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerUpdateInput = {
    fullAddress?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPetOwnerNestedInput
    animals?: AnimalUpdateManyWithoutPetOwnerNestedInput
    appointments?: AppointmentUpdateManyWithoutPetOwnerNestedInput
    commitmentTerms?: CommitmentTermUpdateManyWithoutPetOwnerNestedInput
  }

  export type PetOwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullAddress?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutPetOwnerNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPetOwnerNestedInput
    commitmentTerms?: CommitmentTermUncheckedUpdateManyWithoutPetOwnerNestedInput
  }

  export type PetOwnerCreateManyInput = {
    id?: number
    userId: number
    fullAddress: string
  }

  export type PetOwnerUpdateManyMutationInput = {
    fullAddress?: StringFieldUpdateOperationsInput | string
  }

  export type PetOwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullAddress?: StringFieldUpdateOperationsInput | string
  }

  export type CommitmentTermCreateInput = {
    signatureDate?: Date | string
    documentUrl?: string | null
    petOwner: PetOwnerCreateNestedOneWithoutCommitmentTermsInput
  }

  export type CommitmentTermUncheckedCreateInput = {
    id?: number
    petOwnerId: number
    signatureDate?: Date | string
    documentUrl?: string | null
  }

  export type CommitmentTermUpdateInput = {
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    petOwner?: PetOwnerUpdateOneRequiredWithoutCommitmentTermsNestedInput
  }

  export type CommitmentTermUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommitmentTermCreateManyInput = {
    id?: number
    petOwnerId: number
    signatureDate?: Date | string
    documentUrl?: string | null
  }

  export type CommitmentTermUpdateManyMutationInput = {
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommitmentTermUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeterinarianCreateInput = {
    crmv?: string | null
    active?: boolean
    user: UserCreateNestedOneWithoutVeterinarianInput
    clinicalRecords?: ClinicalRecordCreateNestedManyWithoutVeterinarianInput
  }

  export type VeterinarianUncheckedCreateInput = {
    id?: number
    userId: number
    crmv?: string | null
    active?: boolean
    clinicalRecords?: ClinicalRecordUncheckedCreateNestedManyWithoutVeterinarianInput
  }

  export type VeterinarianUpdateInput = {
    crmv?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVeterinarianNestedInput
    clinicalRecords?: ClinicalRecordUpdateManyWithoutVeterinarianNestedInput
  }

  export type VeterinarianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    crmv?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    clinicalRecords?: ClinicalRecordUncheckedUpdateManyWithoutVeterinarianNestedInput
  }

  export type VeterinarianCreateManyInput = {
    id?: number
    userId: number
    crmv?: string | null
    active?: boolean
  }

  export type VeterinarianUpdateManyMutationInput = {
    crmv?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VeterinarianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    crmv?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnimalCreateInput = {
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
    petOwner: PetOwnerCreateNestedOneWithoutAnimalsInput
    appointments?: AppointmentCreateNestedManyWithoutAnimalInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    id?: number
    petOwnerId: number
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutAnimalInput
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    petOwner?: PetOwnerUpdateOneRequiredWithoutAnimalsNestedInput
    appointments?: AppointmentUpdateManyWithoutAnimalNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutAnimalNestedInput
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalCreateManyInput = {
    id?: number
    petOwnerId: number
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
  }

  export type AnimalUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnimalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateInput = {
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    animal: AnimalCreateNestedOneWithoutAppointmentsInput
    petOwner: PetOwnerCreateNestedOneWithoutAppointmentsInput
    clinicalRecords?: ClinicalRecordCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    animalId: number
    petOwnerId: number
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    clinicalRecords?: ClinicalRecordUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    animal?: AnimalUpdateOneRequiredWithoutAppointmentsNestedInput
    petOwner?: PetOwnerUpdateOneRequiredWithoutAppointmentsNestedInput
    clinicalRecords?: ClinicalRecordUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clinicalRecords?: ClinicalRecordUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: number
    animalId: number
    petOwnerId: number
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
  }

  export type AppointmentUpdateManyMutationInput = {
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordCreateInput = {
    microchipNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    animal: AnimalCreateNestedOneWithoutMedicalRecordInput
    clinicalRecords?: ClinicalRecordCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateInput = {
    id?: number
    animalId: number
    microchipNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinicalRecords?: ClinicalRecordUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUpdateInput = {
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalUpdateOneRequiredWithoutMedicalRecordNestedInput
    clinicalRecords?: ClinicalRecordUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinicalRecords?: ClinicalRecordUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordCreateManyInput = {
    id?: number
    animalId: number
    microchipNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalRecordUpdateManyMutationInput = {
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicalRecordCreateInput = {
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
    medicalRecord: MedicalRecordCreateNestedOneWithoutClinicalRecordsInput
    appointment?: AppointmentCreateNestedOneWithoutClinicalRecordsInput
    veterinarian: VeterinarianCreateNestedOneWithoutClinicalRecordsInput
  }

  export type ClinicalRecordUncheckedCreateInput = {
    id?: number
    medicalRecordId: number
    appointmentId?: number | null
    veterinarianId: number
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
  }

  export type ClinicalRecordUpdateInput = {
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    medicalRecord?: MedicalRecordUpdateOneRequiredWithoutClinicalRecordsNestedInput
    appointment?: AppointmentUpdateOneWithoutClinicalRecordsNestedInput
    veterinarian?: VeterinarianUpdateOneRequiredWithoutClinicalRecordsNestedInput
  }

  export type ClinicalRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalRecordId?: IntFieldUpdateOperationsInput | number
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    veterinarianId?: IntFieldUpdateOperationsInput | number
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClinicalRecordCreateManyInput = {
    id?: number
    medicalRecordId: number
    appointmentId?: number | null
    veterinarianId: number
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
  }

  export type ClinicalRecordUpdateManyMutationInput = {
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClinicalRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalRecordId?: IntFieldUpdateOperationsInput | number
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    veterinarianId?: IntFieldUpdateOperationsInput | number
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDeviceCreateInput = {
    fcmToken: string
    deviceInfo?: string | null
    createdAt?: Date | string
    lastActiveAt?: Date | string
    user: UserCreateNestedOneWithoutUserDevicesInput
  }

  export type UserDeviceUncheckedCreateInput = {
    id?: number
    userId: number
    fcmToken: string
    deviceInfo?: string | null
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type UserDeviceUpdateInput = {
    fcmToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserDevicesNestedInput
  }

  export type UserDeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fcmToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDeviceCreateManyInput = {
    id?: number
    userId: number
    fcmToken: string
    deviceInfo?: string | null
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type UserDeviceUpdateManyMutationInput = {
    fcmToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fcmToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    read?: boolean
    channel?: $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    message: string
    read?: boolean
    channel?: $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    title: string
    message: string
    read?: boolean
    channel?: $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinCreateInput = {
    title?: string | null
    message: string
    targetRoles?: $Enums.Target
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutBulletinsInput
  }

  export type BulletinUncheckedCreateInput = {
    id?: number
    createdByUserId: number
    title?: string | null
    message: string
    targetRoles?: $Enums.Target
    createdAt?: Date | string
  }

  export type BulletinUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    targetRoles?: EnumTargetFieldUpdateOperationsInput | $Enums.Target
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutBulletinsNestedInput
  }

  export type BulletinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    targetRoles?: EnumTargetFieldUpdateOperationsInput | $Enums.Target
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinCreateManyInput = {
    id?: number
    createdByUserId: number
    title?: string | null
    message: string
    targetRoles?: $Enums.Target
    createdAt?: Date | string
  }

  export type BulletinUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    targetRoles?: EnumTargetFieldUpdateOperationsInput | $Enums.Target
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdByUserId?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    targetRoles?: EnumTargetFieldUpdateOperationsInput | $Enums.Target
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogCreateInput = {
    targetTable: string
    targetId: number
    action: string
    description?: string | null
    type: $Enums.LogType
    originIp?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutSystemLogsInput
  }

  export type SystemLogUncheckedCreateInput = {
    id?: number
    userId?: number | null
    targetTable: string
    targetId: number
    action: string
    description?: string | null
    type: $Enums.LogType
    originIp?: string | null
    createdAt?: Date | string
  }

  export type SystemLogUpdateInput = {
    targetTable?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    originIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSystemLogsNestedInput
  }

  export type SystemLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    targetTable?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    originIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogCreateManyInput = {
    id?: number
    userId?: number | null
    targetTable: string
    targetId: number
    action: string
    description?: string | null
    type: $Enums.LogType
    originIp?: string | null
    createdAt?: Date | string
  }

  export type SystemLogUpdateManyMutationInput = {
    targetTable?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    originIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    targetTable?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    originIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TokenNullableScalarRelationFilter = {
    is?: TokenWhereInput | null
    isNot?: TokenWhereInput | null
  }

  export type PetOwnerNullableScalarRelationFilter = {
    is?: PetOwnerWhereInput | null
    isNot?: PetOwnerWhereInput | null
  }

  export type VeterinarianNullableScalarRelationFilter = {
    is?: VeterinarianWhereInput | null
    isNot?: VeterinarianWhereInput | null
  }

  export type UserDeviceListRelationFilter = {
    every?: UserDeviceWhereInput
    some?: UserDeviceWhereInput
    none?: UserDeviceWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type BulletinListRelationFilter = {
    every?: BulletinWhereInput
    some?: BulletinWhereInput
    none?: BulletinWhereInput
  }

  export type SystemLogListRelationFilter = {
    every?: SystemLogWhereInput
    some?: SystemLogWhereInput
    none?: SystemLogWhereInput
  }

  export type UserDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BulletinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    completeName?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recoveryMode?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    completeName?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recoveryMode?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    completeName?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recoveryMode?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jwt?: SortOrder
    refreshJwt?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jwt?: SortOrder
    refreshJwt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jwt?: SortOrder
    refreshJwt?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AnimalListRelationFilter = {
    every?: AnimalWhereInput
    some?: AnimalWhereInput
    none?: AnimalWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type CommitmentTermListRelationFilter = {
    every?: CommitmentTermWhereInput
    some?: CommitmentTermWhereInput
    none?: CommitmentTermWhereInput
  }

  export type AnimalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommitmentTermOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullAddress?: SortOrder
  }

  export type PetOwnerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PetOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullAddress?: SortOrder
  }

  export type PetOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullAddress?: SortOrder
  }

  export type PetOwnerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PetOwnerScalarRelationFilter = {
    is?: PetOwnerWhereInput
    isNot?: PetOwnerWhereInput
  }

  export type CommitmentTermCountOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    signatureDate?: SortOrder
    documentUrl?: SortOrder
  }

  export type CommitmentTermAvgOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
  }

  export type CommitmentTermMaxOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    signatureDate?: SortOrder
    documentUrl?: SortOrder
  }

  export type CommitmentTermMinOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    signatureDate?: SortOrder
    documentUrl?: SortOrder
  }

  export type CommitmentTermSumOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
  }

  export type ClinicalRecordListRelationFilter = {
    every?: ClinicalRecordWhereInput
    some?: ClinicalRecordWhereInput
    none?: ClinicalRecordWhereInput
  }

  export type ClinicalRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeterinarianCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    crmv?: SortOrder
    active?: SortOrder
  }

  export type VeterinarianAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VeterinarianMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    crmv?: SortOrder
    active?: SortOrder
  }

  export type VeterinarianMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    crmv?: SortOrder
    active?: SortOrder
  }

  export type VeterinarianSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesFilter<$PrismaModel> | $Enums.Species
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type MedicalRecordNullableScalarRelationFilter = {
    is?: MedicalRecordWhereInput | null
    isNot?: MedicalRecordWhereInput | null
  }

  export type AnimalCountOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    name?: SortOrder
    species?: SortOrder
    gender?: SortOrder
    estimatedAge?: SortOrder
    sizeWeight?: SortOrder
    breed?: SortOrder
    microchipNumber?: SortOrder
  }

  export type AnimalAvgOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    name?: SortOrder
    species?: SortOrder
    gender?: SortOrder
    estimatedAge?: SortOrder
    sizeWeight?: SortOrder
    breed?: SortOrder
    microchipNumber?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
    name?: SortOrder
    species?: SortOrder
    gender?: SortOrder
    estimatedAge?: SortOrder
    sizeWeight?: SortOrder
    breed?: SortOrder
    microchipNumber?: SortOrder
  }

  export type AnimalSumOrderByAggregateInput = {
    id?: SortOrder
    petOwnerId?: SortOrder
  }

  export type EnumSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.Species
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeciesFilter<$PrismaModel>
    _max?: NestedEnumSpeciesFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumServiceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceTypeNullableFilter<$PrismaModel> | $Enums.ServiceType | null
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type AnimalScalarRelationFilter = {
    is?: AnimalWhereInput
    isNot?: AnimalWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    petOwnerId?: SortOrder
    serviceType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    petOwnerId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    petOwnerId?: SortOrder
    serviceType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    petOwnerId?: SortOrder
    serviceType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    petOwnerId?: SortOrder
  }

  export type EnumServiceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeNullableFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type MedicalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    microchipNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
  }

  export type MedicalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    microchipNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
    microchipNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalRecordSumOrderByAggregateInput = {
    id?: SortOrder
    animalId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumClinicalRecordTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClinicalRecordType | EnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClinicalRecordType[] | ListEnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClinicalRecordType[] | ListEnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClinicalRecordTypeFilter<$PrismaModel> | $Enums.ClinicalRecordType
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumSurgeryTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SurgeryType | EnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SurgeryType[] | ListEnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SurgeryType[] | ListEnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSurgeryTypeNullableFilter<$PrismaModel> | $Enums.SurgeryType | null
  }

  export type MedicalRecordScalarRelationFilter = {
    is?: MedicalRecordWhereInput
    isNot?: MedicalRecordWhereInput
  }

  export type AppointmentNullableScalarRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type VeterinarianScalarRelationFilter = {
    is?: VeterinarianWhereInput
    isNot?: VeterinarianWhereInput
  }

  export type ClinicalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    medicalRecordId?: SortOrder
    appointmentId?: SortOrder
    veterinarianId?: SortOrder
    type?: SortOrder
    treatmentDate?: SortOrder
    fitForSurgery?: SortOrder
    surgeryType?: SortOrder
    observations?: SortOrder
    instructions?: SortOrder
  }

  export type ClinicalRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    medicalRecordId?: SortOrder
    appointmentId?: SortOrder
    veterinarianId?: SortOrder
  }

  export type ClinicalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    medicalRecordId?: SortOrder
    appointmentId?: SortOrder
    veterinarianId?: SortOrder
    type?: SortOrder
    treatmentDate?: SortOrder
    fitForSurgery?: SortOrder
    surgeryType?: SortOrder
    observations?: SortOrder
    instructions?: SortOrder
  }

  export type ClinicalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    medicalRecordId?: SortOrder
    appointmentId?: SortOrder
    veterinarianId?: SortOrder
    type?: SortOrder
    treatmentDate?: SortOrder
    fitForSurgery?: SortOrder
    surgeryType?: SortOrder
    observations?: SortOrder
    instructions?: SortOrder
  }

  export type ClinicalRecordSumOrderByAggregateInput = {
    id?: SortOrder
    medicalRecordId?: SortOrder
    appointmentId?: SortOrder
    veterinarianId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumClinicalRecordTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClinicalRecordType | EnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClinicalRecordType[] | ListEnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClinicalRecordType[] | ListEnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClinicalRecordTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClinicalRecordType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClinicalRecordTypeFilter<$PrismaModel>
    _max?: NestedEnumClinicalRecordTypeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumSurgeryTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurgeryType | EnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SurgeryType[] | ListEnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SurgeryType[] | ListEnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSurgeryTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SurgeryType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSurgeryTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSurgeryTypeNullableFilter<$PrismaModel>
  }

  export type UserDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrder
    deviceInfo?: SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
  }

  export type UserDeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrder
    deviceInfo?: SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
  }

  export type UserDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fcmToken?: SortOrder
    deviceInfo?: SortOrder
    createdAt?: SortOrder
    lastActiveAt?: SortOrder
  }

  export type UserDeviceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    channel?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    channel?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    channel?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.Target | EnumTargetFieldRefInput<$PrismaModel>
    in?: $Enums.Target[] | ListEnumTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.Target[] | ListEnumTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumTargetFilter<$PrismaModel> | $Enums.Target
  }

  export type BulletinCountOrderByAggregateInput = {
    id?: SortOrder
    createdByUserId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    targetRoles?: SortOrder
    createdAt?: SortOrder
  }

  export type BulletinAvgOrderByAggregateInput = {
    id?: SortOrder
    createdByUserId?: SortOrder
  }

  export type BulletinMaxOrderByAggregateInput = {
    id?: SortOrder
    createdByUserId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    targetRoles?: SortOrder
    createdAt?: SortOrder
  }

  export type BulletinMinOrderByAggregateInput = {
    id?: SortOrder
    createdByUserId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    targetRoles?: SortOrder
    createdAt?: SortOrder
  }

  export type BulletinSumOrderByAggregateInput = {
    id?: SortOrder
    createdByUserId?: SortOrder
  }

  export type EnumTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Target | EnumTargetFieldRefInput<$PrismaModel>
    in?: $Enums.Target[] | ListEnumTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.Target[] | ListEnumTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumTargetWithAggregatesFilter<$PrismaModel> | $Enums.Target
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTargetFilter<$PrismaModel>
    _max?: NestedEnumTargetFilter<$PrismaModel>
  }

  export type EnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SystemLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTable?: SortOrder
    targetId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    type?: SortOrder
    originIp?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetId?: SortOrder
  }

  export type SystemLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTable?: SortOrder
    targetId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    type?: SortOrder
    originIp?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetTable?: SortOrder
    targetId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    type?: SortOrder
    originIp?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    targetId?: SortOrder
  }

  export type EnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type TokenCreateNestedOneWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    connect?: TokenWhereUniqueInput
  }

  export type PetOwnerCreateNestedOneWithoutUserInput = {
    create?: XOR<PetOwnerCreateWithoutUserInput, PetOwnerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutUserInput
    connect?: PetOwnerWhereUniqueInput
  }

  export type VeterinarianCreateNestedOneWithoutUserInput = {
    create?: XOR<VeterinarianCreateWithoutUserInput, VeterinarianUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinarianCreateOrConnectWithoutUserInput
    connect?: VeterinarianWhereUniqueInput
  }

  export type UserDeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BulletinCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<BulletinCreateWithoutCreatedByInput, BulletinUncheckedCreateWithoutCreatedByInput> | BulletinCreateWithoutCreatedByInput[] | BulletinUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BulletinCreateOrConnectWithoutCreatedByInput | BulletinCreateOrConnectWithoutCreatedByInput[]
    createMany?: BulletinCreateManyCreatedByInputEnvelope
    connect?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
  }

  export type SystemLogCreateNestedManyWithoutUserInput = {
    create?: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput> | SystemLogCreateWithoutUserInput[] | SystemLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutUserInput | SystemLogCreateOrConnectWithoutUserInput[]
    createMany?: SystemLogCreateManyUserInputEnvelope
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    connect?: TokenWhereUniqueInput
  }

  export type PetOwnerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PetOwnerCreateWithoutUserInput, PetOwnerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutUserInput
    connect?: PetOwnerWhereUniqueInput
  }

  export type VeterinarianUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VeterinarianCreateWithoutUserInput, VeterinarianUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinarianCreateOrConnectWithoutUserInput
    connect?: VeterinarianWhereUniqueInput
  }

  export type UserDeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BulletinUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<BulletinCreateWithoutCreatedByInput, BulletinUncheckedCreateWithoutCreatedByInput> | BulletinCreateWithoutCreatedByInput[] | BulletinUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BulletinCreateOrConnectWithoutCreatedByInput | BulletinCreateOrConnectWithoutCreatedByInput[]
    createMany?: BulletinCreateManyCreatedByInputEnvelope
    connect?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
  }

  export type SystemLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput> | SystemLogCreateWithoutUserInput[] | SystemLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutUserInput | SystemLogCreateOrConnectWithoutUserInput[]
    createMany?: SystemLogCreateManyUserInputEnvelope
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    upsert?: TokenUpsertWithoutUserInput
    disconnect?: TokenWhereInput | boolean
    delete?: TokenWhereInput | boolean
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutUserInput, TokenUpdateWithoutUserInput>, TokenUncheckedUpdateWithoutUserInput>
  }

  export type PetOwnerUpdateOneWithoutUserNestedInput = {
    create?: XOR<PetOwnerCreateWithoutUserInput, PetOwnerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutUserInput
    upsert?: PetOwnerUpsertWithoutUserInput
    disconnect?: PetOwnerWhereInput | boolean
    delete?: PetOwnerWhereInput | boolean
    connect?: PetOwnerWhereUniqueInput
    update?: XOR<XOR<PetOwnerUpdateToOneWithWhereWithoutUserInput, PetOwnerUpdateWithoutUserInput>, PetOwnerUncheckedUpdateWithoutUserInput>
  }

  export type VeterinarianUpdateOneWithoutUserNestedInput = {
    create?: XOR<VeterinarianCreateWithoutUserInput, VeterinarianUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinarianCreateOrConnectWithoutUserInput
    upsert?: VeterinarianUpsertWithoutUserInput
    disconnect?: VeterinarianWhereInput | boolean
    delete?: VeterinarianWhereInput | boolean
    connect?: VeterinarianWhereUniqueInput
    update?: XOR<XOR<VeterinarianUpdateToOneWithWhereWithoutUserInput, VeterinarianUpdateWithoutUserInput>, VeterinarianUncheckedUpdateWithoutUserInput>
  }

  export type UserDeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutUserInput | UserDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutUserInput | UserDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutUserInput | UserDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BulletinUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<BulletinCreateWithoutCreatedByInput, BulletinUncheckedCreateWithoutCreatedByInput> | BulletinCreateWithoutCreatedByInput[] | BulletinUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BulletinCreateOrConnectWithoutCreatedByInput | BulletinCreateOrConnectWithoutCreatedByInput[]
    upsert?: BulletinUpsertWithWhereUniqueWithoutCreatedByInput | BulletinUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BulletinCreateManyCreatedByInputEnvelope
    set?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
    disconnect?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
    delete?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
    connect?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
    update?: BulletinUpdateWithWhereUniqueWithoutCreatedByInput | BulletinUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: BulletinUpdateManyWithWhereWithoutCreatedByInput | BulletinUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BulletinScalarWhereInput | BulletinScalarWhereInput[]
  }

  export type SystemLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput> | SystemLogCreateWithoutUserInput[] | SystemLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutUserInput | SystemLogCreateOrConnectWithoutUserInput[]
    upsert?: SystemLogUpsertWithWhereUniqueWithoutUserInput | SystemLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SystemLogCreateManyUserInputEnvelope
    set?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    disconnect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    delete?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    update?: SystemLogUpdateWithWhereUniqueWithoutUserInput | SystemLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SystemLogUpdateManyWithWhereWithoutUserInput | SystemLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    upsert?: TokenUpsertWithoutUserInput
    disconnect?: TokenWhereInput | boolean
    delete?: TokenWhereInput | boolean
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutUserInput, TokenUpdateWithoutUserInput>, TokenUncheckedUpdateWithoutUserInput>
  }

  export type PetOwnerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PetOwnerCreateWithoutUserInput, PetOwnerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutUserInput
    upsert?: PetOwnerUpsertWithoutUserInput
    disconnect?: PetOwnerWhereInput | boolean
    delete?: PetOwnerWhereInput | boolean
    connect?: PetOwnerWhereUniqueInput
    update?: XOR<XOR<PetOwnerUpdateToOneWithWhereWithoutUserInput, PetOwnerUpdateWithoutUserInput>, PetOwnerUncheckedUpdateWithoutUserInput>
  }

  export type VeterinarianUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VeterinarianCreateWithoutUserInput, VeterinarianUncheckedCreateWithoutUserInput>
    connectOrCreate?: VeterinarianCreateOrConnectWithoutUserInput
    upsert?: VeterinarianUpsertWithoutUserInput
    disconnect?: VeterinarianWhereInput | boolean
    delete?: VeterinarianWhereInput | boolean
    connect?: VeterinarianWhereUniqueInput
    update?: XOR<XOR<VeterinarianUpdateToOneWithWhereWithoutUserInput, VeterinarianUpdateWithoutUserInput>, VeterinarianUncheckedUpdateWithoutUserInput>
  }

  export type UserDeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutUserInput | UserDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutUserInput | UserDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutUserInput | UserDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BulletinUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<BulletinCreateWithoutCreatedByInput, BulletinUncheckedCreateWithoutCreatedByInput> | BulletinCreateWithoutCreatedByInput[] | BulletinUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BulletinCreateOrConnectWithoutCreatedByInput | BulletinCreateOrConnectWithoutCreatedByInput[]
    upsert?: BulletinUpsertWithWhereUniqueWithoutCreatedByInput | BulletinUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BulletinCreateManyCreatedByInputEnvelope
    set?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
    disconnect?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
    delete?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
    connect?: BulletinWhereUniqueInput | BulletinWhereUniqueInput[]
    update?: BulletinUpdateWithWhereUniqueWithoutCreatedByInput | BulletinUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: BulletinUpdateManyWithWhereWithoutCreatedByInput | BulletinUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BulletinScalarWhereInput | BulletinScalarWhereInput[]
  }

  export type SystemLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput> | SystemLogCreateWithoutUserInput[] | SystemLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutUserInput | SystemLogCreateOrConnectWithoutUserInput[]
    upsert?: SystemLogUpsertWithWhereUniqueWithoutUserInput | SystemLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SystemLogCreateManyUserInputEnvelope
    set?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    disconnect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    delete?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    update?: SystemLogUpdateWithWhereUniqueWithoutUserInput | SystemLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SystemLogUpdateManyWithWhereWithoutUserInput | SystemLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenInput, UserUpdateWithoutTokenInput>, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserCreateNestedOneWithoutPetOwnerInput = {
    create?: XOR<UserCreateWithoutPetOwnerInput, UserUncheckedCreateWithoutPetOwnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetOwnerInput
    connect?: UserWhereUniqueInput
  }

  export type AnimalCreateNestedManyWithoutPetOwnerInput = {
    create?: XOR<AnimalCreateWithoutPetOwnerInput, AnimalUncheckedCreateWithoutPetOwnerInput> | AnimalCreateWithoutPetOwnerInput[] | AnimalUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutPetOwnerInput | AnimalCreateOrConnectWithoutPetOwnerInput[]
    createMany?: AnimalCreateManyPetOwnerInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPetOwnerInput = {
    create?: XOR<AppointmentCreateWithoutPetOwnerInput, AppointmentUncheckedCreateWithoutPetOwnerInput> | AppointmentCreateWithoutPetOwnerInput[] | AppointmentUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPetOwnerInput | AppointmentCreateOrConnectWithoutPetOwnerInput[]
    createMany?: AppointmentCreateManyPetOwnerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CommitmentTermCreateNestedManyWithoutPetOwnerInput = {
    create?: XOR<CommitmentTermCreateWithoutPetOwnerInput, CommitmentTermUncheckedCreateWithoutPetOwnerInput> | CommitmentTermCreateWithoutPetOwnerInput[] | CommitmentTermUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: CommitmentTermCreateOrConnectWithoutPetOwnerInput | CommitmentTermCreateOrConnectWithoutPetOwnerInput[]
    createMany?: CommitmentTermCreateManyPetOwnerInputEnvelope
    connect?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
  }

  export type AnimalUncheckedCreateNestedManyWithoutPetOwnerInput = {
    create?: XOR<AnimalCreateWithoutPetOwnerInput, AnimalUncheckedCreateWithoutPetOwnerInput> | AnimalCreateWithoutPetOwnerInput[] | AnimalUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutPetOwnerInput | AnimalCreateOrConnectWithoutPetOwnerInput[]
    createMany?: AnimalCreateManyPetOwnerInputEnvelope
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPetOwnerInput = {
    create?: XOR<AppointmentCreateWithoutPetOwnerInput, AppointmentUncheckedCreateWithoutPetOwnerInput> | AppointmentCreateWithoutPetOwnerInput[] | AppointmentUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPetOwnerInput | AppointmentCreateOrConnectWithoutPetOwnerInput[]
    createMany?: AppointmentCreateManyPetOwnerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CommitmentTermUncheckedCreateNestedManyWithoutPetOwnerInput = {
    create?: XOR<CommitmentTermCreateWithoutPetOwnerInput, CommitmentTermUncheckedCreateWithoutPetOwnerInput> | CommitmentTermCreateWithoutPetOwnerInput[] | CommitmentTermUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: CommitmentTermCreateOrConnectWithoutPetOwnerInput | CommitmentTermCreateOrConnectWithoutPetOwnerInput[]
    createMany?: CommitmentTermCreateManyPetOwnerInputEnvelope
    connect?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPetOwnerNestedInput = {
    create?: XOR<UserCreateWithoutPetOwnerInput, UserUncheckedCreateWithoutPetOwnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetOwnerInput
    upsert?: UserUpsertWithoutPetOwnerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetOwnerInput, UserUpdateWithoutPetOwnerInput>, UserUncheckedUpdateWithoutPetOwnerInput>
  }

  export type AnimalUpdateManyWithoutPetOwnerNestedInput = {
    create?: XOR<AnimalCreateWithoutPetOwnerInput, AnimalUncheckedCreateWithoutPetOwnerInput> | AnimalCreateWithoutPetOwnerInput[] | AnimalUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutPetOwnerInput | AnimalCreateOrConnectWithoutPetOwnerInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutPetOwnerInput | AnimalUpsertWithWhereUniqueWithoutPetOwnerInput[]
    createMany?: AnimalCreateManyPetOwnerInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutPetOwnerInput | AnimalUpdateWithWhereUniqueWithoutPetOwnerInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutPetOwnerInput | AnimalUpdateManyWithWhereWithoutPetOwnerInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPetOwnerNestedInput = {
    create?: XOR<AppointmentCreateWithoutPetOwnerInput, AppointmentUncheckedCreateWithoutPetOwnerInput> | AppointmentCreateWithoutPetOwnerInput[] | AppointmentUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPetOwnerInput | AppointmentCreateOrConnectWithoutPetOwnerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPetOwnerInput | AppointmentUpsertWithWhereUniqueWithoutPetOwnerInput[]
    createMany?: AppointmentCreateManyPetOwnerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPetOwnerInput | AppointmentUpdateWithWhereUniqueWithoutPetOwnerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPetOwnerInput | AppointmentUpdateManyWithWhereWithoutPetOwnerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CommitmentTermUpdateManyWithoutPetOwnerNestedInput = {
    create?: XOR<CommitmentTermCreateWithoutPetOwnerInput, CommitmentTermUncheckedCreateWithoutPetOwnerInput> | CommitmentTermCreateWithoutPetOwnerInput[] | CommitmentTermUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: CommitmentTermCreateOrConnectWithoutPetOwnerInput | CommitmentTermCreateOrConnectWithoutPetOwnerInput[]
    upsert?: CommitmentTermUpsertWithWhereUniqueWithoutPetOwnerInput | CommitmentTermUpsertWithWhereUniqueWithoutPetOwnerInput[]
    createMany?: CommitmentTermCreateManyPetOwnerInputEnvelope
    set?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
    disconnect?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
    delete?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
    connect?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
    update?: CommitmentTermUpdateWithWhereUniqueWithoutPetOwnerInput | CommitmentTermUpdateWithWhereUniqueWithoutPetOwnerInput[]
    updateMany?: CommitmentTermUpdateManyWithWhereWithoutPetOwnerInput | CommitmentTermUpdateManyWithWhereWithoutPetOwnerInput[]
    deleteMany?: CommitmentTermScalarWhereInput | CommitmentTermScalarWhereInput[]
  }

  export type AnimalUncheckedUpdateManyWithoutPetOwnerNestedInput = {
    create?: XOR<AnimalCreateWithoutPetOwnerInput, AnimalUncheckedCreateWithoutPetOwnerInput> | AnimalCreateWithoutPetOwnerInput[] | AnimalUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: AnimalCreateOrConnectWithoutPetOwnerInput | AnimalCreateOrConnectWithoutPetOwnerInput[]
    upsert?: AnimalUpsertWithWhereUniqueWithoutPetOwnerInput | AnimalUpsertWithWhereUniqueWithoutPetOwnerInput[]
    createMany?: AnimalCreateManyPetOwnerInputEnvelope
    set?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    disconnect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    delete?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    connect?: AnimalWhereUniqueInput | AnimalWhereUniqueInput[]
    update?: AnimalUpdateWithWhereUniqueWithoutPetOwnerInput | AnimalUpdateWithWhereUniqueWithoutPetOwnerInput[]
    updateMany?: AnimalUpdateManyWithWhereWithoutPetOwnerInput | AnimalUpdateManyWithWhereWithoutPetOwnerInput[]
    deleteMany?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPetOwnerNestedInput = {
    create?: XOR<AppointmentCreateWithoutPetOwnerInput, AppointmentUncheckedCreateWithoutPetOwnerInput> | AppointmentCreateWithoutPetOwnerInput[] | AppointmentUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPetOwnerInput | AppointmentCreateOrConnectWithoutPetOwnerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPetOwnerInput | AppointmentUpsertWithWhereUniqueWithoutPetOwnerInput[]
    createMany?: AppointmentCreateManyPetOwnerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPetOwnerInput | AppointmentUpdateWithWhereUniqueWithoutPetOwnerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPetOwnerInput | AppointmentUpdateManyWithWhereWithoutPetOwnerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CommitmentTermUncheckedUpdateManyWithoutPetOwnerNestedInput = {
    create?: XOR<CommitmentTermCreateWithoutPetOwnerInput, CommitmentTermUncheckedCreateWithoutPetOwnerInput> | CommitmentTermCreateWithoutPetOwnerInput[] | CommitmentTermUncheckedCreateWithoutPetOwnerInput[]
    connectOrCreate?: CommitmentTermCreateOrConnectWithoutPetOwnerInput | CommitmentTermCreateOrConnectWithoutPetOwnerInput[]
    upsert?: CommitmentTermUpsertWithWhereUniqueWithoutPetOwnerInput | CommitmentTermUpsertWithWhereUniqueWithoutPetOwnerInput[]
    createMany?: CommitmentTermCreateManyPetOwnerInputEnvelope
    set?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
    disconnect?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
    delete?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
    connect?: CommitmentTermWhereUniqueInput | CommitmentTermWhereUniqueInput[]
    update?: CommitmentTermUpdateWithWhereUniqueWithoutPetOwnerInput | CommitmentTermUpdateWithWhereUniqueWithoutPetOwnerInput[]
    updateMany?: CommitmentTermUpdateManyWithWhereWithoutPetOwnerInput | CommitmentTermUpdateManyWithWhereWithoutPetOwnerInput[]
    deleteMany?: CommitmentTermScalarWhereInput | CommitmentTermScalarWhereInput[]
  }

  export type PetOwnerCreateNestedOneWithoutCommitmentTermsInput = {
    create?: XOR<PetOwnerCreateWithoutCommitmentTermsInput, PetOwnerUncheckedCreateWithoutCommitmentTermsInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutCommitmentTermsInput
    connect?: PetOwnerWhereUniqueInput
  }

  export type PetOwnerUpdateOneRequiredWithoutCommitmentTermsNestedInput = {
    create?: XOR<PetOwnerCreateWithoutCommitmentTermsInput, PetOwnerUncheckedCreateWithoutCommitmentTermsInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutCommitmentTermsInput
    upsert?: PetOwnerUpsertWithoutCommitmentTermsInput
    connect?: PetOwnerWhereUniqueInput
    update?: XOR<XOR<PetOwnerUpdateToOneWithWhereWithoutCommitmentTermsInput, PetOwnerUpdateWithoutCommitmentTermsInput>, PetOwnerUncheckedUpdateWithoutCommitmentTermsInput>
  }

  export type UserCreateNestedOneWithoutVeterinarianInput = {
    create?: XOR<UserCreateWithoutVeterinarianInput, UserUncheckedCreateWithoutVeterinarianInput>
    connectOrCreate?: UserCreateOrConnectWithoutVeterinarianInput
    connect?: UserWhereUniqueInput
  }

  export type ClinicalRecordCreateNestedManyWithoutVeterinarianInput = {
    create?: XOR<ClinicalRecordCreateWithoutVeterinarianInput, ClinicalRecordUncheckedCreateWithoutVeterinarianInput> | ClinicalRecordCreateWithoutVeterinarianInput[] | ClinicalRecordUncheckedCreateWithoutVeterinarianInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutVeterinarianInput | ClinicalRecordCreateOrConnectWithoutVeterinarianInput[]
    createMany?: ClinicalRecordCreateManyVeterinarianInputEnvelope
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
  }

  export type ClinicalRecordUncheckedCreateNestedManyWithoutVeterinarianInput = {
    create?: XOR<ClinicalRecordCreateWithoutVeterinarianInput, ClinicalRecordUncheckedCreateWithoutVeterinarianInput> | ClinicalRecordCreateWithoutVeterinarianInput[] | ClinicalRecordUncheckedCreateWithoutVeterinarianInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutVeterinarianInput | ClinicalRecordCreateOrConnectWithoutVeterinarianInput[]
    createMany?: ClinicalRecordCreateManyVeterinarianInputEnvelope
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVeterinarianNestedInput = {
    create?: XOR<UserCreateWithoutVeterinarianInput, UserUncheckedCreateWithoutVeterinarianInput>
    connectOrCreate?: UserCreateOrConnectWithoutVeterinarianInput
    upsert?: UserUpsertWithoutVeterinarianInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVeterinarianInput, UserUpdateWithoutVeterinarianInput>, UserUncheckedUpdateWithoutVeterinarianInput>
  }

  export type ClinicalRecordUpdateManyWithoutVeterinarianNestedInput = {
    create?: XOR<ClinicalRecordCreateWithoutVeterinarianInput, ClinicalRecordUncheckedCreateWithoutVeterinarianInput> | ClinicalRecordCreateWithoutVeterinarianInput[] | ClinicalRecordUncheckedCreateWithoutVeterinarianInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutVeterinarianInput | ClinicalRecordCreateOrConnectWithoutVeterinarianInput[]
    upsert?: ClinicalRecordUpsertWithWhereUniqueWithoutVeterinarianInput | ClinicalRecordUpsertWithWhereUniqueWithoutVeterinarianInput[]
    createMany?: ClinicalRecordCreateManyVeterinarianInputEnvelope
    set?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    disconnect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    delete?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    update?: ClinicalRecordUpdateWithWhereUniqueWithoutVeterinarianInput | ClinicalRecordUpdateWithWhereUniqueWithoutVeterinarianInput[]
    updateMany?: ClinicalRecordUpdateManyWithWhereWithoutVeterinarianInput | ClinicalRecordUpdateManyWithWhereWithoutVeterinarianInput[]
    deleteMany?: ClinicalRecordScalarWhereInput | ClinicalRecordScalarWhereInput[]
  }

  export type ClinicalRecordUncheckedUpdateManyWithoutVeterinarianNestedInput = {
    create?: XOR<ClinicalRecordCreateWithoutVeterinarianInput, ClinicalRecordUncheckedCreateWithoutVeterinarianInput> | ClinicalRecordCreateWithoutVeterinarianInput[] | ClinicalRecordUncheckedCreateWithoutVeterinarianInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutVeterinarianInput | ClinicalRecordCreateOrConnectWithoutVeterinarianInput[]
    upsert?: ClinicalRecordUpsertWithWhereUniqueWithoutVeterinarianInput | ClinicalRecordUpsertWithWhereUniqueWithoutVeterinarianInput[]
    createMany?: ClinicalRecordCreateManyVeterinarianInputEnvelope
    set?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    disconnect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    delete?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    update?: ClinicalRecordUpdateWithWhereUniqueWithoutVeterinarianInput | ClinicalRecordUpdateWithWhereUniqueWithoutVeterinarianInput[]
    updateMany?: ClinicalRecordUpdateManyWithWhereWithoutVeterinarianInput | ClinicalRecordUpdateManyWithWhereWithoutVeterinarianInput[]
    deleteMany?: ClinicalRecordScalarWhereInput | ClinicalRecordScalarWhereInput[]
  }

  export type PetOwnerCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<PetOwnerCreateWithoutAnimalsInput, PetOwnerUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutAnimalsInput
    connect?: PetOwnerWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutAnimalInput = {
    create?: XOR<AppointmentCreateWithoutAnimalInput, AppointmentUncheckedCreateWithoutAnimalInput> | AppointmentCreateWithoutAnimalInput[] | AppointmentUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutAnimalInput | AppointmentCreateOrConnectWithoutAnimalInput[]
    createMany?: AppointmentCreateManyAnimalInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalRecordCreateNestedOneWithoutAnimalInput = {
    create?: XOR<MedicalRecordCreateWithoutAnimalInput, MedicalRecordUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutAnimalInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<AppointmentCreateWithoutAnimalInput, AppointmentUncheckedCreateWithoutAnimalInput> | AppointmentCreateWithoutAnimalInput[] | AppointmentUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutAnimalInput | AppointmentCreateOrConnectWithoutAnimalInput[]
    createMany?: AppointmentCreateManyAnimalInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedOneWithoutAnimalInput = {
    create?: XOR<MedicalRecordCreateWithoutAnimalInput, MedicalRecordUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutAnimalInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type EnumSpeciesFieldUpdateOperationsInput = {
    set?: $Enums.Species
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type PetOwnerUpdateOneRequiredWithoutAnimalsNestedInput = {
    create?: XOR<PetOwnerCreateWithoutAnimalsInput, PetOwnerUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutAnimalsInput
    upsert?: PetOwnerUpsertWithoutAnimalsInput
    connect?: PetOwnerWhereUniqueInput
    update?: XOR<XOR<PetOwnerUpdateToOneWithWhereWithoutAnimalsInput, PetOwnerUpdateWithoutAnimalsInput>, PetOwnerUncheckedUpdateWithoutAnimalsInput>
  }

  export type AppointmentUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<AppointmentCreateWithoutAnimalInput, AppointmentUncheckedCreateWithoutAnimalInput> | AppointmentCreateWithoutAnimalInput[] | AppointmentUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutAnimalInput | AppointmentCreateOrConnectWithoutAnimalInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutAnimalInput | AppointmentUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: AppointmentCreateManyAnimalInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutAnimalInput | AppointmentUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutAnimalInput | AppointmentUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalRecordUpdateOneWithoutAnimalNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutAnimalInput, MedicalRecordUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutAnimalInput
    upsert?: MedicalRecordUpsertWithoutAnimalInput
    disconnect?: MedicalRecordWhereInput | boolean
    delete?: MedicalRecordWhereInput | boolean
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutAnimalInput, MedicalRecordUpdateWithoutAnimalInput>, MedicalRecordUncheckedUpdateWithoutAnimalInput>
  }

  export type AppointmentUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<AppointmentCreateWithoutAnimalInput, AppointmentUncheckedCreateWithoutAnimalInput> | AppointmentCreateWithoutAnimalInput[] | AppointmentUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutAnimalInput | AppointmentCreateOrConnectWithoutAnimalInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutAnimalInput | AppointmentUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: AppointmentCreateManyAnimalInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutAnimalInput | AppointmentUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutAnimalInput | AppointmentUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateOneWithoutAnimalNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutAnimalInput, MedicalRecordUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutAnimalInput
    upsert?: MedicalRecordUpsertWithoutAnimalInput
    disconnect?: MedicalRecordWhereInput | boolean
    delete?: MedicalRecordWhereInput | boolean
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutAnimalInput, MedicalRecordUpdateWithoutAnimalInput>, MedicalRecordUncheckedUpdateWithoutAnimalInput>
  }

  export type AnimalCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<AnimalCreateWithoutAppointmentsInput, AnimalUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutAppointmentsInput
    connect?: AnimalWhereUniqueInput
  }

  export type PetOwnerCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PetOwnerCreateWithoutAppointmentsInput, PetOwnerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutAppointmentsInput
    connect?: PetOwnerWhereUniqueInput
  }

  export type ClinicalRecordCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<ClinicalRecordCreateWithoutAppointmentInput, ClinicalRecordUncheckedCreateWithoutAppointmentInput> | ClinicalRecordCreateWithoutAppointmentInput[] | ClinicalRecordUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutAppointmentInput | ClinicalRecordCreateOrConnectWithoutAppointmentInput[]
    createMany?: ClinicalRecordCreateManyAppointmentInputEnvelope
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
  }

  export type ClinicalRecordUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<ClinicalRecordCreateWithoutAppointmentInput, ClinicalRecordUncheckedCreateWithoutAppointmentInput> | ClinicalRecordCreateWithoutAppointmentInput[] | ClinicalRecordUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutAppointmentInput | ClinicalRecordCreateOrConnectWithoutAppointmentInput[]
    createMany?: ClinicalRecordCreateManyAppointmentInputEnvelope
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
  }

  export type NullableEnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType | null
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type AnimalUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<AnimalCreateWithoutAppointmentsInput, AnimalUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutAppointmentsInput
    upsert?: AnimalUpsertWithoutAppointmentsInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutAppointmentsInput, AnimalUpdateWithoutAppointmentsInput>, AnimalUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PetOwnerUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PetOwnerCreateWithoutAppointmentsInput, PetOwnerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PetOwnerCreateOrConnectWithoutAppointmentsInput
    upsert?: PetOwnerUpsertWithoutAppointmentsInput
    connect?: PetOwnerWhereUniqueInput
    update?: XOR<XOR<PetOwnerUpdateToOneWithWhereWithoutAppointmentsInput, PetOwnerUpdateWithoutAppointmentsInput>, PetOwnerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ClinicalRecordUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<ClinicalRecordCreateWithoutAppointmentInput, ClinicalRecordUncheckedCreateWithoutAppointmentInput> | ClinicalRecordCreateWithoutAppointmentInput[] | ClinicalRecordUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutAppointmentInput | ClinicalRecordCreateOrConnectWithoutAppointmentInput[]
    upsert?: ClinicalRecordUpsertWithWhereUniqueWithoutAppointmentInput | ClinicalRecordUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: ClinicalRecordCreateManyAppointmentInputEnvelope
    set?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    disconnect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    delete?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    update?: ClinicalRecordUpdateWithWhereUniqueWithoutAppointmentInput | ClinicalRecordUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: ClinicalRecordUpdateManyWithWhereWithoutAppointmentInput | ClinicalRecordUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: ClinicalRecordScalarWhereInput | ClinicalRecordScalarWhereInput[]
  }

  export type ClinicalRecordUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<ClinicalRecordCreateWithoutAppointmentInput, ClinicalRecordUncheckedCreateWithoutAppointmentInput> | ClinicalRecordCreateWithoutAppointmentInput[] | ClinicalRecordUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutAppointmentInput | ClinicalRecordCreateOrConnectWithoutAppointmentInput[]
    upsert?: ClinicalRecordUpsertWithWhereUniqueWithoutAppointmentInput | ClinicalRecordUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: ClinicalRecordCreateManyAppointmentInputEnvelope
    set?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    disconnect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    delete?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    update?: ClinicalRecordUpdateWithWhereUniqueWithoutAppointmentInput | ClinicalRecordUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: ClinicalRecordUpdateManyWithWhereWithoutAppointmentInput | ClinicalRecordUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: ClinicalRecordScalarWhereInput | ClinicalRecordScalarWhereInput[]
  }

  export type AnimalCreateNestedOneWithoutMedicalRecordInput = {
    create?: XOR<AnimalCreateWithoutMedicalRecordInput, AnimalUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutMedicalRecordInput
    connect?: AnimalWhereUniqueInput
  }

  export type ClinicalRecordCreateNestedManyWithoutMedicalRecordInput = {
    create?: XOR<ClinicalRecordCreateWithoutMedicalRecordInput, ClinicalRecordUncheckedCreateWithoutMedicalRecordInput> | ClinicalRecordCreateWithoutMedicalRecordInput[] | ClinicalRecordUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutMedicalRecordInput | ClinicalRecordCreateOrConnectWithoutMedicalRecordInput[]
    createMany?: ClinicalRecordCreateManyMedicalRecordInputEnvelope
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
  }

  export type ClinicalRecordUncheckedCreateNestedManyWithoutMedicalRecordInput = {
    create?: XOR<ClinicalRecordCreateWithoutMedicalRecordInput, ClinicalRecordUncheckedCreateWithoutMedicalRecordInput> | ClinicalRecordCreateWithoutMedicalRecordInput[] | ClinicalRecordUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutMedicalRecordInput | ClinicalRecordCreateOrConnectWithoutMedicalRecordInput[]
    createMany?: ClinicalRecordCreateManyMedicalRecordInputEnvelope
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
  }

  export type AnimalUpdateOneRequiredWithoutMedicalRecordNestedInput = {
    create?: XOR<AnimalCreateWithoutMedicalRecordInput, AnimalUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutMedicalRecordInput
    upsert?: AnimalUpsertWithoutMedicalRecordInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutMedicalRecordInput, AnimalUpdateWithoutMedicalRecordInput>, AnimalUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type ClinicalRecordUpdateManyWithoutMedicalRecordNestedInput = {
    create?: XOR<ClinicalRecordCreateWithoutMedicalRecordInput, ClinicalRecordUncheckedCreateWithoutMedicalRecordInput> | ClinicalRecordCreateWithoutMedicalRecordInput[] | ClinicalRecordUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutMedicalRecordInput | ClinicalRecordCreateOrConnectWithoutMedicalRecordInput[]
    upsert?: ClinicalRecordUpsertWithWhereUniqueWithoutMedicalRecordInput | ClinicalRecordUpsertWithWhereUniqueWithoutMedicalRecordInput[]
    createMany?: ClinicalRecordCreateManyMedicalRecordInputEnvelope
    set?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    disconnect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    delete?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    update?: ClinicalRecordUpdateWithWhereUniqueWithoutMedicalRecordInput | ClinicalRecordUpdateWithWhereUniqueWithoutMedicalRecordInput[]
    updateMany?: ClinicalRecordUpdateManyWithWhereWithoutMedicalRecordInput | ClinicalRecordUpdateManyWithWhereWithoutMedicalRecordInput[]
    deleteMany?: ClinicalRecordScalarWhereInput | ClinicalRecordScalarWhereInput[]
  }

  export type ClinicalRecordUncheckedUpdateManyWithoutMedicalRecordNestedInput = {
    create?: XOR<ClinicalRecordCreateWithoutMedicalRecordInput, ClinicalRecordUncheckedCreateWithoutMedicalRecordInput> | ClinicalRecordCreateWithoutMedicalRecordInput[] | ClinicalRecordUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: ClinicalRecordCreateOrConnectWithoutMedicalRecordInput | ClinicalRecordCreateOrConnectWithoutMedicalRecordInput[]
    upsert?: ClinicalRecordUpsertWithWhereUniqueWithoutMedicalRecordInput | ClinicalRecordUpsertWithWhereUniqueWithoutMedicalRecordInput[]
    createMany?: ClinicalRecordCreateManyMedicalRecordInputEnvelope
    set?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    disconnect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    delete?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    connect?: ClinicalRecordWhereUniqueInput | ClinicalRecordWhereUniqueInput[]
    update?: ClinicalRecordUpdateWithWhereUniqueWithoutMedicalRecordInput | ClinicalRecordUpdateWithWhereUniqueWithoutMedicalRecordInput[]
    updateMany?: ClinicalRecordUpdateManyWithWhereWithoutMedicalRecordInput | ClinicalRecordUpdateManyWithWhereWithoutMedicalRecordInput[]
    deleteMany?: ClinicalRecordScalarWhereInput | ClinicalRecordScalarWhereInput[]
  }

  export type MedicalRecordCreateNestedOneWithoutClinicalRecordsInput = {
    create?: XOR<MedicalRecordCreateWithoutClinicalRecordsInput, MedicalRecordUncheckedCreateWithoutClinicalRecordsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutClinicalRecordsInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutClinicalRecordsInput = {
    create?: XOR<AppointmentCreateWithoutClinicalRecordsInput, AppointmentUncheckedCreateWithoutClinicalRecordsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutClinicalRecordsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type VeterinarianCreateNestedOneWithoutClinicalRecordsInput = {
    create?: XOR<VeterinarianCreateWithoutClinicalRecordsInput, VeterinarianUncheckedCreateWithoutClinicalRecordsInput>
    connectOrCreate?: VeterinarianCreateOrConnectWithoutClinicalRecordsInput
    connect?: VeterinarianWhereUniqueInput
  }

  export type EnumClinicalRecordTypeFieldUpdateOperationsInput = {
    set?: $Enums.ClinicalRecordType
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnumSurgeryTypeFieldUpdateOperationsInput = {
    set?: $Enums.SurgeryType | null
  }

  export type MedicalRecordUpdateOneRequiredWithoutClinicalRecordsNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutClinicalRecordsInput, MedicalRecordUncheckedCreateWithoutClinicalRecordsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutClinicalRecordsInput
    upsert?: MedicalRecordUpsertWithoutClinicalRecordsInput
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutClinicalRecordsInput, MedicalRecordUpdateWithoutClinicalRecordsInput>, MedicalRecordUncheckedUpdateWithoutClinicalRecordsInput>
  }

  export type AppointmentUpdateOneWithoutClinicalRecordsNestedInput = {
    create?: XOR<AppointmentCreateWithoutClinicalRecordsInput, AppointmentUncheckedCreateWithoutClinicalRecordsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutClinicalRecordsInput
    upsert?: AppointmentUpsertWithoutClinicalRecordsInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutClinicalRecordsInput, AppointmentUpdateWithoutClinicalRecordsInput>, AppointmentUncheckedUpdateWithoutClinicalRecordsInput>
  }

  export type VeterinarianUpdateOneRequiredWithoutClinicalRecordsNestedInput = {
    create?: XOR<VeterinarianCreateWithoutClinicalRecordsInput, VeterinarianUncheckedCreateWithoutClinicalRecordsInput>
    connectOrCreate?: VeterinarianCreateOrConnectWithoutClinicalRecordsInput
    upsert?: VeterinarianUpsertWithoutClinicalRecordsInput
    connect?: VeterinarianWhereUniqueInput
    update?: XOR<XOR<VeterinarianUpdateToOneWithWhereWithoutClinicalRecordsInput, VeterinarianUpdateWithoutClinicalRecordsInput>, VeterinarianUncheckedUpdateWithoutClinicalRecordsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutUserDevicesInput = {
    create?: XOR<UserCreateWithoutUserDevicesInput, UserUncheckedCreateWithoutUserDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserDevicesNestedInput = {
    create?: XOR<UserCreateWithoutUserDevicesInput, UserUncheckedCreateWithoutUserDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDevicesInput
    upsert?: UserUpsertWithoutUserDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserDevicesInput, UserUpdateWithoutUserDevicesInput>, UserUncheckedUpdateWithoutUserDevicesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationChannelFieldUpdateOperationsInput = {
    set?: $Enums.NotificationChannel
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutBulletinsInput = {
    create?: XOR<UserCreateWithoutBulletinsInput, UserUncheckedCreateWithoutBulletinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBulletinsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTargetFieldUpdateOperationsInput = {
    set?: $Enums.Target
  }

  export type UserUpdateOneRequiredWithoutBulletinsNestedInput = {
    create?: XOR<UserCreateWithoutBulletinsInput, UserUncheckedCreateWithoutBulletinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBulletinsInput
    upsert?: UserUpsertWithoutBulletinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBulletinsInput, UserUpdateWithoutBulletinsInput>, UserUncheckedUpdateWithoutBulletinsInput>
  }

  export type UserCreateNestedOneWithoutSystemLogsInput = {
    create?: XOR<UserCreateWithoutSystemLogsInput, UserUncheckedCreateWithoutSystemLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSystemLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.LogType
  }

  export type UserUpdateOneWithoutSystemLogsNestedInput = {
    create?: XOR<UserCreateWithoutSystemLogsInput, UserUncheckedCreateWithoutSystemLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSystemLogsInput
    upsert?: UserUpsertWithoutSystemLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSystemLogsInput, UserUpdateWithoutSystemLogsInput>, UserUncheckedUpdateWithoutSystemLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesFilter<$PrismaModel> | $Enums.Species
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.Species
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeciesFilter<$PrismaModel>
    _max?: NestedEnumSpeciesFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceTypeNullableFilter<$PrismaModel> | $Enums.ServiceType | null
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumServiceTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumClinicalRecordTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClinicalRecordType | EnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClinicalRecordType[] | ListEnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClinicalRecordType[] | ListEnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClinicalRecordTypeFilter<$PrismaModel> | $Enums.ClinicalRecordType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumSurgeryTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SurgeryType | EnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SurgeryType[] | ListEnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SurgeryType[] | ListEnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSurgeryTypeNullableFilter<$PrismaModel> | $Enums.SurgeryType | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumClinicalRecordTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClinicalRecordType | EnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClinicalRecordType[] | ListEnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClinicalRecordType[] | ListEnumClinicalRecordTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClinicalRecordTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClinicalRecordType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClinicalRecordTypeFilter<$PrismaModel>
    _max?: NestedEnumClinicalRecordTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumSurgeryTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SurgeryType | EnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SurgeryType[] | ListEnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SurgeryType[] | ListEnumSurgeryTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSurgeryTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SurgeryType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSurgeryTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSurgeryTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationChannel[] | ListEnumNotificationChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.Target | EnumTargetFieldRefInput<$PrismaModel>
    in?: $Enums.Target[] | ListEnumTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.Target[] | ListEnumTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumTargetFilter<$PrismaModel> | $Enums.Target
  }

  export type NestedEnumTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Target | EnumTargetFieldRefInput<$PrismaModel>
    in?: $Enums.Target[] | ListEnumTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.Target[] | ListEnumTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumTargetWithAggregatesFilter<$PrismaModel> | $Enums.Target
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTargetFilter<$PrismaModel>
    _max?: NestedEnumTargetFilter<$PrismaModel>
  }

  export type NestedEnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type NestedEnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type TokenCreateWithoutUserInput = {
    jwt?: string | null
    refreshJwt?: string | null
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    jwt?: string | null
    refreshJwt?: string | null
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type PetOwnerCreateWithoutUserInput = {
    fullAddress: string
    animals?: AnimalCreateNestedManyWithoutPetOwnerInput
    appointments?: AppointmentCreateNestedManyWithoutPetOwnerInput
    commitmentTerms?: CommitmentTermCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerUncheckedCreateWithoutUserInput = {
    id?: number
    fullAddress: string
    animals?: AnimalUncheckedCreateNestedManyWithoutPetOwnerInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPetOwnerInput
    commitmentTerms?: CommitmentTermUncheckedCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerCreateOrConnectWithoutUserInput = {
    where: PetOwnerWhereUniqueInput
    create: XOR<PetOwnerCreateWithoutUserInput, PetOwnerUncheckedCreateWithoutUserInput>
  }

  export type VeterinarianCreateWithoutUserInput = {
    crmv?: string | null
    active?: boolean
    clinicalRecords?: ClinicalRecordCreateNestedManyWithoutVeterinarianInput
  }

  export type VeterinarianUncheckedCreateWithoutUserInput = {
    id?: number
    crmv?: string | null
    active?: boolean
    clinicalRecords?: ClinicalRecordUncheckedCreateNestedManyWithoutVeterinarianInput
  }

  export type VeterinarianCreateOrConnectWithoutUserInput = {
    where: VeterinarianWhereUniqueInput
    create: XOR<VeterinarianCreateWithoutUserInput, VeterinarianUncheckedCreateWithoutUserInput>
  }

  export type UserDeviceCreateWithoutUserInput = {
    fcmToken: string
    deviceInfo?: string | null
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type UserDeviceUncheckedCreateWithoutUserInput = {
    id?: number
    fcmToken: string
    deviceInfo?: string | null
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type UserDeviceCreateOrConnectWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    create: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput>
  }

  export type UserDeviceCreateManyUserInputEnvelope = {
    data: UserDeviceCreateManyUserInput | UserDeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    read?: boolean
    channel?: $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    read?: boolean
    channel?: $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BulletinCreateWithoutCreatedByInput = {
    title?: string | null
    message: string
    targetRoles?: $Enums.Target
    createdAt?: Date | string
  }

  export type BulletinUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title?: string | null
    message: string
    targetRoles?: $Enums.Target
    createdAt?: Date | string
  }

  export type BulletinCreateOrConnectWithoutCreatedByInput = {
    where: BulletinWhereUniqueInput
    create: XOR<BulletinCreateWithoutCreatedByInput, BulletinUncheckedCreateWithoutCreatedByInput>
  }

  export type BulletinCreateManyCreatedByInputEnvelope = {
    data: BulletinCreateManyCreatedByInput | BulletinCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SystemLogCreateWithoutUserInput = {
    targetTable: string
    targetId: number
    action: string
    description?: string | null
    type: $Enums.LogType
    originIp?: string | null
    createdAt?: Date | string
  }

  export type SystemLogUncheckedCreateWithoutUserInput = {
    id?: number
    targetTable: string
    targetId: number
    action: string
    description?: string | null
    type: $Enums.LogType
    originIp?: string | null
    createdAt?: Date | string
  }

  export type SystemLogCreateOrConnectWithoutUserInput = {
    where: SystemLogWhereUniqueInput
    create: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput>
  }

  export type SystemLogCreateManyUserInputEnvelope = {
    data: SystemLogCreateManyUserInput | SystemLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithoutUserInput = {
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutUserInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateWithoutUserInput = {
    jwt?: NullableStringFieldUpdateOperationsInput | string | null
    refreshJwt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jwt?: NullableStringFieldUpdateOperationsInput | string | null
    refreshJwt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetOwnerUpsertWithoutUserInput = {
    update: XOR<PetOwnerUpdateWithoutUserInput, PetOwnerUncheckedUpdateWithoutUserInput>
    create: XOR<PetOwnerCreateWithoutUserInput, PetOwnerUncheckedCreateWithoutUserInput>
    where?: PetOwnerWhereInput
  }

  export type PetOwnerUpdateToOneWithWhereWithoutUserInput = {
    where?: PetOwnerWhereInput
    data: XOR<PetOwnerUpdateWithoutUserInput, PetOwnerUncheckedUpdateWithoutUserInput>
  }

  export type PetOwnerUpdateWithoutUserInput = {
    fullAddress?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUpdateManyWithoutPetOwnerNestedInput
    appointments?: AppointmentUpdateManyWithoutPetOwnerNestedInput
    commitmentTerms?: CommitmentTermUpdateManyWithoutPetOwnerNestedInput
  }

  export type PetOwnerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullAddress?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutPetOwnerNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPetOwnerNestedInput
    commitmentTerms?: CommitmentTermUncheckedUpdateManyWithoutPetOwnerNestedInput
  }

  export type VeterinarianUpsertWithoutUserInput = {
    update: XOR<VeterinarianUpdateWithoutUserInput, VeterinarianUncheckedUpdateWithoutUserInput>
    create: XOR<VeterinarianCreateWithoutUserInput, VeterinarianUncheckedCreateWithoutUserInput>
    where?: VeterinarianWhereInput
  }

  export type VeterinarianUpdateToOneWithWhereWithoutUserInput = {
    where?: VeterinarianWhereInput
    data: XOR<VeterinarianUpdateWithoutUserInput, VeterinarianUncheckedUpdateWithoutUserInput>
  }

  export type VeterinarianUpdateWithoutUserInput = {
    crmv?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    clinicalRecords?: ClinicalRecordUpdateManyWithoutVeterinarianNestedInput
  }

  export type VeterinarianUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    crmv?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    clinicalRecords?: ClinicalRecordUncheckedUpdateManyWithoutVeterinarianNestedInput
  }

  export type UserDeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    update: XOR<UserDeviceUpdateWithoutUserInput, UserDeviceUncheckedUpdateWithoutUserInput>
    create: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput>
  }

  export type UserDeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    data: XOR<UserDeviceUpdateWithoutUserInput, UserDeviceUncheckedUpdateWithoutUserInput>
  }

  export type UserDeviceUpdateManyWithWhereWithoutUserInput = {
    where: UserDeviceScalarWhereInput
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDeviceScalarWhereInput = {
    AND?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
    OR?: UserDeviceScalarWhereInput[]
    NOT?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
    id?: IntFilter<"UserDevice"> | number
    userId?: IntFilter<"UserDevice"> | number
    fcmToken?: StringFilter<"UserDevice"> | string
    deviceInfo?: StringNullableFilter<"UserDevice"> | string | null
    createdAt?: DateTimeFilter<"UserDevice"> | Date | string
    lastActiveAt?: DateTimeFilter<"UserDevice"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    metadata?: JsonNullableFilter<"Notification">
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type BulletinUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: BulletinWhereUniqueInput
    update: XOR<BulletinUpdateWithoutCreatedByInput, BulletinUncheckedUpdateWithoutCreatedByInput>
    create: XOR<BulletinCreateWithoutCreatedByInput, BulletinUncheckedCreateWithoutCreatedByInput>
  }

  export type BulletinUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: BulletinWhereUniqueInput
    data: XOR<BulletinUpdateWithoutCreatedByInput, BulletinUncheckedUpdateWithoutCreatedByInput>
  }

  export type BulletinUpdateManyWithWhereWithoutCreatedByInput = {
    where: BulletinScalarWhereInput
    data: XOR<BulletinUpdateManyMutationInput, BulletinUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type BulletinScalarWhereInput = {
    AND?: BulletinScalarWhereInput | BulletinScalarWhereInput[]
    OR?: BulletinScalarWhereInput[]
    NOT?: BulletinScalarWhereInput | BulletinScalarWhereInput[]
    id?: IntFilter<"Bulletin"> | number
    createdByUserId?: IntFilter<"Bulletin"> | number
    title?: StringNullableFilter<"Bulletin"> | string | null
    message?: StringFilter<"Bulletin"> | string
    targetRoles?: EnumTargetFilter<"Bulletin"> | $Enums.Target
    createdAt?: DateTimeFilter<"Bulletin"> | Date | string
  }

  export type SystemLogUpsertWithWhereUniqueWithoutUserInput = {
    where: SystemLogWhereUniqueInput
    update: XOR<SystemLogUpdateWithoutUserInput, SystemLogUncheckedUpdateWithoutUserInput>
    create: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput>
  }

  export type SystemLogUpdateWithWhereUniqueWithoutUserInput = {
    where: SystemLogWhereUniqueInput
    data: XOR<SystemLogUpdateWithoutUserInput, SystemLogUncheckedUpdateWithoutUserInput>
  }

  export type SystemLogUpdateManyWithWhereWithoutUserInput = {
    where: SystemLogScalarWhereInput
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyWithoutUserInput>
  }

  export type SystemLogScalarWhereInput = {
    AND?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
    OR?: SystemLogScalarWhereInput[]
    NOT?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
    id?: IntFilter<"SystemLog"> | number
    userId?: IntNullableFilter<"SystemLog"> | number | null
    targetTable?: StringFilter<"SystemLog"> | string
    targetId?: IntFilter<"SystemLog"> | number
    action?: StringFilter<"SystemLog"> | string
    description?: StringNullableFilter<"SystemLog"> | string | null
    type?: EnumLogTypeFilter<"SystemLog"> | $Enums.LogType
    originIp?: StringNullableFilter<"SystemLog"> | string | null
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
  }

  export type UserCreateWithoutTokenInput = {
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    petOwner?: PetOwnerCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    bulletins?: BulletinCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    petOwner?: PetOwnerUncheckedCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianUncheckedCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    bulletins?: BulletinUncheckedCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    petOwner?: PetOwnerUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    petOwner?: PetOwnerUncheckedUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUncheckedUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUncheckedUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPetOwnerInput = {
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    bulletins?: BulletinCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPetOwnerInput = {
    id?: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianUncheckedCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    bulletins?: BulletinUncheckedCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPetOwnerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetOwnerInput, UserUncheckedCreateWithoutPetOwnerInput>
  }

  export type AnimalCreateWithoutPetOwnerInput = {
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
    appointments?: AppointmentCreateNestedManyWithoutAnimalInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutPetOwnerInput = {
    id?: number
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutAnimalInput
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutPetOwnerInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutPetOwnerInput, AnimalUncheckedCreateWithoutPetOwnerInput>
  }

  export type AnimalCreateManyPetOwnerInputEnvelope = {
    data: AnimalCreateManyPetOwnerInput | AnimalCreateManyPetOwnerInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPetOwnerInput = {
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    animal: AnimalCreateNestedOneWithoutAppointmentsInput
    clinicalRecords?: ClinicalRecordCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPetOwnerInput = {
    id?: number
    animalId: number
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    clinicalRecords?: ClinicalRecordUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPetOwnerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPetOwnerInput, AppointmentUncheckedCreateWithoutPetOwnerInput>
  }

  export type AppointmentCreateManyPetOwnerInputEnvelope = {
    data: AppointmentCreateManyPetOwnerInput | AppointmentCreateManyPetOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CommitmentTermCreateWithoutPetOwnerInput = {
    signatureDate?: Date | string
    documentUrl?: string | null
  }

  export type CommitmentTermUncheckedCreateWithoutPetOwnerInput = {
    id?: number
    signatureDate?: Date | string
    documentUrl?: string | null
  }

  export type CommitmentTermCreateOrConnectWithoutPetOwnerInput = {
    where: CommitmentTermWhereUniqueInput
    create: XOR<CommitmentTermCreateWithoutPetOwnerInput, CommitmentTermUncheckedCreateWithoutPetOwnerInput>
  }

  export type CommitmentTermCreateManyPetOwnerInputEnvelope = {
    data: CommitmentTermCreateManyPetOwnerInput | CommitmentTermCreateManyPetOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPetOwnerInput = {
    update: XOR<UserUpdateWithoutPetOwnerInput, UserUncheckedUpdateWithoutPetOwnerInput>
    create: XOR<UserCreateWithoutPetOwnerInput, UserUncheckedCreateWithoutPetOwnerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetOwnerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetOwnerInput, UserUncheckedUpdateWithoutPetOwnerInput>
  }

  export type UserUpdateWithoutPetOwnerInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPetOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUncheckedUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUncheckedUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnimalUpsertWithWhereUniqueWithoutPetOwnerInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutPetOwnerInput, AnimalUncheckedUpdateWithoutPetOwnerInput>
    create: XOR<AnimalCreateWithoutPetOwnerInput, AnimalUncheckedCreateWithoutPetOwnerInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutPetOwnerInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutPetOwnerInput, AnimalUncheckedUpdateWithoutPetOwnerInput>
  }

  export type AnimalUpdateManyWithWhereWithoutPetOwnerInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutPetOwnerInput>
  }

  export type AnimalScalarWhereInput = {
    AND?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    OR?: AnimalScalarWhereInput[]
    NOT?: AnimalScalarWhereInput | AnimalScalarWhereInput[]
    id?: IntFilter<"Animal"> | number
    petOwnerId?: IntFilter<"Animal"> | number
    name?: StringNullableFilter<"Animal"> | string | null
    species?: EnumSpeciesFilter<"Animal"> | $Enums.Species
    gender?: EnumGenderFilter<"Animal"> | $Enums.Gender
    estimatedAge?: StringFilter<"Animal"> | string
    sizeWeight?: StringFilter<"Animal"> | string
    breed?: StringNullableFilter<"Animal"> | string | null
    microchipNumber?: StringNullableFilter<"Animal"> | string | null
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPetOwnerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPetOwnerInput, AppointmentUncheckedUpdateWithoutPetOwnerInput>
    create: XOR<AppointmentCreateWithoutPetOwnerInput, AppointmentUncheckedCreateWithoutPetOwnerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPetOwnerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPetOwnerInput, AppointmentUncheckedUpdateWithoutPetOwnerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPetOwnerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPetOwnerInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    animalId?: IntFilter<"Appointment"> | number
    petOwnerId?: IntFilter<"Appointment"> | number
    serviceType?: EnumServiceTypeNullableFilter<"Appointment"> | $Enums.ServiceType | null
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    notes?: StringNullableFilter<"Appointment"> | string | null
  }

  export type CommitmentTermUpsertWithWhereUniqueWithoutPetOwnerInput = {
    where: CommitmentTermWhereUniqueInput
    update: XOR<CommitmentTermUpdateWithoutPetOwnerInput, CommitmentTermUncheckedUpdateWithoutPetOwnerInput>
    create: XOR<CommitmentTermCreateWithoutPetOwnerInput, CommitmentTermUncheckedCreateWithoutPetOwnerInput>
  }

  export type CommitmentTermUpdateWithWhereUniqueWithoutPetOwnerInput = {
    where: CommitmentTermWhereUniqueInput
    data: XOR<CommitmentTermUpdateWithoutPetOwnerInput, CommitmentTermUncheckedUpdateWithoutPetOwnerInput>
  }

  export type CommitmentTermUpdateManyWithWhereWithoutPetOwnerInput = {
    where: CommitmentTermScalarWhereInput
    data: XOR<CommitmentTermUpdateManyMutationInput, CommitmentTermUncheckedUpdateManyWithoutPetOwnerInput>
  }

  export type CommitmentTermScalarWhereInput = {
    AND?: CommitmentTermScalarWhereInput | CommitmentTermScalarWhereInput[]
    OR?: CommitmentTermScalarWhereInput[]
    NOT?: CommitmentTermScalarWhereInput | CommitmentTermScalarWhereInput[]
    id?: IntFilter<"CommitmentTerm"> | number
    petOwnerId?: IntFilter<"CommitmentTerm"> | number
    signatureDate?: DateTimeFilter<"CommitmentTerm"> | Date | string
    documentUrl?: StringNullableFilter<"CommitmentTerm"> | string | null
  }

  export type PetOwnerCreateWithoutCommitmentTermsInput = {
    fullAddress: string
    user: UserCreateNestedOneWithoutPetOwnerInput
    animals?: AnimalCreateNestedManyWithoutPetOwnerInput
    appointments?: AppointmentCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerUncheckedCreateWithoutCommitmentTermsInput = {
    id?: number
    userId: number
    fullAddress: string
    animals?: AnimalUncheckedCreateNestedManyWithoutPetOwnerInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerCreateOrConnectWithoutCommitmentTermsInput = {
    where: PetOwnerWhereUniqueInput
    create: XOR<PetOwnerCreateWithoutCommitmentTermsInput, PetOwnerUncheckedCreateWithoutCommitmentTermsInput>
  }

  export type PetOwnerUpsertWithoutCommitmentTermsInput = {
    update: XOR<PetOwnerUpdateWithoutCommitmentTermsInput, PetOwnerUncheckedUpdateWithoutCommitmentTermsInput>
    create: XOR<PetOwnerCreateWithoutCommitmentTermsInput, PetOwnerUncheckedCreateWithoutCommitmentTermsInput>
    where?: PetOwnerWhereInput
  }

  export type PetOwnerUpdateToOneWithWhereWithoutCommitmentTermsInput = {
    where?: PetOwnerWhereInput
    data: XOR<PetOwnerUpdateWithoutCommitmentTermsInput, PetOwnerUncheckedUpdateWithoutCommitmentTermsInput>
  }

  export type PetOwnerUpdateWithoutCommitmentTermsInput = {
    fullAddress?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPetOwnerNestedInput
    animals?: AnimalUpdateManyWithoutPetOwnerNestedInput
    appointments?: AppointmentUpdateManyWithoutPetOwnerNestedInput
  }

  export type PetOwnerUncheckedUpdateWithoutCommitmentTermsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullAddress?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutPetOwnerNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPetOwnerNestedInput
  }

  export type UserCreateWithoutVeterinarianInput = {
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    bulletins?: BulletinCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVeterinarianInput = {
    id?: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerUncheckedCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    bulletins?: BulletinUncheckedCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVeterinarianInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVeterinarianInput, UserUncheckedCreateWithoutVeterinarianInput>
  }

  export type ClinicalRecordCreateWithoutVeterinarianInput = {
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
    medicalRecord: MedicalRecordCreateNestedOneWithoutClinicalRecordsInput
    appointment?: AppointmentCreateNestedOneWithoutClinicalRecordsInput
  }

  export type ClinicalRecordUncheckedCreateWithoutVeterinarianInput = {
    id?: number
    medicalRecordId: number
    appointmentId?: number | null
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
  }

  export type ClinicalRecordCreateOrConnectWithoutVeterinarianInput = {
    where: ClinicalRecordWhereUniqueInput
    create: XOR<ClinicalRecordCreateWithoutVeterinarianInput, ClinicalRecordUncheckedCreateWithoutVeterinarianInput>
  }

  export type ClinicalRecordCreateManyVeterinarianInputEnvelope = {
    data: ClinicalRecordCreateManyVeterinarianInput | ClinicalRecordCreateManyVeterinarianInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVeterinarianInput = {
    update: XOR<UserUpdateWithoutVeterinarianInput, UserUncheckedUpdateWithoutVeterinarianInput>
    create: XOR<UserCreateWithoutVeterinarianInput, UserUncheckedCreateWithoutVeterinarianInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVeterinarianInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVeterinarianInput, UserUncheckedUpdateWithoutVeterinarianInput>
  }

  export type UserUpdateWithoutVeterinarianInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVeterinarianInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUncheckedUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUncheckedUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClinicalRecordUpsertWithWhereUniqueWithoutVeterinarianInput = {
    where: ClinicalRecordWhereUniqueInput
    update: XOR<ClinicalRecordUpdateWithoutVeterinarianInput, ClinicalRecordUncheckedUpdateWithoutVeterinarianInput>
    create: XOR<ClinicalRecordCreateWithoutVeterinarianInput, ClinicalRecordUncheckedCreateWithoutVeterinarianInput>
  }

  export type ClinicalRecordUpdateWithWhereUniqueWithoutVeterinarianInput = {
    where: ClinicalRecordWhereUniqueInput
    data: XOR<ClinicalRecordUpdateWithoutVeterinarianInput, ClinicalRecordUncheckedUpdateWithoutVeterinarianInput>
  }

  export type ClinicalRecordUpdateManyWithWhereWithoutVeterinarianInput = {
    where: ClinicalRecordScalarWhereInput
    data: XOR<ClinicalRecordUpdateManyMutationInput, ClinicalRecordUncheckedUpdateManyWithoutVeterinarianInput>
  }

  export type ClinicalRecordScalarWhereInput = {
    AND?: ClinicalRecordScalarWhereInput | ClinicalRecordScalarWhereInput[]
    OR?: ClinicalRecordScalarWhereInput[]
    NOT?: ClinicalRecordScalarWhereInput | ClinicalRecordScalarWhereInput[]
    id?: IntFilter<"ClinicalRecord"> | number
    medicalRecordId?: IntFilter<"ClinicalRecord"> | number
    appointmentId?: IntNullableFilter<"ClinicalRecord"> | number | null
    veterinarianId?: IntFilter<"ClinicalRecord"> | number
    type?: EnumClinicalRecordTypeFilter<"ClinicalRecord"> | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFilter<"ClinicalRecord"> | Date | string
    fitForSurgery?: BoolNullableFilter<"ClinicalRecord"> | boolean | null
    surgeryType?: EnumSurgeryTypeNullableFilter<"ClinicalRecord"> | $Enums.SurgeryType | null
    observations?: StringNullableFilter<"ClinicalRecord"> | string | null
    instructions?: StringNullableFilter<"ClinicalRecord"> | string | null
  }

  export type PetOwnerCreateWithoutAnimalsInput = {
    fullAddress: string
    user: UserCreateNestedOneWithoutPetOwnerInput
    appointments?: AppointmentCreateNestedManyWithoutPetOwnerInput
    commitmentTerms?: CommitmentTermCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerUncheckedCreateWithoutAnimalsInput = {
    id?: number
    userId: number
    fullAddress: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPetOwnerInput
    commitmentTerms?: CommitmentTermUncheckedCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerCreateOrConnectWithoutAnimalsInput = {
    where: PetOwnerWhereUniqueInput
    create: XOR<PetOwnerCreateWithoutAnimalsInput, PetOwnerUncheckedCreateWithoutAnimalsInput>
  }

  export type AppointmentCreateWithoutAnimalInput = {
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    petOwner: PetOwnerCreateNestedOneWithoutAppointmentsInput
    clinicalRecords?: ClinicalRecordCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutAnimalInput = {
    id?: number
    petOwnerId: number
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    clinicalRecords?: ClinicalRecordUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutAnimalInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutAnimalInput, AppointmentUncheckedCreateWithoutAnimalInput>
  }

  export type AppointmentCreateManyAnimalInputEnvelope = {
    data: AppointmentCreateManyAnimalInput | AppointmentCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordCreateWithoutAnimalInput = {
    microchipNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinicalRecords?: ClinicalRecordCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutAnimalInput = {
    id?: number
    microchipNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clinicalRecords?: ClinicalRecordUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordCreateOrConnectWithoutAnimalInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutAnimalInput, MedicalRecordUncheckedCreateWithoutAnimalInput>
  }

  export type PetOwnerUpsertWithoutAnimalsInput = {
    update: XOR<PetOwnerUpdateWithoutAnimalsInput, PetOwnerUncheckedUpdateWithoutAnimalsInput>
    create: XOR<PetOwnerCreateWithoutAnimalsInput, PetOwnerUncheckedCreateWithoutAnimalsInput>
    where?: PetOwnerWhereInput
  }

  export type PetOwnerUpdateToOneWithWhereWithoutAnimalsInput = {
    where?: PetOwnerWhereInput
    data: XOR<PetOwnerUpdateWithoutAnimalsInput, PetOwnerUncheckedUpdateWithoutAnimalsInput>
  }

  export type PetOwnerUpdateWithoutAnimalsInput = {
    fullAddress?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPetOwnerNestedInput
    appointments?: AppointmentUpdateManyWithoutPetOwnerNestedInput
    commitmentTerms?: CommitmentTermUpdateManyWithoutPetOwnerNestedInput
  }

  export type PetOwnerUncheckedUpdateWithoutAnimalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullAddress?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPetOwnerNestedInput
    commitmentTerms?: CommitmentTermUncheckedUpdateManyWithoutPetOwnerNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutAnimalInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutAnimalInput, AppointmentUncheckedUpdateWithoutAnimalInput>
    create: XOR<AppointmentCreateWithoutAnimalInput, AppointmentUncheckedCreateWithoutAnimalInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutAnimalInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutAnimalInput, AppointmentUncheckedUpdateWithoutAnimalInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutAnimalInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutAnimalInput>
  }

  export type MedicalRecordUpsertWithoutAnimalInput = {
    update: XOR<MedicalRecordUpdateWithoutAnimalInput, MedicalRecordUncheckedUpdateWithoutAnimalInput>
    create: XOR<MedicalRecordCreateWithoutAnimalInput, MedicalRecordUncheckedCreateWithoutAnimalInput>
    where?: MedicalRecordWhereInput
  }

  export type MedicalRecordUpdateToOneWithWhereWithoutAnimalInput = {
    where?: MedicalRecordWhereInput
    data: XOR<MedicalRecordUpdateWithoutAnimalInput, MedicalRecordUncheckedUpdateWithoutAnimalInput>
  }

  export type MedicalRecordUpdateWithoutAnimalInput = {
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinicalRecords?: ClinicalRecordUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinicalRecords?: ClinicalRecordUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type AnimalCreateWithoutAppointmentsInput = {
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
    petOwner: PetOwnerCreateNestedOneWithoutAnimalsInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    petOwnerId: number
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutAppointmentsInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutAppointmentsInput, AnimalUncheckedCreateWithoutAppointmentsInput>
  }

  export type PetOwnerCreateWithoutAppointmentsInput = {
    fullAddress: string
    user: UserCreateNestedOneWithoutPetOwnerInput
    animals?: AnimalCreateNestedManyWithoutPetOwnerInput
    commitmentTerms?: CommitmentTermCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    userId: number
    fullAddress: string
    animals?: AnimalUncheckedCreateNestedManyWithoutPetOwnerInput
    commitmentTerms?: CommitmentTermUncheckedCreateNestedManyWithoutPetOwnerInput
  }

  export type PetOwnerCreateOrConnectWithoutAppointmentsInput = {
    where: PetOwnerWhereUniqueInput
    create: XOR<PetOwnerCreateWithoutAppointmentsInput, PetOwnerUncheckedCreateWithoutAppointmentsInput>
  }

  export type ClinicalRecordCreateWithoutAppointmentInput = {
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
    medicalRecord: MedicalRecordCreateNestedOneWithoutClinicalRecordsInput
    veterinarian: VeterinarianCreateNestedOneWithoutClinicalRecordsInput
  }

  export type ClinicalRecordUncheckedCreateWithoutAppointmentInput = {
    id?: number
    medicalRecordId: number
    veterinarianId: number
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
  }

  export type ClinicalRecordCreateOrConnectWithoutAppointmentInput = {
    where: ClinicalRecordWhereUniqueInput
    create: XOR<ClinicalRecordCreateWithoutAppointmentInput, ClinicalRecordUncheckedCreateWithoutAppointmentInput>
  }

  export type ClinicalRecordCreateManyAppointmentInputEnvelope = {
    data: ClinicalRecordCreateManyAppointmentInput | ClinicalRecordCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type AnimalUpsertWithoutAppointmentsInput = {
    update: XOR<AnimalUpdateWithoutAppointmentsInput, AnimalUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<AnimalCreateWithoutAppointmentsInput, AnimalUncheckedCreateWithoutAppointmentsInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutAppointmentsInput, AnimalUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AnimalUpdateWithoutAppointmentsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    petOwner?: PetOwnerUpdateOneRequiredWithoutAnimalsNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutAnimalNestedInput
  }

  export type PetOwnerUpsertWithoutAppointmentsInput = {
    update: XOR<PetOwnerUpdateWithoutAppointmentsInput, PetOwnerUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PetOwnerCreateWithoutAppointmentsInput, PetOwnerUncheckedCreateWithoutAppointmentsInput>
    where?: PetOwnerWhereInput
  }

  export type PetOwnerUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PetOwnerWhereInput
    data: XOR<PetOwnerUpdateWithoutAppointmentsInput, PetOwnerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PetOwnerUpdateWithoutAppointmentsInput = {
    fullAddress?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPetOwnerNestedInput
    animals?: AnimalUpdateManyWithoutPetOwnerNestedInput
    commitmentTerms?: CommitmentTermUpdateManyWithoutPetOwnerNestedInput
  }

  export type PetOwnerUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fullAddress?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutPetOwnerNestedInput
    commitmentTerms?: CommitmentTermUncheckedUpdateManyWithoutPetOwnerNestedInput
  }

  export type ClinicalRecordUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: ClinicalRecordWhereUniqueInput
    update: XOR<ClinicalRecordUpdateWithoutAppointmentInput, ClinicalRecordUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ClinicalRecordCreateWithoutAppointmentInput, ClinicalRecordUncheckedCreateWithoutAppointmentInput>
  }

  export type ClinicalRecordUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: ClinicalRecordWhereUniqueInput
    data: XOR<ClinicalRecordUpdateWithoutAppointmentInput, ClinicalRecordUncheckedUpdateWithoutAppointmentInput>
  }

  export type ClinicalRecordUpdateManyWithWhereWithoutAppointmentInput = {
    where: ClinicalRecordScalarWhereInput
    data: XOR<ClinicalRecordUpdateManyMutationInput, ClinicalRecordUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type AnimalCreateWithoutMedicalRecordInput = {
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
    petOwner: PetOwnerCreateNestedOneWithoutAnimalsInput
    appointments?: AppointmentCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutMedicalRecordInput = {
    id?: number
    petOwnerId: number
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutMedicalRecordInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutMedicalRecordInput, AnimalUncheckedCreateWithoutMedicalRecordInput>
  }

  export type ClinicalRecordCreateWithoutMedicalRecordInput = {
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
    appointment?: AppointmentCreateNestedOneWithoutClinicalRecordsInput
    veterinarian: VeterinarianCreateNestedOneWithoutClinicalRecordsInput
  }

  export type ClinicalRecordUncheckedCreateWithoutMedicalRecordInput = {
    id?: number
    appointmentId?: number | null
    veterinarianId: number
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
  }

  export type ClinicalRecordCreateOrConnectWithoutMedicalRecordInput = {
    where: ClinicalRecordWhereUniqueInput
    create: XOR<ClinicalRecordCreateWithoutMedicalRecordInput, ClinicalRecordUncheckedCreateWithoutMedicalRecordInput>
  }

  export type ClinicalRecordCreateManyMedicalRecordInputEnvelope = {
    data: ClinicalRecordCreateManyMedicalRecordInput | ClinicalRecordCreateManyMedicalRecordInput[]
    skipDuplicates?: boolean
  }

  export type AnimalUpsertWithoutMedicalRecordInput = {
    update: XOR<AnimalUpdateWithoutMedicalRecordInput, AnimalUncheckedUpdateWithoutMedicalRecordInput>
    create: XOR<AnimalCreateWithoutMedicalRecordInput, AnimalUncheckedCreateWithoutMedicalRecordInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutMedicalRecordInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutMedicalRecordInput, AnimalUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type AnimalUpdateWithoutMedicalRecordInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    petOwner?: PetOwnerUpdateOneRequiredWithoutAnimalsNestedInput
    appointments?: AppointmentUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutMedicalRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type ClinicalRecordUpsertWithWhereUniqueWithoutMedicalRecordInput = {
    where: ClinicalRecordWhereUniqueInput
    update: XOR<ClinicalRecordUpdateWithoutMedicalRecordInput, ClinicalRecordUncheckedUpdateWithoutMedicalRecordInput>
    create: XOR<ClinicalRecordCreateWithoutMedicalRecordInput, ClinicalRecordUncheckedCreateWithoutMedicalRecordInput>
  }

  export type ClinicalRecordUpdateWithWhereUniqueWithoutMedicalRecordInput = {
    where: ClinicalRecordWhereUniqueInput
    data: XOR<ClinicalRecordUpdateWithoutMedicalRecordInput, ClinicalRecordUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type ClinicalRecordUpdateManyWithWhereWithoutMedicalRecordInput = {
    where: ClinicalRecordScalarWhereInput
    data: XOR<ClinicalRecordUpdateManyMutationInput, ClinicalRecordUncheckedUpdateManyWithoutMedicalRecordInput>
  }

  export type MedicalRecordCreateWithoutClinicalRecordsInput = {
    microchipNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    animal: AnimalCreateNestedOneWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutClinicalRecordsInput = {
    id?: number
    animalId: number
    microchipNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalRecordCreateOrConnectWithoutClinicalRecordsInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutClinicalRecordsInput, MedicalRecordUncheckedCreateWithoutClinicalRecordsInput>
  }

  export type AppointmentCreateWithoutClinicalRecordsInput = {
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    animal: AnimalCreateNestedOneWithoutAppointmentsInput
    petOwner: PetOwnerCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutClinicalRecordsInput = {
    id?: number
    animalId: number
    petOwnerId: number
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
  }

  export type AppointmentCreateOrConnectWithoutClinicalRecordsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutClinicalRecordsInput, AppointmentUncheckedCreateWithoutClinicalRecordsInput>
  }

  export type VeterinarianCreateWithoutClinicalRecordsInput = {
    crmv?: string | null
    active?: boolean
    user: UserCreateNestedOneWithoutVeterinarianInput
  }

  export type VeterinarianUncheckedCreateWithoutClinicalRecordsInput = {
    id?: number
    userId: number
    crmv?: string | null
    active?: boolean
  }

  export type VeterinarianCreateOrConnectWithoutClinicalRecordsInput = {
    where: VeterinarianWhereUniqueInput
    create: XOR<VeterinarianCreateWithoutClinicalRecordsInput, VeterinarianUncheckedCreateWithoutClinicalRecordsInput>
  }

  export type MedicalRecordUpsertWithoutClinicalRecordsInput = {
    update: XOR<MedicalRecordUpdateWithoutClinicalRecordsInput, MedicalRecordUncheckedUpdateWithoutClinicalRecordsInput>
    create: XOR<MedicalRecordCreateWithoutClinicalRecordsInput, MedicalRecordUncheckedCreateWithoutClinicalRecordsInput>
    where?: MedicalRecordWhereInput
  }

  export type MedicalRecordUpdateToOneWithWhereWithoutClinicalRecordsInput = {
    where?: MedicalRecordWhereInput
    data: XOR<MedicalRecordUpdateWithoutClinicalRecordsInput, MedicalRecordUncheckedUpdateWithoutClinicalRecordsInput>
  }

  export type MedicalRecordUpdateWithoutClinicalRecordsInput = {
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalUpdateOneRequiredWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutClinicalRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpsertWithoutClinicalRecordsInput = {
    update: XOR<AppointmentUpdateWithoutClinicalRecordsInput, AppointmentUncheckedUpdateWithoutClinicalRecordsInput>
    create: XOR<AppointmentCreateWithoutClinicalRecordsInput, AppointmentUncheckedCreateWithoutClinicalRecordsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutClinicalRecordsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutClinicalRecordsInput, AppointmentUncheckedUpdateWithoutClinicalRecordsInput>
  }

  export type AppointmentUpdateWithoutClinicalRecordsInput = {
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    animal?: AnimalUpdateOneRequiredWithoutAppointmentsNestedInput
    petOwner?: PetOwnerUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutClinicalRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeterinarianUpsertWithoutClinicalRecordsInput = {
    update: XOR<VeterinarianUpdateWithoutClinicalRecordsInput, VeterinarianUncheckedUpdateWithoutClinicalRecordsInput>
    create: XOR<VeterinarianCreateWithoutClinicalRecordsInput, VeterinarianUncheckedCreateWithoutClinicalRecordsInput>
    where?: VeterinarianWhereInput
  }

  export type VeterinarianUpdateToOneWithWhereWithoutClinicalRecordsInput = {
    where?: VeterinarianWhereInput
    data: XOR<VeterinarianUpdateWithoutClinicalRecordsInput, VeterinarianUncheckedUpdateWithoutClinicalRecordsInput>
  }

  export type VeterinarianUpdateWithoutClinicalRecordsInput = {
    crmv?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVeterinarianNestedInput
  }

  export type VeterinarianUncheckedUpdateWithoutClinicalRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    crmv?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutUserDevicesInput = {
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianCreateNestedOneWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    bulletins?: BulletinCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserDevicesInput = {
    id?: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerUncheckedCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianUncheckedCreateNestedOneWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    bulletins?: BulletinUncheckedCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserDevicesInput, UserUncheckedCreateWithoutUserDevicesInput>
  }

  export type UserUpsertWithoutUserDevicesInput = {
    update: XOR<UserUpdateWithoutUserDevicesInput, UserUncheckedUpdateWithoutUserDevicesInput>
    create: XOR<UserCreateWithoutUserDevicesInput, UserUncheckedCreateWithoutUserDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserDevicesInput, UserUncheckedUpdateWithoutUserDevicesInput>
  }

  export type UserUpdateWithoutUserDevicesInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUpdateOneWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUncheckedUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUncheckedUpdateOneWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUncheckedUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceCreateNestedManyWithoutUserInput
    bulletins?: BulletinCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerUncheckedCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianUncheckedCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    bulletins?: BulletinUncheckedCreateNestedManyWithoutCreatedByInput
    systemLogs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUncheckedUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUncheckedUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUncheckedUpdateManyWithoutCreatedByNestedInput
    systemLogs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBulletinsInput = {
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    systemLogs?: SystemLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBulletinsInput = {
    id?: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerUncheckedCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianUncheckedCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    systemLogs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBulletinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBulletinsInput, UserUncheckedCreateWithoutBulletinsInput>
  }

  export type UserUpsertWithoutBulletinsInput = {
    update: XOR<UserUpdateWithoutBulletinsInput, UserUncheckedUpdateWithoutBulletinsInput>
    create: XOR<UserCreateWithoutBulletinsInput, UserUncheckedCreateWithoutBulletinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBulletinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBulletinsInput, UserUncheckedUpdateWithoutBulletinsInput>
  }

  export type UserUpdateWithoutBulletinsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    systemLogs?: SystemLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBulletinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUncheckedUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUncheckedUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    systemLogs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSystemLogsInput = {
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    bulletins?: BulletinCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSystemLogsInput = {
    id?: number
    role: $Enums.Role
    email: string
    hashedPassword: string
    completeName: string
    cpf: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryMode?: boolean
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    petOwner?: PetOwnerUncheckedCreateNestedOneWithoutUserInput
    veterinarian?: VeterinarianUncheckedCreateNestedOneWithoutUserInput
    userDevices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    bulletins?: BulletinUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSystemLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSystemLogsInput, UserUncheckedCreateWithoutSystemLogsInput>
  }

  export type UserUpsertWithoutSystemLogsInput = {
    update: XOR<UserUpdateWithoutSystemLogsInput, UserUncheckedUpdateWithoutSystemLogsInput>
    create: XOR<UserCreateWithoutSystemLogsInput, UserUncheckedCreateWithoutSystemLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSystemLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSystemLogsInput, UserUncheckedUpdateWithoutSystemLogsInput>
  }

  export type UserUpdateWithoutSystemLogsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSystemLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    completeName?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryMode?: BoolFieldUpdateOperationsInput | boolean
    token?: TokenUncheckedUpdateOneWithoutUserNestedInput
    petOwner?: PetOwnerUncheckedUpdateOneWithoutUserNestedInput
    veterinarian?: VeterinarianUncheckedUpdateOneWithoutUserNestedInput
    userDevices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    bulletins?: BulletinUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserDeviceCreateManyUserInput = {
    id?: number
    fcmToken: string
    deviceInfo?: string | null
    createdAt?: Date | string
    lastActiveAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    read?: boolean
    channel?: $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BulletinCreateManyCreatedByInput = {
    id?: number
    title?: string | null
    message: string
    targetRoles?: $Enums.Target
    createdAt?: Date | string
  }

  export type SystemLogCreateManyUserInput = {
    id?: number
    targetTable: string
    targetId: number
    action: string
    description?: string | null
    type: $Enums.LogType
    originIp?: string | null
    createdAt?: Date | string
  }

  export type UserDeviceUpdateWithoutUserInput = {
    fcmToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDeviceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fcmToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDeviceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fcmToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActiveAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinUpdateWithoutCreatedByInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    targetRoles?: EnumTargetFieldUpdateOperationsInput | $Enums.Target
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    targetRoles?: EnumTargetFieldUpdateOperationsInput | $Enums.Target
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    targetRoles?: EnumTargetFieldUpdateOperationsInput | $Enums.Target
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUpdateWithoutUserInput = {
    targetTable?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    originIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetTable?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    originIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetTable?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    originIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalCreateManyPetOwnerInput = {
    id?: number
    name?: string | null
    species: $Enums.Species
    gender: $Enums.Gender
    estimatedAge: string
    sizeWeight: string
    breed?: string | null
    microchipNumber?: string | null
  }

  export type AppointmentCreateManyPetOwnerInput = {
    id?: number
    animalId: number
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
  }

  export type CommitmentTermCreateManyPetOwnerInput = {
    id?: number
    signatureDate?: Date | string
    documentUrl?: string | null
  }

  export type AnimalUpdateWithoutPetOwnerInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutAnimalNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateWithoutPetOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutAnimalNestedInput
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateManyWithoutPetOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    estimatedAge?: StringFieldUpdateOperationsInput | string
    sizeWeight?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    microchipNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUpdateWithoutPetOwnerInput = {
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    animal?: AnimalUpdateOneRequiredWithoutAppointmentsNestedInput
    clinicalRecords?: ClinicalRecordUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPetOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clinicalRecords?: ClinicalRecordUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutPetOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    animalId?: IntFieldUpdateOperationsInput | number
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommitmentTermUpdateWithoutPetOwnerInput = {
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommitmentTermUncheckedUpdateWithoutPetOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommitmentTermUncheckedUpdateManyWithoutPetOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClinicalRecordCreateManyVeterinarianInput = {
    id?: number
    medicalRecordId: number
    appointmentId?: number | null
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
  }

  export type ClinicalRecordUpdateWithoutVeterinarianInput = {
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    medicalRecord?: MedicalRecordUpdateOneRequiredWithoutClinicalRecordsNestedInput
    appointment?: AppointmentUpdateOneWithoutClinicalRecordsNestedInput
  }

  export type ClinicalRecordUncheckedUpdateWithoutVeterinarianInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalRecordId?: IntFieldUpdateOperationsInput | number
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClinicalRecordUncheckedUpdateManyWithoutVeterinarianInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalRecordId?: IntFieldUpdateOperationsInput | number
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyAnimalInput = {
    id?: number
    petOwnerId: number
    serviceType?: $Enums.ServiceType | null
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
  }

  export type AppointmentUpdateWithoutAnimalInput = {
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    petOwner?: PetOwnerUpdateOneRequiredWithoutAppointmentsNestedInput
    clinicalRecords?: ClinicalRecordUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    clinicalRecords?: ClinicalRecordUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    petOwnerId?: IntFieldUpdateOperationsInput | number
    serviceType?: NullableEnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClinicalRecordCreateManyAppointmentInput = {
    id?: number
    medicalRecordId: number
    veterinarianId: number
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
  }

  export type ClinicalRecordUpdateWithoutAppointmentInput = {
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    medicalRecord?: MedicalRecordUpdateOneRequiredWithoutClinicalRecordsNestedInput
    veterinarian?: VeterinarianUpdateOneRequiredWithoutClinicalRecordsNestedInput
  }

  export type ClinicalRecordUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalRecordId?: IntFieldUpdateOperationsInput | number
    veterinarianId?: IntFieldUpdateOperationsInput | number
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClinicalRecordUncheckedUpdateManyWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicalRecordId?: IntFieldUpdateOperationsInput | number
    veterinarianId?: IntFieldUpdateOperationsInput | number
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClinicalRecordCreateManyMedicalRecordInput = {
    id?: number
    appointmentId?: number | null
    veterinarianId: number
    type: $Enums.ClinicalRecordType
    treatmentDate?: Date | string
    fitForSurgery?: boolean | null
    surgeryType?: $Enums.SurgeryType | null
    observations?: string | null
    instructions?: string | null
  }

  export type ClinicalRecordUpdateWithoutMedicalRecordInput = {
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    appointment?: AppointmentUpdateOneWithoutClinicalRecordsNestedInput
    veterinarian?: VeterinarianUpdateOneRequiredWithoutClinicalRecordsNestedInput
  }

  export type ClinicalRecordUncheckedUpdateWithoutMedicalRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    veterinarianId?: IntFieldUpdateOperationsInput | number
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClinicalRecordUncheckedUpdateManyWithoutMedicalRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointmentId?: NullableIntFieldUpdateOperationsInput | number | null
    veterinarianId?: IntFieldUpdateOperationsInput | number
    type?: EnumClinicalRecordTypeFieldUpdateOperationsInput | $Enums.ClinicalRecordType
    treatmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fitForSurgery?: NullableBoolFieldUpdateOperationsInput | boolean | null
    surgeryType?: NullableEnumSurgeryTypeFieldUpdateOperationsInput | $Enums.SurgeryType | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}