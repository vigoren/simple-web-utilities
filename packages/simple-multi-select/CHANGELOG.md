# Change Log

## 1.3.1

### Patch Changes

-   e870e6f: Fixed an issue were CSS Variable declarations were getting duplicated.

## 1.3.0

### Minor Changes

-   fc7eb4f: Added a get function to return the selects ID.
-   399ac22: Added support for single selects. All selects on a page will then have a similar style reguardless of if they are single or multiple.

### Patch Changes

-   84a11bc: Added a parameter to the `InitializeAllMultiSelects` function called root. This takes a HTMLElement or Document type and will use that as the basis to search for all selects. This defaults to the document. This is useful if the scope of where to search for selects needs to be limited on a page.
-   c83b6a7: Moved the icons to a css variable. This will prevent duplicating the base64 ecoded versions in the compiled css.

## 1.2.1

### Patch Changes

-   5abfe66: Changed the icons to use the Font Awesome Free icons over the Bootstrap Icons.
-   77f5f56: Fixed an issue with the checkbox for disabled option not being the correct color.

## 1.2.0

### Minor Changes

-   305f394: Added a new HTML option called `data-ignore-label`. This option will have the multi-select not more any associated labels or create a new one.

### Patch Changes

-   a1b2231: Fixed an issue where the checkbox for options would use the wrong text color.
-   4199c39: Fixes for the options dropdown alignment, positioning and border radius.

## 1.1.0

### Minor Changes

-   4062ca4: Added a new option to selects to specify help text. Help text will appear below the multiple select box. The help text can be colored with the css variable `--simple-multi-select-help-text-color`.

### Patch Changes

-   4062ca4: Fixed a bug where the main button was concidered a submit button if used in forms.

## 1.0.0

### Major Changes

-   731b829: Release of Simple Multi-Select. Please check out the readme for all the details but below is a highlight of features:

    -   Convert a native multiple select to a multi-select that looks similar to a native select.
    -   Ability to style the select through CSS variables.
    -   Built in support for dark themes.
    -   Supports "Select All" options and disabled options.
    -   JavaScript functionality for getting selected values

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.
