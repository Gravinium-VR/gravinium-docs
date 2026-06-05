---
layout: doc
title: TypeRegistry (Jilwer)
description: Runtime methods for interacting with the type registry system.
---

# TypeRegistry

`Gravinium.Jilwer.Core.TypeRegistry`

> Runtime methods for interacting with the type registry system.

## Example

```csharp
var err = TypeRegistry.Create(runtime, nameof(CustomType), out GameObject obj);
if (err != Error.None) {
    value = null;
    return err;
};
var customType = obj.GetComponent<CustomType>();
```

## Declaration

```csharp
[UdonBehaviourSyncMode(BehaviourSyncMode.None)]
public class TypeRegistry : UdonSharpBehaviour
```

## Methods

### Create

```csharp
public static Error Create(JilwerRuntime runtime, string key, out GameObject newObj)
```

| Parameter    | Description                                   |
| ------------ | --------------------------------------------- |
| runtime      | Global Jilwer runtime.                        |
| key          | Name of the class being constructed.          |
| newObj (out) | Returned GameObject with the requested class. |

The `Create` method will instantiate a new GameObject with the requested
`key`. GetComponent can then be called on the returned object giving the
desired type.

`Create` can fail, returning an [Error](./error) to be checked before using the
returned GameObject.

| Error               | Code | Description                                        |
| ------------------- | ---- | -------------------------------------------------- |
| None                | 0x00 | No error exists                                    |
| RuntimeDoesNotExist | 0x03 | The `runtime` passed in was null.                  |
| KeyValueNotFound    | 0x04 | The `key` could not resolve to a valid GameObject. |
