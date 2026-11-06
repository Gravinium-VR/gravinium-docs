---
layout: doc
title: NetworkUtilities (Jilwer)
description: VRChat network related utilities.
---

# NetworkUtilities

`Gravinium.Jilwer.VRC.NetworkUtilities`

> VRChat network related utilities.

## Example

```csharp
NetworkUtilities.TakeOwner(targetObject);
```

## Declaration

```csharp
public static class NetworkUtilities
```

## Methods

### SetOwner

```csharp
[MethodImpl(MethodImplOptions.AggressiveInlining)]
public static void SetOwner(VRCPlayerApi player, GameObject obj)
```

| Parameter | Description                    |
| --------- | ------------------------------ |
| player    | Target player to become owner. |
| obj       | Object to take ownership of.   |

Attempts to set the owner of an object to a target player.

### TakeOwner

```csharp
[MethodImpl(MethodImplOptions.AggressiveInlining)]
public static void TakeOwner(GameObject obj)
```

| Parameter | Description                   |
| --------- | ----------------------------- |
| obj       | Object to take ownsership of. |

Attempts to set the owner of an object to the local player. This method has an
editor-only guard when the local player is null.
