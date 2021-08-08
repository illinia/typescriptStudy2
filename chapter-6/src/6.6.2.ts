// type visibleDialog = {id: string}
// type DestroyedDialog = {}

// type Dialog = visibleDialog | DestroyedDialog;
// function closeDialog(dialog: Dialog) {
//   if (!('id' in dialog)) {
//     return
//   }
//   setTimeout(() =>
//   removeFromDom(
//     dialog,
//     document.getElementById(dialog.id)!
//   ))
// }
// function removeFromDom(dialog: VisibleDialog, element: Element) {
//   element.parentNode!.removeChild(element)
//   delete dialog.id
// }
