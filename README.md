# To-Do-List

to-do:
- add 'are you sure' prompt to _onDeleteCat and deleteTask
- find better priority implementation than opacity and '!' priority widget
- add select/deselect on newtask form for each custom option to be used/not used

issues: 
- double clicking delete task removes the next task without deleting the element.
- must prevent users from selecting date before today - currently using inefficient while loop to fix issues
- prevent user from selecting too dark of a color, or change text color if brightness is lower than a threshold
- ui-manager.js was not intended to be such a broad script and is too hard to follow. Split into modules/refactor.

notes: for github pages - git subtree push --prefix dist origin gh-pages