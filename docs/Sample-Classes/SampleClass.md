# SampleClass

`NAMESPACEACCESSIBLE`

This is a class description.


**Group** Sample Classes


**CustomAnnotation** A Custom annotation


**Author** Cesar Parra


**See** [SampleInterface](/Sample-Interfaces/SampleInterface.md)

## Constructors
### `SampleClass()`

`NAMESPACEACCESSIBLE`

Constructs a SampleClass without any arguments.

#### Throws
|Exception|Description|
|---|---|
|`ExcName`|some exception|
#### Example
```apex
<pre>
// <strong>Example</strong>
SampleClass sampleInstance = new SampleClass();
</pre>
```

### `SampleClass(String argument)`

Constructs a SampleClass with an argument.

#### Parameters
|Param|Description|
|---|---|
|`argument`|Argument definition|
---
## Properties

### `AnotherProp` → `Decimal`

`AURAENABLED`

This is a Decimal property.

### `MyProp` → `String`

`AURAENABLED`

This is a String property.

---
## Methods
### `static sampleMethod(String argument)`

`NAMESPACEACCESSIBLE`

Executes commands based on the passed in argument.

#### Parameters
|Param|Description|
|---|---|
|`argument`|Argument to debug|
#### Return

**Type**

String

**Description**

Empty string

#### Example
```apex
<pre>
String result = SampleClass.testMethod();
System.debug(result);
```

### `static call()`

Calls the method. This methods allows you to call it.

---
## Enums
### InnerEnum

`NAMESPACEACCESSIBLE`

---
## Classes
### AnotherInnerClass

Inner class belonging to SampleClass.

#### Properties

##### `InnerProp` → `String`

Description of the inner property.

---
#### Methods
##### `innerMethod()`

Executes from the inner class.

---

### InnerClass

Inner class belonging to SampleClass.

#### Properties

##### `InnerProp` → `String`

Description of the inner property.

---
#### Methods
##### `innerMethod()`

Executes from the inner class.

---

---
