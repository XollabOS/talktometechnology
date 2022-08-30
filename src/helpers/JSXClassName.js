/**
 * Join multiple classes together and avoid the "undefined" CSS class value.
 *
 * @param classes {(string|undefined)[]} An array of JSX class names.
 * @returns {string} Joined JSX classes, with unintentional "undefined" classes removed. */
export function joinClassNames(classes) {
    return classes.filter(Boolean).join(" ");
}