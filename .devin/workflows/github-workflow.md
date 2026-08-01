---
description: GitHub commit workflow with clear handoffs
---

# GitHub Commit Workflow

## Commit Message Format
Every commit should follow this format:
```
[scope]: brief description

**Intention:** What we're trying to achieve
**Changes:** What was actually changed
**Next:** What to work on next
```

## Commit Categories

### Initial Setup
- `init`: Project initialization, first commits
- `config`: Configuration changes, environment setup

### Features
- `feat`: New features, functionality additions
- `enhance`: Improvements to existing features

### Fixes
- `fix`: Bug fixes, error corrections
- `refactor`: Code restructuring without behavior change

### Documentation
- `docs`: Documentation updates, README changes
- `chore`: Maintenance tasks, dependency updates

### Styling
- `style`: CSS, styling changes, UI improvements

## Workflow Steps

1. **Before committing:**
   - Review changes with `git status`
   - Stage specific files with `git add <file>`
   - Review staged changes with `git diff --staged`

2. **Commit with intention:**
   - Use the format above
   - Be specific about what was changed and why
   - Always include the "Next" section for handoff

3. **After committing:**
   - Push to GitHub with `git push`
   - Verify on GitHub that commit message is clear

## Example Commit Messages

```
init: initial portfolio project setup

**Intention:** Set up the basic portfolio project structure with HTML, CSS, and JavaScript files
**Changes:** Created index.html, styles.css, script.js, app.js, config.js, and README.md
**Next:** Add responsive design and basic styling
```

```
feat: add navigation menu

**Intention:** Improve site navigation by adding a responsive menu
**Changes:** Added nav HTML structure, CSS styling for mobile/desktop, JavaScript toggle functionality
**Next:** Add smooth scrolling to sections
```

## Handoff Guidelines

When stopping work, always:
1. Commit all changes with clear intention
2. Include "Next" section with specific next steps
3. Push to GitHub immediately
4. Note any in-progress work in commit message

This ensures you can always pick up where you left off.
