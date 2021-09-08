// TODO: We should extract this to class instead

export type Optional<T> = T | undefined | null

export function optIsEmpty(
  optional: Optional<unknown>
): optional is null | undefined {
  return optional === undefined || optional === null
}

export function optIsDefined<T>(tOptional: Optional<T>): tOptional is T {
  return !optIsEmpty(tOptional)
}

export function optGet<T>(tOptional: Optional<T>): T {
  if (optIsDefined(tOptional)) {
    return tOptional
  } else {
    throw new Error("optGet data from undefined/null")
  }
}

export function optGetOrElse<U, T extends U>(
  tOptional: Optional<T>,
  tElse: U
): U {
  return optIsDefined(tOptional) ? tOptional : tElse
}

export function optOrElse<U, T extends U>(
  tOptional: Optional<T>,
  tElse: Optional<U>
): Optional<U> {
  return optIsDefined(tOptional) ? tOptional : tElse
}
